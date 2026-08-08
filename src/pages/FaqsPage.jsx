import { useMemo, useState } from 'react'
import SiteNavbar from '../components/SiteNavbar'
import useWhoWeAreReveal from '../hooks/useWhoWeAreReveal'

const categories = [
  { key: 'organization', label: 'ORGANIZATION', icon: 'public' },
  { key: 'donations', label: 'DONATIONS', icon: 'volunteer_activism' },
  { key: 'programs', label: 'PROGRAMS', icon: 'diversity_3' },
  { key: 'help', label: 'GETTING HELP', icon: 'support_agent' },
]

const faqItems = [
  {
    category: 'organization',
    question: 'What is the primary mission of USEC?',
    answer:
      'United Safe Environment Creators (USEC) is dedicated to fostering sustainable human-environment interactions. Our primary mission is to protect fragile ecosystems while empowering local communities through education, resource management, and direct intervention programs. We believe that a safe environment is a fundamental human right.',
  },
  {
    category: 'donations',
    question: 'How can I ensure my donation is being used effectively?',
    answer:
      "Transparency is a core value of USEC. We publish audited financial reports annually and provide regular impact updates via our 'Our Impact' dashboard. Over 85% of every donation goes directly toward field programs. You can track the specific progress of campaigns you've contributed to through your donor portal account.",
  },
  {
    category: 'programs',
    question: 'Are there volunteer opportunities available internationally?',
    answer:
      "Yes. We offer both remote and on-the-ground volunteer opportunities across five continents. Whether you're a specialist in environmental science or simply wish to provide manual labor for habitat restoration, we have a place for you. Visit our Get Involved page to see current openings and application requirements.",
  },
  {
    category: 'help',
    question: 'What should I do if I witness an environmental violation?',
    answer:
      "We maintain a confidential Help and Reporting line available 24/7. If you witness illegal dumping, poaching, or habitat destruction in one of our project areas, please use the contact form on our Contact Us page or call our emergency hotline. We coordinate directly with local authorities to ensure immediate response and legal follow-up.",
  },
  {
    category: 'programs',
    question: 'Does USEC offer educational resources for schools?',
    answer:
      "Absolutely. Our Earth Educators program provides free, curriculum-aligned resources for teachers and community leaders. We also offer virtual field trips and guest speaker sessions for schools participating in our Green Campus initiative. These can be requested through our educational outreach channels.",
  },
]

function FaqsPage() {
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

  const [selectedCategory, setSelectedCategory] = useState('organization')
  const [searchTerm, setSearchTerm] = useState('')
  const [openIndex, setOpenIndex] = useState(0)

  const visibleItems = useMemo(() => {
    return faqItems.filter((item) => {
      const categoryMatch = selectedCategory ? item.category === selectedCategory : true
      const searchMatch = searchTerm
        ? item.question.toLowerCase().includes(searchTerm.toLowerCase()) || item.answer.toLowerCase().includes(searchTerm.toLowerCase())
        : true
      return categoryMatch && searchMatch
    })
  }, [selectedCategory, searchTerm])

  return (
    <div className="bg-surface text-on-background font-body-md overflow-x-hidden">
      <SiteNavbar activePage="about" />

      <main className="min-h-screen pt-20">
        <section className="relative h-[50vh] min-h-[450px] flex items-center bg-deep-navy overflow-hidden">
          <div className="relative z-10 px-margin-mobile md:px-margin-desktop max-w-container-max mx-auto w-full">
            <div className="max-w-3xl">
              <span className="text-vibrant-orange font-label-md uppercase tracking-[0.2em] mb-4 block">Information Center</span>
              <h1 className="font-display-lg text-display-lg-mobile md:text-display-lg text-white mb-6">Frequently Asked Questions</h1>
              <p className="text-white/80 font-body-lg max-w-xl">
                Transparent answers to help you understand our mission, manage your contributions, and join our global movement for change.
              </p>
            </div>
          </div>
          <WavyBottomDivider />
        </section>

        <section className="py-20 px-margin-mobile md:px-margin-desktop max-w-container-max mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-gutter">
            <aside className="hidden lg:block lg:col-span-3 space-y-4">
              <div className="sticky top-28 p-6 bg-surface-cream rounded-xl border border-outline-variant/30">
                <h3 className="font-headline-sm text-headline-sm text-deep-navy mb-6">Categories</h3>
                <nav className="flex flex-col gap-2">
                  {categories.map((category) => {
                    const active = selectedCategory === category.key
                    return (
                      <button
                        key={category.key}
                        type="button"
                        onClick={() => {
                          setSelectedCategory(category.key)
                          setOpenIndex(0)
                        }}
                        className={`flex items-center gap-3 px-4 py-3 rounded-xl transition-all text-left ${
                          active
                            ? 'bg-secondary-container text-on-secondary-container font-bold'
                            : 'text-on-surface-variant hover:bg-surface-container-high'
                        }`}
                      >
                        <span className="material-symbols-outlined">{category.icon}</span>
                        <span className="text-label-md">{category.label}</span>
                      </button>
                    )
                  })}
                </nav>
              </div>
            </aside>

            <div className="lg:col-span-9">
              <div className="mb-12">
                <div className="relative group">
                  <input
                    className="w-full bg-white border border-outline-variant py-4 px-12 rounded-xl focus:ring-2 focus:ring-deep-navy focus:border-deep-navy transition-all outline-none text-body-lg"
                    placeholder="Search for answers..."
                    type="text"
                    value={searchTerm}
                    onChange={(event) => {
                      setSearchTerm(event.target.value)
                      setOpenIndex(0)
                    }}
                  />
                  <span className="material-symbols-outlined absolute left-4 top-1/2 -translate-y-1/2 text-outline">search</span>
                </div>
              </div>

              <div className="space-y-4">
                {visibleItems.length === 0 ? (
                  <div className="border border-surface-variant rounded-xl bg-white px-6 py-8">
                    <p className="text-on-surface-variant">No FAQs match your search in this category. Try another category or keyword.</p>
                  </div>
                ) : (
                  visibleItems.map((item, index) => {
                    const isOpen = openIndex === index
                    return (
                      <article key={item.question} className="border border-surface-variant rounded-xl overflow-hidden bg-white hover:border-vibrant-orange/50 transition-colors">
                        <button
                          type="button"
                          className="w-full px-6 py-6 flex justify-between items-center text-left"
                          onClick={() => setOpenIndex(isOpen ? -1 : index)}
                        >
                          <span className="font-headline-sm text-headline-sm text-deep-navy pr-8">{item.question}</span>
                          <span className={`material-symbols-outlined transition-transform text-vibrant-orange ${isOpen ? 'rotate-180' : ''}`}>expand_more</span>
                        </button>
                        <div className={`px-6 overflow-hidden transition-all duration-300 ${isOpen ? 'max-h-[500px] pb-6' : 'max-h-0 pb-0'}`}>
                          <p className="text-on-surface-variant leading-relaxed font-body-md">{item.answer}</p>
                        </div>
                      </article>
                    )
                  })
                )}
              </div>

              <div className="mt-section-gap bg-deep-navy rounded-2xl p-12 text-center text-white relative overflow-hidden">
                <div className="absolute top-0 left-0 w-full h-full opacity-10 pointer-events-none">
                  <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-vibrant-orange/40 via-transparent to-transparent" />
                </div>
                <h2 className="font-headline-md text-headline-md mb-4">Still have questions?</h2>
                <p className="text-on-primary-container font-body-lg mb-8 max-w-xl mx-auto">
                  Our dedicated support team is here to help you. Reach out through our contact channels and we will get back to you within 24 hours.
                </p>
                <div className="flex flex-col sm:flex-row justify-center gap-4">
                  <a className="bg-vibrant-orange text-white px-8 py-3 rounded-xl font-bold hover:scale-105 transition-transform" href="/contact-us">
                    Contact Support
                  </a>
                  <a className="border border-white/30 text-white px-8 py-3 rounded-xl font-bold hover:bg-white/10 transition-colors" href="/contact-us">
                    Call Hotline
                  </a>
                </div>
              </div>
            </div>
          </div>
        </section>

      </main>

      <footer className="bg-deep-navy text-white w-full mt-section-gap">
        <div className="flex flex-col md:flex-row justify-between items-center px-margin-mobile md:px-margin-desktop py-12 gap-gutter max-w-container-max mx-auto">
          <div className="flex flex-col items-center md:items-start gap-4">
            <div className="flex items-center gap-2">
              <img alt="USEC Logo" className="h-8 w-auto invert" src="/usec-navbar-logo.png" />
              <span className="font-headline-sm text-white">USEC.org</span>
            </div>
            <p className="font-body-md text-white/60 max-w-xs text-center md:text-left">Empowering safe environment creators since 2010.</p>
          </div>

          <nav className="flex flex-wrap justify-center gap-8 my-8 md:my-0">
            <a className="font-body-md text-white/80 hover:text-vibrant-orange transition-colors" href="/privacy-policy">Privacy Policy</a>
            <a className="font-body-md text-white/80 hover:text-vibrant-orange transition-colors" href="/terms-of-service">Terms of Service</a>
            <a className="font-body-md text-vibrant-orange underline" href="/faqs">FAQ</a>
          </nav>

          <div className="flex flex-col items-center md:items-end gap-4">
            <div className="flex gap-4">
              <button className="p-2 bg-white/10 rounded-full hover:bg-white/20 transition-all" type="button"><span className="material-symbols-outlined">share</span></button>
              <button className="p-2 bg-white/10 rounded-full hover:bg-white/20 transition-all" type="button"><span className="material-symbols-outlined">rss_feed</span></button>
              <button className="p-2 bg-white/10 rounded-full hover:bg-white/20 transition-all" type="button"><span className="material-symbols-outlined">public</span></button>
            </div>
            <span className="font-body-md text-white/60 text-sm">(c) 2024 United Safe Environment Creators (USEC). All rights reserved.</span>
          </div>
        </div>
      </footer>
    </div>
  )
}

export default FaqsPage
