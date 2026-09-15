const STEPS = [
  {
    number: '01',
    title: 'Free Consultation',
    days: 'Day 1–3',
    description:
      'We understand your space, lifestyle, and budget. No commitments, no pressure.',
  },
  {
    number: '02',
    title: 'Design + Approval',
    days: 'Day 4–10',
    description:
      'Personalised design with full material specs and a transparent, itemised quote. You approve before anything starts.',
  },
  {
    number: '03',
    title: 'Execution + Handover',
    days: 'Day 11–35',
    description:
      'Factory manufacturing, on-site installation, and a 10-day live-use snag period — before your 15-year warranty begins. Free replacement guaranteed for the first 5 years. No T&C applied.',
  },
]

export function HowItWorks() {
  return (
    <section className="py-20 lg:py-24" style={{ background: '#F5EDE7' }}>
      <div className="max-w-[1200px] mx-auto px-6 lg:px-18">
        {/* Header */}
        <div className="text-center mb-14">
          <p
            className="flex items-center justify-center gap-2.5 text-[10.5px] font-medium tracking-[0.2em] uppercase mb-4"
            style={{ color: '#C4622D' }}
          >
            <span className="w-7 h-px inline-block" style={{ background: '#C4622D' }} />
            The Process
            <span className="w-7 h-px inline-block" style={{ background: '#C4622D' }} />
          </p>
          <h2
            className="font-serif font-normal"
            style={{ fontSize: 'clamp(28px, 3vw, 38px)', color: '#1A1A18' }}
          >
            From design confirmation to keys in hand — 35 days.*
          </h2>
        </div>

        {/* Steps */}
        <div className="relative grid grid-cols-1 md:grid-cols-3 gap-10 md:gap-8">
          {/* Dashed connector line — desktop only */}
          <div
            className="absolute top-[18px] left-[16.67%] right-[16.67%] hidden md:block"
            style={{ borderTop: '1.5px dashed #C4622D', opacity: 0.35 }}
          />

          {STEPS.map(step => (
            <div key={step.number} className="flex flex-col items-start">
              {/* Number circle */}
              <div
                className="w-9 h-9 rounded-full flex items-center justify-center text-xs font-medium text-white mb-5 relative z-10"
                style={{ background: '#C4622D' }}
              >
                {step.number}
              </div>

              <h3 className="text-[17px] font-medium mb-1" style={{ color: '#1A1A18' }}>
                {step.title}
              </h3>
              <p className="text-[12px] font-medium tracking-wide mb-3" style={{ color: '#C4622D' }}>
                {step.days}
              </p>
              <p className="text-sm leading-relaxed" style={{ color: '#6B6B6B', fontWeight: 300 }}>
                {step.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
