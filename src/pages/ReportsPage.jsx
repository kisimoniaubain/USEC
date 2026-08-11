import React, { useState } from 'react'
import SiteNavbar from '../components/SiteNavbar'
import contacthero from '../assets/images/contactimo/contact-hero.jpg'
import donateprotect from '../assets/images/Protection-imo/donate-protect.png'


// Curved organic wave SVG for hero bottom section
const WavyBottomDivider = () => (
  <div className="absolute bottom-0 left-0 z-10 w-full overflow-hidden leading-none pointer-events-none">
    <svg
      viewBox="0 0 1200 120"
      preserveAspectRatio="none"
      className="relative block h-16 w-full text-slate-50 md:h-24"
      fill="currentColor"
    >
      <path d="M0,0 C150,90 350,-40 500,65 C650,160 900,10 1200,45 L1200,120 L0,120 Z" />
    </svg>
  </div>
)

const reports = [
  {
    year: '2025',
    category: 'Annual Reports',
    title: 'USEC Annual Impact Report 2025',
    description:
      'A review of USEC programs, achievements, challenges, and impact during 2026.',
    categoryDescription:
      'Explore USEC annual impact reports highlighting our programs, achievements, challenges, and the communities we served.',
    file: '/reports/usec-annual-impact-report-2025.pdf',
  },
  {
    year: '2026',
    category: 'Annual Reports',
    title: 'USEC Annual Impact Report 2026',
    description:
      'A review of USEC programs, achievements, challenges, and impact during 2026.',
    categoryDescription:
      'Explore USEC annual impact reports highlighting our programs, achievements, challenges, and the communities we served.',
    file: '/reports/usec-annual-impact-report-2026.pdf',
  },
  {
    year: '2025',
    category: 'Financial Reports',
    title: 'USEC Financial Report 2025',
    description:
      'Externally audited financial statements for the 2025 reporting period.',
    categoryDescription:
      'View USEC’s externally audited financial statements and financial reporting documents.',
    file: '/reports/usec-financial-report-2025.pdf',
  },
  {
    year: '2026',
    category: 'Financial Reports',
    title: 'USEC Financial Report 2026',
    description:
      'Externally audited financial statements for the 2026 reporting period.',
    categoryDescription:
      'View USEC’s externally audited financial statements and financial reporting documents.',
    file: '/reports/usec-financial-report-2026.pdf',
  },
  {
    year: '2025',
    category: 'Program Reports',
    title: 'USEC Program Report 2025',
    description:
      'A detailed overview of our programs and activities.',
    categoryDescription:
      'Discover reports documenting our programs, activities, community engagement, and progress across our areas of work.',
    file: '/reports/usec-program-report-2025.pdf',
  },
  {
    year: '2026',
    category: 'Program Reports',
    title: 'USEC Program Report 2026',
    description:
      'A detailed overview of our programs and activities.',
    categoryDescription:
      'Discover reports documenting our programs, activities, community engagement, and progress across our areas of work.',
    file: '/reports/usec-program-report-2026.pdf',
  },
]
export default function ReportsPage() {
  const [activeCategory, setActiveCategory] = useState('All')

const categories = [
  'Annual Reports',
  'Financial Reports',
  'Program Reports',
]

  const filteredReports =
    activeCategory === 'All'
      ? reports
      : reports.filter((report) => report.category === activeCategory)

  return (
    <div className="w-full bg-slate-50 font-sans text-slate-700">

      <SiteNavbar activePage="reports" />

      {/* =========================================================
          HERO
      ========================================================= */}

      
      <section className="relative h-[80vh] min-h-[600px] flex items-end overflow-hidden">

        {/* Background */}
        <div className="absolute inset-0 bg-deep-navy">
            

        <img
        src={contacthero}
        alt="USEC reports and publications"
        className="w-full h-full object-cover object-[center_top] opacity-60"
        />

          {/* Overlay */}
          <div className="absolute inset-0 bg-black/60" />

        </div>

        {/* Hero Content */}
        <div className="relative z-20 mx-auto w-full max-w-container-max px-margin-mobile pb-20 text-white md:px-margin-desktop md:pb-24">

          <div className="max-w-4xl">

            <h1 className="font-display-lg text-display-lg-mobile md:text-display-lg max-w-4xl mb-8 border-l-[43px] border-vibrant-orange pl-[30px] leading-tight">
              Our Reports
            </h1>

            <h2 className="mb-5 max-w-3xl font-display-lg text-2xl font-bold leading-tight md:text-3xl lg:text-4xl">
              Transparency, Learning & Impact
            </h2>

            <p className="max-w-2xl font-body-lg text-body-lg leading-relaxed text-white/90">
             We believe transparency and accountability are essential to building trust with the communities, partners, and supporters we serve. Browse our reports and publications to learn more about our work and the impact we are creating together.
            </p>

          </div>

        </div>

        <WavyBottomDivider />

      </section>


{/* =========================================================
    REPORTS & DOCUMENTS
========================================================= */}
<section className="bg-white py-20 md:py-28">

  <div className="mx-auto max-w-container-max px-margin-mobile md:px-margin-desktop">

    {/* =====================================================
        SECTION HEADER
    ===================================================== */}
    <div className="mb-20 max-w-3xl">

      <span className="mb-4 block text-xs font-bold uppercase tracking-[0.2em] text-vibrant-orange">
        Publications
      </span>

      <h2 className="font-display-lg text-4xl font-bold leading-tight text-primary sm:text-5xl md:text-6xl">
        Reports & Documents
      </h2>

      <p className="mt-6 max-w-2xl font-body-lg text-body-lg leading-relaxed text-on-surface-variant">
        Explore USEC's reports, publications, financial statements, and
        other documents that highlight our work, impact, transparency,
        and commitment to the communities we serve.
      </p>

    </div>


    {/* =====================================================
        CATEGORY SECTIONS
    ===================================================== */}
    <div className="space-y-24 md:space-y-32">

      {categories.map((category, categoryIndex) => {

        const categoryReports = reports.filter(
          (report) => report.category === category
        )

        if (categoryReports.length === 0) {
          return null
        }

        return (
          <section
            key={category}
            className="grid grid-cols-1 items-center gap-10 lg:grid-cols-2 lg:gap-16"
          >

            {/* =================================================
                IMAGE
            ================================================= */}
            <div
              className={`overflow-hidden rounded-2xl ${
                categoryIndex % 2 !== 0
                  ? 'lg:order-2'
                  : 'lg:order-1'
              }`}
            >

            <img
            src={contacthero}
            alt={category}
            style={{ height: '300px' }}
            className="block w-full rounded-2xl object-cover transition-transform duration-700 hover:scale-105"
            />

            </div>


            {/* =================================================
                CONTENT
            ================================================= */}
            <div
              className={
                categoryIndex % 2 !== 0
                  ? 'lg:order-1'
                  : 'lg:order-2'
              }
            >

              {/* Category */}
              <span className="mb-4 block text-xs font-bold uppercase tracking-[0.2em] text-vibrant-orange">
                {category}
              </span>


              {/* Heading */}
              <h3 className="font-display-lg text-4xl font-bold leading-[0.95] text-primary sm:text-5xl md:text-6xl">
                {category === 'Financial Reports'
                  ? 'Financial Reports'
                  : category}
              </h3>


              {/* Description */}
              <p className="mt-7 max-w-xl font-body-md text-body-md leading-relaxed text-slate-700">
                {categoryReports[0].categoryDescription ||
                  `Explore our ${category.toLowerCase()} and learn more about USEC's work, progress, and impact.`}
              </p>


              {/* =================================================
                  YEAR / REPORT BUTTONS
              ================================================= */}
              <div className="mt-8 flex flex-wrap gap-2">

                {categoryReports.map((report) => (

                <a
                key={`${report.year}-${report.title}`}
                href={`/report-viewer?file=${encodeURIComponent(report.file)}&title=${encodeURIComponent(report.title)}`}
                target="_blank"
                rel="noopener noreferrer"
                className="group inline-flex items-center gap-2 rounded-md bg-vibrant-orange px-5 py-4 text-sm font-bold text-white transition-all duration-300 hover:bg-primary hover:text-white"
                >
                <span>{report.year}</span>

                <span className="material-symbols-outlined text-lg transition-transform duration-300 group-hover:translate-x-1">
                    arrow_forward
                </span>
                </a> 

                ))}

              </div>

            </div>

          </section>
        )

      })}

    </div>


    {/* =====================================================
        NO REPORTS
    ===================================================== */}
    {reports.length === 0 && (
      <div className="py-20 text-center">

        <span className="material-symbols-outlined text-5xl text-slate-300">
          description
        </span>

        <p className="mt-4 font-body-md text-on-surface-variant">
          No reports are currently available.
        </p>

      </div>
    )}

  </div>

</section>

      {/* =========================================================
          CTA
      ========================================================= */}
      <section className="bg-slate-50 py-20">

        <div className="mx-auto max-w-3xl px-margin-mobile text-center md:px-margin-desktop">

          <h2 className="font-display-lg text-3xl font-bold text-primary md:text-4xl">
            Want to Learn More About Our Work?
          </h2>

          <p className="mt-5 font-body-lg text-body-lg leading-relaxed text-on-surface-variant">
            Connect with our team to learn more about our programs,
            partnerships, reports, and community initiatives.
          </p>

          <div className="mt-8 flex flex-wrap justify-center gap-4">

            <a
              href="/contact"
              className="inline-flex items-center gap-3 rounded-md bg-primary px-7 py-4 text-sm font-bold uppercase tracking-widest text-white transition-all duration-300 hover:bg-vibrant-orange"
            >
              Contact Us

              <span className="transition-transform duration-300 group-hover:translate-x-1">
                →
              </span>
            </a>

            <a
              href="/our-impact"
              className="inline-flex items-center gap-3 rounded-md border-2 border-primary px-7 py-4 text-sm font-bold uppercase tracking-widest text-primary transition-all duration-300 hover:border-vibrant-orange hover:text-vibrant-orange"
            >
              Explore Our Impact

              <span>→</span>
            </a>

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
                      {/* <span className="text-xl">
                        →
                      </span> */}
                    <span className="material-symbols-outlined text-lg transition-transform duration-300 group-hover:translate-x-1">
                      arrow_forward
                    </span>
                    </a>
      
                  </div>
      
                </div>
              </section>

    </div>
  )
}