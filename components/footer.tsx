'use client'

import Image from 'next/image'
import Link from 'next/link'

export function Footer() {
  return (
    <footer
      className="flex flex-col items-center md:flex-row md:items-center md:justify-between gap-4 px-6 md:px-8 lg:px-16 py-6"
      style={{ background: '#1A1A18', borderTop: '1px solid #2E2E2E' }}
    >
      {/* Logo — centered on mobile */}
      <Link href="/" className="flex items-center justify-center">
        <Image
          src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/interiors_by_dex-inverse-2025-12-30-TfBzPMOk9wnLMaLWhwGXrHCp3h4nqQ.png"
          alt="Interiors by DeX"
          width={160}
          height={28}
          className="h-6 w-auto object-contain opacity-80"
        />
      </Link>

      {/* Centre — centered text, wraps cleanly on mobile */}
      <div className="text-center px-4">
        <p className="text-xs" style={{ color: '#6B6B6B' }}>
          <strong className="font-medium" style={{ color: '#9E9E9E' }}>Interiors by DeX</strong>
          {' '}· A unit of VaaN Ventures · GST: 33AAXFV4242L1ZK
        </p>
        <p className="text-xs mt-1 leading-relaxed" style={{ color: '#555' }}>
          1st Floor, MOTI Towers, 131/9, Rajiv Gandhi Salai,<br />Perungudi, Chennai — 600096
        </p>
      </div>

      {/* Right — links */}
      <div className="flex items-center gap-6">
        <a
          href="https://interiorsbydex.com/privacy-policy"
          target="_blank"
          rel="noopener noreferrer"
          className="text-xs transition-colors duration-200"
          style={{ color: '#6B6B6B' }}
          onMouseEnter={e => (e.currentTarget.style.color = '#C4622D')}
          onMouseLeave={e => (e.currentTarget.style.color = '#6B6B6B')}
        >
          Privacy Policy
        </a>
        <a
          href="https://interiorsbydex.com/terms-of-service"
          target="_blank"
          rel="noopener noreferrer"
          className="text-xs transition-colors duration-200"
          style={{ color: '#6B6B6B' }}
          onMouseEnter={e => (e.currentTarget.style.color = '#C4622D')}
          onMouseLeave={e => (e.currentTarget.style.color = '#6B6B6B')}
        >
          Terms
        </a>
      </div>
    </footer>
  )
}
