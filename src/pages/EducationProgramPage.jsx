import { useState } from "react";

import SiteNavbar from '../components/SiteNavbar'
import useWhoWeAreReveal from '../hooks/useWhoWeAreReveal'
import hero from "../assets/images/Education-imo/hero-edu.png"
import edu1 from "../assets/images/Education-imo/edu1.jpg"
import edu2 from "../assets/images/Education-imo/edu2.jpg"
import edu3 from "../assets/images/Education-imo/edu3.png"
import edusec3 from "../assets/images/Education-imo/edu-sec3.jpg"
import edu4 from "../assets/images/Education-imo/edu4.jpeg";
import edu5 from "../assets/images/Education-imo/edu5.jpeg";
import edu6 from "../assets/images/Education-imo/edu6.jpeg";
import donateprotect from '../assets/images/Protection-imo/donate-protect.png'


function EducationProgramPage() {
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

  const [activeTab, setActiveTab] = useState("access");

  const learningOptions = {
    access: {
      title: "Access To Learning",
      image: edu1,
      description:
        "We keep children in school by removing practical barriers and strengthening learning pathways. School supplies and fee support, back-to-school campaigns, and attendance follow-up with families help ensure every child has the opportunity to learn.",
      icon: "school",
    },

    vocational: {
      title: "Play-Based Methods",
      image: edu2,
      description:
        "We use age-appropriate, child-centered techniques that build curiosity, creativity, and early literacy skills, Structured play and storytelling, Early numeracy and literacy activities, Safe learning environments",
      icon: "handyman",
    },

    adult: {
      title: "Family Engagement",
      image: edu3,
      description:
        "We involve caregivers and parents as key partners in supporting early childhood learning at home and in the community, Parent awareness sessions, Home learning support guides, Community learning circles",
      icon: "menu_book",
    },
  };

  const activeContent = learningOptions[activeTab];


  const [activeProgram, setActiveProgram] = useState("option1");

const programOptions = {
  option1: {
    title: "Youth Development",
    image: edu4,
    description:
      "We build confidence and future readiness through practical life and leadership skills, Study skills and peer clubs, Career orientation sessions, Community service learning projects",
    icon: "school",
  },

  option2: {
    title: "Career Readiness",
    image: edu5,
    description:
      "We prepare young people for the world of work by building vocational awareness, practical skills, and professional confidence, Career exposure and job shadowing, CV and interview preparation, Entrepreneurship basics",
    icon: "handyman",
  },
 
  option3: {
    title: "Leadership & Civic Engagement",
    image: edu6,
    description:
      "We empower youth to become active community contributors through structured leadership pathways and civic education, Youth leadership clubs, Community action projects, Peer-to-peer mentorship networks",
    icon: "menu_book",
  },
};

const activeProgramContent = programOptions[activeProgram];

  return (
    <div className="bg-background text-on-surface font-body-md overflow-x-hidden">
      <SiteNavbar activePage="programs" />

      <main className="pt-20">

    <section className="border-b relative h-[60vh] min-h-[600px] flex items-end overflow-hidden">
       {/* Background Image */}
       <div className="absolute inset-0 bg-deep-navy">
       <img
         src={hero}
         alt="Students learning in a classroom"
         className="w-full h-full object-cover opacity-60"
       />

        {/* Gradient Overlay */}
        <div className="absolute inset-0 bg-black/60"></div>
        {/* <div className="absolute inset-0 bg-[linear-gradient(0deg,rgba(3,51,71,0.8)_0%,rgba(3,51,71,0)_100%)]" /> */}

        </div>

       {/* Content */}
       <div className="relative z-10 w-full max-w-container-max mx-auto px-margin-mobile md:px-margin-desktop pb-16 md:pb-24 text-white">

       {/* Main Heading */}
        <h1 className="font-display-lg text-display-lg-mobile md:text-display-lg max-w-3xl mb-8 border-l-[43px] border-vibrant-orange pb-[10px] pl-[30px]">
          Education Activities
        </h1>

        {/* Supporting Heading */}
       <h2 className="font-display-lg font-bold text-2xl md:text-3xl lg:text-4xl text-white leading-tight mb-4 max-w-3xl">
        Creating brighter futures through quality, inclusive education.
      </h2>

       {/* Description */}
      <p className="font-body-lg text-body-lg max-w-2xl text-white/90 mb-8">
        At USEC, we believe education is the single most powerful tool for
        breaking the cycle of poverty and creating resilient communities.
      </p>
       </div>
       <WavyBottomDivider />
   </section>

    <section className="py-section-gap bg-white">
    <div className="absolute -top-40 left-[22%] w-[480px] h-[480px] rounded-full border-[80px] border-primary/10 pointer-events-none"></div>
     <div className="absolute -bottom-32 right-[-5%] w-[500px] h-[300px] bg-primary/80 rotate-[-25deg] rounded-[40%] pointer-events-none"></div>
     <div className="max-w-container-max mx-auto px-margin-mobile md:px-margin-desktop">

    <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 items-center">

      {/* LEFT COLUMN */}
      <div className="lg:col-span-5">

        <h2 className="font-display-lg text-display-lg-mobile md:text-display-lg text-deep-navy mb-8">
          Early Learning
        </h2>

        <p className="font-body-lg text-body-lg text-on-surface-variant mb-8">
          We support young children to build a strong foundation for lifelong learning through play-based and inclusive early education methods that meet each child where they are.
        </p>

        {/* THREE CLICKABLE LINKS */}
        <div className="space-y-3">

          {/* ACCESS TO LEARNING */}
            <button
              type="button"
              onClick={() => setActiveTab("access")}
              className={`w-full text-left flex gap-4 items-center p-4 rounded-lg transition-all duration-300 ${
                activeTab === "access"
                  ? "bg-deep-navy text-white shadow-md"
                  : "bg-surface-cream hover:bg-surface-container-high"
              }`}
            >
              {/* ICON */}
              <div
                className={`p-2.5 rounded-md flex items-center justify-center shrink-0 ${
                  activeTab === "access"
                    ? "bg-vibrant-orange text-white"
                    : "bg-deep-navy text-white"
                }`}
              >
                <span className="material-symbols-outlined text-xl">
                  school
                </span>
              </div>

              {/* TEXT + CHEVRON */}
              <div className="flex items-center justify-between w-full">
                <h3
                  className={`font-headline-sm text-headline-sm ${
                    activeTab === "access"
                      ? "text-white"
                      : "text-deep-navy"
                  }`}
                >
                  Access To Learning
                </h3>

                {/* CHEVRON */}
                <span
                  className={`material-symbols-outlined transition-transform duration-300 ${
                    activeTab === "access"
                      ? "rotate-90 text-vibrant-orange"
                      : "rotate-0"
                  }`}
                >
                  chevron_right
                </span>
              </div>
            </button>


          {/* PLAY-BASED METHODS */}
          <button
            type="button"
            onClick={() => setActiveTab("vocational")}
            className={`w-full text-left flex gap-4 items-center p-4 rounded-lg transition-all duration-300 ${
              activeTab === "vocational"
                ? "bg-deep-navy text-white shadow-md"
                : "bg-surface-cream hover:bg-surface-container-high"
            }`}
          >
            {/* ICON */}
            <div
              className={`p-2.5 rounded-md flex items-center justify-center shrink-0 ${
                activeTab === "vocational"
                  ? "bg-vibrant-orange text-white"
                  : "bg-deep-navy text-white"
              }`}
            >
              <span className="material-symbols-outlined text-xl">
                handyman
              </span>
            </div>

            {/* TEXT + CHEVRON */}
            <div className="flex items-center justify-between w-full">
              <h3
                className={`font-headline-sm text-headline-sm ${
                  activeTab === "vocational"
                    ? "text-white"
                    : "text-deep-navy"
                }`}
              >
                Play-Based Methods
              </h3>

              {/* CHEVRON */}
              <span
                className={`material-symbols-outlined transition-transform duration-300 ${
                  activeTab === "vocational"
                    ? "rotate-90 text-vibrant-orange"
                    : "rotate-0"
                }`}
              >
                chevron_right
              </span>
            </div>
          </button>

          {/* FAMILY ENGAGEMENT */}
            <button
              type="button"
              onClick={() => setActiveTab("adult")}
              className={`w-full text-left flex gap-4 items-center p-4 rounded-lg transition-all duration-300 ${
                activeTab === "adult"
                  ? "bg-deep-navy text-white shadow-md"
                  : "bg-surface-cream hover:bg-surface-container-high"
              }`}
            >
              {/* ICON */}
              <div
                className={`p-2.5 rounded-md flex items-center justify-center shrink-0 ${
                  activeTab === "adult"
                    ? "bg-vibrant-orange text-white"
                    : "bg-deep-navy text-white"
                }`}
              >
                <span className="material-symbols-outlined text-xl">
                  menu_book
                </span>
              </div>

              {/* TEXT + CHEVRON */}
              <div className="flex items-center justify-between w-full">
                <h3
                  className={`font-headline-sm text-headline-sm ${
                    activeTab === "adult"
                      ? "text-white"
                      : "text-deep-navy"
                  }`}
                >
                  Family Engagement
                </h3>

                <span
                  className={`material-symbols-outlined transition-transform duration-300 ${
                    activeTab === "adult"
                      ? "rotate-90 text-vibrant-orange"
                      : "rotate-0"
                  }`}
                >
                  chevron_right
                </span>
              </div>
            </button>

        </div>
      </div>


      {/* RIGHT COLUMN */}
      <div className="lg:col-span-7 lg:pl-10">

        <div
          key={activeTab}
          className="max-w-xl ml-auto overflow-hidden rounded-2xl bg-surface-cream shadow-md animate-slide-in-right"
        >

          {/* IMAGE */}
          <div className="h-[300px] overflow-hidden">
            <img
              src={activeContent.image}
              alt={activeContent.title}
              className="w-full h-full object-cover"
            />
          </div>

          {/* CONTENT */}
          <div className="p-8 md:p-10">

            <h3 className="font-display-lg text-3xl md:text-4xl lg:text-5xl text-deep-navy mb-5 leading-tight">
              {activeContent.title}
            </h3>

            <p className="font-body-lg text-body-lg text-on-surface-variant leading-relaxed">
              {activeContent.description}
            </p>

          </div>

        </div>

      </div>

    </div>
  </div>
</section>

        <section
  className="relative py-24 md:py-28 bg-cover bg-center overflow-hidden"
  style={{
    backgroundImage: `url(${edusec3})`,
  }}
>
  {/* DARK OVERLAY */}
  <div className="absolute inset-0 bg-black/75"></div>
  

  {/* CONTENT */}
  <div className="relative z-10 max-w-container-max mx-auto px-margin-mobile md:px-margin-desktop">

    {/* SECTION TITLE */}
    <h2 className="font-display-lg text-4xl md:text-5xl lg:text-6xl text-white mb-10">
      Basic Education
    </h2>
    <p className="font-body-lg text-body-lg max-w-2xl text-white/90 mb-8">
    We improve classroom outcomes for school-age children by strengthening teaching quality, delivering targeted remedial support, and integrating social-emotional learning into everyday instruction.
    </p>
    {/* CARDS */}
    <div className="grid grid-cols-1 md:grid-cols-3 gap-8">

      {/* CARD 1 */}
      <div className="group border border-white/70 rounded-xl p-8 md:p-10 min-h-[325px] flex flex-col justify-between backdrop-blur-sm bg-black/10 hover:bg-white hover:border-white transition-all duration-500">

        <div>
          <h3 className="font-display-lg text-2xl md:text-3xl text-white group-hover:text-deep-navy mb-4 transition-colors duration-500">
            Learning Quality
          </h3>

          <p className="font-body-md text-white/90 group-hover:text-deep-navy leading-relaxed max-w-md transition-colors duration-500">
            We improve classroom outcomes through targeted support and tailored
            learning methods, Play-based early learning, Remedial learning and
            SEL integration, Teacher coaching and classroom support.
          </p>
        </div>

      </div>


          {/* CARD 2 */}
          <div className="group border border-white/70 rounded-xl p-8 md:p-10 min-h-[325px] flex flex-col justify-between backdrop-blur-sm bg-black/10 hover:bg-deep-navy hover:border-deep-navy transition-all duration-500">

            <div>
              <h3 className="font-display-lg text-2xl md:text-3xl text-white group-hover:text-white mb-4 transition-colors duration-500">
                Remedial Support
              </h3>

              <p className="font-body-md text-white/90 group-hover:text-white leading-relaxed max-w-md transition-colors duration-500">
                We reach children who have fallen behind through structured catch-up
                programs and individual learning support plans, Individual learning
                assessments, Small-group catch-up sessions, Progress tracking and
                follow-up.
              </p>
            </div>

          </div>

          {/* CARD 3 */}
          <div className="group border border-white/70 rounded-xl p-8 md:p-10 min-h-[325px] flex flex-col justify-between backdrop-blur-sm bg-black/10 hover:bg-vibrant-orange hover:border-vibrant-orange transition-all duration-500">

            <div>
              <h3 className="font-display-lg text-2xl md:text-3xl text-white group-hover:text-white mb-4 transition-colors duration-500">
                Social-Emotional Learning
              </h3>

              <p className="font-body-md text-white/90 group-hover:text-white leading-relaxed max-w-md transition-colors duration-500">
                We integrate SEL to help children build self-awareness, resilience,
                and healthy relationships in and out of school, Emotional regulation
                activities, Conflict resolution sessions, Peer support and mentorship.
              </p>
            </div>

          </div>

    </div>
  </div>
</section>



      <section className="relative py-section-gap bg-white overflow-hidden">

  {/* DECORATIVE BACKGROUND SHAPES */}
  <div className="absolute -top-40 left-[22%] w-[480px] h-[480px] rounded-full border-[80px] border-primary/10 pointer-events-none"></div>

  <div className="absolute -bottom-32 right-[-5%] w-[500px] h-[300px] bg-primary/80 rotate-[-25deg] rounded-[40%] pointer-events-none"></div>


  <div className="relative z-10 max-w-container-max mx-auto px-margin-mobile md:px-margin-desktop">

    <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 items-center">

      {/* LEFT COLUMN */}
      <div className="lg:col-span-5">

        <h2 className="font-display-lg text-display-lg-mobile md:text-display-lg text-deep-navy mb-8">
          Youth Support
        </h2>
        <p className="font-body-lg text-body-lg text-on-surface-variant mb-8">
          We invest in adolescents and young people with leadership opportunities, career readiness skills, and practical life tools to help them shape their own futures with confidence.
        </p>


        {/* THREE CLICKABLE LINKS */}
        <div className="space-y-3">

          {/* OPTION 1 */}
          <button
            type="button"
            onClick={() => setActiveProgram("option1")}
            className={`w-full text-left flex gap-4 items-center p-4 rounded-lg transition-all duration-300 ${
              activeProgram === "option1"
                ? "bg-deep-navy text-white shadow-md"
                : "bg-surface-cream hover:bg-surface-container-high"
            }`}
          >

            {/* ICON */}
            <div
              className={`p-2.5 rounded-md flex items-center justify-center shrink-0 ${
                activeProgram === "option1"
                  ? "bg-vibrant-orange text-white"
                  : "bg-deep-navy text-white"
              }`}
            >
              <span className="material-symbols-outlined text-xl">
                school
              </span>
            </div>


            {/* TEXT + CHEVRON */}
            <div className="flex items-center justify-between w-full">

              <h3
                className={`font-headline-sm text-headline-sm ${
                  activeProgram === "option1"
                    ? "text-white"
                    : "text-deep-navy"
                }`}
              >
                Youth Development
              </h3>

              <span
                className={`material-symbols-outlined transition-transform duration-300 ${
                  activeProgram === "option1"
                    ? "rotate-90 text-vibrant-orange"
                    : "rotate-0 text-deep-navy"
                }`}
              >
                chevron_right
              </span>

            </div>
          </button>


          {/* OPTION 2 */}
          <button
            type="button"
            onClick={() => setActiveProgram("option2")}
            className={`w-full text-left flex gap-4 items-center p-4 rounded-lg transition-all duration-300 ${
              activeProgram === "option2"
                ? "bg-deep-navy text-white shadow-md"
                : "bg-surface-cream hover:bg-surface-container-high"
            }`}
          >

            {/* ICON */}
            <div
              className={`p-2.5 rounded-md flex items-center justify-center shrink-0 ${
                activeProgram === "option2"
                  ? "bg-vibrant-orange text-white"
                  : "bg-deep-navy text-white"
              }`}
            >
              <span className="material-symbols-outlined text-xl">
                handyman
              </span>
            </div>


            {/* TEXT + CHEVRON */}
            <div className="flex items-center justify-between w-full">

              <h3
                className={`font-headline-sm text-headline-sm ${
                  activeProgram === "option2"
                    ? "text-white"
                    : "text-deep-navy"
                }`}
              >
                Career Readiness
              </h3>

              <span
                className={`material-symbols-outlined transition-transform duration-300 ${
                  activeProgram === "option2"
                    ? "rotate-90 text-vibrant-orange"
                    : "rotate-0 text-deep-navy"
                }`}
              >
                chevron_right
              </span>

            </div>
          </button>


          {/* OPTION 3 */}
          <button
            type="button"
            onClick={() => setActiveProgram("option3")}
            className={`w-full text-left flex gap-4 items-center p-4 rounded-lg transition-all duration-300 ${
              activeProgram === "option3"
                ? "bg-deep-navy text-white shadow-md"
                : "bg-surface-cream hover:bg-surface-container-high"
            }`}
          >

            {/* ICON */}
            <div
              className={`p-2.5 rounded-md flex items-center justify-center shrink-0 ${
                activeProgram === "option3"
                  ? "bg-vibrant-orange text-white"
                  : "bg-deep-navy text-white"
              }`}
            >
              <span className="material-symbols-outlined text-xl">
                menu_book
              </span>
            </div>


            {/* TEXT + CHEVRON */}
            <div className="flex items-center justify-between w-full">

              <h3
                className={`font-headline-sm text-headline-sm ${
                  activeProgram === "option3"
                    ? "text-white"
                    : "text-deep-navy"
                }`}
              >
                Leadership & Civic Engagement
              </h3>

              <span
                className={`material-symbols-outlined transition-transform duration-300 ${
                  activeProgram === "option3"
                    ? "rotate-90 text-vibrant-orange"
                    : "rotate-0 text-deep-navy"
                }`}
              >
                chevron_right
              </span>

            </div>
          </button>

        </div>
        
      </div>

      


      {/* RIGHT COLUMN */}
      <div className="lg:col-span-7 lg:pl-10">

        <div
          key={activeProgram}
          className="max-w-xl ml-auto overflow-hidden rounded-2xl bg-surface-cream shadow-md animate-slide-in-right"
        >

          {/* IMAGE */}
          <div className="h-[300px] overflow-hidden">
            <img
              src={activeProgramContent.image}
              alt={activeProgramContent.title}
              className="w-full h-full object-cover"
            />
          </div>


          {/* CONTENT */}
          <div className="p-8 md:p-10">

            <h3 className="font-display-lg text-3xl md:text-4xl lg:text-5xl text-deep-navy mb-5 leading-tight">
              {activeProgramContent.title}
            </h3>

            <p className="font-body-lg text-body-lg text-on-surface-variant leading-relaxed">
              {activeProgramContent.description}
            </p>

          </div>

          

        </div>
        

      </div>

    </div>
                            {/* BUTTONS */}
              <div className="mt-20 flex flex-col sm:flex-row items-center gap-4 shrink-0">

                <a
                  href="/programs"
                  className="inline-flex items-center justify-center gap-3 bg-vibrant-orange text-white px-8 py-4 font-bold rounded-lg border-2 border-vibrant-orange hover:bg-primary hover:text-white hover:border-primary transition-all duration-300"
                >
                  Back To Programs
                  <span className="text-xl transition-transform duration-300 group-hover:translate-x-1">
                    →
                  </span>
                </a>

                <a
                  href="/contact"
                  className="inline-flex items-center justify-center gap-3 border-2 border-primary text-white px-8 py-4 bg-primary font-bold rounded-lg hover:bg-white hover:text-deep-navy transition-all duration-300"
                >
                  Contact Us
                  <span className="text-xl">
                    →
                  </span>
                </a>

              </div>
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

      <footer className="bg-primary-container text-white w-full mt-auto py-section-gap px-margin-mobile md:px-margin-desktop flex flex-col items-center gap-base">
        <div className="max-w-container-max w-full grid grid-cols-1 md:grid-cols-4 gap-12 mb-16">
          <div className="md:col-span-1">
            <div className="flex items-center gap-2 mb-6">
              <img alt="USEC Logo" 
                   className="h-8 w-auto brightness-0 invert" 
                   src="/usec-navbar-logo.png" />
              <span className="font-headline-sm text-headline-sm text-white">USEC.org</span>
            </div>
            <p className="font-body-md text-body-md opacity-70">Creating sustainable futures through education, advocacy, and direct community action.</p>
          </div>
          <div className="md:col-span-3 grid grid-cols-2 md:grid-cols-3 gap-8">
            <div className="flex flex-col gap-4">
              <h4 className="font-label-md text-label-md text-vibrant-orange uppercase">Programs</h4>
              <a className="text-tertiary-fixed-dim hover:text-vibrant-orange transition-colors" href="#">Emergency Relief</a>
              <a className="text-vibrant-orange underline font-bold" href="/education-program">Education</a>
              <a className="text-tertiary-fixed-dim hover:text-vibrant-orange transition-colors" href="#">Youth Empowerment</a>
            </div>
            <div className="flex flex-col gap-4">
              <h4 className="font-label-md text-label-md text-vibrant-orange uppercase">Get Involved</h4>
              <a className="text-tertiary-fixed-dim hover:text-vibrant-orange transition-colors" href="/get-involved">Volunteer Opportunities</a>
              <a className="text-tertiary-fixed-dim hover:text-vibrant-orange transition-colors" href="#">Corporate Partners</a>
              <a className="text-tertiary-fixed-dim hover:text-vibrant-orange transition-colors" href="#">Advocacy</a>
            </div>
            <div className="flex flex-col gap-4">
              <h4 className="font-label-md text-label-md text-vibrant-orange uppercase">Legal</h4>
              <a className="text-tertiary-fixed-dim hover:text-vibrant-orange transition-colors" href="/privacy-policy">Privacy Policy</a>
              <a className="text-tertiary-fixed-dim hover:text-vibrant-orange transition-colors" href="/terms-of-service">Financial Transparency</a>
              <a className="text-tertiary-fixed-dim hover:text-vibrant-orange transition-colors" href="/annual-reports">Annual Reports</a>
            </div>
          </div>
        </div>
        <div className="w-full border-t border-white/10 pt-8 flex flex-col md:flex-row justify-between items-center gap-4 text-center md:text-left">
          <p className="font-label-sm text-label-sm opacity-60">(c) 2024 United Safe Environment Creators (USEC). All rights reserved. Registered Charity.</p>
          <div className="flex gap-6">
            <a className="hover:text-vibrant-orange transition-colors" href="#"><span className="material-symbols-outlined">public</span></a>
            <a className="hover:text-vibrant-orange transition-colors" href="#"><span className="material-symbols-outlined">mail</span></a>
            <a className="hover:text-vibrant-orange transition-colors" href="#"><span className="material-symbols-outlined">share</span></a>
          </div>
        </div>
      </footer>
    </div>
  )
}

export default EducationProgramPage
