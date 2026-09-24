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

 
<section
  className="bg-surface-cream py-12 sm:py-16 md:py-section-gap"
  id="donate-form"
>
  <div className="container mx-auto px-4 sm:px-6">

    {/* =====================================================
        SMALLER DONATION CARD
    ====================================================== */}
    <div
      className="
        mx-auto
        w-full
        max-w-5xl
        overflow-hidden
        rounded-2xl
        shadow-[0_20px_50px_rgba(0,0,0,0.06)]
      "
    >

      <div className="grid grid-cols-1 items-stretch lg:grid-cols-2">

        {/* =================================================
            LEFT — IMAGE
            Hidden on mobile/tablet
        ================================================== */}
        <div className="hidden lg:block">

          <img
            src={team}
            alt="Supporting our community"
            className="
              block
              h-full
              min-h-[560px]
              w-full
              object-cover
            "
          />

        </div>


        {/* =================================================
            RIGHT — DONATION FORM
        ================================================== */}
        <div className="w-full bg-white">

          <div
            className="
              h-full
              w-full
              p-5
              sm:p-6
              md:p-7
              lg:p-8
            "
          >

            <form
              onSubmit={handleDonationSubmit}
              className="flex flex-col gap-5"
            >

              {/* FREQUENCY */}
              <div className="flex rounded-lg bg-slate-50 p-1">

                <button
                  type="button"
                  onClick={() => setFrequency("once")}
                  className={`flex-1 rounded-md px-2 py-2.5 text-[11px] font-bold uppercase tracking-wider transition-all sm:text-xs ${
                    frequency === "once"
                      ? "bg-white text-primary shadow-sm"
                      : "text-slate-500 hover:text-primary"
                  }`}
                >
                  One-time Gift
                </button>

                <button
                  type="button"
                  onClick={() => setFrequency("monthly")}
                  className={`flex-1 rounded-md px-2 py-2.5 text-[11px] font-bold uppercase tracking-wider transition-all sm:text-xs ${
                    frequency === "monthly"
                      ? "bg-white text-primary shadow-sm"
                      : "text-slate-500 hover:text-primary"
                  }`}
                >
                  Monthly Partner
                </button>

              </div>


              {/* AMOUNT */}
              <div>

                <label className="mb-2 block text-[10px] font-bold uppercase tracking-widest text-slate-500 sm:text-xs">
                  Select Donation Amount
                </label>

                <div className="grid grid-cols-2 gap-2 sm:grid-cols-4">

                  {[25, 50, 100, 250].map((amount) => (
                    <button
                      key={amount}
                      type="button"
                      onClick={() => {
                        setSelectedAmount(amount);
                        setCustomAmount("");
                      }}
                      className={`rounded-lg border-2 px-2 py-2.5 text-sm font-bold transition-all sm:py-3 ${
                        selectedAmount === amount && !customAmount
                          ? "border-vibrant-orange bg-vibrant-orange/5 text-primary"
                          : "border-slate-200 text-primary hover:border-vibrant-orange"
                      }`}
                    >
                      ${amount}
                    </button>
                  ))}

                </div>

              </div>


              {/* OTHER AMOUNT */}
              <div>

                <label className="mb-2 block text-[10px] font-bold uppercase tracking-widest text-slate-500 sm:text-xs">
                  Other Amount
                </label>

                <div className="relative">

                  <span className="absolute left-3 top-1/2 -translate-y-1/2 text-sm font-bold text-slate-400">
                    $
                  </span>

                  <input
                    type="number"
                    min="1"
                    step="0.01"
                    value={customAmount}
                    onChange={(event) => {
                      setCustomAmount(event.target.value);
                      setSelectedAmount(null);
                    }}
                    placeholder="Enter amount"
                    className="
                      w-full
                      rounded-lg
                      border
                      border-slate-200
                      bg-slate-50
                      p-3
                      pl-8
                      text-sm
                      text-slate-800
                      outline-none
                      transition
                      placeholder:text-slate-400
                      focus:border-orange-500
                      focus:bg-white
                      focus:ring-2
                      focus:ring-orange-500/20
                    "
                  />

                </div>

              </div>


              {/* DONOR INFORMATION */}
              <div>

                <label className="mb-2 block text-[10px] font-bold uppercase tracking-widest text-slate-500 sm:text-xs">
                  Your Information
                </label>

                <div className="grid grid-cols-1 gap-2.5 sm:grid-cols-2">

                  <input
                    type="text"
                    value={firstName}
                    onChange={(event) => setFirstName(event.target.value)}
                    placeholder="First Name"
                    required
                    className="
                      w-full
                      rounded-lg
                      border
                      border-slate-200
                      bg-slate-50
                      p-3
                      text-sm
                      text-slate-800
                      outline-none
                      transition
                      placeholder:text-slate-400
                      focus:border-orange-500
                      focus:bg-white
                      focus:ring-2
                      focus:ring-orange-500/20
                    "
                  />

                  <input
                    type="text"
                    value={lastName}
                    onChange={(event) => setLastName(event.target.value)}
                    placeholder="Last Name"
                    required
                    className="
                      w-full
                      rounded-lg
                      border
                      border-slate-200
                      bg-slate-50
                      p-3
                      text-sm
                      text-slate-800
                      outline-none
                      transition
                      placeholder:text-slate-400
                      focus:border-orange-500
                      focus:bg-white
                      focus:ring-2
                      focus:ring-orange-500/20
                    "
                  />

                  <input
                    type="email"
                    value={email}
                    onChange={(event) => setEmail(event.target.value)}
                    placeholder="Email Address"
                    required
                    className="
                      w-full
                      rounded-lg
                      border
                      border-slate-200
                      bg-slate-50
                      p-3
                      text-sm
                      text-slate-800
                      outline-none
                      transition
                      placeholder:text-slate-400
                      focus:border-orange-500
                      focus:bg-white
                      focus:ring-2
                      focus:ring-orange-500/20
                      sm:col-span-2
                    "
                  />

                </div>

              </div>


              {/* PAYMENT METHOD */}
              <div>

                <label className="mb-2 block text-[10px] font-bold uppercase tracking-widest text-slate-500 sm:text-xs">
                  Payment Method
                </label>

                <div className="grid grid-cols-2 gap-2.5">

                  <button
                    type="button"
                    onClick={() => setPaymentMethod("card")}
                    className={`flex h-12 items-center justify-center rounded-lg border px-3 transition-all ${
                      paymentMethod === "card"
                        ? "border-vibrant-orange bg-vibrant-orange/5 text-primary"
                        : "border-slate-200 text-slate-600 hover:bg-slate-50"
                    }`}
                  >
                    <span className="material-symbols-outlined mr-1.5 text-lg">
                      credit_card
                    </span>

                    <span className="text-[11px] font-bold uppercase tracking-wider">
                      Card
                    </span>
                  </button>


                  <button
                    type="button"
                    onClick={() => setPaymentMethod("paypal")}
                    className={`flex h-12 items-center justify-center rounded-lg border px-3 transition-all ${
                      paymentMethod === "paypal"
                        ? "border-vibrant-orange bg-vibrant-orange/5 text-primary"
                        : "border-slate-200 text-slate-600 hover:bg-slate-50"
                    }`}
                  >
                    <span className="material-symbols-outlined mr-1.5 text-lg">
                      payments
                    </span>

                    <span className="text-[11px] font-bold uppercase tracking-wider">
                      PayPal
                    </span>
                  </button>

                </div>

              </div>


              {/* SECURITY */}
              <div className="flex items-center justify-center gap-1.5 text-center text-[9px] uppercase tracking-wider text-slate-400 sm:text-[10px]">

                <span className="material-symbols-outlined text-sm">
                  shield_lock
                </span>

                <span>
                  Secure encrypted payment
                </span>

              </div>


              {/* ERROR */}
              {donationError && (
                <div className="rounded-lg border border-red-200 bg-red-50 px-3 py-2.5 text-xs text-red-600">
                  {donationError}
                </div>
              )}


              {/* SUCCESS */}
              {donationSuccess && (
                <div className="rounded-lg border border-green-200 bg-green-50 px-3 py-2.5 text-xs text-green-700">
                  {donationSuccess}
                </div>
              )}


              {/* SUBMIT */}
              <button
                type="submit"
                disabled={isSubmitting}
                className="
                  w-full
                  rounded-lg
                  bg-vibrant-orange
                  px-4
                  py-3
                  text-xs
                  font-bold
                  uppercase
                  tracking-[0.1em]
                  text-white
                  shadow-lg
                  shadow-orange-500/20
                  transition-all
                  hover:brightness-110
                  active:scale-[0.98]
                  disabled:cursor-not-allowed
                  disabled:opacity-60
                "
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

