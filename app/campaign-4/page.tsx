import { NavC3 } from '@/components/campaign-3/nav-c3'
import { HeroC4 } from '@/components/campaign-4/hero-c4'
import { TrustBarC4 } from '@/components/campaign-4/trust-bar-c4'
import { ServicesC4 } from '@/components/campaign-4/services-c4'
import { GalleryCarouselC4 } from '@/components/campaign-4/gallery-carousel-c4'
import { HowItWorksC4 } from '@/components/campaign-4/how-it-works-c4'
import { BottomCtaC4 } from '@/components/campaign-4/bottom-cta-c4'
import { Footer } from '@/components/footer'
import { MobileStickyBar } from '@/components/mobile-sticky-bar'

export const metadata = {
  title: 'Interior Designers in Chennai | Modular Kitchen & Home Interiors | Interiors by DeX',
  description: 'Interior designers in Chennai for modular kitchens, 2BHK, and 3BHK homes. 15-year warranty, 45-day delivery, and pricing you get in writing.',
}

export default function Campaign4() {
  return (
    <main style={{ fontFamily: '"Outfit", sans-serif' }}>
      <NavC3 />
      <HeroC4 />
      <TrustBarC4 />
      <ServicesC4 />
      <GalleryCarouselC4 />
      {/* Inline CTA after gallery */}
      <section className="py-14" style={{ background: '#FFFFFF' }}>
        <div className="max-w-2xl mx-auto px-6 text-center">
          <p className="text-lg mb-5" style={{ color: '#333333' }}>
            Like what you see? Every modular kitchen and home interior project came with a written guarantee.
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
      <HowItWorksC4 />
      <BottomCtaC4 />
      <Footer />
      <MobileStickyBar />
    </main>
  )
}
