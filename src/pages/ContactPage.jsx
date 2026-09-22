import React, { useRef, useState } from 'react';
import md5 from 'blueimp-md5';
import SiteNavbar from '../components/SiteNavbar';
import contacthero from '../assets/images/contactimo/contact-hero.jpg';

const ContactPage = () => {
  const formRef = useRef(null);

  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: '',
  });

  const [status, setStatus] = useState({
    type: '',
    message: '',
  });

  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleChange = (event) => {
    const { name, value } = event.target;

    setFormData((previous) => ({
      ...previous,
      [name]: value,
    }));
  };

  const handleSubmit = async (event) => {
    event.preventDefault();

    setIsSubmitting(true);
    setStatus({
      type: '',
      message: '',
    });

    try {
      const response = await fetch('/api/contact', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });

      const data = await response.json();

      if (!response.ok) {
        throw new Error(data.message || 'Failed to send your message.');
      }

      setStatus({
        type: 'success',
        message:
          "Thank you for contacting USEC! We'll get back to you as soon as possible.",
      });

      setFormData({
        name: '',
        email: '',
        subject: '',
        message: '',
      });

      formRef.current?.reset();
    } catch (error) {
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

  const emailHash = formData.email
    ? md5(formData.email.trim().toLowerCase())
    : '';

  const gravatarUrl = emailHash
    ? `https://www.gravatar.com/avatar/${emailHash}?d=mp&s=160`
    : 'https://www.gravatar.com/avatar/?d=mp&s=160';

  return (
    <div className="min-h-screen bg-[#F8F3E8] text-[#0B1F3A]">
      <SiteNavbar />

      <section className="relative h-[420px] overflow-hidden">
        <img
          src={contacthero}
          alt="Contact USEC"
          className="h-full w-full object-cover"
        />

        <div className="absolute inset-0 bg-[#0B1F3A]/65" />

        <div className="absolute inset-0 flex items-center justify-center px-6 text-center">
          <div>
            <p className="mb-3 text-sm font-semibold uppercase tracking-[0.3em] text-[#F7941D]">
              Get In Touch
            </p>

            <h1 className="text-4xl font-bold text-white md:text-6xl">
              Contact Us
            </h1>

            <p className="mx-auto mt-5 max-w-2xl text-base leading-7 text-white/90 md:text-lg">
              Have a question, idea, partnership opportunity, or want to learn
              more about our work? We would love to hear from you.
            </p>
          </div>
        </div>
      </section>

      <section className="px-6 py-16 md:px-10 lg:px-20">
        <div className="mx-auto grid max-w-6xl gap-12 lg:grid-cols-2">
          <div>
            <p className="mb-3 text-sm font-semibold uppercase tracking-[0.2em] text-[#F7941D]">
              Reach Out
            </p>

            <h2 className="text-3xl font-bold md:text-4xl">
              Let&apos;s Start a Conversation
            </h2>

            <p className="mt-5 leading-8 text-[#4B5563]">
              Whether you are interested in volunteering, partnering with
              USEC, supporting our community projects, or simply learning more
              about our activities, send us a message.
            </p>

            <div className="mt-8 flex items-center gap-4">
              <img
                src={gravatarUrl}
                alt="Contact profile"
                className="h-16 w-16 rounded-full object-cover"
              />

              <div>
                <p className="font-semibold text-[#0B1F3A]">
                  United Safe Environment Creators
                </p>

                <p className="text-sm text-[#6B7280]">
                  Kakuma, Turkana County, Kenya
                </p>
              </div>
            </div>

            <div className="mt-10 space-y-5">
              <div>
                <h3 className="font-semibold">Email</h3>
                <p className="mt-1 text-[#6B7280]">useccbo@gmail.com</p>
              </div>

              <div>
                <h3 className="font-semibold">Location</h3>
                <p className="mt-1 text-[#6B7280]">
                  Kakuma Refugee Camp, Turkana County, Kenya
                </p>
              </div>
            </div>
          </div>

          <div className="rounded-2xl border border-[#E5DED1] bg-white p-6 shadow-sm md:p-8">
            <h2 className="text-2xl font-bold">Send Us a Message</h2>

            <p className="mt-2 text-sm text-[#6B7280]">
              Fill in the form below and we&apos;ll receive your message
              directly.
            </p>

            {status.message && (
              <div
                className={`mt-6 rounded-lg border p-4 text-sm ${
                  status.type === 'success'
                    ? 'border-green-200 bg-green-50 text-green-700'
                    : 'border-red-200 bg-red-50 text-red-700'
                }`}
              >
                {status.message}
              </div>
            )}

            <form
              ref={formRef}
              onSubmit={handleSubmit}
              className="mt-6 space-y-5"
            >
              <div>
                <label
                  htmlFor="name"
                  className="mb-2 block text-sm font-medium"
                >
                  Name
                </label>

                <input
                  id="name"
                  name="name"
                  type="text"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  className="w-full rounded-lg border border-[#D9D2C5] px-4 py-3 outline-none transition focus:border-[#F7941D]"
                  placeholder="Your name"
                />
              </div>

              <div>
                <label
                  htmlFor="email"
                  className="mb-2 block text-sm font-medium"
                >
                  Email
                </label>

                <input
                  id="email"
                  name="email"
                  type="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  className="w-full rounded-lg border border-[#D9D2C5] px-4 py-3 outline-none transition focus:border-[#F7941D]"
                  placeholder="you@example.com"
                />
              </div>

              <div>
                <label
                  htmlFor="subject"
                  className="mb-2 block text-sm font-medium"
                >
                  Subject
                </label>

                <input
                  id="subject"
                  name="subject"
                  type="text"
                  value={formData.subject}
                  onChange={handleChange}
                  required
                  className="w-full rounded-lg border border-[#D9D2C5] px-4 py-3 outline-none transition focus:border-[#F7941D]"
                  placeholder="How can we help?"
                />
              </div>

              <div>
                <label
                  htmlFor="message"
                  className="mb-2 block text-sm font-medium"
                >
                  Message
                </label>

                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  required
                  rows="6"
                  className="w-full resize-none rounded-lg border border-[#D9D2C5] px-4 py-3 outline-none transition focus:border-[#F7941D]"
                  placeholder="Write your message..."
                />
              </div>

              <button
                type="submit"
                disabled={isSubmitting}
                className="w-full rounded-lg bg-[#F7941D] px-6 py-3 font-semibold text-white transition hover:bg-[#E7830C] disabled:cursor-not-allowed disabled:opacity-60"
              >
                {isSubmitting ? 'Sending...' : 'Send Message'}
              </button>
            </form>
          </div>
        </div>
      </section>
    </div>
  );
};

export default ContactPage;