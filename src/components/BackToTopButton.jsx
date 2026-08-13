import { useEffect, useState } from 'react'

export default function BackToTopButton() {
  const [showPulse, setShowPulse] = useState(false)

  useEffect(() => {
    const onScroll = () => {
      setShowPulse(window.scrollY > 120)
    }

    window.addEventListener('scroll', onScroll)
    onScroll()
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  const handleBackToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' })
  }

  return (
    <button
      type="button"
      onClick={handleBackToTop}
      aria-label="Back to top"
      title="Back to top"
      className={`fixed right-6 bottom-24 z-[85] inline-flex h-12 w-12 items-center justify-center rounded-full border-2 border-primary bg-white text-deep-navy shadow-[0_10px_28px_rgba(3,51,71,0.2)] transition-all hover:-translate-y-0.5 hover:border-vibrant-orange hover:bg-vibrant-orange hover:text-white`}
    >
      <span className="material-symbols-outlined">keyboard_arrow_up</span>
    </button>
  )
}
