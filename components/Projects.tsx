"use client";

import { ExternalLink } from "lucide-react";
import { siGithub } from "simple-icons";
import { projects } from "@/data/projects";
import FadeIn from "./FadeIn";

const techTagStyle: Record<string, string> = {
  "Next.js": "text-text-primary border-border",
  TypeScript: "text-blue-700 border-blue-200",
  NLP: "text-purple-700 border-purple-200",
  Product: "text-teal-700 border-teal-200",
  Hardware: "text-orange-700 border-orange-200",
  "Circuit Design": "text-red-700 border-red-200",
  LTspice: "text-green-700 border-green-200",
};

function ProjectCard({ project, index }: { project: typeof projects[0]; index: number }) {
  return (
    <FadeIn delay={index * 0.1}>
      <div className="group bg-surface border border-border rounded-lg p-6 md:p-8 hover:border-accent hover:-translate-y-0.5 transition-all duration-150 flex flex-col h-full">
        <div className="flex items-start justify-between gap-4 mb-3">
          <div>
            <h3 className="font-serif text-xl text-text-primary mb-0.5">{project.name}</h3>
            <p className="font-mono text-xs text-text-secondary">{project.period}</p>
          </div>
          <div className="flex items-center gap-3 flex-shrink-0">
            {project.github && (
              <a href={project.github} target="_blank" rel="noopener noreferrer" aria-label={`${project.name} GitHub`} className="text-text-secondary hover:text-text-primary transition-colors duration-150">
                <svg viewBox="0 0 24 24" width={16} height={16} fill="currentColor" aria-hidden="true"><path d={siGithub.path} /></svg>
              </a>
            )}
            {project.demo && (
              <a href={project.demo} target="_blank" rel="noopener noreferrer" aria-label={`${project.name} demo`} className="text-text-secondary hover:text-accent transition-colors duration-150">
                <ExternalLink size={16} />
              </a>
            )}
          </div>
        </div>

        <p className="font-sans text-sm text-text-secondary mb-4 leading-relaxed">{project.description}</p>

        <ul className="space-y-2 mb-6 flex-1">
          {project.bullets.map((bullet, i) => (
            <li key={i} className="font-sans text-sm text-text-secondary leading-relaxed flex gap-2">
              <span className="text-accent mt-1 flex-shrink-0">–</span>
              <span>{bullet}</span>
            </li>
          ))}
        </ul>

        <div className="flex flex-wrap gap-2 mt-auto">
          {project.tags.map((tag) => (
            <span key={tag} className={`font-mono text-xs px-2.5 py-1 rounded border bg-background ${techTagStyle[tag] ?? "text-text-secondary border-border"}`}>
              {tag}
            </span>
          ))}
        </div>
      </div>
    </FadeIn>
  );
}

export default function Projects() {
  return (
    <section id="projects" className="py-20 md:py-28 bg-[#F0EDE9] scroll-mt-20">
      <div className="max-w-content mx-auto px-6">
        <FadeIn>
          <div className="mb-12">
            <p className="font-mono text-sm text-accent tracking-widest uppercase mb-3">Work</p>
            <h2 className="font-serif text-4xl md:text-5xl text-text-primary">Projects</h2>
          </div>
        </FadeIn>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 items-start">
          {projects.map((project, i) => (
            <ProjectCard key={project.name} project={project} index={i} />
          ))}
        </div>
      </div>
    </section>
  );
}
