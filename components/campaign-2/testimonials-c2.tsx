export function TestimonialsC2() {
  const testimonials = [
    {
      stars: 5,
      quote: 'We were burned before. DEX was transparent from day one, and the guarantee gave us peace of mind. Highly recommend.',
      name: 'Prarthana Abinesh',
      location: 'T. Nagar',
    },
    {
      stars: 5,
      quote: 'No surprises. No delays. Everything was delivered on time and in writing. Professional.',
      name: 'Suganthi S',
      location: 'Adyar',
    },
    {
      stars: 5,
      quote: 'The structured process made all the difference. I knew exactly what to expect at each step.',
      name: 'Prashanth Sachin',
      location: 'Bhatnagar',
    },
  ]

  return (
    <section className="py-20 md:py-24" style={{ backgroundColor: '#F7F5F2' }}>
      <div className="max-w-6xl mx-auto px-4">
        <h2 className="font-serif text-3xl md:text-4xl font-medium text-center mb-2" style={{ color: '#1C1C1C' }}>
          Clients who trusted us — and are glad they did.
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-12">
          {testimonials.map((testimonial, idx) => (
            <div
              key={idx}
              className="p-6 rounded-lg"
              style={{
                backgroundColor: '#FFFFFF',
                border: '1px solid #E2E2E2',
              }}
            >
              <div className="flex gap-1 mb-3">
                {[...Array(testimonial.stars)].map((_, i) => (
                  <span key={i} style={{ color: '#C4622D' }}>★</span>
                ))}
              </div>
              <p className="text-sm md:text-base italic mb-4 leading-relaxed" style={{ color: '#555555' }}>
                {testimonial.quote}
              </p>
              <p className="font-medium text-sm" style={{ color: '#1C1C1C' }}>
                {testimonial.name}
              </p>
              <p className="text-xs" style={{ color: '#999999' }}>
                {testimonial.location}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
