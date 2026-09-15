# Landing Page Component Patterns - Ready to Reuse

This document contains the proven, working component patterns from LP-1. Use these as templates for LP-2 and LP-3 to reduce development time.

## Hero Section Pattern (Mobile-First)

```jsx
// components/hero.tsx
export function Hero() {
  return (
    <div className="relative w-full">
      <div className="relative w-full min-h-screen md:min-h-screen flex flex-col md:flex-row items-stretch">
        {/* Background Image Layer */}
        <div className="absolute inset-0 z-0">
          <Image
            src="/images/hero-bg.png"
            alt="Interior design showcase"
            fill
            priority
            className="object-cover"
          />
          {/* Overlay for readability */}
          <div className="absolute inset-0 bg-black/50" />
        </div>

        {/* Mobile Layout: Headline first, then form */}
        <div className="md:hidden relative z-10 w-full flex flex-col px-4 pt-24 pb-32">
          {/* Mobile headline section */}
          <div className="mb-12">
            <h1 className="font-serif text-4xl sm:text-5xl font-medium leading-tight mb-4 text-white">
              Move into your dream home in 35 days.
            </h1>
            <p className="text-base leading-relaxed text-white font-light">
              Expert interior design. Zero follow-up stress.
            </p>
          </div>

          {/* Mobile form card */}
          <div className="w-full bg-white rounded-lg shadow-2xl overflow-hidden">
            <div className="px-6 pt-6 pb-3">
              <h2 className="font-serif text-xl font-medium mb-1" style={{ color: '#1A1A18' }}>
                Free Consultation
              </h2>
              <p className="text-xs text-gray-500">
                35-day transformation
              </p>
            </div>
            <div className="px-5 sm:px-6 pb-6">
              <LeadForm dark={false} />
            </div>
          </div>
        </div>

        {/* Desktop Layout: Two columns */}
        <div className="hidden md:flex relative z-10 w-full px-8 max-w-7xl mx-auto items-center justify-between">
          {/* Left: Copy */}
          <div className="text-white flex-1">
            {/* Reviews Badge */}
            <div className="inline-flex mb-6 px-4 py-2 border border-white/40 rounded-full whitespace-nowrap">
              <span className="text-xs font-medium tracking-widest uppercase flex items-center gap-2">
                <span style={{ color: '#C4622D' }}>★</span>
                <span>48 Google Reviews</span>
              </span>
            </div>

            {/* Main Headline - ALL WHITE */}
            <h1 className="font-serif text-5xl md:text-6xl font-medium leading-tight mb-6 text-white">
              Move into your dream home in 35 days.
            </h1>

            {/* Copy */}
            <p className="text-lg leading-relaxed mb-8 text-white font-light max-w-lg">
              Expert interior design tailored to your vision and budget. From concept to completion, handled with complete ownership.
            </p>

            {/* Metrics - Numbers in WHITE */}
            <div className="flex gap-8 mb-10">
              <div>
                <p className="text-4xl font-serif font-medium text-white">500+</p>
                <p className="text-sm text-gray-300 mt-1">Projects Completed</p>
              </div>
              <div>
                <p className="text-4xl font-serif font-medium text-white">35</p>
                <p className="text-sm text-gray-300 mt-1">Days Average</p>
              </div>
            </div>

            {/* Trust Items */}
            <ul className="space-y-3 text-sm text-white">
              {['5-Year Guarantee', 'Transparent Pricing', 'Branded Materials Only'].map(item => (
                <li key={item} className="flex items-center gap-3">
                  <span style={{ color: '#C4622D' }}>✓</span>
                  {item}
                </li>
              ))}
            </ul>
          </div>

          {/* Right: Form Card with Proper Spacing */}
          <div className="flex-1 flex justify-end pt-20 pb-20">
            <div className="w-full max-w-sm bg-white rounded-lg shadow-2xl overflow-hidden">
              <div className="px-6 pt-8 pb-4">
                <h2 className="font-serif text-xl font-medium mb-1" style={{ color: '#1A1A18' }}>
                  Free Consultation
                </h2>
                <p className="text-xs text-gray-500">
                  35-day transformation
                </p>
              </div>
              <div className="px-6 pb-16">
                <LeadForm dark={false} />
              </div>
            </div>
          </div>
        </div>

        {/* Scroll Indicator (Desktop Only) */}
        <div className="hidden md:flex absolute bottom-8 left-1/2 transform -translate-x-1/2 flex-col items-center z-20">
          <span className="text-xs text-white/60 mb-2 tracking-widest uppercase font-light">Scroll to explore</span>
          <svg className="w-4 h-6 text-white/60 animate-bounce" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
          </svg>
        </div>
      </div>
    </div>
  )
}
```

**Key Points for Variations:**
- ✅ All headline text is WHITE (no orange accents in text)
- ✅ Form card has `pb-16` for breathing room
- ✅ Mobile uses `pb-32` to account for sticky bar
- ✅ Desktop has `pt-20 pb-20` on container
- ✅ Google reviews badge uses `whitespace-nowrap` and `inline-flex`
- ✅ Numbers ("500+", "35") are WHITE in main text
- ✅ Accent color (#C4622D) only on icons/checkmarks, not main text

---

## Lead Form Pattern

```jsx
// components/lead-form.tsx
export function LeadForm({ dark = false }) {
  return (
    <div id="lead-form">
      <p className="text-[10px] font-medium tracking-[0.18em] uppercase mb-3 mt-4" style={{ color: '#C4622D' }}>
        Free Consultation
      </p>
      <h2
        className="font-serif text-2xl font-medium leading-snug mb-3"
        style={{ color: dark ? '#FAFAF8' : '#1A1A18' }}
      >
        Get a Personalised Interior Quote
      </h2>
      <p className="text-xs leading-relaxed mb-8" style={{ color: '#6B6B6B', fontWeight: 300 }}>
        Share your details, {"we'll"} reach out within 24 hours.
      </p>

      {/* Form fields */}
      {/* ... form inputs ... */}

      {/* Submit Button */}
      <button
        className="w-full h-12 text-sm font-medium tracking-wide text-white"
        style={{ background: '#C4622D', borderRadius: '2px' }}
      >
        BOOK MY FREE CONSULTATION →
      </button>

      {/* Trust message */}
      <p className="text-center text-xs mt-6" style={{ color: '#6B6B6B', fontWeight: 300 }}>
        No spam. No sales pressure. Just a genuine conversation.
      </p>
    </div>
  )
}
```

**Key Points:**
- ✅ Add `mt-4 mb-3` spacing between form header and content
- ✅ Add `mb-8` after description for breathing room
- ✅ Button uses exact color `#C4622D` and has white text
- ✅ Trust message goes below button with `mt-6`

---

## Mobile Sticky Bar Pattern

```jsx
// components/mobile-sticky-bar.tsx
export function MobileStickyBar() {
  return (
    <div
      className="fixed bottom-0 left-0 right-0 z-50 px-4 py-3 md:hidden"
      style={{
        background: '#fff',
        borderTop: '1px solid #E8E2DC',
      }}
    >
      <a
        href="#lead-form"
        className="w-full flex items-center justify-center h-12 text-sm font-medium tracking-wide text-white"
        style={{ background: '#C4622D', borderRadius: '2px' }}
      >
        Get Free Consultation
      </a>
    </div>
  )
}
```

**Key Points:**
- ✅ Only ONE button (remove "Call Us" option)
- ✅ Full width with `w-full`
- ✅ Fixed height of 44px minimum (touch target)
- ✅ Border-top separates from page content
- ✅ Uses `md:hidden` to hide on desktop

---

## Footer Pattern

```jsx
// components/footer.tsx
export function Footer() {
  return (
    <footer className="bg-gray-900 text-white py-12">
      <div className="max-w-7xl mx-auto px-4">
        {/* Logo */}
        <div className="mb-8">
          <h2 className="text-2xl font-serif" style={{ color: '#C4622D' }}>
            InteriorsbyDeX
          </h2>
        </div>

        {/* Footer content */}
        <div className="text-sm text-gray-400">
          <p>Interiors by DeX · A unit of VaaN Ventures · GST:</p>
          {/* Links and contact info */}
        </div>
      </div>
    </footer>
  )
}
```

---

## Form Inside Page Structure

```jsx
// app/page.tsx
import { Nav } from '@/components/nav'
import { Hero } from '@/components/hero'
import { Testimonials } from '@/components/testimonials'
// ... other imports

export default function Home() {
  return (
    <div>
      <Nav />
      <main>
        <Hero />
        {/* No ProofStrip - it breaks on mobile */}
        <Testimonials />
        <GalleryCarousel />
        <HowItWorks />
        <WhyUs />
        <Differentiators />
        <FAQ />
        <div className="pb-0">
          <BottomCTA />
        </div>
      </main>
      <Footer />
      <MobileStickyBar />
    </div>
  )
}
```

**Key Points:**
- ✅ No ProofStrip component (caused mobile wrapping issues)
- ✅ `pb-0` on BottomCTA (prevents white gap before footer)
- ✅ MobileStickyBar at the end (renders on top of everything)

---

## Color System

For LP-2 & LP-3, keep these consistent:

```javascript
// Design System
const colors = {
  primary: '#C4622D',      // Terracotta/Orange - use for accents only
  text_dark: '#1A1A18',    // Near black - body text
  text_light: '#FFFFFF',   // White - headlines, hero text
  text_muted: '#6B6B6B',   // Gray - secondary text
  border: '#E8E2DC',       // Light beige - borders
  background_dark: '#2A2A2A', // Dark gray - footer
}
```

**Usage Rules:**
- Headline text: Always `#FFFFFF` (white)
- Body text: `#1A1A18` (dark) or `#6B6B6B` (muted)
- Accents (icons, checkmarks): `#C4622D`
- Backgrounds: White or `#2A2A2A`
- Borders: `#E8E2DC`

---

## Tailwind Classes That Work

### Spacing (Use These Exact Values)
```
px-4          // Mobile padding
px-6          // Standard padding
py-2.5        // Badge padding
pt-8          // Form header top padding
pb-16         // Form bottom padding
mb-4          // Heading margin bottom
gap-2         // Tight gap between items
gap-8         // Loose gap for metrics
```

### Text (Use These Exact Classes)
```
font-serif           // For headings (use Fonts from layout)
text-white           // All-white headlines
text-4xl             // Large metric numbers
text-sm              // Body text
text-xs              // Small labels and captions
font-medium          // Regular weight
font-light           // 300 weight
leading-tight        // Tight line height for headlines
leading-relaxed      // Comfortable line height for body
```

### Layout (Use These Exact Patterns)
```
md:hidden            // Mobile only
hidden md:flex       // Desktop only
flex items-center    // Flex centering
gap-2 flex-nowrap    // Prevent wrapping
whitespace-nowrap    // Prevent text wrap
```

---

## Testing Checklist for Each LP

Before considering LP complete:

```
Mobile (375px):
☐ Hero headline fully visible and readable
☐ Form has top and bottom padding (no cutting)
☐ No text wrapping in badges
☐ Buttons are at least 44px tall
☐ No horizontal scroll
☐ Sticky bottom bar visible with single button
☐ No white gaps between sections

Desktop (1920px):
☐ Hero left/right split is balanced
☐ Form card has visible padding on all sides
☐ Google reviews badge on single line
☐ Metrics ("500+", "35") in white
☐ Copy text in white
☐ Scroll indicator visible at bottom
☐ No cut-off text anywhere

Console:
☐ No JavaScript errors
☐ No missing images
☐ No console.log statements remaining
```

---

## Expected Build Time Using These Patterns

- **Hero**: 10 minutes (copy-paste + customize text/colors)
- **Form**: 5 minutes (same form from LP-1, just change copy)
- **Footer**: 5 minutes (same as LP-1)
- **Other sections**: 20 minutes total
- **Testing**: 10 minutes (take screenshots, verify checklist)
- **Total per LP**: **50 minutes** (not 3+ hours)

Use these patterns exactly and LP-2 & LP-3 will be built in half the time with half the bugs.
