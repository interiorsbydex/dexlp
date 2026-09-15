import { ChefHat, Home, Building2, Warehouse, Castle } from 'lucide-react'

export function ServicesC4() {
  const services = [
    {
      icon: ChefHat,
      title: 'Modular Kitchens',
      description: 'Space-optimized layouts, in-house manufacturing, and a fixed quote before any work begins.',
    },
    {
      icon: Home,
      title: '2BHK Interiors',
      description: 'Complete design for 2BHK apartments, from the first LiDAR measurement to handover in 45 days*.',
    },
    {
      icon: Building2,
      title: '3BHK Interiors',
      description: 'Full 3BHK homes designed and built with documented pricing and our 15-year warranty.',
    },
    {
      icon: Warehouse,
      title: 'Full Home Interiors',
      description: 'End-to-end design for independent homes and apartments, room by room, on one transparent process.',
    },
    {
      icon: Castle,
      title: 'Luxury Villas',
      description: 'Premium villa interiors in Chennai with bespoke design, premium materials, and dedicated project management.',
    },
  ]

  return (
    <section className="py-16 md:py-20" style={{ background: '#FAFAF8' }}>
      <div className="max-w-6xl mx-auto px-6">
        <p
          className="text-center text-sm font-medium mb-2"
          style={{ color: '#BFA07A', letterSpacing: '0.05em', textTransform: 'uppercase' }}
        >
          What We Design
        </p>
        <h2
          className="text-3xl md:text-4xl font-serif text-center mb-4"
          style={{
            color: '#111111',
            fontFamily: '"Cormorant Garamond", serif',
            fontWeight: 600,
            letterSpacing: '0.02em',
          }}
        >
          Interior Design Services in Chennai
        </h2>
        <p className="text-center text-base max-w-2xl mx-auto mb-12" style={{ color: '#717171' }}>
          From a single modular kitchen to a full 2BHK, 3BHK, or luxury villa, every project comes with documented pricing and our 15-year warranty.
        </p>

        <div className="grid grid-cols-2 md:grid-cols-5 gap-4 md:gap-6">
          {services.map((service, i) => {
            const Icon = service.icon
            return (
              <div
                key={i}
                className="flex flex-col items-center text-center p-4 md:p-5 rounded-lg"
                style={{ background: '#FFFFFF', border: '1px solid #EAE7E0' }}
              >
                <div
                  className="w-12 h-12 rounded-full flex items-center justify-center mb-3"
                  style={{ background: '#F2F0EB' }}
                >
                  <Icon className="w-5 h-5" style={{ color: '#BFA07A' }} strokeWidth={1.75} />
                </div>
                <h3 className="text-sm font-semibold mb-1.5" style={{ color: '#111111' }}>
                  {service.title}
                </h3>
                <p className="text-xs leading-relaxed hidden md:block" style={{ color: '#717171' }}>
                  {service.description}
                </p>
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
