export function TrustBarC4() {
  const row1 = [
    { text: '15-Year Warranty', lead: true },
    { text: 'LiDAR Precision', lead: true },
  ]
  const row2 = [
    { text: '★★★★★ 5-Star on Google', lead: false },
    { text: 'Delivered in 45 days*', lead: false },
  ]
  const allPills = [...row1, ...row2]

  return (
    <section
      className="py-6 border-y"
      style={{ background: '#FFFFFF', borderColor: '#DEDEDE' }}
    >
      <div className="max-w-6xl mx-auto px-4 md:px-6">

        {/* Mobile: 2 rows of 2 */}
        <div className="md:hidden space-y-3">
          <div className="flex justify-center gap-2">
            {row1.map((pill, i) => (
              <div
                key={i}
                className="flex-1 text-center px-3 py-2 rounded text-xs font-medium"
                style={{
                  background: '#F2F0EB',
                  border: pill.lead ? '1px solid #BFA07A' : '1px solid transparent',
                  color: '#2B2B2B',
                  fontWeight: pill.lead ? 600 : 500,
                }}
              >
                {pill.text}
              </div>
            ))}
          </div>
          <div className="flex justify-center gap-2">
            {row2.map((pill, i) => (
              <div
                key={i}
                className="flex-1 text-center px-3 py-2 rounded text-xs font-medium"
                style={{
                  background: '#F2F0EB',
                  border: '1px solid transparent',
                  color: '#444444',
                  fontWeight: 500,
                }}
              >
                {pill.text}
              </div>
            ))}
          </div>
        </div>

        {/* Desktop: Single row */}
        <div className="hidden md:flex justify-center gap-4">
          {allPills.map((pill, i) => (
            <div
              key={i}
              className="px-4 py-2 rounded text-sm font-medium whitespace-nowrap"
              style={{
                background: '#F2F0EB',
                border: pill.lead ? '1px solid #BFA07A' : '1px solid transparent',
                color: pill.lead ? '#2B2B2B' : '#444444',
                fontWeight: pill.lead ? 600 : 500,
              }}
            >
              {pill.text}
            </div>
          ))}
        </div>

      </div>
    </section>
  )
}
