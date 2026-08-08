import { useState } from "react";
import SiteNavbar from '../components/SiteNavbar'
import useWhoWeAreReveal from '../hooks/useWhoWeAreReveal'
import gethero from '../assets/images/getinvolved/get-hero.jpg'
import sec3imo from '../assets/images/getinvolved/sec3imo.jpg'
import fundraiseImage from "../assets/images/getinvolved/get-hero.jpg";
import advocateImage from "../assets/images/getinvolved/get-hero.jpg";
import awarenessImage from "../assets/images/getinvolved/get-hero.jpg";
import skillsImage from "../assets/images/getinvolved/get-hero.jpg";
import donateprotect from '../assets/images/Protection-imo/donate-protect.png'


function GetInvolvedPage() {
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

  const impactOptions = [
  {
    title: "Fundraise",
  },
  {
    title: "Advocate",
  },
  {
    title: "Spread Awareness",
  },
  {
    title: "Share Your Skills",
  },
];

  return (
    <div className="bg-surface text-on-surface font-body-md overflow-x-hidden">
      <SiteNavbar activePage="get-involved" />

      <main className="pt-20">


<section
  id="get-involved"
  className="relative h-[70vh] flex items-end overflow-hidden"
>
  {/* Background Image */}
  <div className="absolute inset-0 bg-deep-navy">
    <img
      src={gethero}
      alt="Get involved with USEC"
      className="w-full h-full object-cover opacity-60"
    />

    {/* Bottom Gradient Overlay */}
    <div className="absolute inset-0 bg-black/55"></div>
  </div>

  {/* Content */}
  <div className="relative z-10 w-full max-w-container-max mx-auto px-margin-mobile md:px-margin-desktop pb-20 md:pb-24 text-white">

    {/* Main Heading */}
    <h1 className="font-display-lg text-display-lg-mobile md:text-display-lg max-w-3xl mb-8 border-l-[43px] border-vibrant-orange pl-[30px]">
     Get Involed
    </h1>
    <span className="block font-display-lg font-bold text-2xl md:text-3xl lg:text-4xl text-white leading-tight mb-4 max-w-3xl">
    Your actions today define the world we create tomorrow.
    </span>

    {/* Description */}
    <p className="font-body-lg text-body-lg max-w-2xl text-white/90 leading-relaxed mb-10">
      United Safe Environment Creators (USEC) relies on the compassion of
      individuals like you to provide dignity, safety, and hope to displaced
      communities.
    </p>
  </div>
  
    {/* WAVY BOTTOM DIVIDER */}
  <WavyBottomDivider />
</section>


<section className="relative py-section-gap bg-white overflow-hidden">
  
  {/* Decorative Background */}
  <div className="absolute top-0 right-0 w-64 h-64 bg-vibrant-orange/5 rounded-bl-full pointer-events-none" />
  <div className="absolute bottom-0 left-0 w-48 h-48 border-[40px] border-primary/5 rounded-full pointer-events-none" />

  {/* Content */}
  <div className="relative z-10 max-w-container-max mx-auto px-margin-mobile md:px-margin-desktop">

    <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-20 items-center">

      {/* Left Content */}
      <div className="lg:col-span-7">
        <p className="text-vibrant-orange font-label-md text-label-md tracking-widest uppercase mb-5">
          Be Part of the Change
        </p>

        <h2 className="font-headline-md text-headline-md text-deep-navy leading-tight">
          Join a global network of{" "}
          <span className="text-vibrant-orange">
            changemakers
          </span>{" "}
          dedicated to securing human rights and environmental stability.
        </h2>

        {/* Orange Accent */}
        <div className="w-24 h-1.5 bg-vibrant-orange mt-8" />
      </div>

      {/* Right Content */}
      <div className="lg:col-span-5">
        <div className="border-l-4 border-vibrant-orange pl-6 md:pl-8">
          <p className="font-body-lg text-body-lg text-on-surface-variant leading-relaxed">
            Whether you have time, resources, or professional expertise to
            offer, there is a place for you in our mission. We believe that
            collective action is the only path to sustainable global change.
          </p>
        </div>

        {/* Small CTA */}
        <a
          href="/get-involved#ways-to-help"
          className="inline-flex items-center gap-3 mt-8 text-primary font-bold uppercase tracking-widest text-sm hover:text-vibrant-orange transition-colors duration-300 group"
        >
          Find Your Way to Help
          <span className="text-xl group-hover:translate-x-2 transition-transform duration-300">
            →
          </span>
        </a>
      </div>

    </div>
  </div>
</section>






<section
  id="ways-to-help"
  className="relative overflow-hidden bg-cover bg-center py-24 md:py-28"
  style={{
    backgroundImage: `url(${sec3imo})`,
  }}
>
  {/* DARK OVERLAY */}
  <div className="absolute inset-0 bg-black/70"></div>

  {/* CONTENT */}
  <div className="relative z-10 mx-auto max-w-container-max px-margin-mobile md:px-margin-desktop">

    {/* SECTION TITLE */}
    <h2 className="mb-6 font-display-lg text-4xl text-white md:text-5xl lg:text-6xl">
      Ways to Help
    </h2>

    <p className="mb-12 max-w-2xl font-body-lg text-body-lg text-white/90">
      There are many ways you can support our work and help us create safer,
      stronger, and more inclusive communities. Choose how you would like to
      get involved and make a meaningful difference.
    </p>


    {/* CARDS */}
    <div className="grid grid-cols-1 gap-8 md:grid-cols-3">


      {/* CARD 1 — DONATE */}
      <div className="group flex min-h-[350px] flex-col justify-between rounded-xl border border-white/70 bg-black/10 p-8 backdrop-blur-sm transition-all duration-500 hover:border-white hover:bg-white md:p-10">

        <div>

          <h3 className="mb-5 font-display-lg text-2xl text-white transition-colors duration-500 group-hover:text-deep-navy md:text-3xl">
            Donate
          </h3>

          <p className="mb-6 max-w-md font-body-md leading-relaxed text-white/90 transition-colors duration-500 group-hover:text-deep-navy">
            Your generosity helps us reach vulnerable communities, strengthen
            our programs, and create lasting opportunities for children,
            young people, women, and families.
          </p>

          <ul className="space-y-2 text-sm text-white/80 transition-colors duration-500 group-hover:text-deep-navy">

            <li>• Support community-based programs</li>

            <li>• Help vulnerable children and families</li>

            <li>• Contribute to sustainable development initiatives</li>

          </ul>

        </div>

        <a
          href="/donate"
          className="mt-8 inline-flex w-fit items-center gap-3 rounded-md border border-white px-5 py-3 text-sm font-bold uppercase tracking-widest text-white transition-all duration-300 hover:border-vibrant-orange hover:bg-vibrant-orange group-hover:border-deep-navy group-hover:text-deep-navy group-hover:hover:border-vibrant-orange group-hover:hover:text-white"        >
          Donate Now
          <span className="transition-transform duration-300 group-hover:translate-x-1">
            →
          </span>
        </a>

      </div>


      {/* CARD 2 — VOLUNTEER */}
      <div className="group flex min-h-[350px] flex-col justify-between rounded-xl border border-white/70 bg-black/10 p-8 backdrop-blur-sm transition-all duration-500 hover:border-deep-navy hover:bg-deep-navy md:p-10">

        <div>

          <h3 className="mb-5 font-display-lg text-2xl text-white transition-colors duration-500 group-hover:text-white md:text-3xl">
            Volunteer
          </h3>

          <p className="mb-6 max-w-md font-body-md leading-relaxed text-white/90 transition-colors duration-500 group-hover:text-white">
            Share your time, skills, and experience to support our programs
            and contribute to positive change within the communities we serve.
          </p>

          <ul className="space-y-2 text-sm text-white/80 transition-colors duration-500 group-hover:text-white/80">

            <li>• Support community activities</li>

            <li>• Share your skills and expertise</li>

            <li>• Participate in outreach and awareness programs</li>

          </ul>

        </div>

        <a
          href="/Volunteer"
          className="mt-8 inline-flex w-fit items-center gap-3 rounded-md border border-white px-5 py-3 text-sm font-bold uppercase tracking-widest text-white transition-all duration-300 hover:bg-white hover:border-white hover:text-deep-navy"        >
          Volunteer
          <span className="transition-transform duration-300 group-hover:translate-x-1">
            →
          </span>
        </a>

      </div>


      {/* CARD 3 — PARTNER WITH US */}
      <div className="group flex min-h-[350px] flex-col justify-between rounded-xl border border-white/70 bg-black/10 p-8 backdrop-blur-sm transition-all duration-500 hover:border-vibrant-orange hover:bg-vibrant-orange md:p-10">

        <div>

          <h3 className="mb-5 font-display-lg text-2xl text-white transition-colors duration-500 group-hover:text-white md:text-3xl">
            Partner With Us
          </h3>

          <p className="mb-6 max-w-md font-body-md leading-relaxed text-white/90 transition-colors duration-500 group-hover:text-white">
            Work alongside us to expand our impact through strategic
            partnerships, shared resources, expertise, and collaborative
            community initiatives.
          </p>

          <ul className="space-y-2 text-sm text-white/80 transition-colors duration-500 group-hover:text-white/90">

            <li>• Build strategic partnerships</li>

            <li>• Support community-led initiatives</li>

            <li>• Collaborate on sustainable development programs</li>

          </ul>

        </div>

        <a
          href="/partner"
          className="mt-8 inline-flex w-fit items-center gap-3 rounded-md border border-white px-5 py-3 text-sm font-bold uppercase tracking-widest text-white transition-all duration-300 hover:bg-white hover:border-white hover:text-vibrant-orange"        >
          Partner With Us
          <span className="transition-transform duration-300 group-hover:translate-x-1">
            →
          </span>
        </a>

      </div>

    </div>

  </div>
</section>

{/* =========================================================
    SECTION 4 — OTHER WAYS TO MAKE AN IMPACT
========================================================= */}
<section className="relative overflow-hidden bg-surface-cream py-20 md:py-28">

  <div className="mx-auto max-w-container-max px-margin-mobile md:px-margin-desktop">

    {/* =====================================================
        HEADER
    ===================================================== */}
    <div className="mb-12 flex flex-col gap-8 md:mb-16 md:flex-row md:items-end md:justify-between">

      <div className="max-w-2xl">
        <h2 className="font-display-lg text-4xl font-bold leading-tight text-deep-navy md:text-5xl lg:text-6xl">
          Other Ways to Make an Impact
        </h2>

      </div>

      <p className="max-w-md font-body-md leading-relaxed text-gray-600">
        There are many ways to support our work. Use your voice, skills,
        creativity, and connections to help create meaningful change.
      </p>

    </div>


    {/* =====================================================
        CAROUSEL CONTROLS
    ===================================================== */}
    <div className="mb-10 flex items-center justify-between">

      {/* PROGRESS BAR */}
      <div className="h-[8px] w-40 overflow-hidden rounded-full bg-deep-navy/10 md:w-52">

        <div
          className="h-full bg-vibrant-orange transition-all duration-500"
          style={{
            width: `${((activeImpact + 1) / 2) * 100}%`,
          }}
        ></div>

      </div>


      {/* PAGE INDICATOR + ARROWS */}
      <div className="flex items-center gap-5">

        <span className="text-sm font-bold tracking-widest text-deep-navy">
          0{activeImpact + 1} <span className="text-gray-400">/</span> 02
        </span>

        <div className="flex gap-3">

          {/* PREVIOUS */}
          <button
            onClick={() =>
              setActiveImpact(activeImpact === 0 ? 1 : 0)
            }
            className="flex h-14 w-14 items-center justify-center rounded-md border border-deep-navy text-deep-navy transition-all duration-300 hover:bg-deep-navy hover:text-white"
            aria-label="Previous cards"
          >
            <span className="text-2xl">
              ←
            </span>
          </button>


          {/* NEXT */}
          <button
            onClick={() =>
              setActiveImpact(activeImpact === 1 ? 0 : 1)
            }
            className="flex h-14 w-14 items-center justify-center rounded-md bg-deep-navy text-white transition-all duration-300 hover:bg-vibrant-orange"
            aria-label="Next cards"
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

  <div
    className="flex transition-transform duration-700 ease-in-out"
    style={{
      transform: `translateX(-${activeImpact * 100}%)`,
    }}
  >

    {/* =================================================
        PAGE 1 — FUNDRAISE + ADVOCATE
    ================================================= */}
    <div className="grid min-w-full grid-cols-1 gap-6 md:grid-cols-2">

      {/* FUNDRAISE */}
      <article className="group relative flex min-h-[480px] flex-col justify-between overflow-hidden bg-deep-navy p-8 text-white md:p-10 lg:p-12">

        <div>
          <span className="text-sm font-bold tracking-widest text-vibrant-orange">
            01
          </span>

          <h3 className="mt-8 font-display-lg text-4xl font-bold md:text-5xl">
            Fundraise
          </h3>

          <div className="mt-6 h-1 w-12 bg-vibrant-orange transition-all duration-500 group-hover:w-24" />

          <p className="mt-8 max-w-xl text-base leading-8 text-white/70 md:text-lg">
            Organize a fundraising campaign, community event, or creative
            initiative to raise resources that support vulnerable communities
            and meaningful programs.
          </p>
        </div>

        <a
          href="/contact"
          className="mt-10 inline-flex w-fit items-center gap-3 border-b border-white/40 pb-3 text-sm font-bold uppercase tracking-widest transition-all duration-300 hover:border-vibrant-orange hover:text-vibrant-orange"
        >
          Start Fundraising
          <span className="transition-transform duration-300 group-hover:translate-x-2">
            →
          </span>
        </a>

      </article>


      {/* ADVOCATE */}
      <article className="group relative flex min-h-[480px] flex-col justify-between overflow-hidden border border-deep-navy/10 bg-white p-8 text-deep-navy md:p-10 lg:p-12">

        <div>
          <span className="text-sm font-bold tracking-widest text-vibrant-orange">
            02
          </span>

          <h3 className="mt-8 font-display-lg text-4xl font-bold md:text-5xl">
            Advocate
          </h3>

          <div className="mt-6 h-1 w-12 bg-vibrant-orange transition-all duration-500 group-hover:w-24" />

          <p className="mt-8 max-w-xl text-base leading-8 text-gray-600 md:text-lg">
            Use your voice to promote inclusion, dignity, environmental
            responsibility, and positive change within your community.
          </p>
        </div>

        <a
          href="/contact"
          className="mt-10 inline-flex w-fit items-center gap-3 border-b-2 border-deep-navy pb-3 text-sm font-bold uppercase tracking-widest transition-all duration-300 hover:border-vibrant-orange hover:text-vibrant-orange"
        >
          Become an Advocate
          <span className="transition-transform duration-300 group-hover:translate-x-2">
            →
          </span>
        </a>

      </article>

    </div>


    {/* =================================================
        PAGE 2 — AWARENESS + SKILLS
    ================================================= */}
    <div className="grid min-w-full grid-cols-1 gap-6 md:grid-cols-2">

      {/* SPREAD AWARENESS */}
      <article className="group relative flex min-h-[480px] flex-col justify-between overflow-hidden border border-deep-navy/10 bg-surface-cream p-8 text-deep-navy md:p-10 lg:p-12">

        <div>
          <span className="text-sm font-bold tracking-widest text-vibrant-orange">
            03
          </span>

          <h3 className="mt-8 font-display-lg text-4xl font-bold md:text-5xl">
            Spread Awareness
          </h3>

          <div className="mt-6 h-1 w-12 bg-vibrant-orange transition-all duration-500 group-hover:w-24" />

          <p className="mt-8 max-w-xl text-base leading-8 text-gray-600 md:text-lg">
            Help amplify our message by sharing our stories, campaigns,
            community initiatives, and important information with your
            networks.
          </p>
        </div>

        <a
          href="/contact"
          className="mt-10 inline-flex w-fit items-center gap-3 border-b-2 border-deep-navy pb-3 text-sm font-bold uppercase tracking-widest transition-all duration-300 hover:border-vibrant-orange hover:text-vibrant-orange"
        >
          Share Our Work
          <span className="transition-transform duration-300 group-hover:translate-x-2">
            →
          </span>
        </a>

      </article>


      {/* SHARE YOUR SKILLS */}
      <article className="group relative flex min-h-[480px] flex-col justify-between overflow-hidden bg-vibrant-orange p-8 text-white md:p-10 lg:p-12">

        <div>
          <span className="text-sm font-bold tracking-widest text-white/70">
            04
          </span>

          <h3 className="mt-8 font-display-lg text-4xl font-bold md:text-5xl">
            Share Your Skills
          </h3>

          <div className="mt-6 h-1 w-12 bg-white transition-all duration-500 group-hover:w-24" />

          <p className="mt-8 max-w-xl text-base leading-8 text-white/80 md:text-lg">
            Share your professional expertise, creative abilities, technical
            knowledge, or other skills to strengthen our programs and
            community initiatives.
          </p>
        </div>

        <a
          href="/contact"
          className="mt-10 inline-flex w-fit items-center gap-3 border-b border-white/50 pb-3 text-sm font-bold uppercase tracking-widest transition-all duration-300 hover:border-white"
        >
          Share Your Skills
          <span className="transition-transform duration-300 group-hover:translate-x-2">
            →
          </span>
        </a>

      </article>

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

      <footer className="w-full py-section-gap px-margin-mobile md:px-margin-desktop flex flex-col md:flex-row justify-between items-start md:items-center gap-base bg-primary text-white border-t border-on-primary-fixed-variant reveal-group transition-all duration-1000 opacity-0 translate-y-10">
        <div className="flex flex-col gap-4">
          <div className="flex items-center gap-3">
            <img alt="USEC Logo" className="h-8 w-auto brightness-0 invert" src="/usec-navbar-logo.png" />
            <span className="font-headline-sm text-headline-sm text-white">USEC.org</span>
          </div>
          <p className="font-body-md text-body-md text-on-primary-container max-w-sm">
            United Safe Environment Creators is a registered non-profit organization dedicated to humanitarian aid and environmental preservation.
          </p>
          <p className="font-label-sm text-label-sm text-surface-variant mt-4">
            (c) 2024 United Safe Environment Creators. All Rights Reserved.
          </p>
        </div>

        <div className="flex flex-col md:flex-row gap-12 mt-10 md:mt-0">
          <div className="flex flex-col gap-3">
            <h5 className="font-label-md text-label-md text-vibrant-orange uppercase mb-2">Organization</h5>
            <a className="font-label-sm text-label-sm text-surface-variant hover:text-white transition-colors" href="/about-us">About Us</a>
            <a className="font-label-sm text-label-sm text-surface-variant hover:text-white transition-colors" href="#">Our Impact</a>
            <a className="font-label-sm text-label-sm text-surface-variant hover:text-white transition-colors" href="/annual-reports">Annual Reports</a>
            <a className="font-label-sm text-label-sm text-surface-variant hover:text-white transition-colors" href="#">Careers</a>
          </div>
          <div className="flex flex-col gap-3">
            <h5 className="font-label-md text-label-md text-vibrant-orange uppercase mb-2">Legal</h5>
            <a className="font-label-sm text-label-sm text-surface-variant hover:text-white transition-colors" href="/privacy-policy">Privacy Policy</a>
            <a className="font-label-sm text-label-sm text-surface-variant hover:text-white transition-colors" href="/terms-of-service">Terms of Service</a>
            <a className="font-label-sm text-label-sm text-surface-variant hover:text-white transition-colors" href="#">Donation Policy</a>
          </div>
          <div className="flex gap-4">
            <a className="w-10 h-10 rounded-full border border-outline-variant flex items-center justify-center hover:bg-vibrant-orange hover:border-vibrant-orange transition-all" href="#">
              <span className="material-symbols-outlined text-sm">share</span>
            </a>
            <a className="w-10 h-10 rounded-full border border-outline-variant flex items-center justify-center hover:bg-vibrant-orange hover:border-vibrant-orange transition-all" href="#">
              <span className="material-symbols-outlined text-sm">public</span>
            </a>
          </div>
        </div>
      </footer>
    </div>
  )
}

export default GetInvolvedPage

