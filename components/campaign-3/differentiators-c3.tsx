export function DifferentiatorsC3() {
  const cards = [
    {
      icon: '🛡️',
      title: '15-Year Warranty',
      description: 'Covers normal wear and tear across all modular work. First 5 years: free replacement guarantee with no T&C. Most companies exclude wear and tear from day one. DeX includes it.',
    },
    {
      icon: '🔧',
      title: '2-year annual maintenance',
      description: 'Preventive inspections, shutter alignment, priority service — included for 2 years post-handover.',
    },
    {
      icon: '📡',
      title: 'LiDAR-based measurements',
      description: 'Point-cloud accuracy before design is finalised. Eliminates measurement errors and mid-project cost escalation.',
    },
    {
      icon: '🏭',
      title: 'In-house manufacturing',
      description: 'We own our factory. Consistent quality, reliable part replacements, no dependency on third-party vendors.',
    },
    {
      icon: '🏡',
      title: 'Lifestyle-based designs',
      description: 'Designs built around how you actually live — not just how it looks in photos. We understand your daily routines before we draw a single line.',
    },
    {
      icon: '🪵',
      title: 'Fascia by DeX — Exclusive shutter brand',
      description: 'Our own branded shutter line. Consistent quality, unique finishes, not available anywhere else. Designed and manufactured in-house.',
    },
    {
      icon: '🎓',
      title: 'Professionally certified team',
      description: 'Every designer and architect on your project is professionally certified. No juniors handling your home unsupervised.',
    },
  ]

  return (
    <section
      className="py-20 md:py-24"
      style={{ background: '#F2F0EB' }}
    >
      <div className="max-w-6xl mx-auto px-6">
        <h2
          className="text-4xl md:text-5xl font-serif text-center mb-3"
          style={{
            color: '#111111',
            fontFamily: '"Cormorant Garamond", serif',
            fontWeight: 600,
            letterSpacing: '0.02em',
          }}
        >
          What DeX actually delivers
        </h2>
        <p
          className="text-center mb-12 text-lg"
          style={{ color: '#717171' }}
        >
          Not marketing language. Structural commitments.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {cards.map((card, i) => (
            <div
              key={i}
              className="bg-white border rounded-lg p-7"
              style={{ borderColor: '#DEDEDE' }}
            >
              <div className="text-3xl mb-3">{card.icon}</div>
              <h3
                className="text-lg font-semibold mb-3"
                style={{ color: '#111111', fontWeight: 600 }}
              >
                {card.title}
              </h3>
              <p style={{ color: '#717171', lineHeight: 1.65 }}>
                {card.description}
              </p>
            </div>
          ))}
        </div>

        {/* Inline CTA after differentiators */}
        <div className="text-center mt-14">
          <p className="text-base mb-4" style={{ color: '#555555' }}>
            Want to see these commitments in writing before you decide?
          </p>
          <a
            href="#hero-form"
            className="inline-block px-8 py-3 rounded font-semibold text-sm transition hover:opacity-90"
            style={{ background: '#BFA07A', color: '#111111' }}
          >
            Book a free design consult
          </a>
        </div>
      </div>
    </section>
  )
}
