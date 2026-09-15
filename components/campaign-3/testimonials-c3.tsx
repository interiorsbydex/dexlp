const testimonials = [
  {
    quote:
      'We had a wonderful experience with the entire team throughout our home interior journey. A special thanks to Executive Manager Ranjendran for ensuring the seamless execution of the project from start to finish. He paid attention even to the smallest concerns we raised and was always supportive in getting changes done promptly. The team was very cooperative, especially in modifying panels and addressing our requirements with patience and professionalism. A heartfelt thanks to Sohail as well for his excellent support during the design journey. His ideas, guidance, and involvement helped shape the interiors beautifully, and he was always open to discussions and improvements throughout the process. We would also like to specially mention Alan, who encouraged and guided us in choosing Interiors by DEX. Overall, our experience with Interiors by DEX has been smooth, professional, and customer-friendly.',
    name: 'Prarthana Abinesh',
    location: 'Chennai',
    project: '',
  },
  {
    quote:
      'We had a wonderful experience from start to finish. The team is incredibly warm, welcoming, and maintain complete transparency regarding their deliverables. A special mention goes to our architect, Mr. Sohail, who was highly approachable; he deeply understood our requirements and expertly guided us to stay within our budget without compromising on quality. Additionally, Mr. Allan provided exceptional support, ensuring everything was perfectly coordinated throughout the entire process. Highly recommended!',
    name: 'Prashanth Sachin',
    location: 'Chennai',
    project: '',
  },
  {
    quote:
      'I recently visited the Interiors by Dex experience centre in Perungudi, and it was a really pleasant and insightful experience. Allan and Esther were extremely professional, patient, and knowledgeable throughout the visit. They clearly explained the materials, finishes, and design options in detail. What I appreciated the most was their approach — they didn\'t rush or push anything, but instead focused on understanding my requirements and suggesting practical, space-saving, and modern solutions. Overall, I felt confident and comfortable after the visit. Looking forward to collaborating with them!',
    name: 'Suganthi S',
    location: 'Chennai',
    project: '',
  },
]

export function TestimonialsC3() {
  return (
    <section className="py-20 md:py-24" style={{ background: '#F2F0EB' }}>
      <div className="max-w-6xl mx-auto px-4 md:px-6">
        <h2
          className="text-4xl md:text-5xl font-serif text-center mb-3"
          style={{
            color: '#111111',
            fontFamily: '"Cormorant Garamond", serif',
            fontWeight: 600,
            letterSpacing: '0.02em',
          }}
        >
          Clients who chose DeX after comparing.
        </h2>
        <p className="text-center mb-12 text-base" style={{ color: '#717171' }}>
          Real homeowners. Their words, not ours.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {testimonials.map((t, i) => (
            <div
              key={i}
              className="rounded-lg p-8 flex flex-col justify-between"
              style={{
                background: '#FFFFFF',
                border: '1px solid #DEDEDE',
              }}
            >
              {/* Quote mark */}
              <div
                className="font-serif text-5xl leading-none mb-4"
                style={{ color: '#BFA07A' }}
                aria-hidden="true"
              >
                &ldquo;
              </div>
              <p
                className="text-base leading-relaxed flex-1 mb-6"
                style={{ color: '#333333' }}
              >
                {t.quote}
              </p>
              <div className="border-t pt-5" style={{ borderColor: '#EBEBEB' }}>
                <p className="font-semibold text-sm" style={{ color: '#111111' }}>
                  {t.name}
                </p>
                <p className="text-xs mt-0.5" style={{ color: '#999999' }}>
                  {t.location}
                </p>
              </div>
            </div>
          ))}
        </div>

        {/* CTA */}
        <div className="text-center mt-14">
          <p className="text-base mb-4" style={{ color: '#555555' }}>
            Want to speak with a past client before deciding? We can arrange it.
          </p>
          <a
            href="#hero-form"
            className="inline-block px-8 py-3 rounded font-semibold text-sm transition hover:opacity-90"
            style={{ background: '#111111', color: '#FFFFFF' }}
          >
            Book a free design consult
          </a>
        </div>
      </div>
    </section>
  )
}
