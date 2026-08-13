import { useContext, useEffect, useRef, useState } from 'react'
import '../App.css'
import SiteNavbar from '../components/SiteNavbar'
import TranslationContext from '../TranslationContext'
import useWhoWeAreReveal from '../hooks/useWhoWeAreReveal'
import hero1Image from '../assets/hero1.png'
import hero2Image from '../assets/hero2.png'
import hero3Image from '../assets/hero3.png'
import whoHeroImage from '../assets/images/Homeimages/who-hero.png'
import sustainableEcologyImage from '../assets/images/Homeimages/SustainableEcology.jpg'
import voice1Image from '../assets/images/Homeimages/voice1.png'
import voice2Image from '../assets/images/Homeimages/voice2.png'
import voice3Image from '../assets/images/Homeimages/voice3.png'
import mapImage from '../assets/images/Homeimages/map.jpg'
import partnersImage from '../assets/images/Homeimages/partners.jpg'
import earlyLearningImage from '../assets/images/early-learning.jpg'
// import footerBackgroundImage from '../assets/images/footer/footerimo.jpeg'
import footerBackgroundImage from '../assets/images/footer/footerbckgrd.png'
import israaidLogo from '../assets/images/partners/israaid-logo.png'
import binadamuLogo from '../assets/images/partners/binadamu.png'
import empowerLogo from '../assets/images/partners/empower.jpg'
import cohereLogo from '../assets/images/partners/cohere.jpg'
import kkrinLogo from '../assets/images/partners/kkrin.png'
import donateprotect from '../assets/images/Protection-imo/donate-protect.png'

const counters = [
  { value: '12M+', label: 'Lives Impacted', icon: 'groups' },
  { value: '45', label: 'Active Regions', icon: 'public' },
  { value: '89%', label: 'Direct Aid', icon: 'volunteer_activism' },
  { value: '24k', label: 'Volunteers', icon: 'diversity_3' },
]

const heroSlides = [
  {
    src: hero1Image,
    alt: 'Community members receiving humanitarian support',
  },
  {
    src: hero2Image,
    alt: 'Environmental restoration work in progress',
  },
  {
    src: hero3Image,
    alt: 'Field team engaging with local families',
  },
]

const partnerLogos = [
  { name: 'IsraAID', src: israaidLogo, href: 'https://www.israaid.org/' },
  { name: 'Binadamu Tech', src: binadamuLogo, href: 'https://www.linkedin.com/company/binadamu-tech/posts/' },
  { name: 'Cohere', src: cohereLogo, href: 'https://www.wearecohere.org/' },
  { name: 'Empower Van', src: empowerLogo, href: 'https://www.empowervan.org/' },
  { name: 'KKRIN', src: kkrinLogo, href: 'https://www.kkrin.org/' },
]

function HomePage() {
  const { t } = useContext(TranslationContext)
  useWhoWeAreReveal()
  const [activeSlide, setActiveSlide] = useState(0)
  const [activePartner, setActivePartner] = useState(0)
  const [partnerSidePad, setPartnerSidePad] = useState(0)
  const [subscribeStatus, setSubscribeStatus] = useState('idle')
  const [subscribeMessage, setSubscribeMessage] = useState('')
  const partnersTrackRef = useRef(null)

const handleSubscribeSubmit = async (event) => {
  event.preventDefault()

  const formData = new FormData(event.currentTarget)
  const email = String(formData.get('subscriberEmail') || '').trim()

  if (!email) return

  try {
    setSubscribeStatus('loading')
    setSubscribeMessage('Sending your subscription...')

    const response = await fetch('/api/subscribe', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ email }),
    })

    const payload = await response.json().catch(() => ({}))

    if (!response.ok) {
      throw new Error(payload?.error || 'Failed to subscribe')
    }

    setSubscribeStatus('success')
    setSubscribeMessage(
      'Thank you. Your subscription has been sent successfully.'
    )

    event.currentTarget.reset()

  } catch (error) {
    setSubscribeStatus('error')
    setSubscribeMessage(
      error instanceof Error
        ? error.message
        : 'Subscription failed. Please try again.'
    )
  }
}

  const scrollPartners = (direction) => {
    if (!partnersTrackRef.current) return
    const track = partnersTrackRef.current
    setActivePartner((previous) => {
      const next = Math.max(0, Math.min(previous + direction, partnerLogos.length - 1))
      if (next === previous) return previous
      const cards = track.querySelectorAll('[data-partner-card="true"]')
      const targetCard = cards[next]
      if (targetCard) {
        const targetLeft = targetCard.offsetLeft - (track.clientWidth - targetCard.clientWidth) / 2
        const maxLeft = track.scrollWidth - track.clientWidth
        const boundedLeft = Math.max(0, Math.min(targetLeft, maxLeft))
        track.scrollTo({
          left: boundedLeft,
          behavior: 'smooth',
        })
      }
      return next
    })
  }

  useEffect(() => {
    const track = partnersTrackRef.current
    if (!track) return

    const updatePartnerSidePad = () => {
      const firstCard = track.querySelector('[data-partner-card="true"]')
      if (!firstCard) return
      const nextPad = Math.max(0, (track.clientWidth - firstCard.clientWidth) / 2)
      setPartnerSidePad(nextPad)
    }

    updatePartnerSidePad()
    window.addEventListener('resize', updatePartnerSidePad)
    return () => window.removeEventListener('resize', updatePartnerSidePad)
  }, [])

  useEffect(() => {
    const track = partnersTrackRef.current
    if (!track) return

    const onTrackScroll = () => {
      const cards = Array.from(track.querySelectorAll('[data-partner-card="true"]'))
      if (!cards.length) return
      const viewportCenter = track.scrollLeft + track.clientWidth / 2
      let closestIndex = 0
      let smallestDistance = Number.POSITIVE_INFINITY

      cards.forEach((card, index) => {
        const cardCenter = card.offsetLeft + card.clientWidth / 2
        const distance = Math.abs(cardCenter - viewportCenter)
        if (distance < smallestDistance) {
          smallestDistance = distance
          closestIndex = index
        }
      })

      setActivePartner(closestIndex)
    }

    track.addEventListener('scroll', onTrackScroll, { passive: true })
    return () => track.removeEventListener('scroll', onTrackScroll)
  }, [])

  useEffect(() => {
    const intervalId = window.setInterval(() => {
      setActiveSlide((previous) => (previous + 1) % heroSlides.length)
    }, 5500)

    return () => window.clearInterval(intervalId)
  }, [])

  useEffect(() => {
    const onScroll = () => {
      const header = document.querySelector('header')
      if (!header) return
      if (window.scrollY > 20) {
        header.classList.add('shadow-lg', 'bg-white/95', 'backdrop-blur-md')
        header.classList.remove('bg-surface')
      } else {
        header.classList.remove('shadow-lg', 'bg-white/95', 'backdrop-blur-md')
        header.classList.add('bg-surface')
      }
    }

    window.addEventListener('scroll', onScroll)
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  const canScrollLeft = activePartner > 0
  const canScrollRight = activePartner < partnerLogos.length - 1

  return (
    <div className="bg-surface text-on-surface font-body-md overflow-x-hidden">
      <SiteNavbar activePage="home" />
      <main className="pt-20">
 <section className="relative flex min-h-[680px] h-[88vh] items-end overflow-hidden bg-primary sm:min-h-[650px] md:h-[85vh] md:min-h-[600px]">

  {/* =====================================================
      HERO BACKGROUND SLIDES
  ===================================================== */}
  <div className="absolute inset-0 h-full w-full">

    {heroSlides.map((slide, index) => {
      const isActive = activeSlide === index

      return (
        <img
          key={slide.src}
          className={`hero-slide absolute inset-0 h-full w-full object-cover ${
            isActive ? 'is-active' : 'is-inactive'
          }`}
          src={slide.src}
          alt={slide.alt}
          aria-hidden={!isActive}
        />
      )
    })}

    {/* Dark overlay */}
    <div className="absolute inset-0 bg-black/50 sm:bg-black/45 md:bg-black/50" />

    {/* =====================================================
        SLIDER DOTS
    ===================================================== */}
    <div className="absolute bottom-5 left-1/2 z-10 flex -translate-x-1/2 items-center gap-2 sm:bottom-7 md:bottom-8">

      {heroSlides.map((slide, index) => (
        <button
          key={slide.alt}
          type="button"
          onClick={() => setActiveSlide(index)}
          aria-label={`Go to slide ${index + 1}`}
          className={`hero-dot h-2.5 rounded-full transition-all duration-300 ${
            activeSlide === index
              ? 'w-8 bg-vibrant-orange sm:w-9'
              : 'w-2.5 bg-white/70 hover:bg-white'
          }`}
        />
      ))}

    </div>

  </div>


  {/* =====================================================
      HERO CONTENT
  ===================================================== */}
  <div className="relative z-10 container mx-auto w-full px-5 pb-20 sm:px-6 sm:pb-24 md:px-margin-desktop md:pb-24 lg:pb-28">

    <div className="max-w-4xl">

      {/* =================================================
          HEADING
      ================================================= */}
      <span className="inline-block max-w-full font-display-lg text-4xl font-bold leading-[1.05] text-white sm:text-5xl sm:leading-[1.08] md:text-6xl lg:text-7xl">

        {t('heroHeading')}

      </span>


      {/* =================================================
          DESCRIPTION
      ================================================= */}
      <p className="mt-5 max-w-3xl font-body-lg text-base leading-relaxed text-white/90 sm:mt-6 sm:text-lg sm:leading-relaxed md:mt-8 md:text-body-lg lg:max-w-4xl">

        {t('heroText')}

      </p>


      {/* =================================================
          BUTTONS
      ================================================= */}
      <div className="mt-7 flex w-full flex-col gap-3 sm:mt-8 sm:flex-row sm:flex-wrap sm:gap-4 md:mt-10">

        {/* Explore Programs */}
        <a
          href="/our-programs"
          className="no-cta-shadow inline-flex w-full items-center justify-center rounded-lg bg-vibrant-orange px-6 py-4 text-center font-label-md text-sm uppercase tracking-wider text-white transition-all duration-300 hover:-translate-y-0.5 hover:bg-vibrant-orange/90 sm:w-auto sm:px-8 sm:py-4 md:px-10 md:py-5 md:text-label-md"
        >
          {t('explorePrograms')}
        </a>


        {/* Join Us */}
        <a
          href="/get-involved"
          className="inline-flex w-full items-center justify-center rounded-lg border-2 border-white bg-transparent px-6 py-4 text-center font-label-md text-sm uppercase tracking-wider text-white transition-all duration-300 hover:-translate-y-0.5 hover:bg-white hover:text-primary sm:w-auto sm:px-8 sm:py-4 md:px-10 md:py-5 md:text-label-md"
        >
          {t('joinUs')}
        </a>

      </div>

    </div>

  </div>

</section>


        <section className="relative overflow-hidden py-20 md:py-28 lg:py-32 bg-surface-cream">
  
  {/* Decorative Background Circle */}
  <div className="absolute -top-40 left-[22%] w-[480px] h-[480px] rounded-full border-[80px] border-primary/10 pointer-events-none"></div>

  {/* Decorative Background Shape */}
  <div className="absolute -bottom-32 right-[-5%] w-[500px] h-[300px] bg-primary/80 rotate-[-25deg] rounded-[40%] pointer-events-none"></div>

  <div className="container relative z-10 mx-auto px-margin-mobile md:px-margin-desktop">
    <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">

      {/* LEFT - Content */}
      <div className="lg:col-span-6">

        {/* Heading */}
        <h1 className="font-display-lg text-4xl sm:text-5xl md:text-6xl lg:text-display-lg text-primary leading-[0.95] mb-5 sm:mb-6 md:mb-8">
          Who We Are
        </h1>

        {/* Intro Text */}
        <p className="font-headline-sm text-lg sm:text-xl md:text-2xl lg:text-headline-sm text-primary leading-relaxed mb-5 sm:mb-6 max-w-2xl">
          A grassroots, refugee-led organization advancing human dignity,
          resilience, environmental safety, and self-reliance among displaced
          and vulnerable communities.
        </p>

        {/* Main Description */}
        <p className="font-body-lg text-sm sm:text-base md:text-lg lg:text-body-lg text-on-surface-variant leading-7 sm:leading-8 max-w-2xl mb-5 sm:mb-6">
          Established in 2015 within the Kakuma Refugee Camp in Kenya, United
          Safe Environment Creators (USEC) is a grassroots, refugee-led
          community-based organization dedicated to fostering structural
          resilience, human dignity, and self-reliance among displaced
          populations.
        </p>

        <p className="font-body-lg text-sm sm:text-base md:text-lg lg:text-body-lg text-on-surface-variant leading-7 sm:leading-8 max-w-2xl">
          We are a coalition of dynamic, highly motivated humanitarian
          practitioners operating directly on the frontlines of forced
          displacement. Registered under the Ministry of Labor, Social
          Security, and Services (Reg: SCSDO/CBO/BO-201, Certificate No. 38613).
        </p>

        {/* Button */}
        <div className="mt-6 sm:mt-7 md:mt-8">
          <a
            href="/about-us#who-we-are"
            className="inline-flex items-center gap-2 sm:gap-3 bg-primary text-white px-6 sm:px-7 md:px-8 py-3 sm:py-3.5 md:py-4 rounded-md font-label-md text-xs sm:text-sm md:text-label-md uppercase tracking-wider hover:bg-vibrant-orange transition-all duration-300 group"
          >
            Learn More
            <span className="material-symbols-outlined text-lg sm:text-xl transition-transform duration-300 group-hover:translate-x-1">
              arrow_forward
            </span>
          </a>
        </div>

      </div>

      {/* RIGHT - Image */}
      <div className="lg:col-span-6 relative">

        {/* Image */}
    <div className="relative z-10 overflow-hidden rounded-2xl shadow-2xl">
      <img
        src={whoHeroImage}
        alt="USEC field teams collaborating with local communities"
        className="object-right w-full h-[500px] md:h-[600px] lg:h-[680px] object-cover object-[95%_center] transition-transform duration-700 hover:scale-105"
      />
    </div>
        {/* Orange Decorative Shape Behind Image */}
        <div className="absolute -bottom-10 -right-10 w-72 h-72 border-[55px] border-vibrant-orange/80 rounded-full"></div>

      </div>

    </div>
  </div>
</section>





        <section className="py-section-gap bg-surface">
          <div className="container mx-auto px-margin-mobile md:px-margin-desktop">
            <div className="flex flex-col md:flex-row justify-between items-start md:items-end mb-12 md:mb-16 gap-8 md:gap-6">

              {/* LEFT: Heading */}
              <div className="w-full md:max-w-2xl">
                <span className="font-label-sm text-label-sm uppercase tracking-[0.2em] text-vibrant-orange mb-3 md:mb-4 block">
                  Our Approach
                </span>

                <h2 className="font-display-lg text-4xl sm:text-5xl md:text-display-lg leading-[1.05] md:leading-tight text-primary">
                  Foundations of <br className="hidden sm:block" />
                  True Change
                </h2>
              </div>

              {/* RIGHT: Description */}
              <p className="w-full md:max-w-md font-body-md text-base sm:text-lg md:text-body-md leading-relaxed text-on-surface-variant md:pb-2">
                We don't just provide relief; we build resilience. Our model focuses on
                systemic equity and sustainable independence for every community we serve.
              </p>

            </div>

            <div className="bento-grid">
              <div className="col-span-12 md:col-span-8 bg-white p-12 border border-surface-variant/30 flex flex-col justify-between min-h-[400px] hover:shadow-2xl transition-all group">
                <div>
                  <span className="material-symbols-outlined text-4xl text-vibrant-orange mb-8">security</span>
                  <h3 className="font-headline-md text-headline-md text-primary mb-4">Crisis Resilience</h3>
                  <p className="font-body-md text-body-md text-on-surface-variant max-w-lg">Rapid response combined with long-term security infrastructure to ensure communities can withstand future shocks.</p>
                </div>
                <a href="/our-impact" className="flex items-center gap-2 font-label-md text-label-md text-primary group-hover:gap-4 transition-all cursor-pointer mt-8">
                  LEARN MORE <span className="material-symbols-outlined">arrow_forward</span>
                </a>
              </div>

              <div className="col-span-12 md:col-span-4 bg-primary p-12 text-white flex flex-col justify-between min-h-[400px] hover:bg-deep-navy transition-all group">
                <div>
                  <span className="material-symbols-outlined text-4xl text-vibrant-orange mb-8">school</span>
                  <h3 className="font-headline-md text-headline-md mb-4">Education Equity</h3>
                  <p className="font-body-md text-body-md opacity-80">Democratizing access to high-quality learning environments in the world's most remote corners.</p>
                </div>
                <a href="/our-programs" className="flex items-center gap-2 font-label-md text-label-md group-hover:gap-4 transition-all cursor-pointer mt-8">
                  VIEW PROGRAMS <span className="material-symbols-outlined">arrow_forward</span>
                </a>
              </div>

              <div className="col-span-12 bg-surface-cream p-12 border border-surface-variant/30 flex flex-col md:flex-row items-center gap-12 hover:shadow-2xl transition-all group">
                <div className="md:w-1/2 order-2 md:order-1">
                  <span className="material-symbols-outlined text-4xl text-vibrant-orange mb-8">eco</span>
                  <h3 className="font-headline-md text-headline-md text-primary mb-4">Sustainable Ecology</h3>
                  <p className="font-body-md text-body-md text-on-surface-variant mb-8">Integrating environmental stewardship with human development to protect both people and the planet.</p>
                  <a href="/protection-activities" className="inline-flex bg-primary text-white px-8 py-3 font-label-md text-label-md rounded-lg group-hover:bg-vibrant-orange transition-colors">Discover Initiatives</a>
                </div>
                <div className="md:w-1/2 h-64 md:h-[400px] w-full order-1 md:order-2 overflow-hidden rounded-lg">
                  <img className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700" src={sustainableEcologyImage} alt="Sustainable Ecology" />
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="py-section-gap bg-primary text-white overflow-hidden">
          <div className="container mx-auto px-margin-mobile md:px-margin-desktop relative">
            <div className="mx-auto mb-10 max-w-4xl px-4 text-center sm:mb-12 md:mb-16 md:px-0">
          <span className="mb-3 inline-block font-label-sm text-[0.65rem] uppercase tracking-[0.16em] text-vibrant-orange sm:mb-4 sm:text-label-sm sm:tracking-[0.22em]">
            Stories From The Field
          </span>

          <h2 className="mb-4 font-display-lg text-3xl leading-tight text-white sm:mb-5 sm:text-4xl md:mb-6 md:text-display-lg">
            Voices of Resilience
          </h2>

          <p className="mx-auto max-w-2xl font-body-lg text-base leading-relaxed text-white/75 sm:text-lg md:text-body-lg">
            Beyond the statistics are real people, real stories, and real hope. Meet
            the individuals reshaping their own futures.
          </p>
        </div>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-10">
              {[
                {
                  // region: 'United safe environment creators (Usec)',
                  title: '"The Classroom That Reopened Hope"',
                  text: 'A story of how a community-led learning center gave displaced children safe access to education, mentorship, and a path back to school in the Kakuma refugee camp.',
                  img: voice1Image,
                },
                {
                  // region: 'United safe environment creators (Usec)',
                  title: '"Breaking The Ceiling"',
                  text: 'A refugee woman used the skills she gained through the USEC Livelihood Program to build her confidence, become self-reliant, and inspire other women in her community.',
                  img: voice2Image,
                },
                {
                  // region: 'United safe environment creators (Usec)',
                  title: '"Safe Voices, Stronger Communities"',
                  text: '"I am a girl refugee in Kakuma, and through USEC\'s GBV program I learned where to report abuse, how to protect myself, and how to support other girls to speak up and stay safe."',
                  img: voice3Image,
                },
              ].map((story) => (
                <article key={story.title} className="bg-white/5 border border-white/15 rounded-xl overflow-hidden group backdrop-blur-sm transition-all hover:border-vibrant-orange/80 hover:bg-white/10">
                  <div className="h-72 relative overflow-hidden">
                    <img className="w-full h-full object-cover transition-all duration-700 scale-100 group-hover:scale-105 group-hover:grayscale" src={story.img} alt={story.title} />
                    <div className="absolute inset-0 bg-gradient-to-t from-primary/80 via-primary/20 to-transparent" />
                    <div className="absolute inset-x-0 bottom-0 h-1 bg-vibrant-orange" />
                  </div>
                  <div className="p-2 md:p-4">
                    <span className="inline-block font-label-sm text-label-sm uppercase tracking-[0.14em] text-vibrant-orange mb-4">{story.region}</span>
                    <h4 className="font-headline-sm text-headline-sm text-white mb-4 italic">{story.title}</h4>
                    <p className="font-body-md text-body-md text-white/70 mb-6">{story.text}</p>
                  </div>
                </article>
              ))}
            </div>
          </div>
        </section>




       




        <section className="where-we-are-section relative overflow-hidden py-section-gap border-b border-surface-">
          <div className="where-map-wrap absolute inset-0 pointer-events-none" aria-hidden="true">
            <div className="where-map-track">
              <div className="where-map-panel" style={{ backgroundImage: `url(${mapImage})` }} />
              <div className="where-map-panel" style={{ backgroundImage: `url(${mapImage})` }} />
            </div>
            <div className="absolute inset-0 bg-white/74" />
          </div>

          <div className="container relative z-10 mx-auto px-margin-mobile md:px-margin-desktop">
            <div className="mx-auto mb-10 max-w-4xl px-4 text-center sm:mb-12 md:mb-14 md:px-0">
            <span className="mb-3 block font-label-sm text-[0.65rem] uppercase tracking-[0.16em] text-vibrant-orange sm:text-label-sm sm:tracking-[0.2em]">
              Regional Presence
            </span>

            <h2 className="font-display-lg text-3xl leading-tight text-primary sm:text-4xl md:text-display-lg">
              Where We Are
            </h2>
          </div>



          {/* <div className="max-w-5xl mx-auto"> */}
            <div className="mb-12 md:mb-14 max-w-4xl mx-auto text-center">
            

            {[
              {
                name: 'Kakuma Refugee Camp',
                focus: 'Education support, Livelihood skills, child protection, and GBV prevention for girls and young women. USEC works directly with refugee-led and host-community partners across key locations in Kenya/Turkana County/Kakuma Refugee Camp and Kalobeyei Settlement, supporting protection, education, and livelihood programs where they are needed most.'
              },
            ].map((location) => (
              <article
                key={location.name}
                className="max-w-5xl mx-auto inline-block max-w-3xl rounded-lg border border-primary/10 bg-white/88 px-4 py-3 font-body-md text-body-md text-deep-navy leading-relaxed shadow-[0_6px_18px_rgba(3,51,71,0.12)] backdrop-blur-[1px]"
              >

                <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-8">
           
                  {/* LEFT SIDE — LOCATION DETAILS */}
                  <div className="flex-1 min-w-0">

                    <h3 className="text-lg md:text-xl font-semibold text-primary leading-tight">
                      {location.name}
                    </h3>

                    <p className="mt-3 max-w-3xl font-body-md text-body-md text-on-surface-variant leading-relaxed">
                      {location.focus}
                    </p>

                  </div>


                  {/* RIGHT SIDE — LOCATION ACTION */}
                  <div className="
                    flex
                    flex-col
                    items-center
                    justify-center
                    gap-5
                    md:min-w-[180px]
                    md:border-l
                    md:border-surface-variant/30
                    md:pl-8
                  ">

                    <span className="
                      material-symbols-outlined
                      text-5xl
                      text-vibrant-orange
                      transition-transform
                      duration-300
                      group-hover:scale-110
                    ">
                      location_on
                    </span>

                    <a
                      href="/contact#global-impact-map"
                      className="
                        inline-flex
                        items-center
                        justify-center
                        gap-2
                        rounded-lg
                        bg-primary
                        px-6
                        py-3
                        font-label-md
                        text-label-md
                        font-semibold
                        text-white
                        transition-all
                        duration-300
                        hover:bg-vibrant-orange
                      "
                    >
                      Locate Us
                      <span className="material-symbols-outlined text-lg">
                        arrow_forward
                      </span>
                    </a>

                  </div>

                </div>

              </article>
            ))}

          </div>

          </div>
        </section>


<section className="relative overflow-hidden border-b border-white/10 py-12 text-white sm:py-16 md:py-20 lg:py-section-gap">
  {/* Background Image */}
  <div className="absolute inset-0" aria-hidden="true">
    <img
      src={partnersImage}
      alt=""
      className="h-full w-full object-cover object-center"
    />

    {/* Dark Overlay */}
    <div className="absolute inset-0 bg-black/70" />
  </div>

  {/* Main Content */}
  <div className="container relative z-10 mx-auto px-margin-mobile md:px-margin-desktop">

    {/* Section Header */}
    <div className="mb-10 sm:mb-12 md:mb-16">
  <div className="w-full max-w-2xl">

    <span className="mb-3 block font-label-sm text-label-sm uppercase tracking-[0.2em] text-vibrant-orange sm:mb-4">
      Collaboration Network
    </span>

    <h2 className="font-display-lg text-4xl leading-[1.05] text-white sm:text-5xl md:text-display-lg md:leading-tight">
      Organization Partners
    </h2>

    <p className="mt-4 w-full max-w-xl font-body-md text-base leading-relaxed text-white/75 sm:mt-5 sm:text-lg md:text-body-md">
      We work with mission-aligned organizations to expand community
      protection, inclusive education, and sustainable livelihood
      opportunities.
    </p>

  </div>
</div>

    {/* Partners Carousel */}
    <div className="relative">

      {/* LEFT BUTTON */}
      <button
        type="button"
        aria-label="Scroll partner logos left"
        onClick={() => scrollPartners(-1)}
        disabled={!canScrollLeft}
        className={`
          absolute left-1 top-1/2 z-30
          flex h-9 w-9 -translate-y-1/2
          items-center justify-center
          rounded-full
          border border-white/30
          bg-black/30
          text-white
          shadow-lg
          backdrop-blur-sm

          sm:left-2 sm:h-10 sm:w-10
          md:h-11 md:w-11

          !transform-none
          hover:!transform-none
          focus:!transform-none
          active:!transform-none

          transition-colors duration-300

          ${
            canScrollLeft
              ? "hover:border-vibrant-orange bg-vibrant-orange hover:bg-vibrant-orange"
              : "cursor-not-allowed opacity-30"
          }
        `}
        style={{
          transform: "translateY(-50%)",
        }}
      >
        <span className="material-symbols-outlined text-lg sm:text-xl">
          chevron_left
        </span>
      </button>

      {/* RIGHT BUTTON */}
      <button
        type="button"
        aria-label="Scroll partner logos right"
        onClick={() => scrollPartners(1)}
        disabled={!canScrollRight}
        className={`
          absolute right-1 top-1/2 z-30
          flex h-9 w-9 -translate-y-1/2
          items-center justify-center
          rounded-full
          border border-white/30
          bg-black/30
          text-white
          shadow-lg
          backdrop-blur-sm

          sm:right-2 sm:h-10 sm:w-10
          md:h-11 md:w-11

          !transform-none
          hover:!transform-none
          focus:!transform-none
          active:!transform-none

          transition-colors duration-300

          ${
            canScrollRight
              ? "hover:border-vibrant-orange bg-vibrant-orange hover:bg-vibrant-orange"
              : "cursor-not-allowed opacity-30"
          }
        `}
        style={{
          transform: "translateY(-50%)",
        }}
      >
        <span className="material-symbols-outlined text-lg sm:text-xl">
          chevron_right
        </span>
      </button>

      {/* PARTNER LOGO TRACK */}
      <div
        ref={partnersTrackRef}
        className="
          partners-scroll-track
          flex
          gap-3
          overflow-x-auto
          px-10
          pb-4
          scroll-smooth
          snap-x
          snap-mandatory

          sm:gap-4
          sm:px-12

          md:gap-5
          md:px-14
        "
        role="region"
        aria-label="Organization partner logos"
      >

        {/* Dynamic Start Padding */}
        <div
          aria-hidden="true"
          className="shrink-0"
          style={{
            width: `${partnerSidePad}px`,
          }}
        />

        {/* Partner Cards */}
        {partnerLogos.map((partner, index) => {
          const isActive = index === activePartner;

          return (
            <article
              key={partner.name}
              data-partner-card="true"
              className={`
                relative
                flex
                shrink-0
                snap-center
                flex-col
                items-center
                justify-center
                overflow-hidden
                transition-all
                duration-500
                ease-out

                ${
                  isActive
                    ? `
                      w-[250px]
                      min-w-[250px]
                      min-h-[220px]

                      sm:w-[330px]
                      sm:min-w-[330px]
                      sm:min-h-[270px]

                      md:w-[420px]
                      md:min-w-[420px]
                      md:min-h-[330px]

                      lg:w-[470px]
                      lg:min-w-[470px]
                      lg:min-h-[360px]

                      scale-100
                      rounded-xl
                      border
                      border-white/60
                      bg-white/10
                      shadow-2xl
                      backdrop-blur-sm
                    `
                    : `
                      w-[220px]
                      min-w-[220px]
                      min-h-[190px]

                      sm:w-[300px]
                      sm:min-w-[300px]
                      sm:min-h-[240px]

                      md:w-[390px]
                      md:min-w-[390px]
                      md:min-h-[300px]

                      lg:w-[440px]
                      lg:min-w-[440px]
                      lg:min-h-[330px]

                      scale-[0.94]
                      border
                      border-transparent
                      opacity-40
                    `
                }
              `}
            >

              {/* Active Partner Accent */}
              {isActive && (
                <div className="absolute left-0 right-0 top-0 h-1 bg-vibrant-orange" />
              )}

              {/* Partner Link */}
              <a
                href={partner.href}
                target="_blank"
                rel="noreferrer"
                className="flex h-full w-full flex-col items-center justify-center px-5 py-6 sm:px-7 sm:py-8 md:px-10"
              >

                {/* Partner Logo */}
                <div className="flex h-[120px] w-full items-center justify-center sm:h-[160px] md:h-[210px]">
                  <img
                    src={partner.src}
                    alt={`${partner.name} logo`}
                    loading="lazy"
                    className={`
                      w-auto
                      max-w-[75%]
                      object-contain
                      transition-all
                      duration-500

                      ${
                        isActive
                          ? `
                            max-h-[100px]
                            sm:max-h-[135px]
                            md:max-h-[175px]
                            lg:max-h-[200px]
                          `
                          : `
                            max-h-[80px]
                            sm:max-h-[110px]
                            md:max-h-[145px]
                            lg:max-h-[170px]

                            grayscale
                            brightness-0
                            invert
                          `
                      }
                    `}
                  />
                </div>

                {/* Partner Name */}
                <p
                  className={`
                    mt-3
                    text-center
                    font-label-md
                    text-label-md
                    uppercase
                    leading-tight
                    tracking-[0.1em]

                    sm:mt-4
                    sm:tracking-[0.12em]

                    md:mt-5
                    md:tracking-[0.14em]

                    ${
                      isActive
                        ? "text-sm text-white sm:text-base md:text-[1.15rem] lg:text-[1.3rem]"
                        : "text-xs text-white/55 sm:text-sm md:text-base"
                    }
                  `}
                >
                  {partner.name}
                </p>

              </a>
            </article>
          );
        })}

        {/* Dynamic End Padding */}
        <div
          aria-hidden="true"
          className="shrink-0"
          style={{
            width: `${partnerSidePad}px`,
          }}
        />
      </div>

      {/* Mobile Swipe Indicator */}
      <div className="mt-4 flex items-center justify-center gap-2 text-white/40 sm:hidden">
        <span className="material-symbols-outlined text-sm">
          swipe
        </span>

        <span className="text-[10px] uppercase tracking-[0.18em]">
          Swipe to explore partners
        </span>
      </div>

    </div>
  </div>
</section>


        



<section className="relative py-14 md:py-20 lg:py-24 bg-surface-cream overflow-hidden">
  {/* Decorative background elements */}
  <div className="absolute -top-24 -right-24 w-72 h-72 rounded-full bg-vibrant-orange/10 blur-3xl pointer-events-none"></div>
  <div className="absolute -bottom-32 -left-24 w-80 h-80 rounded-full bg-primary/10 blur-3xl pointer-events-none"></div>

  <div className="container relative z-10 mx-auto px-margin-mobile md:px-margin-desktop">
    <div className="max-w-4xl mx-auto">
      <div className="relative overflow-hidden bg-white shadow-[0_25px_70px_rgba(0,0,0,0.12)] border border-surface-variant/20 rounded-2xl">
        
        {/* Decorative shape */}
        <div className="absolute -top-24 -right-24 w-64 h-64 rounded-full bg-vibrant-orange/10 pointer-events-none"></div>
        <div className="absolute -bottom-24 -left-24 w-64 h-64 rounded-full bg-primary/5 pointer-events-none"></div>

        <div className="relative z-10 p-7 sm:p-10 md:p-14 lg:p-16 text-center">
          
          {/* Accent */}
          <div className="flex items-center justify-center gap-3 mb-5">
            <span className="text-xs font-bold uppercase tracking-[0.2em] text-vibrant-orange">
              Our Community
            </span>
          </div>

          <h2 className="font-headline-md text-headline-md text-primary mb-5 leading-tight">
            Stay informed and Stay involved.
          </h2>

          <p className="font-body-lg text-body-lg text-on-surface-variant leading-relaxed mb-8 max-w-2xl mx-auto">
            Join our global community of advocates. Receive monthly updates
            on our impact, inspiring stories, and the resilience of
            communities we work with in the field.
          </p>

          {/* Subscribe Form */}
          <form
            className="flex flex-col sm:flex-row gap-3 max-w-2xl mx-auto mb-5"
            onSubmit={handleSubscribeSubmit}
          >
            <input
              name="subscriberEmail"
              type="email"
              placeholder="Enter your email address"
              required
              className="flex-grow h-14 px-5 bg-surface border border-surface-variant/40 text-deep-navy placeholder:text-on-surface-variant/60 focus:border-primary focus:ring-2 focus:ring-primary/10 outline-none transition-all rounded-xl"
            />

            <button
              type="submit"
              disabled={subscribeStatus === "loading"}
              className="h-14 px-8 bg-primary text-white font-label-md text-label-md uppercase tracking-wider rounded-xl hover:bg-vibrant-orange transition-all duration-300 active:scale-95 disabled:opacity-70 disabled:cursor-not-allowed shadow-lg shadow-primary/10"
            >
              {subscribeStatus === "loading" ? "Sending..." : "Subscribe"}
            </button>
          </form>

          {/* Subscribe status */}
          {subscribeMessage ? (
          <p
            className={`mb-5 text-sm font-medium ${
              subscribeStatus === "success"
                ? "text-green-700"
                : subscribeStatus === "error"
                ? "text-red-700"
                : "text-on-surface-variant"
            }`}
          >
            {subscribeMessage}
          </p>
          ) : null}

          {/* Privacy message */}
          <div className="flex items-center justify-center gap-2 text-sm text-on-surface-variant">
            <span className="text-vibrant-orange font-bold">✓</span>
            <p>
              We value your privacy. Unsubscribe at any time.
            </p>
          </div>

        </div>
      </div>
    </div>
  </div>
</section>





      </main>
      <section
          className="relative min-h-[400px] md:min-h-[450px] flex items-center bg-cover bg-center overflow-hidden"          style={{
            backgroundImage: `url(${donateprotect})`,
          }}
        >
          {/* DARK GRADIENT — STRONGER ON LEFT, TRANSPARENT ON RIGHT */}
          <div className="absolute inset-0 bg-black/60"></div>
          <div className="absolute inset-0 bg-gradient-to-r from-black/70 via-black/35 to-transparent"></div>
          {/* CONTENT */}
          <div className="relative z-10 w-full max-w-container-max mx-auto px-margin-mobile md:px-margin-desktop">

            <div className="max-w-xl text-left text-white">

              {/* TITLE */}
              <h4 className="font-display-lg font-bold text-2xl md:text-3xl lg:text-4xl leading-tight mb-6">
                Give hope by supporting refugees today
              </h4>

              {/* DESCRIPTION */}
              <p className="font-body-lg text-lg md:text-xl text-white/90 leading-relaxed max-w-lg mb-9">
                Your gift will be used to deliver lasting solutions for refugees around the world, and help them rebuild their lives in safety.
              </p>

              {/* DONATE BUTTON */}
              <a
                href="/donate"
                className="inline-flex items-center justify-center gap-3 bg-vibrant-orange text-white px-9 py-4 font-bold text-lg rounded-lg shadow-lg hover:bg-white hover:text-deep-navy hover:-translate-y-1 transition-all duration-300"
              >
                Donate
                <span className="material-symbols-outlined text-lg transition-transform duration-300 group-hover:translate-x-1">
                  arrow_forward
                </span>
              </a>

            </div>

          </div>
        </section>

      <footer className="relative overflow-hidden bg-primary text-white pt-24 pb-12">
        <div className="absolute inset-0" aria-hidden="true">
          <img src={footerBackgroundImage} 
          alt="" 
          className="h-full w-full object-cover" />
          <div className="absolute inset-0 bg-primary/86" />
        </div>

        <div className="container relative z-10 mx-auto px-margin-mobile md:px-margin-desktop">
          <div className="grid grid-cols-1 md:grid-cols-5 gap-16 mb-20">
            <div className="col-span-1 md:col-span-1">
              <div className="mb-8 flex items-center gap-3">
                <img src="https://lh3.googleusercontent.com/aida-public/AB6AXuBlvQ5e2lm0xE1rYY3atWhqLQI7pau4_Tc8QEutOX_MDY_OlJj0W8tq8t-xTy7z1onRvSbREsLUaczY7kwwAfUCvHgUS74aTz91plWryteLxfI962qF0co9TeM4m4OfysO-Rf1FXaLNrE2dxjKc4vASTkZMCB1KiYrpfCAdHp1iSfQZuEijcpdLG0f5ZsRpZhI8YJI0tIS-xz-x3MUEavuHkpmgYyprECQ4JRjGhC07F1JuNn0rOQn9evIwqJTKOn4HeKcqlEyE7XxT" 
                    alt="USEC Logo" 
                    className="h-14 md:h-16 w-auto object-contain brightness-0 invert" />
                <div className="flex flex-col leading-none">
                  <p className="font-extrabold text-xl md:text-2xl tracking-tight">USEC<span className="font-normal">.org</span></p>
                  <p className="mt-1 text-[8px] md:text-[9px] font-semibold uppercase tracking-[0.05em]">Community Based</p>
                  <p className="text-[8px] md:text-[9px] font-semibold uppercase tracking-[0.05em]">Organisation</p>
                </div>
              </div>
              <p className="font-body-md text-body-md text-white/60 mb-8 leading-relaxed">
                Refugee-led community action for education, protection, livelihoods, and GBV prevention in Kakuma.
                <br />
                <br />
                We partner with communities to strengthen dignity, safety, and long-term self-reliance for displaced families.
              </p>
            </div>
            <div>
              <h5 className="font-label-md text-label-md uppercase tracking-widest text-vibrant-orange mb-8">Programs</h5>
              <ul className="space-y-4 font-body-md text-body-md text-white/70">
                {[
                  { label: 'Education Activities', href: '/education-program' },
                  { label: 'Protection Activities', href: '/protection-activities' },
                  { label: 'Livelihood Activities', href: '/livelihood-activities' },
                  { label: 'GBV Response & Prevention', href: '/gbv-response-prevention' },
                ].map((item) => (
                  <li key={item.label}><a className="hover:text-white transition-colors" href={item.href}>{item.label}</a></li>
                ))}
              </ul>
            </div>
            <div>
              <h5 className="font-label-md text-label-md uppercase tracking-widest text-vibrant-orange mb-8">Navigation</h5>
              <ul className="space-y-4 font-body-md text-body-md text-white/70">
                {[
                  { label: 'Home', href: '/' },
                  { label: 'About Us', href: '/about-us' },
                  { label: 'Our Programs', href: '/our-programs' },
                  { label: 'Get Involved', href: '/get-involved' },
                  { label: 'Our Impact', href: '/our-impact' },
                  { label: 'Gallery', href: '/gallery' },
                  { label: 'Contact Us', href: '/contact-us' },
                ].map((item) => (
                  <li key={item.label}><a className="hover:text-white transition-colors" href={item.href}>{item.label}</a></li>
                ))}
              </ul>
            </div>
            <div>
              <h5 className="font-label-md text-label-md uppercase tracking-widest text-vibrant-orange mb-8">Support</h5>
              <ul className="space-y-4 font-body-md text-body-md text-white/70">
                {[
                  { label: 'Donate Now', href: '/donate' },
                  { label: 'Corporate Giving', href: '/donate#donate-form' },
                  { label: 'Planned Giving', href: '/donate#donate-form' },
                  { label: 'Volunteer', href: '#' },
                ].map((item) => (
                  <li key={item.label}><a className="hover:text-white transition-colors" href={item.href}>{item.label}</a></li>
                ))}
              </ul>
            </div>
            <div>
              <h5 className="font-label-md text-label-md uppercase tracking-widest text-vibrant-orange mb-8">Settings</h5>
              <ul className="space-y-4 font-body-md text-body-md text-white/70">
                <li><a className="hover:text-white transition-colors" href="#">Languages</a></li>
                <li><a className="hover:text-white transition-colors" href="/privacy-policy">Privacy Policy</a></li>
                <li><a className="hover:text-white transition-colors" href="/terms-of-service">Terms of Service</a></li>
                <li><a className="hover:text-white transition-colors" href="#">Accessibility</a></li>
              </ul>
            </div>
          </div>
          <div className="pt-12 border-t border-white/10 flex flex-col md:flex-row justify-between items-center gap-6">
            <div className="font-label-sm text-label-sm text-white/40">© 2026 United safe environment creators (USEC). All Rights Reserved.</div>
            <div className="flex gap-8 font-label-sm text-label-sm text-white/40">
              {[
                { label: 'Privacy Policy', href: '/privacy-policy' },
                { label: 'Terms of Service', href: '/terms-of-service' },
                { label: 'Accessibility', href: '#' },
              ].map((item) => (
                <a key={item.label} className="hover:text-white transition-colors" href={item.href}>{item.label}</a>
              ))}
            </div>
          </div>
        </div>
      </footer>
    </div>
  )
}

export default HomePage

