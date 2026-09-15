const TESTIMONIALS = [
  {
    name: 'Prarthana Abinesh',
    location: 'Chennai',
    quote:
      'The team was very cooperative, modifying panels, addressing requirements with patience and professionalism. Executive Manager Ranjendran paid attention even to the smallest concerns and ensured seamless execution from start to finish. It truly felt like a collaborative journey.',
  },
  {
    name: 'Suganthi S',
    location: 'Chennai',
    quote:
      "Allan and Esther didn't rush or push anything, they focused on understanding my requirements and suggesting practical, space-saving, modern solutions. I felt confident and comfortable after the visit.",
  },
  {
    name: 'Prashanth Sachin',
    location: 'Chennai',
    quote:
      'The team maintains complete transparency regarding their deliverables. Mr. Sohail guided us to stay within budget without compromising on quality. Mr. Allan ensured everything was perfectly coordinated. Highly recommended.',
  },
]

export function Testimonials() {
  return (
    <section
      className="py-20 lg:py-24"
      style={{ background: '#FAFAF8', borderTop: '1px solid #E8E2DC' }}
    >
      <div className="max-w-[1200px] mx-auto px-6 lg:px-18">
        {/* Header */}
        <div className="text-center mb-12">
          <p
            className="flex items-center justify-center gap-2.5 text-[10.5px] font-medium tracking-[0.2em] uppercase mb-4"
            style={{ color: '#C4622D' }}
          >
            <span className="w-7 h-px inline-block" style={{ background: '#C4622D' }} />
            Client Stories
            <span className="w-7 h-px inline-block" style={{ background: '#C4622D' }} />
          </p>
          <h2
            className="font-serif font-normal"
            style={{ fontSize: 'clamp(28px, 3vw, 38px)', color: '#1A1A18' }}
          >
            What our clients say
          </h2>
        </div>

        {/* Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
          {TESTIMONIALS.map(t => (
            <div
              key={t.name}
              className="flex flex-col p-6"
              style={{
                background: '#fff',
                border: '1px solid #E8E2DC',
              }}
            >
              {/* Stars */}
              <div className="flex gap-0.5 mb-4">
                {[...Array(5)].map((_, i) => (
                  <svg key={i} width="14" height="14" viewBox="0 0 14 14" fill="none" aria-hidden="true">
                    <path
                      d="M7 1.5l1.3 4H13l-3.5 2.5 1.3 4L7 9.8l-3.8 2.2 1.3-4L1 5.5h4.7z"
                      fill="#C4622D"
                    />
                  </svg>
                ))}
              </div>

              {/* Quote */}
              <p
                className="text-[13.5px] leading-[1.75] flex-1 mb-5 italic"
                style={{ color: '#4A4A4A', fontWeight: 300 }}
              >
                &ldquo;{t.quote}&rdquo;
              </p>

              {/* Attribution */}
              <div>
                <p className="text-sm font-medium" style={{ color: '#1A1A18' }}>{t.name}</p>
                <p className="text-xs mt-0.5" style={{ color: '#9E9E9E' }}>{t.location}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
