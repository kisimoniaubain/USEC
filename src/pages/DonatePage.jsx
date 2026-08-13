import { useState } from "react"
import SiteNavbar from "../components/SiteNavbar"
import useWhoWeAreReveal from "../hooks/useWhoWeAreReveal"
import donateprotect from "../assets/images/Protection-imo/donate-protect.png"
import team from "../assets/images/team-images/hero-imo.jpeg"

function DonatePage() {
  useWhoWeAreReveal()

  const WavyBottomDivider = () => (
    <div className="absolute bottom-0 left-0 w-full overflow-hidden leading-none pointer-events-none z-0">
      <svg
        viewBox="0 0 1200 120"
        preserveAspectRatio="none"
        className="relative block w-full h-16 md:h-24 text-slate-50"
        fill="currentColor"
      >
        <path d="M0,0 C150,90 350,-40 500,65 C650,160 900,10 1200,45 L1200,120 L0,120 Z" />
      </svg>
    </div>
  )

  // Donation form state
  const [frequency, setFrequency] = useState("once")
  const [selectedAmount, setSelectedAmount] = useState(50)
  const [customAmount, setCustomAmount] = useState("")

  const [firstName, setFirstName] = useState("")
  const [lastName, setLastName] = useState("")
  const [email, setEmail] = useState("")

  const [paymentMethod, setPaymentMethod] = useState("card")

  const [isSubmitting, setIsSubmitting] = useState(false)
  const [donationError, setDonationError] = useState("")
  const [donationSuccess, setDonationSuccess] = useState("")

  const handleDonationSubmit = async (event) => {
    event.preventDefault()

    setDonationError("")
    setDonationSuccess("")

    const amount = customAmount
      ? Number(customAmount)
      : Number(selectedAmount)

    if (!amount || amount <= 0) {
      setDonationError("Please select or enter a valid donation amount.")
      return
    }

    if (!firstName.trim() || !lastName.trim()) {
      setDonationError("Please enter your full name.")
      return
    }

    if (!email.trim()) {
      setDonationError("Please enter your email address.")
      return
    }

    if (!paymentMethod) {
      setDonationError("Please select a payment method.")
      return
    }

    setIsSubmitting(true)

    try {
      console.log({
        amount,
        frequency,
        firstName,
        lastName,
        email,
        paymentMethod,
      })

      setDonationSuccess(
        `Thank you ${firstName}! Your $${amount} donation has been prepared successfully.`
      )
    } catch (error) {
      console.error(error)

      setDonationError(
        "Something went wrong while processing your donation. Please try again."
      )
    } finally {
      setIsSubmitting(false)
    }
  }

  return (
    <div className="bg-surface text-on-surface font-body-md overflow-x-hidden">
      <SiteNavbar activePage="donate" />

      <main className="pt-20">



      <section className="relative h-[70vh] min-h-[600px] flex items-end overflow-hidden">

        {/* BACKGROUND IMAGE */}
        <div className="absolute inset-0 bg-deep-navy">

          <img
            src={donateprotect}
            alt="Support USEC"
            className="w-full h-full object-cover opacity-60"
          />

          {/* DARK OVERLAY */}
          <div className="absolute inset-0 bg-black/55"></div>

        </div>


        {/* CONTENT */}
        <div className="relative z-10 w-full max-w-container-max mx-auto px-margin-mobile md:px-margin-desktop pb-20 md:pb-24 text-white">

          {/* MAIN TITLE */}
          <h1 className="font-display-lg text-display-lg-mobile md:text-display-lg max-w-4xl mb-8 border-l-[43px] border-vibrant-orange pl-[30px] leading-tight">
            Donate
          </h1>


          {/* SUBTITLE */}
          <span className="block font-display-lg font-bold text-2xl md:text-3xl lg:text-4xl text-white leading-tight mb-4 max-w-3xl">
            Support Our Mission and Make a Difference
          </span>


          {/* DESCRIPTION */}
          <p className="font-body-lg text-body-lg max-w-2xl text-white/90 leading-relaxed">
            Join United Safe Environment Creators in our mission to provide
            dignity, safety, and sustainable futures for vulnerable communities
            around the world. Your support helps us create lasting opportunities
            for children, families, and vulnerable communities.
          </p>

        </div>


        {/* WAVY BOTTOM DIVIDER */}
        <WavyBottomDivider />

      </section>

        {/* <section className="py-section-gap bg-surface-cream" id="donate-form">
          <div className="container mx-auto px-margin-mobile md:px-margin-desktop max-w-container-max">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
              <div className="lg:col-span-5 flex flex-col gap-10">
                <div>
                  <h2 className="font-headline-md text-headline-md text-primary mb-6">Choose Your Impact</h2>
                  <p className="font-body-lg text-body-lg text-on-surface-variant leading-relaxed">
                    Every dollar contributed goes directly to the field. We prioritize long-term sustainability alongside immediate relief efforts.
                  </p>
                </div>

                <div className="grid grid-cols-1 gap-4">
                  <div className="bg-white p-6 border border-surface-container-high flex gap-6 items-center">
                    <div className="bg-secondary-fixed w-16 h-16 shrink-0 flex items-center justify-center rounded-full">
                      <span className="material-symbols-outlined text-secondary text-3xl">water_drop</span>
                    </div>
                    <div>
                      <h4 className="font-label-md text-label-md text-primary uppercase mb-1">$50 Level</h4>
                      <p className="font-body-md text-body-md text-on-surface-variant">Provides clean, safe drinking water for a family of five for an entire month.</p>
                    </div>
                  </div>

                  <div className="bg-white p-6 border border-surface-container-high flex gap-6 items-center">
                    <div className="bg-primary-fixed w-16 h-16 shrink-0 flex items-center justify-center rounded-full">
                      <span className="material-symbols-outlined text-deep-navy text-3xl">school</span>
                    </div>
                    <div>
                      <h4 className="font-label-md text-label-md text-primary uppercase mb-1">$100 Level</h4>
                      <p className="font-body-md text-body-md text-on-surface-variant">Covers educational supplies and uniform for two children in our outreach zones.</p>
                    </div>
                  </div>

                  <div className="bg-white p-6 border border-surface-container-high flex gap-6 items-center">
                    <div className="bg-secondary-fixed w-16 h-16 shrink-0 flex items-center justify-center rounded-full">
                      <span className="material-symbols-outlined text-secondary text-3xl">medical_services</span>
                    </div>
                    <div>
                      <h4 className="font-label-md text-label-md text-primary uppercase mb-1">$250 Level</h4>
                      <p className="font-body-md text-body-md text-on-surface-variant">Funds a mobile health clinic visit, providing essential screenings for 20 people.</p>
                    </div>
                  </div>
                </div>
              </div>

              <div className="lg:col-span-7">
                <div className="bg-white/95 backdrop-blur-md p-8 md:p-12 shadow-sm border border-white">
                  <div className="flex flex-col gap-8">
                    <div className="flex p-1 bg-surface-container rounded-lg">
                      <button
                        className={`flex-1 py-3 text-center font-label-md text-label-md uppercase tracking-wider rounded-md transition-all ${frequency === 'once' ? 'bg-white text-primary shadow-sm' : 'text-on-surface-variant hover:text-primary'}`}
                        onClick={() => setFrequency('once')}
                        type="button"
                      >
                        One-time Gift
                      </button>
                      <button
                        className={`flex-1 py-3 text-center font-label-md text-label-md uppercase tracking-wider rounded-md transition-all ${frequency === 'monthly' ? 'bg-white text-primary shadow-sm' : 'text-on-surface-variant hover:text-primary'}`}
                        onClick={() => setFrequency('monthly')}
                        type="button"
                      >
                        Monthly Partner
                      </button>
                    </div>

                    <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                      {[25, 50, 100, 250].map((amount) => (
                        <button
                          key={amount}
                          className={`border-2 p-5 text-center font-headline-sm text-headline-sm text-primary transition-all ${selectedAmount === amount ? 'border-vibrant-orange bg-vibrant-orange/5' : 'border-surface-container-high hover:border-vibrant-orange'}`}
                          data-amount={amount}
                          onClick={() => setSelectedAmount(amount)}
                          type="button"
                        >
                          ${amount}
                        </button>
                      ))}
                    </div>

                    <div className="relative">
                      <span className="absolute left-4 top-1/2 -translate-y-1/2 text-outline font-headline-sm text-headline-sm">$</span>
                      <input className="w-full bg-white border border-outline-variant p-4 pl-10 focus:ring-primary focus:border-primary text-headline-sm font-headline-sm" placeholder="Other Amount" type="number" />
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                      <input className="bg-white border border-outline-variant p-4 focus:ring-primary focus:border-primary" placeholder="First Name" type="text" />
                      <input className="bg-white border border-outline-variant p-4 focus:ring-primary focus:border-primary" placeholder="Last Name" type="text" />
                      <input className="md:col-span-2 bg-white border border-outline-variant p-4 focus:ring-primary focus:border-primary" placeholder="Email Address" type="email" />
                    </div>

                    <div className="flex flex-col gap-4">
                      <label className="font-label-md text-label-md text-on-surface-variant uppercase tracking-widest">Payment Method</label>
                      <div className="flex flex-wrap gap-4 items-center">
                        <button className="flex-1 min-w-[120px] h-16 border border-outline-variant flex items-center justify-center hover:bg-surface-container transition-all" type="button">
                          <span className="material-symbols-outlined mr-2">credit_card</span>
                          <span className="font-label-md text-label-md uppercase">Card</span>
                        </button>
                        <button className="flex-1 min-w-[120px] h-16 border border-outline-variant flex items-center justify-center hover:bg-surface-container transition-all" type="button">
                          <span className="material-symbols-outlined mr-2">payments</span>
                          <span className="font-label-md text-label-md uppercase">PayPal</span>
                        </button>
                      </div>
                      <div className="flex gap-4 mt-2 justify-center opacity-60">
                        <span className="material-symbols-outlined">shield_lock</span>
                        <span className="text-label-sm font-label-sm uppercase tracking-wider">Secure Encrypted Payment</span>
                      </div>
                    </div>

                    <button className="w-full bg-vibrant-orange text-white py-6 font-label-md text-label-md uppercase tracking-[0.2em] hover:brightness-110 active:scale-[0.98] transition-all shadow-lg" type="button">
                      Complete My Donation
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section> */}
        <section className="bg-surface-cream py-12 sm:py-16 md:py-section-gap" id="donate-form">
  <div className="container mx-auto max-w-container-max px-4 sm:px-6 md:px-margin-desktop">

    <div className="grid grid-cols-1 items-start gap-8 lg:grid-cols-12 lg:gap-12">

      {/* =====================================================
          LEFT — IMPACT
      ====================================================== */}
      <div className="flex flex-col gap-8 lg:col-span-5 lg:gap-10">

        <div>
          <h2 className="mb-4 text-2xl font-bold leading-tight text-primary sm:text-3xl md:mb-6 md:text-headline-md">
            Choose Your Impact
          </h2>

          <p className="text-sm leading-7 text-on-surface-variant sm:text-base md:text-body-lg">
            Every dollar contributed goes directly to the field. We prioritize
            long-term sustainability alongside immediate relief efforts.
          </p>
        </div>


        {/* IMPACT CARDS */}
        <div className="grid grid-cols-1 gap-3 sm:gap-4">

          {/* $50 */}
          <div className="flex items-center gap-4 border border-surface-container-high bg-white p-4 sm:gap-5 sm:p-5 md:p-6">

            <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-full bg-secondary-fixed sm:h-14 sm:w-14 md:h-16 md:w-16">
              <span className="material-symbols-outlined text-2xl text-secondary sm:text-3xl">
                water_drop
              </span>
            </div>

            <div>
              <h4 className="mb-1 text-xs font-bold uppercase tracking-wider text-primary sm:text-sm">
                $50 Level
              </h4>

              <p className="text-xs leading-5 text-on-surface-variant sm:text-sm sm:leading-6">
                Provides clean, safe drinking water for a family of five for
                an entire month.
              </p>
            </div>

          </div>


          {/* $100 */}
          <div className="flex items-center gap-4 border border-surface-container-high bg-white p-4 sm:gap-5 sm:p-5 md:p-6">

            <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-full bg-primary-fixed sm:h-14 sm:w-14 md:h-16 md:w-16">
              <span className="material-symbols-outlined text-2xl text-deep-navy sm:text-3xl">
                school
              </span>
            </div>

            <div>
              <h4 className="mb-1 text-xs font-bold uppercase tracking-wider text-primary sm:text-sm">
                $100 Level
              </h4>

              <p className="text-xs leading-5 text-on-surface-variant sm:text-sm sm:leading-6">
                Covers educational supplies and uniform for two children in
                our outreach zones.
              </p>
            </div>

          </div>


          {/* $250 */}
          <div className="flex items-center gap-4 border border-surface-container-high bg-white p-4 sm:gap-5 sm:p-5 md:p-6">

            <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-full bg-secondary-fixed sm:h-14 sm:w-14 md:h-16 md:w-16">
              <span className="material-symbols-outlined text-2xl text-secondary sm:text-3xl">
                medical_services
              </span>
            </div>

            <div>
              <h4 className="mb-1 text-xs font-bold uppercase tracking-wider text-primary sm:text-sm">
                $250 Level
              </h4>

              <p className="text-xs leading-5 text-on-surface-variant sm:text-sm sm:leading-6">
                Funds a mobile health clinic visit, providing essential
                screenings for 20 people.
              </p>
            </div>

          </div>

        </div>

      </div>


      {/* =====================================================
          RIGHT — DONATION FORM
      ====================================================== */}
      <div className="lg:col-span-7">

        <div className="border border-white bg-white/95 p-5 shadow-sm backdrop-blur-md sm:p-7 md:p-10 lg:p-12">

          <form
            onSubmit={handleDonationSubmit}
            className="flex flex-col gap-6 sm:gap-8"
          >

            {/* =================================================
                FREQUENCY
            ================================================== */}
            <div className="flex rounded-lg bg-surface-container p-1">

              <button
                type="button"
                onClick={() => setFrequency("once")}
                className={`flex-1 rounded-md px-2 py-3 text-xs font-bold uppercase tracking-wider transition-all sm:text-sm ${
                  frequency === "once"
                    ? "bg-white text-primary shadow-sm"
                    : "text-on-surface-variant hover:text-primary"
                }`}
              >
                One-time Gift
              </button>

              <button
                type="button"
                onClick={() => setFrequency("monthly")}
                className={`flex-1 rounded-md px-2 py-3 text-xs font-bold uppercase tracking-wider transition-all sm:text-sm ${
                  frequency === "monthly"
                    ? "bg-white text-primary shadow-sm"
                    : "text-on-surface-variant hover:text-primary"
                }`}
              >
                Monthly Partner
              </button>

            </div>


            {/* =================================================
                AMOUNT
            ================================================== */}
            <div>

              <label className="mb-3 block text-xs font-bold uppercase tracking-widest text-on-surface-variant">
                Select Donation Amount
              </label>

              <div className="grid grid-cols-2 gap-3 sm:grid-cols-4">

                {[25, 50, 100, 250].map((amount) => (
                  <button
                    key={amount}
                    type="button"
                    onClick={() => {
                      setSelectedAmount(amount)
                      setCustomAmount("")
                    }}
                    className={`border-2 px-3 py-3 text-center text-base font-bold text-primary transition-all sm:py-4 sm:text-lg ${
                      selectedAmount === amount && !customAmount
                        ? "border-vibrant-orange bg-vibrant-orange/5"
                        : "border-surface-container-high hover:border-vibrant-orange"
                    }`}
                  >
                    ${amount}
                  </button>
                ))}

              </div>

            </div>


            {/* =================================================
                CUSTOM AMOUNT
            ================================================== */}
            <div>

              <label className="mb-2 block text-xs font-bold uppercase tracking-widest text-on-surface-variant">
                Other Amount
              </label>

              <div className="relative">

                <span className="absolute left-4 top-1/2 -translate-y-1/2 text-base font-bold text-outline">
                  $
                </span>

                <input
                  type="number"
                  min="1"
                  step="0.01"
                  value={customAmount}
                  onChange={(event) => {
                    setCustomAmount(event.target.value)
                    setSelectedAmount(null)
                  }}
                  placeholder="Enter amount"
                  className="w-full border border-outline-variant bg-white p-3 pl-10 text-base outline-none transition focus:border-primary focus:ring-2 focus:ring-primary/20 sm:p-4"
                />

              </div>

            </div>


            {/* =================================================
                DONOR INFORMATION
            ================================================== */}
            <div>

              <label className="mb-3 block text-xs font-bold uppercase tracking-widest text-on-surface-variant">
                Your Information
              </label>

              <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">

                <input
                  type="text"
                  value={firstName}
                  onChange={(event) => setFirstName(event.target.value)}
                  placeholder="First Name"
                  required
                  className="w-full border border-outline-variant bg-white p-3 text-sm outline-none transition focus:border-primary focus:ring-2 focus:ring-primary/20 sm:p-4"
                />

                <input
                  type="text"
                  value={lastName}
                  onChange={(event) => setLastName(event.target.value)}
                  placeholder="Last Name"
                  required
                  className="w-full border border-outline-variant bg-white p-3 text-sm outline-none transition focus:border-primary focus:ring-2 focus:ring-primary/20 sm:p-4"
                />

                <input
                  type="email"
                  value={email}
                  onChange={(event) => setEmail(event.target.value)}
                  placeholder="Email Address"
                  required
                  className="w-full border border-outline-variant bg-white p-3 text-sm outline-none transition focus:border-primary focus:ring-2 focus:ring-primary/20 sm:p-4 sm:col-span-2"
                />

              </div>

            </div>


            {/* =================================================
                PAYMENT METHOD
            ================================================== */}
            <div>

              <label className="mb-3 block text-xs font-bold uppercase tracking-widest text-on-surface-variant">
                Payment Method
              </label>

              <div className="grid grid-cols-1 gap-3 sm:grid-cols-2">

                <button
                  type="button"
                  onClick={() => setPaymentMethod("card")}
                  className={`flex h-14 items-center justify-center border px-4 transition-all sm:h-16 ${
                    paymentMethod === "card"
                      ? "border-vibrant-orange bg-vibrant-orange/5 text-primary"
                      : "border-outline-variant hover:bg-surface-container"
                  }`}
                >
                  <span className="material-symbols-outlined mr-2">
                    credit_card
                  </span>

                  <span className="text-xs font-bold uppercase tracking-wider sm:text-sm">
                    Card
                  </span>

                </button>


                <button
                  type="button"
                  onClick={() => setPaymentMethod("paypal")}
                  className={`flex h-14 items-center justify-center border px-4 transition-all sm:h-16 ${
                    paymentMethod === "paypal"
                      ? "border-vibrant-orange bg-vibrant-orange/5 text-primary"
                      : "border-outline-variant hover:bg-surface-container"
                  }`}
                >
                  <span className="material-symbols-outlined mr-2">
                    payments
                  </span>

                  <span className="text-xs font-bold uppercase tracking-wider sm:text-sm">
                    PayPal
                  </span>

                </button>

              </div>

            </div>


            {/* =================================================
                SECURITY
            ================================================== */}
            <div className="flex items-center justify-center gap-2 text-center text-[10px] uppercase tracking-wider text-on-surface-variant sm:text-xs">

              <span className="material-symbols-outlined text-base">
                shield_lock
              </span>

              <span>
                Secure encrypted payment
              </span>

            </div>


            {/* =================================================
                ERROR
            ================================================== */}
            {donationError && (
              <div className="border border-red-200 bg-red-50 px-4 py-3 text-sm text-red-600">
                {donationError}
              </div>
            )}


            {/* =================================================
                SUCCESS
            ================================================== */}
            {donationSuccess && (
              <div className="border border-green-200 bg-green-50 px-4 py-3 text-sm text-green-700">
                {donationSuccess}
              </div>
            )}


            {/* =================================================
                SUBMIT
            ================================================== */}
            <button
              type="submit"
              disabled={isSubmitting}
              className="w-full bg-vibrant-orange px-5 py-4 text-sm font-bold uppercase tracking-[0.15em] text-white shadow-lg transition-all hover:brightness-110 active:scale-[0.98] disabled:cursor-not-allowed disabled:opacity-60 sm:py-5"
            >
              {isSubmitting
                ? "Processing..."
                : `Continue with ${
                    frequency === "monthly"
                      ? "Monthly Donation"
                      : "Donation"
                  }`}
            </button>

          </form>

        </div>

      </div>

    </div>
  </div>
</section>
























        <section className="py-section-gap bg-white border-t border-surface-container-high">
          <div className="container mx-auto px-margin-mobile md:px-margin-desktop text-center max-w-4xl">
            <span className="font-label-md text-label-md text-secondary uppercase tracking-[0.3em] mb-4 block">Trust and Accountability</span>
            <h2 className="font-headline-md text-headline-md text-primary mb-12">How Your Funds Are Used</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
              {[
                { percent: '90%', label: 'Direct Impact', text: 'Funds applied directly to program services and community initiatives.' },
                { percent: '7%', label: 'Fundraising', text: 'Investment into donor acquisition and long-term funding stability.' },
                { percent: '3%', label: 'Admin', text: 'Essential operations and oversight to maintain transparency.' },
              ].map((item) => (
                <div className="flex flex-col items-center" key={item.label}>
                  <div className="mb-6 w-32 h-32 rounded-full border-8 border-surface-container-high flex items-center justify-center">
                    <div className="font-headline-sm text-headline-sm text-primary">{item.percent}</div>
                  </div>
                  <h4 className="font-label-md text-label-md uppercase mb-2">{item.label}</h4>
                  <p className="font-body-md text-body-md text-on-surface-variant">{item.text}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="relative py-section-gap overflow-hidden group">
          <div className="absolute inset-0 z-0">
            
          <div className="absolute inset-0 z-0">
            <div/>
            <img
              className="hero-slide is-active absolute inset-0 h-full w-full object-cover object-top"
              src={team}
              alt="Portrait"
            />
              <div className="absolute inset-0 bg-black/70"></div>
          </div>
          </div>
          <div className="container mx-auto px-margin-mobile relative z-10 text-center text-white max-w-2xl">
            <h2 className="font-headline-md text-headline-md mb-8">Make a difference with us today.</h2>
          </div>
        </section>
      </main>

      <footer className="bg-tertiary text-on-tertiary w-full px-margin-mobile md:px-margin-desktop py-section-gap flex flex-col items-center text-center gap-12">
        <div className="flex flex-col items-center gap-4">
          <img alt="USEC Footer Logo" className="h-16 w-auto brightness-0 invert opacity-80" src="/usec-navbar-logo.png" />
          <h2 className="font-headline-md text-headline-md">United Safe Environment Creators</h2>
          <p className="font-body-md text-body-md opacity-70 max-w-lg">Dedicated to humanitarian integrity and creating sustainable safety for the world's most vulnerable populations since 2012.</p>
        </div>
        <div className="flex flex-wrap justify-center gap-8 md:gap-16">
          <div className="flex flex-col gap-3">
            <span className="font-label-md text-label-md uppercase tracking-widest text-vibrant-orange">Organization</span>
            <a className="font-body-md text-body-md opacity-70 hover:opacity-100 transition-opacity" href="#">About Our Mission</a>
            <a className="font-body-md text-body-md opacity-70 hover:opacity-100 transition-opacity" href="/annual-reports">Annual Reports</a>
            <a className="font-body-md text-body-md opacity-70 hover:opacity-100 transition-opacity" href="#">Careers</a>
          </div>
          <div className="flex flex-col gap-3">
            <span className="font-label-md text-label-md uppercase tracking-widest text-vibrant-orange">Get Involved</span>
            <a className="font-body-md text-body-md opacity-70 hover:opacity-100 transition-opacity" href="#">Volunteer Programs</a>
            <a className="font-body-md text-body-md opacity-70 hover:opacity-100 transition-opacity" href="#">Corporate Partnership</a>
            <a className="font-body-md text-body-md opacity-70 hover:opacity-100 transition-opacity" href="#">Advocacy</a>
          </div>
          <div className="flex flex-col gap-3">
            <span className="font-label-md text-label-md uppercase tracking-widest text-vibrant-orange">Support</span>
            <a className="font-body-md text-body-md opacity-70 hover:opacity-100 transition-opacity" href="#">Help Center</a>
            <a className="font-body-md text-body-md opacity-70 hover:opacity-100 transition-opacity" href="/privacy-policy">Privacy Policy</a>
            <a className="font-body-md text-body-md opacity-70 hover:opacity-100 transition-opacity" href="/contact-us">Contact Us</a>
          </div>
        </div>
        <div className="w-full h-px bg-white/10 mt-8" />
        <div className="flex flex-col md:flex-row justify-between items-center w-full gap-4">
          <p className="font-body-md text-body-md opacity-50">Â© 2024 USEC. Humanitarian Integrity.</p>
          <div className="flex gap-6">
            <a className="material-symbols-outlined text-white/50 hover:text-vibrant-orange transition-colors" href="#">public</a>
            <a className="material-symbols-outlined text-white/50 hover:text-vibrant-orange transition-colors" href="#">alternate_email</a>
            <a className="material-symbols-outlined text-white/50 hover:text-vibrant-orange transition-colors" href="#">share</a>
          </div>
        </div>
      </footer>
    </div>
  )
}

export default DonatePage

