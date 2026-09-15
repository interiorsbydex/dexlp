'use client'

import { useState } from 'react'

const FAQS = [
  {
    q: 'How long does a full home interior take?',
    a: 'DEX delivers from 35 days, significantly faster than the industry average of ~45 days. This is achieved through early design lock-in, LiDAR-precise measurements, and controlled factory manufacturing, not by cutting corners.',
  },
  {
    q: 'What does the 5-year guarantee actually cover?',
    a: 'For the first five years after handover, DEX resolves issues in your home without questioning normal usage or wear and tear. Valid as long as the unit hasn\'t been modified and the primary owner remains the same.',
  },
  {
    q: "What's included in the 2-year AMC?",
    a: 'Preventive inspections, alignment and adjustment of shutters and drawers, early detection of potential issues, and priority service coordination, for two years after handover.',
  },
  {
    q: 'Are there any hidden costs?',
    a: 'No. Every cost is itemised and signed off before execution begins. LiDAR scanning means measurements are accurate from day one, no surprise cost changes mid-project.',
  },
  {
    q: 'Do you work on apartments and villas?',
    a: 'Yes. DEX handles apartments, villas, and premium residences across Chennai. Each project is designed around your specific layout and lifestyle.',
  },
  {
    q: 'Can I visit your experience centre first?',
    a: 'Absolutely. Our experience centre in Perungudi lets you see actual materials, finishes, and modular setups, not renders. No commitments required. Call us to schedule a visit.',
  },
]

function FaqItem({ q, a }: { q: string; a: string }) {
  const [open, setOpen] = useState(false)

  return (
    <div style={{ borderBottom: '1px solid #E8E2DC' }}>
      <button
        type="button"
        onClick={() => setOpen(prev => !prev)}
        className="w-full flex items-center justify-between py-5 text-left gap-4 cursor-pointer"
        aria-expanded={open}
      >
        <span className="text-[15px] font-medium leading-snug" style={{ color: '#1A1A18' }}>
          {q}
        </span>
        <span
          className="flex-shrink-0 w-6 h-6 flex items-center justify-center text-lg leading-none transition-transform duration-200"
          style={{
            color: '#C4622D',
            transform: open ? 'rotate(45deg)' : 'rotate(0deg)',
          }}
          aria-hidden="true"
        >
          +
        </span>
      </button>

      <div
        className="overflow-hidden transition-all duration-300"
        style={{ maxHeight: open ? '300px' : '0px', opacity: open ? 1 : 0 }}
      >
        <p
          className="text-sm leading-[1.75] pb-5"
          style={{ color: '#6B6B6B', fontWeight: 300 }}
        >
          {a}
        </p>
      </div>
    </div>
  )
}

export function FAQ() {
  return (
    <section
      className="py-20 lg:py-24"
      style={{ background: '#F5EFE6', borderTop: '1px solid #E8E2DC' }}
    >
      <div className="max-w-[760px] mx-auto px-6 lg:px-0">
        {/* Header */}
        <div className="text-center mb-12">
          <p
            className="flex items-center justify-center gap-2.5 text-[10.5px] font-medium tracking-[0.2em] uppercase mb-4"
            style={{ color: '#C4622D' }}
          >
            <span className="w-7 h-px inline-block" style={{ background: '#C4622D' }} />
            Common Questions
            <span className="w-7 h-px inline-block" style={{ background: '#C4622D' }} />
          </p>
          <h2
            className="font-serif font-normal"
            style={{ fontSize: 'clamp(28px, 3vw, 36px)', color: '#1A1A18' }}
          >
            Common questions
          </h2>
        </div>

        {/* Accordion */}
        <div style={{ borderTop: '1px solid #E8E2DC' }}>
          {FAQS.map(faq => (
            <FaqItem key={faq.q} q={faq.q} a={faq.a} />
          ))}
        </div>
      </div>
    </section>
  )
}
