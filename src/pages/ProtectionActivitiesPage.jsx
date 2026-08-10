import SiteNavbar from '../components/SiteNavbar'
import useWhoWeAreReveal from '../hooks/useWhoWeAreReveal'
import protectHero from '../assets/images/Protection-imo/protection-hero.jpg'
import protect1 from '../assets/images/Protection-imo/protect1.png'
import latifa from '../assets/images/Protection-imo/hero2.png'
import donateprotect from '../assets/images/Protection-imo/donate-protect.png'


function ProtectionActivitiesPage() {
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

  return (
    <div className="bg-background text-on-background font-body-md overflow-x-hidden">
      <SiteNavbar activePage="programs" />

      <main className="pt-20">
         <section
                  id="who-we-are"
                  className="relative h-[70vh] flex items-end overflow-hidden"
                >
                  {/* Background Image */}
                  <div className="absolute inset-0 bg-deep-navy">
                    <img
                      src={protectHero}
                      alt="About USEC Hero"
                      className="w-full h-full object-cover opacity-60"
                    />
        
                    {/* Bottom Gradient Overlay */}
                    <div className="absolute inset-0 bg-black/60"></div>
                  </div>
        
                  {/* Content */}
                  <div className="relative z-10 w-full max-w-container-max mx-auto px-margin-mobile md:px-margin-desktop pb-24 text-white">
                    <h1 className="font-display-lg text-display-lg-mobile md:text-display-lg max-w-3xl mb-14 border-l-[43px] border-vibrant-orange pb-[10px] pl-[30px]">
                      Protection Activities
                    </h1>
        
                    <span className="block font-display-lg font-bold text-2xl md:text-3xl lg:text-4xl text-white leading-tight mb-4 max-w-3xl">
                      Protecting the Most Vulnerable
                    </span>
        
                    <p className="font-body-lg text-body-lg max-w-2xl text-white/90 leading-relaxed">
                     At USEC, our Child Protection Framework is more than a policy. It is a sacred promise to every child in the communities we serve. We build environments where safety is the standard, not a privilege.
                    </p>
                  </div>
                  <WavyBottomDivider />
                </section>
















          <section className="relative bg-[#f5f1e8] py-24 md:py-32 overflow-hidden">

            {/* Decorative Background */}
            <div className="absolute -top-32 -right-32 w-[450px] h-[450px] rounded-full border-[70px] border-vibrant-orange/10" />

            <div className="relative z-10 max-w-container-max mx-auto px-margin-mobile md:px-margin-desktop">

              {/* SECTION HEADER */}
              <div className="max-w-3xl mx-auto text-center mb-16 md:mb-20">

                <span className="block text-vibrant-orange font-bold uppercase tracking-[0.25em] text-sm mb-5">
                  Protection
                </span>

                <h2 className="font-display-lg font-bold text-deep-navy text-4xl md:text-5xl lg:text-6xl leading-tight mb-6">
                  Prevention & Awareness
                </h2>

                <div className="w-20 h-1.5 bg-vibrant-orange mx-auto mb-8" />

                <p className="font-body-lg text-lg text-deep-navy/70 leading-relaxed">
                  We reduce harm before it happens by building community awareness,
                  strengthening protective behaviors, and promoting safer environments
                  for children, girls, and families.
                </p>

              </div>


              {/* CARDS */}
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">


                {/* ============================= */}
                {/* CARD 01 — COMMUNITY AWARENESS */}
                {/* ============================= */}
                <div className="group flex flex-col bg-white rounded-2xl p-8 shadow-lg hover:shadow-2xl transition-all duration-500 hover:-translate-y-2">

                  {/* Number */}
                  <div className="w-14 h-14 rounded-full bg-vibrant-orange text-white flex items-center justify-center font-bold text-lg mb-8">
                    01
                  </div>

                  <span className="text-vibrant-orange text-xs font-bold uppercase tracking-widest">
                    Prevention
                  </span>

                  <h3 className="font-display-lg font-bold text-deep-navy text-2xl md:text-3xl mt-3 mb-5">
                    Community Awareness
                  </h3>

                  <p className="text-deep-navy/65 leading-relaxed mb-7">
                    We lead practical awareness efforts that help communities
                    recognize, prevent, and respond to protection risks early.
                  </p>

                  <ul className="space-y-3 border-t border-deep-navy/10 pt-6 mt-auto">

                    <li className="flex items-start gap-3 text-sm text-deep-navy/70">
                      <span className="text-vibrant-orange font-bold">•</span>
                      Violence prevention and safeguarding awareness
                    </li>

                    <li className="flex items-start gap-3 text-sm text-deep-navy/70">
                      <span className="text-vibrant-orange font-bold">•</span>
                      School and community sensitization
                    </li>

                    <li className="flex items-start gap-3 text-sm text-deep-navy/70">
                      <span className="text-vibrant-orange font-bold">•</span>
                      Rights awareness and safe reporting information
                    </li>

                  </ul>

                </div>


                {/* ============================= */}
                {/* CARD 02 — POSITIVE MASCULINITY */}
                {/* ============================= */}
                <div className="group flex flex-col bg-deep-navy rounded-2xl p-8 shadow-lg hover:shadow-2xl transition-all duration-500 hover:-translate-y-2">

                  {/* Number */}
                  <div className="w-14 h-14 rounded-full bg-vibrant-orange text-white flex items-center justify-center font-bold text-lg mb-8">
                    02
                  </div>

                  <span className="text-vibrant-orange text-xs font-bold uppercase tracking-widest">
                    Engagement
                  </span>

                  <h3 className="font-display-lg font-bold text-white text-2xl md:text-3xl mt-3 mb-5">
                    Positive Masculinity
                  </h3>

                  <p className="text-white/65 leading-relaxed mb-7">
                    We engage men and boys in dialogue that challenges harmful norms
                    and supports respectful, non-violent relationships.
                  </p>

                  <ul className="space-y-3 border-t border-white/10 pt-6 mt-auto">

                    <li className="flex items-start gap-3 text-sm text-white/65">
                      <span className="text-vibrant-orange font-bold">•</span>
                      Positive parenting sessions
                    </li>

                    <li className="flex items-start gap-3 text-sm text-white/65">
                      <span className="text-vibrant-orange font-bold">•</span>
                      Male ally engagement sessions
                    </li>

                    <li className="flex items-start gap-3 text-sm text-white/65">
                      <span className="text-vibrant-orange font-bold">•</span>
                      Community role-model storytelling
                    </li>

                  </ul>

                </div>


                {/* ============================= */}
                {/* CARD 03 — YOUTH PREVENTION */}
                {/* ============================= */}
                <div className="group flex flex-col bg-vibrant-orange rounded-2xl p-8 shadow-lg hover:shadow-2xl transition-all duration-500 hover:-translate-y-2">

                  {/* Number */}
                  <div className="w-14 h-14 rounded-full bg-white text-vibrant-orange flex items-center justify-center font-bold text-lg mb-8">
                    03
                  </div>

                  <span className="text-white/70 text-xs font-bold uppercase tracking-widest">
                    Youth Leadership
                  </span>

                  <h3 className="font-display-lg font-bold text-white text-2xl md:text-3xl mt-3 mb-5">
                    Youth Prevention Clubs
                  </h3>

                  <p className="text-white/80 leading-relaxed mb-7">
                    We support youth-led spaces where young people learn peer
                    protection, advocacy, and prevention leadership.
                  </p>

                  <ul className="space-y-3 border-t border-white/20 pt-6 mt-auto">

                    <li className="flex items-start gap-3 text-sm text-white/80">
                      <span className="text-white font-bold">•</span>
                      Youth-led prevention clubs
                    </li>

                    <li className="flex items-start gap-3 text-sm text-white/80">
                      <span className="text-white font-bold">•</span>
                      Peer awareness campaigns
                    </li>

                    <li className="flex items-start gap-3 text-sm text-white/80">
                      <span className="text-white font-bold">•</span>
                      Leadership for safe-community action
                    </li>

                  </ul>

                </div>

              </div>

            </div>
          </section>
          




         <section
  className="relative py-24 md:py-28 bg-cover bg-center overflow-hidden"
  style={{
    backgroundImage: `url(${protect1})`,
  }}
>
  {/* DARK OVERLAY */}
  <div className="absolute inset-0 bg-black/60"></div>

  {/* CONTENT */}
  <div className="relative z-10 max-w-container-max mx-auto px-margin-mobile md:px-margin-desktop">

    {/* SECTION TITLE */}
    <h2 className="font-display-lg text-4xl md:text-5xl lg:text-6xl text-white mb-10">
      Response & Support
    </h2>

    <p className="font-body-lg text-body-lg max-w-2xl text-white/90 mb-12">
      We provide survivor-centered, trauma-informed care that helps children
      and families access immediate protection, psychosocial support, and safe
      referral pathways.
    </p>


    {/* CARDS */}
    <div className="grid grid-cols-1 md:grid-cols-3 gap-8">


      {/* CARD 1 — PSYCHOSOCIAL SUPPORT */}
      <div className="group border border-white/70 rounded-xl p-8 md:p-10 min-h-[350px] flex flex-col justify-between backdrop-blur-sm bg-black/10 hover:bg-white hover:border-white transition-all duration-500">

        <div>

          <h3 className="font-display-lg text-2xl md:text-3xl text-white group-hover:text-deep-navy mb-5 transition-colors duration-500">
            Psychosocial Support
          </h3>

          <p className="font-body-md text-white/90 group-hover:text-deep-navy leading-relaxed max-w-md transition-colors duration-500 mb-6">
            We offer immediate emotional support and stabilization to survivors
            and affected families in safe, child-sensitive spaces.
          </p>

          <ul className="space-y-2 text-sm text-white/80 group-hover:text-deep-navy transition-colors duration-500">

            <li>• Child-friendly spaces and psychosocial support</li>

            <li>• Psychological first response</li>

            <li>• Support circles and guided recovery activities</li>

          </ul>

        </div>

      </div>


      {/* CARD 2 — CASE MANAGEMENT */}
      <div className="group border border-white/70 rounded-xl p-8 md:p-10 min-h-[350px] flex flex-col justify-between backdrop-blur-sm bg-black/10 hover:bg-deep-navy hover:border-deep-navy transition-all duration-500">

        <div>

          <h3 className="font-display-lg text-2xl md:text-3xl text-white group-hover:text-white mb-5 transition-colors duration-500">
            Case Management
          </h3>

          <p className="font-body-md text-white/90 group-hover:text-white leading-relaxed max-w-md transition-colors duration-500 mb-6">
            We coordinate case support so survivors can safely access the right
            services with dignity and confidentiality.
          </p>

          <ul className="space-y-2 text-sm text-white/80 group-hover:text-white/80 transition-colors duration-500">

            <li>• Case management and referral support</li>

            <li>• Case advocacy and follow-up</li>

            <li>• Confidential service coordination</li>

          </ul>

        </div>

      </div>


      {/* CARD 3 — SAFE REFERRAL PATHWAYS */}
      <div className="group border border-white/70 rounded-xl p-8 md:p-10 min-h-[350px] flex flex-col justify-between backdrop-blur-sm bg-black/10 hover:bg-vibrant-orange hover:border-vibrant-orange transition-all duration-500">

        <div>

          <h3 className="font-display-lg text-2xl md:text-3xl text-white group-hover:text-white mb-5 transition-colors duration-500">
            Safe Referral Pathways
          </h3>

          <p className="font-body-md text-white/90 group-hover:text-white leading-relaxed max-w-md transition-colors duration-500 mb-6">
            We connect survivors to trusted legal, health, and protection actors
            through structured and secure referral systems.
          </p>

          <ul className="space-y-2 text-sm text-white/80 group-hover:text-white/90 transition-colors duration-500">

            <li>• Safe reporting and follow-up pathways</li>

            <li>• Emergency service coordination</li>

            <li>• Referral linkage to specialized support</li>

          </ul>

        </div>

      </div>

    </div>

  </div>
</section>






    <section className="relative bg-[#f5f1e8] py-24 md:py-32 overflow-hidden">

  {/* DECORATIVE BACKGROUND */}
  <div className="absolute -top-32 -right-32 w-[450px] h-[450px] rounded-full border-[70px] border-vibrant-orange/10 pointer-events-none" />

  <div className="absolute -bottom-40 -left-40 w-[500px] h-[500px] rounded-full border-[80px] border-deep-navy/5 pointer-events-none" />

  <div className="relative z-10 max-w-container-max mx-auto px-margin-mobile md:px-margin-desktop">

    {/* HEADER */}
    <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-20 items-end mb-16 md:mb-20">

      <div>

        <span className="block text-vibrant-orange font-bold uppercase tracking-[0.25em] text-sm mb-5">
          Protection
        </span>

        <h2 className="font-display-lg font-bold text-deep-navy text-4xl md:text-5xl lg:text-6xl leading-tight">
          Family Reconnection
        </h2>

      </div>

      <div>

        <div className="w-20 h-1.5 bg-vibrant-orange mb-7" />

        <p className="font-body-lg text-lg text-deep-navy/70 leading-relaxed">
          We help restore protective family and community systems by reconnecting
          vulnerable children and supporting safer caregiving pathways after crisis
          and separation.
        </p>

      </div>

    </div>


    {/* CONTENT CARDS */}
    <div className="space-y-6">


      {/* CARD 01 — TRACING & REUNIFICATION */}
      <div className="group grid grid-cols-1 md:grid-cols-[120px_1fr_1fr] gap-8 items-center bg-white border border-deep-navy/10 rounded-2xl p-8 md:p-10 shadow-sm hover:shadow-xl hover:border-vibrant-orange/40 transition-all duration-500">

        {/* NUMBER */}
        <div className="w-16 h-16 md:w-20 md:h-20 rounded-full bg-vibrant-orange text-white flex items-center justify-center font-bold text-xl group-hover:scale-110 transition-transform duration-500">
          01
        </div>

        {/* TITLE */}
        <div>

          <span className="text-vibrant-orange text-xs font-bold uppercase tracking-widest">
            Family Restoration
          </span>

          <h3 className="font-display-lg font-bold text-deep-navy text-2xl md:text-3xl mt-3">
            Tracing & Reunification
          </h3>

        </div>

        {/* CONTENT */}
        <div>

          <p className="text-deep-navy/65 leading-relaxed mb-5">
            We work with local systems and partners to trace separated children
            and support safe family reunification processes.
          </p>

          <ul className="space-y-2 text-sm text-deep-navy/60">

            <li>• Family tracing and reunification pathways</li>

            <li>• Best-interest-oriented follow-up</li>

            <li>• Coordination with local protection structures</li>

          </ul>

        </div>

      </div>


      {/* CARD 02 — CAREGIVER MEDIATION */}
      <div className="group grid grid-cols-1 md:grid-cols-[120px_1fr_1fr] gap-8 items-center bg-deep-navy rounded-2xl p-8 md:p-10 shadow-sm hover:shadow-xl transition-all duration-500">

        {/* NUMBER */}
        <div className="w-16 h-16 md:w-20 md:h-20 rounded-full bg-vibrant-orange text-white flex items-center justify-center font-bold text-xl group-hover:scale-110 transition-transform duration-500">
          02
        </div>

        {/* TITLE */}
        <div>

          <span className="text-vibrant-orange text-xs font-bold uppercase tracking-widest">
            Family Support
          </span>

          <h3 className="font-display-lg font-bold text-white text-2xl md:text-3xl mt-3">
            Caregiver Mediation
          </h3>

        </div>

        {/* CONTENT */}
        <div>

          <p className="text-white/65 leading-relaxed mb-5">
            We support families and caregivers to resolve tensions and
            strengthen safe caregiving relationships after crisis.
          </p>

          <ul className="space-y-2 text-sm text-white/60">

            <li>• Caregiver mediation support</li>

            <li>• Conflict de-escalation guidance</li>

            <li>• Household care planning</li>

          </ul>

        </div>

      </div>


      {/* CARD 03 — POST-REUNIFICATION MONITORING */}
      <div className="group grid grid-cols-1 md:grid-cols-[120px_1fr_1fr] gap-8 items-center bg-vibrant-orange rounded-2xl p-8 md:p-10 shadow-sm hover:shadow-xl transition-all duration-500">

        {/* NUMBER */}
        <div className="w-16 h-16 md:w-20 md:h-20 rounded-full bg-white text-vibrant-orange flex items-center justify-center font-bold text-xl group-hover:scale-110 transition-transform duration-500">
          03
        </div>

        {/* TITLE */}
        <div>

          <span className="text-white/70 text-xs font-bold uppercase tracking-widest">
            Ongoing Protection
          </span>

          <h3 className="font-display-lg font-bold text-white text-2xl md:text-3xl mt-3">
            Post-Reunification Monitoring
          </h3>

        </div>

        {/* CONTENT */}
        <div>

          <p className="text-white/80 leading-relaxed mb-5">
            We continue follow-up after reunification to ensure children remain
            protected and connected to supportive community systems.
          </p>

          <ul className="space-y-2 text-sm text-white/75">

            <li>• Protection monitoring after reunification</li>

            <li>• Home follow-up visits</li>

            <li>• Ongoing referral where risks remain</li>

          </ul>

        </div>

      </div>

    </div>
                                {/* BUTTONS */}
      <div className="mt-16 flex flex-col sm:flex-row items-center gap-4 shrink-0">

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
        <div className="max-w-container-max mx-auto flex flex-col items-center gap-base">
          <div className="flex items-center gap-4 mb-8">
            <img alt="USEC Logo" className="h-12 w-auto brightness-0 invert" src="/usec-navbar-logo.png" />
            <span className="font-headline-sm text-headline-sm text-white">USEC.org</span>
          </div>
          <div className="flex flex-wrap justify-center gap-x-12 gap-y-6 mb-12 border-b border-white/10 pb-12 w-full">
            <a className="font-label-sm text-label-sm text-tertiary-fixed-dim hover:text-vibrant-orange transition-colors" href="/privacy-policy">Privacy Policy</a>
            <a className="font-label-sm text-label-sm text-tertiary-fixed-dim hover:text-vibrant-orange transition-colors" href="/terms-of-service">Terms of Service</a>
            <a className="font-label-sm text-label-sm text-tertiary-fixed-dim hover:text-vibrant-orange transition-colors" href="/annual-reports">Financial Transparency</a>
            <a className="font-label-sm text-label-sm text-tertiary-fixed-dim hover:text-vibrant-orange transition-colors" href="/annual-reports">Annual Reports</a>
            <a className="font-label-sm text-label-sm text-tertiary-fixed-dim hover:text-vibrant-orange transition-colors" href="#">Careers</a>
          </div>
          <p className="font-body-md text-body-md text-tertiary-fixed-dim text-center opacity-80">
            (c) 2024 United Safe Environment Creators (USEC). All rights reserved. Registered Charity.
          </p>
        </div>
      </footer>
    </div>
  )
}

export default ProtectionActivitiesPage
