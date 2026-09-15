const GALLERY_SLOTS = [
  'Living room',
  'Kitchen',
  'Master bedroom',
  'Wardrobe',
  'Study / home office',
  'Dining area',
]

function PlaceholderSlot({ label }: { label: string }) {
  return (
    <div
      className="relative flex items-center justify-center"
      style={{
        background: '#F0EDE8',
        aspectRatio: '4/3',
        borderRadius: '2px',
      }}
    >
      <div className="text-center px-4">
        <p className="text-xs font-medium tracking-[0.1em] uppercase" style={{ color: '#9E9E9E' }}>
          PORTFOLIO
        </p>
        <p className="text-[11px] mt-1" style={{ color: '#B0A898' }}>{label}</p>
      </div>
    </div>
  )
}

export function Gallery() {
  return (
    <section
      className="py-20 lg:py-24"
      style={{ background: '#EDE5D8', borderTop: '1px solid #E8E2DC' }}
    >
      <div className="max-w-[1200px] mx-auto px-6 lg:px-18">
        {/* Header */}
        <div className="text-center mb-3">
          <p
            className="flex items-center justify-center gap-2.5 text-[10.5px] font-medium tracking-[0.2em] uppercase mb-4"
            style={{ color: '#C4622D' }}
          >
            <span className="w-7 h-px inline-block" style={{ background: '#C4622D' }} />
            Our Projects
            <span className="w-7 h-px inline-block" style={{ background: '#C4622D' }} />
          </p>
          <h2
            className="font-serif font-normal mb-2"
            style={{ fontSize: 'clamp(28px, 3vw, 38px)', color: '#1A1A18' }}
          >
            Spaces We Have Brought to Life
          </h2>
          <p className="text-sm mb-10" style={{ color: '#6B6B6B', fontWeight: 300 }}>
            Every space designed around how you live, not how we manufacture.
          </p>
        </div>

        {/* Grid */}
        <div className="grid grid-cols-2 md:grid-cols-3 gap-3">
          {GALLERY_SLOTS.map(slot => (
            <PlaceholderSlot key={slot} label={slot} />
          ))}
        </div>
      </div>
    </section>
  )
}
