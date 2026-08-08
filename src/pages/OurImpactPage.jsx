import { useState } from "react";
import SiteNavbar from '../components/SiteNavbar'
import useWhoWeAreReveal from '../hooks/useWhoWeAreReveal'
import impacthero from '../assets/images/impactimo/impact-hero.jpg'
import sec2card1 from '../assets/images/impactimo/sec2card1.jpg'
import sec2card2 from '../assets/images/impactimo/sec2card2.jpeg'
import sec2card3 from '../assets/images/impactimo/sec2card3.png'
import sec2card4 from '../assets/images/impactimo/sec2card4.jpg'

import israaidLogo from '../assets/images/partners/israaid-logo.png'
import binadamuLogo from '../assets/images/partners/binadamu.png'
import empowerLogo from '../assets/images/partners/empower.jpg'
import cohereLogo from '../assets/images/partners/cohere.jpg'
import kkrinLogo from '../assets/images/partners/kkrin.png'
import sec5imo from '../assets/images/impactimo/sec5imo.png'
import donateprotect from '../assets/images/Protection-imo/donate-protect.png'


function OurImpactPage() {
  useWhoWeAreReveal()
  // Curved organic wave SVG for hero bottom section
const WavyBottomDivider = () => (
  <div className="absolute bottom-0 left-0 w-full overflow-hidden leading-none pointer-events-none z-0">
    <svg
      viewBox="0 0 1200 120"
      preserveAspectRatio="none"
      className="relative block w-full h-16 md:h-24 text-slate-50"
      fill="currentColor"
    >
      <path d="M0,0 C150,90 350,-40 500,65 C650,160 900,10 1200,45 L1200,120 L0,120 Z"></path>
    </svg>
  </div>
);
  const [activeImpact, setActiveImpact] = useState(0);

  return (
    <div className="bg-surface text-on-surface font-body-md overflow-x-hidden">
      <SiteNavbar activePage="our-impact" />

      <main className="pt-20">

        <section
            id="impact"
            className="relative h-[70vh] min-h-[600px] flex items-end overflow-hidden"
          >
            {/* BACKGROUND IMAGE */}
            <div className="absolute inset-0 bg-deep-navy">
              <img
                src={impacthero}
                alt="Community Engagement"
                className="w-full h-full object-cover opacity-60"
              />

              {/* DARK OVERLAY */}
              <div className="absolute inset-0 bg-black/55"></div>
            </div>

            {/* CONTENT */}
            <div className="relative z-10 w-full max-w-container-max mx-auto px-margin-mobile md:px-margin-desktop pb-20 md:pb-24 text-white">

              {/* MAIN HEADING */}
              <h1 className="font-display-lg text-display-lg-mobile md:text-display-lg max-w-4xl mb-8 border-l-[43px] border-vibrant-orange pl-[30px] leading-tight">
                Our Impact
              </h1>
              <span className="block font-display-lg font-bold text-2xl md:text-3xl lg:text-4xl text-white leading-tight mb-4 max-w-3xl">
              Quantifying Change,Honoring Humanity.
              </span>

              {/* DESCRIPTION */}
              <p className="font-body-lg text-body-lg max-w-2xl text-white/90 leading-relaxed">
                Transparency is the bedrock of our mission. Every figure represents a
                life reached, a family secured, and an environment protected for the
                next generation.
              </p>

            </div>
              {/* WAVY BOTTOM DIVIDER */}
  <WavyBottomDivider />
          </section>

        
{/* =========================================================
    SECTION 5 — YOUR IMPACT
========================================================= */}
<section className="relative overflow-hidden bg-surface-cream py-20 md:py-28">

  <div className="mx-auto max-w-container-max px-margin-mobile md:px-margin-desktop">

    {/* =====================================================
        HEADER
    ===================================================== */}
    <div className="mb-12 flex flex-col gap-8 md:mb-16 md:flex-row md:items-end md:justify-between">

      <div className="max-w-2xl">

        <h2 className="font-display-lg text-4xl font-bold leading-tight text-deep-navy md:text-5xl lg:text-6xl">
          Together, We Create{" "}
          <span className="text-vibrant-orange">
            Lasting Impact.
          </span>
        </h2>

      </div>

      <p className="max-w-md font-body-md leading-relaxed text-gray-600">
        Every donation, volunteer hour, partnership, and shared message
        contributes to a stronger future for vulnerable communities and a
        healthier environment.
      </p>

    </div>


    {/* =====================================================
        CAROUSEL CONTROLS
    ===================================================== */}
    <div className="mb-10 flex items-center justify-between">

      {/* PROGRESS BAR */}
      <div className="h-[6px] w-40 overflow-hidden rounded-full bg-deep-navy/10 md:w-52">

        <div
          className="h-full bg-vibrant-orange transition-all duration-500"
          style={{
            width: `${((activeImpact + 1) / 4) * 100}%`,
          }}
        />

      </div>


      {/* PAGE INDICATOR + BUTTONS */}
      <div className="flex items-center gap-5">

        <span className="text-sm font-bold tracking-widest text-deep-navy">
          0{activeImpact + 1}
          <span className="mx-2 text-gray-400">/</span>
          04
        </span>


        <div className="flex gap-3">

          {/* PREVIOUS */}
          <button
            onClick={() =>
              setActiveImpact(
                activeImpact === 0 ? 3 : activeImpact - 1
              )
            }
            className="flex h-14 w-14 items-center justify-center rounded-lg border border-deep-navy text-deep-navy transition-all duration-300 hover:bg-deep-navy hover:text-white"          >
            <span className="text-2xl">
              ←
            </span>
          </button>


          {/* NEXT */}
          <button
            onClick={() =>
              setActiveImpact(
                activeImpact === 3 ? 0 : activeImpact + 1
              )
            }
            className="flex h-14 w-14 items-center justify-center rounded-lg border border-deep-navy text-deep-navy transition-all duration-300 hover:bg-deep-navy hover:text-white"          
            aria-label="Next impact"
          >
            <span className="text-2xl">
              →
            </span>
          </button>

        </div>

      </div>

    </div>


    {/* =====================================================
        CARDS VIEWPORT
    ===================================================== */}
    <div className="relative overflow-hidden">

      {/* SLIDING CONTAINER */}
      <div
        className="flex transition-transform duration-700 ease-in-out"
        style={{
          transform: `translateX(-${activeImpact * 100}%)`,
        }}
      >


        {/* =================================================
            CARD 01 — COMMUNITIES
        ================================================= */}
        <article className="flex min-w-full flex-col md:flex-row">

          {/* IMAGE */}
          <div className="relative h-[350px] w-full overflow-hidden md:h-[500px] md:w-1/2">

            <img
              src={sec2card1}
              alt="Supporting vulnerable communities"
              className="h-full w-full object-cover transition-transform duration-700 hover:scale-105"
            />

          </div>


          {/* CONTENT */}
          <div className="flex w-full flex-col justify-center py-10 md:w-1/2 md:px-12 lg:px-16">

            <span className="text-sm font-bold tracking-[0.2em] text-vibrant-orange">
              01 — COMMUNITIES
            </span>

            <h3 className="mt-6 font-display-lg text-4xl font-bold leading-tight text-deep-navy md:text-5xl lg:text-6xl">
              Building Stronger Communities.
            </h3>

            <div className="mt-7 h-1 w-16 bg-vibrant-orange" />

            <p className="mt-7 max-w-xl text-base leading-8 text-gray-600 md:text-lg">
              Supporting vulnerable communities through inclusive and
              sustainable development initiatives that create dignity,
              opportunity, and lasting change.
            </p>

            <a
              href="/protection-activities"
              className="mt-10 inline-flex w-fit items-center gap-3 border-b-2 border-deep-navy pb-3 text-sm font-bold uppercase tracking-widest text-deep-navy transition-all duration-300 hover:border-vibrant-orange hover:text-vibrant-orange"
            >
              Learn More
              <span>
                →
              </span>
            </a>

          </div>

        </article>


        {/* =================================================
            CARD 02 — YOUNG PEOPLE
        ================================================= */}
        <article className="flex min-w-full flex-col md:flex-row">

          {/* IMAGE */}
          <div className="relative h-[350px] w-full overflow-hidden md:h-[500px] md:w-1/2">

            <img
              src={sec2card2}
              alt="Empowering young people"
              className="h-full w-full object-cover transition-transform duration-700 hover:scale-105"
            />

          </div>


          {/* CONTENT */}
          <div className="flex w-full flex-col justify-center py-10 md:w-1/2 md:px-12 lg:px-16">

            <span className="text-sm font-bold tracking-[0.2em] text-vibrant-orange">
              02 — YOUNG PEOPLE
            </span>

            <h3 className="mt-6 font-display-lg text-4xl font-bold leading-tight text-deep-navy md:text-5xl lg:text-6xl">
              Empowering the Next Generation.
            </h3>

            <div className="mt-7 h-1 w-16 bg-vibrant-orange" />

            <p className="mt-7 max-w-xl text-base leading-8 text-gray-600 md:text-lg">
              Creating opportunities for children and youth through education,
              skills development, creativity, and empowerment.
            </p>

            <a
              href="/education-program"
              className="mt-10 inline-flex w-fit items-center gap-3 border-b-2 border-deep-navy pb-3 text-sm font-bold uppercase tracking-widest text-deep-navy transition-all duration-300 hover:border-vibrant-orange hover:text-vibrant-orange"
            >
               Learn More
              <span>
                →
              </span>
            </a>

          </div>

        </article>


        {/* =================================================
            CARD 03 — FAMILIES
        ================================================= */}
        <article className="flex min-w-full flex-col md:flex-row">

          {/* IMAGE */}
          <div className="relative h-[350px] w-full overflow-hidden md:h-[500px] md:w-1/2">

            <img
              src={sec2card3}
              alt="Supporting families and caregivers"
              className="h-full w-full object-cover transition-transform duration-700 hover:scale-105"
            />

          </div>


          {/* CONTENT */}
          <div className="flex w-full flex-col justify-center py-10 md:w-1/2 md:px-12 lg:px-16">

            <span className="text-sm font-bold tracking-[0.2em] text-vibrant-orange">
              03 — FAMILIES
            </span>

            <h3 className="mt-6 font-display-lg text-4xl font-bold leading-tight text-deep-navy md:text-5xl lg:text-6xl">
              Strengthening Families.
            </h3>

            <div className="mt-7 h-1 w-16 bg-vibrant-orange" />

            <p className="mt-7 max-w-xl text-base leading-8 text-gray-600 md:text-lg">
              Strengthening families and caregivers with protection, support,
              and sustainable livelihood opportunities that help households
              build a more secure future.
            </p>

            <a
              href="/livelihood-activities"
              className="mt-10 inline-flex w-fit items-center gap-3 border-b-2 border-deep-navy pb-3 text-sm font-bold uppercase tracking-widest text-deep-navy transition-all duration-300 hover:border-vibrant-orange hover:text-vibrant-orange"
            >
              Learn More
              <span>
                →
              </span>
            </a>

          </div>

        </article>


        {/* =================================================
            CARD 04 — ENVIRONMENT
        ================================================= */}
        <article className="flex min-w-full flex-col md:flex-row">

          {/* IMAGE */}
          <div className="relative h-[350px] w-full overflow-hidden md:h-[500px] md:w-1/2">

            <img
              src={sec2card4}
              alt="Protecting the environment"
              className="h-full w-full object-cover transition-transform duration-700 hover:scale-105"
            />

          </div>


          {/* CONTENT */}
          <div className="flex w-full flex-col justify-center py-10 md:w-1/2 md:px-12 lg:px-16">

            <span className="text-sm font-bold tracking-[0.2em] text-vibrant-orange">
              04 — ENVIRONMENT
            </span>

            <h3 className="mt-6 font-display-lg text-4xl font-bold leading-tight text-deep-navy md:text-5xl lg:text-6xl">
              Protecting Our Shared Future.
            </h3>

            <div className="mt-7 h-1 w-16 bg-vibrant-orange" />

            <p className="mt-7 max-w-xl text-base leading-8 text-gray-600 md:text-lg">
              Promoting environmental responsibility and sustainable solutions
              for healthier, safer, and more resilient communities.
            </p>

            <a
              href="/protection-activities"
              className="mt-10 inline-flex w-fit items-center gap-3 border-b-2 border-deep-navy pb-3 text-sm font-bold uppercase tracking-widest text-deep-navy transition-all duration-300 hover:border-vibrant-orange hover:text-vibrant-orange"
            >
              Protect Our Future
              <span>
                →
              </span>
            </a>

          </div>

        </article>

      </div>

    </div>

  </div>

</section>



{/* =========================================================
    SECTION 6 — OUR REACH / BY THE NUMBERS
========================================================= */}
<section className="relative overflow-hidden bg-white py-20 md:py-28">

  <div className="mx-auto max-w-container-max px-margin-mobile md:px-margin-desktop">

    {/* =====================================================
        HEADER
    ===================================================== */}
    <div className="mb-16 max-w-4xl">

      <span className="mb-5 inline-flex items-center gap-4 text-sm font-bold uppercase tracking-[0.2em] text-vibrant-orange">
        <span className="h-[2px] w-12 bg-vibrant-orange"></span>
        Our Reach
      </span>

      <h2 className="font-display-lg text-4xl font-bold leading-[1.05] text-deep-navy md:text-5xl lg:text-6xl">
        Measuring Progress,{" "}
        <span className="text-vibrant-orange">
          Creating Change.
        </span>
      </h2>

      <p className="mt-7 max-w-2xl text-base leading-8 text-gray-600 md:text-lg">
        Every number represents a person, a family, a community, or an
        environment touched by our work.
      </p>

    </div>


    {/* =====================================================
        IMPACT AREA
    ===================================================== */}
    <div className="grid gap-12 lg:grid-cols-[0.8fr_1.2fr] lg:gap-20">


      {/* ===================================================
          FEATURED STAT
      =================================================== */}
      <div className="relative flex flex-col justify-between border-l-4 border-vibrant-orange py-6 pl-8 md:pl-12">

        <div>

          <span className="text-sm font-bold uppercase tracking-[0.2em] text-gray-500">
            Communities Reached
          </span>

          <div className="mt-6">

            <span className="font-display-lg text-[100px] font-bold leading-none text-deep-navy md:text-[140px]">
              10+
            </span>

          </div>

        </div>


        <div className="mt-10">

          <p className="max-w-md text-base leading-8 text-gray-600">
            Creating opportunities and strengthening vulnerable communities
            through inclusive and sustainable development initiatives.
          </p>

          <div className="mt-8 flex items-center gap-3 text-sm font-bold uppercase tracking-widest text-vibrant-orange">
            <span className="h-2 w-2 rounded-full bg-vibrant-orange"></span>
            Our Growing Reach
          </div>

        </div>

      </div>


      {/* ===================================================
          STATISTICS
      =================================================== */}
      <div className="border-t border-deep-navy/20">


        {/* PEOPLE */}
        <div className="group flex flex-col gap-5 border-b border-deep-navy/20 py-8 transition-all duration-300 md:flex-row md:items-center md:justify-between md:py-10">

          <div className="flex items-start gap-6">

            <span className="text-sm font-bold text-vibrant-orange">
              02
            </span>

            <div>

              <h3 className="text-2xl font-bold text-deep-navy md:text-3xl">
                People Supported
              </h3>

              <p className="mt-3 max-w-md text-sm leading-7 text-gray-600">
                Reaching children, youth, families, and vulnerable individuals
                with support and opportunities.
              </p>

            </div>

          </div>


          <span className="text-5xl font-bold text-deep-navy transition-all duration-300 group-hover:text-vibrant-orange md:text-6xl">
            55+
          </span>

        </div>


        {/* PROGRAMS */}
        <div className="group flex flex-col gap-5 border-b border-deep-navy/20 py-8 transition-all duration-300 md:flex-row md:items-center md:justify-between md:py-10">

          <div className="flex items-start gap-6">

            <span className="text-sm font-bold text-vibrant-orange">
              03
            </span>

            <div>

              <h3 className="text-2xl font-bold text-deep-navy md:text-3xl">
                Programs Delivered
              </h3>

              <p className="mt-3 max-w-md text-sm leading-7 text-gray-600">
                Delivering education, protection, and environmental programs
                that respond to community needs.
              </p>

            </div>

          </div>


          <span className="text-5xl font-bold text-deep-navy transition-all duration-300 group-hover:text-vibrant-orange md:text-6xl">
            4+
          </span>

        </div>


        {/* YEARS */}
        <div className="group flex flex-col gap-5 py-8 transition-all duration-300 md:flex-row md:items-center md:justify-between md:py-10">

          <div className="flex items-start gap-6">

            <span className="text-sm font-bold text-vibrant-orange">
              04
            </span>

            <div>

              <h3 className="text-2xl font-bold text-deep-navy md:text-3xl">
                Years of Impact
              </h3>

              <p className="mt-3 max-w-md text-sm leading-7 text-gray-600">
                Building stronger communities and creating meaningful change
                through long-term commitment.
              </p>

            </div>

          </div>


          <span className="text-5xl font-bold text-deep-navy transition-all duration-300 group-hover:text-vibrant-orange md:text-6xl">
            15+
          </span>

        </div>

      </div>

    </div>

  </div>

</section>


{/* =========================================================
    SECTION 8 — OUR PARTNERS
========================================================= */}
<section
  className="relative overflow-hidden bg-cover bg-center py-16 md:py-20"
  style={{
    backgroundImage: `url(${sec2card4})`,
  }}
>

  {/* DARK OVERLAY */}
  <div className="absolute inset-0 bg-black/65"></div>


  {/* CONTENT */}
  <div className="relative z-10 mx-auto max-w-container-max px-margin-mobile md:px-margin-desktop">


    {/* =====================================================
        SECTION HEADER
    ===================================================== */}
    <div className="mb-12 max-w-3xl">

      <span className="mb-5 block text-sm font-bold uppercase tracking-[0.2em] text-vibrant-orange">
        Our Partners
      </span>

      <h2 className="font-display-lg text-4xl text-white md:text-5xl lg:text-6xl">
        Stronger Together,{" "}
        <span className="text-vibrant-orange">
          Greater Impact.
        </span>
      </h2>

      <p className="mt-6 max-w-2xl font-body-lg text-body-lg leading-relaxed text-white/90">
        Our work is strengthened through collaboration with organizations,
        institutions, donors, and community partners who share our vision
        for stronger and more resilient communities.
      </p>

    </div>


    {/* =====================================================
        PARTNER CARDS
    ===================================================== */}
    {/* <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4"> */}
<div className="grid grid-cols-2 gap-3 sm:gap-4 md:grid-cols-3 lg:grid-cols-5 lg:gap-6">

  {/* =================================================
      PARTNER 01
  ================================================= */}
  <div className="group flex min-h-[150px] flex-col justify-between rounded-xl border border-white/50 bg-black/10 p-3 backdrop-blur-sm transition-all duration-500 hover:border-white hover:bg-white sm:min-h-[160px] sm:p-4 md:p-5 lg:p-6">

    <div className="flex flex-1 items-center justify-center">

      <div className="flex h-20 w-full items-center justify-center sm:h-24 md:h-28">

        <img
          src={israaidLogo}
          alt="ISRAAID"
          className="max-h-14 max-w-[85%] object-contain transition-all duration-500 sm:max-h-16 sm:brightness-0 sm:invert md:max-h-20 group-hover:brightness-100 group-hover:invert-0"
        />

      </div>

    </div>

    <p className="mt-4 text-center text-[10px] font-bold uppercase tracking-[0.12em] text-white/70 transition-colors duration-500 group-hover:text-deep-navy sm:mt-6 sm:text-xs sm:tracking-widest">
      ISRAAID
    </p>

  </div>


  {/* =================================================
      PARTNER 02
  ================================================= */}
  <div className="group flex min-h-[150px] flex-col justify-between rounded-xl border border-white/50 bg-black/10 p-3 backdrop-blur-sm transition-all duration-500 hover:border-white hover:bg-white sm:min-h-[160px] sm:p-4 md:p-5 lg:p-6">

    <div className="flex flex-1 items-center justify-center">

      <div className="flex h-20 w-full items-center justify-center sm:h-24 md:h-28">

        <img
          src={binadamuLogo}
          alt="BINADAMU TECH"
          className="max-h-14 max-w-[85%] object-contain transition-all duration-500 sm:max-h-16 sm:brightness-0 sm:invert md:max-h-20 group-hover:brightness-100 group-hover:invert-0"
        />

      </div>

    </div>

    <p className="mt-4 text-center text-[10px] font-bold uppercase tracking-[0.12em] text-white/70 transition-colors duration-500 group-hover:text-deep-navy sm:mt-6 sm:text-xs sm:tracking-widest">
      BINADAMU TECH
    </p>

  </div>


  {/* =================================================
      PARTNER 03
  ================================================= */}
  <div className="group flex min-h-[150px] flex-col justify-between rounded-xl border border-white/50 bg-black/10 p-3 backdrop-blur-sm transition-all duration-500 hover:border-white hover:bg-white sm:min-h-[160px] sm:p-4 md:p-5 lg:p-6">

    <div className="flex flex-1 items-center justify-center">

      <div className="flex h-20 w-full items-center justify-center sm:h-24 md:h-28">

        <img
          src={empowerLogo}
          alt="EMPOWER VAN"
          className="max-h-14 max-w-[85%] object-contain transition-all duration-500 sm:max-h-16 sm:brightness-0 sm:invert md:max-h-20 group-hover:brightness-100 group-hover:invert-0"
        />

      </div>

    </div>

    <p className="mt-4 text-center text-[10px] font-bold uppercase tracking-[0.12em] text-white/70 transition-colors duration-500 group-hover:text-deep-navy sm:mt-6 sm:text-xs sm:tracking-widest">
      EMPOWER VAN
    </p>

  </div>


  {/* =================================================
      PARTNER 04
  ================================================= */}
  <div className="group flex min-h-[150px] flex-col justify-between rounded-xl border border-white/50 bg-black/10 p-3 backdrop-blur-sm transition-all duration-500 hover:border-white hover:bg-white sm:min-h-[160px] sm:p-4 md:p-5 lg:p-6">

    <div className="flex flex-1 items-center justify-center">

      <div className="flex h-20 w-full items-center justify-center sm:h-24 md:h-28">

        <img
          src={cohereLogo}
          alt="COHERE"
          className="max-h-14 max-w-[85%] object-contain transition-all duration-500 sm:max-h-16 sm:brightness-0 sm:invert md:max-h-20 group-hover:brightness-100 group-hover:invert-0"
        />

      </div>

    </div>

    <p className="mt-4 text-center text-[10px] font-bold uppercase tracking-[0.12em] text-white/70 transition-colors duration-500 group-hover:text-deep-navy sm:mt-6 sm:text-xs sm:tracking-widest">
      COHERE
    </p>

  </div>


  {/* =================================================
      PARTNER 05
  ================================================= */}
  <div className="group flex min-h-[150px] flex-col justify-between rounded-xl border border-white/50 bg-black/10 p-3 backdrop-blur-sm transition-all duration-500 hover:border-white hover:bg-white sm:min-h-[160px] sm:p-4 md:p-5 lg:p-6">

    <div className="flex flex-1 items-center justify-center">

      <div className="flex h-20 w-full items-center justify-center sm:h-24 md:h-28">

        <img
          src={kkrinLogo}
          alt="KKRIN"
          className="max-h-14 max-w-[85%] object-contain transition-all duration-500 sm:max-h-16 sm:brightness-0 sm:invert md:max-h-20 group-hover:brightness-100 group-hover:invert-0"
        />

      </div>

    </div>

    <p className="mt-4 text-center text-[10px] font-bold uppercase tracking-[0.12em] text-white/70 transition-colors duration-500 group-hover:text-deep-navy sm:mt-6 sm:text-xs sm:tracking-widest">
      KKRIN
    </p>

  </div>

</div>


    {/* =====================================================
        BECOME A PARTNER
    ===================================================== */}
    <div className="mt-12 flex justify-center">

      <a
        href="/partner"
        className="group inline-flex items-center gap-4 rounded-md border border-white px-7 py-4 text-sm font-bold uppercase tracking-widest text-white transition-all duration-300 hover:border-vibrant-orange hover:bg-vibrant-orange"
      >
        Become a Partner

        <span className="transition-transform duration-300 group-hover:translate-x-2">
          →
        </span>

      </a>

    </div>

  </div>

</section>




        <section className="bg-surface-cream py-section-gap">
          <div className="max-w-container-max mx-auto px-margin-mobile md:px-margin-desktop">
            <div className="flex flex-col md:flex-row justify-between items-end mb-16 gap-8">
              <div className="max-w-2xl">
                <span className="font-label-md text-label-md text-vibrant-orange tracking-widest block mb-4">SUCCESS STORIES</span>
                <h2 className="font-display-lg text-display-lg-mobile md:text-display-lg text-deep-navy">The Human Element Behind the Numbers.</h2>
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-16 items-center">
              <div className="order-2 md:order-1">
                <div className="relative">
                  <div className="absolute -top-4 -left-4 w-24 h-24 bg-vibrant-orange z-0" />
                  <img
                    alt="Success Story Portrait"
                    className="relative z-10 w-full aspect-[2/3] object-cover rounded-sm shadow-2xl"
                    src={sec5imo}
                  />
                </div>
              </div>

          <div className="order-1 space-y-6 sm:space-y-8 md:order-2">

            <blockquote className="font-headline-md text-xl leading-relaxed text-deep-navy italic sm:text-2xl sm:leading-relaxed md:text-headline-md md:leading-relaxed">
              "Before USEC arrived, our community struggled with both food security
              and seasonal floods. Today, our terraces are green, and our children
              are safe. We did not just get aid; we got a future."
            </blockquote>

            <div className="flex items-center gap-2 sm:gap-4">
              <div className="h-1 w-14 rounded-full bg-vibrant-orange sm:w-20" />
              <div className="h-1 w-7 rounded-full bg-outline-variant sm:w-10" />
              <div className="h-1 w-7 rounded-full bg-outline-variant sm:w-10" />
            </div>

          </div>
            </div>
          </div>
        </section>

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
                <span className="text-xl">
                  →
                </span>
              </a>

            </div>

          </div>
        </section>
      </main>

      <footer className="w-full py-section-gap px-margin-mobile md:px-margin-desktop bg-primary flex flex-col md:flex-row justify-between items-start md:items-center gap-base border-t border-on-primary-fixed-variant">
        <div className="max-w-xs">
          <div className="flex items-center gap-3 mb-6">
            <img alt="USEC Logo" className="h-8 w-auto brightness-0 invert" src="/usec-navbar-logo.png" />
            <span className="font-headline-sm text-headline-sm text-white">USEC.org</span>
          </div>
          <p className="text-on-primary-container text-sm mb-4">Dedicated to creating safe, sustainable environments for humanity to thrive globally.</p>
        </div>

        <div className="flex flex-col md:flex-row gap-12 md:gap-24">
          <div className="flex flex-col gap-4">
            <h5 className="text-white font-bold text-sm uppercase tracking-widest">Resources</h5>
            <nav className="flex flex-col gap-2">
              <a className="text-surface-variant text-sm hover:text-vibrant-orange transition-colors" href="/annual-reports">Annual Reports</a>
              <a className="text-surface-variant text-sm hover:text-vibrant-orange transition-colors" href="#">Careers</a>
              <a className="text-surface-variant text-sm hover:text-vibrant-orange transition-colors" href="#">Media Kit</a>
            </nav>
          </div>
          <div className="flex flex-col gap-4">
            <h5 className="text-white font-bold text-sm uppercase tracking-widest">Legal</h5>
            <nav className="flex flex-col gap-2">
              <a className="text-surface-variant text-sm hover:text-vibrant-orange transition-colors" href="/privacy-policy">Privacy Policy</a>
              <a className="text-surface-variant text-sm hover:text-vibrant-orange transition-colors" href="/terms-of-service">Terms of Service</a>
            </nav>
          </div>
        </div>

        <div className="w-full md:w-auto border-t md:border-t-0 border-on-primary-fixed-variant pt-8 md:pt-0">
          <p className="text-surface-variant text-xs mb-4">Â© 2024 United Safe Environment Creators. All Rights Reserved.</p>
          <div className="flex gap-4">
            <a className="w-10 h-10 rounded-full border border-on-primary-fixed-variant flex items-center justify-center text-white hover:border-vibrant-orange hover:text-vibrant-orange transition-colors" href="#">
              <span className="material-symbols-outlined text-sm">public</span>
            </a>
            <a className="w-10 h-10 rounded-full border border-on-primary-fixed-variant flex items-center justify-center text-white hover:border-vibrant-orange hover:text-vibrant-orange transition-colors" href="#">
              <span className="material-symbols-outlined text-sm">mail</span>
            </a>
          </div>
        </div>
      </footer>
    </div>
  )
}

export default OurImpactPage

