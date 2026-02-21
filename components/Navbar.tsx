"use client";

import { useState, useEffect } from "react";
import { useRouter, usePathname } from "next/navigation";

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileOpen, setIsMobileOpen] = useState(false);
  const router = useRouter();
  const pathname = usePathname();
  const isHomePage = pathname === "/";

  // Handle Navbar background change on scroll
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Prevent background scrolling when mobile menu is open
  useEffect(() => {
    if (isMobileOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "unset";
    }
  }, [isMobileOpen]);

  const links = ["HOME", "ABOUT", "EVENTS"];
  const linkMap: Record<string, string> = {
    HOME: "hero",
    ABOUT: "about",
    EVENTS: "ops",
  };

  const scrollToSection = (id: string) => {
    const el = document.getElementById(id);
    if (!el) return;
    const navHeight = document.getElementById("main-nav")?.offsetHeight || 0;
    const top = el.getBoundingClientRect().top + window.scrollY - navHeight - 8;
    window.scrollTo({ top, behavior: "smooth" });
  };

  const handleNavClick = (text: string) => {
    const sectionId = linkMap[text] || text.toLowerCase().replace(/\s/g, "");
    setIsMobileOpen(false);

    if (isHomePage) {
      scrollToSection(sectionId);
    } else {
      router.push(`/#${sectionId}`);
    }
  };

  const handleLogoClick = () => {
    setIsMobileOpen(false);
    if (isHomePage) {
      scrollToSection("hero");
    } else {
      router.push("/");
    }
  };

  return (
    <>
      {/* 1. Backdrop Overlay (Outside nav) */}
      <div
        className={`fixed inset-0 bg-black/80 backdrop-blur-md z-[9998] transition-opacity duration-500 md:hidden ${
          isMobileOpen ? "opacity-100" : "opacity-0 pointer-events-none"
        }`}
        onClick={() => setIsMobileOpen(false)}
      />

      {/* 2. Mobile Menu Side Panel (Outside nav) */}
      <aside
        className={`fixed top-0 right-0 w-[80%] max-w-[350px] h-full bg-[#0a0a0f] z-[9999] transform transition-transform duration-500 ease-in-out border-l border-gold/10 shadow-2xl md:hidden flex flex-col justify-center items-center gap-10 ${
          isMobileOpen ? "translate-x-0" : "translate-x-full"
        }`}
      >
        <button
          onClick={() => setIsMobileOpen(false)}
          className="absolute top-6 left-6 text-gold text-2xl font-light"
        >
          ✕
        </button>
        {links.map((text) => (
          <button
            key={text}
            className="text-white font-heading text-xl tracking-[6px] hover:text-gold transition-all uppercase active:scale-95 bg-transparent border-none cursor-pointer"
            onClick={() => handleNavClick(text)}
          >
            {text}
          </button>
        ))}
      </aside>

      {/* 3. Main Navigation Bar */}
      <nav
        id="main-nav"
        className={`fixed top-0 left-0 w-full z-[10000] transition-all duration-500 ease-in-out border-b ${
          isScrolled
            ? "py-3 bg-[#0a0a0f]/95 border-gold/15 shadow-xl"
            : "py-5 bg-[#0a0a0f]/80 border-gold/5 backdrop-blur-md"
        }`}
      >
        <div className="nav-container max-w-[1400px] mx-auto px-6 md:px-12 flex items-center justify-between">
          {/* Logo */}
          <div
            className="nav-logo flex items-center gap-3 cursor-pointer z-[10001]"
            onClick={handleLogoClick}
          >
            <div className="logo-nav font-title text-3xl text-miller-blue drop-shadow-[0_0_15px_rgba(74,144,226,0.6)]">
              K
            </div>
            <div className="nav-logo-text flex flex-col leading-none">
              <span className="kranti-text font-heading text-base font-bold tracking-[5px] text-white">
                KRANTI
              </span>
              <span className="year-text font-heading text-[10px] tracking-[8px] text-miller-blue">
                2K26
              </span>
            </div>
          </div>

          {/* Desktop Links */}
          <ul className="nav-links hidden md:flex items-center gap-9">
            {links.map((text) => (
              <li key={text}>
                <button
                  onClick={() => handleNavClick(text)}
                  className="nav-link font-heading text-[11px] tracking-[3px] text-white/70 relative py-1 hover:text-gold transition-colors duration-300 group bg-transparent border-none cursor-pointer"
                >
                  {text}
                  <span className="absolute bottom-0 left-1/2 -translate-x-1/2 w-0 h-[1px] bg-gold transition-all duration-300 group-hover:w-full"></span>
                </button>
              </li>
            ))}
          </ul>

          {/* Hamburger Icon */}
          <div
            className="md:hidden flex flex-col justify-center items-end gap-[6px] cursor-pointer z-[10001] w-8 h-8"
            onClick={() => setIsMobileOpen(!isMobileOpen)}
          >
            <span
              className={`h-[2px] bg-gold transition-all duration-300 ${
                isMobileOpen ? "w-8 rotate-45 translate-y-[8px]" : "w-8"
              }`}
            ></span>
            <span
              className={`h-[2px] bg-gold transition-all duration-300 ${
                isMobileOpen ? "opacity-0" : "w-5"
              }`}
            ></span>
            <span
              className={`h-[2px] bg-gold transition-all duration-300 ${
                isMobileOpen ? "w-8 -rotate-45 -translate-y-[8px]" : "w-7"
              }`}
            ></span>
          </div>
        </div>
      </nav>
    </>
  );
}
