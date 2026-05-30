"use client";

import FadeIn from "./FadeIn";

const skillCategories = [
  {
    category: "Languages",
    skills: ["Python", "C", "JavaScript", "TypeScript", "Java", "HTML/CSS", "SQL", "RISC-V"],
  },
  {
    category: "Frameworks & Tools",
    skills: ["React", "Next.js", "Node.js", "PostgreSQL", "Git", "AWS", "Retool"],
  },
  {
    category: "Libraries",
    skills: ["NumPy", "pandas", "StdDraw"],
  },
  {
    category: "Hardware",
    skills: ["Circuit Design", "LTspice", "KCL Analysis"],
  },
  {
    category: "Product & Process",
    skills: ["User Research", "Competitive Analysis", "PRD Writing", "Figma", "Agile", "Jira/Confluence"],
  },
  {
    category: "Spoken Languages",
    skills: ["English (Native)", "Telugu (Conversational)", "Spanish (Conversational)"],
  },
];

export default function Skills() {
  return (
    <section id="skills" className="py-20 md:py-28 bg-background scroll-mt-20">
      <div className="max-w-content mx-auto px-6">
        <FadeIn>
          <div className="mb-12">
            <p className="font-mono text-sm text-accent tracking-widest uppercase mb-3">Capabilities</p>
            <h2 className="font-serif text-4xl md:text-5xl text-text-primary">Skills</h2>
          </div>
        </FadeIn>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {skillCategories.map((group, i) => (
            <FadeIn key={group.category} delay={i * 0.07}>
              <div className="bg-surface border border-border rounded-lg p-6 h-full hover:border-accent transition-all duration-200 group">

                <p className="font-mono text-xs text-accent tracking-widest uppercase mb-4">
                  {group.category}
                </p>
                <div className="flex flex-wrap gap-2">
                  {group.skills.map((skill) => (
                    <span key={skill} className="font-mono text-xs px-2.5 py-1.5 rounded border border-border text-text-secondary bg-background">
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
            </FadeIn>
          ))}
        </div>
      </div>
    </section>
  );
}
