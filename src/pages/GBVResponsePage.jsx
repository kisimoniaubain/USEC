import { useState } from "react";
import SiteNavbar from '../components/SiteNavbar'
import useWhoWeAreReveal from '../hooks/useWhoWeAreReveal'
import girls from '../assets/images/gbv/girls.jpeg'
import slide1 from '../assets/images/gbv/slide1.jpeg'
import slide2 from '../assets/images/gbv/slide2.jpeg'
import sec3bckgrd from '../assets/images/gbv/sec3bckgrd.jpeg'
import donateprotect from '../assets/images/Protection-imo/donate-protect.png'
import sec4card1 from '../assets/images/gbv/sec4card1.jpeg'
import sec4card2 from '../assets/images/gbv/sec4card2.jpeg'
import sec4card3 from '../assets/images/gbv/sec4card3.jpeg'



function GBVResponsePage() {
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

  
  const [activeTab, setActiveTab] = useState("safety");
  const [activeCard, setActiveCard] = useState(null);

const survivorOptions = {
  safety: {
    title: "Community Awareness",
    description:
      "We facilitate practical awareness sessions that address GBV risks, rights, and available support services.",
    image: slide1,
    icon: "security",
    points: [
      "Community awareness sessions.",
      "Dialogue forums and sensitization events.",
      "Information on rights and protection services.",
    ],
  },

  legal: {
    title: "Safe Reporting",
    description:
      "We strengthen trusted channels so survivors and witnesses can report safely, confidentially, and without fear.",
    image: slide2,
    icon: "balance",
    points: [
      "Safe reporting pathways",
      "Confidential reporting mechanisms",
      "Referral trigger guidance for volunteers",
    ],
  },

  healing: {
    title: "Engaging Men & Boys",
    description:
      "We include men and boys as active partners in preventing violence and building supportive community norms.",
    image: girls,
    icon: "volunteer_activism",
    points: [
      "Engagement of men and boys",
      "Positive masculinity conversations",
      "Peer-led prevention action groups",
    ],
  },
};

const activeContent = survivorOptions[activeTab];


  return (
    <div className="bg-background text-on-background font-body-md overflow-x-hidden">
      <SiteNavbar activePage="programs" />

      <main className="pt-20">

        <section className="relative h-[70vh] min-h-[600px] flex items-end overflow-hidden">

          {/* BACKGROUND IMAGE */}
          <div className="absolute inset-0 bg-deep-navy">
          <img
            src={girls}
            alt="Gender-Based Violence Program"
            className="h-full w-full object-cover object-[center_20%] opacity-60"
          />

            {/* BOTTOM GRADIENT */}
            <div className="absolute inset-0 bg-black/60"></div>
          </div>

          {/* CONTENT */}
          <div className="relative z-10 w-full max-w-container-max mx-auto px-margin-mobile md:px-margin-desktop pb-20 md:pb-24 text-white">

            {/* MAIN HEADING */}
            <h1 className="font-display-lg text-display-lg-mobile md:text-display-lg max-w-4xl mb-8 border-l-[20px] md:border-l-[43px] border-vibrant-orange pb-[10px] pl-5 md:pl-[30px] leading-tight">
            GBV Response & Prevention

            </h1>

            {/* SUBHEADING */}
            <h2 className="font-display-lg font-bold text-2xl md:text-3xl lg:text-4xl text-white leading-tight mb-6 max-w-3xl">
              Creating safer communities to every survivor.
            </h2>

            {/* DESCRIPTION */}
            <p className="font-body-lg text-body-lg max-w-2xl text-white/90 leading-relaxed mb-1">
             We provide holistic, trauma-informed survivor support systems to address and prevent gender-based violence while strengthening rights protection pathways in displacement contexts.
            </p>

          </div>
           {/* WAVY BOTTOM DIVIDER */}
  <WavyBottomDivider />
        </section>





<section className="relative overflow-hidden bg-white py-section-gap">

  {/* DECORATIVE BACKGROUND */}
  <div className="pointer-events-none absolute -top-40 left-[22%] h-[480px] w-[480px] rounded-full border-[80px] border-vibrant-orange/10" />

  <div className="pointer-events-none absolute -bottom-32 right-[-5%] h-[300px] w-[500px] rotate-[-25deg] rounded-[40%] bg-vibrant-orange/10" />


  <div className="relative z-10 mx-auto max-w-container-max px-margin-mobile md:px-margin-desktop">

    <div className="grid grid-cols-1 items-start gap-12 lg:grid-cols-12 lg:gap-16">


      {/* LEFT COLUMN */}
      <div className="lg:col-span-5">

        <h2 className="mb-8 font-display-lg text-display-lg-mobile text-deep-navy md:text-display-lg">
          Awareness & Prevention
        </h2>

        <p className="mb-8 font-body-lg text-body-lg leading-relaxed text-on-surface-variant">
         We work with communities to prevent gender-based violence by promoting safe norms, raising awareness, and strengthening trusted reporting pathways.
        </p>


        {/* CLICKABLE TABS */}
        <div className="space-y-3">


          {/* SAFETY FIRST */}
          <button
            type="button"
            onClick={() => setActiveTab("safety")}
            className={`flex w-full items-center gap-4 rounded-lg p-4 text-left transition-all duration-300 ${
              activeTab === "safety"
                ? "bg-deep-navy text-white shadow-md"
                : "bg-surface-cream hover:bg-surface-container-high"
            }`}
          >

            <div
              className={`flex shrink-0 items-center justify-center rounded-md p-2.5 ${
                activeTab === "safety"
                  ? "bg-vibrant-orange text-white"
                  : "bg-deep-navy text-white"
              }`}
            >
          <span className="material-symbols-outlined text-xl">
            groups
          </span>
            </div>

            <div className="flex w-full items-center justify-between">

              <h3
                className={`font-headline-sm text-headline-sm ${
                  activeTab === "safety"
                    ? "text-white"
                    : "text-deep-navy"
                }`}
              >
                Community Awareness
              </h3>

              <span
                className={`material-symbols-outlined transition-transform duration-300 ${
                  activeTab === "safety"
                    ? "rotate-90 text-vibrant-orange"
                    : "rotate-0"
                }`}
              >
                chevron_right
              </span>

            </div>

          </button>


          {/* LEGAL ADVOCACY */}
          <button
            type="button"
            onClick={() => setActiveTab("legal")}
            className={`flex w-full items-center gap-4 rounded-lg p-4 text-left transition-all duration-300 ${
              activeTab === "legal"
                ? "bg-deep-navy text-white shadow-md"
                : "bg-surface-cream hover:bg-surface-container-high"
            }`}
          >

            <div
              className={`flex shrink-0 items-center justify-center rounded-md p-2.5 ${
                activeTab === "legal"
                  ? "bg-vibrant-orange text-white"
                  : "bg-deep-navy text-white"
              }`}
            >
            <span className="material-symbols-outlined text-xl">
              report
            </span>
            </div>

            <div className="flex w-full items-center justify-between">

              <h3
                className={`font-headline-sm text-headline-sm ${
                  activeTab === "legal"
                    ? "text-white"
                    : "text-deep-navy"
                }`}
              >
                Safe Reporting
              </h3>

              <span
                className={`material-symbols-outlined transition-transform duration-300 ${
                  activeTab === "legal"
                    ? "rotate-90 text-vibrant-orange"
                    : "rotate-0"
                }`}
              >
                chevron_right
              </span>

            </div>

          </button>


          {/* HEALING & REINTEGRATION */}
          <button
            type="button"
            onClick={() => setActiveTab("healing")}
            className={`flex w-full items-center gap-4 rounded-lg p-4 text-left transition-all duration-300 ${
              activeTab === "healing"
                ? "bg-deep-navy text-white shadow-md"
                : "bg-surface-cream hover:bg-surface-container-high"
            }`}
          >

            <div
              className={`flex shrink-0 items-center justify-center rounded-md p-2.5 ${
                activeTab === "healing"
                  ? "bg-vibrant-orange text-white"
                  : "bg-deep-navy text-white"
              }`}
            >
          <span className="material-symbols-outlined text-xl">
            diversity_3
          </span>
            </div>

            <div className="flex w-full items-center justify-between">

              <h3
                className={`font-headline-sm text-headline-sm ${
                  activeTab === "healing"
                    ? "text-white"
                    : "text-deep-navy"
                }`}
              >
                Engaging Men & Boys
              </h3>

              <span
                className={`material-symbols-outlined transition-transform duration-300 ${
                  activeTab === "healing"
                    ? "rotate-90 text-vibrant-orange"
                    : "rotate-0"
                }`}
              >
                chevron_right
              </span>

            </div>

          </button>

        </div>

      </div>


      {/* RIGHT COLUMN */}
      <div className="lg:col-span-7 lg:pl-10">

        <div
          key={activeTab}
          className="ml-auto max-w-xl overflow-hidden rounded-2xl bg-surface-cream shadow-md animate-slide-in-right"
        >

          {/* IMAGE */}
          <div className="h-[280px] overflow-hidden sm:h-[350px] md:h-[400px]">
            <img
              src={activeContent.image}
              alt={activeContent.title}
              className="block h-full w-full object-cover"
            />
          </div>


          {/* CONTENT */}
          <div className="p-6 sm:p-8 md:p-10">

            <h3 className="font-display-lg text-3xl leading-tight text-deep-navy sm:text-4xl md:text-5xl">
              {activeContent.title}
            </h3>

            <p className="mt-5 font-body-lg text-body-lg leading-relaxed text-on-surface-variant">
              {activeContent.description}
            </p>


            {/* POINTS */}
            <ul className="mt-6 space-y-3">

              {activeContent.points.map((point) => (
                <li
                  key={point}
                  className="flex items-start gap-3 text-on-surface-variant"
                >
                  <span className="material-symbols-outlined mt-0.5 text-vibrant-orange">
                    check_circle
                  </span>

                  <span className="font-body-md text-body-md">
                    {point}
                  </span>
                </li>
              ))}

            </ul>

          </div>

        </div>

      </div>

    </div>

  </div>

</section>




<section
  className="relative overflow-hidden bg-cover bg-center py-24 md:py-28"
  style={{
    backgroundImage: `url(${sec3bckgrd})`,
  }}
>
  {/* DARK OVERLAY */}
  <div className="absolute inset-0 bg-black/60"></div>

  {/* CONTENT */}
  <div className="relative z-10 mx-auto max-w-container-max px-margin-mobile md:px-margin-desktop">

    {/* SECTION TITLE */}
    <h2 className="mb-6 font-display-lg text-4xl text-white md:text-5xl lg:text-6xl">
      Case Management & Referrals
    </h2>

    <p className="mb-12 max-w-3xl font-body-lg text-body-lg leading-relaxed text-white/90">
      We provide survivor-centered case support and coordinate referrals to
      ensure timely access to health, legal, and psychosocial services.
    </p>


    {/* CARDS */}
    <div className="grid grid-cols-1 gap-8 md:grid-cols-3">


      {/* CARD 1 — CONFIDENTIAL CASE INTAKE */}
      <div className="group flex min-h-[350px] flex-col justify-between rounded-xl border border-white/70 bg-black/10 p-8 backdrop-blur-sm transition-all duration-500 hover:border-white hover:bg-white md:p-10">

        <div>

          <h3 className="mb-5 font-display-lg text-2xl text-white transition-colors duration-500 group-hover:text-deep-navy md:text-3xl">
            Confidential Case Intake
          </h3>

          <p className="mb-6 max-w-md font-body-md leading-relaxed text-white/90 transition-colors duration-500 group-hover:text-deep-navy">
            We provide safe and dignified intake processes that prioritize
            survivor consent, confidentiality, and informed choices.
          </p>

          <ul className="space-y-3 text-sm leading-relaxed text-white/80 transition-colors duration-500 group-hover:text-deep-navy">

            <li>• Confidential intake and case follow-up</li>

            <li>• Survivor-centered case planning</li>

            <li>• Risk and safety planning support</li>

          </ul>

        </div>

      </div>


      {/* CARD 2 — REFERRAL COORDINATION */}
      <div className="group flex min-h-[350px] flex-col justify-between rounded-xl border border-white/70 bg-black/10 p-8 backdrop-blur-sm transition-all duration-500 hover:border-deep-navy hover:bg-deep-navy md:p-10">

        <div>

          <h3 className="mb-5 font-display-lg text-2xl text-white transition-colors duration-500 group-hover:text-white md:text-3xl">
            Referral Coordination
          </h3>

          <p className="mb-6 max-w-md font-body-md leading-relaxed text-white/90 transition-colors duration-500 group-hover:text-white">
            We coordinate timely referrals so survivors can access specialized
            services without unnecessary delays.
          </p>

          <ul className="space-y-3 text-sm leading-relaxed text-white/80 transition-colors duration-500 group-hover:text-white/80">

            <li>• Referrals to health, legal, and psychosocial support</li>

            <li>• Coordinated follow-through with service providers</li>

            <li>• Service navigation and accompaniment guidance</li>

          </ul>

        </div>

      </div>


      {/* CARD 3 — PROTECTION COLLABORATION */}
      <div className="group flex min-h-[350px] flex-col justify-between rounded-xl border border-white/70 bg-black/10 p-8 backdrop-blur-sm transition-all duration-500 hover:border-vibrant-orange hover:bg-vibrant-orange md:p-10">

        <div>

          <h3 className="mb-5 font-display-lg text-2xl text-white transition-colors duration-500 group-hover:text-white md:text-3xl">
            Protection Collaboration
          </h3>

          <p className="mb-6 max-w-md font-body-md leading-relaxed text-white/90 transition-colors duration-500 group-hover:text-white">
            We collaborate with local protection structures to reinforce
            accountability, continuity, and survivor safety.
          </p>

          <ul className="space-y-3 text-sm leading-relaxed text-white/80 transition-colors duration-500 group-hover:text-white/90">

            <li>• Coordination with community protection actors</li>

            <li>• Joint response discussions where appropriate</li>

            <li>• Community-level protection linkages</li>

          </ul>

        </div>

      </div>

    </div>

  </div>
</section>










<section className="relative overflow-hidden bg-white py-section-gap">

  {/* DECORATIVE BACKGROUND */}
  <div className="pointer-events-none absolute -top-40 left-[22%] h-[480px] w-[480px] rounded-full border-[80px] border-vibrant-orange/10" />

  <div className="pointer-events-none absolute -bottom-32 right-[-5%] h-[300px] w-[500px] rotate-[-25deg] rounded-[40%] bg-vibrant-orange/10" />


  <div className="relative z-10 mx-auto max-w-container-max px-margin-mobile md:px-margin-desktop">

    {/* SECTION HEADER */}
    <div className="mb-12 max-w-2xl">

      <h2 className="font-display-lg text-display-lg-mobile text-deep-navy md:text-display-lg">
        Psychosocial & Recovery Support
      </h2>

      <p className="mt-5 font-body-lg text-body-lg leading-relaxed text-on-surface-variant">
        We support healing and resilience through psychosocial care, confidence
        rebuilding, and pathways for safe social reintegration.
      </p>

    </div>


    {/* CARDS */}
    <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">


      {/* ===================================================== */}
      {/* CARD 1 — PSYCHOSOCIAL SESSIONS */}
      {/* ===================================================== */}

      <div className="group relative min-h-[450px] overflow-hidden rounded-xl bg-surface-cream">

        {/* IMAGE VIEW */}
        {activeCard !== 1 && (
          <div className="relative min-h-[450px] h-full">

            {/* IMAGE */}
            <img
              src={sec4card1}
              alt="Psychosocial Sessions"
              className="absolute inset-0 h-full w-full object-cover transition-transform duration-700 ease-out group-hover:scale-110"            
              />

            {/* DARK OVERLAY */}
            <div className="absolute inset-0 bg-deep-navy/50 transition-all duration-500 group-hover:bg-deep-navy/60" />

            {/* FRONT CONTENT */}
            <div className="relative z-10 flex min-h-[450px] flex-col justify-end p-8 md:p-10">

              <h3 className="mb-6 font-display-lg text-2xl text-white md:text-3xl">
                Psychosocial Sessions
              </h3>

              <button
                type="button"
                onClick={() => setActiveCard(1)}
                  className="inline-flex items-center justify-center gap-3 bg-vibrant-orange text-white px-9 py-4 font-bold text-lg rounded-lg shadow-lg hover:bg-white hover:text-deep-navy hover:-translate-y-1 transition-all duration-300"
              >
                View

                <span className="material-symbols-outlined text-lg">
                  arrow_forward
                </span>
              </button>

            </div>

          </div>
        )}


        {/* CONTENT VIEW */}
        {activeCard === 1 && (
          <div className="relative min-h-[450px] overflow-hidden bg-surface-cream">

            {/* LEFT-TO-RIGHT COLOR FILL */}
            <div
              className="
                absolute inset-0 origin-left scale-x-0
                bg-deep-navy
                animate-fill-card
              "
            />

            {/* CONTENT */}
            <div className="relative z-10 flex min-h-[450px] flex-col p-8 md:p-10">

              {/* ICON */}
              <div className="mb-6 flex h-12 w-12 items-center justify-center rounded-lg bg-vibrant-orange text-white">
                <span className="material-symbols-outlined">
                  psychology
                </span>
              </div>

              <h3 className="mb-5 font-display-lg text-2xl text-white md:text-3xl">
                Psychosocial Sessions
              </h3>

              <p className="mb-6 font-body-md leading-relaxed text-white/90">
                We offer supportive spaces for survivors to process experiences,
                build coping mechanisms, and restore wellbeing.
              </p>

              <ul className="space-y-3 font-body-md text-sm text-white">

                <li className="flex items-start gap-3">
                  <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-white" />
                  <span>Individual and group support sessions</span>
                </li>

                <li className="flex items-start gap-3">
                  <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-white" />
                  <span>Structured psychosocial activities</span>
                </li>

                <li className="flex items-start gap-3">
                  <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-white" />
                  <span>Emotional wellbeing follow-up</span>
                </li>

              </ul>

              {/* BACK BUTTON */}
              <button
                type="button"
                onClick={() => setActiveCard(null)}
                className="mt-auto inline-flex w-fit items-center gap-2 pt-8 font-label-md uppercase tracking-wider text-white transition-opacity duration-300 hover:opacity-70"
              >
                <span className="material-symbols-outlined text-lg">
                  arrow_back
                </span>

                Back
              </button>

            </div>

          </div>
        )}

      </div>



      {/* ===================================================== */}
      {/* CARD 2 — LIFE SKILLS & CONFIDENCE */}
      {/* ===================================================== */}

      <div className="group relative min-h-[450px] overflow-hidden rounded-xl bg-surface-cream">

        {/* IMAGE VIEW */}
        {activeCard !== 2 && (
          <div className="relative min-h-[450px] h-full">

            {/* IMAGE */}
            <img
              src={sec4card2}
              alt="Life Skills and Confidence"
              className="absolute inset-0 h-full w-full object-cover transition-transform duration-700 group-hover:scale-105"
            />

            {/* DARK OVERLAY */}
            <div className="absolute inset-0 bg-deep-navy/50 transition-all duration-500 group-hover:bg-deep-navy/60" />

            {/* FRONT CONTENT */}
            <div className="relative z-10 flex min-h-[450px] flex-col justify-end p-8 md:p-10">

              <h3 className="mb-6 font-display-lg text-2xl text-white md:text-3xl">
                Life Skills & Confidence
              </h3>

              <button
                type="button"
                onClick={() => setActiveCard(2)}
                  className="inline-flex items-center justify-center gap-3 bg-vibrant-orange text-white px-9 py-4 font-bold text-lg rounded-lg shadow-lg hover:bg-white hover:text-deep-navy hover:-translate-y-1 transition-all duration-300"
              >
                View

                <span className="material-symbols-outlined text-lg">
                  arrow_forward
                </span>
              </button>

            </div>

          </div>
        )}


        {/* CONTENT VIEW */}
        {activeCard === 2 && (
          <div className="relative min-h-[450px] overflow-hidden bg-surface-cream">

            {/* LEFT-TO-RIGHT COLOR FILL */}
            <div
              className="
                absolute inset-0 origin-left scale-x-0
                bg-deep-navy
                animate-fill-card
              "
            />

            {/* CONTENT */}
            <div className="relative z-10 flex min-h-[450px] flex-col p-8 md:p-10">

              {/* ICON */}
              <div className="mb-6 flex h-12 w-12 items-center justify-center rounded-lg bg-vibrant-orange text-white">
                <span className="material-symbols-outlined">
                  self_improvement
                </span>
              </div>

              <h3 className="mb-5 font-display-lg text-2xl text-white md:text-3xl">
                Life Skills & Confidence
              </h3>

              <p className="mb-6 font-body-md leading-relaxed text-white/90">
                We help survivors rebuild confidence, agency, and practical
                life skills needed for safer futures.
              </p>

              <ul className="space-y-3 font-body-md text-sm text-white/90">

                <li className="flex items-start gap-3">
                  <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-vibrant-orange" />
                  <span>Life skills and confidence building</span>
                </li>

                <li className="flex items-start gap-3">
                  <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-vibrant-orange" />
                  <span>Decision-making and self-advocacy support</span>
                </li>

                <li className="flex items-start gap-3">
                  <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-vibrant-orange" />
                  <span>Strength-based personal development</span>
                </li>

              </ul>

              {/* BACK BUTTON */}
              <button
                type="button"
                onClick={() => setActiveCard(null)}
                className="mt-auto inline-flex w-fit items-center gap-2 pt-8 font-label-md uppercase tracking-wider text-white transition-opacity duration-300 hover:opacity-70"
              >
                <span className="material-symbols-outlined text-lg">
                  arrow_back
                </span>

                Back
              </button>

            </div>

          </div>
        )}

      </div>



      {/* ===================================================== */}
      {/* CARD 3 — REINTEGRATION SUPPORT */}
      {/* ===================================================== */}

      <div className="group relative min-h-[450px] overflow-hidden rounded-xl bg-surface-cream">

        {/* IMAGE VIEW */}
        {activeCard !== 3 && (
          <div className="relative min-h-[450px] h-full">

            {/* IMAGE */}
            <img
              src={sec4card3}
              alt="Reintegration Support"
              className="absolute inset-0 h-full w-full object-cover transition-transform duration-700 group-hover:scale-105"
            />

            {/* DARK OVERLAY */}
            <div className="absolute inset-0 bg-deep-navy/50 transition-all duration-500 group-hover:bg-deep-navy/60" />

            {/* FRONT CONTENT */}
            <div className="relative z-10 flex min-h-[450px] flex-col justify-end p-8 md:p-10">

              <h3 className="mb-6 font-display-lg text-2xl text-white md:text-3xl">
                Reintegration Support
              </h3>

              <button
                type="button"
                onClick={() => setActiveCard(3)}
                  className="inline-flex items-center justify-center gap-3 bg-vibrant-orange text-white px-9 py-4 font-bold text-lg rounded-lg shadow-lg hover:bg-white hover:text-deep-navy hover:-translate-y-1 transition-all duration-300"
              >
                View

                <span className="material-symbols-outlined text-lg">
                  arrow_forward
                </span>
              </button>

            </div>

          </div>
        )}


        {/* CONTENT VIEW */}
        {activeCard === 3 && (
          <div className="relative min-h-[450px] overflow-hidden bg-surface-cream">

            {/* LEFT-TO-RIGHT COLOR FILL */}
            <div
              className="
                absolute inset-0 origin-left scale-x-0
                bg-deep-navy
                animate-fill-card
              "
            />

            {/* CONTENT */}
            <div className="relative z-10 flex min-h-[450px] flex-col p-8 md:p-10">

              {/* ICON */}
              <div className="mb-6 flex h-12 w-12 items-center justify-center rounded-lg bg-vibrant-orange text-white">
                <span className="material-symbols-outlined">
                  diversity_3
                </span>
              </div>

              <h3 className="mb-5 font-display-lg text-2xl text-white md:text-3xl">
                Reintegration Support
              </h3>

              <p className="mb-6 font-body-md leading-relaxed text-white/90">
                We work with families and communities to strengthen safe
                reintegration and reduce stigma for survivors.
              </p>

              <ul className="space-y-3 font-body-md text-sm text-white">

                <li className="flex items-start gap-3">
                  <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-white" />
                  <span>Family and community reintegration support</span>
                </li>

                <li className="flex items-start gap-3">
                  <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-white" />
                  <span>Stigma-reduction conversations</span>
                </li>

                <li className="flex items-start gap-3">
                  <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-white" />
                  <span>Community acceptance facilitation</span>
                </li>

              </ul>

              {/* BACK BUTTON */}
              <button
                type="button"
                onClick={() => setActiveCard(null)}
                className="mt-auto inline-flex w-fit items-center gap-2 pt-8 font-label-md uppercase tracking-wider text-white transition-opacity duration-300 hover:opacity-70"
              >
                <span className="material-symbols-outlined text-lg">
                  arrow_back
                </span>

                Back
              </button>

            </div>

          </div>
        )}

      </div>

    </div>
                            {/* BUTTONS */}
              <div className="mt-20 flex flex-col sm:flex-row items-center gap-4 shrink-0">

                <a
                  href="/programs"
                  className="inline-flex items-center justify-center gap-3 bg-vibrant-orange text-white px-8 py-4 font-bold rounded-lg border-2 border-vibrant-orange hover:bg-primary hover:text-white hover:border-primary transition-all duration-300"
                >
                  Back To Programs
                  <span className="text-xl transition-transform duration-300 group-hover:translate-x-1">
                    →
                  </span>
                </a>

                <a
                  href="/contact"
                  className="inline-flex items-center justify-center gap-3 border-2 border-primary text-white px-8 py-4 bg-primary font-bold rounded-lg hover:bg-white hover:text-deep-navy transition-all duration-300"
                >
                  Contact Us
                  <span className="text-xl">
                    →
                  </span>
                </a>

              </div>
  </div>

</section>












        {/* <section className="py-section-gap bg-background">
          <div className="max-w-container-max mx-auto px-margin-mobile md:px-margin-desktop">
            <div className="text-center max-w-3xl mx-auto mb-20">
              <span className="font-label-sm text-label-sm text-vibrant-orange uppercase tracking-[0.2em] mb-4 block">Core Services</span>
              <h2 className="font-headline-md text-headline-md text-deep-navy text-4xl">Comprehensive Prevention and Response</h2>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-4 lg:grid-cols-6 grid-rows-2 gap-6 h-auto md:h-[800px]">
              <div className="md:col-span-2 lg:col-span-3 bg-white border border-outline-variant/20 rounded-xl overflow-hidden flex flex-col hover:shadow-[0_20px_40px_rgba(3,51,71,0.04)] hover:-translate-y-1 transition-all">
                <div className="h-64 relative overflow-hidden">
                  <img alt="Survivor support" className="w-full h-full object-cover" src="https://lh3.googleusercontent.com/aida/AP1WRLtBRKXZ1fout5TitT03ohSQWu3WidW30DyWdVuJah4JUplhxs8oG0KVs0LP6fUDGPL8cQI88Owzs-at8HOVvEX_sSzZmgPL8GrJj9t0jpwB2AVZes20UklyLCO4GlNP5oc4cjFV9WHX3c4BZsdvdnofVScBZUDYskGjrvtaactcxp6G9Vr6IcB_g1s5zDxnTx8ILl6t-ICGWFlFpsVA4o7rCcfYyBp9OEyB4myl3r0wfNlyXkBDPH-fo7q7" />
                  <div className="absolute top-4 left-4 bg-deep-navy text-white px-4 py-1 font-label-sm text-label-sm rounded">HEALING</div>
                </div>
                <div className="p-8">
                  <h3 className="font-headline-sm text-headline-sm text-deep-navy mb-4">Survivor-Centered Care</h3>
                  <p className="text-on-surface-variant mb-6">Holistic mental health support and trauma-informed counseling tailored to individual recovery journeys.</p>
                  <a className="text-vibrant-orange font-bold flex items-center gap-2 hover:gap-4 transition-all" href="#">Learn more <span className="material-symbols-outlined">arrow_right_alt</span></a>
                </div>
              </div>

              <div className="md:col-span-2 lg:col-span-3 bg-deep-navy rounded-xl p-8 flex flex-col justify-end text-white hover:shadow-[0_20px_40px_rgba(3,51,71,0.10)] hover:-translate-y-1 transition-all">
                <span className="material-symbols-outlined text-4xl text-vibrant-orange mb-6">home_pin</span>
                <h3 className="font-headline-sm text-headline-sm mb-4">Emergency Safe Houses</h3>
                <p className="text-on-primary-container mb-8">Confidential, secure residential facilities providing refuge for women and children at immediate risk of harm.</p>
                <div className="flex gap-2">
                  <div className="h-1 w-12 bg-vibrant-orange" />
                  <div className="h-1 w-12 bg-white/20" />
                  <div className="h-1 w-12 bg-white/20" />
                </div>
              </div>

              <div className="md:col-span-4 lg:col-span-2 bg-surface-cream border border-outline-variant/30 rounded-xl p-8 hover:shadow-[0_20px_40px_rgba(3,51,71,0.04)] hover:-translate-y-1 transition-all">
                <h3 className="font-headline-sm text-headline-sm text-deep-navy mb-4">Community-Based Prevention</h3>
                <p className="text-on-surface-variant mb-6">Engagement programs involving local leaders, men, and boys to challenge harmful norms and prevent violence before it starts.</p>
                <div className="bg-white/50 p-4 rounded-lg border border-outline-variant/20 italic text-sm text-on-surface-variant">
                  "Prevention starts with conversation and education at the grassroots level."
                </div>
              </div>

              <div className="md:col-span-2 lg:col-span-2 bg-white border border-outline-variant/20 rounded-xl overflow-hidden hover:shadow-[0_20px_40px_rgba(3,51,71,0.04)] hover:-translate-y-1 transition-all">
                <div className="h-48 relative overflow-hidden">
                  <img alt="Legal consultation" className="w-full h-full object-cover" src="https://lh3.googleusercontent.com/aida/AP1WRLuqISDbQC5UqXt_t9iQVKjZLTFxC10tG7W-PBvk6AdmfQlS_dmoq4pGm5JMvCm1OOTLou6yE_EjtntJfDxj1-Tl0eNZRVMPMtKtv3J2DSD5xaytcz5fpaxCPK1buXUsYyIxiUj4k64b2vo5ItxK01iu0mnKgITZMBCfduQZYwVjs0y8eVvAqzPH0SCdDApoMxXrpZ6VvDgGMqzAB4gm4MeSW8IZ6ztelqR-4s_iS4h1kZZ4xY3sK4l2Eos" />
                </div>
                <div className="p-6">
                  <h3 className="font-bold text-deep-navy text-xl mb-2">Pro-Bono Legal Aid</h3>
                  <p className="text-on-surface-variant text-sm">Free legal representation for survivors seeking protection orders and family law resolution.</p>
                </div>
              </div>

              <div className="md:col-span-2 lg:col-span-2 bg-vibrant-orange rounded-xl p-8 flex flex-col items-center justify-center text-center text-white hover:shadow-[0_20px_40px_rgba(3,51,71,0.10)] hover:-translate-y-1 transition-all">
                <span className="material-symbols-outlined text-5xl mb-4">call</span>
                <h3 className="font-bold text-xl mb-2">24/7 Helpline</h3>
                <p className="text-white/90 text-sm mb-6">Immediate crisis intervention and dispatch services available day and night.</p>
                <span className="text-2xl font-bold tracking-tighter">0-800-SAFE-NOW</span>
              </div>
            </div>
          </div>
        </section> */}




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

      <footer className="bg-primary-container text-white py-section-gap px-margin-mobile md:px-margin-desktop mt-auto">
        <div className="max-w-container-max mx-auto w-full flex flex-col items-center">
          <div className="flex items-center gap-3 mb-12">
            <img alt="USEC Logo" className="h-10 w-auto brightness-0 invert" src="/usec-navbar-logo.png" />
            <span className="font-headline-sm text-headline-sm text-white">USEC.org</span>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-5 gap-12 w-full text-center md:text-left mb-16">
            <div className="col-span-2 md:col-span-1 flex flex-col gap-4">
              <h4 className="font-bold text-vibrant-orange text-label-md">QUICK LINKS</h4>
              <nav className="flex flex-col gap-2">
                <a className="text-tertiary-fixed-dim hover:text-vibrant-orange transition-colors font-label-sm" href="/privacy-policy">Privacy Policy</a>
                <a className="text-tertiary-fixed-dim hover:text-vibrant-orange transition-colors font-label-sm" href="/terms-of-service">Terms of Service</a>
                <a className="text-tertiary-fixed-dim hover:text-vibrant-orange transition-colors font-label-sm" href="/annual-reports">Financial Transparency</a>
              </nav>
            </div>
            <div className="col-span-2 md:col-span-1 flex flex-col gap-4">
              <h4 className="font-bold text-vibrant-orange text-label-md">RESOURCES</h4>
              <nav className="flex flex-col gap-2">
                <a className="text-tertiary-fixed-dim hover:text-vibrant-orange transition-colors font-label-sm" href="/annual-reports">Annual Reports</a>
                <a className="text-tertiary-fixed-dim hover:text-vibrant-orange transition-colors font-label-sm" href="#">Careers</a>
                <a className="text-tertiary-fixed-dim hover:text-vibrant-orange transition-colors font-label-sm" href="/get-involved">Volunteer Hub</a>
              </nav>
            </div>
            <div className="col-span-2 md:col-span-3 flex flex-col md:items-end gap-6">
              <h4 className="font-bold text-vibrant-orange text-label-md">NEWSLETTER</h4>
              <form className="flex w-full max-w-sm" onSubmit={(event) => event.preventDefault()}>
                <input className="bg-white/10 border border-white/20 text-white p-3 rounded-l-lg w-full focus:ring-vibrant-orange focus:border-vibrant-orange" placeholder="Email Address" type="email" />
                <button className="bg-vibrant-orange text-white px-6 rounded-r-lg font-bold" type="submit">JOIN</button>
              </form>
            </div>
          </div>
          <div className="border-t border-white/10 pt-12 w-full text-center">
            <p className="font-body-md text-body-md text-tertiary-fixed-dim mb-4">(c) 2024 United Safe Environment Creators (USEC). All rights reserved. Registered Charity.</p>
            <div className="flex justify-center gap-6">
              <a className="hover:text-vibrant-orange transition-colors" href="#"><span className="material-symbols-outlined">public</span></a>
              <a className="hover:text-vibrant-orange transition-colors" href="#"><span className="material-symbols-outlined">share</span></a>
              <a className="hover:text-vibrant-orange transition-colors" href="#"><span className="material-symbols-outlined">mail</span></a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  )
}

export default GBVResponsePage
