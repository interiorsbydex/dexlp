import { Nav } from '@/components/nav'
import { Hero } from '@/components/hero'
import { Testimonials } from '@/components/testimonials'
import { GalleryCarousel } from '@/components/gallery-carousel'
import { HowItWorks } from '@/components/how-it-works'
import { WhyUs } from '@/components/why-us'
import { Differentiators } from '@/components/differentiators'
import { FAQ } from '@/components/faq'
import { BottomCTA } from '@/components/bottom-cta'
import { Footer } from '@/components/footer'
import { MobileStickyBar } from '@/components/mobile-sticky-bar'

export default function Home() {
  return (
    <main>
      <Nav />
      <Hero />
      <Testimonials />
      <GalleryCarousel />
      <HowItWorks />
      <WhyUs />
      <Differentiators />
      <FAQ />
      <div className="pb-0">
        <BottomCTA />
      </div>
      <Footer />
      <MobileStickyBar />
    </main>
  )
}
