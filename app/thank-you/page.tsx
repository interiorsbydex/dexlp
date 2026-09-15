'use client'

import { useEffect } from 'react'

export default function ThankYouPage() {
  useEffect(() => {
    if (typeof window !== 'undefined') {
      ;(window as any).dataLayer = (window as any).dataLayer || []
      ;(window as any).dataLayer.push({
        event: 'thank_you_page_view',
        page: 'thank-you',
      })
    }
  }, [])
  return (
    <main className="min-h-screen flex items-center justify-center px-4 py-20" style={{ background: '#FAFAF8' }}>
      <div className="max-w-md text-center">
        {/* Success Icon */}
        <div
          className="w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-6 text-3xl font-light"
          style={{ border: '2px solid #C4622D', color: '#C4622D' }}
        >
          ✓
        </div>

        {/* Heading */}
        <h1 className="font-serif text-4xl font-medium mb-3" style={{ color: '#1A1A18' }}>
          Thank You!
        </h1>

        {/* Subheading */}
        <p className="text-lg mb-6" style={{ color: '#666' }}>
          Your free consultation request has been received.
        </p>

        {/* Message */}
        <div className="bg-white p-6 rounded-lg mb-8 border border-gray-200">
          <p className="text-sm mb-4" style={{ color: '#6B6B6B' }}>
            Our team will reach out to you within <strong>24 hours</strong> at the contact details you provided.
          </p>
          <p className="text-sm" style={{ color: '#6B6B6B' }}>
            Expect a call to discuss your interior design needs, timeline, and budget.
          </p>
        </div>

        {/* What to Expect */}
        <div className="bg-amber-50 p-6 rounded-lg mb-8" style={{ borderLeft: '4px solid #C4622D' }}>
          <h3 className="font-medium mb-3" style={{ color: '#1A1A18' }}>
            What to Expect Next:
          </h3>
          <ul className="text-sm space-y-2 text-left" style={{ color: '#666' }}>
            <li>• Initial consultation call (15-20 mins)</li>
            <li>• Experience Centre Visit Scheduling</li>
            <li>• Detailed project proposal & timeline</li>
            <li>• Transparent cost breakdown</li>
          </ul>
        </div>

        {/* Social Proof */}
        <div className="mb-8 pb-8 border-b border-gray-200">
          <p className="text-xs font-medium tracking-widest uppercase mb-3" style={{ color: '#C4622D' }}>
            Trusted by 500+ Homeowners
          </p>
          <div className="flex justify-center gap-1">
            {[1, 2, 3, 4, 5].map(i => (
              <span key={i} className="text-lg">★</span>
            ))}
          </div>
          <p className="text-xs mt-2" style={{ color: '#666' }}>
            48 reviews on Google
          </p>
        </div>

        {/* CTAs */}
        <div className="space-y-3">
          <a
            href="/"
            className="block w-full py-3 text-sm font-medium tracking-widest uppercase text-white rounded transition-colors"
            style={{ background: '#C4622D' }}
            onMouseEnter={e => (e.currentTarget.style.background = '#A3501F')}
            onMouseLeave={e => (e.currentTarget.style.background = '#C4622D')}
          >
            Back to Home
          </a>

          <a
            href="https://share.google/kz1lzRtdpRrHCMCOu"
            target="_blank"
            rel="noopener noreferrer"
            className="block w-full py-3 text-sm font-medium tracking-widest uppercase rounded transition-colors border"
            style={{ color: '#C4622D', borderColor: '#C4622D', background: 'transparent' }}
            onMouseEnter={e => (e.currentTarget.style.background = '#FFF5F1')}
            onMouseLeave={e => (e.currentTarget.style.background = 'transparent')}
          >
            View Our Reviews
          </a>
        </div>

        {/* Contact Info */}
        <div className="mt-10 pt-8 border-t border-gray-200">
          <p className="text-xs mb-3" style={{ color: '#999' }}>
            Have questions? Reach out directly:
          </p>
          <p className="text-sm font-medium" style={{ color: '#C4622D' }}>
            +91 99400 22956
          </p>
          <p className="text-sm" style={{ color: '#666' }}>
            Available 10 AM - 7 PM, Tue - Sun
          </p>
        </div>
      </div>
    </main>
  )
}
