import { NavC3 } from '@/components/campaign-3/nav-c3'
import { HeroC3 } from '@/components/campaign-3/hero-c3'
import { TrustBarC3 } from '@/components/campaign-3/trust-bar-c3'
import { VideoTestimonialsC3 } from '@/components/campaign-3/video-testimonials-c3'
import { DifferentiatorsC3 } from '@/components/campaign-3/differentiators-c3'
import { ComparisonTableC3 } from '@/components/campaign-3/comparison-table-c3'
import { GalleryCarouselC3 } from '@/components/campaign-3/gallery-carousel-c3'
import { TestimonialsC3 } from '@/components/campaign-3/testimonials-c3'
import { HowItWorksC3 } from '@/components/campaign-3/how-it-works-c3'
import { FAQC3 } from '@/components/campaign-3/faq-c3'
import { BottomCtaC3 } from '@/components/campaign-3/bottom-cta-c3'
import { Footer } from '@/components/footer'
import { MobileStickyBar } from '@/components/mobile-sticky-bar'

export const metadata = {
  title: 'Interiors by DeX — The Interior Company That Puts Everything in Writing',
  description: 'Premium residential interior design in Chennai. 15-year warranty, 45-day delivery, in-house manufacturing. Compare DeX against any company — in writing.',
}

export default function Campaign3() {
  return (
    <main style={{ fontFamily: '"Outfit", sans-serif' }}>
      <NavC3 />
      <HeroC3 />
      <TrustBarC3 />
      <VideoTestimonialsC3 />
      <DifferentiatorsC3 />
      <ComparisonTableC3 />
      <GalleryCarouselC3 />
      {/* Inline CTA after gallery */}
      <section className="py-14" style={{ background: '#FFFFFF' }}>
        <div className="max-w-2xl mx-auto px-6 text-center">
          <p className="text-lg mb-5" style={{ color: '#333333' }}>
            Like what you see? Every one of these projects came with a written guarantee.
          </p>
          <a
            href="#hero-form"
            className="inline-block px-8 py-3 rounded font-semibold text-sm transition hover:opacity-90"
            style={{ background: '#BFA07A', color: '#111111' }}
          >
            Book a free design consult
          </a>
        </div>
      </section>
      <TestimonialsC3 />
      <HowItWorksC3 />
      <FAQC3 />
      <BottomCtaC3 />
      <Footer />
      <MobileStickyBar />
    </main>
  )
}
