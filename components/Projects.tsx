"use client";

import { useState, useEffect } from "react";
import { ExternalLink, FolderOpen, X } from "lucide-react";
import { siGithub } from "simple-icons";
import { projects, type Project } from "@/data/projects";
import FadeIn from "./FadeIn";

const tagColors: Record<string, string> = {
  "Next.js": "text-text-primary bg-white/10",
  TypeScript: "text-blue-300 bg-blue-900/30",
  NLP: "text-purple-300 bg-purple-900/30",
  Product: "text-teal-300 bg-teal-900/30",
  Hardware: "text-orange-300 bg-orange-900/30",
  "Circuit Design": "text-red-300 bg-red-900/30",
  LTspice: "text-green-300 bg-green-900/30",
  React: "text-blue-300 bg-blue-900/30",
  Supabase: "text-green-300 bg-green-900/30",
  Finance: "text-yellow-300 bg-yellow-900/30",
};

function ProjectModal({ project, onClose }: { project: Project; onClose: () => void }) {
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
        className="relative bg-[#111111] rounded-2xl max-w-lg w-full max-h-[85vh] overflow-y-auto p-8 shadow-2xl"
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
        <h3 className="font-serif text-3xl text-text-primary mb-1">{project.name}</h3>
        <p className="font-sans text-xs text-accent mb-6">{project.period}</p>

        {/* Bullets */}
        <ul className="space-y-4 mb-8">
          {project.bullets.map((bullet, i) => (
            <li key={i} className="flex items-start gap-3">
              <span className="text-accent mt-0.5 flex-shrink-0">▷</span>
              <p className="font-sans text-sm text-text-secondary leading-relaxed">{bullet}</p>
            </li>
          ))}
        </ul>

        {/* Links */}
        <div className="flex items-center gap-4">
          {project.github && (
            <a
              href={project.github}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 font-sans text-sm text-text-primary hover:text-accent transition-colors"
            >
              <svg viewBox="0 0 24 24" width={16} height={16} fill="currentColor"><path d={siGithub.path} /></svg>
              GitHub
            </a>
          )}
          {project.demo && (
            <a
              href={project.demo}
              target="_blank"
              rel="noopener noreferrer"
              className="btn-shimmer-light inline-flex items-center gap-2 font-sans text-sm font-medium px-5 py-2.5 rounded-full text-black hover:scale-105 transition-all duration-150"
            >
              Visit Demo <ExternalLink size={14} />
            </a>
          )}
        </div>
      </div>
    </div>
  );
}

function ProjectCard({ project, index, onClick }: { project: Project; index: number; onClick: () => void }) {
  return (
    <FadeIn delay={index * 0.08}>
      <div
        onClick={onClick}
        className="relative bg-white/5 backdrop-blur-md border border-white/10 rounded-2xl overflow-hidden p-6 cursor-pointer hover:-translate-y-1 hover:border-white/20 transition-all duration-200"
      >
        {/* Watermark logo */}
        {project.logo && (
          <div className="absolute -top-32 -right-24 w-80 h-80 opacity-10 pointer-events-none select-none">
            <img
              src={project.logo}
              alt=""
              className="w-full h-full object-contain"
            />
          </div>
        )}

        {/* Top row */}
        <div className="flex items-start justify-between gap-4 mb-3 relative z-10">
          <h3 className="font-serif text-2xl text-text-primary leading-tight">{project.name}</h3>
          <div className="flex items-center gap-3 flex-shrink-0">
            {project.github && (
              <a
                href={project.github}
                target="_blank"
                rel="noopener noreferrer"
                onClick={(e) => e.stopPropagation()}
                aria-label={`${project.name} GitHub`}
                className="text-text-secondary hover:text-text-primary transition-colors"
              >
                <svg viewBox="0 0 24 24" width={20} height={20} fill="currentColor"><path d={siGithub.path} /></svg>
              </a>
            )}
            {project.demo && (
              <a
                href={project.demo}
                target="_blank"
                rel="noopener noreferrer"
                onClick={(e) => e.stopPropagation()}
                aria-label={`${project.name} demo`}
                className="text-text-secondary hover:text-accent transition-colors"
              >
                <ExternalLink size={20} />
              </a>
            )}
          </div>
        </div>

        {/* Period */}
        <p className="font-sans text-xs text-accent font-medium mb-3 relative z-10">{project.period}</p>

        {/* Summary */}
        <p className="font-sans text-sm text-text-secondary leading-relaxed mb-5 relative z-10">
          {project.summary}
        </p>

        {/* Tags */}
        <div className="flex flex-wrap gap-2 relative z-10">
          {project.tags.map((tag) => (
            <span
              key={tag}
              className={`font-sans text-xs px-2.5 py-1 rounded-full border border-white/10 ${tagColors[tag] ?? "text-text-secondary"}`}
            >
              {tag}
            </span>
          ))}
        </div>
      </div>
    </FadeIn>
  );
}

export default function Projects() {
  const [selected, setSelected] = useState<Project | null>(null);

  return (
    <section id="projects" className="py-20 md:py-28 bg-background scroll-mt-20">
      <div className="max-w-content mx-auto px-6">
        <FadeIn>
          <div className="mb-12">
            <div className="flex items-center gap-1.5 mb-3">
              <FolderOpen size={11} className="text-accent" />
              <p className="font-sans text-xs text-accent tracking-widest uppercase">Personal</p>
            </div>
            <h2 className="font-serif text-4xl md:text-5xl text-text-primary">Projects</h2>
          </div>
        </FadeIn>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          {projects.map((project, i) => (
            <ProjectCard key={project.name} project={project} index={i} onClick={() => setSelected(project)} />
          ))}
        </div>
      </div>

      {selected && <ProjectModal project={selected} onClose={() => setSelected(null)} />}
    </section>
  );
}
