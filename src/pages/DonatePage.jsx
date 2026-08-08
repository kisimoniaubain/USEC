import { useState } from 'react'
import SiteNavbar from '../components/SiteNavbar'
import useWhoWeAreReveal from '../hooks/useWhoWeAreReveal'

function DonatePage() {
  useWhoWeAreReveal()

  const [frequency, setFrequency] = useState('once')
  const [selectedAmount, setSelectedAmount] = useState(50)

  return (
    <div className="bg-surface text-on-surface font-body-md overflow-x-hidden">
      <SiteNavbar activePage="donate" />

      <main className="pt-20">
        <section className="relative h-[60vh] md:h-[80vh] w-full flex items-center overflow-hidden">
          <div className="absolute inset-0 z-0">
            <div
              className="bg-cover bg-center w-full h-full transform scale-105"
              style={{
                backgroundImage:
                  "url('https://lh3.googleusercontent.com/aida-public/AB6AXuBO8rOh7DFrP5nYCdyiNRTvkpIoO99YtzDhuNUjlAbHSSZofZxa-LsPMVrsA26zxWwY7OW3zzjzbQExBGxHKdKlJEJ2gNOd-NM3si4p45rEK7i4tLrXzreM89W90iWVHucRaWFmJv4tI0f_2trLi9ZBemNv2pAzPuQSyRUnGoNiSjOjPMVEEB6iB_xnRqtGaXnLvo6L8KXkCWtIKzv9_1sv1NVagnUvoM4Rqs1kFsS5qAe4_CIdJLNrFrXNiPtoV74tpzbmZT9Mb08m')",
              }}
            />
            <div className="absolute inset-0 bg-gradient-to-r from-primary/80 via-primary/40 to-transparent" />
          </div>
          <div className="container mx-auto px-margin-mobile md:px-margin-desktop relative z-10 text-white max-w-4xl">
            <span className="font-label-md text-label-md uppercase tracking-[0.3em] mb-4 block text-vibrant-orange">Urgent Humanitarian Action</span>
            <h1 className="font-display-lg text-display-lg-mobile md:text-display-lg mb-6 leading-tight">Your Generosity Creates a Safer World.</h1>
            <p className="font-body-lg text-body-lg max-w-xl mb-10 opacity-90 leading-relaxed">
              Join United Safe Environment Creators in our mission to provide dignity, safety, and sustainable futures for vulnerable communities globally.
            </p>
            <div className="flex flex-wrap gap-4">
              <a className="bg-vibrant-orange text-white px-10 py-4 font-label-md text-label-md uppercase tracking-widest hover:brightness-110 transition-all" href="#donate-form">Start My Gift</a>
              <a className="border border-white/40 text-white px-10 py-4 font-label-md text-label-md uppercase tracking-widest hover:bg-white/10 transition-all backdrop-blur-sm" href="/our-impact">View Our Impact</a>
            </div>
          </div>
        </section>

        <section className="py-section-gap bg-surface-cream" id="donate-form">
          <div className="container mx-auto px-margin-mobile md:px-margin-desktop max-w-container-max">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
              <div className="lg:col-span-5 flex flex-col gap-10">
                <div>
                  <h2 className="font-headline-md text-headline-md text-primary mb-6">Choose Your Impact</h2>
                  <p className="font-body-lg text-body-lg text-on-surface-variant leading-relaxed">
                    Every dollar contributed goes directly to the field. We prioritize long-term sustainability alongside immediate relief efforts.
                  </p>
                </div>

                <div className="grid grid-cols-1 gap-4">
                  <div className="bg-white p-6 border border-surface-container-high flex gap-6 items-center">
                    <div className="bg-secondary-fixed w-16 h-16 shrink-0 flex items-center justify-center rounded-full">
                      <span className="material-symbols-outlined text-secondary text-3xl">water_drop</span>
                    </div>
                    <div>
                      <h4 className="font-label-md text-label-md text-primary uppercase mb-1">$50 Level</h4>
                      <p className="font-body-md text-body-md text-on-surface-variant">Provides clean, safe drinking water for a family of five for an entire month.</p>
                    </div>
                  </div>

                  <div className="bg-white p-6 border border-surface-container-high flex gap-6 items-center">
                    <div className="bg-primary-fixed w-16 h-16 shrink-0 flex items-center justify-center rounded-full">
                      <span className="material-symbols-outlined text-deep-navy text-3xl">school</span>
                    </div>
                    <div>
                      <h4 className="font-label-md text-label-md text-primary uppercase mb-1">$100 Level</h4>
                      <p className="font-body-md text-body-md text-on-surface-variant">Covers educational supplies and uniform for two children in our outreach zones.</p>
                    </div>
                  </div>

                  <div className="bg-white p-6 border border-surface-container-high flex gap-6 items-center">
                    <div className="bg-secondary-fixed w-16 h-16 shrink-0 flex items-center justify-center rounded-full">
                      <span className="material-symbols-outlined text-secondary text-3xl">medical_services</span>
                    </div>
                    <div>
                      <h4 className="font-label-md text-label-md text-primary uppercase mb-1">$250 Level</h4>
                      <p className="font-body-md text-body-md text-on-surface-variant">Funds a mobile health clinic visit, providing essential screenings for 20 people.</p>
                    </div>
                  </div>
                </div>
              </div>

              <div className="lg:col-span-7">
                <div className="bg-white/95 backdrop-blur-md p-8 md:p-12 shadow-sm border border-white">
                  <div className="flex flex-col gap-8">
                    <div className="flex p-1 bg-surface-container rounded-lg">
                      <button
                        className={`flex-1 py-3 text-center font-label-md text-label-md uppercase tracking-wider rounded-md transition-all ${frequency === 'once' ? 'bg-white text-primary shadow-sm' : 'text-on-surface-variant hover:text-primary'}`}
                        onClick={() => setFrequency('once')}
                        type="button"
                      >
                        One-time Gift
                      </button>
                      <button
                        className={`flex-1 py-3 text-center font-label-md text-label-md uppercase tracking-wider rounded-md transition-all ${frequency === 'monthly' ? 'bg-white text-primary shadow-sm' : 'text-on-surface-variant hover:text-primary'}`}
                        onClick={() => setFrequency('monthly')}
                        type="button"
                      >
                        Monthly Partner
                      </button>
                    </div>

                    <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                      {[25, 50, 100, 250].map((amount) => (
                        <button
                          key={amount}
                          className={`border-2 p-5 text-center font-headline-sm text-headline-sm text-primary transition-all ${selectedAmount === amount ? 'border-vibrant-orange bg-vibrant-orange/5' : 'border-surface-container-high hover:border-vibrant-orange'}`}
                          data-amount={amount}
                          onClick={() => setSelectedAmount(amount)}
                          type="button"
                        >
                          ${amount}
                        </button>
                      ))}
                    </div>

                    <div className="relative">
                      <span className="absolute left-4 top-1/2 -translate-y-1/2 text-outline font-headline-sm text-headline-sm">$</span>
                      <input className="w-full bg-white border border-outline-variant p-4 pl-10 focus:ring-primary focus:border-primary text-headline-sm font-headline-sm" placeholder="Other Amount" type="number" />
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                      <input className="bg-white border border-outline-variant p-4 focus:ring-primary focus:border-primary" placeholder="First Name" type="text" />
                      <input className="bg-white border border-outline-variant p-4 focus:ring-primary focus:border-primary" placeholder="Last Name" type="text" />
                      <input className="md:col-span-2 bg-white border border-outline-variant p-4 focus:ring-primary focus:border-primary" placeholder="Email Address" type="email" />
                    </div>

                    <div className="flex flex-col gap-4">
                      <label className="font-label-md text-label-md text-on-surface-variant uppercase tracking-widest">Payment Method</label>
                      <div className="flex flex-wrap gap-4 items-center">
                        <button className="flex-1 min-w-[120px] h-16 border border-outline-variant flex items-center justify-center hover:bg-surface-container transition-all" type="button">
                          <span className="material-symbols-outlined mr-2">credit_card</span>
                          <span className="font-label-md text-label-md uppercase">Card</span>
                        </button>
                        <button className="flex-1 min-w-[120px] h-16 border border-outline-variant flex items-center justify-center hover:bg-surface-container transition-all" type="button">
                          <span className="material-symbols-outlined mr-2">payments</span>
                          <span className="font-label-md text-label-md uppercase">PayPal</span>
                        </button>
                      </div>
                      <div className="flex gap-4 mt-2 justify-center opacity-60">
                        <span className="material-symbols-outlined">shield_lock</span>
                        <span className="text-label-sm font-label-sm uppercase tracking-wider">Secure Encrypted Payment</span>
                      </div>
                    </div>

                    <button className="w-full bg-vibrant-orange text-white py-6 font-label-md text-label-md uppercase tracking-[0.2em] hover:brightness-110 active:scale-[0.98] transition-all shadow-lg" type="button">
                      Complete My Donation
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="py-section-gap bg-white border-t border-surface-container-high">
          <div className="container mx-auto px-margin-mobile md:px-margin-desktop text-center max-w-4xl">
            <span className="font-label-md text-label-md text-secondary uppercase tracking-[0.3em] mb-4 block">Trust and Accountability</span>
            <h2 className="font-headline-md text-headline-md text-primary mb-12">How Your Funds Are Used</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
              {[
                { percent: '90%', label: 'Direct Impact', text: 'Funds applied directly to program services and community initiatives.' },
                { percent: '7%', label: 'Fundraising', text: 'Investment into donor acquisition and long-term funding stability.' },
                { percent: '3%', label: 'Admin', text: 'Essential operations and oversight to maintain transparency.' },
              ].map((item) => (
                <div className="flex flex-col items-center" key={item.label}>
                  <div className="mb-6 w-32 h-32 rounded-full border-8 border-surface-container-high flex items-center justify-center">
                    <div className="font-headline-sm text-headline-sm text-primary">{item.percent}</div>
                  </div>
                  <h4 className="font-label-md text-label-md uppercase mb-2">{item.label}</h4>
                  <p className="font-body-md text-body-md text-on-surface-variant">{item.text}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="relative py-section-gap overflow-hidden group">
          <div className="absolute inset-0 z-0">
            <div
              className="bg-cover bg-center w-full h-full grayscale-[20%] transition-transform duration-700 group-hover:scale-110"
              style={{
                backgroundImage:
                  "url('https://lh3.googleusercontent.com/aida-public/AB6AXuDsihpUOMx77MiFnBjRgrS2GQTCydELEuNyWTJh-F8RtJOXm85Q5AF8Dqo9VHT-J6cxlg23KQXjyd__rMYGepxJxRxIVTn7yH7DGs7TbcDhsSmovkWasXW2UW1Q9Cz4Db5m_L0nxCwbRoIMN89xNOW6mlXbQY1AkCeHPLXRFOBAkfQ3KqvOW8qp3PrsANDEuJcGV15TyazxWbluj-tiwxVeyfcpozSmfvvaNyke-jqF8THLBf2XbNM1ZhYMNZcuu3T7m6nhKILxw1Ps')",
              }}
            />
            <div className="absolute inset-0 bg-primary/60 backdrop-blur-[2px]" />
          </div>
          <div className="container mx-auto px-margin-mobile relative z-10 text-center text-white max-w-2xl">
            <h2 className="font-headline-md text-headline-md mb-8">Every child deserves a safe environment to grow, play, and dream.</h2>
            <button className="bg-white text-primary px-12 py-5 font-label-md text-label-md uppercase tracking-[0.2em] hover:bg-vibrant-orange hover:text-white transition-all" type="button">
              Make a Difference Today
            </button>
          </div>
        </section>
      </main>

      <footer className="bg-tertiary text-on-tertiary w-full px-margin-mobile md:px-margin-desktop py-section-gap flex flex-col items-center text-center gap-12">
        <div className="flex flex-col items-center gap-4">
          <img alt="USEC Footer Logo" className="h-16 w-auto brightness-0 invert opacity-80" src="/usec-navbar-logo.png" />
          <h2 className="font-headline-md text-headline-md">United Safe Environment Creators</h2>
          <p className="font-body-md text-body-md opacity-70 max-w-lg">Dedicated to humanitarian integrity and creating sustainable safety for the world's most vulnerable populations since 2012.</p>
        </div>
        <div className="flex flex-wrap justify-center gap-8 md:gap-16">
          <div className="flex flex-col gap-3">
            <span className="font-label-md text-label-md uppercase tracking-widest text-vibrant-orange">Organization</span>
            <a className="font-body-md text-body-md opacity-70 hover:opacity-100 transition-opacity" href="#">About Our Mission</a>
            <a className="font-body-md text-body-md opacity-70 hover:opacity-100 transition-opacity" href="/annual-reports">Annual Reports</a>
            <a className="font-body-md text-body-md opacity-70 hover:opacity-100 transition-opacity" href="#">Careers</a>
          </div>
          <div className="flex flex-col gap-3">
            <span className="font-label-md text-label-md uppercase tracking-widest text-vibrant-orange">Get Involved</span>
            <a className="font-body-md text-body-md opacity-70 hover:opacity-100 transition-opacity" href="#">Volunteer Programs</a>
            <a className="font-body-md text-body-md opacity-70 hover:opacity-100 transition-opacity" href="#">Corporate Partnership</a>
            <a className="font-body-md text-body-md opacity-70 hover:opacity-100 transition-opacity" href="#">Advocacy</a>
          </div>
          <div className="flex flex-col gap-3">
            <span className="font-label-md text-label-md uppercase tracking-widest text-vibrant-orange">Support</span>
            <a className="font-body-md text-body-md opacity-70 hover:opacity-100 transition-opacity" href="#">Help Center</a>
            <a className="font-body-md text-body-md opacity-70 hover:opacity-100 transition-opacity" href="/privacy-policy">Privacy Policy</a>
            <a className="font-body-md text-body-md opacity-70 hover:opacity-100 transition-opacity" href="/contact-us">Contact Us</a>
          </div>
        </div>
        <div className="w-full h-px bg-white/10 mt-8" />
        <div className="flex flex-col md:flex-row justify-between items-center w-full gap-4">
          <p className="font-body-md text-body-md opacity-50">Â© 2024 USEC. Humanitarian Integrity.</p>
          <div className="flex gap-6">
            <a className="material-symbols-outlined text-white/50 hover:text-vibrant-orange transition-colors" href="#">public</a>
            <a className="material-symbols-outlined text-white/50 hover:text-vibrant-orange transition-colors" href="#">alternate_email</a>
            <a className="material-symbols-outlined text-white/50 hover:text-vibrant-orange transition-colors" href="#">share</a>
          </div>
        </div>
      </footer>
    </div>
  )
}

export default DonatePage

