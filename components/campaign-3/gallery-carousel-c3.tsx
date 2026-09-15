'use client'

import { useState } from 'react'
import Image from 'next/image'

export function GalleryCarouselC3() {
  const [currentIndex, setCurrentIndex] = useState(0)
  const images = [
    { src: '/images/projects/project-1.png', alt: 'Modern contemporary living' },
    { src: '/images/projects/project-2.png', alt: 'Entertainment area design' },
    { src: '/images/projects/project-3.png', alt: 'Entrance foyer interior' },
    { src: '/images/projects/project-4.png', alt: 'Living room showcase' },
    { src: '/images/projects/project-5.png', alt: 'Dining space design' },
    { src: '/images/projects/project-6.png', alt: 'Modern kitchen design' },
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
          className="text-4xl md:text-5xl font-serif text-center mb-12"
          style={{
            color: '#111111',
            fontFamily: '"Cormorant Garamond", serif',
            fontWeight: 600,
            letterSpacing: '0.02em',
          }}
        >
          Transformations we're proud of
        </h2>

        {/* Carousel */}
        <div className="relative max-w-4xl mx-auto">
          <div
            className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8"
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
