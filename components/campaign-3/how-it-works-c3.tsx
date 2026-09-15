export function HowItWorksC3() {
  const steps = [
    {
      number: '1',
      title: 'Free design consult',
      description: 'Share your brief, preferences, and budget. We walk through our process and guarantees.',
    },
    {
      number: '2',
      title: 'Design & approval',
      description: 'We present 3D design options. You choose. We finalize before we measure or manufacture.',
    },
    {
      number: '3',
      title: 'Execution & handover',
      description: 'In-house manufacturing, LiDAR-precision installation. Handover within 45 days* from design confirmation. 15-year warranty begins — free replacement for the first 5 years (no T&C). Two-year AMC included.',
    },
  ]

  return (
    <section
      className="py-20 md:py-24"
      style={{ background: '#FFFFFF' }}
    >
      <div className="max-w-6xl mx-auto px-6">
        <h2
          className="text-4xl md:text-5xl font-serif text-center mb-12"
          style={{
            color: '#111111',
            fontFamily: '"Cormorant Garamond", serif',
            fontWeight: 600,
            letterSpacing: '0.02em',
          }}
        >
          A structured process, start to finish.
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {steps.map((step, i) => (
            <div key={i} className="text-center">
              <div
                className="w-12 h-12 rounded-full flex items-center justify-center mx-auto mb-4 text-white font-bold text-lg"
                style={{ background: '#111111' }}
              >
                {step.number}
              </div>
              <h3
                className="text-xl font-semibold mb-3"
                style={{ color: '#111111' }}
              >
                {step.title}
              </h3>
              <p style={{ color: '#717171', lineHeight: 1.65 }}>
                {step.description}
              </p>
            </div>
          ))}
        </div>

        {/* Inline CTA */}
        <div className="text-center mt-14">
          <p className="text-base mb-4" style={{ color: '#717171' }}>
            Ready to start? The first call is free and takes 30 minutes.
          </p>
          <a
            href="#hero-form"
            className="inline-block px-8 py-3 rounded font-semibold text-sm transition hover:opacity-90"
            style={{ background: '#111111', color: '#FFFFFF' }}
          >
            Book a free design consult
          </a>
        </div>
      </div>
    </section>
  )
}
