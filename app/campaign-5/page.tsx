import { NavC3 } from "@/components/campaign-3/nav-c3";
import { HeroC5 } from "@/components/campaign-5/hero-c5";
import { TrustBarC5 } from "@/components/campaign-5/trust-bar-c5";
import { ServicesC5 } from "@/components/campaign-5/services-c5";
import { GalleryCarouselC5 } from "@/components/campaign-5/gallery-carousel-c5";
import { HowItWorksC5 } from "@/components/campaign-5/how-it-works-c5";
import { BottomCtaC5 } from "@/components/campaign-5/bottom-cta-c5";
import { Footer } from "@/components/footer";
import { MobileStickyBar } from "@/components/mobile-sticky-bar";

export const metadata = {
  title: "Interior Designers in Chennai | Modular Kitchen & Home Interiors | Interiors by DeX",
  description:
    "Interior designers in Chennai for modular kitchens, 2BHK, and 3BHK homes. 15-year warranty, 45-day delivery, and pricing you get in writing.",
};

export default function Campaign5() {
  return (
    <main style={{ fontFamily: '"Outfit", sans-serif' }}>
      <NavC3 />
      <HeroC5 />
      <TrustBarC5 />
      <ServicesC5 />
      <GalleryCarouselC5 />
      {/* Inline CTA after gallery */}
      <section className="py-14" style={{ background: "#FFFFFF" }}>
        <div className="max-w-2xl mx-auto px-6 text-center">
          <p className="text-lg mb-5" style={{ color: "#333333" }}>
            Like what you see? Every modular kitchen and home interior project came with a written guarantee.
          </p>
          <a
            href="#hero-form"
            className="inline-block px-8 py-3 rounded font-semibold text-sm transition hover:opacity-90"
            style={{ background: "#BFA07A", color: "#111111" }}
          >
            Book a free design consult
          </a>
        </div>
      </section>
      <HowItWorksC5 />
      <BottomCtaC5 />
      <Footer />
      <MobileStickyBar />
    </main>
  );
}
