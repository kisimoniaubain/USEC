import SiteNavbar from '../components/SiteNavbar'

function WhoWeArePage() {
  return (
    <div className="bg-surface text-on-background font-body-md overflow-x-hidden">
      <SiteNavbar activePage="about" />

      <section className="relative w-full h-[70vh] flex items-center overflow-hidden pt-20">
        <div className="absolute inset-0 bg-deep-navy">
          <img
            className="w-full h-full object-cover opacity-60"
            src="https://lh3.googleusercontent.com/aida/AP1WRLtHdAH_fbHt5xhVXDTpbK4zYmZdVDGYk2v1GDgPg2cYNuIjPPsWPhwwG8hCruT6zdMhMa08iMP2zGruBBdRhuX3mFyZMm5w2fJls4xa4df-ltnCiXcJ8R0Lnq6O4crG8zBld9mCjp2RMX7NluDSy9URK9AgmsYrTKp_VR-5YgyhoiefFEYFdlZRDbOCcIQdSCpIIL_PHyG6JJgrjahf8qx0a2NHRY7isI4nJNa_qVmjf_pgumgga1_U9Lk"
            alt="A portrait of a young Somali woman smiling and making a peace sign outdoors."
          />
        </div>
        <div className="relative z-10 max-w-container-max mx-auto px-margin-mobile md:px-margin-desktop w-full">
          <div className="max-w-3xl">
            <span className="text-vibrant-orange font-label-md text-label-md tracking-[0.2em] mb-4 block">WHO WE ARE</span>
            <h1 className="font-display-lg text-display-lg-mobile md:text-display-lg text-white mb-6">
              Nurturing heritage, fostering hope, and creating a sustainable future for all.
            </h1>
            <p className="font-body-lg text-body-lg text-white/90 max-w-xl">
              United Safe Environment Creators is more than an organization; we are a collective of dreamers and doers dedicated to restoring dignity and safety to our global community.
            </p>
          </div>
        </div>
      </section>

      <section className="py-section-gap px-margin-mobile md:px-margin-desktop max-w-container-max mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-gutter items-center">
          <div className="md:col-span-5 relative">
            <div className="aspect-[4/5] bg-surface-cream rounded-lg overflow-hidden">
              <img
                className="w-full h-full object-cover"
                src="https://lh3.googleusercontent.com/aida/AP1WRLsd8bDh6WsSy-r3dZ_TCfJdJj_E5z0EUQwBccxEMfx9st4GhXY4e9o4IfQEI0s4FMDWySr6bOqYlKcXJvgpcVWKDV8oHmak8ITM_3PRUGyGYZRdrGoomozRZeW5CX3pwSv5AEFOTrmlYGTDVFQSNJ0tjgPPhU8oY0hmWCrfdBmdP3sCQouYfW7IP5f8fkyHKbnRMl1E95VEd3KvaBKnCpz9SPi8IJcH074qTmrKG0YFLRbesJ5RqXvqotqS"
                alt="Portrait of a woman standing proudly in front of a textured wall."
              />
            </div>
            <div className="absolute -bottom-10 -right-10 hidden lg:block w-64 h-64 border-8 border-vibrant-orange z-0" />
          </div>

          <div className="md:col-span-7 md:pl-margin-desktop space-y-12">
            <div>
              <h2 className="font-headline-md text-headline-md text-deep-navy mb-6">Our Mission</h2>
              <p className="font-body-lg text-body-lg text-on-surface-variant">
                To empower marginalized communities by providing safe environments, educational opportunities, and sustainable resources that foster independence and long-term resilience.
              </p>
            </div>
            <div>
              <h2 className="font-headline-md text-headline-md text-deep-navy mb-6">Our Vision</h2>
              <p className="font-body-lg text-body-lg text-on-surface-variant">
                A world where every individual, regardless of their circumstances, has access to a secure habitat and the tools necessary to thrive in harmony with their environment and heritage.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-surface-cream py-section-gap">
        <div className="px-margin-mobile md:px-margin-desktop max-w-container-max mx-auto">
          <div className="text-center mb-16">
            <span className="text-vibrant-orange font-label-md text-label-md tracking-widest block mb-4 uppercase">The Journey</span>
            <h2 className="font-headline-md text-headline-md text-deep-navy">Our History</h2>
          </div>

          <div className="relative">
            <div className="absolute left-1/2 transform -translate-x-1/2 h-full w-0.5 bg-deep-navy/10 hidden md:block" />
            <div className="space-y-24">
              <div className="flex flex-col md:flex-row items-center gap-gutter">
                <div className="md:w-1/2 md:text-right pr-gutter">
                  <h3 className="font-headline-sm text-headline-sm text-deep-navy mb-2">2018: The Founding</h3>
                  <p className="font-body-md text-body-md text-on-surface-variant">
                    USEC was established by a group of environmentalists and social workers moved by the urgent need for safe housing in coastal regions.
                  </p>
                </div>
                <div className="relative flex justify-center items-center">
                  <div className="w-12 h-12 rounded-full bg-vibrant-orange flex items-center justify-center text-white font-bold z-10">01</div>
                </div>
                <div className="md:w-1/2 pl-gutter hidden md:block" />
              </div>

              <div className="flex flex-col md:flex-row-reverse items-center gap-gutter">
                <div className="md:w-1/2 md:text-left pl-gutter">
                  <h3 className="font-headline-sm text-headline-sm text-deep-navy mb-2">2020: Rapid Expansion</h3>
                  <p className="font-body-md text-body-md text-on-surface-variant">
                    We expanded our programs to include vocational training, helping over 500 families transition into sustainable livelihoods.
                  </p>
                </div>
                <div className="relative flex justify-center items-center">
                  <div className="w-12 h-12 rounded-full bg-deep-navy flex items-center justify-center text-white font-bold z-10">02</div>
                </div>
                <div className="md:w-1/2 pr-gutter hidden md:block" />
              </div>

              <div className="flex flex-col md:flex-row items-center gap-gutter">
                <div className="md:w-1/2 md:text-right pr-gutter">
                  <h3 className="font-headline-sm text-headline-sm text-deep-navy mb-2">2023: Global Recognition</h3>
                  <p className="font-body-md text-body-md text-on-surface-variant">
                    USEC was awarded the Heritage Guardian Prize for our innovative approach to combining environmental conservation with cultural preservation.
                  </p>
                </div>
                <div className="relative flex justify-center items-center">
                  <div className="w-12 h-12 rounded-full bg-vibrant-orange flex items-center justify-center text-white font-bold z-10">03</div>
                </div>
                <div className="md:w-1/2 pl-gutter hidden md:block" />
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-section-gap px-margin-mobile md:px-margin-desktop max-w-container-max mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-gutter">
          <div className="md:col-span-4 md:sticky md:top-24 h-fit">
            <h2 className="font-headline-md text-headline-md text-deep-navy mb-6">Our Core Values</h2>
            <p className="font-body-md text-body-md text-on-surface-variant">
              These principles guide every decision we make, from on-the-ground project implementation to global policy advocacy.
            </p>
            <div className="mt-8">
              <img
                className="w-full rounded-lg shadow-sm"
                src="https://lh3.googleusercontent.com/aida/AP1WRLslHw-836RaLKXe9pRX6u1lB7zzljcImB6QolynsCBWokRkorgs1h4U9jkA-DVG9mMvVdCvSBE8KYHbMezKKUq0SnuDoxyJgx3FUlICVHWVLHJSWF7eFvlwk5PmpKq5udaZXTlfJHyoeZba_tVjoH_2JDuPRRAFBkVFRW5BG2emuD1uZXUx8pTl5Z4XnD3NLiQu0Q1fHJplI0Nl2WhXSFq21Zu6B4GjWxKNBKxENE89WADYrPmq8EVgCvHb"
                alt="Close-up portrait in traditional attire."
              />
            </div>
          </div>

          <div className="md:col-span-8 grid grid-cols-1 sm:grid-cols-2 gap-gutter">
            <div className="bg-white p-8 border border-surface-cream rounded-xl hover:shadow-lg transition-all group">
              <div className="w-12 h-12 bg-surface-cream flex items-center justify-center rounded-full mb-6 group-hover:bg-vibrant-orange transition-colors">
                <span className="material-symbols-outlined text-deep-navy group-hover:text-white">handshake</span>
              </div>
              <h3 className="font-headline-sm text-headline-sm text-deep-navy mb-4">Integrity</h3>
              <p className="font-body-md text-body-md text-on-surface-variant">
                We believe in absolute transparency and accountability in all our operations, ensuring that every donation reaches its intended impact.
              </p>
            </div>

            <div className="bg-white p-8 border border-surface-cream rounded-xl hover:shadow-lg transition-all group">
              <div className="w-12 h-12 bg-surface-cream flex items-center justify-center rounded-full mb-6 group-hover:bg-vibrant-orange transition-colors">
                <span className="material-symbols-outlined text-deep-navy group-hover:text-white">favorite</span>
              </div>
              <h3 className="font-headline-sm text-headline-sm text-deep-navy mb-4">Compassion</h3>
              <p className="font-body-md text-body-md text-on-surface-variant">
                Empathy is the heartbeat of USEC. We approach every challenge with kindness and a deep respect for human dignity.
              </p>
            </div>

            <div className="bg-white p-8 border border-surface-cream rounded-xl hover:shadow-lg transition-all group">
              <div className="w-12 h-12 bg-surface-cream flex items-center justify-center rounded-full mb-6 group-hover:bg-vibrant-orange transition-colors">
                <span className="material-symbols-outlined text-deep-navy group-hover:text-white">eco</span>
              </div>
              <h3 className="font-headline-sm text-headline-sm text-deep-navy mb-4">Stewardship</h3>
              <p className="font-body-md text-body-md text-on-surface-variant">
                We are temporary custodians of our planet. Our projects are designed to leave the environment better than we found it.
              </p>
            </div>

            <div className="bg-white p-8 border border-surface-cream rounded-xl hover:shadow-lg transition-all group">
              <div className="w-12 h-12 bg-surface-cream flex items-center justify-center rounded-full mb-6 group-hover:bg-vibrant-orange transition-colors">
                <span className="material-symbols-outlined text-deep-navy group-hover:text-white">lightbulb</span>
              </div>
              <h3 className="font-headline-sm text-headline-sm text-deep-navy mb-4">Innovation</h3>
              <p className="font-body-md text-body-md text-on-surface-variant">
                We embrace creative problem-solving to overcome systemic barriers and create modern solutions for age-old problems.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-deep-navy py-24 px-margin-mobile md:px-margin-desktop text-center">
        <h2 className="font-display-lg text-display-lg-mobile md:text-display-lg text-white mb-8">Be part of the creation.</h2>
        <div className="flex flex-col sm:flex-row justify-center gap-4">
          <a href="/get-involved" className="bg-vibrant-orange text-white px-10 py-4 rounded-lg font-bold hover:opacity-90 transition-all text-label-md">
            JOIN OUR TEAM
          </a>
          <a href="/contact-us" className="border border-white text-white px-10 py-4 rounded-lg font-bold hover:bg-white/10 transition-all text-label-md">
            BECOME A PARTNER
          </a>
        </div>
      </section>

      <section className="bg-deep-navy text-white w-full mt-section-gap">
        <div className="flex flex-col md:flex-row justify-between items-center px-margin-mobile md:px-margin-desktop py-12 gap-gutter max-w-container-max mx-auto">
          <div className="flex flex-col items-center md:items-start gap-4">
            <div className="flex items-center gap-3">
              <img alt="USEC Logo" className="h-8 w-auto invert" src="/usec-navbar-logo.png" />
              <span className="font-headline-sm text-white">USEC.org</span>
            </div>
            <p className="text-white/60 font-body-md text-body-md text-center md:text-left max-w-sm">
              United Safe Environment Creators is a global non-profit dedicated to sustainable humanitarian development.
            </p>
          </div>
          <div className="flex flex-col items-center md:items-end gap-6">
            <div className="flex gap-8">
              <a className="text-white/80 hover:text-white transition-colors duration-200 font-label-md text-label-md" href="/privacy-policy">Privacy Policy</a>
              <a className="text-white/80 hover:text-white transition-colors duration-200 font-label-md text-label-md" href="/terms-of-service">Terms of Service</a>
              <a className="text-white/80 hover:text-white transition-colors duration-200 font-label-md text-label-md" href="/faqs">FAQ</a>
            </div>
            <p className="text-white/40 text-sm font-body-md">(c) 2024 United Safe Environment Creators (USEC). All rights reserved.</p>
          </div>
        </div>
      </section>
    </div>
  )
}

export default WhoWeArePage
