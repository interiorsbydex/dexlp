'use client'

import { useState, useCallback } from 'react'
import useEmblaCarousel from 'embla-carousel-react'
import Image from 'next/image'

const GALLERY_IMAGES = [
  { id: 1, src: '/images/projects/project-1.png', alt: 'Modern contemporary living' },
  { id: 2, src: '/images/projects/project-2.png', alt: 'Entertainment area design' },
  { id: 3, src: '/images/projects/project-3.png', alt: 'Entrance foyer interior' },
  { id: 4, src: '/images/projects/project-4.png', alt: 'Living room showcase' },
  { id: 5, src: '/images/projects/project-5.png', alt: 'Dining space design' },
  { id: 6, src: '/images/projects/project-6.png', alt: 'Modern kitchen design' },
]

export function GalleryCarouselC2() {
  const [emblaRef, emblaApi] = useEmblaCarousel({ loop: true, align: 'start' })
  const [selectedIndex, setSelectedIndex] = useState(0)
  const [scrollSnaps, setScrollSnaps] = useState<number[]>([])

  const onDotButtonClick = useCallback(
    (index: number) => {
      if (!emblaApi) return
      emblaApi.scrollTo(index)
    },
    [emblaApi]
  )

  const onSelect = useCallback(() => {
    if (!emblaApi) return
    setSelectedIndex(emblaApi.selectedIndex())
  }, [emblaApi])

  const onInit = useCallback(() => {
    if (!emblaApi) return
    setScrollSnaps(emblaApi.scrollSnapList())
  }, [emblaApi])

  const prevButtonClick = useCallback(() => {
    if (emblaApi) emblaApi.scrollPrev()
  }, [emblaApi])

  const nextButtonClick = useCallback(() => {
    if (emblaApi) emblaApi.scrollNext()
  }, [emblaApi])

  if (emblaApi) {
    emblaApi.on('init', onInit)
    emblaApi.on('reInit', onInit)
    emblaApi.on('select', onSelect)
  }

  return (
    <section className="w-full bg-white py-12 md:py-20">
      <div className="max-w-7xl mx-auto px-4 md:px-6">
        {/* Section Header */}
        <div className="mb-10 md:mb-14 text-center">
          <p className="text-xs font-medium tracking-widest uppercase mb-3" style={{ color: '#1B4D3E' }}>
            Our Portfolio
          </p>
          <h2 className="font-serif text-4xl md:text-5xl font-medium mb-4" style={{ color: '#1A1A18' }}>
            Transformations We&apos;re Proud Of
          </h2>
          <p className="text-base leading-relaxed max-w-2xl mx-auto" style={{ color: '#666' }}>
            Each project tells a story of transformation. Explore our latest interior design work across Chennai.
          </p>
        </div>

        {/* Carousel Container */}
        <div className="relative">
          {/* Carousel */}
          <div ref={emblaRef} className="overflow-hidden">
            <div className="flex gap-4 md:gap-6">
              {GALLERY_IMAGES.map(image => (
                <div key={image.id} className="flex-[0_0_100%] md:flex-[0_0_50%] min-w-0">
                  <div className="relative aspect-square md:aspect-[4/3] rounded-lg overflow-hidden bg-gray-100">
                    <Image
                      src={image.src}
                      alt={image.alt}
                      fill
                      className="object-cover"
                      sizes="(max-width: 768px) 100vw, 50vw"
                    />
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Navigation Buttons */}
          <button
            onClick={prevButtonClick}
            className="absolute left-0 top-1/2 -translate-y-1/2 -translate-x-4 md:-translate-x-6 z-20 p-2 rounded-full transition-colors"
            style={{ background: '#1B4D3E', color: 'white' }}
            aria-label="Previous slide"
          >
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
            </svg>
          </button>

          <button
            onClick={nextButtonClick}
            className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-4 md:translate-x-6 z-20 p-2 rounded-full transition-colors"
            style={{ background: '#1B4D3E', color: 'white' }}
            aria-label="Next slide"
          >
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
            </svg>
          </button>
        </div>

        {/* Dot Indicators */}
        <div className="flex justify-center gap-2 mt-8">
          {scrollSnaps.map((_, index) => (
            <button
              key={index}
              onClick={() => onDotButtonClick(index)}
              className="transition-all duration-300 rounded-full"
              style={{
                width: selectedIndex === index ? '32px' : '8px',
                height: '8px',
                background: selectedIndex === index ? '#1B4D3E' : '#E0E0E0',
              }}
              aria-label={`Go to slide ${index + 1}`}
            />
          ))}
        </div>
      </div>
    </section>
  )
}
