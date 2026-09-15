export function TrustBarC2() {
  const pills = [
    { text: '5-year guarantee', color: '#1B4D3E' },
    { text: '★★★★★ 48 Google reviews', color: '#1B4D3E' },
    { text: '⏱ Delivered in 35 days', color: '#1B4D3E' },
    { text: '📐 LiDAR precision', color: '#1B4D3E' },
  ]

  return (
    <section className="py-6 md:py-5" style={{ backgroundColor: '#E8F0EC' }}>
      <div className="max-w-6xl mx-auto px-4">
        <div className="flex flex-wrap gap-3 justify-center items-center">
          {pills.map((pill, idx) => (
            <div
              key={idx}
              className="inline-flex whitespace-nowrap px-4 py-2 border rounded-full"
              style={{
                backgroundColor: '#FFFFFF',
                borderColor: '#C5D9CC',
              }}
            >
              <span className="text-xs md:text-sm font-medium" style={{ color: pill.color }}>
                {pill.text}
              </span>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
