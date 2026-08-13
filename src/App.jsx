import React, { useEffect, useState } from 'react'
import AboutPage from './pages/AboutPage'
import HomePage from './HomePage'
import GetInvolvedPage from './pages/GetInvolvedPage'
import OurImpactPage from './pages/OurImpactPage'
import GalleryPage from './pages/GalleryPage'
import ContactPage from './pages/ContactPage'
import DonatePage from './pages/DonatePage'
import AnnualReportsPage from './pages/AnnualReportsPage'
import ReportsPage from './pages/ReportsPage'
import ReportViewer from './pages/ReportViewer'
import PrivacyPolicyPage from './pages/PrivacyPolicyPage'
import TermsOfServicePage from './pages/TermsOfServicePage'
import FaqsPage from './pages/FaqsPage'
import TeamPage from './pages/TeamPage'
import VolunteerPage from "./pages/VolunteerPage";// import WhoWeArePage from './pages/WhoWeArePage'
import PartnerPage from "./pages/PartnerPage";
import WhoWeServePage from './pages/WhoWeServePage'
import EducationProgramPage from './pages/EducationProgramPage'
import LivelihoodActivitiesPage from './pages/LivelihoodActivitiesPage'
import ProtectionActivitiesPage from './pages/ProtectionActivitiesPage'
import GBVResponsePage from './pages/GBVResponsePage'
import ProgramsPage from './pages/ProgramsPage'
import CookieConsentBanner from './components/CookieConsentBanner'
import BackToTopButton from './components/BackToTopButton'
import HomeFooter from './components/HomeFooter'
import TranslationContext from './TranslationContext'
import translations, { languages } from './translations'

const APP_ROUTES = new Set(['/', '/about', '/about-us', '/who-we-are', '/who-we-serve', '/our-team', '/team', '/programs', '/our-programs', '/get-involved','/volunteer','/reports','/partner','/our-impact', '/gallery', '/galary', '/contact-us', '/contact', '/donate', '/annual-reports', '/privacy-policy', '/terms-of-service', '/faqs', '/faq', '/education-program', '/livelihood-activities', '/livelyhood-activities', '/protection-activities', '/gbv-response-prevention'])

function App() {
  const [path, setPath] = useState(() => window.location.pathname.toLowerCase())
  const [language, setLanguage] = useState(() => {
    if (typeof window === 'undefined') return 'en'
    return window.localStorage.getItem('language') || 'en'
  })

  useEffect(() => {
    const handleRouteChange = () => {
      setPath(window.location.pathname.toLowerCase())
    }

    window.addEventListener('popstate', handleRouteChange)
    window.addEventListener('app:navigate', handleRouteChange)

    return () => {
      window.removeEventListener('popstate', handleRouteChange)
      window.removeEventListener('app:navigate', handleRouteChange)
    }
  }, [])

  useEffect(() => {
    window.localStorage.setItem('language', language)
  }, [language])

  useEffect(() => {
    const handleDocumentNavigation = (event) => {
      if (event.defaultPrevented || event.button !== 0) {
        return
      }

      if (event.metaKey || event.ctrlKey || event.shiftKey || event.altKey) {
        return
      }

      const anchor = event.target.closest('a[href]')
      if (!anchor) {
        return
      }

      if (anchor.target && anchor.target !== '_self') {
        return
      }

      if (anchor.hasAttribute('download')) {
        return
      }

      const href = anchor.getAttribute('href')
      if (!href || href.startsWith('mailto:') || href.startsWith('tel:') || href.startsWith('javascript:')) {
        return
      }

      let url
      try {
        url = new URL(href, window.location.origin)
      } catch {
        return
      }

      if (url.origin !== window.location.origin) {
        return
      }

      const nextPath = url.pathname.toLowerCase()
      if (!APP_ROUTES.has(nextPath)) {
        return
      }

      const nextHash = url.hash
      const currentPath = window.location.pathname.toLowerCase()
      const currentHash = window.location.hash
      if (nextPath === currentPath && nextHash === currentHash) {
        return
      }

      event.preventDefault()
      history.pushState({}, '', `${nextPath}${nextHash}`)
      window.dispatchEvent(new Event('app:navigate'))

      if (nextHash) {
        window.setTimeout(() => {
          const hashId = nextHash.slice(1)
          const targetElement = hashId ? document.getElementById(hashId) : null
          if (targetElement) {
            targetElement.scrollIntoView({ behavior: 'smooth', block: 'start' })
          }
        }, 80)
      } else if (nextPath !== currentPath) {
        window.scrollTo({ top: 0, behavior: 'smooth' })
      }
    }

    document.addEventListener('click', handleDocumentNavigation)
    return () => document.removeEventListener('click', handleDocumentNavigation)
  }, [])

  useEffect(() => {
    if (typeof window === 'undefined' || !('IntersectionObserver' in window)) {
      return undefined
    }

    const sections = Array.from(document.querySelectorAll('.page-shell section'))
    if (sections.length === 0) {
      return undefined
    }

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.remove('scroll-reveal-pending')
            entry.target.classList.add('scroll-reveal-in')
            observer.unobserve(entry.target)
          }
        })
      },
      { threshold: 0.14, rootMargin: '0px 0px -8% 0px' }
    )

    sections.forEach((section) => {
      const rect = section.getBoundingClientRect()
      const alreadyVisible = rect.top <= window.innerHeight * 0.92

      section.classList.remove('scroll-reveal-pending', 'scroll-reveal-in')

      if (alreadyVisible) {
        section.classList.add('scroll-reveal-in')
      } else {
        section.classList.add('scroll-reveal-pending')
        observer.observe(section)
      }
    })

    return () => observer.disconnect()
  }, [path])

  let currentPage = <HomePage />

  if (path === '/about-us' || path === '/about') {
    currentPage = <AboutPage />
  }

  // if (path === '/who-we-are') {
  //   currentPage = <WhoWeArePage />
  // }

  if (path === '/who-we-serve') {
    currentPage = <WhoWeServePage />
  }

  if (path === '/our-programs' || path === '/programs') {
    currentPage = <ProgramsPage />
  }

  if (path === '/get-involved') {
    currentPage = <GetInvolvedPage />
  }
  if (path === '/volunteer') {
  currentPage = <VolunteerPage />
  }
  if (path === '/partner') {
  currentPage = <PartnerPage />
}

  if (path === '/our-impact') {
    currentPage = <OurImpactPage />
  }

  if (path === '/gallery' || path === '/galary') {
    currentPage = <GalleryPage />
  }

  if (path === '/contact-us' || path === '/contact') {
    currentPage = <ContactPage />
  }

  if (path === '/donate') {
    currentPage = <DonatePage />
  }

  if (path === '/annual-reports') {
    currentPage = <AnnualReportsPage />
  }
  if (path === '/reports') {
  currentPage = <ReportsPage />
}
if (path === '/report-viewer') {
  currentPage = <ReportViewer />
}

  if (path === '/privacy-policy') {
    currentPage = <PrivacyPolicyPage />
  }

  if (path === '/terms-of-service') {
    currentPage = <TermsOfServicePage />
  }

  if (path === '/faqs' || path === '/faq') {
    currentPage = <FaqsPage />
  }

  if (path === '/our-team' || path === '/team') {
    currentPage = <TeamPage />
  }

  if (path === '/education-program') {
    currentPage = <EducationProgramPage />
  }

  if (path === '/livelihood-activities' || path === '/livelyhood-activities') {
    currentPage = <LivelihoodActivitiesPage />
  }

  if (path === '/protection-activities') {
    currentPage = <ProtectionActivitiesPage />
  }

  if (path === '/gbv-response-prevention') {
    currentPage = <GBVResponsePage />
  }

  useEffect(() => {
    if (typeof document === 'undefined') {
      return
    }
    document.documentElement.lang = language
  }, [language])

  const t = (key) => translations[language]?.[key] ?? translations.en[key] ?? key
  currentPage = React.cloneElement(currentPage, { t })

  return (
    <TranslationContext.Provider value={{ t, language, setLanguage, languages }}>
      <div key={path} className="page-shell route-fade-in">{currentPage}</div>
      <HomeFooter language={language} setLanguage={setLanguage} t={t} languages={languages} />
      <BackToTopButton />
      <CookieConsentBanner />
    </TranslationContext.Provider>
  )
}

export default App
