'use client'

import { useState } from 'react'
import { useRouter } from 'next/navigation'
import { submitLead } from '@/lib/submit-lead'

interface LeadFormC2Props {
  dark?: boolean
  source?: string
}

export function LeadFormC2({ dark = false, source = 'lp2-hero' }: LeadFormC2Props) {
  const router = useRouter()
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    budget: '',
    location: 'Chennai',
  })
  const [submitting, setSubmitting] = useState(false)

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    const { name, value } = e.target
    setFormData(prev => ({ ...prev, [name]: value }))
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setSubmitting(true)

    const result = await submitLead({
      name: formData.name,
      phone: formData.phone,
      budget: formData.budget,
      location: formData.location,
      source,
    })

    if (!result.success) {
      console.error('[lead-form-c2] Submission failed:', result.error)
    }

    router.push('/thank-you')
  }

  return (
    <div id="lead-form">
      <form onSubmit={handleSubmit} className="space-y-4">
        {/* Name Field */}
        <input
          type="text"
          name="name"
          placeholder="Your name"
          value={formData.name}
          onChange={handleChange}
          className="w-full h-11 px-4 text-sm border rounded"
          style={{
            borderColor: '#E2E2E2',
            backgroundColor: '#FFFFFF',
            color: '#1C1C1C',
          }}
          required
        />

        {/* Phone Field */}
        <input
          type="tel"
          name="phone"
          placeholder="+91"
          value={formData.phone}
          onChange={handleChange}
          className="w-full h-11 px-4 text-sm border rounded"
          style={{
            borderColor: '#E2E2E2',
            backgroundColor: '#FFFFFF',
            color: '#1C1C1C',
          }}
          required
        />

        {/* Investment Range */}
        <select
          name="budget"
          value={formData.budget}
          onChange={handleChange}
          className="w-full h-11 px-4 text-sm border rounded"
          style={{
            borderColor: '#E2E2E2',
            backgroundColor: '#FFFFFF',
            color: '#1C1C1C',
          }}
          required
        >
          <option value="">Select investment range</option>
          <option value="8-12L">₹8L – ₹12L</option>
          <option value="12-20L">₹12L – ₹20L</option>
          <option value="20L+">₹20L+</option>
        </select>

        {/* City Field */}
        <div>
          <select
            name="location"
            value={formData.location}
            onChange={handleChange}
            className="w-full h-11 px-4 text-sm border rounded"
            style={{
              borderColor: '#E2E2E2',
              backgroundColor: '#FFFFFF',
              color: '#1C1C1C',
            }}
            disabled
          >
            <option value="Chennai">Chennai</option>
          </select>
          <p className="text-xs mt-1" style={{ color: '#999999' }}>We currently serve Chennai only.</p>
        </div>

        {/* CTA Button */}
        <button
          type="submit"
          disabled={submitting}
          className="w-full h-12 text-sm font-medium tracking-wide text-white rounded mt-6"
          style={{ backgroundColor: submitting ? '#888' : '#1B4D3E' }}
        >
          {submitting ? 'Submitting...' : 'See how we work differently'}
        </button>

        {/* Trust Message */}
        <p className="text-center text-xs mt-4" style={{ color: '#999999', fontWeight: 300 }}>
          Our team will call you within 24 hours.
        </p>
      </form>
    </div>
  )
}
