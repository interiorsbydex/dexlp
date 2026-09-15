'use client'

import { Suspense } from 'react'
import { useSearchParams } from 'next/navigation'
import Image from 'next/image'
import { LeadFormC4 } from './lead-form-c4'

type CopyVariant = {
  h1: string
  sub: string
  checklistItem: string
}

const DEFAULT_COPY: CopyVariant = {
  h1: 'The Interior Company in Chennai That Puts Everything in Writing.',
  sub: 'From a single modular kitchen to a complete 2BHK or 3BHK home, every project comes with a 15-year warranty and fixed pricing you can hold us to.',
  checklistItem: 'Transparent Fixed Pricing on Every Project',
}

const VARIANT_COPY: Record<string, CopyVariant> = {
  kitchen: {
    h1: 'Modular Kitchen Designers in Chennai Who Put Every Price in Writing.',
    sub: 'We design and install modular kitchens across Chennai, with fixed pricing and a 15-year warranty you can hold us to.',
    checklistItem: 'Transparent Fixed Pricing on Every Kitchen',
  },
  '2bhk': {
    h1: '2BHK Interior Designers in Chennai Who Put Every Price in Writing.',
    sub: 'We design and build complete 2BHK homes across Chennai, with fixed pricing and a 15-year warranty you can hold us to.',
    checklistItem: 'Transparent Fixed Pricing on Your 2BHK',
  },
  '3bhk': {
    h1: '3BHK Interior Designers in Chennai Who Put Every Price in Writing.',
    sub: 'We design and build complete 3BHK homes across Chennai, with fixed pricing and a 15-year warranty you can hold us to.',
    checklistItem: 'Transparent Fixed Pricing on Your 3BHK',
  },
}

function getCopy(kw: string | null): CopyVariant {
  if (kw && VARIANT_COPY[kw]) return VARIANT_COPY[kw]
  return DEFAULT_COPY
}

function HeroCopyContent() {
  const searchParams = useSearchParams()
  const copy = getCopy(searchParams.get('kw'))
  return <HeroCopyMarkup copy={copy} />
}

function HeroCopyMarkup({ copy }: { copy: CopyVariant }) {
  return (
    <>
      {/* Mobile heading + sub */}
      <h1 className="md:hidden font-serif text-4xl sm:text-5xl font-medium leading-tight mb-4 text-white">
        {copy.h1}
      </h1>
      <p className="md:hidden text-base leading-relaxed text-white font-light mb-8">{copy.sub}</p>

      {/* Desktop heading + sub */}
      <h1 className="hidden md:block font-serif text-5xl md:text-6xl font-medium leading-tight mb-6 text-white">
        {copy.h1}
      </h1>
      <p className="hidden md:block text-lg leading-relaxed mb-8 text-white font-light max-w-lg">{copy.sub}</p>
    </>
  )
}

function HeroChecklistContent() {
  const searchParams = useSearchParams()
  const copy = getCopy(searchParams.get('kw'))
  return <HeroChecklistMarkup checklistItem={copy.checklistItem} />
}

function HeroChecklistMarkup({ checklistItem }: { checklistItem: string }) {
  const items = ['15-Year Warranty. Free Replacement First 5 Years.', checklistItem, 'LiDAR Precision Measurement']
  return (
    <>
      {items.map(item => (
        <li key={item} className="flex items-start gap-2 md:items-center md:gap-3">
          <span className="text-white flex-shrink-0">&#x2713;</span>
          <span>{item}</span>
        </li>
      ))}
    </>
  )
}

export function HeroC4() {
  return (
    <div id="hero-form" className="relative w-full">
      <div className="relative w-full min-h-screen flex flex-col md:flex-row items-stretch">

        {/* Background Image */}
        <div className="absolute inset-0 z-0">
          <Image
            src="/images/hero-bg.png"
            alt="Interior design showcase in Chennai"
            fill
            priority
            className="object-cover"
          />
          <div className="absolute inset-0 bg-black/50" />
        </div>

        {/* Mobile Layout */}
        <div className="md:hidden relative z-10 w-full flex flex-col px-4 pt-24 pb-32">
          <div className="mb-12">
            <div className="inline-flex mb-5 px-3 py-2 border border-white/40 rounded-full">
              <span className="text-xs font-medium tracking-wide uppercase flex items-center gap-1.5 flex-wrap">
                <span className="text-white">★★★★★</span>
                <span className="text-white">5-Star Rated on Google</span>
              </span>
            </div>

            <Suspense fallback={<HeroCopyMarkup copy={DEFAULT_COPY} />}>
              <HeroCopyContent />
            </Suspense>

            {/* Mobile Stats */}
            <div className="flex gap-6 mb-8">
              <div>
                <p className="text-3xl font-serif font-medium text-white">15 yrs</p>
                <p className="text-xs text-gray-300 mt-1">Warranty. First 5 Free Replacement.</p>
              </div>
              <div>
                <p className="text-3xl font-serif font-medium text-white">45 days*</p>
                <p className="text-xs text-gray-300 mt-1">Execution Timeline</p>
              </div>
              <div>
                <p className="text-3xl font-serif font-medium text-white">Eleven+</p>
                <p className="text-xs text-gray-300 mt-1">Years of Expertise</p>
              </div>
            </div>

            {/* Mobile Checkmarks */}
            <ul className="space-y-2 text-xs text-white mb-8">
              <Suspense fallback={<HeroChecklistMarkup checklistItem={DEFAULT_COPY.checklistItem} />}>
                <HeroChecklistContent />
              </Suspense>
            </ul>
          </div>

          <div id="hero-form-card" className="w-full bg-white rounded-lg shadow-2xl overflow-hidden">
            <div className="px-6 pt-6 pb-3">
              <h2 className="font-serif text-xl font-medium mb-1" style={{ color: '#1C1C1C' }}>
                Book a free design consult
              </h2>
              <p className="text-xs text-gray-500">No commitment. 30-minute call.</p>
            </div>
            <div className="px-5 sm:px-6 pb-6">
              <LeadFormC4 />
            </div>
          </div>
        </div>

        {/* Desktop Layout */}
        <div className="hidden md:flex relative z-10 w-full px-8 max-w-7xl mx-auto items-center justify-between pt-28">
          {/* Left: Copy */}
          <div className="text-white flex-1 max-w-xl">
            <div className="inline-flex mb-6 px-4 py-2 border border-white/40 rounded-full whitespace-nowrap">
              <span className="text-xs font-medium tracking-widest uppercase flex items-center gap-2">
                <span className="text-white">★★★★★</span>
                <span>5-Star Rated on Google</span>
              </span>
            </div>

            <Suspense fallback={<HeroCopyMarkup copy={DEFAULT_COPY} />}>
              <HeroCopyContent />
            </Suspense>

            <div className="flex gap-8 mb-10">
              <div>
                <p className="text-4xl font-serif font-medium text-white">15 yrs</p>
                <p className="text-sm text-gray-300 mt-1">Warranty. First 5 Free Replacement.</p>
              </div>
              <div>
                <p className="text-4xl font-serif font-medium text-white">45 days*</p>
                <p className="text-sm text-gray-300 mt-1">Execution Timeline</p>
              </div>
              <div>
                <p className="text-4xl font-serif font-medium text-white">Eleven+</p>
                <p className="text-sm text-gray-300 mt-1">Years of Expertise</p>
              </div>
            </div>

            <ul className="space-y-3 text-sm text-white">
              <Suspense fallback={<HeroChecklistMarkup checklistItem={DEFAULT_COPY.checklistItem} />}>
                <HeroChecklistContent />
              </Suspense>
            </ul>
          </div>

          {/* Right: Form Card */}
          <div className="flex-1 flex justify-end pt-20 pb-20">
            <div className="w-full max-w-sm bg-white rounded-lg shadow-2xl overflow-hidden">
              <div className="px-6 pt-8 pb-4">
                <h2 className="font-serif text-xl font-medium mb-1" style={{ color: '#1C1C1C' }}>
                  Book a free design consult
                </h2>
                <p className="text-xs text-gray-500">No commitment. 30-minute call.</p>
              </div>
              <div className="px-6 pb-16">
                <LeadFormC4 />
              </div>
            </div>
          </div>
        </div>

        {/* Scroll Indicator - Desktop only */}
        <div className="hidden md:flex absolute bottom-8 left-1/2 -translate-x-1/2 flex-col items-center z-20">
          <span className="text-xs text-white/60 mb-2 tracking-widest uppercase font-light">Scroll to explore</span>
          <svg className="w-4 h-6 text-white/60 animate-bounce" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
          </svg>
        </div>
      </div>
    </div>
  )
}
