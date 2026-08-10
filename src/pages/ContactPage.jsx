import React from 'react';
import SiteNavbar from '../components/SiteNavbar';
import contacthero from '../assets/images/contactimo/contact-hero.jpg'


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

export default function ContactSection() {
  return (
    <div className="w-full bg-slate-50 font-sans text-slate-700">
      <SiteNavbar activePage="contact" />
      {/* ---------------- HERO / HEADER SECTION ---------------- */}
      {/* =========================================================
    CONTACT US HERO
========================================================= */}
<section className="relative h-[70vh] min-h-[600px] flex items-end overflow-hidden">

  {/* BACKGROUND IMAGE */}
  <div className="absolute inset-0 bg-deep-navy">
    <img
      src={contacthero}
      alt="Contact USEC"
      className="w-full h-full object-cover object-[center_15%] opacity-60"
    />

    {/* DARK OVERLAY */}
    <div className="absolute inset-0 bg-black/55"></div>

  </div>


  {/* CONTENT */}
  <div className="relative z-10 w-full max-w-container-max mx-auto px-margin-mobile md:px-margin-desktop pb-20 md:pb-24 text-white">

    {/* MAIN TITLE */}
    <h1 className="font-display-lg text-display-lg-mobile md:text-display-lg max-w-4xl mb-8 border-l-[43px] border-vibrant-orange pl-[30px] leading-tight">
      Contact Us
    </h1>


    {/* SUBTITLE */}
    <span className="block font-display-lg font-bold text-2xl md:text-3xl lg:text-4xl text-white leading-tight mb-4 max-w-3xl">
      Let's Connect and Make a Difference Together
    </span>


    {/* DESCRIPTION */}
    <p className="font-body-lg text-body-lg max-w-2xl text-white/90 leading-relaxed">
      Whether you want to partner with us, volunteer, support our work,
      or simply learn more about our humanitarian and environmental
      initiatives, our team is ready to hear from you.
    </p>

  </div>


  {/* WAVY BOTTOM DIVIDER */}
  <WavyBottomDivider />

</section>

{/* ---------------- MAIN CONTENT SECTION ---------------- */}
<div className="max-w-6xl mx-auto px-6 -mt-20 relative z-20 pb-24">
  <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">

    {/* LEFT COLUMN: Contact Details */}
    <div className="mt-40 lg:col-span-5 space-y-10 pt-4 md:pt-8">

      <h2 className="text-4xl font-bold text-slate-900">
        Get in Touch
      </h2>

      {/* Phone */}
      <div>
        <h3 className="text-sm font-bold uppercase tracking-widest text-slate-400 mb-2">
          Phone
        </h3>
        <a
          href="tel:+15550123456"
          className="text-lg font-semibold text-slate-700 hover:text-orange-500 transition"
        >
          +254 711 881 346
        </a>
      </div>

{/* Email */}
<div>

  <h3 className="text-sm font-bold uppercase tracking-widest text-slate-400 mb-2">
    Email
  </h3>

  <div className="space-y-2 text-lg font-medium">

    <p>
    <a
      href="https://mail.google.com/mail/?view=cm&fs=1&to=useccbo@gmail.com&su=Inquiry%20from%20USEC%20Website"
      target="_blank"
      rel="noopener noreferrer"
      className="text-orange-500 hover:underline"
    >
      useccbo@gmail.com
    </a>
    </p>

    <p>
      <a
        href="https://mail.google.com/mail/?view=cm&fs=1&to=abedikabulo.salvador@gmail.com&su=Inquiry%20from%20USEC%20Website"
        target="_blank"
        rel="noopener noreferrer"
        className="text-orange-500 hover:underline"
      >
        abedikabulo.salvador@gmail.com
      </a>
    </p>

    <p>
      <a
        href="https://mail.google.com/mail/?view=cm&fs=1&to=robertamuri7@gmail.com&su=Inquiry%20from%20USEC%20Website"
        target="_blank"
        rel="noopener noreferrer"
        className="text-orange-500 hover:underline"
      >
        robertamuri7@gmail.com
      </a>
    </p>

  </div>

</div>

    </div>

    {/* RIGHT COLUMN: FORM */}
    <div className="mt-40 lg:col-span-7 bg-white p-8 md:p-10 rounded-3xl shadow-[0_20px_50px_rgba(0,0,0,0.06)] border border-slate-100">

      <form
        className="space-y-6"
        onSubmit={(event) => event.preventDefault()}
      >

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">

          {/* First Name */}
          <div className="space-y-2">

            <label className="text-sm font-semibold text-slate-500">
              First name
            </label>

            <div className="relative flex items-center">

              <span className="material-symbols-outlined absolute left-4 text-slate-400 text-xl">
                person
              </span>

              <input
                type="text"
                placeholder="Mike"
                className="w-full bg-slate-50 border border-slate-200 rounded-xl py-4 pl-12 pr-4 text-base text-slate-800 placeholder:text-slate-400 focus:outline-none focus:ring-2 focus:ring-orange-500/20 focus:border-orange-500 transition-all"
              />

            </div>

          </div>

          {/* Last Name */}
          <div className="space-y-2">

            <label className="text-sm font-semibold text-slate-500">
              Last name
            </label>

            <div className="relative flex items-center">

              <span className="material-symbols-outlined absolute left-4 text-slate-400 text-xl">
                badge
              </span>

              <input
                type="text"
                placeholder="Type name"
                className="w-full bg-slate-50 border border-slate-200 rounded-xl py-4 pl-12 pr-4 text-base text-slate-800 placeholder:text-slate-400 focus:outline-none focus:ring-2 focus:ring-orange-500/20 focus:border-orange-500 transition-all"
              />

            </div>

          </div>

        </div>

        {/* Email */}
        <div className="space-y-2">

          <label className="text-sm font-semibold text-slate-500">
            Email
          </label>

          <div className="relative flex items-center">

            <span className="material-symbols-outlined absolute left-4 text-slate-400 text-xl">
              mail
            </span>

            <input
              type="email"
              placeholder="Type email"
              className="w-full bg-slate-50 border border-slate-200 rounded-xl py-4 pl-12 pr-4 text-base text-slate-800 placeholder:text-slate-400 focus:outline-none focus:ring-2 focus:ring-orange-500/20 focus:border-orange-500 transition-all"
            />

          </div>

        </div>

        {/* Message */}
        <div className="space-y-2">

          <label className="text-sm font-semibold text-slate-500">
            Message
          </label>

          <div className="relative">

            <span className="material-symbols-outlined absolute left-4 top-4 text-slate-400 text-xl">
              chat
            </span>

            <textarea
              rows="5"
              placeholder="Type message"
              className="w-full bg-slate-50 border border-slate-200 rounded-xl py-4 pl-12 pr-4 text-base text-slate-800 placeholder:text-slate-400 focus:outline-none focus:ring-2 focus:ring-orange-500/20 focus:border-orange-500 transition-all resize-none"
            />

          </div>

        </div>

        {/* Button */}
        <button
          type="submit"
          className="w-full bg-orange-500 hover:bg-orange-600 text-white text-base font-semibold py-4 rounded-xl transition-all shadow-md shadow-orange-500/20 active:scale-95"
        >
          Send Message
        </button>

      </form>

    </div>

  </div>
</div>

      {/* ---------------- MAP SECTION ---------------- */}
      <section id="global-impact-map" className="w-full relative">
        <div className="w-full h-72 relative overflow-hidden grayscale contrast-125 opacity-70">
          <iframe
            title="USEC Location Map"
            className="w-full h-full border-0"
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
            src="https://www.google.com/maps?q=London%2C%20UK&z=12&output=embed"
          />
        </div>
      </section>
    </div>
  );
}
// export default ContactPage