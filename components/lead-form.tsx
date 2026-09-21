'use client'

import { useEffect, useState } from 'react'
import { useRouter } from 'next/navigation'

import { submitLead } from '@/lib/submit-lead'

type FormData = {
  name: string
  email: string
  phone: string
  budget: string
  location: string
}

type LeadFormProps = {
  dark?: boolean
  source?: string
}

const RESEND_SECONDS = 30

export function LeadForm({ dark = false, source = 'lp1-hero' }: LeadFormProps) {
  const router = useRouter()
  const [form, setForm] = useState<FormData>({
    name: '',
    email: '',
    phone: '',
    budget: '',
    location: 'Chennai',
  })
  const [submitted, setSubmitted] = useState(false)
  const [submitting, setSubmitting] = useState(false)
  const [submissionError, setSubmissionError] = useState('')
  const [errors, setErrors] = useState<Partial<FormData>>({})

  const [otp, setOtp] = useState('')
  const [otpSent, setOtpSent] = useState(false)
  const [otpVerified, setOtpVerified] = useState(false)
  const [otpLoading, setOtpLoading] = useState(false)
  const [otpError, setOtpError] = useState('')
  const [otpMessage, setOtpMessage] = useState('')
  const [resendSeconds, setResendSeconds] = useState(0)

  useEffect(() => {
    if (resendSeconds <= 0) return

    const timer = window.setInterval(() => {
      setResendSeconds(current => Math.max(0, current - 1))
    }, 1000)

    return () => window.clearInterval(timer)
  }, [resendSeconds])

  const validatePhone = () => /^\d{10}$/.test(form.phone)

  const validate = (): boolean => {
    const nextErrors: Partial<FormData> = {}

    if (!form.name.trim()) nextErrors.name = 'Please enter your name.'
    if (!form.email.trim() || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(form.email)) {
      nextErrors.email = 'Enter a valid email address.'
    }
    if (!validatePhone()) nextErrors.phone = 'Enter a valid 10-digit number.'
    if (!form.budget) nextErrors.budget = 'Please select an investment range.'
    if (!otpVerified) setOtpError('Please verify your phone number before submitting.')

    setErrors(nextErrors)
    return Object.keys(nextErrors).length === 0 && otpVerified
  }

  const handlePhoneChange = (value: string) => {
    const phone = value.replace(/\D/g, '').slice(0, 10)

    setForm(current => ({ ...current, phone }))
    setErrors(current => ({ ...current, phone: undefined }))
    setOtp('')
    setOtpSent(false)
    setOtpVerified(false)
    setOtpError('')
    setOtpMessage('')
    setResendSeconds(0)
  }

  const sendOtp = async () => {
    setOtpError('')
    setOtpMessage('')

    if (!validatePhone()) {
      setErrors(current => ({ ...current, phone: 'Enter a valid 10-digit number.' }))
      return
    }

    setOtpLoading(true)

    try {
      const response = await fetch('/api/otp/send', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ phone: `+91${form.phone}` }),
      })
      const result = await response.json().catch(() => ({}))

      if (!response.ok) {
        throw new Error(result.error || 'Unable to send OTP. Please try again.')
      }

      setOtpSent(true)
      setOtp('')
      setOtpMessage(`OTP sent to +91 ${form.phone}`)
      setResendSeconds(RESEND_SECONDS)
    } catch (error) {
      setOtpError(error instanceof Error ? error.message : 'Unable to send OTP.')
    } finally {
      setOtpLoading(false)
    }
  }

  const verifyOtp = async () => {
    setOtpError('')
    setOtpMessage('')

    if (!/^\d{6}$/.test(otp)) {
      setOtpError('Enter the 6-digit OTP.')
      return
    }

    setOtpLoading(true)

    try {
      const response = await fetch('/api/otp/verify', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ phone: `+91${form.phone}`, code: otp }),
      })
      const result = await response.json().catch(() => ({}))

      if (!response.ok || !result.verified) {
        throw new Error(result.error || 'Incorrect or expired OTP.')
      }

      setOtpVerified(true)
      setOtpMessage('Phone number verified successfully.')
    } catch (error) {
      setOtpVerified(false)
      setOtpError(error instanceof Error ? error.message : 'Unable to verify OTP.')
    } finally {
      setOtpLoading(false)
    }
  }

  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault()
    setSubmissionError('')

    if (!validate()) return

    setSubmitting(true)

    try {
      const result = await submitLead({ ...form, source })

      if (!result.success) {
        throw new Error(result.error || 'Submission failed. Please try again.')
      }

      setSubmitted(true)
      window.setTimeout(() => router.push('/thank-you'), 1000)
    } catch (error) {
      console.error('[lead-form] Submission failed:', error)
      setSubmissionError(error instanceof Error ? error.message : 'Submission failed. Please try again.')
    } finally {
      setSubmitting(false)
    }
  }

  const inputClass = `w-full px-3 py-2.5 text-sm outline-none transition-colors duration-150 ${
    dark
      ? 'bg-[#2E2E2E] text-white border-[#3A3A3A] placeholder:text-[#555]'
      : 'bg-[#FAFAF8] text-[#1A1A18] border-[#E8E2DC] placeholder:text-[#C8C0B4]'
  }`

  const labelClass = `block text-[10.5px] font-medium tracking-widest uppercase mb-1.5 ${
    dark ? 'text-[#9E9E9E]' : 'text-[#3D3B38]'
  }`

  const secondaryButtonClass = `shrink-0 px-3 py-2.5 text-[10px] font-medium tracking-wider uppercase transition-colors duration-150 ${
    dark ? 'bg-[#333] text-white' : 'bg-[#F1ECE7] text-[#3D3B38]'
  }`

  const budgetOptions = ['Below ₹5 Lacs', '₹5L – ₹12L', '₹12L – ₹25L', 'Above ₹25L']

  if (submitted) {
    return (
      <div
        className="flex flex-col items-center justify-center px-8 py-16 text-center"
        style={{
          background: dark ? '#242424' : '#FAFAF8',
          border: `1px solid ${dark ? '#3A3A3A' : '#E8E2DC'}`,
        }}
      >
        <div
          className="mb-5 flex h-14 w-14 items-center justify-center rounded-full text-xl"
          style={{ border: '1.5px solid #C4622D', color: '#C4622D' }}
        >
          ✓
        </div>
        <h3
          className="mb-3 font-serif text-2xl font-medium"
          style={{ color: dark ? '#FAFAF8' : '#1A1A18' }}
        >
          Thank You!
        </h3>
        <p className="text-sm leading-relaxed" style={{ color: '#6B6B6B' }}>
          We&apos;ve received your request.<br />Our team will reach out within 24 hours.
        </p>
      </div>
    )
  }

  return (
    <div
      className="relative w-full"
      style={{
        background: dark ? '#242424' : '#FAFAF8',
        border: `1px solid ${dark ? '#3A3A3A' : '#E8E2DC'}`,
        padding: '32px 28px',
      }}
    >
      <div className="absolute left-0 right-0 top-0 h-0.5" style={{ background: '#C4622D' }} />
      <p className="mb-3 mt-4 text-[10px] font-medium uppercase tracking-[0.18em]" style={{ color: '#C4622D' }}>
        Free Consultation
      </p>
      <h2
        className="mb-3 font-serif text-2xl font-medium leading-snug"
        style={{ color: dark ? '#FAFAF8' : '#1A1A18' }}
      >
        Get a Personalised Interior Quote
      </h2>
      <p className="mb-8 text-xs leading-relaxed" style={{ color: '#6B6B6B', fontWeight: 300 }}>
        Share your details, we&apos;ll reach out within 24 hours.
      </p>

      <form onSubmit={handleSubmit} noValidate>
        <div className="mb-4">
          <label className={labelClass}>Full Name *</label>
          <input
            type="text"
            placeholder="Eg. Rajesh Kumar"
            autoComplete="name"
            required
            value={form.name}
            onChange={event => setForm(current => ({ ...current, name: event.target.value }))}
            className={inputClass}
            style={{ border: `1px solid ${errors.name ? '#C4622D' : dark ? '#3A3A3A' : '#E8E2DC'}` }}
          />
          {errors.name && <p className="mt-1.5 text-[11px]" style={{ color: '#C4622D' }}>{errors.name}</p>}
        </div>

        <div className="mb-4">
          <label className={labelClass}>Email Address *</label>
          <input
            type="email"
            placeholder="your@email.com"
            autoComplete="email"
            required
            value={form.email}
            onChange={event => setForm(current => ({ ...current, email: event.target.value }))}
            className={inputClass}
            style={{ border: `1px solid ${errors.email ? '#C4622D' : dark ? '#3A3A3A' : '#E8E2DC'}` }}
          />
          {errors.email && <p className="mt-1.5 text-[11px]" style={{ color: '#C4622D' }}>{errors.email}</p>}
        </div>

        <div className="mb-4">
          <label className={labelClass}>Phone Number *</label>
          <div className="flex gap-2">
            <div className="relative min-w-0 flex-1">
              <span
                className="pointer-events-none absolute left-3 top-1/2 -translate-y-1/2 text-sm"
                style={{ color: dark ? '#9E9E9E' : '#6B6B6B' }}
              >
                +91
              </span>
              <input
                type="tel"
                inputMode="numeric"
                placeholder="98765 43210"
                autoComplete="tel"
                maxLength={10}
                required
                value={form.phone}
                onChange={event => handlePhoneChange(event.target.value)}
                className={`${inputClass} pl-12`}
                style={{ border: `1px solid ${errors.phone ? '#C4622D' : dark ? '#3A3A3A' : '#E8E2DC'}` }}
              />
            </div>

            {!otpVerified && (
              <button
                type="button"
                onClick={sendOtp}
                disabled={otpLoading || (otpSent && resendSeconds > 0)}
                className={`${secondaryButtonClass} disabled:cursor-not-allowed disabled:opacity-50`}
                style={{ border: `1px solid ${dark ? '#3A3A3A' : '#E8E2DC'}` }}
              >
                {otpLoading && !otpSent
                  ? 'Sending...'
                  : otpSent && resendSeconds > 0
                    ? `Resend ${resendSeconds}s`
                    : otpSent
                      ? 'Resend OTP'
                      : 'Send OTP'}
              </button>
            )}

            {otpVerified && (
              <span
                className="flex shrink-0 items-center px-3 text-[11px] font-medium"
                style={{ color: '#2E8B57', border: '1px solid #2E8B57' }}
              >
                ✓ Verified
              </span>
            )}
          </div>
          {errors.phone && <p className="mt-1.5 text-[11px]" style={{ color: '#C4622D' }}>{errors.phone}</p>}
        </div>

        {otpSent && !otpVerified && (
          <div className="mb-4">
            <label className={labelClass}>Enter OTP *</label>
            <div className="flex gap-2">
              <input
                type="text"
                inputMode="numeric"
                autoComplete="one-time-code"
                placeholder="6-digit OTP"
                maxLength={6}
                value={otp}
                onChange={event => {
                  setOtp(event.target.value.replace(/\D/g, '').slice(0, 6))
                  setOtpError('')
                }}
                className={inputClass}
                style={{ border: `1px solid ${otpError ? '#C4622D' : dark ? '#3A3A3A' : '#E8E2DC'}` }}
              />
              <button
                type="button"
                onClick={verifyOtp}
                disabled={otpLoading || otp.length !== 6}
                className="shrink-0 px-5 py-2.5 text-[10px] font-medium uppercase tracking-wider text-white disabled:cursor-not-allowed disabled:opacity-50"
                style={{ background: '#C4622D' }}
              >
                {otpLoading ? 'Checking...' : 'Verify OTP'}
              </button>
            </div>
          </div>
        )}

        {otpMessage && <p className="-mt-2 mb-4 text-[11px]" style={{ color: otpVerified ? '#2E8B57' : '#6B6B6B' }}>{otpMessage}</p>}
        {otpError && <p className="-mt-2 mb-4 text-[11px]" style={{ color: '#C4622D' }}>{otpError}</p>}

        <div className="mb-4">
          <label className={labelClass}>Service Location *</label>
          <select
            required
            value={form.location}
            onChange={event => setForm(current => ({ ...current, location: event.target.value }))}
            className={inputClass}
            style={{ border: `1px solid ${dark ? '#3A3A3A' : '#E8E2DC'}` }}
          >
            <option value="Chennai">Chennai</option>
          </select>
        </div>

        <div className="mb-6">
          <label className={labelClass}>Investment Range *</label>
          <div className="grid grid-cols-2 gap-2">
            {budgetOptions.map(option => (
              <button
                key={option}
                type="button"
                onClick={() => {
                  setForm(current => ({ ...current, budget: option }))
                  setErrors(current => ({ ...current, budget: undefined }))
                }}
                className="cursor-pointer px-3 py-2.5 text-center text-xs transition-all duration-150"
                style={{
                  border: `1px solid ${form.budget === option ? '#C4622D' : dark ? '#3A3A3A' : '#E8E2DC'}`,
                  background: form.budget === option ? '#C4622D' : dark ? '#2E2E2E' : '#FAFAF8',
                  color: form.budget === option ? '#fff' : dark ? '#9E9E9E' : '#3D3B38',
                  fontWeight: form.budget === option ? 500 : 400,
                  lineHeight: 1.3,
                }}
              >
                {option}
              </button>
            ))}
          </div>
          {errors.budget && <p className="mt-1.5 text-[11px]" style={{ color: '#C4622D' }}>{errors.budget}</p>}
        </div>

        <button
          type="submit"
          disabled={submitting || !otpVerified}
          className="w-full cursor-pointer py-3.5 text-xs font-medium uppercase tracking-widest text-white transition-colors duration-200 disabled:cursor-not-allowed disabled:opacity-50"
          style={{ background: '#C4622D', letterSpacing: '0.1em' }}
          onMouseEnter={event => {
            if (!event.currentTarget.disabled) event.currentTarget.style.background = '#A3501F'
          }}
          onMouseLeave={event => (event.currentTarget.style.background = '#C4622D')}
        >
          {submitting ? 'Submitting...' : 'Book My Free Consultation →'}
        </button>

        {submissionError && <p className="mt-2.5 text-center text-[11px]" style={{ color: '#C4622D' }}>{submissionError}</p>}
        <p className="mt-2.5 text-center text-[10.5px]" style={{ color: '#6B6B6B' }}>
          No spam. No sales pressure. Just a genuine conversation.
        </p>
      </form>
    </div>
  )
}
