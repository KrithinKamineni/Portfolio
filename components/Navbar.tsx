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
  const [pillStyle, setPillStyle] = useState({ left: 0, width: 0 });
  const linkRefs = useRef<(HTMLAnchorElement | null)[]>([]);
  const scrollingRef = useRef(false);

  useEffect(() => {
    const handleScroll = () => {
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

  useEffect(() => {
    const el = linkRefs.current[activeIndex];
    if (el) setPillStyle({ left: el.offsetLeft, width: el.offsetWidth });
  }, [activeIndex]);

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
      {/* Floating pill navbar */}
      <header className="fixed top-4 left-0 right-0 z-50 flex justify-center px-4">
        <div className="flex items-center gap-1 bg-white/80 backdrop-blur-md border border-border rounded-full px-3 py-2 shadow-sm">
          {/* Logo / name */}
          <a
            href="#"
            onClick={(e) => { e.preventDefault(); handleNavClick("#", 0); }}
            className="font-serif text-sm text-text-primary hover:text-accent transition-colors duration-150 px-3 py-1 mr-2"
          >
            KK
          </a>

          <div className="w-px h-4 bg-border mx-1" />

          {/* Desktop nav links */}
          <nav className="relative hidden md:flex items-center gap-1" aria-label="Main navigation">
            {/* Sliding pill */}
            {pillStyle.width > 0 && (
              <span
                className="absolute top-0 bottom-0 rounded-full bg-background transition-all duration-300 ease-in-out"
                style={{ left: pillStyle.left, width: pillStyle.width }}
              />
            )}
            {navLinks.map((link, i) => (
              <a
                key={link.href}
                ref={(el) => { linkRefs.current[i] = el; }}
                href={link.href}
                onClick={(e) => { e.preventDefault(); handleNavClick(link.href, i); }}
                className={`relative z-10 font-sans text-sm px-3 py-1 rounded-full transition-colors duration-150 ${
                  activeIndex === i ? "text-text-primary" : "text-text-secondary hover:text-text-primary"
                }`}
              >
                {link.label}
              </a>
            ))}
          </nav>

          <div className="w-px h-4 bg-border mx-1 hidden md:block" />

          {/* Contact CTA */}
          <a
            href="#contact"
            onClick={(e) => { e.preventDefault(); document.querySelector("#contact")?.scrollIntoView({ behavior: "smooth" }); }}
            className="hidden md:inline-flex items-center font-sans text-sm font-medium px-4 py-1.5 rounded-full bg-text-primary text-white hover:bg-text-primary/85 transition-all duration-150 hover:scale-105 ml-1"
          >
            Contact
          </a>

          {/* Mobile hamburger */}
          <button
            className="md:hidden p-1.5 text-text-secondary hover:text-text-primary transition-colors ml-1"
            onClick={() => setMenuOpen(true)}
            aria-label="Open navigation menu"
          >
            <Menu size={18} />
          </button>
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
