'use client'

import { useState } from 'react'

export function FAQC2() {
  const [openIdx, setOpenIdx] = useState<number | null>(0)

  const faqs = [
    {
      q: 'What if something breaks after handover?',
      a: 'DEX\'s 5-year no-questions guarantee means we resolve issues in your home without challenging normal usage or wear and tear. On top of that, the 2-year AMC includes preventive inspections and priority service — so most issues are caught before they become problems.',
    },
    {
      q: 'How does DEX lock in prices?',
      a: 'LiDAR technology measures every dimension before design begins. This locks down accurate quantities of materials and labor. No guesswork. No surprises. Price changes only happen if you change the scope — and you\'ll know in writing before we proceed.',
    },
    {
      q: 'What if I need changes after design approval?',
      a: 'Changes after sign-off have a cost and timeline impact — which you\'ll know before work starts. But most changes happen during the design phase, before execution. That\'s why the sign-off step is critical.',
    },
    {
      q: 'How is DEX different from other firms?',
      a: 'Most interior firms rely on verbal promises and hope for the best. DEX puts everything in writing: the guarantee, the timeline, the quote, the materials, the coverage. Accountability isn\'t optional — it\'s built into the contract.',
    },
    {
      q: 'What is AMC and how does it work?',
      a: '2-year Annual Maintenance Coverage (AMC) provides preventive check-ins, priority service for repairs, and coverage for manufacturer defects. Preventive is cheaper than reactive — we catch issues early so they don\'t become problems.',
    },
    {
      q: 'Can I extend the guarantee beyond 5 years?',
      a: 'Yes. DEX Expand extends coverage up to 15 years for an additional cost. The longer timeline means we\'re even more confident in the work.',
    },
  ]

  return (
    <section className="py-20 md:py-24" style={{ backgroundColor: '#F7F5F2' }}>
      <div className="max-w-2xl mx-auto px-4">
        <h2 className="font-serif text-3xl md:text-4xl font-medium text-center mb-2" style={{ color: '#1C1C1C' }}>
          Frequently asked questions
        </h2>

        <div className="mt-12 space-y-2">
          {faqs.map((faq, idx) => (
            <div
              key={idx}
              className="border rounded-lg overflow-hidden"
              style={{ borderColor: '#E2E2E2' }}
            >
              <button
                onClick={() => setOpenIdx(openIdx === idx ? null : idx)}
                className="w-full flex items-center justify-between p-4 md:p-6 text-left"
                style={{
                  backgroundColor: '#FFFFFF',
                }}
              >
                <span className="font-medium text-sm md:text-base" style={{ color: '#1C1C1C' }}>
                  {faq.q}
                </span>
                <span
                  className="text-lg transition-transform"
                  style={{
                    color: '#1B4D3E',
                    transform: openIdx === idx ? 'rotate(180deg)' : 'rotate(0deg)',
                  }}
                >
                  ▼
                </span>
              </button>

              {openIdx === idx && (
                <div
                  className="px-4 md:px-6 pb-4 md:pb-6 text-sm md:text-base leading-relaxed"
                  style={{
                    backgroundColor: 'rgba(27,77,62,0.02)',
                    color: '#666666',
                  }}
                >
                  {faq.a}
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
