"use client";

import Image from "next/image";
import Link from "next/link";
import { Mail, GraduationCap } from "lucide-react";
import { siLinkedin, siGithub } from "simple-icons";
import FadeIn from "./FadeIn";
import Typewriter from "./Typewriter";

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
    <section className="min-h-screen flex items-center pt-24 bg-background">
      <div className="max-w-content mx-auto px-6 py-20 md:py-28">
        <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-16">

          {/* Headshot — top on mobile, hidden here on desktop */}
          <FadeIn delay={0.1}>
            <div className="flex justify-start md:hidden">
              <div className="headshot-float">
                <div className="relative w-40 h-40">
                  <div className="glow-ring-wrap" style={{ borderRadius: "9999px" }}>
                    <div className="glow-ring-spinner" />
                    <div className="glow-ring-inner" style={{ borderRadius: "9999px" }} />
                  </div>
                  <div className="absolute inset-[3px] rounded-full overflow-hidden z-10">
                    <Image src="/headshot.jpg" alt="Krithin Kamineni" fill className="object-cover object-top" priority />
                  </div>
                </div>
              </div>
            </div>
          </FadeIn>

          {/* Text */}
          <div className="flex-1 max-w-2xl">
            <FadeIn delay={0}>
              <div className="flex items-center gap-1.5 mb-5">
                <GraduationCap size={11} className="text-accent" />
                <p className="font-sans text-xs text-accent tracking-widest uppercase">EECS @ UC Berkeley</p>
              </div>
            </FadeIn>

            <FadeIn delay={0.1}>
              <h1 className="font-serif font-normal text-6xl md:text-7xl lg:text-8xl text-text-primary leading-[1.05] tracking-tight mb-6">
                Krithin<br />Kamineni
              </h1>
            </FadeIn>

            <FadeIn delay={0.2}>
              <div className="font-sans text-lg md:text-xl text-text-primary max-w-lg mb-8 leading-relaxed">
                <Typewriter text="I build products and the code behind them." delay={0.6} speed={30} />
              </div>
            </FadeIn>

            <FadeIn delay={0.25}>
              <p className="font-mono text-sm tracking-wide mb-8">
                <span className="text-blue-300">Software Engineer</span>
                <span className="text-text-secondary"> · </span>
                <span className="text-purple-300">Product Manager</span>
                <span className="text-text-secondary"> · </span>
                <span className="text-accent">Builder</span>
              </p>
            </FadeIn>

            <FadeIn delay={0.3}>
              <p className="font-sans text-base text-text-secondary max-w-lg mb-10 leading-relaxed">
                Second-year EECS student at UC Berkeley shipping AI-powered tools,
                leading user research, and designing circuits. I love building things that
                work for real people.
              </p>
            </FadeIn>

            <FadeIn delay={0.4}>
              <div className="flex flex-wrap gap-3 mb-12">
                <a
                  href="#projects"
                  onClick={(e) => { e.preventDefault(); document.querySelector("#projects")?.scrollIntoView({ behavior: "smooth" }); }}
                  className="btn-shimmer-light inline-flex items-center gap-2 px-5 py-2.5 text-black font-sans text-sm font-medium rounded-lg hover:scale-105 transition-all duration-150"
                >
                  View Projects
                </a>
                <a
                  href="#contact"
                  onClick={(e) => { e.preventDefault(); document.querySelector("#contact")?.scrollIntoView({ behavior: "smooth" }); }}
                  className="inline-flex items-center gap-2 px-5 py-2.5 bg-white/5 backdrop-blur-md text-text-primary font-sans text-sm font-medium rounded-lg border border-white/10 hover:border-white/25 hover:scale-105 transition-all duration-150"
                >
                  Get in Touch
                </a>
                <Link
                  href="/coursework"
                  className="inline-flex items-center gap-2 px-5 py-2.5 bg-white/5 backdrop-blur-md text-text-primary font-sans text-sm font-medium rounded-lg border border-white/10 hover:border-white/25 hover:scale-105 transition-all duration-150"
                >
                  Coursework
                </Link>
              </div>
            </FadeIn>

            <FadeIn delay={0.5}>
              <div className="flex items-center gap-5">
                <a href="https://www.linkedin.com/in/krithin-kamineni" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn profile" className="text-text-primary hover:text-[#0A66C2] transition-colors duration-150">
                  <SimpleSvgIcon path={siLinkedin.path} title="LinkedIn" size={18} />
                </a>
                <a href="https://github.com/KrithinKamineni" target="_blank" rel="noopener noreferrer" aria-label="GitHub profile" className="text-text-primary hover:text-text-secondary transition-colors duration-150">
                  <SimpleSvgIcon path={siGithub.path} title="GitHub" size={18} />
                </a>
                <a href="mailto:kkam06@berkeley.edu" aria-label="Send email" className="text-text-primary hover:text-accent transition-colors duration-150">
                  <Mail size={18} />
                </a>
              </div>
            </FadeIn>
          </div>

          {/* Headshot — desktop only */}
          <FadeIn delay={0.2}>
            <div className="flex-shrink-0 hidden md:flex justify-end">
              <div className="headshot-float">
                <div className="relative w-52 h-52 md:w-64 md:h-64">
                  <div className="glow-ring-wrap" style={{ borderRadius: "9999px" }}>
                    <div className="glow-ring-spinner" />
                    <div className="glow-ring-inner" style={{ borderRadius: "9999px" }} />
                  </div>
                  <div className="absolute inset-[3px] rounded-full overflow-hidden z-10">
                    <Image
                      src="/headshot.jpg"
                      alt="Krithin Kamineni"
                      fill
                      className="object-cover object-top"
                      priority
                    />
                  </div>
                </div>
              </div>
            </div>
          </FadeIn>

        </div>
      </div>
    </section>
  );
}
