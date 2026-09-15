export function GuaranteeC2() {
  return (
    <section className="py-20 md:py-24" style={{ backgroundColor: '#1B4D3E', color: '#FFFFFF' }}>
      <div className="max-w-3xl mx-auto px-4 text-center">
        <h2 className="font-serif text-3xl md:text-4xl font-medium mb-4">
          15-year warranty. Free replacement for the first 5 years. No T&C applied.
        </h2>
        <p className="text-base md:text-lg mb-12 leading-relaxed" style={{ color: 'rgba(255,255,255,0.85)' }}>
          Most interior firms exclude wear and tear from day one. DEX includes it — because we trust our design, materials, and execution. No fine print. No excuses.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div
            className="p-6 rounded-lg"
            style={{
              backgroundColor: 'rgba(255,255,255,0.1)',
              border: '1px solid rgba(255,255,255,0.2)',
            }}
          >
            <p className="font-serif text-4xl md:text-5xl font-medium mb-2">15 years</p>
            <p className="text-sm md:text-base" style={{ color: 'rgba(255,255,255,0.8)' }}>
              Total warranty coverage
            </p>
          </div>
          <div
            className="p-6 rounded-lg"
            style={{
              backgroundColor: 'rgba(255,255,255,0.1)',
              border: '1px solid rgba(255,255,255,0.2)',
            }}
          >
            <p className="font-serif text-4xl md:text-5xl font-medium mb-2">5 years</p>
            <p className="text-sm md:text-base" style={{ color: 'rgba(255,255,255,0.8)' }}>
              Free replacement · No T&C
            </p>
          </div>
          <div
            className="p-6 rounded-lg"
            style={{
              backgroundColor: 'rgba(255,255,255,0.1)',
              border: '1px solid rgba(255,255,255,0.2)',
            }}
          >
            <p className="font-serif text-4xl md:text-5xl font-medium mb-2">2 years</p>
            <p className="text-sm md:text-base" style={{ color: 'rgba(255,255,255,0.8)' }}>
              Annual Maintenance Coverage
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}
