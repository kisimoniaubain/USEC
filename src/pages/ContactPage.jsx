import React, { useRef, useState } from 'react';
import emailjs from '@emailjs/browser';
import SiteNavbar from '../components/SiteNavbar';
import contacthero from '../assets/images/contactimo/contact-hero.jpg'
// import { MapPin } from "lucide-react"; // Option 1: Using Lucide React Icons


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
  const formRef = useRef(null);
  const [status, setStatus] = useState({ type: 'idle', message: '' });

  const handleSubmit = (event) => {
    event.preventDefault();

    const serviceId = import.meta.env.VITE_EMAILJS_SERVICE_ID;
    const templateId = import.meta.env.VITE_EMAILJS_TEMPLATE_ID;
    const publicKey = import.meta.env.VITE_EMAILJS_PUBLIC_KEY;

    if (!serviceId || !templateId || !publicKey) {
      setStatus({
        type: 'error',
        message: 'EmailJS is not configured yet. Please add your service ID, template ID, and public key.',
      });
      return;
    }

    setStatus({ type: 'loading', message: 'Sending your message...' });

    emailjs
      .sendForm(serviceId, templateId, formRef.current, publicKey)
      .then(() => {
        setStatus({
          type: 'success',
          message: 'Your message has been sent successfully. We will get back to you soon.',
        });
        formRef.current.reset();
      })
      .catch(() => {
        setStatus({
          type: 'error',
          message: 'Something went wrong. Please try again or email us directly.',
        });
      });
  };

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

      <h2 className="font-display-lg text-display-lg-mobile md:text-display-lg text-deep-navy mt-3">
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
<div
  className="
    mt-10
    lg:mt-40
    lg:col-span-7
    w-full
    bg-white
    p-4
    sm:p-6
    md:p-8
    lg:p-10
    rounded-3xl
    shadow-[0_20px_50px_rgba(0,0,0,0.06)]
    border border-slate-100
  "
>
  <form
    ref={formRef}
    onSubmit={handleSubmit}
    className="space-y-4 sm:space-y-5 lg:space-y-6"
  >
    <input type="hidden" name="_subject" value="New inquiry from USEC website" />
    <input type="hidden" name="_captcha" value="false" />

    {/* First + Last Name */}
    <div className="grid grid-cols-1 md:grid-cols-2 gap-4 lg:gap-6">

      {/* First Name */}
      <div className="space-y-1.5">
        <label className="text-xs sm:text-sm font-semibold text-slate-500">
          First name
        </label>

        <div className="relative flex items-center">
          <span className="material-symbols-outlined absolute left-3.5 text-slate-400 text-lg">
            person
          </span>

          <input
            type="text"
            name="firstName"
            placeholder="Mike"
            required
            autoComplete="given-name"
            className="
              w-full
              bg-slate-50
              border border-slate-200
              rounded-lg sm:rounded-xl
              py-3
              pl-10
              pr-3
              text-sm sm:text-base
              text-slate-800
              placeholder:text-slate-400
              focus:outline-none
              focus:ring-2
              focus:ring-orange-500/20
              focus:border-orange-500
              transition-all
            "
          />
        </div>
      </div>

      {/* Last Name */}
      <div className="space-y-1.5">
        <label className="text-xs sm:text-sm font-semibold text-slate-500">
          Last name
        </label>

        <div className="relative flex items-center">
          <span className="material-symbols-outlined absolute left-3.5 text-slate-400 text-lg">
            badge
          </span>

          <input
            type="text"
            name="lastName"
            placeholder="Type name"
            required
            autoComplete="family-name"
            className="
              w-full
              bg-slate-50
              border border-slate-200
              rounded-lg sm:rounded-xl
              py-3
              pl-10
              pr-3
              text-sm sm:text-base
              text-slate-800
              placeholder:text-slate-400
              focus:outline-none
              focus:ring-2
              focus:ring-orange-500/20
              focus:border-orange-500
              transition-all
            "
          />
        </div>
      </div>

    </div>

    {/* Email */}
    <div className="space-y-1.5">
      <label className="text-xs sm:text-sm font-semibold text-slate-500">
        Email
      </label>

      <div className="relative flex items-center">
        <span className="material-symbols-outlined absolute left-3.5 text-slate-400 text-lg">
          mail
        </span>

        <input
          type="email"
          name="email"
          placeholder="Type email"
          required
          autoComplete="email"
          className="
            w-full
            bg-slate-50
            border border-slate-200
            rounded-lg sm:rounded-xl
            py-3
            pl-10
            pr-3
            text-sm sm:text-base
            text-slate-800
            placeholder:text-slate-400
            focus:outline-none
            focus:ring-2
            focus:ring-orange-500/20
            focus:border-orange-500
            transition-all
          "
        />
      </div>
    </div>

    {/* Message */}
    <div className="space-y-1.5">
      <label className="text-xs sm:text-sm font-semibold text-slate-500">
        Message
      </label>

      <div className="relative">
        <span className="material-symbols-outlined absolute left-3.5 top-3.5 text-slate-400 text-lg">
          chat
        </span>

        <textarea
          name="message"
          rows={3}
          placeholder="Type message"
          required
          className="
            w-full
            bg-slate-50
            border border-slate-200
            rounded-lg sm:rounded-xl
            py-3
            pl-10
            pr-3
            text-sm sm:text-base
            text-slate-800
            placeholder:text-slate-400
            focus:outline-none
            focus:ring-2
            focus:ring-orange-500/20
            focus:border-orange-500
            transition-all
            resize-none
          "
        />
      </div>
    </div>

    {status.message && (
      <div
        className={`rounded-xl border px-3 py-2 text-sm ${
          status.type === 'success'
            ? 'border-green-200 bg-green-50 text-green-700'
            : status.type === 'error'
            ? 'border-red-200 bg-red-50 text-red-700'
            : 'border-orange-200 bg-orange-50 text-orange-700'
        }`}
      >
        {status.message}
      </div>
    )}

    {/* Button */}
    <button
      type="submit"
      disabled={status.type === 'loading'}
      className="
        w-full
        bg-orange-500
        hover:bg-orange-600
        disabled:cursor-not-allowed
        disabled:bg-orange-300
        text-white
        text-sm sm:text-base
        font-semibold
        py-3
        sm:py-4
        rounded-lg sm:rounded-xl
        transition-all
        shadow-md
        shadow-orange-500/20
        active:scale-[0.98]
      "
    >
      {status.type === 'loading' ? 'Sending...' : 'Send Message'}
    </button>

  </form>
</div>

  </div>
</div>

      {/* ---------------- MAP SECTION ---------------- */}
<section id="global-impact-map" className="w-full relative">
  <div className="w-full h-96 relative overflow-hidden rounded-lg shadow-lg">
    {/* Fully interactive iframe */}
    <iframe
      title="USEC Location Map - Kakuma"
      className="w-full h-full border-0"
      loading="lazy"
      referrerPolicy="no-referrer-when-downgrade"
      src="https://www.google.com/maps?q=Kakuma%2C%20Kenya&z=12&output=embed"
      allowFullScreen
    />
  </div>
</section>
    </div>
  );
}
// export default ContactPage