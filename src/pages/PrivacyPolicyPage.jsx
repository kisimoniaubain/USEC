import SiteNavbar from '../components/SiteNavbar'
import useWhoWeAreReveal from '../hooks/useWhoWeAreReveal'

function PrivacyPolicyPage() {
  useWhoWeAreReveal()

  return (
    <div className="bg-surface text-on-surface font-body-md overflow-x-hidden">
      <SiteNavbar />

      <main>
        <section className="relative h-[42vh] md:h-[52vh] flex items-center overflow-hidden bg-deep-navy">
          <div className="absolute inset-0 bg-cover bg-center opacity-40" style={{ backgroundImage: 'linear-gradient(rgba(0, 29, 43, 0.7), rgba(0, 29, 43, 0.7)), url("https://images.unsplash.com/photo-1500530855697-b586d89ba3ee?auto=format&fit=crop&w=1400&q=80")' }} />
          <div className="relative z-10 mx-auto w-full max-w-5xl px-4 text-center">
            <span className="font-label-sm text-label-sm uppercase tracking-[0.22em] text-white/70">Privacy Policy</span>
            <h1 className="mt-4 font-display-lg text-display-lg-mobile md:text-display-lg text-white">Privacy Policy</h1>
            <p className="mt-4 max-w-3xl mx-auto font-body-lg text-body-lg text-white/90">Our commitment to transparency, integrity, and the protection of your personal data.</p>
            <div className="mt-8 flex justify-center">
              <div className="h-1 w-24 bg-vibrant-orange rounded-full" />
            </div>
          </div>
        </section>

        <section className="py-section-gap px-margin-mobile md:px-margin-desktop">
          <div className="max-w-container-max mx-auto space-y-16">
            <article className="max-w-3xl mx-auto">
              <h2 className="font-headline-md text-headline-md text-deep-navy mb-6">Introduction</h2>
              <div className="space-y-4 text-on-surface-variant font-body-lg leading-relaxed">
                <p>At United Safe Environment Creators (USEC), we value the trust you place in our humanitarian mission. As part of our commitment to ethical stewardship, we treat the privacy of our donors, volunteers, and beneficiaries as a sacred responsibility.</p>
                <p>This Privacy Policy outlines the types of information we collect, how it is utilized to further our global impact, and the rigorous measures we employ to ensure your data remains secure and confidential. By engaging with our services, you entrust us with your information, and we are dedicated to protecting it with the highest institutional standards.</p>
              </div>
            </article>

            <article className="grid grid-cols-1 md:grid-cols-2 gap-8 p-8 bg-surface-cream rounded-xl border border-outline-variant/30">
              <div className="flex gap-4">
                <span className="material-symbols-outlined text-vibrant-orange text-3xl">person</span>
                <div>
                  <h3 className="font-headline-sm text-headline-sm mb-2 text-deep-navy">Identity Data</h3>
                  <p className="text-on-surface-variant">Full name, official titles, and identification markers provided during registration or donation.</p>
                </div>
              </div>
              <div className="flex gap-4">
                <span className="material-symbols-outlined text-vibrant-orange text-3xl">contact_mail</span>
                <div>
                  <h3 className="font-headline-sm text-headline-sm mb-2 text-deep-navy">Contact Details</h3>
                  <p className="text-on-surface-variant">Email addresses, physical mailing locations, and telephone numbers for mission updates.</p>
                </div>
              </div>
              <div className="flex gap-4">
                <span className="material-symbols-outlined text-vibrant-orange text-3xl">payments</span>
                <div>
                  <h3 className="font-headline-sm text-headline-sm mb-2 text-deep-navy">Financial Information</h3>
                  <p className="text-on-surface-variant">Securely processed transaction records and contribution histories for tax reporting and accountability.</p>
                </div>
              </div>
              <div className="flex gap-4">
                <span className="material-symbols-outlined text-vibrant-orange text-3xl">monitoring</span>
                <div>
                  <h3 className="font-headline-sm text-headline-sm mb-2 text-deep-navy">Usage Analytics</h3>
                  <p className="text-on-surface-variant">Interaction data used strictly to optimize the accessibility of our digital humanitarian resources.</p>
                </div>
              </div>
            </article>

            <article className="max-w-4xl mx-auto">
              <h2 className="font-headline-md text-headline-md text-deep-navy mb-6">How We Use Your Information</h2>
              <p className="text-on-surface-variant font-body-lg mb-8">Your information is an engine for positive change. We utilize data solely to empower our operations and enhance our collective humanitarian footprint.</p>
              <ul className="space-y-6">
                <li className="flex items-start gap-4">
                  <div className="mt-1 flex-shrink-0 w-6 h-6 bg-deep-navy rounded-full flex items-center justify-center">
                    <span className="material-symbols-outlined text-[14px] text-white" style={{ fontVariationSettings: "'FILL' 1" }}>check</span>
                  </div>
                  <p className="text-on-surface-variant"><strong className="text-deep-navy">Operational Delivery:</strong> Managing and executing aid programs, volunteer coordinating, and donation processing with maximum efficiency.</p>
                </li>
                <li className="flex items-start gap-4">
                  <div className="mt-1 flex-shrink-0 w-6 h-6 bg-deep-navy rounded-full flex items-center justify-center">
                    <span className="material-symbols-outlined text-[14px] text-white" style={{ fontVariationSettings: "'FILL' 1" }}>check</span>
                  </div>
                  <p className="text-on-surface-variant"><strong className="text-deep-navy">Accountability &amp; Reporting:</strong> Providing transparent impact reports and ensuring legal compliance with international humanitarian regulations.</p>
                </li>
                <li className="flex items-start gap-4">
                  <div className="mt-1 flex-shrink-0 w-6 h-6 bg-deep-navy rounded-full flex items-center justify-center">
                    <span className="material-symbols-outlined text-[14px] text-white" style={{ fontVariationSettings: "'FILL' 1" }}>check</span>
                  </div>
                  <p className="text-on-surface-variant"><strong className="text-deep-navy">Advocacy:</strong> Tailoring our communications to keep you informed about the specific crises and programs you are most passionate about.</p>
                </li>
              </ul>
            </article>

            <article className="relative overflow-hidden rounded-xl bg-deep-navy text-white p-10 shadow-lg">
              <div className="relative z-10">
                <h2 className="font-headline-md text-headline-md mb-6">Data Security</h2>
                <p className="font-body-lg text-on-primary-container leading-relaxed mb-6">We employ military-grade encryption and stringent physical security protocols to prevent unauthorized access, disclosure, or alteration of your personal information. Our systems are audited annually by independent security firms to ensure the sanctity of your digital profile.</p>
                <div className="flex items-center gap-2 text-vibrant-orange">
                  <span className="material-symbols-outlined" style={{ fontVariationSettings: "'FILL' 1" }}>verified_user</span>
                  <span className="font-label-md">ISO 27001 COMPLIANT INFRASTRUCTURE</span>
                </div>
              </div>
              <div className="pointer-events-none absolute -right-24 -bottom-24 opacity-10 text-[300px]">
                <span className="material-symbols-outlined">shield</span>
              </div>
            </article>

            <article className="text-center">
              <h2 className="font-headline-md text-headline-md text-deep-navy mb-4">Contact Us</h2>
              <p className="text-on-surface-variant font-body-lg mb-8 max-w-xl mx-auto">Should you have questions regarding your data rights or wish to exercise your right to erasure, our Data Privacy Officer is available to assist you.</p>
              <div className="inline-flex flex-col md:flex-row gap-8 items-center bg-white p-8 rounded-xl border border-outline-variant shadow-sm">
                <div className="flex items-center gap-3">
                  <span className="material-symbols-outlined text-vibrant-orange">mail</span>
                  <span className="font-label-md text-deep-navy">privacy@usec.org</span>
                </div>
                <div className="hidden md:block w-px h-8 bg-outline-variant" />
                <div className="flex items-center gap-3">
                  <span className="material-symbols-outlined text-vibrant-orange">location_on</span>
                  <span className="font-label-md text-deep-navy">Global HQ: Geneva, Switzerland</span>
                </div>
              </div>
            </article>
          </div>
        </section>
      </main>
    </div>
  )
}

export default PrivacyPolicyPage

