import React, { useRef, useState } from 'react';
import SiteNavbar from '../components/SiteNavbar';
import contacthero from '../assets/images/contactimo/contact-hero.jpg';

const ContactPage = () => {
  const formRef = useRef(null);

  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  });

  const [status, setStatus] = useState({
    type: '',
    message: '',
  });

  const [isSubmitting, setIsSubmitting] = useState(false);

  // Newsletter
  const [subscriberEmail, setSubscriberEmail] = useState('');
  const [isSubscribing, setIsSubscribing] = useState(false);

  const [subscribeStatus, setSubscribeStatus] = useState({
    type: '',
    message: '',
  });

  const handleChange = (event) => {
    const { name, value } = event.target;

    setFormData((previous) => ({
      ...previous,
      [name]: value,
    }));
  };

  const handleSubmit = async (event) => {
    event.preventDefault();

    if (isSubmitting) return;

    setIsSubmitting(true);

    setStatus({
      type: '',
      message: '',
    });

    try {
      const fullName = formData.name.trim();

      const nameParts = fullName.split(/\s+/);

      const firstName = nameParts[0] || '';
      const lastName = nameParts.slice(1).join(' ') || '';

      if (!firstName || !lastName) {
        throw new Error(
          'Please enter your first name and last name.'
        );
      }

      const contactData = {
        firstName,
        lastName,
        email: formData.email.trim(),
        message: formData.message.trim(),
      };

      console.log('Sending contact form:', contactData);

      const response = await fetch('/api/contact', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(contactData),
      });

      const data = await response.json();

      if (!response.ok) {
        throw new Error(
          data.error ||
          data.message ||
          'Failed to send your message.'
        );
      }

      setStatus({
        type: 'success',
        message:
          "Thank you for contacting USEC! We'll get back to you as soon as possible.",
      });

      setFormData({
        name: '',
        email: '',
        message: '',
      });

      formRef.current?.reset();
    } catch (error) {
      console.error('Contact form error:', error);

      setStatus({
        type: 'error',
        message:
          error.message ||
          'Something went wrong. Please try again later.',
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  // Newsletter subscription
  const handleSubscribe = async (event) => {
    event.preventDefault();

    if (isSubscribing) return;

    setIsSubscribing(true);

    setSubscribeStatus({
      type: '',
      message: '',
    });

    try {
      const email = subscriberEmail.trim();

      if (!email) {
        throw new Error('Please enter your email address.');
      }

      const response = await fetch('/api/subscribe', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          subscriberEmail: email,
        }),
      });

      const data = await response.json();

      if (!response.ok) {
        throw new Error(
          data.error || 'Failed to subscribe.'
        );
      }

      setSubscribeStatus({
        type: 'success',
        message: 'Thank you for subscribing!',
      });

      setSubscriberEmail('');
    } catch (error) {
      console.error('Subscribe error:', error);

      setSubscribeStatus({
        type: 'error',
        message:
          error.message ||
          'Something went wrong. Please try again.',
      });
    } finally {
      setIsSubscribing(false);
    }
  };

  const WavyBottomDivider = () => (
    <div className="pointer-events-none absolute bottom-0 left-0 z-0 w-full overflow-hidden leading-none">
      <svg
        viewBox="0 0 1200 120"
        preserveAspectRatio="none"
        className="relative block h-16 w-full text-slate-50 md:h-24"
        fill="currentColor"
      >
        <path d="M0,0 C150,90 350,-40 500,65 C650,160 900,10 1200,45 L1200,120 L0,120 Z" />
      </svg>
    </div>
  );

  return (

    <div className="min-h-screen overflow-x-hidden bg-slate-50 text-slate-900">
      <SiteNavbar activePage="contact" />

      <main className="pt-20">

        {/* =====================================================
            HERO
        ====================================================== */}
        <section className="relative flex min-h-[600px] h-[70vh] items-end overflow-hidden">

          {/* BACKGROUND IMAGE */}
          <div className="absolute inset-0 bg-[#0B1F3A]">
            <img
              src={contacthero}
              alt="Contact USEC"
              className="h-full w-full object-cover opacity-60"
            />

            <div className="absolute inset-0 bg-black/55" />
          </div>

          {/* HERO CONTENT */}
          <div className="relative z-10 mx-auto w-full max-w-container-max px-margin-mobile pb-20 text-white md:px-margin-desktop md:pb-24">

            <p className="mb-5 font-label-md text-label-md uppercase tracking-[0.3em] text-vibrant-orange">
              Get In Touch
            </p>

            <h1 className="mb-8 max-w-4xl border-l-[43px] border-vibrant-orange pl-[30px] font-display-lg text-display-lg-mobile leading-tight md:text-display-lg">
              Contact Us
            </h1>

            <p className="max-w-2xl font-body-lg text-body-lg leading-relaxed text-white/90">
              Have a question, idea, partnership opportunity, or want to learn
              more about our work? We would love to hear from you.
            </p>
          </div>

          {/* WAVY DIVIDER */}
          <WavyBottomDivider />
        </section>


        {/* =====================================================
            CONTACT SECTION
        ====================================================== */}
        <section className="bg-surface-cream py-12 sm:py-16 md:py-section-gap">
          <div className="container mx-auto px-4 sm:px-6">

            <div className="mx-auto grid w-full max-w-5xl grid-cols-1 items-start gap-10 lg:grid-cols-12 lg:gap-12">

              {/* =================================================
                  LEFT — CONTACT INFORMATION
              ================================================== */}
              <div className="lg:col-span-5">

                <div className="mb-8">

                  <span className="mb-4 block font-label-md text-label-md uppercase tracking-[0.25em] text-vibrant-orange">
                    Reach Out
                  </span>

                  <h2 className="font-headline-md text-headline-md text-primary">
                    Let&apos;s Start a Conversation
                  </h2>

                  <p className="mt-5 max-w-xl font-body-lg text-body-lg leading-relaxed text-on-surface-variant">
                    Whether you are interested in volunteering, partnering
                    with USEC, supporting our community projects, or simply
                    learning more about our activities, send us a message.
                  </p>

                </div>


                {/* CONTACT DETAILS */}
                <div className="space-y-6">

{/* EMAIL */}
<div>
  <p className="mb-3 text-[10px] font-bold uppercase tracking-[0.2em] text-slate-500 sm:text-xs">
    Email
  </p>

  <div className="flex flex-col gap-2">
    <a
      href="https://mail.google.com/mail/?view=cm&fs=1&to=useccbo@gmail.com"
      target="_blank"
      rel="noopener noreferrer"
      className="w-fit text-sm font-medium text-vibrant-orange transition-colors hover:underline sm:text-base"
    >
      useccbo@gmail.com
    </a>

    <a
      href="https://mail.google.com/mail/?view=cm&fs=1&to=abedikabulo.salvador@gmail.com"
      target="_blank"
      rel="noopener noreferrer"
      className="w-fit text-sm font-medium text-vibrant-orange transition-colors hover:underline sm:text-base"
    >
      abedikabulo.salvador@gmail.com
    </a>

    <a
      href="https://mail.google.com/mail/?view=cm&fs=1&to=robertamuri7@gmail.com"
      target="_blank"
      rel="noopener noreferrer"
      className="w-fit text-sm font-medium text-vibrant-orange transition-colors hover:underline sm:text-base"
    >
      robertamuri7@gmail.com
    </a>

    <a
      href="https://mail.google.com/mail/?view=cm&fs=1&to=gismaabass38@gmail.com"
      target="_blank"
      rel="noopener noreferrer"
      className="w-fit text-sm font-medium text-vibrant-orange transition-colors hover:underline sm:text-base"
    >
      gismaabass38@gmail.com
    </a>
  </div>
</div>


                  {/* LOCATION */}
                  <div>
                    <p className="mb-1 text-[10px] font-bold uppercase tracking-[0.2em] text-slate-500 sm:text-xs">
                      Location
                    </p>

                    <p className="text-sm leading-6 text-slate-500 sm:text-base">
                      Kakuma Refugee Camp,
                      <br />
                      Turkana County, Kenya
                    </p>
                  </div>

                </div>


                {/* SMALL CALL TO ACTION */}
                <div className="mt-8 border-l-4 border-vibrant-orange bg-white p-4 shadow-sm">

                  <p className="text-sm font-semibold text-primary">
                    We&apos;d love to hear from you.
                  </p>

                  <p className="mt-1 text-sm leading-6 text-slate-500">
                    Your ideas, questions, partnerships, and feedback help us
                    strengthen our work with communities.
                  </p>

                </div>

              </div>


              {/* =================================================
                  RIGHT — CONTACT FORM
              ================================================== */}
              <div className="lg:col-span-6 lg:col-start-7">

                {/* SMALLER FORM CARD */}
                <div className="w-full max-w-md overflow-hidden rounded-xl bg-white shadow-[0_15px_40px_rgba(0,0,0,0.06)]">

                  <div className="p-5 sm:p-6">

                    {/* FORM HEADER */}
                    <div className="mb-5">

                      <span className="mb-2 block text-[10px] font-bold uppercase tracking-[0.2em] text-vibrant-orange">
                        Send A Message
                      </span>

                      <h2 className="font-headline-sm text-headline-sm text-primary">
                        We&apos;re Here to Help
                      </h2>

                      <p className="mt-2 text-xs leading-5 text-slate-500">
                        Fill in the form below and we&apos;ll receive your
                        message directly.
                      </p>

                    </div>


                    {/* STATUS MESSAGE */}
                    {status.message && (
                      <div
                        className={`mb-5 rounded-lg border px-3 py-2.5 text-xs leading-5 ${
                          status.type === 'success'
                            ? 'border-green-200 bg-green-50 text-green-700'
                            : 'border-red-200 bg-red-50 text-red-700'
                        }`}
                      >
                        {status.message}
                      </div>
                    )}


                    {/* FORM */}
                    <form
                      ref={formRef}
                      onSubmit={handleSubmit}
                      className="flex flex-col gap-4"
                    >

                      {/* NAME */}
                      <div>
                        <label
                          htmlFor="name"
                          className="mb-1.5 block text-[10px] font-bold uppercase tracking-widest text-slate-500"
                        >
                          Your Name
                        </label>

                        <input
                          id="name"
                          name="name"
                          type="text"
                          value={formData.name}
                          onChange={handleChange}
                          required
                          autoComplete="name"
                          placeholder="Your full name"
                          className="
                            w-full
                            rounded-lg
                            border
                            border-slate-200
                            bg-slate-50
                            px-3
                            py-2.5
                            text-sm
                            text-slate-800
                            outline-none
                            transition
                            placeholder:text-slate-400
                            focus:border-orange-500
                            focus:bg-white
                            focus:ring-2
                            focus:ring-orange-500/20
                          "
                        />
                      </div>


                      {/* EMAIL */}
                      <div>
                        <label
                          htmlFor="email"
                          className="mb-1.5 block text-[10px] font-bold uppercase tracking-widest text-slate-500"
                        >
                          Email Address
                        </label>

                        <input
                          id="email"
                          name="email"
                          type="email"
                          value={formData.email}
                          onChange={handleChange}
                          required
                          autoComplete="email"
                          placeholder="you@example.com"
                          className="
                            w-full
                            rounded-lg
                            border
                            border-slate-200
                            bg-slate-50
                            px-3
                            py-2.5
                            text-sm
                            text-slate-800
                            outline-none
                            transition
                            placeholder:text-slate-400
                            focus:border-orange-500
                            focus:bg-white
                            focus:ring-2
                            focus:ring-orange-500/20
                          "
                        />
                      </div>


                      {/* MESSAGE */}
                      <div>
                        <label
                          htmlFor="message"
                          className="mb-1.5 block text-[10px] font-bold uppercase tracking-widest text-slate-500"
                        >
                          Your Message
                        </label>

                        <textarea
                          id="message"
                          name="message"
                          value={formData.message}
                          onChange={handleChange}
                          required
                          rows="5"
                          placeholder="Write your message..."
                          className="
                            w-full
                            resize-none
                            rounded-lg
                            border
                            border-slate-200
                            bg-slate-50
                            px-3
                            py-2.5
                            text-sm
                            text-slate-800
                            outline-none
                            transition
                            placeholder:text-slate-400
                            focus:border-orange-500
                            focus:bg-white
                            focus:ring-2
                            focus:ring-orange-500/20
                          "
                        />
                      </div>


                      {/* SECURITY NOTE */}
                      <div className="flex items-center justify-center gap-1.5 pt-1 text-center text-[9px] uppercase tracking-wider text-slate-400">

                        <span className="material-symbols-outlined text-sm">
                          shield_lock
                        </span>

                        <span>
                          Your message will be handled securely
                        </span>

                      </div>


                      {/* SUBMIT */}
                      <button
                        type="submit"
                        disabled={isSubmitting}
                        className="
                          w-full
                          rounded-lg
                          bg-vibrant-orange
                          px-4
                          py-2.5
                          text-xs
                          font-bold
                          uppercase
                          tracking-[0.1em]
                          text-white
                          shadow-lg
                          shadow-orange-500/20
                          transition-all
                          hover:brightness-110
                          active:scale-[0.98]
                          disabled:cursor-not-allowed
                          disabled:opacity-60
                        "
                      >
                        {isSubmitting ? 'Sending...' : 'Send Message'}
                      </button>

                    </form>

                  </div>
                </div>

              </div>

            </div>
          </div>
        </section>


        {/* =====================================================
            CONTACT CTA
        ====================================================== */}
        <section className="relative overflow-hidden py-section-gap">

{/* BACKGROUND */}
<div className="absolute inset-0">
  <img
    src={contacthero}
    alt=""
    className="h-full w-full object-cover object-[center_25%]"
  />

  <div className="absolute inset-0 bg-black/70" />
</div>


          {/* CONTENT */}
          <div className="container relative z-10 mx-auto max-w-3xl px-4 text-center text-white sm:px-6">

            <span className="mb-4 block text-[10px] font-bold uppercase tracking-[0.3em] text-vibrant-orange sm:text-xs">
              United Safe Environment Creators
            </span>

            <h2 className="font-headline-md text-headline-md">
              Let&apos;s Build a Safer Future Together.
            </h2>

            <p className="mx-auto mt-5 max-w-2xl text-sm leading-7 text-white/80 sm:text-base">
              Every conversation can create an opportunity for collaboration,
              community support, and positive change.
            </p>

          </div>

        </section>

      </main>


      {/* =====================================================
          FOOTER
      ====================================================== */}
      <footer className="w-full bg-tertiary px-margin-mobile py-section-gap text-on-tertiary md:px-margin-desktop">

        <div className="mx-auto flex max-w-6xl flex-col items-center text-center">

          <img
            alt="USEC Footer Logo"
            className="h-16 w-auto opacity-80 brightness-0 invert"
            src="/usec-navbar-logo.png"
          />

          <h2 className="mt-4 font-headline-md text-headline-md">
            United Safe Environment Creators
          </h2>

          <p className="mt-3 max-w-lg font-body-md text-body-md opacity-70">
            Dedicated to humanitarian integrity and creating sustainable
            safety for vulnerable communities.
          </p>


          <div className="mt-10 flex flex-wrap justify-center gap-8 md:gap-16">

            <div className="flex flex-col gap-3">
              <span className="font-label-md text-label-md uppercase tracking-widest text-vibrant-orange">
                Organization
              </span>

              <a
                className="font-body-md text-body-md opacity-70 transition-opacity hover:opacity-100"
                href="#"
              >
                About Our Mission
              </a>

              <a
                className="font-body-md text-body-md opacity-70 transition-opacity hover:opacity-100"
                href="/annual-reports"
              >
                Annual Reports
              </a>

              <a
                className="font-body-md text-body-md opacity-70 transition-opacity hover:opacity-100"
                href="#"
              >
                Careers
              </a>
            </div>


            <div className="flex flex-col gap-3">
              <span className="font-label-md text-label-md uppercase tracking-widest text-vibrant-orange">
                Get Involved
              </span>

              <a
                className="font-body-md text-body-md opacity-70 transition-opacity hover:opacity-100"
                href="#"
              >
                Volunteer Programs
              </a>

              <a
                className="font-body-md text-body-md opacity-70 transition-opacity hover:opacity-100"
                href="#"
              >
                Corporate Partnership
              </a>

              <a
                className="font-body-md text-body-md opacity-70 transition-opacity hover:opacity-100"
                href="#"
              >
                Advocacy
              </a>
            </div>


            <div className="flex flex-col gap-3">
              <span className="font-label-md text-label-md uppercase tracking-widest text-vibrant-orange">
                Support
              </span>

              <a
                className="font-body-md text-body-md opacity-70 transition-opacity hover:opacity-100"
                href="#"
              >
                Help Center
              </a>

              <a
                className="font-body-md text-body-md opacity-70 transition-opacity hover:opacity-100"
                href="/privacy-policy"
              >
                Privacy Policy
              </a>

              <a
                className="font-body-md text-body-md opacity-70 transition-opacity hover:opacity-100"
                href="/contact-us"
              >
                Contact Us
              </a>
            </div>

          </div>


          <div className="mt-10 h-px w-full bg-white/10" />


          <div className="mt-6 flex w-full flex-col items-center justify-between gap-4 md:flex-row">

            <p className="font-body-md text-body-md opacity-50">
              © 2024 USEC. Humanitarian Integrity.
            </p>

            <div className="flex gap-6">

              <a
                className="material-symbols-outlined text-white/50 transition-colors hover:text-vibrant-orange"
                href="#"
              >
                public
              </a>

              <a
                className="material-symbols-outlined text-white/50 transition-colors hover:text-vibrant-orange"
                href="#"
              >
                alternate_email
              </a>

              <a
                className="material-symbols-outlined text-white/50 transition-colors hover:text-vibrant-orange"
                href="#"
              >
                share
              </a>

            </div>

          </div>

        </div>

      </footer>

    </div>
  );
};

export default ContactPage;