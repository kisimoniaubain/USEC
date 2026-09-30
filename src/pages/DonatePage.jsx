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

  // Equity account number visibility
  const [showAccountNumber, setShowAccountNumber] = useState(false)

  // Donation notification form
  const [isSendingDonationNotification, setIsSendingDonationNotification] =
    useState(false)

  const [donationNotification, setDonationNotification] = useState({
    status: "",
    type: "",
  })

  const handleDonationNotification = async (event) => {
    event.preventDefault()

    setIsSendingDonationNotification(true)

    setDonationNotification({
      status: "",
      type: "",
    })

    const form = event.currentTarget
    const formData = new FormData(form)

    const payload = {
      donorName: formData.get("donorName"),
      donorEmail: formData.get("donorEmail"),
      donationAmount: formData.get("donationAmount"),
      transactionReference: formData.get("transactionReference"),
      donorMessage: formData.get("donorMessage"),
    }

    try {
      const response = await fetch("/api/donation-notification", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(payload),
      })

      const data = await response.json()

      if (!response.ok) {
        throw new Error(
          data.error || "Unable to send donation notification."
        )
      }

      setDonationNotification({
        status:
          "Thank you. Your donation notification has been sent successfully to the USEC team.",
        type: "success",
      })

      form.reset()
    } catch (error) {
      console.error("Donation notification error:", error)

      setDonationNotification({
        status:
          error.message ||
          "Something went wrong. Please try again.",
        type: "error",
      })
    } finally {
      setIsSendingDonationNotification(false)
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
    <div
      className="
        mx-auto
        w-full
        max-w-5xl
        overflow-hidden
        rounded-2xl
        bg-white
        shadow-[0_20px_50px_rgba(0,0,0,0.06)]
      "
    >
      <div className="grid grid-cols-1 lg:grid-cols-2">

        {/* LEFT — EQUITY BANK DETAILS */}
        <div className="flex w-full flex-col justify-center bg-white p-6 sm:p-8 md:p-10 lg:p-12">

          {/* Equity Logo */}
          <div className="mb-8 flex items-center justify-center lg:justify-start">
            <img
              src="/Equity_Bank_Logo.png"
              alt="Equity Bank"
              className="h-auto w-[190px] object-contain sm:w-[220px]"
            />
          </div>

          {/* Heading */}
          <div className="mb-7">
            <p className="mb-2 text-xs font-bold uppercase tracking-[0.2em] text-vibrant-orange">
              Bank Transfer
            </p>

            <h2 className="text-2xl font-black text-primary sm:text-3xl">
              Support USEC
            </h2>

            <p className="mt-3 text-sm leading-6 text-slate-600">
              You can support United Safe Environment Creators (USEC)
              through the Equity Bank account below.
            </p>
          </div>

          {/* Bank Details */}
          <div className="space-y-5">

            {/* Bank */}
            <div>
              <p className="mb-1 text-[10px] font-bold uppercase tracking-[0.18em] text-slate-500 sm:text-xs">
                Bank
              </p>

              <p className="text-base font-bold text-primary">
                Equity Bank
              </p>
            </div>

            {/* Account Name */}
            <div>
              <p className="mb-1 text-[10px] font-bold uppercase tracking-[0.18em] text-slate-500 sm:text-xs">
                Account Name
              </p>

              <p className="text-base font-bold text-primary">
                United Safe Environment Creators (USEC)
              </p>
            </div>

            {/* Account Number */}
            <div>
              <p className="mb-1 text-[10px] font-bold uppercase tracking-[0.18em] text-slate-500 sm:text-xs">
                Account Number
              </p>

              <div className="flex items-center gap-3">
                <p className="text-base font-bold tracking-wider text-primary">
                  {showAccountNumber
                    ? "1650172450883"
                    : "••••••••••••"}
                </p>

                <button
                  type="button"
                  onClick={() =>
                    setShowAccountNumber(!showAccountNumber)
                  }
                  className="
                    inline-flex
                    items-center
                    gap-1.5
                    rounded-md
                    border
                    border-slate-200
                    px-3
                    py-1.5
                    text-xs
                    font-bold
                    text-primary
                    transition
                    hover:border-vibrant-orange
                    hover:text-vibrant-orange
                  "
                >
                  <span className="material-symbols-outlined text-base">
                    {showAccountNumber
                      ? "visibility_off"
                      : "visibility"}
                  </span>

                  {showAccountNumber ? "Hide" : "View"}
                </button>
              </div>
            </div>

          </div>

          {/* Notice */}
          <div
            className="
              mt-8
              rounded-xl
              border
              border-orange-100
              bg-orange-50
              p-4
            "
          >
            <div className="flex gap-3">
              <span className="material-symbols-outlined shrink-0 text-vibrant-orange">
                info
              </span>

              <p className="text-xs leading-5 text-slate-600 sm:text-sm">
                After completing your bank transfer, please use the
                notification form on the right to let the USEC team
                know about your donation.
              </p>
            </div>
          </div>

        </div>

      {/* RIGHT — DONATION NOTIFICATION FORM */}
<div className="w-full bg-surface-cream p-6 sm:p-8 md:p-10 lg:p-12">

  <div className="mb-7">
    <p className="mb-2 text-xs font-bold uppercase tracking-[0.2em] text-vibrant-orange">
      Donation Notification
    </p>

    <h2 className="text-2xl font-black text-primary sm:text-3xl">
      Tell Us About Your Donation
    </h2>

    <p className="mt-3 text-sm leading-6 text-slate-600">
      Once you have completed your bank transfer, fill in the
      form below. Your notification will be sent directly to
      the USEC team.
    </p>
  </div>

  <form
    onSubmit={handleDonationNotification}
    className="space-y-5"
  >

    {/* Donor Name */}
    <div>
      <label
        htmlFor="donorName"
        className="mb-2 block text-xs font-bold uppercase tracking-[0.15em] text-slate-600"
      >
        Full Name
      </label>

      <input
        id="donorName"
        name="donorName"
        type="text"
        required
        autoComplete="name"
        placeholder="Enter your full name"
        className="
          w-full
          rounded-lg
          border
          border-slate-200
          bg-white
          px-4
          py-3
          text-sm
          text-primary
          outline-none
          transition
          focus:border-vibrant-orange
          focus:ring-2
          focus:ring-orange-100
        "
      />
    </div>

    {/* Email */}
    <div>
      <label
        htmlFor="donorEmail"
        className="mb-2 block text-xs font-bold uppercase tracking-[0.15em] text-slate-600"
      >
        Email Address
      </label>

      <input
        id="donorEmail"
        name="donorEmail"
        type="email"
        required
        autoComplete="email"
        placeholder="you@example.com"
        className="
          w-full
          rounded-lg
          border
          border-slate-200
          bg-white
          px-4
          py-3
          text-sm
          text-primary
          outline-none
          transition
          focus:border-vibrant-orange
          focus:ring-2
          focus:ring-orange-100
        "
      />
    </div>

    {/* Amount */}
    <div>
      <label
        htmlFor="donationAmount"
        className="mb-2 block text-xs font-bold uppercase tracking-[0.15em] text-slate-600"
      >
        Donation Amount
      </label>

      <input
        id="donationAmount"
        name="donationAmount"
        type="text"
        required
        placeholder="e.g. KES 5,000"
        className="
          w-full
          rounded-lg
          border
          border-slate-200
          bg-white
          px-4
          py-3
          text-sm
          text-primary
          outline-none
          transition
          focus:border-vibrant-orange
          focus:ring-2
          focus:ring-orange-100
        "
      />
    </div>

    {/* Transaction Reference */}
    <div>
      <label
        htmlFor="transactionReference"
        className="mb-2 block text-xs font-bold uppercase tracking-[0.15em] text-slate-600"
      >
        Transaction Reference
      </label>

      <input
        id="transactionReference"
        name="transactionReference"
        type="text"
        required
        placeholder="Enter your transaction/reference number"
        className="
          w-full
          rounded-lg
          border
          border-slate-200
          bg-white
          px-4
          py-3
          text-sm
          text-primary
          outline-none
          transition
          focus:border-vibrant-orange
          focus:ring-2
          focus:ring-orange-100
        "
      />
    </div>

    {/* Optional Message */}
    <div>
      <label
        htmlFor="donorMessage"
        className="mb-2 block text-xs font-bold uppercase tracking-[0.15em] text-slate-600"
      >
        Message <span className="normal-case">(optional)</span>
      </label>

      <textarea
        id="donorMessage"
        name="donorMessage"
        rows="4"
        placeholder="Any additional message..."
        className="
          w-full
          resize-none
          rounded-lg
          border
          border-slate-200
          bg-white
          px-4
          py-3
          text-sm
          text-primary
          outline-none
          transition
          focus:border-vibrant-orange
          focus:ring-2
          focus:ring-orange-100
        "
      />
    </div>

    {/* Status Message */}
    {donationNotification.status && (
      <div
        className={`rounded-lg px-4 py-3 text-sm ${
          donationNotification.type === "success"
            ? "border border-green-200 bg-green-50 text-green-700"
            : "border border-red-200 bg-red-50 text-red-700"
        }`}
      >
        {donationNotification.status}
      </div>
    )}

    {/* Submit */}
    <button
      type="submit"
      disabled={isSendingDonationNotification}
      className="
        inline-flex
        w-full
        items-center
        justify-center
        gap-2
        rounded-lg
        bg-vibrant-orange
        px-5
        py-3.5
        text-sm
        font-bold
        text-white
        transition-all
        hover:bg-orange-600
        disabled:cursor-not-allowed
        disabled:opacity-60
      "
    >
      <span className="material-symbols-outlined text-base">
        {isSendingDonationNotification
          ? "progress_activity"
          : "send"}
      </span>

      {isSendingDonationNotification
        ? "Sending..."
        : "Notify USEC Team"}
    </button>

  </form>
</div>
      </div>
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

