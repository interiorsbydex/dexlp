import { createHmac, randomInt } from 'node:crypto'

import { NextResponse } from 'next/server'

export const runtime = 'nodejs'

const OTP_COOKIE = 'lead_otp_challenge'
const OTP_EXPIRY_SECONDS = 5 * 60
const INDIAN_MOBILE = /^\+91[6-9]\d{9}$/

type Msg91Response = {
  type?: string
  message?: string
  request_id?: string
}

function encodeChallenge(phone: string, otp: string, expiresAt: number, secret: string) {
  const digest = createHmac('sha256', secret)
    .update(`${phone}:${otp}:${expiresAt}`)
    .digest('base64url')

  return Buffer.from(JSON.stringify({ phone, expiresAt, digest })).toString('base64url')
}

export async function POST(request: Request) {
  try {
    const { phone } = (await request.json()) as { phone?: string }

    if (!phone || !INDIAN_MOBILE.test(phone)) {
      return NextResponse.json({ error: 'Enter a valid Indian mobile number.' }, { status: 400 })
    }

    const authKey = process.env.MSG91_AUTH_KEY
    const templateId = process.env.MSG91_TEMPLATE_ID
    const otpSecret = process.env.OTP_SECRET

    if (!authKey || !templateId || !otpSecret) {
      console.error('[otp/send] Missing MSG91_AUTH_KEY, MSG91_TEMPLATE_ID, or OTP_SECRET')
      return NextResponse.json({ error: 'OTP service is not configured.' }, { status: 500 })
    }

    const otp = randomInt(100000, 1000000).toString()
    const expiresAt = Date.now() + OTP_EXPIRY_SECONDS * 1000
    const mobile = phone.replace(/^\+/, '')

    const msg91Response = await fetch('https://control.msg91.com/api/v5/flow', {
      method: 'POST',
      headers: {
        accept: 'application/json',
        authkey: authKey,
        'content-type': 'application/json',
      },
      body: JSON.stringify({
        template_id: templateId,
        short_url: '0',
        realTimeResponse: '1',
        recipients: [
          {
            mobiles: mobile,
            var1: otp,
          },
        ],
      }),
      cache: 'no-store',
    })

    const result = (await msg91Response.json().catch(() => ({}))) as Msg91Response

    if (!msg91Response.ok || result.type === 'error') {
      console.error('[otp/send] MSG91 rejected the request:', result)
      return NextResponse.json({ error: 'Unable to send OTP. Please try again.' }, { status: 502 })
    }

    const response = NextResponse.json({ success: true })

    response.cookies.set({
      name: OTP_COOKIE,
      value: encodeChallenge(phone, otp, expiresAt, otpSecret),
      httpOnly: true,
      secure: process.env.NODE_ENV === 'production',
      sameSite: 'strict',
      path: '/',
      maxAge: OTP_EXPIRY_SECONDS,
    })

    return response
  } catch (error) {
    console.error('[otp/send] Failed:', error)
    return NextResponse.json({ error: 'Unable to send OTP. Please try again.' }, { status: 500 })
  }
}
