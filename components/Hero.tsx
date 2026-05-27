"use client";

import Image from "next/image";
import { Mail } from "lucide-react";
import { siLinkedin, siGithub } from "simple-icons";
import FadeIn from "./FadeIn";

function SimpleSvgIcon({ path, title, size = 20 }: { path: string; title: string; size?: number }) {
  return (
    <svg role="img" viewBox="0 0 24 24" width={size} height={size} fill="currentColor" aria-label={title}>
      <title>{title}</title>
      <path d={path} />
    </svg>
  );
}

export default function Hero() {
  return (
    <section className="min-h-screen flex items-center pt-16 bg-background">
      <div className="max-w-content mx-auto px-6 py-24 md:py-32">
        <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-12">
          {/* Text content */}
          <div className="flex-1">
            <FadeIn delay={0}>
              <p className="font-mono text-sm text-accent tracking-widest uppercase mb-6">
                EECS @ UC Berkeley
              </p>
            </FadeIn>

            <FadeIn delay={0.1}>
              <h1 className="font-serif text-5xl md:text-6xl lg:text-7xl text-text-primary leading-tight mb-6">
                Krithin Kamineni
              </h1>
            </FadeIn>

            <FadeIn delay={0.2}>
              <p className="font-sans text-xl md:text-2xl text-text-secondary max-w-xl mb-4 leading-relaxed">
                I build products and the code behind them.
              </p>
            </FadeIn>

            <FadeIn delay={0.25}>
              <p className="font-mono text-sm text-text-secondary tracking-wide mb-8">
                Software Engineer · Product Manager · Builder
              </p>
            </FadeIn>

            <FadeIn delay={0.3}>
              <p className="font-sans text-base text-text-secondary max-w-xl mb-10 leading-relaxed">
                I&apos;m a second-year EECS student at UC Berkeley with experience shipping
                AI-powered tools, leading user research, and designing circuits. I care
                about building things that actually work for real people.
              </p>
            </FadeIn>

            <FadeIn delay={0.4}>
              <div className="flex flex-wrap gap-4 mb-12">
                <a
                  href="#projects"
                  onClick={(e) => { e.preventDefault(); document.querySelector("#projects")?.scrollIntoView({ behavior: "smooth" }); }}
                  className="inline-flex items-center gap-2 px-6 py-3 bg-text-primary text-white font-sans text-sm font-medium rounded border border-text-primary hover:bg-transparent hover:text-text-primary transition-all duration-150"
                >
                  View Projects
                </a>
                <a
                  href="#contact"
                  onClick={(e) => { e.preventDefault(); document.querySelector("#contact")?.scrollIntoView({ behavior: "smooth" }); }}
                  className="inline-flex items-center gap-2 px-6 py-3 bg-transparent text-text-primary font-sans text-sm font-medium rounded border border-border hover:border-text-primary transition-all duration-150"
                >
                  Get in Touch
                </a>
              </div>
            </FadeIn>

            <FadeIn delay={0.5}>
              <div className="flex items-center gap-5">
                <a href="https://www.linkedin.com/in/krithin-kamineni" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn profile" className="text-text-secondary hover:text-[#0A66C2] transition-colors duration-150">
                  <SimpleSvgIcon path={siLinkedin.path} title="LinkedIn" size={20} />
                </a>
                <a href="https://github.com/KrithinKamineni" target="_blank" rel="noopener noreferrer" aria-label="GitHub profile" className="text-text-secondary hover:text-text-primary transition-colors duration-150">
                  <SimpleSvgIcon path={siGithub.path} title="GitHub" size={20} />
                </a>
                <a href="mailto:kkam06@berkeley.edu" aria-label="Send email" className="text-text-secondary hover:text-accent transition-colors duration-150">
                  <Mail size={20} />
                </a>
              </div>
            </FadeIn>
          </div>

          {/* Headshot */}
          <FadeIn delay={0.2}>
            <div className="flex-shrink-0 flex justify-center md:justify-end">
              <div className="relative w-56 h-56 md:w-72 md:h-72 rounded-2xl overflow-hidden border border-border">
                <Image
                  src="/headshot.jpg"
                  alt="Krithin Kamineni"
                  fill
                  className="object-cover object-top"
                  priority
                />
              </div>
            </div>
          </FadeIn>
        </div>
      </div>
    </section>
  );
}
