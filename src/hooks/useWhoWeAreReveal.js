import { useLayoutEffect } from 'react'

function useWhoWeAreReveal() {
  useLayoutEffect(() => {
    if (typeof window === 'undefined' || !('IntersectionObserver' in window)) {
      return undefined
    }

    const targets = Array.from(document.querySelectorAll('.reveal-group, .reveal-section'))

    if (targets.length === 0) {
      return undefined
    }

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('opacity-100', 'translate-y-0')
            entry.target.classList.remove('opacity-0', 'translate-y-10')
            observer.unobserve(entry.target)
          }
        })
      },
      { threshold: 0.1, rootMargin: '0px 0px -8% 0px' }
    )

    targets.forEach((block) => {
      const rect = block.getBoundingClientRect()
      const isInitiallyVisible = rect.top <= window.innerHeight * 0.95

      if (isInitiallyVisible) {
        block.classList.add('opacity-100', 'translate-y-0')
        block.classList.remove('opacity-0', 'translate-y-10')
      } else {
        block.classList.add('opacity-0', 'translate-y-10')
        observer.observe(block)
      }
    })

    return () => observer.disconnect()
  }, [])
}

export default useWhoWeAreReveal
