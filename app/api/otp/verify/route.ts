import { createHmac, timingSafeEqual } from 'node:crypto'

import { NextRequest, NextResponse } from 'next/server'

export const runtime = 'nodejs'

const OTP_COOKIE = 'lead_otp_challenge'
const VERIFIED_COOKIE = 'lead_phone_verified'
const VERIFIED_EXPIRY_SECONDS = 10 * 60
const INDIAN_MOBILE = /^\+91[6-9]\d{9}$/

type OtpChallenge = {
  phone: string
  expiresAt: number
  digest: string
}

function readChallenge(value: string): OtpChallenge | null {
  try {
    const parsed = JSON.parse(Buffer.from(value, 'base64url').toString('utf8')) as Partial<OtpChallenge>

    if (
      typeof parsed.phone !== 'string' ||
      typeof parsed.expiresAt !== 'number' ||
      typeof parsed.digest !== 'string'
    ) {
      return null
    }

    return parsed as OtpChallenge
  } catch {
    return null
  }
}

function safeEqual(left: string, right: string) {
  const leftBuffer = Buffer.from(left)
  const rightBuffer = Buffer.from(right)

  return leftBuffer.length === rightBuffer.length && timingSafeEqual(leftBuffer, rightBuffer)
}

function createVerifiedCookie(phone: string, expiresAt: number, secret: string) {
  const signature = createHmac('sha256', secret)
    .update(`${phone}:${expiresAt}:verified`)
    .digest('base64url')

  return Buffer.from(JSON.stringify({ phone, expiresAt, signature })).toString('base64url')
}

export async function POST(request: NextRequest) {
  try {
    const { phone, code } = (await request.json()) as { phone?: string; code?: string }

    if (!phone || !INDIAN_MOBILE.test(phone) || !code || !/^\d{6}$/.test(code)) {
      return NextResponse.json({ verified: false, error: 'Invalid phone number or OTP.' }, { status: 400 })
    }

    const otpSecret = process.env.OTP_SECRET
    const challengeValue = request.cookies.get(OTP_COOKIE)?.value

    if (!otpSecret || !challengeValue) {
      return NextResponse.json({ verified: false, error: 'OTP expired. Please request a new OTP.' }, { status: 400 })
    }

    const challenge = readChallenge(challengeValue)

    if (!challenge || challenge.phone !== phone || challenge.expiresAt < Date.now()) {
      const response = NextResponse.json(
        { verified: false, error: 'OTP expired. Please request a new OTP.' },
        { status: 400 },
      )
      response.cookies.delete(OTP_COOKIE)
      return response
    }

    const candidateDigest = createHmac('sha256', otpSecret)
      .update(`${phone}:${code}:${challenge.expiresAt}`)
      .digest('base64url')

    if (!safeEqual(candidateDigest, challenge.digest)) {
      return NextResponse.json({ verified: false, error: 'Incorrect OTP.' }, { status: 400 })
    }

    const verifiedExpiresAt = Date.now() + VERIFIED_EXPIRY_SECONDS * 1000
    const response = NextResponse.json({ verified: true })

    response.cookies.delete(OTP_COOKIE)
    response.cookies.set({
      name: VERIFIED_COOKIE,
      value: createVerifiedCookie(phone, verifiedExpiresAt, otpSecret),
      httpOnly: true,
      secure: process.env.NODE_ENV === 'production',
      sameSite: 'strict',
      path: '/',
      maxAge: VERIFIED_EXPIRY_SECONDS,
    })

    return response
  } catch (error) {
    console.error('[otp/verify] Failed:', error)
    return NextResponse.json({ verified: false, error: 'Unable to verify OTP.' }, { status: 500 })
  }
}
