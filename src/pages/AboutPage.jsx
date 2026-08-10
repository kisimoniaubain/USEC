import SiteNavbar from "../components/SiteNavbar";
import { useRef } from "react"
import { useEffect, useState } from "react"
import AboutHero from "../assets/images/aboutimages/About-hero.png";
import mission from "../assets/images/aboutimages/m,v,g.jpg";
import tiba from "../assets/images/aboutimages/Tiba.png";
import robert from "../assets/images/aboutimages/Robert.png";
import kabulo from "../assets/images/aboutimages/Kabulo.jpg";
import donateprotect from "../assets/images/Protection-imo/donate-protect.png";

const AboutPage = () => {
  const [currentMilestone, setCurrentMilestone] = useState(0)

const [visibleCards, setVisibleCards] = useState(1)

useEffect(() => {
  const updateVisibleCards = () => {
    if (window.innerWidth >= 1024) {
      setVisibleCards(3)
    } else if (window.innerWidth >= 768) {
      setVisibleCards(2)
    } else {
      setVisibleCards(1)
    }
  }

  updateVisibleCards()

  window.addEventListener("resize", updateVisibleCards)

  return () => {
    window.removeEventListener("resize", updateVisibleCards)
  }
}, [])

const totalMilestones = 12

const maxIndex = Math.max(
  0,
  totalMilestones - visibleCards
)

const handlePrevious = () => {
  setCurrentMilestone((previous) =>
    Math.max(previous - 1, 0)
  )
}

const handleNext = () => {
  setCurrentMilestone((previous) =>
    Math.min(previous + 1, maxIndex)
  )
}
  {/* =========================================================
      WAVY BOTTOM DIVIDER
  ========================================================= */}
  const WavyBottomDivider = () => (
    <div className="absolute bottom-0 left-0 z-20 w-full overflow-hidden leading-none pointer-events-none">
      <svg
        viewBox="0 0 1200 120"
        preserveAspectRatio="none"
        className="relative block h-16 w-full text-slate-50 md:h-24"
        fill="currentColor"
      >
        <path d="M0,0 C150,90 350,-40 500,65 C650,160 900,10 1200,45 L1200,120 L0,120 Z" />
      </svg>
    </div>
  );


  return (
    <div className="bg-surface text-on-surface font-body-md overflow-x-hidden">

      <SiteNavbar activePage="about" />


      {/* =========================================================
          HERO — ABOUT US
      ========================================================= */}
      <section
        id="who-we-are"
        className="relative flex h-[80vh] items-end overflow-hidden"
      >

        {/* BACKGROUND IMAGE */}
        <div className="absolute inset-0 bg-deep-navy">

          <img
            src={AboutHero}
            alt="About USEC Hero"
            className="h-full w-full object-cover object-[center_20%] opacity-60"
          />

          {/* DARK OVERLAY */}
          <div className="absolute inset-0 bg-black/60"></div>

        </div>


        {/* CONTENT */}
        <div className="relative z-10 mx-auto w-full max-w-container-max px-margin-mobile pb-24 text-white md:px-margin-desktop">

          <h1 className="mb-14 max-w-3xl border-l-[43px] border-vibrant-orange pb-[10px] pl-[30px] font-display-lg text-display-lg-mobile md:text-display-lg">
            About Us
          </h1>

          <span className="mb-4 block max-w-3xl font-display-lg text-2xl font-bold leading-tight text-white md:text-3xl lg:text-4xl">
            Securing Tomorrow through Environmental Excellence.
          </span>

          <p className="max-w-2xl font-body-lg text-body-lg leading-relaxed text-white/90">
            United Safe Environment Creators (USEC) stands as a beacon of
            institutional reliability, merging high-level security protocols
            with advanced environmental stewardship to protect our shared future.
          </p>

        </div>


        <WavyBottomDivider />

      </section>


      {/* =========================================================
          WHO WE ARE
      ========================================================= */}
      <section className="relative overflow-hidden bg-surface-cream px-margin-mobile py-section-gap md:px-margin-desktop">

        <div className="pointer-events-none absolute -bottom-10 -right-10 h-72 w-72 rounded-full border-[55px] border-vibrant-orange/10"></div>

        <div className="pointer-events-none absolute -top-40 left-[22%] h-[480px] w-[480px] rounded-full border-[80px] border-primary/10"></div>

        <div className="relative z-10 mx-auto max-w-container-max">

          <div className="grid grid-cols-1 items-center gap-12 lg:grid-cols-12">

            <div className="lg:col-span-6">

              <span className="mb-4 block font-label-md text-label-md uppercase tracking-widest text-vibrant-orange">
                Who We Are
              </span>

              <h2 className="mb-6 font-display-lg text-display-lg-mobile text-deep-navy md:text-display-lg">
                A trusted partner for secure, sustainable communities.
              </h2>

            </div>


            <div className="lg:col-span-6">

              <p className="mb-6 font-body-md text-body-md leading-relaxed text-on-surface-variant">
                Established in 2015 within the Kakuma Refugee Camp in Kenya,
                United Safe Environment Creators (USEC) is a grassroots,
                refugee-led community-based organization dedicated to fostering
                structural resilience, human dignity, and self-reliance among
                displaced populations.
              </p>

              <p className="mb-6 font-body-md text-body-md leading-relaxed text-on-surface-variant">
                We are a coalition of dynamic, highly motivated humanitarian
                practitioners operating directly on the frontlines of forced
                displacement. Registered under the Ministry of Labor, Social
                Security, and Services (Reg: SCSDO/CBO/BO-201, Certificate No.
                38613), USEC addresses critical systemic barriers through
                targeted interventions in inclusive education, sustainable
                livelihoods, and robust child protection frameworks.
              </p>

              <p className="font-body-md text-body-md leading-relaxed text-on-surface-variant">
                To optimize regional impact and scale our protection frameworks,
                USEC actively collaborates with the Global Family Reunification
                Network (FRUN) to systematically reconnect separated children
                with their families. Furthermore, our strategic integration into
                the UNHCR EHAGL Regional Community-Based Protection Network
                (R-CBPN) enhances our capacity to deploy essential rights-based
                assistance and protection services.
              </p>

            </div>

          </div>

        </div>

      </section>


      {/* =========================================================
          MISSION / VISION / OBJECTIVE
      ========================================================= */}
      <section className="mx-auto max-w-container-max px-margin-mobile py-section-gap md:px-margin-desktop">

        <div className="grid grid-cols-1 items-center gap-gutter md:grid-cols-12">

          <div className="relative md:col-span-5">

            <div className="aspect-[4/5] overflow-hidden rounded-lg bg-surface-cream">

              <img
                className="h-full w-full object-cover"
                src={mission}
                alt="USEC Mission"
              />

            </div>

            <div className="absolute -bottom-10 -right-10 z-0 hidden h-64 w-64 border-8 border-vibrant-orange lg:block"></div>

          </div>


          <div className="space-y-12 md:col-span-7 md:pl-margin-desktop">

            <div>
              <h2 className="mb-6 font-headline-md text-headline-md text-deep-navy">
                Our Mission
              </h2>

              <p className="font-body-lg text-body-lg text-on-surface-variant">
                To empower marginalized communities by providing safe
                environments, educational opportunities, and sustainable
                resources that foster independence and long-term resilience.
              </p>
            </div>


            <div>
              <h2 className="mb-6 font-headline-md text-headline-md text-deep-navy">
                Our Vision
              </h2>

              <p className="font-body-lg text-body-lg text-on-surface-variant">
                A world where every individual, regardless of their
                circumstances, has access to a secure habitat and the tools
                necessary to thrive in harmony with their environment and heritage.
              </p>
            </div>


            <div>
              <h2 className="mb-6 font-headline-md text-headline-md text-deep-navy">
                General Objective
              </h2>

              <p className="font-body-lg text-body-lg text-on-surface-variant">
                To institutionalize inclusive education pathways, solidify child
                protection mechanisms, scale resilient local economies, and pilot
                community-led environmental conservation efforts to safeguard
                the dignity and autonomy of vulnerable populations.
              </p>
            </div>

          </div>

        </div>

      </section>


{/* =========================================================
    KEY MILESTONES
========================================================= */}

<section className="overflow-hidden bg-[#f2efe8] py-16 md:py-20 lg:py-24">
  <div className="pointer-events-none absolute -bottom-10 -right-10 h-72 w-72 rounded-full border-[55px] border-vibrant-orange/10"></div>
  <div className="pointer-events-none absolute -top-40 left-[22%] h-[480px] w-[480px] rounded-full border-[80px] border-primary/10"></div>


  <div className="mx-auto max-w-container-max px-margin-mobile md:px-margin-desktop">

    {/* =====================================================
        HEADER
    ===================================================== */}

    <div className="grid grid-cols-1 gap-8 md:grid-cols-2 md:items-start">

      {/* LEFT */}
      <div>
        <span className="mb-3 block font-label-md text-label-md font-bold uppercase tracking-[0.2em] text-vibrant-orange">
          Our Journey
        </span>

        <h2 className="mb-6 font-headline-md text-headline-md text-deep-navy">
          Explore Our Journey
        </h2>
      </div>


      {/* RIGHT */}
      <div className="md:flex md:justify-end">

        <p className="max-w-md font-body-md text-on-surface-variant leading-relaxed md:text-right">
         Explore the key achievements and defining milestones that have shaped USEC’s journey from 2015 to the present.
        </p>

      </div>

    </div>


    {/* =====================================================
        CONTROLS
    ===================================================== */}

    <div className="mt-10 flex items-center justify-between gap-6 md:mt-14">

      {/* PROGRESS INDICATOR */}

      <div className="flex flex-1 items-center">

        <div className="relative h-[9px] w-full max-w-[220px] overflow-hidden rounded-full border border-primary bg-transparent">

          <div
            className="absolute left-0 top-0 h-full rounded-full bg-primary transition-all duration-500 ease-out"
            style={{
              width: `${100 / (maxIndex + 1)}%`,
              transform: `translateX(${currentMilestone * 100}%)`,
            }}
          />

        </div>

      </div>


      {/* NAVIGATION BUTTONS */}

      <div className="flex shrink-0 gap-2 md:gap-3">

        {/* PREVIOUS */}

        <button
          type="button"
          onClick={handlePrevious}
          disabled={currentMilestone === 0}
          aria-label="Previous milestone"
          className="
            flex
            h-12
            w-12
            items-center
            justify-center
            rounded-md
            bg-primary
            text-white
            transition-all
            duration-300
            hover:bg-vibrant-orange
            active:scale-95
            disabled:cursor-not-allowed
            disabled:opacity-30
            md:h-14
            md:w-14
          "
        >
        <span className="material-symbols-outlined transition-transform group-hover:translate-x-1">
          arrow_back
        </span>
        </button>


        {/* NEXT */}

        <button
          type="button"
          onClick={handleNext}
          disabled={currentMilestone === maxIndex}
          aria-label="Next milestone"
          className="
            flex
            h-12
            w-12
            items-center
            justify-center
            rounded-md
            bg-primary
            text-white
            transition-all
            duration-300
            hover:bg-vibrant-orange
            active:scale-95
            disabled:cursor-not-allowed
            disabled:opacity-30
            md:h-14
            md:w-14
          "
        >
        <span className="material-symbols-outlined transition-transform group-hover:translate-x-1">
          arrow_forward
        </span>
        </button>

      </div>

    </div>


    {/* =====================================================
        MILESTONE CARDS
    ===================================================== */}

    <div className="relative mt-8 overflow-hidden md:mt-10">

      <div
        className="flex transition-transform duration-700 ease-in-out"
        style={{
          transform: `translateX(-${currentMilestone * (100 / visibleCards)}%)`,
        }}
      >

        {/* =================================================
            2015
        ================================================= */}

        <article className="w-full shrink-0 pr-4 md:w-1/2 md:pr-6 lg:w-1/3">

          <div className="flex min-h-[380px] flex-col rounded-xl bg-white p-7 shadow-[0_8px_30px_rgba(3,51,71,0.06)] transition-all duration-300 hover:-translate-y-1 hover:shadow-[0_16px_40px_rgba(3,51,71,0.10)] md:min-h-[410px] md:p-8">

            <span className="font-display-lg text-5xl leading-none text-primary md:text-6xl">
              2015
            </span>

            <h3 className="mb-5 font-headline-sm text-headline-sm font-bold text-primary">
              The Foundation
            </h3>

            <p className="font-body-md text-on-surface-variant leading-7">
              USEC was founded in response to environmental
              displacement, beginning as a small grassroots team
              committed to environmental safety, humanitarian
              support, and community resilience.
            </p>

          </div>

        </article>


        {/* =================================================
            2016
        ================================================= */}

        <article className="w-full shrink-0 pr-4 md:w-1/2 md:pr-6 lg:w-1/3">

          <div className="flex min-h-[380px] flex-col rounded-xl bg-white p-7 shadow-[0_8px_30px_rgba(3,51,71,0.06)] transition-all duration-300 hover:-translate-y-1 hover:shadow-[0_16px_40px_rgba(3,51,71,0.10)] md:min-h-[410px] md:p-8">

            <span className="font-display-lg text-5xl leading-none text-primary md:text-6xl">
              2016
            </span>

            <h3 className="mb-5 font-headline-sm text-headline-sm font-bold text-primary">
              Building Community Resilience
            </h3>

            <p className="font-body-md text-on-surface-variant leading-7">
              USEC strengthened its community-based approach,
              working directly with displaced and vulnerable
              communities to improve protection, education,
              livelihoods, and environmental safety.
            </p>

          </div>

        </article>


        {/* =================================================
            2017
        ================================================= */}

        <article className="w-full shrink-0 pr-4 md:w-1/2 md:pr-6 lg:w-1/3">

          <div className="flex min-h-[380px] flex-col rounded-xl bg-white p-7 shadow-[0_8px_30px_rgba(3,51,71,0.06)] transition-all duration-300 hover:-translate-y-1 hover:shadow-[0_16px_40px_rgba(3,51,71,0.10)] md:min-h-[410px] md:p-8">

            <span className="font-display-lg text-5xl leading-none text-primary md:text-6xl">
              2017
            </span>

            <h3 className="mb-5 font-headline-sm text-headline-sm font-bold text-primary">
              Expanding Our Reach
            </h3>

            <p className="font-body-md text-on-surface-variant leading-7">
              Our programs grew through stronger partnerships
              and community-led initiatives, creating new
              opportunities for education, protection,
              environmental awareness, and self-reliance.
            </p>

          </div>

        </article>


        {/* =================================================
            2018
        ================================================= */}

        <article className="w-full shrink-0 pr-4 md:w-1/2 md:pr-6 lg:w-1/3">

          <div className="flex min-h-[380px] flex-col rounded-xl bg-white p-7 shadow-[0_8px_30px_rgba(3,51,71,0.06)] transition-all duration-300 hover:-translate-y-1 hover:shadow-[0_16px_40px_rgba(3,51,71,0.10)] md:min-h-[410px] md:p-8">

            <span className="font-display-lg text-5xl leading-none text-primary md:text-6xl">
              2018
            </span>

            <h3 className="mb-5 font-headline-sm text-headline-sm font-bold text-primary">
              Strengthening Partnerships
            </h3>

            <p className="font-body-md text-on-surface-variant leading-7">
              USEC expanded collaboration with humanitarian
              and community partners while increasing support
              for vulnerable families, young people, women,
              and refugee-led initiatives.
            </p>

          </div>

        </article>


        {/* =================================================
            2019
        ================================================= */}

        <article className="w-full shrink-0 pr-4 md:w-1/2 md:pr-6 lg:w-1/3">

          <div className="flex min-h-[380px] flex-col rounded-xl bg-white p-7 shadow-[0_8px_30px_rgba(3,51,71,0.06)] transition-all duration-300 hover:-translate-y-1 hover:shadow-[0_16px_40px_rgba(3,51,71,0.10)] md:min-h-[410px] md:p-8">

            <span className="font-display-lg text-5xl leading-none text-primary md:text-6xl">
              2019
            </span>

            <h3 className="mb-5 font-headline-sm text-headline-sm font-bold text-primary">
              Community-Led Action
            </h3>

            <p className="font-body-md text-on-surface-variant leading-7">
              We placed stronger emphasis on local leadership,
              enabling communities to participate directly in
              designing and implementing solutions to the
              challenges they face.
            </p>

          </div>

        </article>


        {/* =================================================
            2020
        ================================================= */}

        <article className="w-full shrink-0 pr-4 md:w-1/2 md:pr-6 lg:w-1/3">

          <div className="flex min-h-[380px] flex-col rounded-xl bg-white p-7 shadow-[0_8px_30px_rgba(3,51,71,0.06)] transition-all duration-300 hover:-translate-y-1 hover:shadow-[0_16px_40px_rgba(3,51,71,0.10)] md:min-h-[410px] md:p-8">

            <span className="font-display-lg text-5xl leading-none text-primary md:text-6xl">
              2020
            </span>

            <h3 className="mb-5 font-headline-sm text-headline-sm font-bold text-primary">
              Responding to New Challenges
            </h3>

            <p className="font-body-md text-on-surface-variant leading-7">
              USEC adapted its programs to respond to changing
              humanitarian needs while continuing to support
              vulnerable communities through protection,
              education, and resilience initiatives.
            </p>

          </div>

        </article>


        {/* =================================================
            2021
        ================================================= */}

        <article className="w-full shrink-0 pr-4 md:w-1/2 md:pr-6 lg:w-1/3">

          <div className="flex min-h-[380px] flex-col rounded-xl bg-white p-7 shadow-[0_8px_30px_rgba(3,51,71,0.06)] transition-all duration-300 hover:-translate-y-1 hover:shadow-[0_16px_40px_rgba(3,51,71,0.10)] md:min-h-[410px] md:p-8">

            <span className="font-display-lg text-5xl leading-none text-primary md:text-6xl">
              2021
            </span>

            <h3 className="mb-5 font-headline-sm text-headline-sm font-bold text-primary">
              Growing Resilience
            </h3>

            <p className="font-body-md text-on-surface-variant leading-7">
              Our work continued to strengthen community
              resilience through skills development,
              environmental awareness, livelihood opportunities,
              and inclusive education.
            </p>

          </div>

        </article>


        {/* =================================================
            2022
        ================================================= */}

        <article className="w-full shrink-0 pr-4 md:w-1/2 md:pr-6 lg:w-1/3">

          <div className="flex min-h-[380px] flex-col rounded-xl bg-white p-7 shadow-[0_8px_30px_rgba(3,51,71,0.06)] transition-all duration-300 hover:-translate-y-1 hover:shadow-[0_16px_40px_rgba(3,51,71,0.10)] md:min-h-[410px] md:p-8">

            <span className="font-display-lg text-5xl leading-none text-primary md:text-6xl">
              2022
            </span>

            <h3 className="mb-5 font-headline-sm text-headline-sm font-bold text-primary">
              Expanding Community Programs
            </h3>

            <p className="font-body-md text-on-surface-variant leading-7">
              USEC increased its focus on sustainable community
              development, youth engagement, protection,
              environmental safety, and livelihood opportunities.
            </p>

          </div>

        </article>


        {/* =================================================
            2023
        ================================================= */}

        <article className="w-full shrink-0 pr-4 md:w-1/2 md:pr-6 lg:w-1/3">

          <div className="flex min-h-[380px] flex-col rounded-xl bg-white p-7 shadow-[0_8px_30px_rgba(3,51,71,0.06)] transition-all duration-300 hover:-translate-y-1 hover:shadow-[0_16px_40px_rgba(3,51,71,0.10)] md:min-h-[410px] md:p-8">

            <span className="font-display-lg text-5xl leading-none text-primary md:text-6xl">
              2023
            </span>

            <h3 className="mb-5 font-headline-sm text-headline-sm font-bold text-primary">
              A Stronger Community Network
            </h3>

            <p className="font-body-md text-on-surface-variant leading-7">
              We continued building partnerships and community
              networks that connect humanitarian action with
              long-term development and self-reliance.
            </p>

          </div>

        </article>


        {/* =================================================
            2024
        ================================================= */}

        <article className="w-full shrink-0 pr-4 md:w-1/2 md:pr-6 lg:w-1/3">

          <div className="flex min-h-[380px] flex-col rounded-xl bg-white p-7 shadow-[0_8px_30px_rgba(3,51,71,0.06)] transition-all duration-300 hover:-translate-y-1 hover:shadow-[0_16px_40px_rgba(3,51,71,0.10)] md:min-h-[410px] md:p-8">

            <span className="font-display-lg text-5xl leading-none text-primary md:text-6xl">
              2024
            </span>

            <h3 className="mb-5 font-headline-sm text-headline-sm font-bold text-primary">
              The Modern Era
            </h3>

            <p className="font-body-md text-on-surface-variant leading-7">
              USEC strengthened its use of technology,
              partnerships, and local leadership to deliver
              impactful programs for vulnerable and displaced
              communities.
            </p>

          </div>

        </article>


        {/* =================================================
            2025
        ================================================= */}

        <article className="w-full shrink-0 pr-4 md:w-1/2 md:pr-6 lg:w-1/3">

          <div className="flex min-h-[380px] flex-col rounded-xl bg-white p-7 shadow-[0_8px_30px_rgba(3,51,71,0.06)] transition-all duration-300 hover:-translate-y-1 hover:shadow-[0_16px_40px_rgba(3,51,71,0.10)] md:min-h-[410px] md:p-8">

            <span className="font-display-lg text-5xl leading-none text-primary md:text-6xl">
              2025
            </span>

            <h3 className="mb-5 font-headline-sm text-headline-sm font-bold text-primary">
              Deepening Our Impact
            </h3>

            <p className="font-body-md text-on-surface-variant leading-7">
              USEC continued expanding community-led initiatives
              while strengthening protection, education,
              environmental safety, and sustainable livelihood
              opportunities.
            </p>

          </div>

        </article>


        {/* =================================================
            2026
        ================================================= */}

        <article className="w-full shrink-0 pr-4 md:w-1/2 md:pr-6 lg:w-1/3">

          <div className="flex min-h-[380px] flex-col rounded-xl bg-white p-7 shadow-[0_8px_30px_rgba(3,51,71,0.06)] transition-all duration-300 hover:-translate-y-1 hover:shadow-[0_16px_40px_rgba(3,51,71,0.10)] md:min-h-[410px] md:p-8">

            <span className="font-display-lg text-5xl leading-none text-primary md:text-6xl">
              2026
            </span>

            <h3 className="mb-5 font-headline-sm text-headline-sm font-bold text-primary">
              Looking Ahead
            </h3>

            <p className="font-body-md text-on-surface-variant leading-7">
              USEC continues building safer and more resilient
              communities by combining humanitarian action,
              environmental responsibility, inclusive education,
              and sustainable development.
            </p>

          </div>

        </article>

      </div>

    </div>

  </div>

</section>


      {/* =========================================================
          OUR LEADERSHIP
      ========================================================= */}
      <section className="bg-surface-cream px-margin-mobile py-section-gap md:px-margin-desktop">

        <div className="mx-auto max-w-container-max">

          <div className="mb-16 flex flex-col items-end justify-between gap-6 md:flex-row">

            <div className="max-w-2xl">

              <span className="mb-4 block font-label-md text-label-md uppercase tracking-widest text-vibrant-orange">
                Our Leadership
              </span>

              <h2 className="font-display-lg text-display-lg-mobile text-deep-navy md:text-display-lg">
                Driven by Expertise and Compassion
              </h2>

            </div>

            <a
              href="/our-team"
              className="group flex items-center gap-2 font-label-md text-label-md font-bold text-deep-navy"
            >
              VIEW ALL STAFF

              <span className="material-symbols-outlined transition-transform group-hover:translate-x-1">
                arrow_forward
              </span>

            </a>

          </div>


          <div className="grid grid-cols-1 gap-8 md:grid-cols-3">

            {/* TIBA */}
            <div className="group">

              <div className="relative mb-6 aspect-[4/5] overflow-hidden rounded-xl border border-outline-variant/50 bg-surface-container-high">

                <img
                  className="absolute inset-0 h-full w-full object-cover grayscale transition-all duration-500 group-hover:grayscale-0"
                  src={tiba}
                  alt="Gisma Abass Kocho"
                />

                <div className="absolute bottom-4 left-4 right-4 translate-y-full bg-white p-4 transition-transform duration-300 group-hover:translate-y-0">

                  <p className="font-label-sm text-label-sm uppercase text-on-surface-variant">
                    Program Coordinator
                  </p>

                  <h4 className="font-headline-sm text-headline-sm text-deep-navy">
                    Gisma Abass Kocho
                  </h4>

                </div>

              </div>

              <div className="px-2">

                <p className="line-clamp-3 font-body-md text-body-md text-on-surface-variant">
                  Tiba coordinates field implementation across education,
                  protection, and livelihood activities.
                </p>

              </div>

            </div>


            {/* ROBERT */}
            <div className="group">

              <div className="relative mb-6 aspect-[4/5] overflow-hidden rounded-xl border border-outline-variant/50 bg-surface-container-high">

                <img
                  className="absolute inset-0 h-full w-full object-cover grayscale transition-all duration-500 group-hover:grayscale-0"
                  src={robert}
                  alt="Amuri Robert Mwenda"
                />

                <div className="absolute bottom-4 left-4 right-4 translate-y-full bg-white p-4 transition-transform duration-300 group-hover:translate-y-0">

                  <p className="font-label-sm text-label-sm uppercase text-on-surface-variant">
                    Program Manager
                  </p>

                  <h4 className="font-headline-sm text-headline-sm text-deep-navy">
                    Amuri Robert Mwenda
                  </h4>

                </div>

              </div>

              <div className="px-2">

                <p className="line-clamp-3 font-body-md text-body-md text-on-surface-variant">
                  Amuri leads planning, monitoring, and operational performance,
                  managing teams and resources to deliver impactful programs.
                </p>

              </div>

            </div>


            {/* KABULO */}
            <div className="group">

              <div className="relative mb-6 aspect-[4/5] overflow-hidden rounded-xl border border-outline-variant/50 bg-surface-container-high">

                <img
                  className="absolute inset-0 h-full w-full object-cover grayscale transition-all duration-500 group-hover:grayscale-0"
                  src={kabulo}
                  alt="Abedi Kabulongo Salvador"
                />

                <div className="absolute bottom-4 left-4 right-4 translate-y-full bg-white p-4 transition-transform duration-300 group-hover:translate-y-0">

                  <p className="font-label-sm text-label-sm uppercase text-on-surface-variant">
                    Co-founder and Executive Director
                  </p>

                  <h4 className="font-headline-sm text-headline-sm text-deep-navy">
                    Abedi Kabulongo Salvador
                  </h4>

                </div>

              </div>

              <div className="px-2">

                <p className="line-clamp-3 font-body-md text-body-md text-on-surface-variant">
                  Abedi provides strategic leadership and organizational
                  direction, driving partnerships, governance, and long-term
                  growth.
                </p>

              </div>

            </div>

          </div>

        </div>

      </section>


      {/* =========================================================
          DONATE CTA
      ========================================================= */}
      <section
        className="relative flex min-h-[400px] items-center overflow-hidden bg-cover bg-center md:min-h-[450px]"
        style={{
          backgroundImage: `url(${donateprotect})`,
        }}
      >

        {/* OVERLAY */}
        <div className="absolute inset-0 bg-black/60"></div>

        <div className="absolute inset-0 bg-gradient-to-r from-black/70 via-black/35 to-transparent"></div>


        {/* CONTENT */}
        <div className="relative z-10 mx-auto w-full max-w-container-max px-margin-mobile md:px-margin-desktop">

          <div className="max-w-xl text-left text-white">

            <h4 className="mb-6 font-display-lg text-2xl font-bold leading-tight md:text-3xl lg:text-4xl">
              Give hope by supporting refugees today
            </h4>

            <p className="mb-9 max-w-lg font-body-lg text-lg leading-relaxed text-white/90 md:text-xl">
              Your gift will be used to deliver lasting solutions for refugees
              around the world, and help them rebuild their lives in safety.
            </p>

            <a
              href="/donate"
              className="inline-flex items-center justify-center gap-3 rounded-lg bg-vibrant-orange px-9 py-4 text-lg font-bold text-white shadow-lg transition-all duration-300 hover:-translate-y-1 hover:bg-white hover:text-deep-navy"
            >
              Donate

              <span className="text-xl">
                →
              </span>

            </a>

          </div>

        </div>

      </section>

    </div>
  );
};

export default AboutPage;