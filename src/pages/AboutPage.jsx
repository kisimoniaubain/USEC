import SiteNavbar from "../components/SiteNavbar";

import AboutHero from "../assets/images/aboutimages/About-hero.png";
import mission from "../assets/images/aboutimages/m,v,g.jpg";
import tiba from "../assets/images/aboutimages/Tiba.png";
import robert from "../assets/images/aboutimages/Robert.png";
import kabulo from "../assets/images/aboutimages/Kabulo.jpg";
import donateprotect from "../assets/images/Protection-imo/donate-protect.png";

const AboutPage = () => {

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

        <div className="pointer-events-none absolute -bottom-10 -right-10 h-72 w-72 rounded-full border-[55px] border-vibrant-orange/80"></div>

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
          OUR JOURNEY
      ========================================================= */}
      <section className="overflow-hidden bg-primary py-section-gap text-white">

        <div className="mx-auto max-w-container-max px-margin-mobile md:px-margin-desktop">

          <div className="mb-16">

            <span className="mb-4 block font-label-md text-label-md uppercase tracking-widest text-vibrant-orange">
              Our Journey
            </span>

            <h2 className="font-display-lg text-display-lg-mobile md:text-display-lg">
              Two Decades of Impact
            </h2>

          </div>


          <div className="relative">

            <div className="absolute left-0 top-0 h-full w-px bg-on-primary-fixed-variant opacity-30 md:left-1/2 md:-translate-x-1/2"></div>

            <div className="space-y-16">

              {/* 2004 */}
              <div className="relative flex flex-col md:flex-row md:items-center">

                <div className="text-left md:w-1/2 md:pr-12 md:text-right">

                  <span className="mb-2 block font-headline-md text-headline-md text-vibrant-orange">
                    2004
                  </span>

                  <h4 className="mb-4 font-headline-sm text-headline-sm">
                    The Foundation
                  </h4>

                  <p className="font-body-md text-on-primary-container">
                    USEC was founded in response to environmental displacements,
                    beginning as a small grassroots team of environmental
                    engineers and social workers.
                  </p>

                </div>

                <div className="absolute left-[-4px] h-3 w-3 rounded-full border-4 border-primary bg-vibrant-orange md:left-1/2 md:-translate-x-1/2"></div>

                <div className="md:w-1/2"></div>

              </div>


              {/* 2012 */}
              <div className="relative flex flex-col md:flex-row md:items-center">

                <div className="order-2 md:order-1 md:w-1/2"></div>

                <div className="absolute left-[-4px] h-3 w-3 rounded-full border-4 border-primary bg-vibrant-orange md:left-1/2 md:-translate-x-1/2"></div>

                <div className="order-1 md:order-2 md:w-1/2 md:pl-12">

                  <span className="mb-2 block font-headline-md text-headline-md text-vibrant-orange">
                    2012
                  </span>

                  <h4 className="mb-4 font-headline-sm text-headline-sm">
                    Continental Expansion
                  </h4>

                  <p className="font-body-md text-on-primary-container">
                    Our programs expanded to East Africa and Central America,
                    focusing on sustainable water sanitation and refugee
                    environment safety protocols.
                  </p>

                </div>

              </div>


              {/* 2024 */}
              <div className="relative flex flex-col md:flex-row md:items-center">

                <div className="text-left md:w-1/2 md:pr-12 md:text-right">

                  <span className="mb-2 block font-headline-md text-headline-md text-vibrant-orange">
                    2024
                  </span>

                  <h4 className="mb-4 font-headline-sm text-headline-sm">
                    The Modern Era
                  </h4>

                  <p className="font-body-md text-on-primary-container">
                    Today, USEC leverages advanced technology and local
                    leadership to manage impactful projects serving vulnerable
                    communities.
                  </p>

                </div>

                <div className="absolute left-[-4px] h-3 w-3 rounded-full border-4 border-primary bg-vibrant-orange md:left-1/2 md:-translate-x-1/2"></div>

                <div className="md:w-1/2"></div>

              </div>

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
                  alt="Tiba Kakozi"
                />

                <div className="absolute bottom-4 left-4 right-4 translate-y-full bg-white p-4 transition-transform duration-300 group-hover:translate-y-0">

                  <p className="font-label-sm text-label-sm uppercase text-on-surface-variant">
                    Program Coordinator
                  </p>

                  <h4 className="font-headline-sm text-headline-sm text-deep-navy">
                    Tiba Kakozi
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