"use client";

import { useState } from "react";
import CountdownTimer from "./CountdownTimer";
import BlackHoleIcon from "./BlackHoleIcon";
import BackgroundSlideshow from "./BackgroundSlideshow";

export function Hero() {
  return (
    <section
      id="hero"
      className="hero-section min-h-[100dvh] w-full flex flex-col items-center relative perspective-[1000px] overflow-hidden bg-transparent pb-16"
    >
      <BackgroundSlideshow />
      {/* Navbar Spacer */}
      <div className="h-24 md:h-32 lg:h-40 w-full" aria-hidden="true"></div>

      <div className="hero-content relative z-10 text-center px-4 w-full max-w-7xl mx-auto">
        <div className="hero-title-container relative mb-8 md:mb-16 transform-style-3d transition-transform duration-100 ease-out">
          <h1 className="hero-title font-title text-[clamp(28px,8vw,40px)] xs:text-[50px] sm:text-[70px] md:text-[90px] lg:text-[100px] font-extrabold tracking-[2px] xs:tracking-[6px] sm:tracking-[10px] md:tracking-[15px] lg:tracking-[18px] text-transparent bg-clip-text bg-gradient-to-b from-white to-white/0 leading-[0.9] drop-shadow-[0_0_40px_rgba(0,240,255,0.4)] relative">
            KRANTI<br />
            <span className="text-[clamp(38px,12vw,55px)] xs:text-[65px] sm:text-[85px] md:text-[110px] lg:text-[120px] text-transparent bg-clip-text bg-gradient-to-r from-[#00F0FF] via-[white] to-[#00F0FF] animate-shine">
              2K26
            </span>
          </h1>
        </div>

        <div className="hero-subtitle-container mb-12 md:mb-20">
          <div className="mission-divider flex items-center justify-center gap-4 mb-4">
            <div className="divider-line w-12 sm:w-20 h-[1px] bg-gradient-to-r from-transparent via-[#002020] to-transparent"></div>
            <span className="mission-icon text-[#00F0FF] scale-75 sm:scale-100">
              <BlackHoleIcon />
            </span>
            <div className="divider-line w-12 sm:w-20 h-[1px] bg-gradient-to-r from-transparent via-[#002020] to-transparent"></div>
          </div>
          <div className="dimension-convergence my-4 md:my-6 flex items-center justify-center gap-2 sm:gap-4 px-2">
            <div className="convergence-line w-8 sm:w-12 h-[1px] bg-gradient-to-r from-transparent to-[#00F0FF]"></div>
            <p className="font-accent text-[7px] xs:text-[8px] sm:text-xs tracking-[2px] xs:tracking-[4px] sm:tracking-[8px] text-transparent bg-clip-text bg-gradient-to-r from-[#00F0FF] via-white/70 to-[#00F0FF]">
              WHERE DIMENSIONS CONVERGE - BY VIRTUAL VORTEX
            </p>
            <div className="convergence-line w-8 sm:w-12 h-[1px] bg-gradient-to-l from-transparent to-[#00F0FF]"></div>
          </div>
          <br className="hidden sm:block"></br>
          <h3 className="hero-subtitle-heading font-heading text-sm xs:text-base sm:text-lg tracking-[1px] xs:tracking-[2px] text-white mb-1 sm:mb-2">
            ORGANIZED BY
          </h3>
          <h3 className="hero-subtitle-heading font-heading text-[11px] xs:text-sm sm:text-lg tracking-[1px] xs:tracking-[2px] sm:tracking-[3px] text-white mb-2 sm:mb-3">
            DEPARTMENT OF COMPUTER SCIENCE & ENGINEERING
          </h3>
          <p className="hero-tagline font-accent text-xs text-white/40 tracking-[2px] min-h-[20px]"></p>
        </div>

        <div className="hero-stats flex items-center justify-center mb-12">
          <CountdownTimer />
        </div>

        <div className="hero-cta flex items-center justify-center gap-4 sm:gap-5 mb-12 md:mb-20 flex-col sm:flex-row">
          <a
            href="#ops"
            className="btn-primary w-full sm:w-auto inline-flex items-center justify-center gap-2 px-8 sm:px-10 py-3 sm:py-4 bg-gradient-to-br from-gold-dark to-gold text-black font-heading text-[10px] sm:text-xs font-bold tracking-[3px] sm:tracking-[4px] relative overflow-hidden transition-all duration-300 hover:-translate-y-1 hover:shadow-[0_10px_40px_rgba(212,168,67,0.3)]"
          >
            <span>INITIATE SEQUENCE</span>
            <span>⟶</span>
          </a>
          <a
            href="#about"
            className="btn-secondary w-full sm:w-auto inline-flex items-center justify-center gap-2 px-8 sm:px-10 py-3 sm:py-4 border border-gold-dark text-gold font-heading text-[10px] sm:text-xs tracking-[3px] sm:tracking-[4px] transition-all duration-300 hover:bg-gold/10 hover:-translate-y-1"
          >
            <span>MISSION LOG</span>
          </a>
        </div>

        <div className="scroll-indicator absolute bottom-10 left-1/2 -translate-x-1/2 text-center">
          <p className="scroll-text font-heading text-[9px] tracking-[6px] text-white/40 mb-2">
            SCROLL TO EXPLORE
          </p>
          <div className="scroll-arrow flex flex-col items-center gap-1">
            <span className="block w-2.5 h-2.5 border-r border-b border-gold-dark rotate-45 animate-bounce"></span>
            <span className="block w-2.5 h-2.5 border-r border-b border-gold-dark rotate-45 animate-bounce animation-delay-200"></span>
            <span className="block w-2.5 h-2.5 border-r border-b border-gold-dark rotate-45 animate-bounce animation-delay-400"></span>
          </div>
        </div>
      </div>
    </section>
  );
}

export function About() {
  return (
    <section
      id="about"
      className="about-section section py-12 md:py-16 bg-gradient-to-b from-[#0a0a0f] to-[#0a0a0f]/95 relative overflow-hidden"
    >
      <div className="section-container max-w-[1400px] mx-auto px-8">
        <div className="about-grid grid grid-cols-1 lg:grid-cols-[1.5fr_1fr] gap-8 mb-16">
          <div className="about-main about-card bg-dark-card border border-gold/10 p-10 relative overflow-hidden transition-all duration-400 hover:border-gold/30 hover:-translate-y-1 hover:shadow-2xl group">
            <div className="card-runic-border absolute top-0 left-0 w-full h-[3px] bg-gradient-to-r from-transparent via-gold to-transparent opacity-0 transition-opacity duration-400 group-hover:opacity-100"></div>
            <div className="about-icon mb-5">
              <img
                src="/Kranti 2K26 Logo.jpg"
                alt="Kranti 2K26 Logo.jpg"
                className="w-24 h-24 object-contain"
              />
            </div>
            <h3 className="font-heading text-xl mb-5 text-gold tracking-[4px]">
              MISSION LOG: KRANTI 2K26
            </h3>
            <p className="font-body text-sm text-white/70 leading-[1.8] mb-4">
              <strong>KRANTI (Revolution)</strong> is not just a symposium; it
              is a declaration of kinetic energy in a static universe.
              Orchestrated by the{" "}
              <strong>Department of Computer Science & Engineering</strong> at{" "}
              <strong>Meenakshi Sundararajan Engineering College</strong>, this
              event is a singularity where technical prowess meets creative
              chaos.
            </p>
            <p className="font-body text-sm text-white/70 leading-[1.8]">
              To achieve academic excellence in Computer Science and Engineering
              by imparting quality education, encouraging research activities
              and innovation, inculcating ethical values and preparing the
              students to face industrial demands, societal needs and technical
              challenges.
            </p>
          </div>

          <div className="quote-banner text-center py-16 px-10 bg-gradient-to-br from-gold/5 via-[#8B0000]/5 to-transparent border border-gold/10 relative">
            <div className="quote-marks font-title text-[80px] text-gold-dark opacity-30 leading-[0.5] mb-2">
              “
            </div>
            <blockquote className="font-accent text-2xl text-white italic mb-4">
              We&#39;re not meant to save the world. We&#39;re meant to leave
              it.
            </blockquote>
            <cite className="font-heading text-xs tracking-[3px] text-gold-dark">
              — Cooper
            </cite>
          </div>
        </div>
      </div>
    </section>
  );
}

// export function AboutUs() {
//     // Setting to false by default for better mobile experience
//     const [expanded, setExpanded] = useState(false);

//     return (
//         <section id="aboutus" className="aboutus-section section py-12 sm:py-20 bg-[#0a0a0f]">
//             <div className="section-container max-w-[1400px] mx-auto px-4 sm:px-8">
//                 <div className="aboutus-showcase">
//                     {/* FIX: Increased padding (p-8 sm:p-16) ensures text doesn't hit the corners.
//                         Added relative z-10 to text container to keep it above background effects.
//                     */}
//                     <div className="aboutus-main-card bg-[#111118] p-8 sm:p-12 md:p-16 border border-white/10 relative overflow-hidden">

//                         {/* DECORATIVE CORNERS - Positioned strictly at edges */}
//                         <div className="absolute top-0 left-0 w-8 h-8 border-t-2 border-l-2 border-cyan-400"></div>
//                         <div className="absolute top-0 right-0 w-8 h-8 border-t-2 border-r-2 border-cyan-400"></div>
//                         <div className="absolute bottom-0 left-0 w-8 h-8 border-b-2 border-l-2 border-cyan-400"></div>
//                         <div className="absolute bottom-0 right-0 w-8 h-8 border-b-2 border-r-2 border-cyan-400"></div>

//                         {/* TITLE - Adjusted for mobile scale */}
//                         <h3 className="aboutus-title font-heading text-xl sm:text-3xl tracking-[3px] sm:tracking-[5px] text-cyan-400 mb-8 text-center uppercase relative z-10">
//                             ABOUT US
//                         </h3>

//                         <div className="flex justify-center relative z-10">
//                             <div className={`
//                                 aboutus-description
//                                 font-body text-sm sm:text-base leading-relaxed sm:leading-loose
//                                 text-white/80 text-center mx-auto max-w-[900px]
//                                 transition-all duration-700 ease-in-out overflow-hidden
//                                 ${expanded ? 'max-h-[1200px]' : 'max-h-40 sm:max-h-48'}
//                             `}>
//                                 <p className='pt-4'>
//                                     Meenakshi Sundararajan Engineering College (MSEC) was established by the IIET Society in 2001.
//                                     This institution is a part of the prestigious KRS Group of Institutions which also includes
//                                     the renowned IIET (Indian Institute of Engineering Technology) established in 1947 by our
//                                     Founder Late Shri K.R.Sundararajan, the well-known Meenakshi College for Women and the
//                                     more recently established Meenakshi Sundararajan School of Management.
//                                 </p>
//                                 <p className="mt-4">
//                                     The institutions on the KRS Campus are known for the quality education they impart and
//                                     their stringent levels of discipline. We have consistently outshone all our peers,
//                                     not only in academics, but in co-curricular activities as well. imparting Engineering
//                                     education to young men and women, grooming their overall personality with the highest
//                                     emphasis on ethical values and honing them to face the challenges of the industry
//                                     and the nation at large.
//                                 </p>
//                             </div>
//                         </div>

//                         {/* BUTTON - Centered and scaled */}
//                         <div className="text-center mt-8 relative z-10">
//                             <button
//                                 onClick={() => setExpanded(!expanded)}
//                                 className="font-heading text-xs tracking-widest text-cyan-400 hover:text-white transition-colors uppercase border border-cyan-400/30 px-6 py-2 rounded-sm"
//                             >
//                                 {expanded ? 'Read Less' : 'Read More'}
//                             </button>
//                         </div>
//                     </div>
//                 </div>
//             </div>
//         </section>
//     );
// }

export function AboutUs() {
  const [expanded, setExpanded] = useState(false);

  return (
    <section
      id="mission"
      className="dept-section section py-12 md:py-16 bg-gradient-to-b from-[#0a0a0f]/90 to-[#0a0a0f]/95"
    >
      <div className="section-container max-w-[1400px] mx-auto px-8">
        <div className="dept-showcase mb-16">
          <div className="dept-main-card bg-dark-card p-10 md:p-16 border border-gold/15 relative overflow-hidden">
            {/* Frame Corners */}
            <div className="frame-corner tl absolute top-4 left-4 w-8 h-8 border-t-2 border-l-2 border-gold"></div>
            <div className="frame-corner tr absolute top-4 right-4 w-8 h-8 border-t-2 border-r-2 border-gold"></div>
            <div className="frame-corner bl absolute bottom-4 left-4 w-8 h-8 border-b-2 border-l-2 border-gold"></div>
            <div className="frame-corner br absolute bottom-4 right-4 w-8 h-8 border-b-2 border-r-2 border-gold"></div>

            <h3 className="dept-title font-heading text-2xl sm:text-3xl tracking-[3px] sm:tracking-[5px] text-gold mb-6 text-justify uppercase">
              ABOUT US
            </h3>

            <div className="dept-description  font-body text-sm sm:text-[15px] leading-[1.6] sm:leading-[1.9] text-white/70 text-center max-w-[800px] mx-auto">
              <p>
                Meenakshi Sundararajan Engineering College (MSEC) was
                established by the IIET Society in 2001. This institution is a
                part of the prestigious KRS Group of Institutions which also
                includes the renowned IIET (Indian Institute of Engineering
                Technology)...
              </p>

              {/* EXPANDABLE SECTION */}
              <div
                className={`transition-all duration-500 ease-in-out overflow-hidden ${
                  expanded
                    ? "max-h-[1000px] opacity-100 mt-4"
                    : "max-h-0 opacity-0"
                }`}
              >
                <p>
                  Established in 1947 by our Founder Late Shri K.R.
                  Sundararajan, the well-known Meenakshi College for Women and
                  the more recently established Meenakshi Sundararajan School of
                  Management. The institutions on the KRS Campus are known for
                  the quality education they impart and their stringent levels
                  of discipline. We have consistently outshone all our peers,
                  not only in academics, but in co-curricular activities as
                  well. Imparting Engineering education to young men and women,
                  grooming their overall personality with the highest emphasis
                  on ethical values and honing them to face the challenges of
                  the industry and the nation at large.
                </p>
              </div>
            </div>

            <div className="text-center mt-8 relative z-10">
              <button
                onClick={() => setExpanded(!expanded)}
                className="font-heading text-[10px] tracking-[3px] text-cyan-400 hover:text-white transition-all uppercase border border-cyan-400/30 px-6 py-2 rounded-sm bg-cyan-400/5 hover:bg-cyan-400/20 active:scale-95"
              >
                {expanded ? "Read Less" : "Read More"}
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
export function Department() {
  return (
    <section
      id="mission"
      className="dept-section section py-12 md:py-16 bg-gradient-to-b from-[#0a0a0f]/90 to-[#0a0a0f]/95"
    >
      <div className="section-container max-w-[1400px] mx-auto px-8">
        <div className="dept-showcase mb-16">
          <div className="dept-main-card bg-dark-card p-16 border border-gold/15 relative overflow-hidden norse-frame">
            <div className="frame-corner tl absolute top-4 left-4 w-8 h-8 border-t-2 border-l-2 border-gold"></div>
            <div className="frame-corner tr absolute top-4 right-4 w-8 h-8 border-t-2 border-r-2 border-gold"></div>
            <div className="frame-corner bl absolute bottom-4 left-4 w-8 h-8 border-b-2 border-l-2 border-gold"></div>
            <div className="frame-corner br absolute bottom-4 right-4 w-8 h-8 border-b-2 border-r-2 border-gold"></div>

            <h3 className="dept-title font-heading text-2xl sm:text-3xl tracking-[3px] sm:tracking-[5px] text-gold mb-6 text-center uppercase">
              SECTOR CSE
            </h3>
            <p className="dept-description font-body text-sm sm:text-[15px] leading-[1.6] sm:leading-[1.9] text-white/70 text-center max-w-[800px] mx-auto mb-8 sm:mb-10">
              To provide quality education in theory and application of Computer
              Science and Engineering
              <br className="hidden sm:block" />
              To inculcate analytical thinking and innovation within students to
              become technically competent professionals
              <br className="hidden sm:block" />
              To prepare students to excel in competitive and challenging
              careers
              <br className="hidden sm:block" />
              To generate socially responsible citizens with ethical values to
              face industrial and societal challenges
              <br className="hidden sm:block" />
              To promote research in the emerging areas of technology
              convergence
            </p>

            <div className="dept-highlights grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {[
                {
                  icon: "",
                  title: "ACADEMIC EXCELLENCE",
                  text: "Consistently producing university rank holders and coding virtuosos.",
                },
                {
                  icon: "",
                  title: "RESEARCH & INNOVATION",
                  text: "Pioneering projects in AI, Blockchain, and Quantum Computing.",
                },
                {
                  icon: "",
                  title: "INDUSTRY COMMAND",
                  text: "Strong alliances with top-tier tech giants for placements.",
                },
              ].map((item, i) => (
                <div
                  key={i}
                  className="highlight-item flex gap-4 p-5 bg-gold/5 border border-gold/10 transition-all duration-300 hover:border-gold/20 hover:bg-gold/10"
                >
                  <div className="highlight-icon text-3xl shrink-0">
                    {item.icon}
                  </div>
                  <div className="highlight-text">
                    <h4 className="font-heading text-sm tracking-[2px] text-gold mb-1">
                      {item.title}
                    </h4>
                    <p className="text-xs text-white/40 leading-relaxed">
                      {item.text}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        <div className="dept-pillars grid grid-cols-2 md:grid-cols-4 gap-5">
          {[
            { icon: "", title: "LOGIC", text: "The Core of Our Engine" },
            { icon: "", title: "CREATIVITY", text: "The Fuel for Warp Drive" },
            { icon: "", title: "SPEED", text: "Velocity of Execution" },
            { icon: "", title: "INTEGRITY", text: "The Shield of Our Hull" },
          ].map((item, i) => (
            <div
              key={i}
              className="pillar text-center p-8 bg-dark-card border border-gold/10 transition-all duration-300 hover:border-gold hover:-translate-y-1 hover:shadow-lg"
            >
              <div className="pillar-icon text-4xl mb-2">{item.icon}</div>
              <h4 className="font-heading text-[13px] tracking-[2px] text-gold mb-1">
                {item.title}
              </h4>
              <p className="text-[11px] text-white/40">{item.text}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export function Timeline() {
  return (
    <section
      id="flightpath"
      className="section timeline-section py-24 md:py-[180px] bg-gradient-to-b from-[#0a0a0f]/90 to-[#0a0a0f]/95 relative"
    >
      <div className="timeline-bg-deco absolute top-0 left-0 w-full h-full opacity-5 bg-[url('https://www.transparenttextures.com/patterns/stardust.png')]"></div>
      <div className="section-container max-w-[1400px] mx-auto px-8 relative z-10">
        <div className="section-header text-center mb-20 relative">
          <div className="rune-decoration left absolute top-1/2 -translate-y-1/2 left-0 font-mono text-[9px] text-gold/30 tracking-[4px]">
            NAV:// 00:00
          </div>
          <h2 className="section-title text-4xl md:text-5xl font-heading text-white mb-5 tracking-[10px] drop-shadow-[0_0_20px_rgba(0,240,255,0.4)]">
            THE FLIGHT PATH
          </h2>
          <p className="section-subtitle font-body text-sm tracking-[5px] text-white/50 max-w-[600px] mx-auto">
            Sacred Coordinates of Kranti 2K26
          </p>
          <div className="rune-decoration right absolute top-1/2 -translate-y-1/2 right-0 font-mono text-[9px] text-gold/30 tracking-[4px]">
            NAV:// 24:00
          </div>
        </div>

        <div className="timeline relative max-w-[1000px] mx-auto py-10">
          {/* Central Vertical Line */}
          <div className="absolute left-1/2 -translate-x-1/2 top-0 h-full w-[2px] bg-gold/20"></div>

          {[
            {
              time: "09:00 HOURS",
              title: "LIFTOFF",
              text: "Registration & Mission Briefing. The countdown hits zero. Pilots assemble at the staging area.",
              side: "left",
            },
            {
              time: "10:00 HOURS",
              title: "ORBITAL MANEUVERS",
              text: "Event Module 1. Technical and Non-technical rounds commence. Gravity is heavy.",
              side: "right",
            },
            {
              time: "13:00 HOURS",
              title: "REFUELING",
              text: "Lunch Break. Rations distributed at the mess hall.",
              side: "left",
            },
            {
              time: "14:00 HOURS",
              title: "DEEP SPACE",
              text: "Event Module 2. Finals and complex problem solving. The pressure mounts.",
              side: "right",
            },
            {
              time: "16:00 HOURS",
              title: "DOCKING",
              text: "Valedictory & Prize Distribution. The victors are crowned. Safe return to Earth.",
              side: "left",
            },
          ].map((item, i) => (
            <div
              key={i}
              className={`relative flex w-full mb-12 md:mb-8 flex-col ${item.side === "left" ? "md:flex-row-reverse" : "md:flex-row"}`}
            >
              {/* 1. Content Box Container (Occupies 100% on mobile, 50% on desktop) */}
              <div className="w-full md:w-1/2 px-4 sm:px-8 md:px-12 ml-auto md:ml-0">
                <div
                  className={`timeline-content bg-dark-card border border-gold/10 p-5 sm:p-6 transition-all duration-300 hover:border-gold/30 hover:-translate-y-1 hover:shadow-lg ${item.side === "left" ? "md:text-right" : "md:text-left"}`}
                >
                  <div className="timeline-date font-mono text-[10px] text-gold/60 mb-2">
                    {item.time}
                  </div>
                  <h3 className="font-heading text-base sm:text-lg tracking-[2px] sm:tracking-[3px] text-white mb-2">
                    {item.title}
                  </h3>
                  <p className="text-xs sm:text-[13px] text-white/50 leading-relaxed">
                    {item.text}
                  </p>
                </div>
              </div>

              {/* 2. Central Icon Marker */}
              <div className="absolute left-0 md:left-1/2 -translate-x-1/2 top-0 md:top-1/2 -translate-y-1/2 w-8 h-8 sm:w-10 sm:h-10 bg-dark-bg border border-gold rounded-full flex items-center justify-center z-10 transition-all duration-300 hover:bg-gold hover:text-black hover:shadow-[0_0_20px_rgba(212,168,67,0.6)]">
                <div className="marker-icon text-sm sm:text-lg"></div>
              </div>

              {/* 3. Empty Spacer (The other 50% of the row on desktop only) */}
              <div className="hidden md:block md:w-1/2"></div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export function Footer() {
  return (
    <footer className="footer bg-black border-t border-gold/10 py-16 relative">
      <div className="section-container max-w-[1400px] mx-auto px-6 md:px-8">
        {/* 1. Main Info Grid */}
        <div className="footer-grid grid grid-cols-1 md:grid-cols-12 gap-12 mb-16">
          <div className="footer-brand md:col-span-5 lg:col-span-4">
            <div className="footer-logo font-title text-4xl md:text-5xl mb-5 tracking-[4px] md:tracking-[6px] text-transparent bg-clip-text bg-gradient-to-r from-[#00F0FF] via-white to-[#00F0FF] drop-shadow-[0_0_20px_rgba(0,240,255,0.3)]">
              KRANTI 2K26
            </div>
            <p className="text-sm text-white/50 leading-relaxed max-w-[400px]">
              The Interstellar Symposium of MSEC. A journey beyond the event
              horizon of technology and innovation.
            </p>
          </div>

          <div className="hidden md:block md:col-span-1"></div>

          <div className="footer-links md:col-span-2">
            <h4 className="font-heading text-xs tracking-[4px] text-cyan-400 mb-6 pb-1 border-b border-cyan-400/20 inline-block">
              NAVIGATION
            </h4>
            <ul className="space-y-4 text-sm text-white/50">
              {["Home", "Events", "Mission", "Register"].map((link) => (
                <li key={link}>
                  <a href="#" className="hover:text-gold transition-colors">
                    {link}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div className="footer-contact md:col-span-2">
            <h4 className="font-heading text-xs tracking-[4px] text-gold mb-6 pb-1 border-b border-gold/20 inline-block">
              CONTACT COMMAND
            </h4>
            <p className="text-sm text-white/50 leading-relaxed">
              Meenakshi Sundararajan
              <br />
              Engineering College
              <br />
              Chennai - 600024
            </p>
          </div>

          <div className="footer-coordinator md:col-span-3">
            <h4 className="font-heading text-xs tracking-[4px] text-gold mb-6 pb-1 border-b border-gold/20 inline-block">
              STUDENT COORDINATOR
            </h4>
            <p className="text-sm text-white/50">
              Vishal
              <br />
              +91 63817 70657
            </p>
          </div>
        </div>

        {/* 2 + 3 Wrapped with Controlled Vertical Spacing */}
        <div className="space-y-20">
          {/* Instagram Section */}
          <div className="footer-icons flex justify-center items-center border-t border-white/5 pt-20 pb-16 px-4 my-8">
            <a
              href="https://instagram.com/kranti2k26"
              target="_blank"
              rel="noopener noreferrer"
              className="group relative p-4 transition-all duration-500"
            >
              <div className="absolute inset-0 bg-[#00f0ff]/20 rounded-full scale-0 group-hover:scale-150 blur-2xl transition-transform duration-500"></div>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="42"
                height="42"
                viewBox="0 0 24 24"
                fill="currentColor"
                className="text-white/20 group-hover:text-[#00f0ff] group-hover:scale-125 transition-all duration-300 relative z-10"
              >
                <path d="M20.947 8.305a6.53 6.53 0 0 0-.419-2.18 4.108 4.108 0 0 0-2.445-2.446 6.51 6.51 0 0 0-2.18-.419C14.758 3.208 14.39 3.2 12 3.2s-2.758.008-3.903.06a6.531 6.531 0 0 0-2.18.419 4.108 4.108 0 0 0-2.445 2.446 6.51 6.51 0 0 0-.419 2.18C3.008 9.452 3 9.82 3 12.01s.008 2.758.06 3.903a6.531 6.531 0 0 0 .419 2.18 4.108 4.108 0 0 0 2.445 2.446 6.51 6.51 0 0 0 2.18.419c1.145.052 1.513.06 3.903.06s2.758-.008 3.903-.06a6.53 6.53 0 0 0 2.18-.419 4.108 4.108 0 0 0 2.445-2.446 6.51 6.51 0 0 0 .419-2.18c.052-1.145.06-1.513.06-3.903s-.008-2.758-.06-3.903zm-8.947 8.184a4.489 4.489 0 1 1 0-8.978 4.489 4.489 0 0 1 0 8.978zm0-7.313a2.825 2.825 0 1 0 0 5.65 2.825 2.825 0 0 0 0-5.65zm5.737-.733a1.05 1.05 0 1 1-2.1 0 1.05 1.05 0 0 1 2.1 0z"></path>
              </svg>
            </a>
            <a
              href="#"
              target="_blank"
              rel="noopener noreferrer"
              className="group relative p-4 transition-all duration-500"
            >
              {/* Expandable Cyan Glow */}
              <div className="absolute inset-0 bg-[#00f0ff]/20 rounded-full scale-0 group-hover:scale-150 blur-2xl transition-transform duration-500"></div>

              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="42"
                height="42"
                viewBox="0 0 24 24"
                fill="currentColor" // Boxicons are usually filled
                className="text-white/20 group-hover:text-[#00f0ff] group-hover:scale-125 transition-all duration-300 relative z-10"
              >
                <path d="M20 3H4a1 1 0 0 0-1 1v16a1 1 0 0 0 1 1h16a1 1 0 0 0 1-1V4a1 1 0 0 0-1-1zM8.339 18.337H5.667v-8.59h2.672v8.59zM7.003 8.574a1.548 1.548 0 1 1 0-3.096 1.548 1.548 0 0 1 0 3.096zm11.335 9.763h-2.669V14.16c0-.996-.018-2.277-1.388-2.277-1.39 0-1.601 1.086-1.601 2.207v4.248h-2.667v-8.59h2.56v1.174h.037c.356-.675 1.227-1.387 2.526-1.387 2.703 0 3.203 1.778 3.203 4.092v4.71z"></path>
              </svg>
            </a>
            {/* TWITTER / X (Boxicons style) */}
            <a
              href="#"
              target="_blank"
              rel="noopener noreferrer"
              className="group relative p-4 transition-all duration-500"
            >
              <div className="absolute inset-0 bg-[#00f0ff]/20 rounded-full scale-0 group-hover:scale-150 blur-2xl transition-transform duration-500"></div>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="42"
                height="42"
                viewBox="0 0 24 24"
                fill="currentColor"
                className="text-white/20 group-hover:text-[#00f0ff] group-hover:scale-125 transition-all duration-300 relative z-10"
              >
                <path d="M19.633 4.5H15.24l-3.238 4.316L8.765 4.5H4.5l5.24 7.234L4.5 19.5h4.393l3.507-4.675 3.75 4.675h4.265l-5.462-7.81L19.633 4.5zM15.86 17.85l-10.39-12.9h1.61l10.39 12.9h-1.61z"></path>
              </svg>
            </a>
          </div>

          {/* Copyright Section */}
          <div className="flex justify-center">
            <p className="font-mono text-[10px] text-white/20 tracking-[0.2em]">
              © 2026 KRANTI SYMPOSIUM. ALL RIGHTS RESERVED.
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}
