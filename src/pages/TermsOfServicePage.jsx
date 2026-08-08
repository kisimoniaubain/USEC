import SiteNavbar from '../components/SiteNavbar'
import useWhoWeAreReveal from '../hooks/useWhoWeAreReveal'

function TermsOfServicePage() {
  useWhoWeAreReveal()

  return (
    <div className="bg-surface text-on-surface font-body-md overflow-x-hidden">
      <SiteNavbar />

      <main>
        <section className="bg-deep-navy text-white py-20 px-margin-mobile md:px-margin-desktop">
          <div className="max-w-container-max mx-auto">
            <p className="font-label-md text-label-md text-secondary-fixed mb-4 uppercase tracking-[0.2em]">Governance & Transparency</p>
            <h1 className="font-display-lg text-display-lg mb-6 max-w-2xl">Terms of Service</h1>
            <p className="font-body-lg text-body-lg text-surface-variant max-w-xl">Please review these terms before using USEC’s digital platform. By continuing to use our services, you accept the operational and ethical expectations described here.</p>
            <div className="mt-8 flex gap-4 text-sm text-outline-variant">
              <span>Effective Date: January 1, 2024</span>
              <span>•</span>
              <span>Last Updated: May 20, 2024</span>
            </div>
          </div>
        </section>

        <section className="max-w-container-max mx-auto px-margin-mobile md:px-margin-desktop py-section-gap">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-gutter">
            <aside className="hidden lg:block lg:col-span-3">
              <div className="sticky legal-sidebar-sticky flex flex-col gap-4 border-l border-surface-container-high pl-6">
                <a className="font-label-md text-label-md text-primary font-bold hover:text-secondary transition-colors" href="#acceptance">Acceptance of Terms</a>
                <a className="font-label-md text-label-md text-on-surface-variant hover:text-secondary transition-colors" href="#conduct">User Conduct</a>
                <a className="font-label-md text-label-md text-on-surface-variant hover:text-secondary transition-colors" href="#property">Intellectual Property</a>
                <a className="font-label-md text-label-md text-on-surface-variant hover:text-secondary transition-colors" href="#liability">Limitation of Liability</a>
                <a className="font-label-md text-label-md text-on-surface-variant hover:text-secondary transition-colors" href="#changes">Changes to Terms</a>
                <hr className="my-4 border-surface-container-high" />
                <button className="flex items-center gap-2 text-on-surface-variant hover:text-primary transition-colors text-sm">
                  <span className="material-symbols-outlined text-base">print</span>
                  Print Documentation
                </button>
              </div>
            </aside>

            <article className="lg:col-span-9 space-y-section-gap">
              <section className="scroll-mt-32" id="acceptance">
                <div className="flex items-center gap-4 mb-6">
                  <div className="w-12 h-12 bg-surface-cream rounded-full flex items-center justify-center text-primary">
                    <span className="material-symbols-outlined">verified_user</span>
                  </div>
                  <h2 className="font-headline-md text-headline-md text-primary">1. Acceptance of Terms</h2>
                </div>
                <div className="bg-white p-8 rounded-xl editorial-shadow border border-surface-container-high space-y-4">
                  <p className="font-body-lg text-body-lg text-on-surface-variant leading-relaxed">
                    Welcome to United Safe Environment Creators (USEC). Accessing or using our website and connected services means you accept these Terms of Service. These terms govern the relationship between you and USEC while using our digital platform.
                  </p>
                  <p className="font-body-md text-body-md text-on-surface-variant">
                    If you do not accept these terms, please do not continue using our services. We reserve the right to restrict access for anyone who abuses or misuses the platform.
                  </p>
                </div>
              </section>

              <section className="scroll-mt-32" id="conduct">
                <div className="flex items-center gap-4 mb-6">
                  <div className="w-12 h-12 bg-surface-cream rounded-full flex items-center justify-center text-primary">
                    <span className="material-symbols-outlined">gavel</span>
                  </div>
                  <h2 className="font-headline-md text-headline-md text-primary">2. User Conduct</h2>
                </div>
                <div className="bg-white p-8 rounded-xl editorial-shadow border border-surface-container-high">
                  <p className="font-body-lg text-body-lg text-on-surface-variant mb-6">All users must uphold USEC’s humanitarian values while engaging with the platform. Prohibited behavior includes the following:</p>
                  <ul className="space-y-4">
                    <li className="flex gap-4">
                      <span className="material-symbols-outlined text-vibrant-orange">check_circle</span>
                      <span className="font-body-md text-on-surface-variant">Disrupting or degrading the services, systems, or infrastructure used by the platform.</span>
                    </li>
                    <li className="flex gap-4">
                      <span className="material-symbols-outlined text-vibrant-orange">check_circle</span>
                      <span className="font-body-md text-on-surface-variant">Using the platform for harassment, discrimination, or any form of harm against stakeholders.</span>
                    </li>
                    <li className="flex gap-4">
                      <span className="material-symbols-outlined text-vibrant-orange">check_circle</span>
                      <span className="font-body-md text-on-surface-variant">Impersonating others or misrepresenting your affiliation with USEC or its partners.</span>
                    </li>
                    <li className="flex gap-4">
                      <span className="material-symbols-outlined text-vibrant-orange">check_circle</span>
                      <span className="font-body-md text-on-surface-variant">Attempting to circumvent security controls or gain unauthorized access to restricted areas.</span>
                    </li>
                  </ul>
                </div>
              </section>

              <section className="scroll-mt-32" id="property">
                <div className="flex items-center gap-4 mb-6">
                  <div className="w-12 h-12 bg-surface-cream rounded-full flex items-center justify-center text-primary">
                    <span className="material-symbols-outlined">copyright</span>
                  </div>
                  <h2 className="font-headline-md text-headline-md text-primary">3. Intellectual Property</h2>
                </div>
                <div className="bg-white p-8 rounded-xl editorial-shadow border border-surface-container-high space-y-4">
                  <p className="font-body-md text-body-md text-on-surface-variant">
                    All content on USEC.org, including text, images, logos, audio, and software, is owned by USEC or licensed partners. You may not reuse or redistribute this content without explicit permission.
                  </p>
                  <div className="p-6 bg-surface-cream rounded-lg border-l-4 border-primary">
                    <p className="italic font-body-md text-primary">The USEC brand is a symbol of trust. Misusing our identity or materials for fraudulent purposes undermines the communities we serve.</p>
                  </div>
                </div>
              </section>

              <section className="scroll-mt-32" id="liability">
                <div className="flex items-center gap-4 mb-6">
                  <div className="w-12 h-12 bg-surface-cream rounded-full flex items-center justify-center text-primary">
                    <span className="material-symbols-outlined">warning</span>
                  </div>
                  <h2 className="font-headline-md text-headline-md text-primary">4. Limitation of Liability</h2>
                </div>
                <div className="bg-white p-8 rounded-xl editorial-shadow border border-surface-container-high">
                  <p className="font-body-md text-body-md text-on-surface-variant leading-relaxed mb-6">
                    To the maximum extent permitted by law, USEC is not responsible for indirect or special damages, lost earnings, or any other losses that may arise from your use of this website.
                  </p>
                  <p className="font-body-md text-body-md text-on-surface-variant">
                    USEC also does not guarantee that the platform will be uninterrupted or error-free, and disclaims responsibility for any loss arising from technical or operational failures.
                  </p>
                </div>
              </section>

              <section className="scroll-mt-32 pb-12" id="changes">
                <div className="flex items-center gap-4 mb-6">
                  <div className="w-12 h-12 bg-surface-cream rounded-full flex items-center justify-center text-primary">
                    <span className="material-symbols-outlined">history</span>
                  </div>
                  <h2 className="font-headline-md text-headline-md text-primary">5. Changes to Terms</h2>
                </div>
                <div className="bg-white p-8 rounded-xl editorial-shadow border border-surface-container-high">
                  <p className="font-body-md text-body-md text-on-surface-variant">
                    USEC may update these Terms from time to time. If a change is significant, we will provide advance notice and clearly communicate the new terms before they take effect.
                  </p>
                  <div className="mt-8">
                    <button className="bg-primary text-white px-8 py-3 rounded hover:bg-deep-navy transition-colors font-bold text-label-md">I UNDERSTAND AND AGREE</button>
                  </div>
                </div>
              </section>
            </article>
          </div>
        </section>

        <section className="bg-surface-container-high py-20 px-margin-mobile">
          <div className="max-w-3xl mx-auto text-center">
            <h3 className="font-headline-md text-headline-md text-primary mb-4">Questions about these terms?</h3>
            <p className="font-body-md text-on-surface-variant mb-8">Our legal team is available to help clarify any part of these service terms. Reach out if you need guidance.</p>
            <a className="inline-flex items-center gap-2 text-primary font-bold hover:underline" href="mailto:legal@usec.org">
              <span className="material-symbols-outlined">mail</span>
              legal@usec.org
            </a>
          </div>
        </section>
      </main>
    </div>
  )
}

export default TermsOfServicePage

