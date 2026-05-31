"use client";

import { Code2, Layers, BookOpen, Cpu, BarChart2, Globe, Wrench } from "lucide-react";
import FadeIn from "./FadeIn";

const skillCategories = [
  { category: "Languages", icon: Code2, skills: ["Python", "C", "JavaScript", "TypeScript", "Java", "HTML/CSS", "SQL", "RISC-V"] },
  { category: "Frameworks & Tools", icon: Layers, skills: ["React", "Next.js", "Node.js", "PostgreSQL", "Git", "AWS", "Retool"] },
  { category: "Libraries", icon: BookOpen, skills: ["NumPy", "pandas", "StdDraw"] },
  { category: "Hardware", icon: Cpu, skills: ["Circuit Design", "LTspice", "KCL Analysis"] },
  { category: "Product & Process", icon: BarChart2, skills: ["User Research", "Competitive Analysis", "PRD Writing", "Figma", "Agile", "Jira/Confluence"] },
  { category: "Spoken Languages", icon: Globe, skills: ["English (Native)", "Telugu (Conversational)", "Spanish (Conversational)"] },
];

export default function Skills() {
  return (
    <section id="skills" className="py-20 md:py-28 bg-background scroll-mt-20">
      <div className="max-w-content mx-auto px-6">
        <FadeIn>
          <div className="mb-12">
            <div className="flex items-center gap-1.5 mb-3">
              <Wrench size={11} className="text-accent" />
              <p className="font-sans text-xs text-accent tracking-widest uppercase">Toolkit</p>
            </div>
            <h2 className="font-serif text-4xl md:text-5xl text-text-primary">Skills</h2>
          </div>
        </FadeIn>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-x-12 gap-y-10">
          {skillCategories.map((group, i) => {
            const Icon = group.icon;
            return (
              <FadeIn key={group.category} delay={i * 0.07}>
                <div className="group bg-white/60 backdrop-blur-md border border-border/60 rounded-xl p-5 hover:border-border transition-all duration-200 shadow-sm">
                  <div className="flex items-center gap-1.5 mb-4">
                    <Icon size={11} className="text-accent" />
                    <p className="font-sans text-xs text-accent tracking-widest uppercase">
                      {group.category}
                    </p>
                  </div>
                  <div className="flex flex-wrap items-center gap-x-2 gap-y-1">
                    {group.skills.map((skill, si) => (
                      <span key={skill} className="flex items-center gap-2 font-sans text-sm text-text-secondary">
                        {skill}
                        {si < group.skills.length - 1 && (
                          <span style={{ color: "#C4BDB6" }}>•</span>
                        )}
                      </span>
                    ))}
                  </div>
                </div>
              </FadeIn>
            );
          })}
        </div>
      </div>
    </section>
  );
}
