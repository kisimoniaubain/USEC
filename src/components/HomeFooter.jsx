import LanguageSelector from './LanguageSelector'
import footerlogo from '../assets/logo.png'

function HomeFooter({ language, setLanguage, t, languages }) {
  const socialLinks = [
    { name: 'Facebook', href: 'https://www.facebook.com', icon: 'https://cdn.jsdelivr.net/npm/simple-icons@v11/icons/facebook.svg' },
    { name: 'YouTube', href: 'https://www.youtube.com', icon: 'https://cdn.jsdelivr.net/npm/simple-icons@v11/icons/youtube.svg' },
    { name: 'LinkedIn', href: 'https://www.linkedin.com', icon: 'https://cdn.jsdelivr.net/npm/simple-icons@v11/icons/linkedin.svg' },
    { name: 'Instagram', href: 'https://www.instagram.com', icon: 'https://cdn.jsdelivr.net/npm/simple-icons@v11/icons/instagram.svg' },
    { name: 'Twitter', href: 'https://www.twitter.com', icon: 'https://cdn.jsdelivr.net/npm/simple-icons@v11/icons/twitter.svg' },
  ]

  return (
    // <footer className="bg-primary text-white pt-12 pb-6">
    <footer className="border-t border-white bg-primary pt-12 pb-6 text-white">
      <div className="container mx-auto px-margin-mobile md:px-margin-desktop">
        <div className="grid grid-cols-1 md:grid-cols-6 gap-8 mb-10">
          <div className="col-span-1 md:col-span-2">
            
            <a href="/" className="mb-8 flex items-center gap-1">
            <img
              src={footerlogo}
              alt="footer logo"
              className="h-14 md:h-16 w-auto object-contain brightness-0 invert"
            />

            <div className="mb-2 flex flex-col leading-none">
              <p className="font-extrabold text-xl md:text-2xl tracking-tight">
                USEC<span className="font-normal">.org</span>
              </p>
          <p className="mt-1 text-[8px] md:text-[9px] font-semibold uppercase tracking-[0.05em]">
            Community Based
          </p>
          <p className="text-[8px] md:text-[9px] font-semibold uppercase tracking-[0.05em]">
            Organisation
          </p> 
            </div>
          </a>

            <p className="font-body-md text-body-md text-white/60 leading-relaxed">
              Refugee-led community action for education, protection, livelihoods, and GBV prevention in Kakuma.
              <br />
              We partner with communities to strengthen dignity, safety, and long-term self-reliance for displaced families.
            </p>
          </div>
          <div>
            <h5 className="font-label-md text-label-md uppercase tracking-widest text-vibrant-orange mb-8">Programs</h5>
            <ul className="space-y-1 font-body-md text-body-md text-white/70">
            {/* <ul className="space-y-1 font-body-md text-body-md font-semibold text-white/70"> */}
              {[
                { label: 'Education Activities', href: '/education-program' },
                { label: 'Protection Activities', href: '/protection-activities' },
                { label: 'Livelihood Activities', href: '/livelihood-activities' },
                { label: 'GBV Response & Prevention', href: '/gbv-response-prevention' },
              ].map((item) => (
                <li key={item.label}><a className="hover:text-white transition-colors" href={item.href}>{item.label}</a></li>
              ))}
            </ul>
          </div>
          <div>
            <h5 className="font-label-md text-label-md uppercase tracking-widest text-vibrant-orange mb-8">EXPLORE</h5>
            <ul className="space-y-1 font-body-md text-body-md text-white/70">
              {[
                { label: 'Home', href: '/' },
                { label: 'About Us', href: '/about-us' },
                { label: 'Our Programs', href: '/our-programs' },
                { label: 'Get Involved', href: '/get-involved' },
                { label: 'Our Impact', href: '/our-impact' },
                { label: 'Gallery', href: '/gallery' },
                { label: 'Contact Us', href: '/contact-us' },
              ].map((item) => (
                <li key={item.label}><a className="hover:text-white transition-colors" href={item.href}>{item.label}</a></li>
              ))}
            </ul>
          </div>
          <div>
            <h5 className="font-label-md text-label-md uppercase tracking-widest text-vibrant-orange mb-8">Support</h5>
            <ul className="space-y-1 font-body-md text-body-md text-white/70">
              {[
                { label: 'Donate Now', href: '/donate' },
                { label: 'Corporate Giving', href: '/donate#donate-form' },
                { label: 'Planned Giving', href: '/donate#donate-form' },
                { label: 'Volunteer', href: '#' },
              ].map((item) => (
                <li key={item.label}><a className="hover:text-white transition-colors" href={item.href}>{item.label}</a></li>
              ))}
            </ul>
          </div>
          <div>
            <h5 className="font-label-md text-label-md uppercase tracking-widest text-vibrant-orange mb-8">LEGAL</h5>
            <div className="space-y-1 font-body-md text-body-md text-white/70">
              <LanguageSelector language={language} setLanguage={setLanguage} t={t} languages={languages} />
              <div className="pt-3 border-t border-white/10">
                <ul className="space-y-1">
                  <li>
                    <a href="/privacy-policy" className="text-white/70 hover:text-white transition-colors">{t('privacyPolicy')}</a>
                  </li>
                  <li>
                    <a href="/terms-of-service" className="text-white/70 hover:text-white transition-colors">{t('termsOfService')}</a>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
        <div className="mt-6 mb-4 flex flex-col gap-4 sm:flex-row sm:items-end sm:justify-between">
          <div className="w-full sm:max-w-lg">
            <p className="font-label-sm text-label-sm uppercase tracking-widest text-white/70 mb-2">Stay informed</p>
            <div className="flex flex-col gap-3 sm:flex-row sm:items-center">
              <input
                type="email"
                placeholder="Enter your email address"
                className="w-full rounded-2xl border border-white/20 bg-white/10 px-4 py-3 text-sm text-white placeholder:text-white/40 outline-none focus:border-vibrant-orange focus:ring-2 focus:ring-vibrant-orange/20"
              />
              <button
                type="button"
                className="hover:bg-white hover:text-primary inline-flex items-center justify-center rounded-2xl bg-vibrant-orange px-5 py-3 text-white font-semibold text-primary transition hover:bg-orange-500"
              >
                Subscribe
              </button>
            </div>
          </div>
          <div className="flex justify-end gap-3">
            {socialLinks.map((item) => (
              <a
                key={item.name}
                href={item.href}
                target="_blank"
                rel="noreferrer"
                aria-label={item.name}
                className="group inline-flex h-10 w-10 items-center justify-center rounded-2xl border border-white/20 bg-white/10 text-white shadow-xl shadow-white/5 transition-all duration-300 hover:border-primary hover:bg-white"
              >
                <img
                  src={item.icon}
                  alt={item.name}
                  className="h-5 w-5 invert transition-all duration-300 group-hover:invert-0"
                />
              </a>
            ))}
          </div>
        </div>
        <div className="pt-8 border-t border-white/10 flex justify-center">
          <div className="text-center font-label-sm text-label-sm text-white/40">
            {/* {t('copyright')} */}
            © 2026 United Safe Environment Creators (USEC). All Rights Reserved.
          </div>
        </div>
      </div>
    </footer>
  )
}

export default HomeFooter
