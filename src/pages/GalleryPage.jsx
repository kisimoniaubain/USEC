import { useState } from 'react'
import SiteNavbar from '../components/SiteNavbar'
import useWhoWeAreReveal from '../hooks/useWhoWeAreReveal'
import gallaryhero from '../assets/images/gallarry/gallaryhero.jpg'

import program1 from '../assets/images/gallarry/program1.jpg'
import program2 from '../assets/images/gallarry/program2.jpg'
import program3 from '../assets/images/gallarry/program3.png'
import program4 from '../assets/images/gallarry/program4.jpg'
import program5 from '../assets/images/gallarry/program5.jpg'
import program6 from '../assets/images/gallarry/program6.png'
import program7 from '../assets/images/gallarry/program7.jpeg'
import program8 from '../assets/images/gallarry/program8.png'
import program9 from '../assets/images/gallarry/program9.jpeg'
import program10 from '../assets/images/gallarry/program10.jpeg'
import program11 from '../assets/images/gallarry/program11.jpeg'
import program12 from '../assets/images/gallarry/program12.jpg'


import program13 from '../assets/images/gallarry/program13.jpeg'
import program14 from '../assets/images/gallarry/program14.jpeg'
import program15 from '../assets/images/gallarry/program15.jpeg'
import program16 from '../assets/images/gallarry/program16.jpeg'
import program17 from '../assets/images/gallarry/program17.jpeg'
import program18 from '../assets/images/gallarry/program18.jpeg'

import community1 from '../assets/images/gallarry/community1.jpeg'
import community2 from '../assets/images/gallarry/community2.jpeg'
import community3 from '../assets/images/gallarry/community3.jpeg'
import community4 from '../assets/images/gallarry/community4.jpeg'
import community5 from '../assets/images/gallarry/community5.jpeg'
import community6 from '../assets/images/gallarry/community6.jpeg'

import field1 from '../assets/images/gallarry/field1.jpeg'
import field2 from '../assets/images/gallarry/field2.jpeg'
import field3 from '../assets/images/gallarry/field3.jpeg'
import field4 from '../assets/images/gallarry/field4.jpeg'
import field5 from '../assets/images/gallarry/field5.png'
import field6 from '../assets/images/gallarry/field6.jpg'
import donateprotect from "../assets/images/Protection-imo/donate-protect.png";



const galleryItems = [
  
  {
    tag: 'Education and Environmental Protection',
    category: 'PROGRAMS',
    image: program1,
  },
  {
    tag: 'Education and Environmental Protection',
    category: 'PROGRAMS',
    image: program2,
  },
  {
    tag: 'Education and Environmental Protection',
    category: 'PROGRAMS',
    image: program3,
  },
  {
    tag: 'Education and Environmental Protection',
    category: 'PROGRAMS',
    image: program4,
  },
  {
    tag: 'Education and Environmental Protection',
    category: 'PROGRAMS',
    image: program5,
  },
  {
    tag: 'Education and Environmental Protection',
    category: 'PROGRAMS',
    image: program6,
  },
  {
    tag: 'Livelihood and Community Development',
    category: 'PROGRAMS',
    image: program7,
  },
  {
    tag: 'Livelihood and Community Development',
    category: 'PROGRAMS',
    image: program8,
  },
  {
    tag: 'Livelihood and Community Development',
    category: 'PROGRAMS',
    image: program9,
  },
  {
    tag: 'Livelihood and Community Development',
    category: 'PROGRAMS',
    image: program10,
  },
  {
    tag: 'Livelihood and Community Development',
    category: 'PROGRAMS',
    image: program11,
  },
  {
    tag: 'Livelihood and Community Development',
    category: 'PROGRAMS',
    image: program12,
  },
  {
    tag: 'Gender based Violence and self-defense',
    category: 'PROGRAMS',
    image: program13,
  },
  {
    tag: 'Gender based Violence and self-defense',
    category: 'PROGRAMS',
    image: program14,
  },
  {
    tag: 'Gender based Violence and self-defense',
    category: 'PROGRAMS',
    image: program15,
  },
  {
    tag: 'Gender based Violence and self-defense',
    category: 'PROGRAMS',
    image: program16,
  },
  {
    tag: 'Gender based Violence and self-defense',
    category: 'PROGRAMS',
    image: program17,
  },
  {
    tag: 'Gender based Violence and self-defense',
    category: 'PROGRAMS',
    image: program18,
  },
  {
    tag: 'Meeting with community leaders',
    category: 'COMMUNITIES',
    image: community1,
  },
  {
    tag: 'Meeting with community leaders',
    category: 'COMMUNITIES',
    image: community2,
  },
  {
    tag: 'Meeting with community leaders',
    category: 'COMMUNITIES',
    image: community3,
  },
  {
    tag: 'Meeting with community leaders',
    category: 'COMMUNITIES',
    image: community4,
  },
  {
    tag: 'Meeting with community leaders',
    category: 'COMMUNITIES',
    image: community5,
  },
  {
    tag: 'Meeting with community leaders',
    category: 'COMMUNITIES',
    image: community6,
  },
  {
    tag: 'Stories From the Frontlines',
    category: 'FIELD NOTES',
    image: field1,
  },
  {
    tag: 'Stories From the Frontlines',
    category: 'FIELD NOTES',
    image: field2,
  },
  {
    tag: 'Stories From the Frontlines',
    category: 'FIELD NOTES',
    image: field3,
  },
  {
    tag: 'Stories From the Frontlines',
    category: 'FIELD NOTES',
    image: field4,
  },
  {
    tag: 'Stories From the Frontlines',
    category: 'FIELD NOTES',
    image: field5,
  },
  {
    tag: 'Stories From the Frontlines',
    category: 'FIELD NOTES',
    image: field6,
  },
]
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
)
function GalleryPage() {
  useWhoWeAreReveal()

  const [activeCategory, setActiveCategory] = useState('ALL')
  const [selectedImage, setSelectedImage] = useState(null)

  return (
    <div className="bg-surface text-on-surface selection:bg-vibrant-orange selection:text-white overflow-x-hidden">

      <SiteNavbar activePage="gallery" />

      <main className="min-h-screen pt-20">

{/* =====================================================
    HERO SECTION
====================================================== */}
<section className="relative h-[70vh] min-h-[600px] flex items-end overflow-hidden">

  {/* BACKGROUND IMAGE */}
  <div className="absolute inset-0 bg-deep-navy">

    <img
      src={gallaryhero}
      alt="Visual Stories of Resilience"
      className="w-full h-full object-cover opacity-60"
    />

    {/* DARK OVERLAY */}
    <div className="absolute inset-0 bg-black/55"></div>

  </div>


  {/* CONTENT */}
  <div className="relative z-10 w-full max-w-container-max mx-auto px-margin-mobile md:px-margin-desktop pb-20 md:pb-24 text-white">

    <h1 className="font-display-lg text-display-lg-mobile md:text-display-lg max-w-4xl mb-8 border-l-[43px] border-vibrant-orange pl-[30px] leading-tight">
      Our Gallery
    </h1>

    <span className="block font-display-lg font-bold text-2xl md:text-3xl lg:text-4xl text-white leading-tight mb-4 max-w-3xl">
      Our Field Work and Community
    </span>

    <p className="font-body-lg text-body-lg max-w-2xl text-white/90 leading-relaxed">
      Witness the direct impact of our environmental and humanitarian
      initiatives through the lenses of those on the ground.
    </p>

  </div>


  <WavyBottomDivider />

</section>



{/* =====================================================
    GALLERY SECTION
====================================================== */}
<section className="bg-surface-cream py-20 md:py-28">

  <div className="max-w-container-max mx-auto px-margin-mobile md:px-margin-desktop">

    {/* =====================================================
        HEADER
    ====================================================== */}
    <div className="mb-12">

      <span className="font-label-sm text-label-sm text-vibrant-orange uppercase tracking-widest">
        Our Stories
      </span>

      <h2 className="font-display-lg text-display-lg-mobile md:text-display-lg text-deep-navy mt-3">
        Stories From The Field
      </h2>

      <p className="font-body-lg text-body-lg text-on-surface-variant max-w-3xl mt-5 leading-relaxed">
        Explore the people, communities, and programs behind our work.
        Discover the stories and moments that show how our initiatives
        are creating meaningful change.
      </p>

    </div>


    {/* =====================================================
        FILTER BUTTONS
    ====================================================== */}
  <div className="grid lg:grid-cols-[200px_minmax(0,1fr)] gap-6 items-start lg:h-[calc(100vh-14rem)]">
    <aside className="lg:sticky lg:top-20 self-start py-6 flex flex-col gap-6">
      {['ALL', 'PROGRAMS', 'COMMUNITIES', 'FIELD NOTES'].map(
    (category) => (

      <button
        key={category}
        type="button"
        onClick={() => setActiveCategory(category)}
        className={`font-label-md text-label-md pb-2 text-left transition-all duration-300 ${
          activeCategory === category
            ? 'text-deep-navy border-b-2 border-vibrant-orange'
            : 'text-on-surface-variant hover:text-deep-navy border-b-2 border-transparent'
        }`}
      >
        {category}
      </button>

    )
  )}
    </aside>

    <div className="lg:relative lg:max-h-[calc(100vh-14rem)] lg:overflow-y-auto lg:pr-1">


    {/* =====================================================
        PROGRAMS CATEGORY
    ====================================================== */}

    {activeCategory === 'PROGRAMS' ? (

      <div className="space-y-28">


        {/* =================================================
            PROGRAM DESCRIPTION 1
        ================================================== */}

      <div className="grid gap-10 py-6">

        <div className="space-y-4">
          <span className="font-label-sm text-label-sm text-vibrant-orange uppercase tracking-widest">
            Programs stories
          </span>
          <h3 className="font-headline-md text-headline-md text-deep-navy mt-3 mb-4">
             Education and Environmental Protection
          </h3>
        </div>

<div className="grid grid-cols-2 gap-4 md:grid-cols-2 lg:grid-cols-3 lg:gap-6">
  {[
    { src: program1, alt: "Program image 1" },
    { src: program2, alt: "Program image 2" },
    { src: program3, alt: "Program image 3" },
    { src: program4, alt: "Program image 4" },
    { src: program5, alt: "Program image 5" },
    { src: program6, alt: "Program image 6" },
  ].map((item, index) => (
    <div
      key={index}
      className="group relative overflow-hidden rounded-[20px] bg-white shadow-[0_24px_70px_rgba(15,23,42,0.08)] sm:rounded-[24px] lg:rounded-[28px]"
    >
      {/* IMAGE */}
      <img
        src={item.src}
        alt={item.alt}
        className="h-40 w-full object-cover transition-transform duration-500 group-hover:scale-105 sm:h-48 md:h-56"
      />

      {/* VIEW BUTTON - SHOWS ONLY ON HOVER */}
      <button
        type="button"
        onClick={() => setSelectedImage(item.src)}
        className="absolute left-1/2 top-1/2 z-20 flex h-12 w-12 -translate-x-1/2 -translate-y-1/2 scale-75 items-center justify-center rounded-full bg-vibrant-orange text-white opacity-0 transition-all duration-300 group-hover:scale-100 group-hover:opacity-100 hover:bg-white hover:text-deep-navy sm:h-14 sm:w-14 lg:h-16 lg:w-16"
      >
        <span className="material-symbols-outlined text-2xl sm:text-3xl">
          visibility
        </span>
      </button>
    </div>
  ))}
</div>

      </div>



        {/* =================================================
            PROGRAM DESCRIPTION 2
        ================================================== */}

        <div className="grid gap-10 py-6">

        <div className="space-y-4">
          <h3 className="font-headline-md text-headline-md text-deep-navy mt-3 mb-4">
              Tailoring and dress making training for teenage mothers and caregivers
          </h3>
        </div>

<div className="grid grid-cols-2 gap-4 md:grid-cols-2 lg:grid-cols-3 lg:gap-6">
  {[
    { src: program7, alt: "Program image 1" },
    { src: program8, alt: "Program image 2" },
    { src: program9, alt: "Program image 3" },
    { src: program10, alt: "Program image 4" },
    { src: program11, alt: "Program image 5" },
    { src: program12, alt: "Program image 6" },
  ].map((item, index) => (
    <div
      key={index}
      className="group relative overflow-hidden rounded-[20px] bg-white shadow-[0_24px_70px_rgba(15,23,42,0.08)] sm:rounded-[24px] lg:rounded-[28px]"
    >
      {/* IMAGE */}
      <img
        src={item.src}
        alt={item.alt}
        className="h-40 w-full object-cover transition-transform duration-500 group-hover:scale-105 sm:h-48 md:h-56"
      />

      {/* VIEW BUTTON - SHOWS ONLY ON HOVER */}
      <button
        type="button"
        onClick={() => setSelectedImage(item.src)}
        className="absolute left-1/2 top-1/2 z-20 flex h-12 w-12 -translate-x-1/2 -translate-y-1/2 scale-75 items-center justify-center rounded-full bg-vibrant-orange text-white opacity-0 transition-all duration-300 group-hover:scale-100 group-hover:opacity-100 hover:bg-white hover:text-deep-navy sm:h-14 sm:w-14 lg:h-16 lg:w-16"
      >
        <span className="material-symbols-outlined text-2xl sm:text-3xl">
          visibility
        </span>
      </button>
    </div>
  ))}
</div>

      </div>
        {/* =================================================
            PROGRAM DESCRIPTION 2
        ================================================== */}
        <div className="grid gap-10 py-6">

        <div className="space-y-4">
          <h3 className="font-headline-md text-headline-md text-deep-navy mt-3 mb-4">
            Gender based Violence and self-defense
          </h3>
        </div>

<div className="grid grid-cols-2 gap-4 md:grid-cols-2 lg:grid-cols-3 lg:gap-6">
  {[
    { src: program13, alt: "Program image 1" },
    { src: program14, alt: "Program image 2" },
    { src: program15, alt: "Program image 3" },
    { src: program16, alt: "Program image 4" },
    { src: program17, alt: "Program image 5" },
    { src: program18, alt: "Program image 6" },
  ].map((item, index) => (
    <div
      key={index}
      className="group relative overflow-hidden rounded-[20px] bg-white shadow-[0_24px_70px_rgba(15,23,42,0.08)] sm:rounded-[24px] lg:rounded-[28px]"
    >
      {/* IMAGE */}
      <img
        src={item.src}
        alt={item.alt}
        className="h-40 w-full object-cover transition-transform duration-500 group-hover:scale-105 sm:h-48 md:h-56"
      />

      {/* VIEW BUTTON - SHOWS ONLY ON HOVER */}
      <button
        type="button"
        onClick={() => setSelectedImage(item.src)}
        className="absolute left-1/2 top-1/2 z-20 flex h-12 w-12 -translate-x-1/2 -translate-y-1/2 scale-75 items-center justify-center rounded-full bg-vibrant-orange text-white opacity-0 transition-all duration-300 group-hover:scale-100 group-hover:opacity-100 hover:bg-white hover:text-deep-navy sm:h-14 sm:w-14 lg:h-16 lg:w-16"
      >
        <span className="material-symbols-outlined text-2xl sm:text-3xl">
          visibility
        </span>
      </button>
    </div>
  ))}
</div>

      </div>

      </div>


    ) : activeCategory === "COMMUNITIES" ? (

<div className="grid gap-10 py-6">

        <div className="space-y-4">
          <span className="font-label-sm text-label-sm text-vibrant-orange uppercase tracking-widest">
            Community Stories
          </span>

          <h3 className="font-headline-md text-headline-md text-deep-navy mt-3 mb-4">
            Meeting with community leaders
          </h3>
        </div>

<div className="grid grid-cols-2 gap-4 md:grid-cols-2 lg:grid-cols-3 lg:gap-6">
  {[
    { src: community1, alt: "Community leaders discussion" },
    { src: community2, alt: "Local planning session" },
    { src: community3, alt: "Community engagement activity" },
    { src: community4, alt: "Neighborhood collaboration" },
    { src: community5, alt: "Community outreach event" },
    { src: community6, alt: "Team working with residents" },
  ].map((item, index) => (
    <div
      key={index}
      className="group relative overflow-hidden rounded-[20px] bg-white shadow-[0_24px_70px_rgba(15,23,42,0.08)] sm:rounded-[24px] lg:rounded-[28px]"
    >
      <img
        src={item.src}
        alt={item.alt}
        className="h-40 w-full object-cover transition-transform duration-500 group-hover:scale-105 sm:h-48 md:h-56"
      />

      {/* VIEW BUTTON - SHOWS ONLY ON HOVER */}
      <button
        type="button"
        onClick={() => setSelectedImage(item.src)}
        className="absolute left-1/2 top-1/2 z-20 flex h-12 w-12 -translate-x-1/2 -translate-y-1/2 scale-75 items-center justify-center rounded-full bg-vibrant-orange text-white opacity-0 transition-all duration-300 group-hover:scale-100 group-hover:opacity-100 hover:bg-white hover:text-deep-navy sm:h-14 sm:w-14 lg:h-16 lg:w-16"
      >
        <span className="material-symbols-outlined text-2xl sm:text-3xl">
          visibility
        </span>
      </button>
    </div>
  ))}
</div>

      </div>

    ) : activeCategory === "FIELD NOTES" ? (
      
    <div className="grid gap-10 py-6">

        <div className="space-y-4">
          <span className="font-label-sm text-label-sm text-vibrant-orange uppercase tracking-widest">
            Field Journal
          </span>

          <h3 className="font-headline-md text-headline-md text-deep-navy mt-3 mb-4">
            Stories From the Frontlines
          </h3>
         <p className="font-body-lg text-body-lg text-on-surface-variant leading-relaxed mb-5">
           Every visit to the field tells a unique story of resilience, hope, and
           collaboration. Through these photographs, we document the daily work of
           protecting the environment, supporting vulnerable communities, and
           empowering people to create sustainable change.
         </p>
         <p className="font-body-md text-body-md text-on-surface-variant leading-relaxed">
           These field notes capture authentic moments from community meetings and
           awareness campaigns to conservation activities and humanitarian
           interventions offering a closer look at the people behind our mission.
         </p>
        </div>

<div className="grid grid-cols-2 gap-4 md:grid-cols-2 lg:grid-cols-3 lg:gap-6">
  {[
    { src: field1, alt: "Community leaders discussion" },
    { src: field2, alt: "Local planning session" },
    { src: field3, alt: "Community engagement activity" },
    { src: field4, alt: "Neighborhood collaboration" },
    { src: field5, alt: "Community outreach event" },
    { src: field6, alt: "Team working with residents" },
  ].map((item, index) => (
    <div
      key={index}
      className="group relative overflow-hidden rounded-[20px] bg-white shadow-[0_24px_70px_rgba(15,23,42,0.08)] sm:rounded-[24px] lg:rounded-[28px]"
    >
      {/* IMAGE */}
      <img
        src={item.src}
        alt={item.alt}
        className="h-40 w-full object-cover transition-transform duration-500 group-hover:scale-105 sm:h-48 md:h-56"
      />

      {/* VIEW BUTTON - SHOWS ONLY ON HOVER */}
      <button
        type="button"
        onClick={() => setSelectedImage(item.src)}
        className="absolute left-1/2 top-1/2 z-20 flex h-12 w-12 -translate-x-1/2 -translate-y-1/2 scale-75 items-center justify-center rounded-full bg-vibrant-orange text-white opacity-0 transition-all duration-300 group-hover:scale-100 group-hover:opacity-100 hover:bg-white hover:text-deep-navy sm:h-14 sm:w-14 lg:h-16 lg:w-16"
      >
        <span className="material-symbols-outlined text-2xl sm:text-3xl">
          visibility
        </span>
      </button>
    </div>
  ))}
</div>

      </div>      
         
    ) : (
      

      /* =====================================================
          DEFAULT GALLERY � ALL OTHER CATEGORIES
      ====================================================== */
    <div className="grid gap-10 py-6">
        <div className="space-y-4">
          <span className="font-label-sm text-label-sm text-vibrant-orange uppercase tracking-widest">
            Our stories
          </span>

          <h3 className="font-headline-md text-headline-md text-deep-navy mt-3 mb-4">
            Explore Our Gallary
          </h3>
       </div>      
        <div className="grid grid-cols-2 gap-4 py-6 md:grid-cols-2 lg:grid-cols-3 lg:gap-6">
          {galleryItems
            .filter(
              (item) =>
                activeCategory === "ALL" ||
                item.category === activeCategory
            )
            .map((item, index) => (

              <div
                key={index}
                className="group relative overflow-hidden rounded-[20px] bg-white shadow-[0_24px_70px_rgba(15,23,42,0.08)] sm:rounded-[24px] lg:rounded-[28px]"
              >

                {/* IMAGE */}
                <img
                  src={item.image}
                  alt={item.title}
                  className="h-40 w-full object-cover transition-transform duration-500 group-hover:scale-105 sm:h-48 md:h-56"
                />

                {/* GRADIENT */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/75 via-black/10 to-transparent" />

                {/* VIEW BUTTON - SHOWS ONLY ON HOVER */}
                <button
                  type="button"
                  onClick={() => setSelectedImage(item.image)}
                  className="
                    absolute left-1/2 top-1/2 z-20
                    flex h-12 w-12
                    -translate-x-1/2 -translate-y-1/2
                    scale-75
                    items-center justify-center
                    rounded-full
                    bg-vibrant-orange text-white
                    opacity-0
                    transition-all duration-300
                    cursor-pointer
                    group-hover:scale-100
                    group-hover:opacity-100
                    hover:bg-white hover:text-deep-navy
                    sm:h-14 sm:w-14
                    lg:h-16 lg:w-16
                  "
                  aria-label={`View ${item.title}`}
                >
                  <span className="material-symbols-outlined text-2xl sm:text-3xl">
                    visibility
                  </span>
                </button>

                {/* CONTENT */}
                <div className="absolute bottom-0 left-0 p-3 text-white sm:p-4 lg:p-6">

                  <span className="font-label-sm text-xs uppercase tracking-widest text-white sm:text-label-sm">
                    {item.tag}
                  </span>

                  {item.title && (
                    <h3 className="mt-1 text-sm font-semibold leading-tight sm:mt-2 sm:text-base lg:text-headline-sm">
                      {item.title}
                    </h3>
                  )}

                </div>

              </div>

            ))}
        </div>          
      </div>

    )}
    </div>
   </div>
  </div>
</section>










      {/* =====================================================
          CTA SECTION
      ====================================================== */}
      <section className="py-section-gap px-margin-mobile md:px-margin-desktop bg-slate-50 overflow-hidden relative reveal-group transition-all duration-1000 opacity-0 translate-y-10">

        <div className="max-w-6xl mx-auto">

          {/* Section Heading */}
          <div className="text-center mb-14">
            <span className="text-vibrant-orange font-label-md text-label-md uppercase tracking-widest">
              Discover More
            </span>

            <h2 className="font-headline-md text-headline-md text-deep-navy mt-3 mb-4">
              Ready to see more impact?
            </h2>

            <p className="font-body-md text-body-md text-on-surface-variant max-w-2xl mx-auto">
              Explore our work, discover our impact, and find meaningful ways
              to be part of the change.
            </p>
          </div>


          {/* CTA Cards */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8">


            {/* =====================================================
                CARD 1 � ANNUAL REPORTS
            ====================================================== */}
            <div className="group relative bg-white overflow-hidden rounded-3xl min-h-[380px] flex flex-col justify-between p-8 shadow-sm hover:shadow-2xl transition-all duration-500 hover:-translate-y-3">

              {/* Large Background Number */}
              <span className="absolute -right-4 -top-8 text-[160px] font-black text-slate-100 leading-none select-none group-hover:text-vibrant-orange/10 transition-colors duration-500">
                01
              </span>

              {/* Icon */}
              <div className="relative z-10">
                <div className="w-14 h-14 rounded-full bg-deep-navy flex items-center justify-center mb-8 group-hover:bg-vibrant-orange transition-colors duration-500">
                  <span className="material-symbols-outlined text-2xl text-white">
                    analytics
                  </span>
                </div>

                <h4 className="font-headline-sm text-headline-sm text-deep-navy mb-4">
                  Annual Reports
                </h4>

                <p className="font-body-md text-body-md text-on-surface-variant leading-relaxed max-w-sm">
                  Detailed transparency on how we allocate resources and
                  create meaningful impact within the communities we serve.
                </p>
              </div>

              {/* Link */}
              <a
                href="reports"
                className="relative z-10 mt-8 inline-flex items-center gap-3 text-deep-navy font-label-md text-label-md font-semibold group-hover:text-vibrant-orange transition-colors duration-300"
              >
                READ MORE
                <span className="material-symbols-outlined text-lg group-hover:translate-x-2 transition-transform duration-300">
                  arrow_forward
                </span>
              </a>

              {/* Bottom Accent */}
              <div className="absolute bottom-0 left-0 w-full h-1 bg-deep-navy group-hover:bg-vibrant-orange transition-colors duration-500"></div>

            </div>


            {/* =====================================================
                CARD 2 � OUR PROGRAMS
            ====================================================== */}
            <div className="group relative bg-deep-navy overflow-hidden rounded-3xl min-h-[380px] flex flex-col justify-between p-8 shadow-sm hover:shadow-2xl transition-all duration-500 hover:-translate-y-3">

              {/* Large Background Number */}
              <span className="absolute -right-4 -top-8 text-[160px] font-black text-white/5 leading-none select-none group-hover:text-vibrant-orange/10 transition-colors duration-500">
                02
              </span>

              {/* Icon */}
              <div className="relative z-10">
                <div className="w-14 h-14 rounded-full bg-vibrant-orange flex items-center justify-center mb-8 group-hover:scale-110 transition-transform duration-500">
                  <span className="material-symbols-outlined text-2xl text-white">
                    public
                  </span>
                </div>

                <h4 className="font-headline-sm text-headline-sm text-white mb-4">
                  Our Programs
                </h4>

                <p className="font-body-md text-body-md text-white/70 leading-relaxed max-w-sm">
                  Explore the specific initiatives driving change and
                  building safer, stronger, and more sustainable communities.
                </p>
              </div>

              {/* Link */}
              <a
                href="/our-programs"
                className="relative z-10 mt-8 inline-flex items-center gap-3 text-white font-label-md text-label-md font-semibold hover:text-vibrant-orange transition-colors duration-300"
              >
                EXPLORE
                <span className="material-symbols-outlined text-lg group-hover:translate-x-2 transition-transform duration-300">
                  arrow_forward
                </span>
              </a>

              {/* Bottom Accent */}
              <div className="absolute bottom-0 left-0 w-full h-1 bg-vibrant-orange"></div>

            </div>


            {/* =====================================================
                CARD 3 � GET INVOLVED
            ====================================================== */}
            <div className="group relative bg-vibrant-orange overflow-hidden rounded-3xl min-h-[380px] flex flex-col justify-between p-8 shadow-sm hover:shadow-2xl transition-all duration-500 hover:-translate-y-3">

              {/* Decorative Circle */}
              <div className="absolute -right-16 -top-16 w-56 h-56 rounded-full border-[30px] border-white/10 group-hover:scale-125 transition-transform duration-700"></div>

              <div className="absolute -right-8 -bottom-20 w-48 h-48 rounded-full border-[20px] border-white/10"></div>

              {/* Large Number */}
              <span className="absolute right-5 top-4 text-[130px] font-black text-white/10 leading-none select-none">
                03
              </span>

              {/* Content */}
              <div className="relative z-10">
                <div className="w-14 h-14 rounded-full bg-white flex items-center justify-center mb-8 group-hover:rotate-6 transition-transform duration-500">
                  <span className="material-symbols-outlined text-2xl text-vibrant-orange">
                    diversity_3
                  </span>
                </div>

                <h4 className="font-headline-sm text-headline-sm text-white mb-4">
                  Get Involved
                </h4>

                <p className="font-body-md text-body-md text-white/90 leading-relaxed max-w-sm">
                  Join our global community of environmental creators and
                  become part of a movement creating lasting change.
                </p>
              </div>

              {/* CTA Button */}
              <a
                href="/get-involved"
                className="relative z-10 mt-8 inline-flex items-center justify-between w-full px-5 py-3 rounded-full bg-white text-deep-navy font-label-md text-label-md font-semibold hover:bg-deep-navy hover:text-white transition-all duration-300"
              >
                <span>JOIN US</span>

                <span className="material-symbols-outlined text-lg group-hover:translate-x-1 transition-transform">
                  arrow_forward
                </span>
              </a>

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
              <span className="material-symbols-outlined text-lg transition-transform duration-300 group-hover:translate-x-1">
               arrow_forward
              </span>
      
                  </a>
      
                </div>
      
              </div>
      
            </section>


      </main>


      {/* =====================================================
          FOOTER
      ====================================================== */}
      <footer className="w-full py-section-gap px-margin-mobile md:px-margin-desktop flex flex-col md:flex-row justify-between items-start md:items-center gap-base bg-primary text-white border-t border-on-primary-fixed-variant">

        <div className="flex flex-col gap-4">

          <div className="flex items-center gap-3">

            <img
              alt="USEC Logo White"
              className="h-8 w-auto brightness-0 invert"
              src="/usec-navbar-logo.png"
            />

            <span className="font-headline-sm text-headline-sm text-white">
              USEC.org
            </span>

          </div>

          <p className="font-body-md text-body-md text-surface-variant/80 max-w-sm">
            United Safe Environment Creators is dedicated to building sustainable
            futures for vulnerable communities across the globe.
          </p>

        </div>


        <div className="flex flex-col gap-6 items-start md:items-end">

          <nav className="flex flex-wrap gap-x-8 gap-y-4">

            <a
              className="font-label-sm text-label-sm text-surface-variant hover:text-white hover:underline transition-colors"
              href="/privacy-policy"
            >
              Privacy Policy
            </a>

            <a
              className="font-label-sm text-label-sm text-surface-variant hover:text-white hover:underline transition-colors"
              href="/terms-of-service"
            >
              Terms of Service
            </a>

            <a
              className="font-label-sm text-label-sm text-surface-variant hover:text-white hover:underline transition-colors"
              href="/annual-reports"
            >
              Annual Reports
            </a>

            <a
              className="font-label-sm text-label-sm text-surface-variant hover:text-white hover:underline transition-colors"
              href="#"
            >
              Careers
            </a>

          </nav>

          <p className="font-label-sm text-label-sm text-surface-variant/60">
            (c) 2024 United Safe Environment Creators. All Rights Reserved.
          </p>

        </div>

      </footer>


      {/* =====================================================
          IMAGE VIEWER MODAL
      ====================================================== */}
      {selectedImage && (

        <div
          className="fixed inset-0 z-[9999] bg-black/90 flex items-center justify-center px-4 py-6 md:px-10 md:py-10"
          onClick={() => setSelectedImage(null)}
        >
          <div
            className="relative w-full max-w-[90vw] sm:max-w-[80vw] md:max-w-[70vw] lg:max-w-[60vw] rounded-[32px] bg-slate-950/95 p-4 shadow-[0_35px_90px_rgba(0,0,0,0.65)] border border-white/10"
            onClick={(e) => e.stopPropagation()}
          >
            {/* CLOSE BUTTON */}
            <button
              type="button"
              onClick={() => setSelectedImage(null)}
              className="absolute top-4 right-4 z-50 inline-flex h-12 w-12 items-center justify-center rounded-full bg-white text-deep-navy text-3xl shadow-lg transition-colors duration-300 hover:bg-vibrant-orange hover:text-white"
              aria-label="Close image"
            >
                <span className="material-symbols-outlined text-base">close</span>
            </button>

            <img
              src={selectedImage}
              alt="Gallery preview"
              className="block w-full max-h-[80vh] rounded-[28px] object-contain shadow-2xl"
            />
          </div>
        </div>

      )}

    </div>
  )
}

export default GalleryPage
