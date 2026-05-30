"use client";

import { ExternalLink } from "lucide-react";
import { siGithub } from "simple-icons";
import { projects } from "@/data/projects";
import FadeIn from "./FadeIn";

function ProjectCard({ project, index }: { project: typeof projects[0]; index: number }) {
  return (
    <FadeIn delay={index * 0.08}>
      <div className="group flex flex-col gap-4 py-8 border-b border-border last:border-0 hover:bg-surface/60 rounded-xl px-4 -mx-4 transition-all duration-200">
        <div className="flex items-start justify-between gap-4">
          <div>
            <h3 className="font-serif text-lg text-text-primary mb-0.5">{project.name}</h3>
            <p className="font-mono text-xs text-text-secondary">{project.period}</p>
          </div>
          <div className="flex items-center gap-3 flex-shrink-0 pt-1">
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

        <p className="font-sans text-sm text-text-secondary leading-relaxed">{project.description}</p>

        <ul className="space-y-2">
          {project.bullets.map((bullet, i) => (
            <li key={i} className="font-sans text-sm text-text-secondary leading-relaxed flex items-start gap-2">
              <span className="text-accent flex-shrink-0 leading-relaxed">–</span>
              <span>{bullet}</span>
            </li>
          ))}
        </ul>

        <div className="flex flex-wrap gap-2">
          {project.tags.map((tag) => (
            <span key={tag} className="font-mono text-xs px-2.5 py-1 rounded-full text-text-secondary bg-surface border border-border">
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
    <section id="projects" className="py-20 md:py-28 bg-background scroll-mt-20">
      <div className="max-w-content mx-auto px-6">
        <FadeIn>
          <div className="mb-12">
            <p className="font-mono text-xs text-accent tracking-widest uppercase mb-3">Work</p>
            <h2 className="font-serif text-4xl md:text-5xl text-text-primary">Projects</h2>
          </div>
        </FadeIn>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-x-12">
          {projects.map((project, i) => (
            <ProjectCard key={project.name} project={project} index={i} />
          ))}
        </div>
      </div>
    </section>
  );
}
