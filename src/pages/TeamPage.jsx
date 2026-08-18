import SiteNavbar from '../components/SiteNavbar'
import useWhoWeAreReveal from '../hooks/useWhoWeAreReveal'

import team from "../assets/images/team-images/hero-imo.jpeg";
import trustee1 from "../assets/images/team-images/trustee1.jpg";
import trustee2 from "../assets/images/team-images/trustee2.jpg";
import trustee3 from "../assets/images/team-images/trustee3.jpg";
import trustee4 from "../assets/images/team-images/trustee4.jpg";
import trustee5 from "../assets/images/team-images/trustee5.jpg";
import trustee6 from "../assets/images/team-images/trustee6.jpg";
import trustee7 from "../assets/images/team-images/trustee7.jpg";
import trustee8 from "../assets/images/team-images/trustee8.jpg";
import donateprotect from '../assets/images/Protection-imo/donate-protect.png'



const leadership = [
  {
    role: 'Program coordinator',
    name: <>Gisma Abass<br />Kocho</>,
    bio: 'Tiba coordinates field implementation across education, protection, and livelihood activities, ensuring day-to-day program delivery stays aligned with community priorities.',
    image: '/images/Gisma.png',
    iconA: 'link',
    iconB: 'mail',
  },
  {
    role: 'Program manager',
    name: 'Amuri Robert Mwenda',
    bio: 'Amuri leads planning, monitoring, and operational performance, managing teams and resources to deliver impactful humanitarian programs efficiently and transparently.',
    image: '/images/Robert.jpeg',
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
  {
    name: "Trustee Six",
    role: "Member",
    image: trustee7,
  },
  {
    name: "Trustee Six",
    role: "Member",
    image: trustee8,
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
              className="hero-slide is-active absolute inset-0 h-full w-full object-cover object-top"
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



          <section className="py-20 md:py-28 px-margin-mobile md:px-margin-desktop max-w-container-max mx-auto">

          {/* SECTION HEADER */}
          <div className="mb-12 md:mb-16 max-w-3xl">

            <div className="flex items-start gap-4 md:gap-6">

              {/* Orange accent */}
              <div className="w-1.5 md:w-2 min-h-[90px] md:min-h-[110px] bg-vibrant-orange rounded-full shrink-0" />

              <div>
                <span className="block mb-3 md:mb-4 font-label-sm text-label-sm uppercase tracking-[0.2em] text-vibrant-orange">
                  Our Leadership
                </span>

                <h2 className="font-display-lg text-3xl sm:text-4xl md:text-5xl lg:text-6xl leading-tight text-deep-navy">
                  Executive Leadership
                </h2>

                <p className="mt-4 md:mt-5 max-w-2xl font-body-md text-base md:text-lg leading-relaxed text-on-surface-variant">
                  Guided by decades of experience in environmental safety and
                  humanitarian aid, our leadership team ensures operational
                  integrity, strategic growth, and meaningful impact across
                  the communities we serve.
                </p>
              </div>

            </div>

          </div>


          {/* LEADERSHIP CARDS */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">

            {leadership.map((member) => (

              <article
                key={member.name}
                className="
                  group
                  overflow-hidden
                  rounded-2xl
                  bg-white
                  border border-surface-cream
                  shadow-[0_8px_30px_rgba(3,51,71,0.05)]
                  transition-all
                  duration-500
                  hover:-translate-y-2
                  hover:shadow-[0_20px_50px_rgba(3,51,71,0.12)]
                "
              >

                {/* IMAGE */}
                <div className="relative aspect-[4/5] overflow-hidden bg-slate-100">

                  <img
                    src={member.image}
                    alt={member.name}
                    className="
                      w-full
                      h-full
                      object-cover
                      transition-transform
                      duration-700
                      group-hover:scale-105
                    "
                  />

                  {/* Image overlay */}
                  <div className="absolute inset-0 bg-gradient-to-t from-deep-navy/40 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

                </div>


                {/* CONTENT */}
                <div className="p-6 md:p-8">

                  {/* ROLE */}
                  <span className="block mb-2 font-label-sm text-label-sm uppercase tracking-[0.15em] text-vibrant-orange">
                    {member.role}
                  </span>

                  {/* NAME */}
                  <h3 className="font-display-lg text-2xl md:text-3xl leading-tight text-deep-navy">
                    {member.name}
                  </h3>

                  {/* BIO */}
                  <p className="mt-4 font-body-md text-sm md:text-base leading-relaxed text-on-surface-variant line-clamp-4">
                    {member.bio}
                  </p>

                </div>

              </article>

            ))}

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
              <span className="material-symbols-outlined text-lg transition-transform duration-300 group-hover:translate-x-1">
               arrow_forward
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
