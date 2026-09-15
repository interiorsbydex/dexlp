'use client'

import { useState } from 'react'
import { useRouter } from 'next/navigation'

const COUNTRY_CODES = [
  { code: '+91',  label: '+91  India' },
  { code: '+1',   label: '+1   USA / Canada' },
  { code: '+44',  label: '+44  UK' },
  { code: '+971', label: '+971 UAE' },
  { code: '+65',  label: '+65  Singapore' },
  { code: '+61',  label: '+61  Australia' },
  { code: '+60',  label: '+60  Malaysia' },
  { code: '+974', label: '+974 Qatar' },
  { code: '+966', label: '+966 Saudi Arabia' },
  { code: '+973', label: '+973 Bahrain' },
  { code: '+968', label: '+968 Oman' },
  { code: '+49',  label: '+49  Germany' },
  { code: '+33',  label: '+33  France' },
  { code: '+31',  label: '+31  Netherlands' },
  { code: '+41',  label: '+41  Switzerland' },
  { code: '+46',  label: '+46  Sweden' },
  { code: '+7',   label: '+7   Russia' },
  { code: '+86',  label: '+86  China' },
  { code: '+81',  label: '+81  Japan' },
  { code: '+82',  label: '+82  South Korea' },
  { code: '+64',  label: '+64  New Zealand' },
  { code: '+27',  label: '+27  South Africa' },
]

const BUDGET_OPTIONS = ['Below ₹5 Lacs', '₹5L – ₹12L', '₹12L – ₹25L', 'Above ₹25L']

type FormData = {
  name: string
  email: string
  countryCode: string
  phone: string
  location: string
  budget: string
}

type Errors = Partial<Record<keyof FormData, string>>

export function LeadFormC4() {
  const router = useRouter()
  const [form, setForm] = useState<FormData>({
    name: '',
    email: '',
    countryCode: '+91',
    phone: '',
    location: 'Chennai',
    budget: '',
  })
  const [errors, setErrors] = useState<Errors>({})
  const [submitting, setSubmitting] = useState(false)

  const validate = (): boolean => {
    const e: Errors = {}
    if (!form.name.trim()) e.name = 'Please enter your full name.'
    if (!form.email.trim() || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(form.email))
      e.email = 'Enter a valid email address.'
    if (!form.phone.trim() || form.phone.length < 10)
      e.phone = 'Enter a valid 10-digit number.'
    if (!form.budget) e.budget = 'Please select an investment range.'
    setErrors(e)
    return Object.keys(e).length === 0
  }

  const handlePhoneChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const digits = e.target.value.replace(/\D/g, '').slice(0, 10)
    setForm(prev => ({ ...prev, phone: digits }))
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    if (!validate()) return
    setSubmitting(true)

    try {
      const res = await fetch('/api/submit', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          name: form.name,
          email: form.email,
          phone: `${form.countryCode} ${form.phone}`,
          budget: form.budget,
          location: form.location,
          source: 'lp4-hero',
        }),
      })
      if (!res.ok) {
        console.error('[lead-form-c4] Submission failed:', res.statusText)
      }
    } catch (err) {
      console.error('[lead-form-c4] Network error:', err)
    } finally {
      if (typeof window !== 'undefined') {
        ;(window as any).dataLayer = (window as any).dataLayer || []
        ;(window as any).dataLayer.push({
          event: 'form_submission',
          form_source: 'lp4-hero',
          form_budget: form.budget,
          form_location: form.location,
        })
      }
      router.push('/thank-you')
    }
  }

  const inputBase = 'w-full px-4 py-3 border rounded focus:outline-none transition text-sm'
  const inputStyle = { borderColor: '#DEDEDE', color: '#111111' }
  const inputFocus = {
    onFocus: (e: React.FocusEvent<HTMLInputElement | HTMLSelectElement>) => (e.target.style.borderColor = '#2B2B2B'),
    onBlur:  (e: React.FocusEvent<HTMLInputElement | HTMLSelectElement>) => (e.target.style.borderColor = '#DEDEDE'),
  }
  const labelBase = 'block text-[10.5px] font-medium tracking-widest uppercase mb-1.5 text-[#3D3B38]'

  return (
    <form onSubmit={handleSubmit} noValidate className="space-y-4">

      {/* Full Name */}
      <div>
        <label className={labelBase}>Full Name *</label>
        <input
          type="text"
          placeholder="Eg. Rajesh Kumar"
          autoComplete="name"
          value={form.name}
          onChange={e => setForm(p => ({ ...p, name: e.target.value }))}
          className={inputBase}
          style={{ ...inputStyle, borderColor: errors.name ? '#C4622D' : '#DEDEDE' }}
          {...inputFocus}
        />
        {errors.name && <p className="text-[11px] mt-1" style={{ color: '#C4622D' }}>{errors.name}</p>}
      </div>

      {/* Email */}
      <div>
        <label className={labelBase}>Email Address *</label>
        <input
          type="email"
          placeholder="your@email.com"
          autoComplete="email"
          value={form.email}
          onChange={e => setForm(p => ({ ...p, email: e.target.value }))}
          className={inputBase}
          style={{ ...inputStyle, borderColor: errors.email ? '#C4622D' : '#DEDEDE' }}
          {...inputFocus}
        />
        {errors.email && <p className="text-[11px] mt-1" style={{ color: '#C4622D' }}>{errors.email}</p>}
      </div>

      {/* Phone — country code + number */}
      <div>
        <label className={labelBase}>Phone Number *</label>
        <div className="flex flex-col sm:flex-row gap-2">
          <select
            value={form.countryCode}
            onChange={e => setForm(p => ({ ...p, countryCode: e.target.value }))}
            className="w-full sm:w-36 px-3 py-3 border rounded focus:outline-none transition text-sm"
            style={{ borderColor: '#DEDEDE', color: '#111111' }}
            {...inputFocus}
          >
            {COUNTRY_CODES.map(c => (
              <option key={c.code} value={c.code}>{c.label}</option>
            ))}
          </select>
          <input
            type="tel"
            placeholder="98765 43210"
            inputMode="numeric"
            maxLength={10}
            value={form.phone}
            onChange={handlePhoneChange}
            className={`${inputBase} flex-1`}
            style={{ ...inputStyle, borderColor: errors.phone ? '#C4622D' : '#DEDEDE' }}
            {...inputFocus}
          />
        </div>
        {errors.phone && <p className="text-[11px] mt-1" style={{ color: '#C4622D' }}>{errors.phone}</p>}
      </div>

      {/* Service Location */}
      <div>
        <label className={labelBase}>Service Location *</label>
        <select
          value={form.location}
          onChange={e => setForm(p => ({ ...p, location: e.target.value }))}
          className={inputBase}
          style={{ ...inputStyle }}
          {...inputFocus}
        >
          <option value="Chennai">Chennai</option>
        </select>
      </div>

      {/* Investment Range — tile buttons */}
      <div>
        <label className={labelBase}>Investment Range *</label>
        <div className="grid grid-cols-2 gap-2">
          {BUDGET_OPTIONS.map(opt => (
            <button
              key={opt}
              type="button"
              onClick={() => setForm(p => ({ ...p, budget: opt }))}
              className="py-2.5 px-3 text-xs text-center transition-all duration-150 rounded"
              style={{
                border: `1px solid ${form.budget === opt ? '#BFA07A' : '#DEDEDE'}`,
                background: form.budget === opt ? '#BFA07A' : '#FAFAF8',
                color: form.budget === opt ? '#111111' : '#555555',
                fontWeight: form.budget === opt ? 600 : 400,
              }}
            >
              {opt}
            </button>
          ))}
        </div>
        {errors.budget && <p className="text-[11px] mt-1" style={{ color: '#C4622D' }}>{errors.budget}</p>}
      </div>

      {/* Submit */}
      <button
        type="submit"
        disabled={submitting}
        className="w-full py-3.5 text-xs font-medium tracking-widest uppercase text-white transition hover:opacity-90 rounded"
        style={{ background: submitting ? '#888' : '#111111', letterSpacing: '0.1em' }}
      >
        {submitting ? 'Submitting...' : 'Book My Free Consultation →'}
      </button>

      <p className="text-center text-[10.5px]" style={{ color: '#999' }}>
        No spam. No sales pressure. Just a genuine conversation.
      </p>
    </form>
  )
}
