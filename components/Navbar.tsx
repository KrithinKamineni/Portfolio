"use client";

import { useState, useEffect, useRef } from "react";
import { Menu, X } from "lucide-react";

const navLinks = [
  { label: "About", href: "#" },
  { label: "Experience", href: "#experience" },
  { label: "Projects", href: "#projects" },
  { label: "Organizations", href: "#organizations" },
  { label: "Skills", href: "#skills" },
];

const sectionIds = ["", "experience", "projects", "organizations", "skills"];

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [activeIndex, setActiveIndex] = useState(0);
  const [scrolled, setScrolled] = useState(false);
  const linkRefs = useRef<(HTMLAnchorElement | null)[]>([]);
  const scrollingRef = useRef(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 10);
      if (scrollingRef.current) return;
      const atBottom = window.innerHeight + window.scrollY >= document.documentElement.scrollHeight - 50;
      if (atBottom) { setActiveIndex(sectionIds.length - 1); return; }
      const scrollMid = window.scrollY + window.innerHeight / 2;
      let current = 0;
      sectionIds.forEach((id, i) => {
        if (!id) return;
        const el = document.getElementById(id);
        if (el && el.offsetTop <= scrollMid) current = i;
      });
      setActiveIndex(current);
    };
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleNavClick = (href: string, index: number) => {
    setMenuOpen(false);
    setActiveIndex(index);
    scrollingRef.current = true;
    setTimeout(() => { scrollingRef.current = false; }, 800);
    if (href === "#") { window.scrollTo({ top: 0, behavior: "smooth" }); return; }
    const el = document.querySelector(href);
    if (el) el.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <>
      <header
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-200 ${
          scrolled ? "bg-background/80 backdrop-blur-md border-b border-border" : "bg-background/60 backdrop-blur-sm"
        }`}
      >
        <div className="max-w-content mx-auto px-6 flex items-center justify-between h-20">

          {/* Left: initials + nav links */}
          <div className="flex items-center gap-8">
            <a
              href="#"
              onClick={(e) => { e.preventDefault(); handleNavClick("#", 0); }}
              className="font-serif text-base text-text-primary hover:text-accent transition-colors duration-150"
            >
              KK
            </a>

            <nav className="hidden md:flex items-center gap-7" aria-label="Main navigation">
              {navLinks.map((link, i) => (
                <a
                  key={link.href}
                  ref={(el) => { linkRefs.current[i] = el; }}
                  href={link.href}
                  onClick={(e) => { e.preventDefault(); handleNavClick(link.href, i); }}
                  className={`font-sans text-base transition-colors duration-150 ${
                    activeIndex === i ? "text-text-primary" : "text-text-secondary hover:text-text-primary"
                  }`}
                >
                  {link.label}
                </a>
              ))}
            </nav>
          </div>

          {/* Right: Contact button */}
          <div className="flex items-center gap-3">
            <a
              href="#contact"
              onClick={(e) => { e.preventDefault(); document.querySelector("#contact")?.scrollIntoView({ behavior: "smooth" }); }}
              className="btn-shimmer hidden md:inline-flex items-center font-sans text-base font-medium px-5 py-2 rounded-lg bg-text-primary text-white hover:scale-105 transition-all duration-150"
            >
              Contact
            </a>

            <button
              className="md:hidden p-1.5 text-text-secondary hover:text-text-primary transition-colors"
              onClick={() => setMenuOpen(true)}
              aria-label="Open navigation menu"
            >
              <Menu size={18} />
            </button>
          </div>
        </div>
      </header>

      {/* Mobile drawer overlay */}
      {menuOpen && (
        <div className="fixed inset-0 z-50 bg-black/40" onClick={() => setMenuOpen(false)} />
      )}
      <div
        className={`fixed top-0 right-0 h-full w-72 z-50 bg-surface border-l border-border flex flex-col transition-transform duration-300 ${
          menuOpen ? "translate-x-0" : "translate-x-full"
        }`}
      >
        <div className="flex items-center justify-between px-6 h-16 border-b border-border">
          <span className="font-serif text-base text-text-primary">Menu</span>
          <button onClick={() => setMenuOpen(false)} aria-label="Close navigation menu" className="p-2 text-text-secondary hover:text-text-primary">
            <X size={20} />
          </button>
        </div>
        <nav className="flex flex-col gap-1 p-6" aria-label="Mobile navigation">
          {navLinks.map((link, i) => (
            <a
              key={link.href}
              href={link.href}
              onClick={(e) => { e.preventDefault(); handleNavClick(link.href, i); }}
              className="font-sans text-base text-text-secondary hover:text-text-primary py-3 border-b border-border/50 transition-colors duration-150"
            >
              {link.label}
            </a>
          ))}
        </nav>
      </div>
    </>
  );
}
