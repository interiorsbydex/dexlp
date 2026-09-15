import { LeadForm } from './lead-form'

export function BottomCTA() {
  return (
    <section className="py-20 lg:py-24" style={{ background: '#1A1A18' }}>
      <div className="max-w-[640px] mx-auto px-6 text-center">
        <p
          className="flex items-center justify-center gap-2.5 text-[10.5px] font-medium tracking-[0.2em] uppercase mb-4"
          style={{ color: '#C4622D' }}
        >
          <span className="w-7 h-px inline-block" style={{ background: '#C4622D' }} />
          Ready to Begin?
          <span className="w-7 h-px inline-block" style={{ background: '#C4622D' }} />
        </p>
        <h2
          className="font-serif font-normal mb-3"
          style={{ fontSize: 'clamp(28px, 3vw, 40px)', color: '#FAFAF8' }}
        >
          Got possession recently?<br />Let&apos;s get started.
        </h2>
        <p className="text-[15px] mb-10" style={{ color: '#9E9E9E', fontWeight: 300 }}>
          Our team will call you within 24 hours to understand your brief.
        </p>

        <LeadForm dark source="lp1-bottom" />
      </div>
    </section>
  )
}
