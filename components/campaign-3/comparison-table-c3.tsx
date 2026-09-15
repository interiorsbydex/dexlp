export function ComparisonTableC3() {
  return (
    <section
      className="py-20 md:py-24"
      style={{ background: '#FFFFFF' }}
    >
      <div className="max-w-6xl mx-auto px-6">
        <h2
          className="text-4xl md:text-5xl font-serif text-center mb-3"
          style={{
            color: '#111111',
            fontFamily: '"Cormorant Garamond", serif',
            fontWeight: 600,
          }}
        >
          DEX vs. industry standard
        </h2>
        <p
          className="text-center mb-12 text-lg"
          style={{ color: '#717171' }}
        >
          Seven things that matter. Judge for yourself.
        </p>

        {/* Mobile scroll hint */}
        <p
          className="md:hidden text-center mb-4 text-xs"
          style={{ color: '#BFA07A', fontStyle: 'italic' }}
        >
          ← Scroll to see full comparison →
        </p>

        {/* Table Card */}
        <div
          className="border rounded-lg overflow-hidden"
          style={{
            borderColor: '#DEDEDE',
            boxShadow: '0 2px 16px rgba(0,0,0,0.06)',
            maxWidth: '900px',
            margin: '0 auto',
            overflowX: 'auto',
          }}
        >
          <table
            className="w-full text-left text-sm"
            style={{ minWidth: '600px' }}
          >
            <thead>
              <tr style={{ background: '#F2F0EB', borderBottom: '1px solid #DEDEDE' }}>
                <th
                  className="px-6 py-4 font-semibold"
                  style={{ color: '#111111', fontSize: '14px' }}
                >
                  What to look for
                </th>
                <th
                  className="px-6 py-4 font-semibold border-l"
                  style={{
                    color: '#111111',
                    fontSize: '14px',
                    borderLeft: '1px solid #DEDEDE',
                    borderTop: '3px solid #BFA07A',
                  }}
                >
                  Interiors by DeX
                </th>
                <th
                  className="px-6 py-4 font-semibold border-l"
                  style={{
                    color: '#888888',
                    fontSize: '13px',
                    borderLeft: '1px solid #DEDEDE',
                  }}
                >
                  Industry standard
                </th>
              </tr>
            </thead>
            <tbody>
              {[
                ['Warranty period', '✓ 15 years total', '7–10 years, typically'],
                ['First 5-year replacement', '✓ Free replacement — no T&C', 'Usually excluded from day 1'],
                ['On-site woodwork warranty', '✓ Up to 5 years', 'None in most cases'],
                ['Measurement method', '✓ LiDAR point-cloud scanning', 'Manual tape — error-prone'],
                ['Delivery timeline', '✓ From 45 days*', '60–90 days average'],
                ['Post-handover support', '✓ 2-year AMC included', 'Ad-hoc, often chargeable'],
                ['Manufacturing', '✓ In-house factory, own brand', 'Third-party vendors'],
              ].map((row, i) => (
                <tr
                  key={i}
                  style={{
                    borderBottom: '1px solid #EEEEEE',
                    background: i % 2 === 0 ? 'transparent' : '#FAFAFA',
                  }}
                >
                  <td className="px-6 py-4" style={{ color: '#111111' }}>
                    {row[0]}
                  </td>
                  <td
                    className="px-6 py-4 border-l font-semibold"
                    style={{
                      color: '#2D6A4F',
                      borderLeft: '1px solid #DEDEDE',
                    }}
                  >
                    {row[1]}
                  </td>
                  <td
                    className="px-6 py-4 border-l"
                    style={{
                      color: '#888888',
                      borderLeft: '1px solid #DEDEDE',
                    }}
                  >
                    {row[2]}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        <p
          className="text-center mt-6 text-sm"
          style={{ color: '#999' }}
        >
          All terms documented in your project contract before execution begins.
        </p>

        {/* Inline CTA after comparison */}
        <div className="text-center mt-10">
          <p className="text-base mb-4" style={{ color: '#555555' }}>
            See all of this in your project contract — before you commit.
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
