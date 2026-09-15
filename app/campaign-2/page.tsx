import { Nav } from '@/components/campaign-2/nav-c2'
import { HeroC2 } from '@/components/campaign-2/hero-c2'
import { TrustBarC2 } from '@/components/campaign-2/trust-bar-c2'
import { ComparisonBlockC2 } from '@/components/campaign-2/comparison-block-c2'
import { GalleryCarouselC2 } from '@/components/campaign-2/gallery-carousel-c2'
import { TestimonialsC2 } from '@/components/campaign-2/testimonials-c2'
import { HowItWorksC2 } from '@/components/campaign-2/how-it-works-c2'
import { GuaranteeC2 } from '@/components/campaign-2/guarantee-c2'
import { FAQC2 } from '@/components/campaign-2/faq-c2'
import { BottomCtaC2 } from '@/components/campaign-2/bottom-cta-c2'
import { Footer } from '@/components/footer'
import { MobileStickyBar } from '@/components/mobile-sticky-bar'

export const metadata = {
  title: 'Interiors by DeX - Campaign 2',
  description: 'Premium interior design firm in Chennai with proven accountability',
}

export default function Campaign2() {
  return (
    <main>
      <Nav />
      <HeroC2 />
      <TrustBarC2 />
      <ComparisonBlockC2 />
      <GalleryCarouselC2 />
      <TestimonialsC2 />
      <HowItWorksC2 />
      <GuaranteeC2 />
      <FAQC2 />
      <div className="pb-0">
        <BottomCtaC2 />
      </div>
      <Footer />
      <MobileStickyBar />
    </main>
  )
}
