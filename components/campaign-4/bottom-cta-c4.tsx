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

export function BottomCtaC4() {
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
          source: 'lp4-bottom',
        }),
      })
      if (!res.ok) {
        console.error('[bottom-cta-c4] Submission failed:', res.statusText)
      }
    } catch (err) {
      console.error('[bottom-cta-c4] Network error:', err)
    } finally {
      if (typeof window !== 'undefined') {
        ;(window as any).dataLayer = (window as any).dataLayer || []
        ;(window as any).dataLayer.push({
          event: 'form_submission',
          form_source: 'lp4-bottom',
          form_budget: form.budget,
          form_location: form.location,
        })
      }
      router.push('/thank-you')
    }
  }

  const inputBase = 'w-full px-4 py-3 border rounded focus:outline-none transition text-sm'
  const inputStyle = { borderColor: '#3A3A3A', color: '#FFFFFF', background: '#1E1E1E' }
  const focusHandlers = {
    onFocus: (e: React.FocusEvent<HTMLInputElement | HTMLSelectElement>) => (e.target.style.borderColor = '#BFA07A'),
    onBlur:  (e: React.FocusEvent<HTMLInputElement | HTMLSelectElement>) => (e.target.style.borderColor = '#3A3A3A'),
  }
  const labelBase = 'block text-[10.5px] font-medium tracking-widest uppercase mb-1.5 text-[#9E9E9E]'

  return (
    <section className="py-20 md:py-24" style={{ background: '#111111' }}>
      <div className="max-w-4xl mx-auto px-6">
        <h2
          className="text-4xl md:text-5xl font-serif text-center mb-6 text-white"
          style={{ fontFamily: '"Cormorant Garamond", serif', fontWeight: 600, letterSpacing: '0.02em' }}
        >
          Comparing Interior Designers in Chennai? Talk to DeX First.
        </h2>

        <p
          className="text-center text-lg mb-12"
          style={{ color: 'rgba(255,255,255,0.65)', lineHeight: 1.65 }}
        >
          Bring your brief, whether it&apos;s for a modular kitchen, a 2BHK, a 3BHK, or a full home. We&apos;ll show you our process, materials, and guarantee, in person at our experience centre or over a call.
        </p>

        {/* Form */}
        <form
          onSubmit={handleSubmit}
          noValidate
          className="rounded-lg p-8 max-w-md mx-auto space-y-4"
          style={{ background: '#1A1A1A', border: '1px solid #333333' }}
        >
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
              style={{ ...inputStyle, borderColor: errors.name ? '#C4622D' : '#3A3A3A' }}
              {...focusHandlers}
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
              style={{ ...inputStyle, borderColor: errors.email ? '#C4622D' : '#3A3A3A' }}
              {...focusHandlers}
            />
            {errors.email && <p className="text-[11px] mt-1" style={{ color: '#C4622D' }}>{errors.email}</p>}
          </div>

          {/* Phone */}
          <div>
            <label className={labelBase}>Phone Number *</label>
            <div className="flex flex-col sm:flex-row gap-2">
              <select
                value={form.countryCode}
                onChange={e => setForm(p => ({ ...p, countryCode: e.target.value }))}
                className="w-full sm:w-36 px-2 py-3 border rounded focus:outline-none transition text-sm"
                style={{ borderColor: '#3A3A3A', color: '#FFFFFF', background: '#1E1E1E' }}
                {...focusHandlers}
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
                style={{ ...inputStyle, borderColor: errors.phone ? '#C4622D' : '#3A3A3A' }}
                {...focusHandlers}
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
              {...focusHandlers}
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
                    border: `1px solid ${form.budget === opt ? '#BFA07A' : '#3A3A3A'}`,
                    background: form.budget === opt ? '#BFA07A' : '#222222',
                    color: form.budget === opt ? '#111111' : '#AAAAAA',
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
            className="w-full py-3.5 text-xs font-medium tracking-widest uppercase transition hover:opacity-90 rounded"
            style={{ background: submitting ? '#888' : '#BFA07A', color: '#111111', letterSpacing: '0.1em' }}
          >
            {submitting ? 'Submitting...' : 'Book My Free Consultation →'}
          </button>

          <p className="text-center text-[10.5px]" style={{ color: '#666' }}>
            No spam. No sales pressure. Just a genuine conversation.
          </p>
        </form>
      </div>
    </section>
  )
}
