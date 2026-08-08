import React from "react";
import SiteNavbar from '../components/SiteNavbar'
// Replace these with your actual image imports
import volunteerHeroImage from '../assets/images/getinvolved/get-hero.jpg';
import communityImage from '../assets/images/getinvolved/get-hero.jpg';
import educationImage from '../assets/images/getinvolved/get-hero.jpg';
import environmentImage from '../assets/images/getinvolved/get-hero.jpg';
import youthImage from '../assets/images/getinvolved/get-hero.jpg';


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

const Volunteer = () => {
  return (
    <div className="bg-surface text-on-surface font-body-md overflow-x-hidden">
      <SiteNavbar activePage="get-involved" />
    <main>

      {/* =========================================================
          SECTION 1 — HERO
      ========================================================= */}
      <section
        className="relative flex min-h-[75vh] items-center overflow-hidden bg-cover bg-center"
        style={{
          backgroundImage: `url(${volunteerHeroImage})`,
        }}
      >
        {/* DARK OVERLAY */}
        <div className="absolute inset-0 bg-black/60"></div>
        {/* <div className="absolute inset-0 bg-black/60"></div> */}

        {/* HERO CONTENT */}
        <div className="relative z-10 mx-auto w-full max-w-container-max px-margin-mobile py-24 md:px-margin-desktop md:py-32">

          <div className="max-w-4xl">

            <span className="mb-6 inline-block border-l-4 border-vibrant-orange pl-5 text-sm font-bold uppercase tracking-[0.25em] text-white">
              Get Involved
            </span>

            <h1 className="mb-6 font-display-lg text-5xl font-bold leading-tight text-white md:text-6xl lg:text-7xl">
              Volunteer With USEC
            </h1>

            <p className="mb-10 max-w-2xl font-body-lg text-lg leading-relaxed text-white/90 md:text-xl">
              Your time, skills, and passion can help us create safer,
              stronger, and more inclusive communities. Join USEC and become
              part of a movement creating meaningful change.
            </p>

            <a
              href="#volunteer-opportunities"
              className="inline-flex items-center gap-3 rounded-md border border-vibrant-orange bg-vibrant-orange px-7 py-4 text-sm font-bold uppercase tracking-widest text-white transition-all duration-300 hover:border-white hover:bg-white hover:text-deep-navy"
            >
              Explore Opportunities
              <span className="transition-transform duration-300 hover:translate-x-1">
                →
              </span>
            </a>

          </div>

        </div>
          {/* WAVY BOTTOM DIVIDER */}
  <WavyBottomDivider />
      </section>


      {/* =========================================================
          SECTION 2 — WHY VOLUNTEER WITH US
      ========================================================= */}
      <section className="relative overflow-hidden bg-white py-section-gap">

        {/* DECORATIVE SHAPE */}
        <div className="pointer-events-none absolute -right-32 -top-32 h-80 w-80 rounded-full border-[60px] border-vibrant-orange/10"></div>

        <div className="relative z-10 mx-auto max-w-container-max px-margin-mobile md:px-margin-desktop">

          <div className="grid grid-cols-1 items-center gap-12 md:grid-cols-2 md:gap-20">

            {/* IMAGE */}
            <div className="relative overflow-hidden rounded-xl">
              <img
                src={communityImage}
                alt="Community volunteers working together"
                className="h-[500px] w-full object-cover transition-transform duration-700 hover:scale-105"
              />

              <div className="absolute bottom-0 left-0 h-2 w-full bg-vibrant-orange"></div>
            </div>


            {/* CONTENT */}
            <div>

              <span className="mb-4 inline-block text-sm font-bold uppercase tracking-[0.25em] text-vibrant-orange">
                Make A Difference
              </span>

              <h2 className="mb-6 font-display-lg text-4xl font-bold leading-tight text-deep-navy md:text-5xl">
                Why Volunteer With Us?
              </h2>

              <div className="mb-6 h-[3px] w-20 border-b-2 border-dashed border-vibrant-orange"></div>

              <p className="mb-6 font-body-md leading-8 text-gray-600">
                At USEC, volunteers are an important part of our community-led
                approach. By sharing your time, knowledge, and skills, you can
                contribute to programs that support vulnerable communities and
                promote sustainable development.
              </p>

              <p className="mb-8 font-body-md leading-8 text-gray-600">
                Whether you are a student, professional, community member, or
                someone looking for a meaningful way to contribute, there is
                an opportunity for you to get involved.
              </p>

              <a
                href="#volunteer-opportunities"
                className="inline-flex items-center gap-3 rounded-md border border-deep-navy px-6 py-3 text-sm font-bold uppercase tracking-widest text-deep-navy transition-all duration-300 hover:border-vibrant-orange hover:bg-vibrant-orange hover:text-white"
              >
                Find Your Opportunity
                <span>→</span>
              </a>

            </div>

          </div>

        </div>
      </section>


      {/* =========================================================
          SECTION 3 — VOLUNTEER OPPORTUNITIES
      ========================================================= */}
      <section
        id="volunteer-opportunities"
        className="relative overflow-hidden bg-cover bg-center py-24 md:py-28"
        style={{
          backgroundImage: `url(${educationImage})`,
        }}
      >

        {/* DARK OVERLAY */}
        <div className="absolute inset-0 bg-black/60"></div>

        {/* CONTENT */}
        <div className="relative z-10 mx-auto max-w-container-max px-margin-mobile md:px-margin-desktop">

          <h2 className="mb-6 font-display-lg text-4xl text-white md:text-5xl lg:text-6xl">
            Ways You Can Volunteer
          </h2>

          <p className="mb-12 max-w-2xl font-body-lg text-body-lg text-white/90">
            There are many ways to contribute your time and skills. Find an
            opportunity that matches your interests and experience.
          </p>


          {/* CARDS */}
          <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-4">


            {/* CARD 1 */}
            <div className="group flex min-h-[360px] flex-col justify-between rounded-xl border border-white/70 bg-black/10 p-8 backdrop-blur-sm transition-all duration-500 hover:border-white hover:bg-white md:p-8">

              <div>

                <div className="mb-7 flex h-14 w-14 items-center justify-center rounded-md bg-vibrant-orange text-2xl text-white">
                  <span className="material-symbols-outlined">
                    groups
                  </span>
                </div>

                <h3 className="mb-5 font-display-lg text-2xl text-white transition-colors duration-500 group-hover:text-deep-navy">
                  Community Outreach
                </h3>

                <p className="font-body-md leading-relaxed text-white/90 transition-colors duration-500 group-hover:text-deep-navy">
                  Support community activities, outreach events, awareness
                  campaigns, and initiatives that bring people together.
                </p>

              </div>

            </div>


            {/* CARD 2 */}
            <div className="group flex min-h-[360px] flex-col justify-between rounded-xl border border-white/70 bg-black/10 p-8 backdrop-blur-sm transition-all duration-500 hover:border-deep-navy hover:bg-deep-navy md:p-8">

              <div>

                <div className="mb-7 flex h-14 w-14 items-center justify-center rounded-md bg-white text-2xl text-deep-navy">
                  <span className="material-symbols-outlined">
                    school
                  </span>
                </div>

                <h3 className="mb-5 font-display-lg text-2xl text-white transition-colors duration-500">
                  Education Support
                </h3>

                <p className="font-body-md leading-relaxed text-white/90 transition-colors duration-500">
                  Help support learning activities, educational programs, and
                  initiatives that create better opportunities for children
                  and young people.
                </p>

              </div>

            </div>


            {/* CARD 3 */}
            <div className="group flex min-h-[360px] flex-col justify-between rounded-xl border border-white/70 bg-black/10 p-8 backdrop-blur-sm transition-all duration-500 hover:border-vibrant-orange hover:bg-vibrant-orange md:p-8">

              <div>

                <div className="mb-7 flex h-14 w-14 items-center justify-center rounded-md bg-white text-2xl text-vibrant-orange">
                  <span className="material-symbols-outlined">
                    park
                  </span>
                </div>

                <h3 className="mb-5 font-display-lg text-2xl text-white transition-colors duration-500">
                  Environment
                </h3>

                <p className="font-body-md leading-relaxed text-white/90 transition-colors duration-500">
                  Participate in tree planting, environmental awareness, and
                  community activities that promote a healthier environment.
                </p>

              </div>

            </div>


            {/* CARD 4 */}
            <div className="group flex min-h-[360px] flex-col justify-between rounded-xl border border-white/70 bg-black/10 p-8 backdrop-blur-sm transition-all duration-500 hover:border-white hover:bg-white md:p-8">

              <div>

                <div className="mb-7 flex h-14 w-14 items-center justify-center rounded-md bg-vibrant-orange text-2xl text-white">
                  <span className="material-symbols-outlined">
                    diversity_3
                  </span>
                </div>

                <h3 className="mb-5 font-display-lg text-2xl text-white transition-colors duration-500 group-hover:text-deep-navy">
                  Youth Programs
                </h3>

                <p className="font-body-md leading-relaxed text-white/90 transition-colors duration-500 group-hover:text-deep-navy">
                  Support youth-focused activities that encourage leadership,
                  creativity, inclusion, and positive community participation.
                </p>

              </div>

            </div>

          </div>

        </div>
      </section>


      {/* =========================================================
          SECTION 4 — WHO CAN VOLUNTEER
      ========================================================= */}
      <section className="relative overflow-hidden bg-surface-cream py-section-gap">

        <div className="mx-auto max-w-container-max px-margin-mobile md:px-margin-desktop">

          {/* HEADER */}
          <div className="mb-14 max-w-3xl">

            <span className="mb-4 inline-block text-sm font-bold uppercase tracking-[0.25em] text-vibrant-orange">
              Everyone Has Something To Give
            </span>

            <h2 className="mb-6 font-display-lg text-4xl font-bold text-deep-navy md:text-5xl">
              Who Can Volunteer?
            </h2>

            <p className="font-body-lg leading-relaxed text-gray-600">
              We welcome people from different backgrounds, experiences, and
              skill sets. What matters most is your willingness to contribute
              and make a positive difference.
            </p>

          </div>


          {/* GRID */}
          <div className="grid grid-cols-1 gap-6 md:grid-cols-3">


            {/* STUDENTS */}
            <div className="group rounded-xl border border-deep-navy/10 bg-white p-8 transition-all duration-500 hover:-translate-y-2 hover:bg-deep-navy hover:shadow-xl">

              <h3 className="mb-4 font-display-lg text-2xl font-bold text-deep-navy transition-colors duration-500 group-hover:text-white">
                Students & Young People
              </h3>

              <p className="leading-7 text-gray-600 transition-colors duration-500 group-hover:text-white/80">
                Gain practical experience, develop new skills, and contribute
                your energy and creativity to community initiatives.
              </p>

            </div>


            {/* PROFESSIONALS */}
            <div className="group rounded-xl border border-deep-navy/10 bg-white p-8 transition-all duration-500 hover:-translate-y-2 hover:bg-vibrant-orange hover:shadow-xl">

              <h3 className="mb-4 font-display-lg text-2xl font-bold text-deep-navy transition-colors duration-500 group-hover:text-white">
                Professionals
              </h3>

              <p className="leading-7 text-gray-600 transition-colors duration-500 group-hover:text-white/90">
                Share your professional expertise, technical knowledge, and
                experience to strengthen community programs and initiatives.
              </p>

            </div>


            {/* COMMUNITY */}
            <div className="group rounded-xl border border-deep-navy/10 bg-white p-8 transition-all duration-500 hover:-translate-y-2 hover:bg-deep-navy hover:shadow-xl">

              <h3 className="mb-4 font-display-lg text-2xl font-bold text-deep-navy transition-colors duration-500 group-hover:text-white">
                Community Members
              </h3>

              <p className="leading-7 text-gray-600 transition-colors duration-500 group-hover:text-white/80">
                Get involved in activities that directly support your community
                and help build stronger, more inclusive neighborhoods.
              </p>

            </div>

          </div>

        </div>
      </section>


      {/* =========================================================
          SECTION 5 — WHAT TO EXPECT
      ========================================================= */}
      <section className="relative overflow-hidden bg-white py-section-gap">

        <div className="mx-auto max-w-container-max px-margin-mobile md:px-margin-desktop">

          <div className="grid grid-cols-1 items-center gap-12 md:grid-cols-2 md:gap-20">

            {/* CONTENT */}
            <div>

              <span className="mb-4 inline-block text-sm font-bold uppercase tracking-[0.25em] text-vibrant-orange">
                Your Volunteer Experience
              </span>

              <h2 className="mb-6 font-display-lg text-4xl font-bold leading-tight text-deep-navy md:text-5xl">
                What You Can Expect
              </h2>

              <p className="mb-8 font-body-md leading-8 text-gray-600">
                Volunteering with USEC is an opportunity to learn, contribute,
                and connect with people who are working toward a better future.
              </p>


              <div className="space-y-6">

                <div className="flex gap-5">

                  <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-md bg-vibrant-orange text-white">
                    ✓
                  </div>

                  <div>
                    <h3 className="mb-2 font-bold text-deep-navy">
                      Meaningful Contribution
                    </h3>

                    <p className="text-gray-600">
                      Use your time and skills to support initiatives that
                      create positive community impact.
                    </p>
                  </div>

                </div>


                <div className="flex gap-5">

                  <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-md bg-deep-navy text-white">
                    ✓
                  </div>

                  <div>
                    <h3 className="mb-2 font-bold text-deep-navy">
                      Learn & Grow
                    </h3>

                    <p className="text-gray-600">
                      Gain new experiences and develop skills through practical
                      involvement in community programs.
                    </p>
                  </div>

                </div>


                <div className="flex gap-5">

                  <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-md bg-vibrant-orange text-white">
                    ✓
                  </div>

                  <div>
                    <h3 className="mb-2 font-bold text-deep-navy">
                      Be Part of a Community
                    </h3>

                    <p className="text-gray-600">
                      Work alongside passionate people who are committed to
                      creating meaningful and sustainable change.
                    </p>
                  </div>

                </div>

              </div>

            </div>


            {/* IMAGE */}
            <div className="relative overflow-hidden rounded-xl">

              <img
                src={youthImage}
                alt="Volunteers supporting young people"
                className="h-[550px] w-full object-cover transition-transform duration-700 hover:scale-105"
              />

              <div className="absolute bottom-0 left-0 h-2 w-full bg-vibrant-orange"></div>

            </div>

          </div>

        </div>
      </section>


      {/* =========================================================
          SECTION 6 — CALL TO ACTION
      ========================================================= */}
      <section
        className="relative overflow-hidden bg-cover bg-center py-24 md:py-28"
        style={{
          backgroundImage: `url(${environmentImage})`,
        }}
      >

        {/* DARK OVERLAY */}
        <div className="absolute inset-0 bg-deep-navy/80"></div>

        {/* CONTENT */}
        <div className="relative z-10 mx-auto max-w-container-max px-margin-mobile text-center md:px-margin-desktop">

          <h2 className="mb-6 font-display-lg text-4xl text-white md:text-5xl lg:text-6xl">
            Ready to Make a Difference?
          </h2>

          <p className="mx-auto mb-10 max-w-2xl font-body-lg leading-relaxed text-white/90">
            Join us as a volunteer and become part of the work to create safer,
            stronger, and more inclusive communities.
          </p>

          <a
            href="/contact"
            className="inline-flex items-center gap-3 rounded-md border border-vibrant-orange bg-vibrant-orange px-7 py-4 text-sm font-bold uppercase tracking-widest text-white transition-all duration-300 hover:border-white hover:bg-white hover:text-deep-navy"
          >
            Get Started
            <span>→</span>
          </a>

        </div>

      </section>


      {/* =========================================================
          SECTION 7 — VOLUNTEER CONTACT
      ========================================================= */}
      <section className="bg-surface-cream py-16">

        <div className="mx-auto max-w-container-max px-margin-mobile md:px-margin-desktop">

          <div className="rounded-xl bg-white p-8 shadow-xl md:p-12">

            <div className="grid grid-cols-1 items-center gap-8 md:grid-cols-2">

              <div>

                <span className="mb-4 inline-block text-sm font-bold uppercase tracking-[0.25em] text-vibrant-orange">
                  Start Your Journey
                </span>

                <h2 className="mb-5 font-display-lg text-3xl font-bold text-deep-navy md:text-4xl">
                  Interested in Volunteering?
                </h2>

                <p className="leading-7 text-gray-600">
                  Contact our team to learn more about current volunteer
                  opportunities and how you can get involved with USEC.
                </p>

              </div>


              <div className="md:text-right">

                <a
                  href="/contact"
                  className="inline-flex items-center gap-3 rounded-md border border-deep-navy bg-deep-navy px-7 py-4 text-sm font-bold uppercase tracking-widest text-white transition-all duration-300 hover:border-vibrant-orange hover:bg-vibrant-orange"
                >
                  Contact Us
                  <span>→</span>
                </a>

              </div>

            </div>

          </div>

        </div>

      </section>

    </main>
    </div>
  );
};

export default Volunteer;