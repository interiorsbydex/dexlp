'use client'

import Image from 'next/image'
import { LeadFormC3 } from './lead-form-c3'

export function HeroC3() {
  return (
    <div id="hero-form" className="relative w-full">
      <div className="relative w-full min-h-screen flex flex-col md:flex-row items-stretch">

        {/* Background Image */}
        <div className="absolute inset-0 z-0">
          <Image
            src="/images/hero-bg.png"
            alt="Interior design showcase"
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
            <h1 className="font-serif text-4xl sm:text-5xl font-medium leading-tight mb-4 text-white">
              The interior company that puts everything in writing.
            </h1>
            <p className="text-base leading-relaxed text-white font-light mb-8">
              15-year warranty. 45-day delivery*. Documented process. No surprises.
            </p>

            {/* Mobile Stats */}
            <div className="flex gap-6 mb-8">
              <div>
                <p className="text-3xl font-serif font-medium text-white">15 yrs</p>
                <p className="text-xs text-gray-300 mt-1">Warranty · First 5 Free Replacement</p>
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
              {['15-Year Warranty · Free Replacement First 5 Years', 'Transparent Fixed Pricing', 'LiDAR Precision Measurement'].map(item => (
                <li key={item} className="flex items-start gap-2">
                  <span className="text-white flex-shrink-0">&#x2713;</span>
                  <span>{item}</span>
                </li>
              ))}
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
              <LeadFormC3 />
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

            <h1 className="font-serif text-5xl md:text-6xl font-medium leading-tight mb-6 text-white">
              The interior company that puts everything in writing.
            </h1>

            <p className="text-lg leading-relaxed mb-8 text-white font-light max-w-lg">
              15-year warranty. 45-day delivery*. Documented process. Compare us against any company in Chennai — in writing.
            </p>

            <div className="flex gap-8 mb-10">
              <div>
                <p className="text-4xl font-serif font-medium text-white">15 yrs</p>
                <p className="text-sm text-gray-300 mt-1">Warranty · First 5 Free Replacement</p>
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
              {['15-Year Warranty · Free Replacement First 5 Years', 'Transparent Fixed Pricing', 'LiDAR Precision Measurement'].map(item => (
                <li key={item} className="flex items-center gap-3">
                  <span className="text-white">&#x2713;</span>
                  {item}
                </li>
              ))}
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
                <LeadFormC3 />
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
