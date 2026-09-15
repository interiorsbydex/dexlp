'use client'

import Image from 'next/image'
import Link from 'next/link'
import { useEffect, useState } from 'react'

export function NavC3() {
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 10)
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 flex items-center justify-between px-6 md:px-12 py-4 transition-all duration-300`}
      style={{
        background: '#FAFAFA',
        borderBottom: scrolled ? '1px solid #DEDEDE' : 'none',
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
          style={{ filter: 'invert(0) brightness(0.8)' }}
          priority
        />
      </Link>

      {/* Empty space for future use */}
      <div className="w-8" />
    </nav>
  )
}
