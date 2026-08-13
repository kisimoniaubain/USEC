import { useEffect } from 'react'
import SiteNavbar from '../components/SiteNavbar'
import useWhoWeAreReveal from '../hooks/useWhoWeAreReveal'
import programshero from '../assets/images/impactimo/sec2card4.jpg'
import EducationProgramPage from "./EducationProgramPage.jsx";
// import pillar1 from '../assets/images/programs/pillar1.jpg'
// import pillar2 from '../assets/images/programs/pillar2.jpg'
// import pillar3 from '../assets/images/programs/pillar3.jpg'
// import pillar4 from '../assets/images/programs/pillar4.jpg'
import donateprotect from "../assets/images/Protection-imo/donate-protect.png";


function ProgramsPage() {
  useWhoWeAreReveal()

  const initiatives = [
  {
    number: "01",
    icon: "volunteer_activism",
    title: "Crisis Response & Humanitarian Protection",
    description:
      "Delivering emergency assistance, psychosocial support and protection services for vulnerable families.",
    items: [
      "Emergency Relief",
      "Child Protection",
      "Community Safety",
    ],
  },
  {
    number: "02",
    icon: "school",
    title: "Education & Skills Development",
    description:
      "Supporting education, vocational training and youth leadership for long-term resilience.",
    items: [
      "Early Childhood Learning",
      "Vocational Training",
      "Youth Leadership",
    ],
  },
  {
    number: "03",
    icon: "eco",
    title: "Environmental Conservation",
    description:
      "Restoring ecosystems through conservation, tree planting and community climate action.",
    items: [
      "Tree Planting",
      "Climate Education",
      "Environmental Protection",
    ],
  },
  {
    number: "04",
    icon: "diversity_3",
    title: "Gender Equality & Community Advocacy",
    description:
      "Promoting inclusion, preventing gender-based violence and empowering women and youth.",
    items: [
      "GBV Prevention",
      "Women's Empowerment",
      "Community Advocacy",
    ],
  },
];
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

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('opacity-100', 'translate-y-0')
            entry.target.classList.remove('opacity-0', 'translate-y-8')
          }
        })
      },
      { threshold: 0.1 }
    )

    const cards = document.querySelectorAll('.editorial-card')
    cards.forEach((card) => observer.observe(card))

    return () => observer.disconnect()
  }, [])

  return (
    <div className="bg-surface-cream text-on-surface font-body-md selection:bg-vibrant-orange/30 overflow-x-hidden">
      <SiteNavbar activePage="programs" />

      <main className="pt-20">
        {/* =====================================================
    HERO SECTION
===================================================== */}
<section className="relative h-[70vh] min-h-[600px] flex items-end overflow-hidden">

  {/* BACKGROUND IMAGE */}
  <div className="absolute inset-0 bg-deep-navy">

    <img
      src={programshero}
      alt="Empowerment in action"
      className="w-full h-full object-cover opacity-60"
    />

    {/* DARK OVERLAY */}
    <div className="absolute inset-0 bg-black/55"></div>

  </div>


  {/* CONTENT */}
  <div className="relative z-10 w-full max-w-container-max mx-auto px-margin-mobile md:px-margin-desktop pb-20 md:pb-24 text-white">

    {/* MAIN TITLE */}
    <h1 className="font-display-lg text-display-lg-mobile md:text-display-lg max-w-4xl mb-8 border-l-[43px] border-vibrant-orange pl-[30px] leading-tight">
      Our Programs
    </h1>


    {/* SUBTITLE */}
    <span className="block font-display-lg font-bold text-2xl md:text-3xl lg:text-4xl text-white leading-tight mb-4 max-w-3xl">
      Empowering Communities Through Sustainable Action
    </span>


    {/* DESCRIPTION */}
    <p className="font-body-lg text-body-lg max-w-2xl text-white/90 leading-relaxed">
      Our programs are designed to create lasting impact. From immediate
      crisis response to long-term ecological preservation, we build the
      foundations for a safer, more equitable, and resilient world.
    </p>

  </div>


  {/* WAVY BOTTOM DIVIDER */}
  <WavyBottomDivider />

</section>



<section
  id="initiatives"
  className="relative overflow-hidden bg-surface-cream py-24"
>
  {/* Background decoration */}
  <div className="pointer-events-none absolute -top-40 left-[22%] h-[480px] w-[480px] rounded-full border-[80px] border-primary/10"></div>
  <div className="absolute -bottom-6 -right-6 h-40 w-40 rounded-full border-[30px] border-vibrant-orange/40 sm:-bottom-8 sm:-right-8 sm:h-56 sm:w-56 sm:border-[40px] md:-bottom-10 md:-right-10 md:h-72 md:w-72 md:border-[55px]" />

  <div className="absolute -top-32 -left-32 h-72 w-72 rounded-full bg-vibrant-orange/10 blur-3xl" />
  <div className="absolute -bottom-40 -right-40 h-96 w-96 rounded-full bg-primary/10 blur-3xl" />

  <div className="relative max-w-container-max mx-auto px-margin-mobile md:px-margin-desktop">

    {/* ==========================
        SECTION HEADER
    ========================== */}
    <div className="max-w-3xl mx-auto text-center mb-20">

      <span className="mb-4 block font-label-md text-label-md uppercase tracking-widest text-vibrant-orange">
        What We Do
      </span>

      <h2 className="mt-4 font-display-lg text-display-lg-mobile md:text-display-lg text-deep-navy">
        Pillars of Resilience
      </h2>
      

      <p className="mt-6 font-body-lg text-body-lg text-on-surface-variant leading-relaxed">
        We build resilient communities through humanitarian protection,
        education, environmental stewardship and inclusive community
        development. Every initiative is designed to create sustainable,
        long-term impact.
      </p>

    </div>

    {/* ==========================
        CARDS
    ========================== */}
    <div className="grid grid-cols-1 md:grid-cols-2 gap-8">

{/* CARD 1 */}
<div className="group h-[400px] [perspective:1200px]">

  <div className="relative h-full w-full transition-transform duration-700 [transform-style:preserve-3d] group-hover:[transform:rotateY(180deg)]">

      {/* FRONT */}
      <div className="absolute inset-0 rounded-3xl bg-white p-5 sm:p-6 md:p-8 shadow-[0_20px_50px_rgba(15,23,42,0.08)] [backface-visibility:hidden]">

        <div className="flex items-center justify-between">

          <span className="text-4xl sm:text-5xl md:text-6xl font-display-lg text-vibrant-orange/20">
            01
          </span>

          <div className="w-11 h-11 sm:w-12 sm:h-12 md:w-14 md:h-14 rounded-xl sm:rounded-2xl bg-vibrant-orange/10 flex items-center justify-center">

            <span className="material-symbols-outlined text-2xl sm:text-3xl text-vibrant-orange">
              emergency
            </span>

          </div>

        </div>

        <h3 className="mt-6 sm:mt-8 md:mt-10 font-headline-md text-xl sm:text-2xl md:text-headline-md leading-tight text-deep-navy">
          Education Activities
        </h3>

        <p className="mt-3 sm:mt-4 md:mt-5 font-body-md text-sm sm:text-base md:text-body-md leading-relaxed text-on-surface-variant pr-2">
          Learn how we expand access to quality education through early childhood
          learning, school support, vocational training, and youth empowerment
          programs that equip children and young people with the knowledge, skills,
          and confidence to build a brighter future.
        </p>

        <div className="absolute bottom-5 right-5 sm:bottom-6 sm:right-6 md:bottom-8 md:right-8 flex h-9 w-9 sm:h-10 sm:w-10 items-center justify-center rounded-lg bg-vibrant-orange text-deep-navy">

          <span className="material-symbols-outlined text-lg sm:text-xl">
            arrow_forward
          </span>

        </div>

      </div>

{/* BACK */}
<div className="absolute inset-0 rounded-3xl bg-deep-navy p-5 sm:p-6 md:p-8 text-white [backface-visibility:hidden] [transform:rotateY(180deg)]">

  <div className="flex h-full flex-col">

    {/* Title */}
    <h3 className="font-display-lg text-2xl sm:text-3xl md:text-4xl leading-tight">
      Education Activities
    </h3>

    {/* Description */}
    <p className="mt-3 sm:mt-4 md:mt-5 text-sm sm:text-base md:text-lg leading-relaxed text-white/80">
      We ensure equitable access to education by providing play-based
      learning, school supplies, and remedial classes. Through the Bright
      Beginning Project, we cultivate self-awareness, confidence and
      lifelong learning opportunities for children and youth.
    </p>

    {/* Bottom Section */}
    <div className="mt-auto flex flex-col sm:flex-row sm:items-end sm:justify-between gap-5 sm:gap-6 border-t border-white/10 pt-4 sm:pt-5 md:pt-6">

      {/* List */}
      <ul className="space-y-2 sm:space-y-3 text-sm sm:text-base md:text-lg">

        <li className="flex items-center gap-2 sm:gap-3">
          <span className="h-2 w-2 shrink-0 rounded-full bg-vibrant-orange"></span>
          Early Learning
        </li>

        <li className="flex items-center gap-2 sm:gap-3">
          <span className="h-2 w-2 shrink-0 rounded-full bg-vibrant-orange"></span>
          Basic Education
        </li>

        <li className="flex items-center gap-2 sm:gap-3">
          <span className="h-2 w-2 shrink-0 rounded-full bg-vibrant-orange"></span>
          Youth Support
        </li>

      </ul>

      {/* Button */}
      <a
        href="/education-program"
        className="shrink-0 self-start sm:self-auto inline-flex items-center justify-center rounded-xl bg-vibrant-orange px-5 sm:px-6 py-2.5 sm:py-3 text-sm sm:text-base font-label-md font-semibold text-white transition hover:bg-white hover:text-deep-navy hover:scale-105"
      >
        Learn More
      </a>

    </div>

  </div>

</div>

</div>

</div>

      {/* CARD 2 */}
<div className="group h-[400px] [perspective:1200px]">

  <div className="relative h-full w-full transition-transform duration-700 [transform-style:preserve-3d] group-hover:[transform:rotateY(180deg)]">

   {/* FRONT */}
<div className="absolute inset-0 rounded-3xl bg-white p-5 sm:p-6 md:p-8 shadow-[0_20px_50px_rgba(15,23,42,0.08)] [backface-visibility:hidden]">

  <div className="flex items-center justify-between">

    <span className="text-4xl sm:text-5xl md:text-6xl font-display-lg text-vibrant-orange/20">
      02
    </span>

    <div className="w-11 h-11 sm:w-12 sm:h-12 md:w-14 md:h-14 rounded-xl sm:rounded-2xl bg-vibrant-orange/10 flex items-center justify-center">

      <span className="material-symbols-outlined text-2xl sm:text-3xl text-vibrant-orange">
        security
      </span>

    </div>

  </div>

  <h3 className="mt-6 sm:mt-8 md:mt-10 font-headline-md text-xl sm:text-2xl md:text-headline-md leading-tight text-deep-navy">
    Protection Activities
  </h3>

  <p className="mt-3 sm:mt-4 md:mt-5 font-body-md text-sm sm:text-base md:text-body-md leading-relaxed text-on-surface-variant pr-2">
    Learn how we promote safety, dignity, and resilience by providing
    protection services, preventing gender-based violence, supporting child
    protection initiatives, and strengthening community awareness to create
    safer and more inclusive environments for all.
  </p>

  <div className="absolute bottom-5 right-5 sm:bottom-6 sm:right-6 md:bottom-8 md:right-8 flex h-9 w-9 sm:h-10 sm:w-10 items-center justify-center rounded-lg bg-vibrant-orange text-deep-navy">

    <span className="material-symbols-outlined text-lg sm:text-xl">
      arrow_forward
    </span>

  </div>

</div>

{/* BACK */}
<div className="absolute inset-0 rounded-3xl bg-deep-navy p-5 sm:p-6 md:p-8 text-white [backface-visibility:hidden] [transform:rotateY(180deg)]">

  <div className="flex h-full flex-col">

    {/* Title */}
    <h3 className="font-display-lg text-2xl sm:text-3xl md:text-4xl leading-tight">
      Protection Activities
    </h3>

    {/* Description */}
    <p className="mt-3 sm:mt-4 md:mt-5 text-sm sm:text-base md:text-lg leading-relaxed text-white/80">
      Safeguarding minors in Kakuma through structured mitigation,
      monitoring, and family reunification channels. In close cooperation
      with FRUN, we maintain child-friendly spaces with immediate
      psychosocial response pathways.
    </p>

    {/* Bottom Section */}
    <div className="mt-auto flex flex-col sm:flex-row sm:items-end sm:justify-between gap-5 sm:gap-6 border-t border-white/10 pt-4 sm:pt-5 md:pt-6">

      {/* List */}
      <ul className="space-y-2 sm:space-y-3 text-sm sm:text-base md:text-lg">

        <li className="flex items-center gap-2 sm:gap-3">
          <span className="h-2 w-2 shrink-0 rounded-full bg-vibrant-orange"></span>
          Prevention & Awareness
        </li>

        <li className="flex items-center gap-2 sm:gap-3">
          <span className="h-2 w-2 shrink-0 rounded-full bg-vibrant-orange"></span>
          Response & Support
        </li>

        <li className="flex items-center gap-2 sm:gap-3">
          <span className="h-2 w-2 shrink-0 rounded-full bg-vibrant-orange"></span>
          Family Reconnection
        </li>

      </ul>

      {/* Button */}
      <a
        href="/protection-activities"
        className="shrink-0 self-start sm:self-auto inline-flex items-center justify-center rounded-xl bg-vibrant-orange px-5 sm:px-6 py-2.5 sm:py-3 text-sm sm:text-base font-label-md font-semibold text-white transition hover:bg-white hover:text-deep-navy hover:scale-105"
      >
        Learn More
      </a>

    </div>

  </div>

</div>

</div>

</div>

      {/* CARD 3 */}
<div className="group h-[400px] [perspective:1200px]">

  <div className="relative h-full w-full transition-transform duration-700 [transform-style:preserve-3d] group-hover:[transform:rotateY(180deg)]">

   {/* FRONT */}
<div className="absolute inset-0 rounded-3xl bg-white p-5 sm:p-6 md:p-8 shadow-[0_20px_50px_rgba(15,23,42,0.08)] [backface-visibility:hidden]">

  <div className="flex items-center justify-between">

    <span className="text-4xl sm:text-5xl md:text-6xl font-display-lg text-vibrant-orange/20">
      03
    </span>

    <div className="w-11 h-11 sm:w-12 sm:h-12 md:w-14 md:h-14 rounded-xl sm:rounded-2xl bg-vibrant-orange/10 flex items-center justify-center">

      <span className="material-symbols-outlined text-2xl sm:text-3xl text-vibrant-orange">
        security
      </span>

    </div>

  </div>

  <h3 className="mt-6 sm:mt-8 md:mt-10 font-headline-md text-xl sm:text-2xl md:text-headline-md leading-tight text-deep-navy">
    Livelihood Activities
  </h3>

  <p className="mt-3 sm:mt-4 md:mt-5 font-body-md text-sm sm:text-base md:text-body-md leading-relaxed text-on-surface-variant pr-2">
       Learn how we empower refugees through skills training, income-generating activities, and economic opportunities to build sustainable futures.      
  </p>

  <div className="absolute bottom-5 right-5 sm:bottom-6 sm:right-6 md:bottom-8 md:right-8 flex h-9 w-9 sm:h-10 sm:w-10 items-center justify-center rounded-lg bg-vibrant-orange text-deep-navy">

    <span className="material-symbols-outlined text-lg sm:text-xl">
      arrow_forward
    </span>

  </div>

</div>

{/* BACK */}
<div className="absolute inset-0 rounded-3xl bg-deep-navy p-5 sm:p-6 md:p-8 text-white [backface-visibility:hidden] [transform:rotateY(180deg)]">

  <div className="flex h-full flex-col">

    {/* Title */}
    <h3 className="font-display-lg text-2xl sm:text-3xl md:text-4xl leading-tight">
      Livelihood Activities
    </h3>

    {/* Description */}
    <p className="mt-3 sm:mt-4 md:mt-5 text-sm sm:text-base md:text-lg leading-relaxed text-white/80">
      This initiative targets adolescent mothers, vulnerable women, and unemployed youth. We build capability through vocational training in tailoring and hairdressing, reinforced by practical business incubation support.
    </p>

    {/* Bottom Section */}
    <div className="mt-auto flex flex-col sm:flex-row sm:items-end sm:justify-between gap-5 sm:gap-6 border-t border-white/10 pt-4 sm:pt-5 md:pt-6">

      {/* List */}
      <ul className="space-y-2 sm:space-y-3 text-sm sm:text-base md:text-lg">

        <li className="flex items-center gap-2 sm:gap-3">
          <span className="h-2 w-2 shrink-0 rounded-full bg-vibrant-orange"></span>
          Skills Development
        </li>

        <li className="flex items-center gap-2 sm:gap-3">
          <span className="h-2 w-2 shrink-0 rounded-full bg-vibrant-orange"></span>
          Enterprise Growth
        </li>

        <li className="flex items-center gap-2 sm:gap-3">
          <span className="h-2 w-2 shrink-0 rounded-full bg-vibrant-orange"></span>
          Market Connection
        </li>

      </ul>

      {/* Button */}
      <a
        href="/livelihood-activities"
        className="shrink-0 self-start sm:self-auto inline-flex items-center justify-center rounded-xl bg-vibrant-orange px-5 sm:px-6 py-2.5 sm:py-3 text-sm sm:text-base font-label-md font-semibold text-white transition hover:bg-white hover:text-deep-navy hover:scale-105"
      >
        Learn More
      </a>

    </div>

  </div>

</div>

</div>

</div>








      {/* CARD 4 */}
<div className="group h-[400px] [perspective:1200px]">

  <div className="relative h-full w-full transition-transform duration-700 [transform-style:preserve-3d] group-hover:[transform:rotateY(180deg)]">

   {/* FRONT */}
<div className="absolute inset-0 rounded-3xl bg-white p-5 sm:p-6 md:p-8 shadow-[0_20px_50px_rgba(15,23,42,0.08)] [backface-visibility:hidden]">

  <div className="flex items-center justify-between">

    <span className="text-4xl sm:text-5xl md:text-6xl font-display-lg text-vibrant-orange/20">
      04
    </span>

    <div className="w-11 h-11 sm:w-12 sm:h-12 md:w-14 md:h-14 rounded-xl sm:rounded-2xl bg-vibrant-orange/10 flex items-center justify-center">

      <span className="material-symbols-outlined text-2xl sm:text-3xl text-vibrant-orange">
        security
      </span>

    </div>

  </div>

  <h3 className="mt-6 sm:mt-8 md:mt-10 font-headline-md text-xl sm:text-2xl md:text-headline-md leading-tight text-deep-navy">
    GBV Response & Prevention
  </h3>

  <p className="mt-3 sm:mt-4 md:mt-5 font-body-md text-sm sm:text-base md:text-body-md leading-relaxed text-on-surface-variant pr-2">
       Learn how we prevent and respond to gender-based violence through survivor-centered support, community awareness, positive masculinity initiatives, and safe spaces that empower women, girls, and vulnerable groups to live free from violence.
  </p>

  <div className="absolute bottom-5 right-5 sm:bottom-6 sm:right-6 md:bottom-8 md:right-8 flex h-9 w-9 sm:h-10 sm:w-10 items-center justify-center rounded-lg bg-vibrant-orange text-deep-navy">

    <span className="material-symbols-outlined text-lg sm:text-xl">
      arrow_forward
    </span>

  </div>

</div>

{/* BACK */}
<div className="absolute inset-0 rounded-3xl bg-deep-navy p-5 sm:p-6 md:p-8 text-white [backface-visibility:hidden] [transform:rotateY(180deg)]">

  <div className="flex h-full flex-col">

    {/* Title */}
    <h3 className="font-display-lg text-2xl sm:text-3xl md:text-4xl leading-tight">
     GBV Response & Prevention
    </h3>

    {/* Description */}
    <p className="mt-3 sm:mt-4 md:mt-5 text-sm sm:text-base md:text-lg leading-relaxed text-white/80">
     Providing holistic, trauma-informed survivor support mechanisms to address and prevent gender-based violence. We operate community awareness networks, safe referral desks, and rights-based psychosocial stabilization services.
    </p>

    {/* Bottom Section */}
    <div className="mt-auto flex flex-col sm:flex-row sm:items-end sm:justify-between gap-5 sm:gap-6 border-t border-white/10 pt-4 sm:pt-5 md:pt-6">

      {/* List */}
      <ul className="space-y-2 sm:space-y-3 text-sm sm:text-base md:text-lg">

        <li className="flex items-center gap-2 sm:gap-3">
          <span className="h-2 w-2 shrink-0 rounded-full bg-vibrant-orange"></span>
          Awareness & Prevention
        </li>

        <li className="flex items-center gap-2 sm:gap-3">
          <span className="h-2 w-2 shrink-0 rounded-full bg-vibrant-orange"></span>
          Case Management
        </li>

        <li className="flex items-center gap-2 sm:gap-3">
          <span className="h-2 w-2 shrink-0 rounded-full bg-vibrant-orange"></span>
          Psychosocial Recovery
        </li>

      </ul>

      {/* Button */}
      <a
        href="/gbv-response-prevention"
        className="shrink-0 self-start sm:self-auto inline-flex items-center justify-center rounded-xl bg-vibrant-orange px-5 sm:px-6 py-2.5 sm:py-3 text-sm sm:text-base font-label-md font-semibold text-white transition hover:bg-white hover:text-deep-navy hover:scale-105"
      >
        Learn More
      </a>

    </div>

  </div>

</div>

</div>

</div>

  </div>

  </div>
</section>


{/* =====================================================
    VIDEO SECTION
===================================================== */}
<section className="bg-white py-24">

  <div className="max-w-container-max mx-auto px-margin-mobile md:px-margin-desktop">

    <div className="grid lg:grid-cols-2 gap-16 items-center">

      {/* LEFT CONTENT */}
      <div>

        <span className="mb-4 block font-label-md text-label-md uppercase tracking-widest text-vibrant-orange">
          Watch Our Story
        </span>

        <h2 className="font-display-lg text-display-lg-mobile md:text-display-lg text-deep-navy">
          Discover USEC in Action
        </h2>

        <p className="mt-6 font-body-lg text-body-lg text-on-surface-variant leading-relaxed">
          Experience the impact of our work through the voices of the people,
          communities, and partners we serve. This short documentary highlights
          our commitment to education, protection, environmental conservation,
          and community empowerment.
        </p>

        <div className="mt-8 space-y-4">

          <div className="flex items-start gap-3">
            <span className="material-symbols-outlined text-vibrant-orange">
              check_circle
            </span>
            <p className="text-on-surface-variant">
              Education and child development initiatives.
            </p>
          </div>

          <div className="flex items-start gap-3">
            <span className="material-symbols-outlined text-vibrant-orange">
              check_circle
            </span>
            <p className="text-on-surface-variant">
              Community protection and humanitarian response.
            </p>
          </div>

          <div className="flex items-start gap-3">
            <span className="material-symbols-outlined text-vibrant-orange">
              check_circle
            </span>
            <p className="text-on-surface-variant">
              Environmental conservation and climate action.
            </p>
          </div>

          <div className="flex items-start gap-3">
            <span className="material-symbols-outlined text-vibrant-orange">
              check_circle
            </span>
            <p className="text-on-surface-variant">
              Empowering refugees and host communities through sustainable development.
            </p>
          </div>

        </div>

      </div>

      {/* RIGHT VIDEO */}
      <div className="overflow-hidden rounded-[32px] shadow-[0_30px_80px_rgba(15,23,42,0.12)]">
  <div className="h-[550px]">
    <iframe
      className="w-full h-full"
      src="https://www.youtube.com/embed/by_uU8NtKPg"
      title="USEC Documentary"
      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
      allowFullScreen
    />
  </div>
</div>
    </div>

  </div>

</section>
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
      </main>

      <footer className="w-full py-section-gap px-margin-mobile md:px-margin-desktop flex flex-col md:flex-row justify-between items-start gap-base bg-primary text-white">
        <div className="max-w-sm mb-12 md:mb-0">
          <div className="flex items-center gap-3 mb-6">
            <span className="font-headline-sm text-headline-sm text-white">USEC.org</span>
          </div>
          <p className="font-body-md text-body-md text-surface-variant/70 mb-8">Building resilient foundations for humanity and the environment through innovative humanitarian programs and localized advocacy.</p>
          <div className="flex gap-4">
            <a className="w-10 h-10 rounded-full border border-white/20 flex items-center justify-center hover:bg-vibrant-orange transition-colors" href="#"><span className="material-symbols-outlined text-sm">public</span></a>
            <a className="w-10 h-10 rounded-full border border-white/20 flex items-center justify-center hover:bg-vibrant-orange transition-colors" href="#"><span className="material-symbols-outlined text-sm">share</span></a>
          </div>
        </div>

        <div className="grid grid-cols-2 lg:grid-cols-3 gap-12 w-full md:w-auto">
          <div className="flex flex-col gap-4">
            <span className="font-label-sm text-label-sm text-vibrant-orange uppercase tracking-wider">Programs</span>
            <a className="font-label-sm text-label-sm text-surface-variant hover:text-white transition-colors" href="#">Resilience</a>
            <a className="font-label-sm text-label-sm text-surface-variant hover:text-white transition-colors" href="#">Education</a>
            <a className="font-label-sm text-label-sm text-surface-variant hover:text-white transition-colors" href="#">Ecology</a>
            <a className="font-label-sm text-label-sm text-surface-variant hover:text-white transition-colors" href="#">Policy</a>
          </div>
          <div className="flex flex-col gap-4">
            <span className="font-label-sm text-label-sm text-vibrant-orange uppercase tracking-wider">Resources</span>
            <a className="font-label-sm text-label-sm text-surface-variant hover:text-white transition-colors" href="/annual-reports">Annual Reports</a>
            <a className="font-label-sm text-label-sm text-surface-variant hover:text-white transition-colors" href="#">Careers</a>
            <a className="font-label-sm text-label-sm text-surface-variant hover:text-white transition-colors" href="#">Media Kit</a>
          </div>
          <div className="flex flex-col gap-4">
            <span className="font-label-sm text-label-sm text-vibrant-orange uppercase tracking-wider">Legal</span>
            <a className="font-label-sm text-label-sm text-surface-variant hover:text-white transition-colors" href="/privacy-policy">Privacy Policy</a>
            <a className="font-label-sm text-label-sm text-surface-variant hover:text-white transition-colors" href="/terms-of-service">Terms of Service</a>
          </div>
        </div>

        <div className="w-full mt-12 pt-12 border-t border-on-primary-fixed-variant flex flex-col md:flex-row justify-between items-center gap-4">
          <span className="font-label-sm text-label-sm text-on-primary-container">Â© 2024 United Safe Environment Creators. All Rights Reserved.</span>
          <div className="flex gap-8">
            <a className="font-label-sm text-label-sm text-surface-variant hover:text-vibrant-orange underline transition-colors" href="/privacy-policy">Privacy Policy</a>
            <a className="font-label-sm text-label-sm text-surface-variant hover:text-vibrant-orange transition-colors" href="/terms-of-service">Terms of Service</a>
          </div>
        </div>
      </footer>
    </div>
  )
}

export default ProgramsPage

