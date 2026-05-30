"use client";

import { Mail } from "lucide-react";
import { siLinkedin, siGithub } from "simple-icons";

export default function Footer() {
  return (
    <footer id="contact" className="py-32 md:py-40 bg-background scroll-mt-20 relative z-10 isolate border-t border-border">
      <div className="max-w-content mx-auto px-6 text-center">
        <p className="font-mono text-xs text-accent tracking-widest uppercase mb-6">
          Get in Touch
        </p>
        <h2 className="font-serif text-5xl md:text-6xl lg:text-7xl text-text-primary leading-tight mb-6">
          Let&apos;s build<br />something great.
        </h2>
        <p className="font-sans text-base text-text-secondary max-w-sm mx-auto mb-10">
          Open to new opportunities, collaborations, or a good conversation.
        </p>

        <a
          href="mailto:kkam06@berkeley.edu"
          className="inline-flex items-center gap-2 px-6 py-3 bg-text-primary text-white font-sans text-sm font-medium rounded-full hover:scale-105 transition-all duration-150 mb-16"
        >
          <Mail size={15} />
          kkam06@berkeley.edu
        </a>

        <div className="flex items-center justify-center gap-6 mb-16">
          <a href="https://www.linkedin.com/in/krithin-kamineni" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn profile" className="text-text-secondary hover:text-text-primary transition-colors duration-150">
            <svg viewBox="0 0 24 24" width={18} height={18} fill="currentColor" aria-hidden="true"><path d={siLinkedin.path} /></svg>
          </a>
          <a href="https://github.com/KrithinKamineni" target="_blank" rel="noopener noreferrer" aria-label="GitHub profile" className="text-text-secondary hover:text-text-primary transition-colors duration-150">
            <svg viewBox="0 0 24 24" width={18} height={18} fill="currentColor" aria-hidden="true"><path d={siGithub.path} /></svg>
          </a>
          <a href="mailto:kkam06@berkeley.edu" aria-label="Send email" className="text-text-secondary hover:text-accent transition-colors duration-150">
            <Mail size={18} />
          </a>
        </div>

        <p className="font-sans text-xs text-text-secondary/50">© 2026 Krithin Kamineni</p>
      </div>
    </footer>
  );
}
