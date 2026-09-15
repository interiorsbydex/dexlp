'use client'

import { useState } from 'react'

const videos = [
  {
    id: 'n6cICZq4SoY',
    name: 'Prashanth Sachin',
    location: 'T. Nagar, Chennai',
  },
  {
    id: 'gyATrpI0ujM',
    name: 'Prarthana Abinesh',
    location: 'Kotturpuram, Chennai',
  },
  {
    id: 'mcx1tcDechw',
    name: 'Suganthi S',
    location: 'Adyar, Chennai',
  },
]

function VideoCard({ video }: { video: typeof videos[0] }) {
  const [playing, setPlaying] = useState(false)

  return (
    <div
      className="rounded-lg overflow-hidden border"
      style={{ borderColor: '#DEDEDE', background: '#111111' }}
    >
      {playing ? (
        <div className="relative" style={{ paddingBottom: '56.25%' }}>
          <iframe
            className="absolute inset-0 w-full h-full"
            src={`https://www.youtube.com/embed/${video.id}?autoplay=1&rel=0`}
            title={`Testimonial from ${video.name}`}
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
          />
        </div>
      ) : (
        <button
          onClick={() => setPlaying(true)}
          className="relative w-full group block"
          style={{ paddingBottom: '56.25%' }}
          aria-label="Play testimonial"
        >
          <img
            src={`https://img.youtube.com/vi/${video.id}/hqdefault.jpg`}
            alt="Testimonial"
            className="absolute inset-0 w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-black/30 group-hover:bg-black/20 transition" />
          <div className="absolute inset-0 flex items-center justify-center">
            <div
              className="w-16 h-16 rounded-full flex items-center justify-center transition group-hover:scale-110"
              style={{ background: 'rgba(255,255,255,0.92)' }}
            >
              <svg
                viewBox="0 0 24 24"
                fill="currentColor"
                className="w-7 h-7 ml-1"
                style={{ color: '#111111' }}
              >
                <path d="M8 5v14l11-7z" />
              </svg>
            </div>
          </div>
        </button>
      )}
    </div>
  )
}

export function VideoTestimonialsC3() {
  return (
    <section className="py-20 md:py-24" style={{ background: '#1A1A18' }}>
      <div className="max-w-6xl mx-auto px-4 md:px-6">
        <h2
          className="text-4xl md:text-5xl font-serif text-center mb-3 text-white"
          style={{
            fontFamily: '"Cormorant Garamond", serif',
            fontWeight: 600,
            letterSpacing: '0.02em',
          }}
        >
          Hear it from our clients.
        </h2>
        <p className="text-center mb-12 text-base" style={{ color: 'rgba(255,255,255,0.5)' }}>
          Real homeowners. Their words, not ours.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {videos.map((video) => (
            <VideoCard key={video.id} video={video} />
          ))}
        </div>
      </div>
    </section>
  )
}
