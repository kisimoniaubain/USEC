import { useState } from 'react'
import SiteNavbar from '../components/SiteNavbar'
import useWhoWeAreReveal from '../hooks/useWhoWeAreReveal'
import livehero from '../assets/images/livelihood-imo/women.png'
// import livehero from '../assets/images/livelihood-imo/live-hero.jpeg'
import digitalLiteracyImage from '../assets/images/livelihood-imo/digital-literacy.jpeg'
import workReadinessImage from '../assets/images/livelihood-imo/work-readiness.jpg'
import donateprotect from '../assets/images/Protection-imo/donate-protect.png'
import livevoice from '../assets/images/livelihood-imo/live-voice.png'


function LivelihoodActivitiesPage() {
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

const [activeTab, setActiveTab] = useState('access')

const learningOptions = {
  access: {
    title: 'Vocational Training',
    description:
      'We provide practical training pathways designed to quickly improve employability and self-employment readiness.',
    points: [
      'Tailoring and hairdressing skills training',
      'Hands-on practical workshops',
      'Competency-based assessment support',
    ],
    image: livehero,
  },

  vocational: {
    title: 'Digital & Financial Literacy',
    description:
      'We strengthen essential literacy in technology and finance so participants can navigate modern economic systems confidently.',
    points: [
      'Digital and financial literacy',
      'Mobile-money and budgeting basics',
      'Record-keeping and planning tools',
    ],
    image: digitalLiteracyImage,
  },

  adult: {
    title: 'Work Readiness',
    description:
      'We prepare participants for the workplace with confidence, communication, and professional discipline skills.',
    points: [
      'Work-readiness soft skills',
      'Communication and teamwork coaching',
      'Goal-setting and personal development',
    ],
    image: workReadinessImage,
  },
}

const activeContent = learningOptions[activeTab]

  return (
    <div className="bg-background text-on-background font-body-md overflow-x-hidden">
      <SiteNavbar activePage="programs" />

      <main className="pt-20">


        <section
          id="livelihoods"
          className="relative h-[70vh] flex items-end overflow-hidden"
        >
          {/* Background Image */}
          <div className="absolute inset-0 bg-deep-navy">
            <img
              src={livehero}
              alt="Livelihood activities"
              className="w-full h-full object-cover opacity-60"
            />
        {/* Bottom Gradient Overlay */}
        <div className="absolute inset-0 bg-black/60"></div>
        </div>

        {/* Content */}

          <div className="relative z-10 w-full max-w-container-max mx-auto px-margin-mobile md:px-margin-desktop pb-24 text-white">
        {/* Main Heading */}
        <h1 className="font-display-lg text-display-lg-mobile md:text-display-lg max-w-3xl mb-8 border-l-[43px] border-vibrant-orange pb-[10px] pl-[30px]"> 
        Livelihood Activities
        </h1>
        <span className="block font-display-lg font-bold text-2xl md:text-3xl lg:text-4xl text-white leading-tight mb-4 max-w-3xl">
        Protecting the Most Vulnerable
        </span>

        {/* Description */}
        <p className="font-body-lg text-body-lg max-w-2xl text-white/90 leading-relaxed mb-10">
          Our livelihood activities help youth and caregivers build sustainable income opportunities through skills, enterprise support, and market connection.
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

    {/* <div className="grid grid-cols-1 items-center gap-12 lg:grid-cols-12 lg:gap-16"> */}
    <div className="grid grid-cols-1 items-start gap-12 lg:grid-cols-12 lg:gap-16">
      


      {/* LEFT COLUMN */}
      <div className="lg:col-span-5">

        <h2 className="mb-8 font-display-lg text-display-lg-mobile text-deep-navy md:text-display-lg">
          Skills Development
        </h2>

        <p className="mb-8 font-body-lg text-body-lg leading-relaxed text-on-surface-variant">
         We equip youth and caregivers with practical, market-relevant vocational and life skills that improve income potential and long-term resilience.
        </p>


        {/* THREE CLICKABLE LINKS */}
        <div className="space-y-3">


          {/* ACCESS TO LEARNING */}
          <button
            type="button"
            onClick={() => setActiveTab("access")}
            className={`flex w-full items-center gap-4 rounded-lg p-4 text-left transition-all duration-300 ${
              activeTab === "access"
                ? "bg-deep-navy text-white shadow-md"
                : "bg-surface-cream hover:bg-surface-container-high"
            }`}
          >

            {/* ICON */}
            <div
              className={`flex shrink-0 items-center justify-center rounded-md p-2.5 ${
                activeTab === "access"
                  ? "bg-vibrant-orange text-white"
                  : "bg-deep-navy text-white"
              }`}
            >
              <span className="material-symbols-outlined text-xl">
              construction
            </span>
            </div>


            {/* TEXT + CHEVRON */}
            <div className="flex w-full items-center justify-between">

              <h3
                className={`font-headline-sm text-headline-sm ${
                  activeTab === "access"
                    ? "text-white"
                    : "text-deep-navy"
                }`}
              >
                Vocational Training
              </h3>

              <span
                className={`material-symbols-outlined transition-transform duration-300 ${
                  activeTab === "access"
                    ? "rotate-90 text-vibrant-orange"
                    : "rotate-0"
                }`}
              >
                chevron_right
              </span>

            </div>

          </button>



          {/* PLAY-BASED METHODS */}
          <button
            type="button"
            onClick={() => setActiveTab("vocational")}
            className={`flex w-full items-center gap-4 rounded-lg p-4 text-left transition-all duration-300 ${
              activeTab === "vocational"
                ? "bg-deep-navy text-white shadow-md"
                : "bg-surface-cream hover:bg-surface-container-high"
            }`}
          >

            {/* ICON */}
            <div
              className={`flex shrink-0 items-center justify-center rounded-md p-2.5 ${
                activeTab === "vocational"
                  ? "bg-vibrant-orange text-white"
                  : "bg-deep-navy text-white"
              }`}
            >
            <span className="material-symbols-outlined text-xl">
              devices
            </span>
            </div>


            {/* TEXT + CHEVRON */}
            <div className="flex w-full items-center justify-between">

              <h3
                className={`font-headline-sm text-headline-sm ${
                  activeTab === "vocational"
                    ? "text-white"
                    : "text-deep-navy"
                }`}
              >
                Digital & Financial Literacy
              </h3>

              <span
                className={`material-symbols-outlined transition-transform duration-300 ${
                  activeTab === "vocational"
                    ? "rotate-90 text-vibrant-orange"
                    : "rotate-0"
                }`}
              >
                chevron_right
              </span>

            </div>

          </button>



          {/* FAMILY ENGAGEMENT */}
          <button
            type="button"
            onClick={() => setActiveTab("adult")}
            className={`flex w-full items-center gap-4 rounded-lg p-4 text-left transition-all duration-300 ${
              activeTab === "adult"
                ? "bg-deep-navy text-white shadow-md"
                : "bg-surface-cream hover:bg-surface-container-high"
            }`}
          >

            {/* ICON */}
            <div
              className={`flex shrink-0 items-center justify-center rounded-md p-2.5 ${
                activeTab === "adult"
                  ? "bg-vibrant-orange text-white"
                  : "bg-deep-navy text-white"
              }`}
            >
            <span className="material-symbols-outlined text-xl">
              work
            </span>
            </div>


            {/* TEXT + CHEVRON */}
            <div className="flex w-full items-center justify-between">

              <h3
                className={`font-headline-sm text-headline-sm ${
                  activeTab === "adult"
                    ? "text-white"
                    : "text-deep-navy"
                }`}
              >
                Work Readiness
              </h3>

              <span
                className={`material-symbols-outlined transition-transform duration-300 ${
                  activeTab === "adult"
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
          className="max-w-xl ml-auto overflow-hidden rounded-2xl bg-surface-cream shadow-md animate-slide-in-right"
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
    backgroundImage: `url(${digitalLiteracyImage})`,
  }}
>
  {/* DARK OVERLAY */}
  <div className="absolute inset-0 bg-black/60"></div>

  {/* CONTENT */}
  <div className="relative z-10 mx-auto max-w-container-max px-margin-mobile md:px-margin-desktop">

    {/* SECTION TITLE */}
    <h2 className="mb-6 font-display-lg text-4xl text-white md:text-5xl lg:text-6xl">
      Enterprise Growth
    </h2>

    <p className="mb-12 max-w-2xl font-body-lg text-body-lg text-white/90">
      We help participants launch and strengthen micro and small enterprises
      through practical business support and guided growth planning.
    </p>


    {/* CARDS */}
    <div className="grid grid-cols-1 gap-8 md:grid-cols-3">


      {/* CARD 1 — ENTREPRENEURSHIP COACHING */}
      <div className="group flex min-h-[350px] flex-col justify-between rounded-xl border border-white/70 bg-black/10 p-8 backdrop-blur-sm transition-all duration-500 hover:border-white hover:bg-white md:p-10">

        <div>

          <h3 className="mb-5 font-display-lg text-2xl text-white transition-colors duration-500 group-hover:text-deep-navy md:text-3xl">
            Entrepreneurship Coaching
          </h3>

          <p className="mb-6 max-w-md font-body-md leading-relaxed text-white/90 transition-colors duration-500 group-hover:text-deep-navy">
            We guide participants in turning ideas into viable enterprises
            with practical coaching and mentorship.
          </p>

          <ul className="space-y-2 text-sm text-white/80 transition-colors duration-500 group-hover:text-deep-navy">

            <li>• Entrepreneurship and business coaching</li>

            <li>• Business model orientation</li>

            <li>• Market opportunity identification</li>

          </ul>

        </div>

      </div>


      {/* CARD 2 — PLANNING & BUDGETING */}
      <div className="group flex min-h-[350px] flex-col justify-between rounded-xl border border-white/70 bg-black/10 p-8 backdrop-blur-sm transition-all duration-500 hover:border-deep-navy hover:bg-deep-navy md:p-10">

        <div>

          <h3 className="mb-5 font-display-lg text-2xl text-white transition-colors duration-500 group-hover:text-white md:text-3xl">
            Planning & Budgeting
          </h3>

          <p className="mb-6 max-w-md font-body-md leading-relaxed text-white/90 transition-colors duration-500 group-hover:text-white">
            We support stronger enterprise decision-making through structured
            planning and financial discipline tools.
          </p>

          <ul className="space-y-2 text-sm text-white/80 transition-colors duration-500 group-hover:text-white/80">

            <li>• Business planning and budgeting support</li>

            <li>• Cash-flow and pricing guidance</li>

            <li>• Simple financial tracking templates</li>

          </ul>

        </div>

      </div>


      {/* CARD 3 — STARTUP SUPPORT */}
      <div className="group flex min-h-[350px] flex-col justify-between rounded-xl border border-white/70 bg-black/10 p-8 backdrop-blur-sm transition-all duration-500 hover:border-vibrant-orange hover:bg-vibrant-orange md:p-10">

        <div>

          <h3 className="mb-5 font-display-lg text-2xl text-white transition-colors duration-500 group-hover:text-white md:text-3xl">
            Startup Support
          </h3>

          <p className="mb-6 max-w-md font-body-md leading-relaxed text-white/90 transition-colors duration-500 group-hover:text-white">
            We help participants establish early-stage operations through
            starter support and practical setup guidance.
          </p>

          <ul className="space-y-2 text-sm text-white/80 transition-colors duration-500 group-hover:text-white/90">

            <li>• Starter kits and small enterprise guidance</li>

            <li>• Setup and workflow support</li>

            <li>• Early-stage troubleshooting assistance</li>

          </ul>

        </div>

      </div>

    </div>

  </div>
</section>


<section className="bg-white py-section-gap">
  <div className="absolute -top-40 left-[22%] w-[480px] h-[480px] rounded-full border-[80px] border-primary/10 pointer-events-none"></div>
  <div className="absolute -bottom-10 -right-10 w-72 h-72 border-[55px] border-vibrant-orange/80 rounded-full"></div>

  <div className="max-w-container-max mx-auto px-margin-mobile md:px-margin-desktop">

    {/* SECTION HEADER */}
    <div className="mb-12 max-w-2xl">

      <h2 className="font-display-lg text-display-lg-mobile md:text-display-lg text-deep-navy">
        Market Connection
      </h2>

      <p className="mt-5 font-body-lg text-body-lg leading-relaxed text-on-surface-variant">
        We strengthen long-term self-reliance by connecting participants to mentorship, peer systems, and real market pathways.
      </p>
    </div>

    {/* CARDS */}
    <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">

      {/* CARD 1 */}
      <div className="group h-[400px] [perspective:1200px]">
        <div className="relative h-full w-full transition-transform duration-700 [transform-style:preserve-3d] group-hover:[transform:rotateY(180deg)]">

          {/* FRONT */}
          <div className="absolute inset-0 rounded-xl bg-surface-cream p-7 [backface-visibility:hidden]">

            <div className="h-[175px] overflow-hidden rounded-lg">
              <img
                src={livehero}
                alt="2025 Annual Report"
                className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
              />
            </div>

            <h3 className="mt-5 font-display-lg text-2xl text-deep-navy">
              Mentorship & Linkages
            </h3>

            <p className="mt-4 font-body-md text-body-md text-on-surface-variant">
              Learn how we create practical bridges.
            </p>

            <div className="absolute bottom-7 right-7 flex h-10 w-10 items-center justify-center rounded-md bg-vibrant-orange text-deep-navy">
              <span className="material-symbols-outlined">
                arrow_forward
              </span>
            </div>

          </div>

          {/* BACK */}
          <div className="absolute inset-0 flex flex-col rounded-xl bg-deep-navy p-7 md:p-8 text-white [backface-visibility:hidden] [transform:rotateY(180deg)]">

            {/* CONTENT */}
            <div className="flex h-full flex-col">

              {/* TITLE */}
              <h3 className="mt-3 font-display-lg text-2xl md:text-3xl leading-tight">
                Mentorship & Linkages
              </h3>

              {/* DESCRIPTION */}
              <p className="mt-4 font-body-md text-sm leading-relaxed text-white/75">
                We create practical bridges between participants and real-world business
                opportunities through ongoing mentorship and referrals.
              </p>

              {/* LIST */}
              <ul className="mt-5 space-y-3 border-t border-white/10 pt-5 font-body-md text-sm leading-relaxed text-white/80">

                <li className="flex items-start gap-3">
                  <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-vibrant-orange"></span>
                  <span>Mentorship and market-linkage support</span>
                </li>

                <li className="flex items-start gap-3">
                  <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-vibrant-orange"></span>
                  <span>Buyer and supplier mapping</span>
                </li>

                <li className="flex items-start gap-3">
                  <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-vibrant-orange"></span>
                  <span>Opportunity referrals and networking</span>
                </li>

              </ul>

            </div>

          </div>

        </div>
      </div>


      {/* CARD 2 */}
      <div className="group h-[400px] [perspective:1200px]">
        <div className="relative h-full w-full transition-transform duration-700 [transform-style:preserve-3d] group-hover:[transform:rotateY(180deg)]">

          {/* FRONT */}
          <div className="absolute inset-0 rounded-xl bg-surface-cream p-7 [backface-visibility:hidden]">

            <div className="h-[175px] overflow-hidden rounded-lg">
              <img
                src={digitalLiteracyImage}
                alt="2024 Annual Report"
                className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
              />
            </div>

            <h3 className="mt-5 font-display-lg text-2xl text-deep-navy">
              Savings Integration
            </h3>

            <p className="mt-4 font-body-md text-body-md text-on-surface-variant">
              Learn how we encourage financial resilience .
            </p>

            <div className="absolute bottom-7 right-7 flex h-10 w-10 items-center justify-center rounded-md bg-vibrant-orange text-deep-navy">
              <span className="material-symbols-outlined">
                arrow_forward
              </span>
            </div>

          </div>

          {/* BACK */}
          <div className="absolute inset-0 flex flex-col rounded-xl bg-deep-navy p-7 md:p-8 text-white [backface-visibility:hidden] [transform:rotateY(180deg)]">

            {/* CONTENT */}
            <div className="flex h-full flex-col">

              {/* TITLE */}
              <h3 className="mt-3 font-display-lg text-2xl md:text-3xl leading-tight">
               Savings Integration
              </h3>

              {/* DESCRIPTION */}
              <p className="mt-4 font-body-md text-sm leading-relaxed text-white/75">
               We encourage financial resilience through participation in trusted savings systems that support business continuity.
              </p>

              {/* LIST */}
              <ul className="mt-5 space-y-3 border-t border-white/10 pt-5 font-body-md text-sm leading-relaxed text-white/80">

                <li className="flex items-start gap-3">
                  <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-vibrant-orange"></span>
                  <span>Savings group integration</span>
                </li>

                <li className="flex items-start gap-3">
                  <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-vibrant-orange"></span>
                  <span>Household and business savings habits</span>
                </li>

                <li className="flex items-start gap-3">
                  <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-vibrant-orange"></span>
                  <span>Shared accountability in savings circles</span>
                </li>

              </ul>

            </div>

          </div>
        </div>
      </div>


      {/* CARD 3 */}
      <div className="group h-[400px] [perspective:1200px]">
        <div className="relative h-full w-full transition-transform duration-700 [transform-style:preserve-3d] group-hover:[transform:rotateY(180deg)]">

          {/* FRONT */}
          <div className="absolute inset-0 rounded-xl bg-surface-cream p-7 [backface-visibility:hidden]">

            <div className="h-[175px] overflow-hidden rounded-lg">
              <img
                src={workReadinessImage}
                alt="2023 Annual Report"
                className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
              />
            </div>

            <h3 className="mt-5 font-display-lg text-2xl text-deep-navy">
              Peer Business Networks
            </h3>

            <p className="mt-4 font-body-md text-body-md text-on-surface-variant">
              Learn how we strengthen peer learning and collaboration.
            </p>

            <div className="absolute bottom-7 right-7 flex h-10 w-10 items-center justify-center rounded-md bg-vibrant-orange text-deep-navy">
              <span className="material-symbols-outlined">
                arrow_forward
              </span>
            </div>

          </div>

          {/* BACK */}
          <div className="absolute inset-0 flex flex-col rounded-xl bg-deep-navy p-7 md:p-8 text-white [backface-visibility:hidden] [transform:rotateY(180deg)]">

            {/* CONTENT */}
            <div className="flex h-full flex-col">

              {/* TITLE */}
              <h3 className="mt-3 font-display-lg text-2xl md:text-3xl leading-tight">
                Peer Business Networks
              </h3>

              {/* DESCRIPTION */}
              <p className="mt-4 font-body-md text-sm leading-relaxed text-white/75">
               We strengthen peer learning and collaboration so small enterprises can grow through collective knowledge and support.
              </p>

              {/* LIST */}
              <ul className="mt-5 space-y-3 border-t border-white/10 pt-5 font-body-md text-sm leading-relaxed text-white/80">

                <li className="flex items-start gap-3">
                  <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-vibrant-orange"></span>
                  <span>Peer-to-peer business networks</span>
                </li>

                <li className="flex items-start gap-3">
                  <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-vibrant-orange"></span>
                  <span>Experience-sharing circles</span>
                </li>

                <li className="flex items-start gap-3">
                  <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-vibrant-orange"></span>
                  <span>Collaborative problem-solving groups</span>
                </li>

              </ul>

            </div>

          </div>
        </div>
      </div>

    </div>
  </div>
</section>





        <section className="py-section-gap bg-deep-navy text-white overflow-hidden relative">
          <div className="max-w-container-max mx-auto px-margin-mobile md:px-margin-desktop relative z-10">
            <div className="flex flex-col lg:flex-row items-center gap-16">
              <div className="lg:w-2/5">
                <div className="relative group">
                  <div className="absolute -inset-4 border-2 border-vibrant-orange/50 rounded-2xl group-hover:inset-0 transition-all duration-500" />
                  <img className="w-full aspect-square object-cover rounded-xl shadow-2xl relative z-10" 
                       src={livevoice}
                       alt="Safiya" />
                  <div className="absolute -top-6 -right-6 bg-vibrant-orange w-24 h-24 rounded-full flex items-center justify-center z-20">
                    <span className="material-symbols-outlined text-4xl" style={{ fontVariationSettings: "'FILL' 1" }}>format_quote</span>
                  </div>
                </div>
              </div>

              <div className="lg:w-3/5">
                <h2 className="font-headline-md text-display-lg-mobile md:text-display-lg mb-6 leading-tight">"Now, I do not just dream of a future; I build it."</h2>
                <p className="font-body-lg text-primary-fixed-dim text-xl mb-8 italic leading-relaxed">
                  Safiya arrived with nothing but hope. Through a $500 USEC micro-grant and three months of intensive retail management training, she launched a community convenience store that now employs four other women in her camp.
                </p>
                <div className="space-y-4">
                  <p className="font-headline-sm text-vibrant-orange">- Safiya, USEC Entrepreneur</p>
                </div>
                <div className="mt-12 flex gap-4">
                </div>
              </div>
            </div>
                                        {/* BUTTONS */}
              <div className="mt-20 flex flex-col sm:flex-row items-center gap-4 shrink-0">

                <a
                  href="/programs"
                  className="inline-flex items-center justify-center gap-3 bg-white text-deep-navy px-8 py-4 font-bold rounded-lg border-2 border-white hover:bg-primary hover:text-white hover:border-white transition-all duration-300"
                >
                  Back To Programs
                  <span className="text-xl transition-transform duration-300 group-hover:translate-x-1">
                    →
                  </span>
                </a>

                <a
                  href="/contact"
                  className="inline-flex items-center justify-center gap-3 border-2 border-white text-white px-8 py-4 bg-primary font-bold rounded-lg hover:bg-white hover:text-deep-navy transition-all duration-300"
                >
                  Contact Us
                  <span className="text-xl">
                    →
                  </span>
                </a>

              </div>
          </div>
          
          <div className="absolute top-0 right-0 w-1/3 h-full bg-white/5 skew-x-12 translate-x-1/2" />
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

      <footer className="bg-primary-container text-white py-section-gap px-margin-mobile md:px-margin-desktop w-full mt-auto">
        <div className="max-w-container-max mx-auto w-full">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-16">
            <div className="col-span-1 md:col-span-2">
              <h3 className="font-headline-sm text-white mb-6">USEC.org</h3>
              <p className="font-body-md text-tertiary-fixed-dim max-w-sm mb-6">
                United Safe Environment Creators (USEC) is committed to building sustainable futures for displaced populations through innovation, compassion, and strategic economic empowerment.
              </p>
              <div className="flex gap-4">
                <a className="w-10 h-10 rounded-full border border-outline-variant flex items-center justify-center hover:bg-vibrant-orange transition-colors" href="#"><span className="material-symbols-outlined text-sm">share</span></a>
                <a className="w-10 h-10 rounded-full border border-outline-variant flex items-center justify-center hover:bg-vibrant-orange transition-colors" href="#"><span className="material-symbols-outlined text-sm">public</span></a>
                <a className="w-10 h-10 rounded-full border border-outline-variant flex items-center justify-center hover:bg-vibrant-orange transition-colors" href="#"><span className="material-symbols-outlined text-sm">mail</span></a>
              </div>
            </div>

            <div>
              <h4 className="font-label-md text-vibrant-orange mb-6">PROGRAMS</h4>
              <ul className="space-y-4 font-body-md text-tertiary-fixed-dim">
                <li><a className="hover:text-vibrant-orange transition-colors" href="/livelihood-activities">Livelihoods</a></li>
                <li><a className="hover:text-vibrant-orange transition-colors" href="/our-programs#protection-activities">Protection</a></li>
                <li><a className="hover:text-vibrant-orange transition-colors" href="/our-programs#gbv-response-prevention">Emergency Response</a></li>
                <li><a className="hover:text-vibrant-orange transition-colors" href="/education-program">Education</a></li>
              </ul>
            </div>

            <div>
              <h4 className="font-label-md text-vibrant-orange mb-6">QUICK LINKS</h4>
              <ul className="space-y-4 font-body-md text-tertiary-fixed-dim">
                <li><a className="hover:text-vibrant-orange transition-colors" href="/privacy-policy">Privacy Policy</a></li>
                <li><a className="hover:text-vibrant-orange transition-colors" href="/terms-of-service">Terms of Service</a></li>
              </ul>
            </div>
          </div>
        </div>
      </footer>
    </div>
  )
}

export default LivelihoodActivitiesPage
