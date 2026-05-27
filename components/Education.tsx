"use client";

import FadeIn from "./FadeIn";

const coursework = [
  "Structure and Interpretation of Computer Programs",
  "Discrete Math & Probability Theory",
  "Data Structures & Algorithms",
  "Signals, Dynamical Systems & Information Processing",
  "Introduction to Circuits & Devices",
  "Great Ideas in Computer Architecture",
  "Optimization Models in Engineering",
];

export default function Education() {
  return (
    <section id="about" className="py-20 md:py-28 bg-[#F0EDE9] scroll-mt-20">
      <div className="max-w-content mx-auto px-6">
        <FadeIn>
          <div className="mb-12">
            <p className="font-mono text-sm text-accent tracking-widest uppercase mb-3">Background</p>
            <h2 className="font-serif text-4xl md:text-5xl text-text-primary">Education</h2>
          </div>
        </FadeIn>

        <FadeIn delay={0.1}>
          <div className="bg-surface border border-border rounded-lg p-6 md:p-10 max-w-3xl">
            <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-2 mb-6">
              <div>
                <h3 className="font-serif text-2xl text-text-primary mb-1">
                  University of California, Berkeley
                </h3>
                <p className="font-sans text-base text-text-secondary">
                  B.S. in Electrical Engineering and Computer Sciences
                </p>
              </div>
              <span className="font-mono text-xs text-text-secondary whitespace-nowrap mt-1">
                Expected May 2028
              </span>
            </div>

            <div className="mb-6">
              <p className="font-mono text-xs text-accent tracking-widest uppercase mb-3">
                Relevant Coursework
              </p>
              <div className="flex flex-wrap gap-2">
                {coursework.map((course) => (
                  <span key={course} className="font-sans text-xs px-3 py-1.5 rounded border border-border text-text-secondary bg-background">
                    {course}
                  </span>
                ))}
              </div>
            </div>

            <div>
              <p className="font-mono text-xs text-accent tracking-widest uppercase mb-3">
                Organizations
              </p>
              <div className="flex flex-wrap gap-2">
                {[
                  { name: "Product Space", url: "https://product.studentorg.berkeley.edu/" },
                  { name: "Golden Gate Garba", url: "https://goldengategarba.org/" },
                ].map((org) => (
                  <a
                    key={org.name}
                    href={org.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="font-sans text-xs px-3 py-1.5 rounded border border-accent/30 text-accent bg-accent/5 hover:bg-accent/10 hover:border-accent/60 transition-colors duration-150"
                  >
                    {org.name}
                  </a>
                ))}
              </div>
            </div>
          </div>
        </FadeIn>
      </div>
    </section>
  );
}
