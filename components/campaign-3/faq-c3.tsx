'use client'

import { useState } from 'react'

const faqs = [
  {
    q: 'Why should I choose Interiors by DeX?',
    a: 'At DeX, we combine thoughtful design, quality materials, and professional execution to create homes that are beautiful, functional, and built to last. Our focus is on delivering a seamless experience from design consultation to final handover.',
  },
  {
    q: 'How is DeX different from other interior companies?',
    a: 'We believe every family lives differently. Instead of offering standard solutions, we take time to understand your lifestyle, routines, storage needs, and future plans before creating a design solution. The result is a home that not only looks good but also works beautifully for everyday living.',
  },
  {
    q: 'What services does Interiors by DeX offer?',
    a: 'We provide end-to-end home interior solutions, including design, modular kitchens, wardrobes, storage solutions, TV units, false ceilings, lighting, furnishing guidance, manufacturing, installation, and complete project execution.',
  },
  {
    q: 'How much will my home interiors cost?',
    a: 'The investment depends on factors such as your home\'s size, scope of work, materials selected, and level of customization. Our team provides detailed and transparent quotations before project confirmation.',
  },
  {
    q: 'Can DeX work within my budget?',
    a: 'Yes. Understanding your budget is an important part of our planning process. We help prioritize requirements and recommend solutions that balance functionality, aesthetics, and value.',
  },
  {
    q: 'Do you offer EMI options?',
    a: 'Yes, we offer EMI options for eligible customers. Our finance team will be happy to guide you through the available plans, eligibility criteria, and repayment options. Please speak with our team for more details.',
  },
  {
    q: 'Will there be any hidden costs during the project?',
    a: 'No. We believe in complete transparency. Our quotations clearly outline the agreed scope, materials, specifications, and pricing. Any changes requested after approval will be discussed and approved by you before implementation.',
  },
  {
    q: 'What warranty does DeX provide?',
    a: 'We offer a 15-year warranty on all woodwork, along with a free replacement guarantee for the first 5 years on eligible woodwork components. This reflects our confidence in the quality of materials and workmanship we deliver.',
  },
  {
    q: 'How do you ensure quality?',
    a: 'Quality is maintained through careful material selection, controlled manufacturing processes, professional installation, and multiple quality checks throughout the project lifecycle.',
  },
  {
    q: 'Do you manufacture your own woodwork?',
    a: 'Yes. Our modular woodwork is produced through a structured manufacturing process, allowing us to maintain consistent quality standards, precision, and timely delivery.',
  },
  {
    q: 'Will I be able to visualize my home before execution begins?',
    a: 'Yes. We provide detailed design presentations and 3D visualizations that help you understand layouts, materials, finishes, and overall aesthetics before execution starts.',
  },
  {
    q: 'How do you ensure projects are completed on time?',
    a: 'Once designs are finalized, we create a structured project schedule with defined milestones. Our team closely monitors manufacturing, procurement, and site execution to ensure smooth progress and timely completion.',
  },
  {
    q: 'Who will manage my project?',
    a: 'Every project is assigned a dedicated team that coordinates design, production, and execution while keeping you informed throughout the journey with regular updates.',
  },
  {
    q: 'Do you provide after-sales support?',
    a: 'Yes. Our relationship with homeowners continues beyond project completion. Our team remains available to address service requests and support requirements even after handover.',
  },
  {
    q: 'How do I get started?',
    a: 'Simply book a consultation with our team. We\'ll understand your requirements, discuss your vision, and guide you through the next steps toward creating your dream home.',
  },
]

export function FAQC3() {
  const [openIndex, setOpenIndex] = useState<number | null>(null)

  return (
    <section
      className="py-20 md:py-24"
      style={{ background: '#F2F0EB' }}
    >
      <div className="max-w-4xl mx-auto px-4 md:px-6">
        <h2
          className="text-4xl md:text-5xl font-serif text-center mb-12"
          style={{
            color: '#111111',
            fontFamily: '"Cormorant Garamond", serif',
            fontWeight: 600,
            letterSpacing: '0.02em',
          }}
        >
          Frequently asked questions.
        </h2>

        <div className="space-y-3">
          {faqs.map((faq, i) => (
            <div
              key={i}
              className="border rounded-lg overflow-hidden"
              style={{ borderColor: '#DEDEDE' }}
            >
              <button
                onClick={() => setOpenIndex(openIndex === i ? null : i)}
                className="w-full px-6 py-4 text-left flex items-center justify-between hover:bg-gray-50 transition bg-white"
              >
                <span
                  className="font-semibold pr-4"
                  style={{ color: '#111111', fontSize: '15px' }}
                >
                  {faq.q}
                </span>
                <span
                  className="shrink-0"
                  style={{
                    color: '#BFA07A',
                    fontSize: '20px',
                    transition: 'transform 0.2s',
                    display: 'inline-block',
                    transform: openIndex === i ? 'rotate(180deg)' : 'rotate(0deg)',
                  }}
                >
                  ⌄
                </span>
              </button>
              {openIndex === i && (
                <div
                  className="px-6 py-4 border-t"
                  style={{ borderColor: '#DEDEDE', background: '#F9F9F9' }}
                >
                  <p style={{ color: '#717171', lineHeight: 1.7 }}>
                    {faq.a}
                  </p>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
