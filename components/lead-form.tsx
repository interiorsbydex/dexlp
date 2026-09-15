'use client'

import { useState } from 'react'
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

export function LeadForm({ dark = false, source = 'lp1-hero' }: LeadFormProps) {
  const router = useRouter()
  const [form, setForm] = useState<FormData>({ name: '', email: '', phone: '', budget: '', location: 'Chennai' })
  const [submitted, setSubmitted] = useState(false)
  const [errors, setErrors] = useState<Partial<FormData>>({})

  const validate = (): boolean => {
    const e: Partial<FormData> = {}
    if (!form.name.trim()) e.name = 'Please enter your name.'
    if (!form.email.trim() || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(form.email)) e.email = 'Enter a valid email address.'
    if (!form.phone.trim() || form.phone.length < 10) e.phone = 'Enter a valid 10-digit number.'
    if (!form.budget) e.budget = 'Please select an investment range.'
    setErrors(e)
    return Object.keys(e).length === 0
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    if (!validate()) return
    
    setSubmitted(true)
    
    // Submit to Google Sheets via TinyCommand webhook
    const result = await submitLead({ ...form, source })
    
    if (!result.success) {
      console.error('[lead-form] Submission failed:', result.error)
    }
    
    // Redirect to thank you page after 1 second for UX
    setTimeout(() => {
      router.push('/thank-you')
    }, 1000)
  }

  const inputClass = `w-full px-3 py-2.5 text-sm outline-none transition-colors duration-150 ${
    dark
      ? 'bg-[#2E2E2E] text-white border-[#3A3A3A] placeholder:text-[#555]'
      : 'bg-[#FAFAF8] text-[#1A1A18] border-[#E8E2DC] placeholder:text-[#C8C0B4]'
  }`

  const labelClass = `block text-[10.5px] font-medium tracking-widest uppercase mb-1.5 ${
    dark ? 'text-[#9E9E9E]' : 'text-[#3D3B38]'
  }`

  const budgetOptions = ['Below ₹5 Lacs', '₹5L – ₹12L', '₹12L – ₹25L', 'Above ₹25L']

  if (submitted) {
    return (
      <div
        className="flex flex-col items-center justify-center text-center py-16 px-8"
        style={{
          background: dark ? '#242424' : '#FAFAF8',
          border: `1px solid ${dark ? '#3A3A3A' : '#E8E2DC'}`,
        }}
      >
        <div
          className="w-14 h-14 rounded-full flex items-center justify-center mb-5 text-xl"
          style={{ border: '1.5px solid #C4622D', color: '#C4622D' }}
        >
          ✓
        </div>
        <h3
          className="font-serif text-2xl font-medium mb-3"
          style={{ color: dark ? '#FAFAF8' : '#1A1A18' }}
        >
          Thank You!
        </h3>
        <p className="text-sm leading-relaxed" style={{ color: '#6B6B6B' }}>
          {"We've received your request."}<br />Our team will reach out within 24 hours.
        </p>
      </div>
    )
  }

  return (
    <div
      className="w-full relative"
      style={{
        background: dark ? '#242424' : '#FAFAF8',
        border: `1px solid ${dark ? '#3A3A3A' : '#E8E2DC'}`,
        padding: '32px 28px',
      }}
    >
      {/* Top accent bar */}
      <div className="absolute top-0 left-0 right-0 h-0.5" style={{ background: '#C4622D' }} />

      <p className="text-[10px] font-medium tracking-[0.18em] uppercase mb-3 mt-4" style={{ color: '#C4622D' }}>
        Free Consultation
      </p>
      <h2
        className="font-serif text-2xl font-medium leading-snug mb-3"
        style={{ color: dark ? '#FAFAF8' : '#1A1A18' }}
      >
        Get a Personalised Interior Quote
      </h2>
      <p className="text-xs leading-relaxed mb-8" style={{ color: '#6B6B6B', fontWeight: 300 }}>
        Share your details, {"we'll"} reach out within 24 hours.
      </p>

      <form onSubmit={handleSubmit} noValidate>
        {/* Name */}
        <div className="mb-4">
          <label className={labelClass}>Full Name *</label>
          <input
            type="text"
            placeholder="Eg. Rajesh Kumar"
            autoComplete="name"
            required
            value={form.name}
            onChange={e => setForm({ ...form, name: e.target.value })}
            className={inputClass}
            style={{ border: `1px solid ${errors.name ? '#C4622D' : dark ? '#3A3A3A' : '#E8E2DC'}` }}
          />
          {errors.name && <p className="text-[11px] mt-1.5" style={{ color: '#C4622D' }}>{errors.name}</p>}
        </div>

        {/* Email */}
        <div className="mb-4">
          <label className={labelClass}>Email Address *</label>
          <input
            type="email"
            placeholder="your@email.com"
            autoComplete="email"
            required
            value={form.email}
            onChange={e => setForm({ ...form, email: e.target.value })}
            className={inputClass}
            style={{ border: `1px solid ${errors.email ? '#C4622D' : dark ? '#3A3A3A' : '#E8E2DC'}` }}
          />
          {errors.email && <p className="text-[11px] mt-1.5" style={{ color: '#C4622D' }}>{errors.email}</p>}
        </div>

        {/* Phone */}
        <div className="mb-4">
          <label className={labelClass}>Phone Number *</label>
          <input
            type="tel"
            placeholder="+91 98765 43210"
            maxLength={10}
            required
            value={form.phone}
            onChange={e => setForm({ ...form, phone: e.target.value.replace(/\D/g, '').slice(0, 10) })}
            className={inputClass}
            style={{ border: `1px solid ${errors.phone ? '#C4622D' : dark ? '#3A3A3A' : '#E8E2DC'}` }}
          />
          {errors.phone && <p className="text-[11px] mt-1.5" style={{ color: '#C4622D' }}>{errors.phone}</p>}
        </div>

        {/* Location (Chennai only) */}
        <div className="mb-4">
          <label className={labelClass}>Service Location *</label>
          <select
            required
            value={form.location}
            onChange={e => setForm({ ...form, location: e.target.value })}
            className={inputClass}
            style={{ border: `1px solid ${dark ? '#3A3A3A' : '#E8E2DC'}` }}
          >
            <option value="Chennai">Chennai</option>
          </select>
        </div>

        {/* Budget */}
        <div className="mb-6">
          <label className={labelClass}>Investment Range *</label>
          <div className="grid grid-cols-2 gap-2">
            {budgetOptions.map(opt => (
              <button
                key={opt}
                type="button"
                onClick={() => setForm({ ...form, budget: opt })}
                className="py-2.5 px-3 text-xs text-center transition-all duration-150 cursor-pointer"
                style={{
                  border: `1px solid ${form.budget === opt ? '#C4622D' : dark ? '#3A3A3A' : '#E8E2DC'}`,
                  background: form.budget === opt ? '#C4622D' : dark ? '#2E2E2E' : '#FAFAF8',
                  color: form.budget === opt ? '#fff' : dark ? '#9E9E9E' : '#3D3B38',
                  fontWeight: form.budget === opt ? 500 : 400,
                  lineHeight: 1.3,
                }}
              >
                {opt}
              </button>
            ))}
          </div>
          {errors.budget && <p className="text-[11px] mt-1.5" style={{ color: '#C4622D' }}>{errors.budget}</p>}
        </div>

        <button
          type="submit"
          className="w-full py-3.5 text-xs font-medium tracking-widest uppercase text-white transition-colors duration-200 cursor-pointer"
          style={{ background: '#C4622D', letterSpacing: '0.1em' }}
          onMouseEnter={e => (e.currentTarget.style.background = '#A3501F')}
          onMouseLeave={e => (e.currentTarget.style.background = '#C4622D')}
        >
          Book My Free Consultation &rarr;
        </button>
        <p className="text-[10.5px] text-center mt-2.5" style={{ color: '#6B6B6B' }}>
          No spam. No sales pressure. Just a genuine conversation.
        </p>
      </form>
    </div>
  )
}
