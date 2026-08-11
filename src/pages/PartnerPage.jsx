import React from "react";
import SiteNavbar from '../components/SiteNavbar'
// Replace these with your actual image imports
import partnersec2 from "../assets/images/partners/partnersec2.jpg";
import partnerhero from "../assets/images/partners/partners-hero.jpeg";
import partnersec6 from "../assets/images/partners/partnersec6.jpg";
import environmentImage from '../assets/images/getinvolved/get-hero.jpg';


import partnerHeroImage from "../assets/images/getinvolved/get-hero.jpg";
import partnershipImage from "../assets/images/getinvolved/get-hero.jpg";
import collaborationImage from "../assets/images/getinvolved/get-hero.jpg";


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

const PartnerPage = () => {
  return (
     <div className="bg-surface text-on-surface font-body-md overflow-x-hidden">
      <SiteNavbar activePage="get-involved" />
    <main>

      {/* =========================================================
          SECTION 1 — HERO
      ========================================================= */}
      <section
        className="relative flex min-h-[75vh] items-center overflow-hidden bg-cover bg-[center_10%]"
        style={{
          backgroundImage: `url(${partnerhero})`,
        }}
      >
        {/* DARK OVERLAY */}
        <div className="absolute inset-0 bg-black/60"></div>

        {/* HERO CONTENT */}
        <div className="relative z-10 mx-auto w-full max-w-container-max px-margin-mobile py-24 md:px-margin-desktop md:py-32">

          <div className="max-w-4xl">

            <span className="mb-6 inline-block border-l-4 border-vibrant-orange pl-5 text-sm font-bold uppercase tracking-[0.25em] text-white">
              Get Involved
            </span>

            <h1 className="mb-6 font-display-lg text-5xl font-bold leading-tight text-white md:text-6xl lg:text-7xl">
              Partner With USEC
            </h1>

            <p className="mb-10 max-w-2xl font-body-lg text-lg leading-relaxed text-white/90 md:text-xl">
              Together, we can strengthen communities, expand opportunities,
              and create lasting change. Partner with USEC to support
              community-led solutions and sustainable development.
            </p>

          <a
            href="/our-impact#our-partners"
            className="inline-flex items-center gap-3 rounded-md border border-vibrant-orange bg-vibrant-orange px-7 py-4 text-sm font-bold uppercase tracking-widest text-white transition-all duration-300 hover:border-white hover:bg-white hover:text-deep-navy"
          >
            Explore Partnerships
            <span>→</span>
          </a>

          </div>

        </div>
          {/* WAVY BOTTOM DIVIDER */}
  <WavyBottomDivider />
      </section>


      {/* =========================================================
          SECTION 2 — WHY PARTNER WITH US
      ========================================================= */}
      <section className="relative overflow-hidden bg-white py-section-gap">

        {/* DECORATIVE SHAPE */}
        <div className="pointer-events-none absolute -left-32 -top-32 h-80 w-80 rounded-full border-[60px] border-vibrant-orange/10"></div>

        <div className="relative z-10 mx-auto max-w-container-max px-margin-mobile md:px-margin-desktop">

          <div className="grid grid-cols-1 items-center gap-12 md:grid-cols-2 md:gap-20">

            {/* CONTENT */}
            <div>

              <span className="mb-4 inline-block text-sm font-bold uppercase tracking-[0.25em] text-vibrant-orange">
                Building Impact Together
              </span>

              <h2 className="mb-6 font-display-lg text-4xl font-bold leading-tight text-deep-navy md:text-5xl">
                Why Partner With USEC?
              </h2>

              <div className="mb-6 h-[3px] w-20 border-b-2 border-dashed border-vibrant-orange"></div>

              <p className="mb-6 font-body-md leading-8 text-gray-600">
                USEC works closely with communities to address challenges,
                strengthen resilience, and create opportunities for vulnerable
                groups. Our community-led approach allows partners to connect
                resources and expertise with real community needs.
              </p>

              <p className="font-body-md leading-8 text-gray-600">
                By partnering with us, you can contribute to meaningful
                initiatives while helping build sustainable solutions that
                create long-term impact.
              </p>

            </div>


            {/* IMAGE */}
            <div className="relative overflow-hidden rounded-xl">

              <img
                src={partnersec2}
                alt="USEC community partnership"
                className="h-[500px] w-full object-cover transition-transform duration-700 hover:scale-105"
              />

              <div className="absolute bottom-0 left-0 h-2 w-full bg-vibrant-orange"></div>

            </div>

          </div>

        </div>
      </section>


      {/* =========================================================
          SECTION 3 — PARTNERSHIP OPPORTUNITIES
      ========================================================= */}
      <section
        id="partnership-opportunities"
        className="relative overflow-hidden bg-cover bg-center py-24 md:py-28"
        style={{
          backgroundImage: `url(${partnerhero})`,
        }}
      >

        {/* DARK OVERLAY */}
        <div className="absolute inset-0 bg-black/70"></div>

        {/* CONTENT */}
        <div className="relative z-10 mx-auto max-w-container-max px-margin-mobile md:px-margin-desktop">

          <h2 className="mb-6 font-display-lg text-4xl text-white md:text-5xl lg:text-6xl">
            Partnership Opportunities
          </h2>

          <p className="mb-12 max-w-2xl font-body-lg text-body-lg text-white/90">
            We welcome partnerships that bring together resources, expertise,
            and shared commitment to creating positive and sustainable change.
          </p>


          {/* CARDS */}
          <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">


            {/* PROGRAM PARTNERSHIPS */}
            <div className="group flex min-h-[350px] flex-col justify-between rounded-xl border border-white/70 bg-black/10 p-8 backdrop-blur-sm transition-all duration-500 hover:border-white hover:bg-white md:p-10">

              <div>

                <div className="mb-7 flex h-14 w-14 items-center justify-center rounded-md bg-vibrant-orange text-white">
                  <span className="material-symbols-outlined">
                    diversity_3
                  </span>
                </div>

                <h3 className="mb-5 font-display-lg text-2xl text-white transition-colors duration-500 group-hover:text-deep-navy md:text-3xl">
                  Program Partnerships
                </h3>

                <p className="font-body-md leading-relaxed text-white/90 transition-colors duration-500 group-hover:text-deep-navy">
                  Collaborate with us to design, support, and implement
                  community programs that respond to local needs and create
                  meaningful impact.
                </p>

              </div>

            </div>


            {/* FUNDING PARTNERSHIPS */}
            <div className="group flex min-h-[350px] flex-col justify-between rounded-xl border border-white/70 bg-black/10 p-8 backdrop-blur-sm transition-all duration-500 hover:border-deep-navy hover:bg-deep-navy md:p-10">

              <div>

                <div className="mb-7 flex h-14 w-14 items-center justify-center rounded-md bg-white text-deep-navy">
                  <span className="material-symbols-outlined">
                    volunteer_activism
                  </span>
                </div>

                <h3 className="mb-5 font-display-lg text-2xl text-white md:text-3xl">
                  Funding Partnerships
                </h3>

                <p className="font-body-md leading-relaxed text-white/90">
                  Support community-led initiatives through grants, financial
                  contributions, and flexible funding that enables sustainable
                  development.
                </p>

              </div>

            </div>


            {/* TECHNICAL PARTNERSHIPS */}
            <div className="group flex min-h-[350px] flex-col justify-between rounded-xl border border-white/70 bg-black/10 p-8 backdrop-blur-sm transition-all duration-500 hover:border-vibrant-orange hover:bg-vibrant-orange md:p-10">

              <div>

                <div className="mb-7 flex h-14 w-14 items-center justify-center rounded-md bg-white text-vibrant-orange">
                  <span className="material-symbols-outlined">
                    engineering
                  </span>
                </div>

                <h3 className="mb-5 font-display-lg text-2xl text-white md:text-3xl">
                  Technical & Skills Support
                </h3>

                <p className="font-body-md leading-relaxed text-white/90">
                  Share technical expertise, professional knowledge, training,
                  and skills that can strengthen our programs and organizational
                  capacity.
                </p>

              </div>

            </div>


            {/* CORPORATE PARTNERSHIPS */}
            <div className="group flex min-h-[350px] flex-col justify-between rounded-xl border border-white/70 bg-black/10 p-8 backdrop-blur-sm transition-all duration-500 hover:border-white hover:bg-white md:p-10">

              <div>

                <div className="mb-7 flex h-14 w-14 items-center justify-center rounded-md bg-vibrant-orange text-white">
                  <span className="material-symbols-outlined">
                    business
                  </span>
                </div>

                <h3 className="mb-5 font-display-lg text-2xl text-white transition-colors duration-500 group-hover:text-deep-navy md:text-3xl">
                  Corporate Partnerships
                </h3>

                <p className="font-body-md leading-relaxed text-white/90 transition-colors duration-500 group-hover:text-deep-navy">
                  Work with USEC through corporate social responsibility,
                  employee engagement, sponsorships, and shared community
                  initiatives.
                </p>

              </div>

            </div>


            {/* RESEARCH PARTNERSHIPS */}
            <div className="group flex min-h-[350px] flex-col justify-between rounded-xl border border-white/70 bg-black/10 p-8 backdrop-blur-sm transition-all duration-500 hover:border-deep-navy hover:bg-deep-navy md:p-10">

              <div>

                <div className="mb-7 flex h-14 w-14 items-center justify-center rounded-md bg-white text-deep-navy">
                  <span className="material-symbols-outlined">
                    science
                  </span>
                </div>

                <h3 className="mb-5 font-display-lg text-2xl text-white md:text-3xl">
                  Research & Knowledge
                </h3>

                <p className="font-body-md leading-relaxed text-white/90">
                  Collaborate on research, learning, documentation, and
                  knowledge-sharing initiatives that strengthen evidence-based
                  community development.
                </p>

              </div>

            </div>


            {/* INSTITUTIONAL PARTNERSHIPS */}
            <div className="group flex min-h-[350px] flex-col justify-between rounded-xl border border-white/70 bg-black/10 p-8 backdrop-blur-sm transition-all duration-500 hover:border-vibrant-orange hover:bg-vibrant-orange md:p-10">

              <div>

                <div className="mb-7 flex h-14 w-14 items-center justify-center rounded-md bg-white text-vibrant-orange">
                  <span className="material-symbols-outlined">
                    account_balance
                  </span>
                </div>

                <h3 className="mb-5 font-display-lg text-2xl text-white md:text-3xl">
                  Institutional Partnerships
                </h3>

                <p className="font-body-md leading-relaxed text-white/90">
                  Build long-term relationships with institutions and
                  organizations that share our commitment to inclusive and
                  sustainable community development.
                </p>

              </div>

            </div>

          </div>

        </div>
      </section>


      {/* =========================================================
          SECTION 4 — WHO WE PARTNER WITH
      ========================================================= */}
      <section className="relative overflow-hidden bg-surface-cream py-section-gap">

        <div className="mx-auto max-w-container-max px-margin-mobile md:px-margin-desktop">

          <div className="mb-14 max-w-3xl">

            <span className="mb-4 inline-block text-sm font-bold uppercase tracking-[0.25em] text-vibrant-orange">
              Stronger Together
            </span>

            <h2 className="mb-6 font-display-lg text-4xl font-bold text-deep-navy md:text-5xl">
              Who We Partner With
            </h2>

            <p className="font-body-lg leading-relaxed text-gray-600">
              We welcome collaboration with organizations and individuals who
              share our commitment to building stronger, safer, and more
              inclusive communities.
            </p>

          </div>


          <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">


            {/* CARD */}
            <div className="group rounded-xl border border-deep-navy/10 bg-white p-8 transition-all duration-500 hover:-translate-y-2 hover:bg-deep-navy hover:shadow-xl">

              <h3 className="mb-4 font-display-lg text-2xl font-bold text-deep-navy transition-colors duration-500 group-hover:text-white">
                NGOs & Civil Society
              </h3>

              <p className="leading-7 text-gray-600 transition-colors duration-500 group-hover:text-white/80">
                Collaborate on community programs, advocacy, capacity building,
                and shared development initiatives.
              </p>

            </div>


            {/* CARD */}
            <div className="group rounded-xl border border-deep-navy/10 bg-white p-8 transition-all duration-500 hover:-translate-y-2 hover:bg-vibrant-orange hover:shadow-xl">

              <h3 className="mb-4 font-display-lg text-2xl font-bold text-deep-navy transition-colors duration-500 group-hover:text-white">
                Donors & Foundations
              </h3>

              <p className="leading-7 text-gray-600 transition-colors duration-500 group-hover:text-white/90">
                Support impactful programs through funding, grants, and
                long-term investment in community-led solutions.
              </p>

            </div>


            {/* CARD */}
            <div className="group rounded-xl border border-deep-navy/10 bg-white p-8 transition-all duration-500 hover:-translate-y-2 hover:bg-deep-navy hover:shadow-xl">

              <h3 className="mb-4 font-display-lg text-2xl font-bold text-deep-navy transition-colors duration-500 group-hover:text-white">
                Private Sector
              </h3>

              <p className="leading-7 text-gray-600 transition-colors duration-500 group-hover:text-white/80">
                Create shared value through corporate partnerships, skills,
                sponsorships, and community investment.
              </p>

            </div>


            {/* CARD */}
            <div className="group rounded-xl border border-deep-navy/10 bg-white p-8 transition-all duration-500 hover:-translate-y-2 hover:bg-vibrant-orange hover:shadow-xl">

              <h3 className="mb-4 font-display-lg text-2xl font-bold text-deep-navy transition-colors duration-500 group-hover:text-white">
                Schools & Universities
              </h3>

              <p className="leading-7 text-gray-600 transition-colors duration-500 group-hover:text-white/90">
                Work together on education, research, learning, student
                engagement, and knowledge exchange.
              </p>

            </div>


            {/* CARD */}
            <div className="group rounded-xl border border-deep-navy/10 bg-white p-8 transition-all duration-500 hover:-translate-y-2 hover:bg-deep-navy hover:shadow-xl">

              <h3 className="mb-4 font-display-lg text-2xl font-bold text-deep-navy transition-colors duration-500 group-hover:text-white">
                Government Institutions
              </h3>

              <p className="leading-7 text-gray-600 transition-colors duration-500 group-hover:text-white/80">
                Support coordinated approaches that strengthen community
                services and sustainable development.
              </p>

            </div>


            {/* CARD */}
            <div className="group rounded-xl border border-deep-navy/10 bg-white p-8 transition-all duration-500 hover:-translate-y-2 hover:bg-vibrant-orange hover:shadow-xl">

              <h3 className="mb-4 font-display-lg text-2xl font-bold text-deep-navy transition-colors duration-500 group-hover:text-white">
                International Organizations
              </h3>

              <p className="leading-7 text-gray-600 transition-colors duration-500 group-hover:text-white/90">
                Build strategic relationships that strengthen humanitarian,
                development, and community-led initiatives.
              </p>

            </div>

          </div>

        </div>
      </section>


      {/* =========================================================
          SECTION 5 — HOW PARTNERSHIPS WORK
      ========================================================= */}
      <section className="relative overflow-hidden bg-white py-section-gap">

        <div className="mx-auto max-w-container-max px-margin-mobile md:px-margin-desktop">

          <div className="mb-14 text-center">

            <span className="mb-4 inline-block text-sm font-bold uppercase tracking-[0.25em] text-vibrant-orange">
              Our Approach
            </span>

            <h2 className="mb-6 font-display-lg text-4xl font-bold text-deep-navy md:text-5xl">
              How Partnerships Work
            </h2>

            <p className="mx-auto max-w-2xl font-body-lg leading-relaxed text-gray-600">
              We believe strong partnerships are built on shared values,
              mutual trust, and a common commitment to creating positive impact.
            </p>

          </div>


          <div className="grid grid-cols-1 gap-8 md:grid-cols-4">


            {/* STEP 1 */}
            <div className="relative text-center">

              <div className="mx-auto mb-6 flex h-16 w-16 items-center justify-center rounded-full bg-vibrant-orange text-2xl font-bold text-white">
                01
              </div>

              <h3 className="mb-4 text-xl font-bold text-deep-navy">
                Connect
              </h3>

              <p className="leading-7 text-gray-600">
                Reach out to our team and share your interests, goals, and
                areas where you would like to collaborate.
              </p>

            </div>


            {/* STEP 2 */}
            <div className="relative text-center">

              <div className="mx-auto mb-6 flex h-16 w-16 items-center justify-center rounded-full bg-deep-navy text-2xl font-bold text-white">
                02
              </div>

              <h3 className="mb-4 text-xl font-bold text-deep-navy">
                Discuss
              </h3>

              <p className="leading-7 text-gray-600">
                We explore shared priorities, opportunities, and practical ways
                to work together.
              </p>

            </div>


            {/* STEP 3 */}
            <div className="relative text-center">

              <div className="mx-auto mb-6 flex h-16 w-16 items-center justify-center rounded-full bg-vibrant-orange text-2xl font-bold text-white">
                03
              </div>

              <h3 className="mb-4 text-xl font-bold text-deep-navy">
                Collaborate
              </h3>

              <p className="leading-7 text-gray-600">
                We develop a partnership approach that brings together
                resources, expertise, and shared responsibilities.
              </p>

            </div>


            {/* STEP 4 */}
            <div className="relative text-center">

              <div className="mx-auto mb-6 flex h-16 w-16 items-center justify-center rounded-full bg-deep-navy text-2xl font-bold text-white">
                04
              </div>

              <h3 className="mb-4 text-xl font-bold text-deep-navy">
                Create Impact
              </h3>

              <p className="leading-7 text-gray-600">
                Together, we implement initiatives that create meaningful and
                sustainable outcomes for communities.
              </p>

            </div>

          </div>

        </div>
      </section>


      {/* =========================================================
          SECTION 6 — AREAS FOR COLLABORATION
      ========================================================= */}
      <section className="bg-surface-cream py-section-gap">

        <div className="mx-auto max-w-container-max px-margin-mobile md:px-margin-desktop">

          <div className="grid grid-cols-1 items-center gap-12 md:grid-cols-2 md:gap-20">

            {/* IMAGE */}
            <div className="relative overflow-hidden rounded-xl">

              <img
                src={partnersec6}
                alt="Community collaboration"
                className="h-[550px] w-full object-cover transition-transform duration-700 hover:scale-105"
              />

              <div className="absolute bottom-0 left-0 h-2 w-full bg-vibrant-orange"></div>

            </div>


            {/* CONTENT */}
            <div>

              <span className="mb-4 inline-block text-sm font-bold uppercase tracking-[0.25em] text-vibrant-orange">
                Shared Priorities
              </span>

              <h2 className="mb-6 font-display-lg text-4xl font-bold text-deep-navy md:text-5xl">
                Areas for Collaboration
              </h2>

              <p className="mb-8 font-body-md leading-8 text-gray-600">
                We welcome partnerships that support our work across key areas
                of community development and protection.
              </p>


              <ul className="space-y-4">

                <li className="flex items-center gap-4">
                  <span className="flex h-8 w-8 items-center justify-center rounded-md bg-vibrant-orange text-white">
                    ✓
                  </span>
                  <span className="font-semibold text-deep-navy">
                    Education & Early Learning
                  </span>
                </li>

                <li className="flex items-center gap-4">
                  <span className="flex h-8 w-8 items-center justify-center rounded-md bg-deep-navy text-white">
                    ✓
                  </span>
                  <span className="font-semibold text-deep-navy">
                    Livelihoods & Economic Empowerment
                  </span>
                </li>

                <li className="flex items-center gap-4">
                  <span className="flex h-8 w-8 items-center justify-center rounded-md bg-vibrant-orange text-white">
                    ✓
                  </span>
                  <span className="font-semibold text-deep-navy">
                    Protection & GBV Prevention
                  </span>
                </li>

                <li className="flex items-center gap-4">
                  <span className="flex h-8 w-8 items-center justify-center rounded-md bg-deep-navy text-white">
                    ✓
                  </span>
                  <span className="font-semibold text-deep-navy">
                    Youth Development
                  </span>
                </li>

                <li className="flex items-center gap-4">
                  <span className="flex h-8 w-8 items-center justify-center rounded-md bg-vibrant-orange text-white">
                    ✓
                  </span>
                  <span className="font-semibold text-deep-navy">
                    Environmental Sustainability
                  </span>
                </li>

              </ul>

            </div>

          </div>

        </div>
      </section>


      {/* =========================================================
          SECTION 7 — VOLUNTEER CONTACT
      ========================================================= */}
            <section
              className="relative overflow-hidden bg-cover bg-center py-24 md:py-28"
              style={{
                backgroundImage: `url(${environmentImage})`,
              }}
            >
              {/* DARK OVERLAY */}
              <div className="absolute inset-0 bg-black/70"></div>

              {/* CONTENT */}
              <div className="relative z-10 mx-auto max-w-container-max px-margin-mobile md:px-margin-desktop">

                <div className="grid grid-cols-1 items-center gap-10 md:grid-cols-2">

                  {/* LEFT CONTENT */}
                  <div className="max-w-2xl">

                    <span className="mb-4 inline-block text-sm font-bold uppercase tracking-[0.25em] text-vibrant-orange">
                      Start a Partnership
                    </span>

                    <h2 className="mb-5 font-display-lg text-3xl font-bold leading-tight text-white md:text-4xl lg:text-5xl">
                      Interested in Partnering With USEC?
                    </h2>

                    <p className="max-w-xl text-base leading-7 text-white/80 md:text-lg">
                  Contact our team to discuss partnership opportunities and
                  explore how we can work together to strengthen communities
                  and create sustainable impact.
                    </p>

                  </div>

                  {/* RIGHT BUTTON */}
                  <div className="md:text-right">

                    <a
                      href="/contact"
                      className="inline-flex items-center gap-3 rounded-md border-2 border-white bg-white px-7 py-4 text-sm font-bold uppercase tracking-widest text-primary transition-all duration-300 hover:border-white hover:bg-transparent hover:text-white"
                    >
                      Contact Us

                      <span className="material-symbols-outlined text-lg transition-transform duration-300 group-hover:translate-x-1">
                       arrow_forward
                      </span>
                    </a>

                  </div>

                </div>

              </div>
            </section>

    </main>
    </div>
  );
};

export default PartnerPage;