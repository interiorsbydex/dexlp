'use client'

import Image from 'next/image'
import { LeadForm } from './lead-form'

export function Hero() {
  return (
    <div className="relative w-full">
      {/* Hero Background Image */}
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
              Move into your dream home in 35 days.*
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

        {/* Desktop Layout */}
        <div className="hidden md:flex relative z-10 w-full px-8 max-w-7xl mx-auto items-center justify-between">
          {/* Left: Copy */}
          <div className="text-white flex-1">
            <div className="inline-flex mb-6 px-4 py-2 border border-white/40 rounded-full whitespace-nowrap">
              <span className="text-xs font-medium tracking-widest uppercase flex items-center gap-2 flex-nowrap">
                <span style={{ color: '#C4622D' }}>★★★★★</span>
                <span>5-Star Rated on Google</span>
              </span>
            </div>

            <h1 className="font-serif text-5xl md:text-6xl font-medium leading-tight mb-6 text-white">
              Move into your dream home in 35 days.*
            </h1>

            <p className="text-lg leading-relaxed mb-8 text-white font-light max-w-lg">
              Expert interior design tailored to your vision. From concept to completion, handled with complete ownership.
            </p>

            <div className="flex gap-8 mb-10">
              <div>
                <p className="text-4xl font-serif font-medium text-white">500+</p>
                <p className="text-sm text-gray-300 mt-1">Projects Completed</p>
              </div>
              <div>
                <p className="text-4xl font-serif font-medium text-white">35*</p>
                <p className="text-sm text-gray-300 mt-1">Days Average</p>
              </div>
              <div>
                <p className="text-4xl font-serif font-medium text-white">11+</p>
                <p className="text-sm text-gray-300 mt-1">Years of Expertise</p>
              </div>
            </div>

            <ul className="space-y-3 text-sm text-white">
              {['15-Year Warranty · Free Replacement First 5 Years', 'Transparent Pricing', 'Branded Materials Only'].map(item => (
                <li key={item} className="flex items-center gap-3">
                  <span style={{ color: '#C4622D' }}>✓</span>
                  {item}
                </li>
              ))}
            </ul>
          </div>

          {/* Right: Form Card */}
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
