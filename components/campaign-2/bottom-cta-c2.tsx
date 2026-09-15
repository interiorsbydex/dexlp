import { LeadFormC2 } from './lead-form-c2'

export function BottomCtaC2() {
  return (
    <section className="py-20 md:py-24" style={{ backgroundColor: '#F7F5F2' }}>
      <div className="max-w-2xl mx-auto px-4 text-center">
        <h2 className="font-serif text-3xl md:text-4xl font-medium mb-3" style={{ color: '#1C1C1C' }}>
          Tired of chasing your interior firm?
        </h2>
        <p className="text-base md:text-lg mb-12" style={{ color: '#666666' }}>
          Talk to DEX. We'll show you exactly how we work — before you commit to anything.
        </p>

        <div className="bg-white p-8 rounded-lg max-w-md mx-auto" style={{ border: '1px solid #E2E2E2' }}>
          <LeadFormC2 dark={false} source="lp2-bottom" />
        </div>
      </div>
    </section>
  )
}
