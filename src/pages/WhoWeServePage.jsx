import SiteNavbar from '../components/SiteNavbar'
import useWhoWeAreReveal from '../hooks/useWhoWeAreReveal'
import heroimo from "../assets/images/who-we-serve/hero-imo.jpeg";
import server1 from "../assets/images/who-we-serve/childrens.png";
import server2 from "../assets/images/who-we-serve/girls.jpeg";
import server3 from "../assets/images/who-we-serve/women.jpg";
import donateprotect from '../assets/images/Protection-imo/donate-protect.png'

function WhoWeServePage() {
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
    <div className="bg-surface text-on-background">
      <SiteNavbar activePage="about" />

      <main className="pt-20">
        <section className="relative h-[70vh] flex items-end overflow-hidden">
          <div className="absolute inset-0 bg-deep-navy">
             <img
              src={heroimo}
              alt="About USEC Hero"
              className="w-full h-full object-cover opacity-60"
             />
             <div className="absolute inset-0 bg-black/60"></div>
          </div>
          <div className="relative z-10 w-full max-w-container-max mx-auto px-margin-mobile md:px-margin-desktop pb-24 text-white">
            
            <h1 className="font-display-lg text-display-lg-mobile md:text-display-lg max-w-3xl mb-8 mb-14 border-l-[43px] border-vibrant-orange pb-[10px] pl-[30px]">
              Who We Serve
            </h1>
            <span className="font-display-lg font-bold text-2xl md:text-3xl lg:text-4xl text-white leading-tight mb-8 max-w-3xl">
              Upholding Dignity for Refugees and <br /> Host Communities.
            </span>
            <p className="font-body-lg text-body-lg max-w-2xl text-white/90">
            {/* <p className="mb-35 font-body-lg text-body-lg max-w-2xl text-white/90"> */}
              We serve those at the margins of humanity: refugees, displaced families, and survivors of conflict, providing more than aid and a path toward self-reliance.
            </p>
          </div>
          <WavyBottomDivider />
        </section>

        <section className="py-section-gap px-margin-mobile md:px-margin-desktop max-w-container-max mx-auto">
          <div className="mb-16 text-center max-w-3xl mx-auto">
            <h2 className="font-headline-md text-headline-md mb-6">Target Populations</h2>
            <p className="font-body-md text-body-md text-on-surface-variant">
              Our efforts are concentrated on the most vulnerable sectors of global society, where intervention creates profound generational impact.
            </p>
          </div>

          <div className="grid grid-cols-1 gap-gutter">




           <article
           className="md:col-span-8 bg-white border border-surface-cream pl-5 sm:pl-8 md:pl-12 py-5 sm:py-8 md:py-12 group hover:shadow-lg transition-all duration-500 flex flex-col md:flex-row items-stretch justify-between gap-8"
           >
           {/* Left Side - Text and Button */}
            <div className="flex flex-col justify-between md:w-1/2">
          <div>
          <span className="material-symbols-outlined text-vibrant-orange text-4xl mb-6">
           diversity_3
          </span>

           <h3 className="font-headline-sm text-headline-sm mb-4">
           Refugee Children
          </h3>

         <p className="font-body-md text-body-md text-on-surface-variant max-w-md">
          Refugee children in Kakuma who face interrupted education, trauma,
           family separation, and protection risks are at the center of our work.
           Through our Education and Protection programs, USEC supports children
           with play-based learning, school readiness, remedial learning,
           child-friendly safe spaces, psychosocial support, and family
          reunification pathways in partnership with protection networks.
          </p>
          </div>

         <a
          href="/education-program"
           className="mt-8 md:mt-12 inline-block w-fit text-white border-2 border-vibrant-orange rounded-md bg-vibrant-orange hover:bg-transparent hover:text-vibrant-orange py-5 px-10 text-label-md transition-colors uppercase tracking-widest"
           >
           Learn More
           </a>
           </div>

           {/* Right Side - Image */}
           <div className="md:w-3/5 h-[500px] md:h-[600px] overflow-hidden">
            <img
              src={server1}
              alt="About USEC Hero"
              className="border-r-2 border-vibrant-orange w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
            />
            </div>
            </article>






            <article className="border-l-2 border-primary md:col-span-4 bg-surface-cream p-12">
            <span className="material-symbols-outlined text-vibrant-orange text-4xl mb-6">
            girl
            </span>
              {/* <span className="material-symbols-outlined text-deep-navy text-4xl mb-6">woman</span> */}
              <h3 className="font-headline-sm text-headline-sm mb-4">Adolescent Girls & Teenage Mothers</h3>
              <p className="font-body-md text-body-md text-on-surface-variant">
                Adolescent girls and teenage mothers in Kakuma face heightened risks of gender-based violence, early marriage, exploitation, and social exclusion. Through USEC’s GBV prevention and response programming, we provide safe referral pathways, survivor-centered support, awareness sessions on rights and protection, and practical life-skills and livelihood opportunities that help girls and young mothers rebuild confidence, safety, and long-term self-reliance.
              </p>
            </article>

            <article className="border-l-2 border-primary md:col-span-8 relative overflow-hidden h-[400px]">
              <img
                  src={server2}
                  alt="About USEC Hero"
                  className="h-screen w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                />
              <div className="absolute inset-0 bg-black/40 p-12 flex flex-col justify-end text-white">
                <a href="http://localhost:5174/gbv-response-prevention" className="font-bold mt-6 inline-flex items-center justify-center bg-white border border-white text-primary px-16 py-5 w-fit font-label-md text-label-md uppercase tracking-wider rounded-lg hover:bg-transparent hover:border-2 hover:text-white transition-all">
                Learn More
                </a>
              </div>
            </article>


          

          <article className="py-32 bg-white relative overflow-hidden border border-surface-variant/20 group">
            <div className="absolute -top-40 left-[22%] w-[480px] h-[480px] rounded-full border-[80px] border-primary/10 pointer-events-none"></div>
            <div className="absolute -bottom-32 right-[-5%] w-[500px] h-[300px] bg-primary/80 rotate-[-25deg] rounded-[40%] pointer-events-none"></div>

           <div className="absolute top-0 right-0 w-32 h-32 bg-vibrant-orange transform translate-x-16 -translate-y-16 rotate-45 opacity-10"></div>

           <div className="relative z-10 grid grid-cols-1 md:grid-cols-2 items-stretch">
            <div className="h-64 md:h-full overflow-hidden">
           <img
           src={server3}
           alt="Refugee children learning together"
           className="border-l-2 border-vibrant-orange h-full w-full object-cover group-hover:scale-105 transition-transform duration-700"
          />
          </div>

          <div className="p-5 md:p-6 lg:p-7 text-center md:text-left flex flex-col">
          <span className="material-symbols-outlined text-vibrant-orange text-4xl mb-6">
            woman
          </span>


          <h3 className="font-headline-sm text-headline-sm mb-4">
          Vulnerable Women & Caregivers
          </h3>

          <p className="font-body-md text-body-md text-on-surface-variant max-w-md">
          Vulnerable women and caregivers in Kakuma, including single mothers and women at risk of exclusion, need practical livelihood pathways, protection referrals, and community-based support. Through USEC’s livelihoods and protection programming, we provide skills training, entrepreneurship support, case referral pathways, and rights-based community advocacy that strengthen household resilience, safety, and long-term self-reliance.
         </p>

         <a
          href="http://localhost:5174/livelihood-activities"
          className="hover:bg-transparent hover:text-vibrant-orange py-5 px-10 mt-8 inline-block w-fit text-white border-2 border-vibrant-orange bg-vibrant-orange rounded-md py-4 px-8 text-label-md transition-colors uppercase tracking-widest"
         >
           Learn More
         </a>
         </div>
        </div>
        </article>
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
        <div className="flex flex-col md:flex-row justify-between items-start px-margin-mobile md:px-margin-desktop py-16 gap-gutter max-w-container-max mx-auto">
          <div className="max-w-xs">
            <span className="font-headline-sm text-white block mb-6">USEC.org</span>
            <p className="font-body-md text-white/60 mb-8">
              United Safe Environment Creators is a global non-profit dedicated to serving marginalized communities through sustainable action and human-centric intervention.
            </p>
          </div>
          <div className="grid grid-cols-2 gap-16">
            <div>
              <h5 className="font-label-md text-label-md uppercase tracking-widest text-vibrant-orange mb-6">Navigation</h5>
              <ul className="space-y-4">
                <li><a className="text-white/80 hover:text-white transition-colors" href="/">Home</a></li>
                <li><a className="text-white/80 hover:text-white transition-colors" href="/about-us">About Us</a></li>
                <li><a className="text-white/80 hover:text-white transition-colors" href="/our-programs">Our Programs</a></li>
                <li><a className="text-white/80 hover:text-white transition-colors" href="/our-impact">Our Impact</a></li>
              </ul>
            </div>
            <div>
              <h5 className="font-label-md text-label-md uppercase tracking-widest text-vibrant-orange mb-6">Resources</h5>
              <ul className="space-y-4">
                <li><a className="text-white/80 hover:text-white transition-colors" href="/privacy-policy">Privacy Policy</a></li>
                <li><a className="text-white/80 hover:text-white transition-colors" href="/terms-of-service">Terms of Service</a></li>
              </ul>
            </div>
          </div>
        </div>
      </footer>
    </div>
  )
}

export default WhoWeServePage
