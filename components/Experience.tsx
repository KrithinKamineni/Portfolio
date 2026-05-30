"use client";

import Image from "next/image";
import { experiences } from "@/data/experience";
import FadeIn from "./FadeIn";

const tagColors: Record<string, string> = {
  Product: "text-purple-700 bg-purple-50",
  AI: "text-blue-700 bg-blue-50",
  Research: "text-teal-700 bg-teal-50",
  Engineering: "text-orange-700 bg-orange-50",
  "Full Stack": "text-indigo-700 bg-indigo-50",
  Backend: "text-green-700 bg-green-50",
  AWS: "text-yellow-700 bg-yellow-50",
};

function CompanyLogo({ exp }: { exp: typeof experiences[0] }) {
  const logoEl = exp.logoImage ? (
    <Image
      src={exp.logoImage}
      alt={`${exp.company} logo`}
      width={40}
      height={40}
      className="w-10 h-10 rounded-xl object-cover"
    />
  ) : (
    <div
      className="w-10 h-10 rounded-xl flex items-center justify-center font-mono text-xs font-medium"
      style={{ backgroundColor: exp.logoBg, color: exp.logoColor }}
    >
      {exp.logo}
    </div>
  );

  if (exp.website) {
    return (
      <a href={exp.website} target="_blank" rel="noopener noreferrer" aria-label={`${exp.company} website`} className="flex-shrink-0 hover:scale-110 transition-all duration-150">
        {logoEl}
      </a>
    );
  }
  return <div className="flex-shrink-0">{logoEl}</div>;
}

function ExperienceCard({ exp, index }: { exp: typeof experiences[0]; index: number }) {
  return (
    <FadeIn delay={index * 0.08}>
      <div className="group flex gap-5 py-8 border-b border-border last:border-0 hover:bg-surface/60 rounded-xl px-4 -mx-4 transition-all duration-200">
        <CompanyLogo exp={exp} />

        <div className="flex-1 min-w-0">
          <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-1 mb-1">
            <h3 className="font-serif text-lg text-text-primary">{exp.company}</h3>
            <span className="font-mono text-xs text-text-secondary whitespace-nowrap">{exp.period}</span>
          </div>
          <p className="font-sans text-sm text-text-secondary mb-4">
            {exp.role} · {exp.location}
          </p>

          {exp.bullets.length > 0 && (
            <ul className="space-y-2 mb-4">
              {exp.bullets.map((bullet, i) => (
                <li key={i} className="font-sans text-sm text-text-secondary leading-relaxed flex items-start gap-2">
                  <span className="text-accent flex-shrink-0 leading-relaxed">–</span>
                  <span>{bullet}</span>
                </li>
              ))}
            </ul>
          )}

          <div className="flex flex-wrap gap-2">
            {exp.tags.map((tag) => (
              <span
                key={tag}
                className={`font-mono text-xs px-2.5 py-1 rounded-full ${
                  tagColors[tag] ?? "text-text-secondary bg-background"
                }`}
              >
                {tag}
              </span>
            ))}
          </div>
        </div>
      </div>
    </FadeIn>
  );
}

export default function Experience() {
  return (
    <section id="experience" className="py-20 md:py-28 bg-background scroll-mt-20">
      <div className="max-w-content mx-auto px-6">
        <FadeIn>
          <div className="mb-12">
            <p className="font-mono text-xs text-accent tracking-widest uppercase mb-3">Work</p>
            <h2 className="font-serif text-4xl md:text-5xl text-text-primary">Experience</h2>
          </div>
        </FadeIn>

        <div className="divide-y divide-border">
          {experiences.map((exp, i) => (
            <ExperienceCard key={exp.company} exp={exp} index={i} />
          ))}
        </div>
      </div>
    </section>
  );
}
