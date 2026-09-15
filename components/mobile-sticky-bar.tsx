export function MobileStickyBar() {
  return (
    <div
      className="fixed bottom-0 left-0 right-0 z-50 px-4 py-3 md:hidden"
      style={{
        background: '#fff',
        borderTop: '1px solid #E8E2DC',
      }}
    >
      <a
        href="#hero-form-card"
        className="w-full flex items-center justify-center h-12 text-sm font-medium tracking-wide text-white"
        style={{ background: '#C4622D', borderRadius: '2px' }}
      >
        Get Free Consultation
      </a>
    </div>
  )
}
