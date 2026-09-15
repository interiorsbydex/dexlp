'use client'

const WHY_REASONS = [
  {
    title: 'End-to-End Turnkey Execution',
    body: 'We take complete ownership from design concept to site execution and final handover, no separate vendors, no coordination headaches on your end.',
    icon: (
      <svg width="28" height="28" viewBox="0 0 28 28" fill="none" aria-hidden="true">
        <rect x="2" y="2" width="24" height="24" stroke="#C4622D" strokeWidth="1.4"/>
        <path d="M7 14h14M14 7v14" stroke="#C4622D" strokeWidth="1.4"/>
      </svg>
    ),
  },
  {
    title: 'Transparent Pricing, Always',
    body: 'No inflated customisation charges, no material substitution, no last-minute escalations. You always know exactly what you are paying for.',
    icon: (
      <svg width="28" height="28" viewBox="0 0 28 28" fill="none" aria-hidden="true">
        <circle cx="14" cy="14" r="11" stroke="#C4622D" strokeWidth="1.4"/>
        <path d="M9 14l3.5 3.5 6.5-6.5" stroke="#C4622D" strokeWidth="1.4" strokeLinecap="round" strokeLinejoin="round"/>
      </svg>
    ),
  },
  {
    title: 'Only Branded Materials',
    body: 'Every modular product installed uses only certified, branded materials, no shortcuts and no substitutions mid-project without your approval.',
    icon: (
      <svg width="28" height="28" viewBox="0 0 28 28" fill="none" aria-hidden="true">
        <path d="M14 3l2 6.5H23l-5.5 4 2 6.5L14 16l-5.5 4 2-6.5L5 9.5h7z" stroke="#C4622D" strokeWidth="1.4" strokeLinejoin="round"/>
      </svg>
    ),
  },
  {
    title: '15-Year Warranty · Free Replacement for First 5 Years',
    body: 'No T&C applied. Every modular product is covered for 15 years — free replacement for the first 5 years if anything is damaged for any reason, no questions asked.',
    icon: (
      <svg width="28" height="28" viewBox="0 0 28 28" fill="none" aria-hidden="true">
        <path d="M14 3L5 7v8c0 5 3.5 9.5 9 11 5.5-1.5 9-6 9-11V7l-9-4z" stroke="#C4622D" strokeWidth="1.4" strokeLinejoin="round"/>
        <path d="M9 14l3 3 6.5-6.5" stroke="#C4622D" strokeWidth="1.4" strokeLinecap="round" strokeLinejoin="round"/>
      </svg>
    ),
  },
  {
    title: 'Experience Centre, Chennai',
    body: 'Visit us at 7/8, Murugesa Naicker Colony, Nungambakkam, Chennai — 600034. Explore real materials, finishes, and modular options. No pressure, no pushy sales, just calm, informed decision-making.',
    icon: (
      <svg width="28" height="28" viewBox="0 0 28 28" fill="none" aria-hidden="true">
        <path d="M5 10l9-5 9 5v12L14 26 5 22z" stroke="#C4622D" strokeWidth="1.4" strokeLinejoin="round"/>
        <path d="M14 5v21M5 10l9 6 9-6" stroke="#C4622D" strokeWidth="1.4"/>
      </svg>
    ),
  },
  {
    title: 'Dedicated After-Sales Team',
    body: 'Service response within 24 hours, hassle-free replacements, and long-term accountability. Our support doesn\'t stop when the project ends.',
    icon: (
      <svg width="28" height="28" viewBox="0 0 28 28" fill="none" aria-hidden="true">
        <circle cx="14" cy="10" r="4" stroke="#C4622D" strokeWidth="1.4"/>
        <path d="M7 24c0-4.4 3.1-8 7-8s7 3.6 7 8" stroke="#C4622D" strokeWidth="1.4" strokeLinecap="round"/>
      </svg>
    ),
  },
]

export function WhyUs() {
  return (
    <section
      className="py-20 lg:py-24"
      style={{ background: '#FAFAF8', borderTop: '1px solid #E8E2DC' }}
    >
      <div className="max-w-[1200px] mx-auto px-6 lg:px-18">
        <p
          className="flex items-center gap-2.5 text-[10.5px] font-medium tracking-[0.2em] uppercase mb-4"
          style={{ color: '#C4622D' }}
        >
          <span className="w-7 h-px inline-block" style={{ background: '#C4622D' }} />
          Why Interiors by DeX
        </p>
        <h2
          className="font-serif font-normal mb-14 max-w-[500px]"
          style={{ fontSize: 'clamp(28px, 3vw, 42px)', color: '#1A1A18', lineHeight: 1.13 }}
        >
          Interior Design That Feels Calm From Day One
        </h2>

        <div
          className="grid grid-cols-1 md:grid-cols-3"
          style={{ outline: '1px solid #E8E2DC', gap: '1px', background: '#E8E2DC' }}
        >
          {WHY_REASONS.map(reason => (
            <div
              key={reason.title}
              className="p-8 transition-colors duration-200"
              style={{ background: '#FAFAF8' }}
              onMouseEnter={e => (e.currentTarget.style.background = '#F5EDE7')}
              onMouseLeave={e => (e.currentTarget.style.background = '#FAFAF8')}
            >
              <div className="mb-5 opacity-90">{reason.icon}</div>
              <h3
                className="font-serif text-[19px] font-medium mb-2.5"
                style={{ color: '#1A1A18', lineHeight: 1.2 }}
              >
                {reason.title}
              </h3>
              <p className="text-[13.5px] leading-[1.75]" style={{ color: '#6B6B6B', fontWeight: 300 }}>
                {reason.body}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
