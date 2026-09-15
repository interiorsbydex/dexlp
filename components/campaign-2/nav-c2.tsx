'use client'

import Image from 'next/image'
import Link from 'next/link'
import { useEffect, useState } from 'react'

export function Nav() {
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 10)
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 flex items-center justify-between px-8 lg:px-16 py-4 transition-shadow duration-300 ${
        scrolled ? 'shadow-sm' : ''
      }`}
      style={{
        background: 'rgba(250,250,248,0.97)',
        backdropFilter: 'blur(14px)',
        borderBottom: '1px solid #E8E2DC',
      }}
    >
      {/* Logo */}
      <Link href="/" className="flex items-center">
        <Image
          src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/interiors_by_dex-inverse-2025-12-30-TfBzPMOk9wnLMaLWhwGXrHCp3h4nqQ.png"
          alt="Interiors by DeX"
          width={220}
          height={36}
          className="h-8 w-auto object-contain"
          style={{ filter: 'invert(1) sepia(1) saturate(3) hue-rotate(330deg) brightness(0.7)' }}
          priority
        />
      </Link>

      {/* Right: Empty for future use */}
      <div className="w-8" />
    </nav>
  )
}
