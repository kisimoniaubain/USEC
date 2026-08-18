import { useContext, useEffect, useRef, useState } from 'react'
import TranslationContext from '../TranslationContext'
import navlogo from '../assets/logo.png'
import GoogleTranslate from "./GoogleTranslate";


const aboutDropdownItems = [
  { label: 'About us', href: '/about' },
  // { label: 'Who We Are', href: '/who-we-are' },
  { label: 'Who We Serve', href: '/who-we-serve' },
  { label: 'Our team', href: '/our-team' },
  { label: 'Reports & Publications', href: '/reports' },
  { label: 'FAQs', href: '/faqs' },
]
const programDropdownItems = [
  { label: 'Education Activities', href: '/education-program' },
  { label: 'Protection Activities', href: '/protection-activities' },
  { label: 'Livelihood Activities', href: '/livelihood-activities' },
  { label: 'GBV Response & Prevention', href: '/gbv-response-prevention' },
]

function SiteNavbar({ activePage = 'home' }) {
  const { t } = useContext(TranslationContext)
  const [isDrawerOpen, setIsDrawerOpen] = useState(false)
  const [openMenu, setOpenMenu] = useState(null)
  const [lockedMenu, setLockedMenu] = useState(null)
  const desktopNavRef = useRef(null)

  const linkClass = 'text-on-surface-variant font-label-md text-[13px] xl:text-label-md leading-none whitespace-nowrap hover:opacity-80 transition-opacity'
  const activeClass = 'text-vibrant-orange font-bold font-label-md text-[13px] xl:text-label-md leading-none whitespace-nowrap'

  useEffect(() => {
    const handleOutsideClick = (event) => {
      if (desktopNavRef.current && !desktopNavRef.current.contains(event.target)) {
        setOpenMenu(null)
        setLockedMenu(null)
      }
    }

    document.addEventListener('mousedown', handleOutsideClick)
    return () => document.removeEventListener('mousedown', handleOutsideClick)
  }, [])

  const handleMenuHover = (menu) => {
    if (!lockedMenu) {
      setOpenMenu(menu)
    }
  }

  const handleMenuLeave = (menu) => {
    if (!lockedMenu) {
      setOpenMenu((current) => (current === menu ? null : current))
    }
  }

  const handleMenuClick = (menu) => {
    if (lockedMenu === menu) {
      setLockedMenu(null)
      setOpenMenu(null)
      return
    }

    setLockedMenu(menu)
    setOpenMenu(menu)
  }

  const handleNavigate = (event, href) => {
    if (!href || !href.startsWith('/')) {
      return
    }

    event.preventDefault()

    const [targetPathRaw, hashRaw] = href.split('#')
    const targetPath = (targetPathRaw || window.location.pathname).toLowerCase()
    const targetHash = hashRaw ? `#${hashRaw}` : ''
    const currentPath = window.location.pathname.toLowerCase()

    setIsDrawerOpen(false)
    setOpenMenu(null)
    setLockedMenu(null)

    if (currentPath !== targetPath) {
      history.pushState({}, '', `${targetPath}${targetHash}`)
      window.dispatchEvent(new Event('app:navigate'))

      if (targetHash) {
        window.setTimeout(() => {
          const targetElement = document.getElementById(hashRaw)
          if (targetElement) {
            targetElement.scrollIntoView({ behavior: 'smooth', block: 'start' })
          }
        }, 80)
      } else {
        window.scrollTo({ top: 0, behavior: 'smooth' })
      }
      return
    }

    if (targetHash) {
      history.pushState({}, '', `${targetPath}${targetHash}`)
      const targetElement = document.getElementById(hashRaw)
      if (targetElement) {
        targetElement.scrollIntoView({ behavior: 'smooth', block: 'start' })
      }
    } else {
      history.pushState({}, '', targetPath)
      window.dispatchEvent(new Event('app:navigate'))
      window.scrollTo({ top: 0, behavior: 'smooth' })
    }
  }

  return (
    <>
<header className="fixed top-0 z-50 w-full h-16 sm:h-20 md:h-24 lg:h-24 border-b border-surface-variant/20 bg-surface/95 backdrop-blur-sm">

  <div className="mx-auto flex h-full w-full max-w-container-max items-center px-3 sm:px-4 md:px-8 lg:px-10">

    <a
      href="/"
      className="flex items-center gap-1 shrink-0 lg:mr-8 xl:mr-10"
    >
      <img
        src={navlogo}
        alt="USEC.org home"
        className="h-12 sm:h-14 md:h-20 w-auto object-contain"
      />

      <div className="mb-1 sm:mb-2 flex flex-col leading-none">

        <span className="font-extrabold text-xl sm:text-2xl md:text-3xl text-primary tracking-tight">
          USEC<span className="text-vibrant-orange font-normal">.org</span>
        </span>

        <span className="mt-0.5 sm:mt-1 text-[7px] sm:text-[9px] md:text-[10px] font-semibold uppercase tracking-[0.05em] text-on-surface-variant">
          Community Based<br />Organisation
        </span>

      </div>
    </a>


    {/* DIVIDER — unchanged on desktop, hidden on mobile */}
    <div className="bg-primary/50 hidden md:block w-px min-h-[70px] bg-on-surface-variant shrink-0 rounded-full" />


    {/* DESKTOP NAV — unchanged */}
    <nav
      ref={desktopNavRef}
      className="hidden lg:flex flex-1 items-center justify-center gap-5 xl:gap-7"
    >

      <a
        href="/"
        onClick={(event) => handleNavigate(event, '/')}
        className={activePage === 'home' ? activeClass : linkClass}
      >
        {t('home')}
      </a>

      <div
        className="relative"
        onMouseEnter={() => handleMenuHover('about')}
        onMouseLeave={() => handleMenuLeave('about')}
      >
        <button
          type="button"
          onClick={() => handleMenuClick('about')}
          className={`${activePage === 'about' ? activeClass : linkClass} inline-flex items-center gap-1 shrink-0`}
        >
          {t('about')}

          <span
            className={`material-symbols-outlined text-base transition-transform duration-200 ${
              openMenu === 'about'
                ? 'rotate-180 text-vibrant-orange'
                : ''
            }`}
          >
            expand_more
          </span>
        </button>

        <div
          className={`absolute left-0 top-full mt-3 min-w-72 rounded-xl bg-surface/95 backdrop-blur-sm origin-top transition-all duration-200 ${
            openMenu === 'about'
              ? 'opacity-100 scale-100 pointer-events-auto'
              : 'opacity-0 scale-95 pointer-events-none'
          }`}
        >
          <div className="px-3 py-2 border-b border-surface-variant/40">
            <span className="text-xs font-bold tracking-[0.12em] uppercase text-vibrant-orange">
              {t('aboutUs')}
            </span>
          </div>

          <div className="py-1">
            {aboutDropdownItems.map((item) => (
              <a
                key={item.label}
                href={item.href}
                onClick={(event) => handleNavigate(event, item.href)}
                className="mx-2 my-1 flex items-center justify-between rounded-lg px-3.5 py-3 text-base font-semibold text-on-surface-variant hover:bg-surface-cream hover:text-primary transition-colors"
              >
                <span>{item.label}</span>

                <span className="material-symbols-outlined text-base opacity-60">
                  arrow_outward
                </span>
              </a>
            ))}
          </div>
        </div>
      </div>


      <div
        className="relative"
        onMouseEnter={() => handleMenuHover('programs')}
        onMouseLeave={() => handleMenuLeave('programs')}
      >
        <button
          type="button"
          onClick={() => handleMenuClick('programs')}
          className={`${activePage === 'programs' ? activeClass : linkClass} inline-flex items-center gap-1 shrink-0`}
        >
          {t('programs')}

          <span
            className={`material-symbols-outlined text-base transition-transform duration-200 ${
              openMenu === 'programs'
                ? 'rotate-180 text-vibrant-orange'
                : ''
            }`}
          >
            expand_more
          </span>
        </button>

        <div
          className={`absolute left-0 top-full mt-3 min-w-80 rounded-xl bg-surface/95 backdrop-blur-sm origin-top transition-all duration-200 ${
            openMenu === 'programs'
              ? 'opacity-100 scale-100 pointer-events-auto'
              : 'opacity-0 scale-95 pointer-events-none'
          }`}
        >
          <div className="px-3 py-2 border-b border-surface-variant/40">
            <span className="text-xs font-bold tracking-[0.12em] uppercase text-vibrant-orange">
              {t('programs')}
            </span>
          </div>

          <div className="py-1">
            {programDropdownItems.map((item) => (
              <a
                key={item.label}
                href={item.href}
                onClick={(event) => handleNavigate(event, item.href)}
                className="mx-2 my-1 flex items-center justify-between rounded-lg px-3.5 py-3 text-base font-semibold text-on-surface-variant hover:bg-surface-cream hover:text-primary transition-colors"
              >
                <span>{item.label}</span>

                <span className="material-symbols-outlined text-base opacity-60">
                  arrow_outward
                </span>
              </a>
            ))}
          </div>
        </div>
      </div>


      <a
        href="/get-involved"
        onClick={(event) => handleNavigate(event, '/get-involved')}
        className={activePage === 'get-involved' ? activeClass : linkClass}
      >
        {t('join')}
      </a>

      <a
        href="/our-impact"
        onClick={(event) => handleNavigate(event, '/our-impact')}
        className={activePage === 'our-impact' ? activeClass : linkClass}
      >
        {t('impact')}
      </a>

      <a
        href="/gallery"
        onClick={(event) => handleNavigate(event, '/gallery')}
        className={activePage === 'gallery' ? activeClass : linkClass}
      >
        {t('gallery')}
      </a>

      <a
        href="/contact-us"
        onClick={(event) => handleNavigate(event, '/contact-us')}
        className={activePage === 'contact' ? activeClass : linkClass}
      >
        {t('contact')}
      </a>

    </nav>


    {/* RIGHT SIDE — YOUR DONATE BUTTON IS UNCHANGED */}
    <div className="ml-auto lg:ml-8 xl:ml-10 flex items-center gap-3 shrink-0">

      <button
        onClick={(event) => handleNavigate(event, '/donate')}
        className="no-cta-shadow hidden md:inline-flex bg-vibrant-orange text-white px-6 py-12 font-label-md text-label-md font-bold hover:opacity-90 active:scale-95 transition-all"
      >
        {t('donate')}
      </button>

      {/* MOBILE MENU */}
      <button
        className="lg:hidden text-deep-navy flex items-center justify-center"
        onClick={() => setIsDrawerOpen(true)}
        aria-label="Open menu"
      >
        <span className="material-symbols-outlined text-3xl">
          menu
        </span>
      </button>

    </div>

  </div>
</header>

      <div className={`fixed inset-y-0 left-0 z-[60] w-80 bg-surface-cream transition-transform duration-300 lg:hidden shadow-sm ${isDrawerOpen ? 'translate-x-0' : '-translate-x-full'}`}>
        <div className="p-6 flex flex-col h-full">
          <div className="flex items-center gap-2 md:gap-3 shrink-0 lg:mr-8 xl:mr-10">
          <a href="/" className="flex items-center gap-3 shrink-0">
            <img
              src="/usec-navbar-logo.png"
              alt="USEC Logo"
              className="h-14 md:h-16 w-auto object-contain"
            />

            <div className="flex flex-col leading-none">
              <span className="font-extrabold text-xl md:text-2xl text-primary tracking-tight">
                USEC<span className="text-vibrant-orange font-normal">.org</span>
              </span>
          <span className="mt-1 text-[8px] md:text-[9px] font-semibold uppercase tracking-[0.05em] text-on-surface-variant">
            Community Based<br />
            Organisation
          </span>

            </div>
          </a>
            <div className="">
            <button onClick={() => setIsDrawerOpen(false)}>
              <span className="ml-20 material-symbols-outlined text-on-surface-variant">close</span>
            </button>
            </div>
          </div>
          <nav className="flex flex-col gap-2">
            <a onClick={(event) => handleNavigate(event, '/')} className={`p-4 font-label-md text-label-md ${activePage === 'home' ? 'text-vibrant-orange bg-surface-container-high font-bold rounded-r-full translate-x-1' : 'text-on-surface-variant hover:bg-surface-container-low'}`} href="/">{t('home')}</a>
            <a onClick={(event) => handleNavigate(event, '/about-us')} className={`p-4 font-label-md text-label-md ${activePage === 'about' ? 'text-vibrant-orange bg-surface-container-high font-bold rounded-r-full translate-x-1' : 'text-on-surface-variant hover:bg-surface-container-low'}`} href="/about-us">{t('about')}</a>
            <a onClick={(event) => handleNavigate(event, '/our-programs')} className={`p-4 font-label-md text-label-md ${activePage === 'programs' ? 'text-vibrant-orange bg-surface-container-high font-bold rounded-r-full translate-x-1' : 'text-on-surface-variant hover:bg-surface-container-low'}`} href="/our-programs">{t('programs')}</a>
            <a onClick={(event) => handleNavigate(event, '/get-involved')} className={`p-4 font-label-md text-label-md ${activePage === 'get-involved' ? 'text-vibrant-orange bg-surface-container-high font-bold rounded-r-full translate-x-1' : 'text-on-surface-variant hover:bg-surface-container-low'}`} href="/get-involved">{t('join')}</a>
            <a onClick={(event) => handleNavigate(event, '/our-impact')} className={`p-4 font-label-md text-label-md ${activePage === 'our-impact' ? 'text-vibrant-orange bg-surface-container-high font-bold rounded-r-full translate-x-1' : 'text-on-surface-variant hover:bg-surface-container-low'}`} href="/our-impact">{t('impact')}</a>
            <a onClick={(event) => handleNavigate(event, '/gallery')} className={`p-4 font-label-md text-label-md ${activePage === 'gallery' ? 'text-vibrant-orange bg-surface-container-high font-bold rounded-r-full translate-x-1' : 'text-on-surface-variant hover:bg-surface-container-low'}`} href="/gallery">{t('gallery')}</a>
            <a onClick={(event) => handleNavigate(event, '/contact-us')} className={`p-4 font-label-md text-label-md ${activePage === 'contact' ? 'text-vibrant-orange bg-surface-container-high font-bold rounded-r-full translate-x-1' : 'text-on-surface-variant hover:bg-surface-container-low'}`} href="/contact-us">{t('contact')}</a>
            <a onClick={(event) => handleNavigate(event, '/donate')} className={`p-4 font-label-md text-label-md ${activePage === 'donate' ? 'text-vibrant-orange bg-surface-container-high font-bold rounded-r-full translate-x-1' : 'text-on-surface-variant hover:bg-surface-container-low'}`} href="/donate">{t('donate')}</a>
          </nav>
        </div>
      </div>
    </>
  )
}

export default SiteNavbar
