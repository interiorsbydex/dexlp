const CARDS = [
  {
    title: '15-Year Warranty · Free Replacement for First 5 Years',
    description:
      'No T&C applied. Covers normal wear and tear. Most firms exclude it from day one. We don\'t.',
    icon: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" aria-hidden="true">
        <path d="M12 2.5L4 6v7c0 4.9 3.3 9 8 10 4.7-1 8-5.1 8-10V6l-8-3.5z" stroke="#2D6A4F" strokeWidth="1.5" strokeLinejoin="round"/>
        <path d="M8.5 12l2.5 2.5 4.5-4.5" stroke="#2D6A4F" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
      </svg>
    ),
  },
  {
    title: '2-year annual maintenance',
    description:
      'Preventive inspections, shutter alignment, and priority support, included.',
    icon: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" aria-hidden="true">
        <path d="M14.7 6.3a1 1 0 000 1.4l1.6 1.6a1 1 0 001.4 0l3-3a8 8 0 01-10 10l-6 6a2 2 0 01-2.8-2.8l6-6a8 8 0 0110-10l-3 3z" stroke="#2D6A4F" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
      </svg>
    ),
  },
  {
    title: 'LiDAR-based measurements',
    description:
      'Point-cloud accuracy before design starts. No surprise cost changes mid-execution.',
    icon: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" aria-hidden="true">
        <rect x="3" y="3" width="18" height="18" rx="1" stroke="#2D6A4F" strokeWidth="1.5"/>
        <path d="M3 9h18M9 3v18" stroke="#2D6A4F" strokeWidth="1.5" strokeLinecap="round"/>
        <circle cx="15.5" cy="15.5" r="2" stroke="#2D6A4F" strokeWidth="1.5"/>
      </svg>
    ),
  },
  {
    title: 'In-house factory',
    description:
      'We manufacture your interiors ourselves. Consistent quality, reliable replacements.',
    icon: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" aria-hidden="true">
        <path d="M3 21V8l5-5h8l5 5v13H3z" stroke="#2D6A4F" strokeWidth="1.5" strokeLinejoin="round"/>
        <path d="M9 21v-6h6v6" stroke="#2D6A4F" strokeWidth="1.5" strokeLinejoin="round"/>
        <path d="M9 3v5H3M15 3v5h6" stroke="#2D6A4F" strokeWidth="1.5" strokeLinejoin="round"/>
      </svg>
    ),
  },
]

export function Differentiators() {
  return (
    <section
      className="py-20 lg:py-24"
      style={{ background: '#FAFAF8', borderTop: '1px solid #E8E2DC' }}
    >
      <div className="max-w-[1200px] mx-auto px-6 lg:px-18">
        {/* Header */}
        <div className="mb-12 max-w-[600px] mx-auto text-center">
          <p
            className="flex items-center justify-center gap-2.5 text-[10.5px] font-medium tracking-[0.2em] uppercase mb-4"
            style={{ color: '#C4622D' }}
          >
            <span className="w-7 h-px inline-block" style={{ background: '#C4622D' }} />
            Our Guarantee
            <span className="w-7 h-px inline-block" style={{ background: '#C4622D' }} />
          </p>
          <h2
            className="font-serif font-normal mb-3"
            style={{ fontSize: 'clamp(26px, 2.8vw, 36px)', color: '#1A1A18' }}
          >
            {"We're accountable long after we leave."}
          </h2>
          <p className="text-[15px] leading-relaxed" style={{ color: '#6B6B6B', fontWeight: 300 }}>
            15-year warranty. Free replacement for first 5 years. No T&C applied. 2-year AMC. Because a great interior
            {"shouldn't"} need constant follow-up from your end.
          </p>
        </div>

        {/* Cards 2×2 */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          {CARDS.map(card => (
            <div
              key={card.title}
              className="p-6"
              style={{ background: '#fff', border: '1px solid #E8E2DC' }}
            >
              <div className="mb-4">{card.icon}</div>
              <h3 className="text-[16px] font-medium mb-2" style={{ color: '#1A1A18' }}>
                {card.title}
              </h3>
              <p className="text-sm leading-relaxed" style={{ color: '#6B6B6B', fontWeight: 300 }}>
                {card.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
