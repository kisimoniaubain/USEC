import SiteNavbar from '../components/SiteNavbar'
import useWhoWeAreReveal from '../hooks/useWhoWeAreReveal'

import team from "../assets/images/team-images/hero-imo.jpg";
import trustee1 from "../assets/images/team-images/trustee1.jpg";
import trustee2 from "../assets/images/team-images/trustee2.jpg";
import trustee3 from "../assets/images/team-images/trustee3.jpg";
import trustee4 from "../assets/images/team-images/trustee4.jpg";
import trustee5 from "../assets/images/team-images/trustee5.jpg";
import trustee6 from "../assets/images/team-images/trustee6.jpg";
import donateprotect from '../assets/images/Protection-imo/donate-protect.png'



const leadership = [
  {
    role: 'Program coordinator',
    name: 'Tiba Kakozi',
    bio: 'Tiba coordinates field implementation across education, protection, and livelihood activities, ensuring day-to-day program delivery stays aligned with community priorities.',
    image: '/images/Tiba.png',
    iconA: 'link',
    iconB: 'mail',
  },
  {
    role: 'Program manager',
    name: 'Amuri Robert Mwenda',
    bio: 'Amuri leads planning, monitoring, and operational performance, managing teams and resources to deliver impactful humanitarian programs efficiently and transparently.',
    image: '/images/Robert.png',
    iconA: 'link',
    iconB: 'mail',
  },
  {
    role: 'Co-founder and Executive Director',
    name: 'Abedi Kabulongo Salvador',
    bio: 'Abedi provides strategic leadership and organizational direction, driving partnerships, governance, and long-term vision for refugee-led community resilience and self-reliance.',
    image: '/images/Kabulo.jpg',
    iconA: 'group',
    iconB: 'mail',
  },
]


const trustees = [
  {
    name: "Trustee One",
    role: "Chairperson",
    image: trustee1,
  },
  {
    name: "Trustee Two",
    role: "Vice Chairperson",
    image: trustee2,
  },
  {
    name: "Trustee Three",
    role: "Secretary",
    image: trustee3,
  },
  {
    name: "Trustee Four",
    role: "Treasurer",
    image: trustee4,
  },
  {
    name: "Trustee Five",
    role: "Member",
    image: trustee5,
  },
  {
    name: "Trustee Six",
    role: "Member",
    image: trustee6,
  },
];

function TeamPage() {
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
    <div className="bg-surface font-body-md text-on-surface overflow-x-hidden">
      <SiteNavbar activePage="about" />

      <main className="pt-20">
        <section className="relative h-[60vh] md:h-[70vh] flex items-center overflow-hidden bg-deep-navy">
          <div className="absolute inset-0 z-0">
            <div/>
            <img
              // className="w-full h-full bg-cover bg-center opacity-40"
              className="hero-slide is-active absolute inset-0 h-full w-full object-cover"
              src={team}
              alt="Portrait"
              />
              <div className="absolute inset-0 bg-black/70"></div>
              {/* <div className="absolute inset-0 bg-black/60"></div> */}
          </div>
          <div className="relative z-10 px-margin-mobile md:px-margin-desktop max-w-container-max mx-auto w-full text-white">
            <div className="max-w-2xl">
              {/* <h1 className="block text-vibrant-orange font-display-lg font-bold text-5xl md:text-6xl lg:text-7xl leading-tight mb-4"> */}
              <h1 className="block text-white font-display-lg font-bold text-5xl md:text-6xl lg:text-7xl leading-tight mb-14 border-l-[43px] border-vibrant-orange pb-[10px] pl-[30px]"> 
                Our Team
              </h1>
              <h1 className="font-display-lg font-bold text-2xl md:text-3xl lg:text-4xl text-white leading-tight mb-4 max-w-3xl">
              Meet the Architects of Change
            </h1>
              <p className="font-body-lg text-body-lg text-white/90 max-w-lg">
                United Safe Environment Creators is driven by a global collective of experts, visionaries, and community leaders dedicated to sustainable humanitarian progress.
              </p>
            </div>
          </div>
          <WavyBottomDivider />
        </section>

        <section className="py-section-gap px-margin-mobile md:px-margin-desktop max-w-container-max mx-auto">
          <div className="mb-16 border-l-4 border-vibrant-orange pl-6">
            <h2 className="font-headline-md text-headline-md text-deep-navy mb-2">Executive Leadership</h2>
            <p className="font-body-md text-on-surface-variant max-w-xl">
              Guided by decades of experience in environmental safety and humanitarian aid, our leadership team ensures operational integrity and strategic growth.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-gutter">
            {leadership.map((member) => (
              <article key={member.name} className="bg-white border border-surface-cream rounded-lg overflow-hidden group hover:shadow-[0_10px_40px_-10px_rgba(3,51,71,0.04)] transition-all duration-300">
                <div className="aspect-[4/5] overflow-hidden">
                  <img alt={member.name} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700" src={member.image} />
                </div>
                <div className="p-8">
                  <span className="font-label-sm text-label-sm uppercase tracking-widest text-vibrant-orange mb-2 block">{member.role}</span>
                  <h3 className="font-headline-sm text-headline-sm text-deep-navy mb-4">{member.name}</h3>
                  <p className="font-body-md text-on-surface-variant line-clamp-3">{member.bio}</p>
                  <div className="mt-6 flex gap-4">
                    <span className="material-symbols-outlined text-deep-navy/40 hover:text-vibrant-orange transition-colors">{member.iconA}</span>
                    <span className="material-symbols-outlined text-deep-navy/40 hover:text-vibrant-orange transition-colors">{member.iconB}</span>
                  </div>
                </div>
              </article>
            ))}
          </div>
        </section>

        <section className="bg-surface-cream py-section-gap overflow-hidden">
          <div className="px-margin-mobile md:px-margin-desktop max-w-container-max mx-auto">
            <div className="grid grid-cols-1 md:grid-cols-12 gap-gutter items-center mb-16">
              <div className="md:col-span-5">
                <span className="font-label-md text-label-md uppercase tracking-[0.2em] text-deep-navy mb-4 block">The Field Expertise</span>
                <h2 className="font-headline-md text-headline-md text-deep-navy mb-6">Our Field Staff and Specialists</h2>
                <p className="font-body-md text-on-surface-variant">
                  Beyond the boardrooms, our success is defined by those who live and work alongside the communities we serve. Our experts bring specialized knowledge in hydrology, agriculture, and community health.
                </p>
              </div>
              <div className="md:col-span-7 hidden md:block">
                <div className="h-px bg-outline-variant w-full" />
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-4 gap-gutter">
              <div className="md:col-span-2 bg-white p-8 rounded-xl flex flex-col justify-between hover:shadow-[0_10px_40px_-10px_rgba(3,51,71,0.04)] transition-all group">
                <div>
                  <div className="flex items-center gap-10 mb-6 sm:flex-col sm:items-start sm:gap-4">
                  {/* <div className="flex items-center gap-4 mb-6"> */}
                    <div className="w-40 h-40 rounded-full overflow-hidden bg-surface-variant">
                      <img
                        alt="Tiba kakozi"
                        className="w-full h-full object-cover"
                        src="/images/Tiba.png"
                      />
                    </div>
                    <div>
                      <h4 className="font-headline-sm text-[20px] text-deep-navy">Tiba Kakozi</h4>
                      <span className="font-label-sm text-on-surface-variant">Program coordinator</span>
                    </div>
                  </div>
                  <p className="font-body-md text-on-surface-variant mb-8">
                    "Sustainability is not just a metric; it is a relationship. We work to restore that bond between the people and their land."
                  </p>
                </div>
                <a className="text-vibrant-orange font-label-md uppercase flex items-center gap-2 group-hover:gap-4 transition-all" href="/our-impact">
                  View Research <span className="material-symbols-outlined text-[18px]">arrow_forward</span>
                </a>
              </div>
              
              <div className="md:col-span-1 bg-deep-navy p-8 rounded-xl text-white flex flex-col justify-between group hover:bg-primary transition-colors">
                <span className="material-symbols-outlined text-[48px] text-vibrant-orange mb-6">verified</span>
                <div>
                  <h4 className="font-headline-sm text-[18px]">Community Liaison</h4>
                  <p className="font-label-sm opacity-70">Building bridges across 40+ regions globally.</p>
                </div>
              </div>

              <div className="md:col-span-3 bg-surface-variant p-8 rounded-xl flex items-center gap-8 group">
                <div className="flex-1">
                  <h4 className="font-headline-sm text-deep-navy mb-4">Global Volunteer Network</h4>
                  <p className="font-body-md text-on-surface-variant">
                    Our team is supported by a network of 500+ specialized volunteers who provide remote technical assistance and on-site support for critical missions.
                  </p>
                </div>
                <div className="hidden lg:flex w-24 h-24 bg-white rounded-full items-center justify-center text-vibrant-orange group-hover:rotate-12 transition-transform">
                  <span className="material-symbols-outlined text-[40px]">public</span>
                </div>
              </div>
            </div>
          </div>
        </section>



        <section className="py-section-gap px-margin-mobile md:px-margin-desktop max-w-container-max mx-auto text-center">
  <h2 className="font-headline-md text-deep-navy mb-12">
    Our Board of Trustees
  </h2>

  <div className="grid grid-cols-2 md:grid-cols-4 gap-gutter">
    {trustees.map((person) => (
      <div key={person.name} className="flex flex-col items-center">
        <div className="w-32 h-32 rounded-full bg-surface-cream mb-4 border border-outline-variant overflow-hidden">
          <img
            src={person.image}
            alt={person.name}
            className="w-full h-full object-cover"
          />
        </div>

        <h5 className="font-headline-sm text-[16px] text-deep-navy">
          {person.name}
        </h5>

        <span className="font-label-sm text-on-surface-variant">
          {person.role}
        </span>
      </div>
    ))}
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

      <footer className="bg-deep-navy text-white w-full mt-section-gap">
        <div className="flex flex-col md:flex-row justify-between items-center px-margin-mobile md:px-margin-desktop py-12 gap-gutter max-w-container-max mx-auto">
          <div className="flex flex-col items-center md:items-start gap-4">
            <div className="flex items-center gap-3">
              <img alt="USEC Logo" className="h-8 w-auto brightness-0 invert opacity-80" src="/usec-navbar-logo.png" />
              <span className="font-headline-sm text-white">USEC.org</span>
            </div>
            <p className="font-body-md text-white/60 text-center md:text-left max-w-xs">
              Building resilience and hope through environmental stewardship and community empowerment.
            </p>
          </div>
          <div className="flex flex-col items-center md:items-end gap-6">
            <div className="flex gap-8">
              <a className="font-body-md text-white/80 hover:text-vibrant-orange transition-colors" href="/privacy-policy">Privacy Policy</a>
              <a className="font-body-md text-white/80 hover:text-vibrant-orange transition-colors" href="/terms-of-service">Terms of Service</a>
              <a className="font-body-md text-white/80 hover:text-vibrant-orange transition-colors" href="/faqs">FAQ</a>
            </div>
            <p className="font-body-md text-white/60">(c) 2024 United Safe Environment Creators (USEC). All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  )
}

export default TeamPage
