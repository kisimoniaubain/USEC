import { useState } from 'react'
import LanguageSelector from './LanguageSelector'
import footerlogo from '../assets/logo.png'

function HomeFooter({ language, setLanguage, t, languages }) {
  const [subscriberEmail, setSubscriberEmail] = useState('')
  const [isSubscribing, setIsSubscribing] = useState(false)

  const [subscribeStatus, setSubscribeStatus] = useState({
    type: '',
    message: '',
  })

  const handleSubscribe = async (event) => {
    event.preventDefault()

    if (isSubscribing) return

    setIsSubscribing(true)

    setSubscribeStatus({
      type: '',
      message: '',
    })

    try {
      const email = subscriberEmail.trim()

      if (!email) {
        throw new Error('Please enter your email address.')
      }

      // Regex check to validate email format on client side
      const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
      if (!emailRegex.test(email)) {
        throw new Error('Please enter a valid email address.')
      }

      const response = await fetch('/api/subscribe', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          email: email, // Changed key from 'subscriberEmail' to 'email' to fix 400 Bad Request
        }),
      })

      const data = await response.json()

      if (!response.ok) {
        throw new Error(
          data.error || data.message || 'Failed to subscribe.'
        )
      }

      setSubscribeStatus({
        type: 'success',
        message: 'Thank you for subscribing!',
      })

      setSubscriberEmail('')
    } catch (error) {
      console.error('Subscribe error:', error)

      setSubscribeStatus({
        type: 'error',
        message:
          error.message ||
          'Something went wrong. Please try again.',
      })
    } finally {
      setIsSubscribing(false)
    }
  }

  const socialLinks = [
    // your existing social links...
  ]

  return (
    // <footer className="bg-primary text-white pt-12 pb-6">
    <footer className="border-t border-white bg-primary pt-12 pb-6 text-white">
      <div className="container mx-auto px-margin-mobile md:px-margin-desktop">
<div className="mb-10 grid grid-cols-2 gap-6 md:grid-cols-6 md:gap-8">

  {/* LOGO + DESCRIPTION */}
  <div className="col-span-2 md:col-span-2">

    <a
      href="/"
      className="mb-8 flex shrink-0 items-center gap-1 lg:mr-8 xl:mr-10"
    >
      <img
        src={footerlogo}
        alt="USEC.org home"
        className="h-16 w-auto object-contain brightness-0 invert md:h-20"
      />

      <div className="mb-2 flex flex-col leading-none">
        <span className="text-2xl font-extrabold tracking-tight md:text-3xl">
          USEC<span className="font-normal">.org</span>
        </span>

        <span className="mt-1 text-[9px] font-semibold uppercase tracking-[0.05em] md:text-[10px]">
          Community Based
          <br />
          Organisation
        </span>
      </div>
    </a>

    <p className="text-[12px] leading-relaxed text-white/60">
      Refugee-led community action for education, protection, livelihoods,
      and GBV prevention in Kakuma.
      <br />
      We partner with communities to strengthen dignity, safety, and
      long-term self-reliance for displaced families.
    </p>

  </div>


  {/* PROGRAMS */}
  <div className="col-span-1">
    <h5 className="mb-4 text-[11px] font-bold uppercase tracking-widest text-vibrant-orange sm:text-xs md:mb-8">
      Programs
    </h5>

    <ul className="space-y-1 text-[11px] font-bold uppercase text-white/70">
      {[
        {
          label: "Education Activities",
          href: "/education-program",
        },
        {
          label: "Protection Activities",
          href: "/protection-activities",
        },
        {
          label: "Livelihood Activities",
          href: "/livelihood-activities",
        },
        {
          label: "GBV Response & Prevention",
          href: "/gbv-response-prevention",
        },
      ].map((item) => (
        <li key={item.label}>
          <a
            className="transition-colors hover:text-white"
            href={item.href}
          >
            {item.label}
          </a>
        </li>
      ))}
    </ul>
  </div>


  {/* EXPLORE */}
  <div className="col-span-1">
    <h5 className="mb-4 text-[11px] font-bold uppercase tracking-widest text-vibrant-orange sm:text-xs md:mb-8">
      Explore
    </h5>

    <ul className="space-y-1 text-[11px] font-bold uppercase text-white/70">
      {[
        { label: "Home", href: "/" },
        { label: "About Us", href: "/about-us" },
        { label: "Our Programs", href: "/our-programs" },
        { label: "Get Involved", href: "/get-involved" },
        { label: "Our Impact", href: "/our-impact" },
        { label: "Gallery", href: "/gallery" },
        { label: "Contact Us", href: "/contact-us" },
      ].map((item) => (
        <li key={item.label}>
          <a
            className="transition-colors hover:text-white"
            href={item.href}
          >
            {item.label}
          </a>
        </li>
      ))}
    </ul>
  </div>


  {/* SUPPORT */}
  <div className="col-span-1">
    <h5 className="mb-4 text-[11px] font-bold uppercase tracking-widest text-vibrant-orange sm:text-xs md:mb-8">
      Support
    </h5>

    <ul className="space-y-1 text-[11px] font-bold uppercase text-white/70">
      {[
        { label: "Donate Now", href: "/donate" },
        {
          label: "Corporate Giving",
          href: "/donate#donate-form",
        },
        {
          label: "Planned Giving",
          href: "/donate#donate-form",
        },
        {
          label: "Volunteer",
          href: "volunteer",
        },
        {
          label: "Partner With us",
          href: "partner",
        },
      ].map((item) => (
        <li key={item.label}>
          <a
            className="transition-colors hover:text-white"
            href={item.href}
          >
            {item.label}
          </a>
        </li>
      ))}
    </ul>
  </div>


  {/* LEGAL */}
  <div className="col-span-1">
    <h5 className="mb-4 text-[11px] font-bold uppercase tracking-widest text-vibrant-orange sm:text-xs md:mb-8">
      Legal
    </h5>

    <div className="space-y-1 text-[11px] font-bold uppercase text-white/70">

      <LanguageSelector
        language={language}
        setLanguage={setLanguage}
        t={t}
        languages={languages}
      />

      <div className="border-t border-white/10 pt-3">
        <ul className="space-y-1 text-[11px] font-bold uppercase text-white/70">

          <li>
            <a
              href="/privacy-policy"
              className="transition-colors hover:text-white"
            >
              {t("privacyPolicy")}
            </a>
          </li>

          <li>
            <a
              href="/terms-of-service"
              className="transition-colors hover:text-white"
            >
              {t("termsOfService")}
            </a>
          </li>

        </ul>
      </div>

    </div>
  </div>

</div>
        <div className="mt-6 mb-4 flex flex-col gap-4 sm:flex-row sm:items-end sm:justify-between">
          <div className="w-full sm:max-w-lg">
            <p className="font-label-sm text-label-sm uppercase tracking-widest text-white/70 mb-2">Stay informed</p>

            {/* <div className="flex flex-col gap-3 sm:flex-row sm:items-center">
          <input
            type="email"
            placeholder="Enter your email address"
            className="w-full rounded-xl border border-white/20 bg-white/10 px-4 py-2 text-sm text-white placeholder:text-white/40 outline-none focus:border-vibrant-orange focus:ring-2 focus:ring-vibrant-orange/20"
          />

          <button
            type="button"
            className="inline-flex items-center justify-center rounded-xl bg-white px-5 py-2 text-sm font-bold text-primary transition hover:bg-vibrant-orange hover:text-white"
          >
            Subscribe
          </button>
        </div> */}
        {/* NEWSLETTER */}
<div>
  {/* your newsletter heading/text */}

  <form
    onSubmit={handleSubscribe}
    className="flex flex-col gap-3 sm:flex-row sm:items-center"
  >
<input
  type="email"
  value={subscriberEmail}
  onChange={(event) => setSubscriberEmail(event.target.value)}
  placeholder="Enter your email address"
  required
  disabled={isSubscribing}
  className="w-full rounded-xl border border-white/20 bg-white/10 px-4 py-2 text-sm text-white placeholder:text-white/40 outline-none focus:border-vibrant-orange focus:ring-2 focus:ring-vibrant-orange/20 disabled:opacity-60"
/>

    <button
      type="submit"
      disabled={isSubscribing}
      className="inline-flex items-center justify-center rounded-xl bg-white px-5 py-2 text-sm font-bold text-primary transition hover:bg-vibrant-orange hover:text-white disabled:cursor-not-allowed disabled:opacity-60"
    >
      {isSubscribing ? 'Subscribing...' : 'Subscribe'}
    </button>
  </form>

  {subscribeStatus.message && (
    <p
      className={`mt-2 text-xs ${
        subscribeStatus.type === 'success'
          ? 'text-green-300'
          : 'text-red-300'
      }`}
    >
      {subscribeStatus.message}
    </p>
  )}
</div>
          </div>
<div className="flex justify-center gap-3 md:justify-end">
  {socialLinks.map((item) => (
    <a
      key={item.name}
      href={item.href}
      target="_blank"
      rel="noreferrer"
      aria-label={item.name}
      className="group inline-flex h-10 w-10 items-center justify-center rounded-2xl text-white transition-all duration-300 hover:border-primary hover:bg-white"
    >
      <img
        src={item.icon}
        alt={item.name}
        className="h-6 w-6 invert transition-all duration-300 group-hover:invert-0"
      />
    </a>
  ))}
</div>
        </div>
        <div className="pt-8 border-t border-white/10 flex justify-center">
        <div className="text-center text-[10px] text-white/40 sm:text-xs md:text-label-sm">
          © 2026 United Safe Environment Creators (USEC). All Rights Reserved.
        </div>
        </div>
      </div>
    </footer>
  )
}

export default HomeFooter
