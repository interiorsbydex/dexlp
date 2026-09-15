'use client'

import { useState } from 'react'
import Image from 'next/image'

export function GalleryCarouselC4() {
  const [currentIndex, setCurrentIndex] = useState(0)
  const images = [
    { src: '/images/projects/project-1.png', alt: 'Modern 3BHK living room interior design, Chennai', caption: '3BHK home, Chennai' },
    { src: '/images/projects/project-2.png', alt: 'Entertainment area interior design in a Chennai home', caption: 'Full home interior, Chennai' },
    { src: '/images/projects/project-3.png', alt: 'Entrance foyer interior design, Chennai residence', caption: '2BHK apartment, Chennai' },
    { src: '/images/projects/project-4.png', alt: 'Living room interior design showcase, Chennai apartment', caption: '3BHK apartment, Chennai' },
    { src: '/images/projects/project-5.png', alt: 'Dining space interior design, Chennai home', caption: 'Full home interior, Chennai' },
    { src: '/images/projects/project-6.png', alt: 'Modular kitchen design in Chennai', caption: 'Modular kitchen, Chennai' },
  ]

  const handlePrev = () => setCurrentIndex((prev) => (prev - 1 + images.length) % images.length)
  const handleNext = () => setCurrentIndex((prev) => (prev + 1) % images.length)

  return (
    <section
      className="py-20 md:py-24"
      style={{ background: '#F2F0EB' }}
    >
      <div className="max-w-6xl mx-auto px-6">
        <p
          className="text-center text-sm font-medium mb-2"
          style={{ color: '#2D6A4F', letterSpacing: '0.05em', textTransform: 'uppercase' }}
        >
          Our Portfolio
        </p>
        <h2
          className="text-4xl md:text-5xl font-serif text-center mb-4"
          style={{
            color: '#111111',
            fontFamily: '"Cormorant Garamond", serif',
            fontWeight: 600,
            letterSpacing: '0.02em',
          }}
        >
          Recently completed across Chennai
        </h2>

        {/* Carousel */}
        <div className="relative max-w-4xl mx-auto mt-10">
          <div
            className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-4"
            style={{ height: '400px', overflow: 'hidden' }}
          >
            {/* Main Image */}
            <div
              className="rounded-lg overflow-hidden col-span-1"
              style={{
                position: 'relative',
                height: '100%',
              }}
            >
              <Image
                src={images[currentIndex].src}
                alt={images[currentIndex].alt}
                width={400}
                height={400}
                className="w-full h-full object-cover"
              />
            </div>

            {/* Next Image Teaser */}
            <div
              className="hidden md:block rounded-lg overflow-hidden"
              style={{ height: '100%' }}
            >
              <Image
                src={images[(currentIndex + 1) % images.length].src}
                alt={images[(currentIndex + 1) % images.length].alt}
                width={400}
                height={400}
                className="w-full h-full object-cover opacity-60"
              />
            </div>
          </div>

          <p className="text-center text-sm mb-6" style={{ color: '#555555' }}>
            {images[currentIndex].caption}
          </p>

          {/* Navigation */}
          <div className="flex items-center justify-between">
            <button
              onClick={handlePrev}
              className="p-2 rounded-full transition hover:opacity-70"
              style={{
                background: '#FFFFFF',
                border: '1px solid #DEDEDE',
                color: '#2D6A4F',
              }}
              aria-label="Previous"
            >
              ←
            </button>

            <div className="flex gap-2">
              {images.map((_, i) => (
                <button
                  key={i}
                  onClick={() => setCurrentIndex(i)}
                  className="w-2 h-2 rounded-full transition"
                  style={{
                    background: i === currentIndex ? '#2D6A4F' : '#DDD',
                  }}
                  aria-label={`Go to image ${i + 1}`}
                />
              ))}
            </div>

            <button
              onClick={handleNext}
              className="p-2 rounded-full transition hover:opacity-70"
              style={{
                background: '#FFFFFF',
                border: '1px solid #DEDEDE',
                color: '#2D6A4F',
              }}
              aria-label="Next"
            >
              →
            </button>
          </div>
        </div>
      </div>
    </section>
  )
}
