export function ComparisonBlockC2() {
  const pairs = [
    {
      wrong: 'Prices increase after you\'ve signed',
      right: 'LiDAR measurements lock dimensions before design starts — no surprise cost changes',
    },
    {
      wrong: 'Delays with no explanation',
      right: '35-day execution timeline, confirmed in writing before work begins',
    },
    {
      wrong: 'Issues after handover get ignored',
      right: '5-year guarantee + 2-year AMC in your contract — not a verbal promise',
    },
    {
      wrong: 'Warranty excludes normal wear and tear',
      right: 'DEX covers wear and tear unconditionally for 5 years',
    },
    {
      wrong: 'On-site carpentry has no warranty',
      right: 'DEX provides up to 5 years warranty on engineered on-site woodwork',
    },
  ]

  return (
    <section className="py-20 md:py-24" style={{ backgroundColor: '#FFFFFF' }}>
      <div className="max-w-4xl mx-auto px-4">
        <h2 className="font-serif text-3xl md:text-4xl font-medium text-center mb-3" style={{ color: '#1C1C1C' }}>
          Sound familiar?
        </h2>
        <p className="text-center text-sm md:text-base mb-12" style={{ color: '#666666' }}>
          These are the most common complaints about interior firms in Chennai. Here's how DEX addresses each one.
        </p>

        <div className="space-y-0">
          {pairs.map((pair, idx) => (
            <div key={idx} className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8 py-6 md:py-5 border-b" style={{ borderColor: '#E2E2E2' }}>
              {/* Wrong Column */}
              <div style={{ borderLeft: '3px solid #C4622D', paddingLeft: '16px' }}>
                <p className="text-xs font-medium tracking-widest uppercase mb-3" style={{ color: '#C4622D' }}>
                  What usually goes wrong
                </p>
                <p className="text-sm md:text-base leading-relaxed" style={{ color: '#1C1C1C' }}>
                  {pair.wrong}
                </p>
              </div>

              {/* Right Column */}
              <div style={{ borderLeft: '3px solid #1B4D3E', paddingLeft: '16px' }}>
                <p className="text-xs font-medium tracking-widest uppercase mb-3" style={{ color: '#1B4D3E' }}>
                  How DEX handles it
                </p>
                <p className="text-sm md:text-base leading-relaxed" style={{ color: '#1C1C1C' }}>
                  {pair.right}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
