export function HowItWorksC2() {
  const steps = [
    {
      number: '1',
      title: 'Free consultation',
      desc: 'Every requirement documented. Nothing assumed, nothing left to interpretation.',
    },
    {
      number: '2',
      title: 'Design + sign-off',
      desc: 'Full design, itemised quote, and material specs. Execution starts only after you approve — in writing.',
    },
    {
      number: '3',
      title: 'Execution + 15-year warranty',
      desc: 'Delivered within 35 days* from design confirmation. Snagged. Covered for 15 years — free replacement for the first 5. No T&C applied. Your 2-year AMC begins immediately.',
    },
  ]

  return (
    <section className="py-20 md:py-24" style={{ backgroundColor: '#FFFFFF' }}>
      <div className="max-w-2xl mx-auto px-4">
        <h2 className="font-serif text-3xl md:text-4xl font-medium text-center mb-3" style={{ color: '#1C1C1C' }}>
          A process you can count on.
        </h2>
        <p className="text-center text-sm md:text-base mb-12" style={{ color: '#666666' }}>
          Every decision documented. Execution starts only after you approve.
        </p>

        <div className="space-y-8">
          {steps.map((step, idx) => (
            <div key={idx} className="relative">
              {/* Connector line */}
              {idx < steps.length - 1 && (
                <div
                  className="absolute left-6 top-12 w-0.5 h-20"
                  style={{
                    backgroundColor: '#E2E2E2',
                    borderLeft: '2px dashed #E2E2E2',
                  }}
                />
              )}

              <div className="flex gap-6">
                {/* Number Circle */}
                <div
                  className="flex-shrink-0 w-12 h-12 rounded-full flex items-center justify-center font-serif font-medium text-white"
                  style={{ backgroundColor: '#1B4D3E' }}
                >
                  {step.number}
                </div>

                {/* Content */}
                <div className="pt-1">
                  <h3 className="text-base md:text-lg font-medium mb-2" style={{ color: '#1C1C1C' }}>
                    {step.title}
                  </h3>
                  <p className="text-sm md:text-base leading-relaxed" style={{ color: '#666666' }}>
                    {step.desc}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
