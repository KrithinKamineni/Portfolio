"use client";

/* eslint-disable @next/next/no-img-element */
import { useState, useEffect } from "react";
import { Briefcase, X, ExternalLink } from "lucide-react";
import { experiences, type Experience } from "@/data/experience";
import FadeIn from "./FadeIn";

const tagColors: Record<string, string> = {
  Product: "text-purple-300 bg-purple-900/30",
  AI: "text-blue-300 bg-blue-900/30",
  Research: "text-teal-300 bg-teal-900/30",
  Engineering: "text-orange-300 bg-orange-900/30",
  "Full Stack": "text-indigo-300 bg-indigo-900/30",
  Backend: "text-green-300 bg-green-900/30",
  AWS: "text-yellow-300 bg-yellow-900/30",
};

const logoWatermarks: Record<string, { src: string; filter?: string }> = {
  WhiteHelmet: { src: "/whitehelmet-logo-Picsart-BackgroundRemover.jpg", filter: "grayscale(1) brightness(10)" },
  PossoBuild: { src: "/possobuild-logo-Picsart-BackgroundRemover.png" },
  "InsightLab AI": { src: "/insightlab-logo.png" },
};

function ExperienceModal({ exp, onClose }: { exp: Experience; onClose: () => void }) {
  useEffect(() => {
    const onKey = (e: KeyboardEvent) => { if (e.key === "Escape") onClose(); };
    window.addEventListener("keydown", onKey);
    document.body.style.overflow = "hidden";
    return () => {
      window.removeEventListener("keydown", onKey);
      document.body.style.overflow = "";
    };
  }, [onClose]);

  return (
    <div
      className="fixed inset-0 z-[100] bg-black/70 backdrop-blur-sm flex items-center justify-center p-6 animate-fadeIn"
      onClick={onClose}
    >
      <div
        className="relative bg-[#111111] rounded-2xl max-w-lg w-full max-h-[85vh] overflow-y-auto p-8 shadow-2xl animate-slideUp"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Close button */}
        <button
          onClick={onClose}
          className="absolute top-5 right-5 text-text-secondary hover:text-text-primary transition-colors"
          aria-label="Close"
        >
          <X size={20} />
        </button>

        {/* Header */}
        <h3 className="font-serif text-4xl text-text-primary mb-2">{exp.company}</h3>
        <p className="font-sans text-base text-accent font-medium mb-6">{exp.role}</p>

        {/* Bullets */}
        <ul className="space-y-5 mb-8">
          {exp.bullets.map((bullet, i) => (
            <li key={i} className="flex items-start gap-3">
              <span className="text-accent mt-0.5 flex-shrink-0">▷</span>
              <p className="font-sans text-sm text-text-secondary leading-relaxed">{bullet}</p>
            </li>
          ))}
        </ul>

        {/* Visit Website */}
        {exp.website && (
          <a
            href={exp.website}
            target="_blank"
            rel="noopener noreferrer"
            className="btn-shimmer-light inline-flex items-center gap-2 font-sans text-sm font-medium px-5 py-2.5 rounded-full text-black hover:scale-105 transition-all duration-150"
          >
            Visit Website <ExternalLink size={14} />
          </a>
        )}
      </div>
    </div>
  );
}

function ExperienceCard({ exp, index, onClick }: { exp: Experience; index: number; onClick: () => void }) {
  const watermark = logoWatermarks[exp.company];

  return (
    <FadeIn delay={index * 0.08}>
      <div
        onClick={onClick}
        className="relative bg-white/5 backdrop-blur-md border border-white/10 rounded-2xl overflow-hidden p-6 cursor-pointer hover:-translate-y-1 hover:border-white/20 transition-all duration-200"
      >
        {/* Watermark logo */}
        {watermark && (
          <div className="absolute -top-10 -right-12 w-48 h-48 opacity-10 pointer-events-none select-none">
            <img
              src={watermark.src}
              alt=""
              className="w-full h-full object-contain"
              style={watermark.filter ? { filter: watermark.filter } : undefined}
            />
          </div>
        )}

        {/* Top row */}
        <div className="flex items-start justify-between gap-4 mb-3 relative z-10">
          <h3 className="font-serif text-2xl text-text-primary leading-tight">{exp.company}</h3>
        </div>

        {/* Role */}
        <p className="font-sans text-sm text-accent font-medium mb-5 relative z-10">{exp.role}</p>

        {/* Summary */}
        <p className="font-sans text-sm text-text-secondary leading-relaxed mb-5 relative z-10">
          {exp.summary}
        </p>

        {/* Tags + period */}
        <div className="flex items-center justify-between gap-4 relative z-10">
          <div className="flex flex-wrap gap-2">
            {exp.tags.map((tag) => (
              <span
                key={tag}
                className={`font-sans text-xs px-2.5 py-1 rounded-full border border-white/10 ${
                  tagColors[tag] ?? "text-text-secondary"
                }`}
              >
                {tag}
              </span>
            ))}
          </div>
          <span className="font-sans text-xs text-text-secondary whitespace-nowrap flex-shrink-0">
            {exp.period}
          </span>
        </div>
      </div>
    </FadeIn>
  );
}

export default function Experience() {
  const [selected, setSelected] = useState<Experience | null>(null);

  return (
    <section id="experience" className="py-20 md:py-28 bg-background scroll-mt-20">
      <div className="max-w-content mx-auto px-6">
        <FadeIn>
          <div className="mb-12">
            <div className="flex items-center gap-1.5 mb-3">
              <Briefcase size={11} className="text-accent" />
              <p className="font-sans text-xs text-accent tracking-widest uppercase">Work</p>
            </div>
            <h2 className="font-serif text-4xl md:text-5xl text-text-primary">Experience</h2>
          </div>
        </FadeIn>

        <div className="grid md:grid-cols-2 gap-4">
          {experiences.map((exp, i) => (
            <ExperienceCard key={exp.company} exp={exp} index={i} onClick={() => setSelected(exp)} />
          ))}
        </div>
      </div>

      {selected && <ExperienceModal exp={selected} onClose={() => setSelected(null)} />}
    </section>
  );
}
