"use client";

import { Mail } from "lucide-react";
import { siLinkedin, siGithub } from "simple-icons";

export default function Footer() {
  return (
    <footer id="contact" className="py-20 md:py-28 bg-text-primary scroll-mt-20">
      <div className="max-w-content mx-auto px-6 text-center">
        <p className="font-mono text-sm text-accent tracking-widest uppercase mb-4">
          Get in Touch
        </p>
        <h2 className="font-serif text-4xl md:text-5xl text-white mb-4">
          Let&apos;s Connect
        </h2>
        <p className="font-sans text-base text-white/60 max-w-md mx-auto mb-10">
          Always open to new opportunities, collaborations, or a good conversation.
        </p>

        <a
          href="mailto:kkam06@berkeley.edu"
          className="inline-flex items-center gap-2 px-7 py-3.5 bg-accent text-white font-sans text-sm font-medium rounded hover:bg-accent/90 transition-colors duration-150 mb-12"
        >
          <Mail size={16} />
          kkam06@berkeley.edu
        </a>

        <div className="flex items-center justify-center gap-6 mb-16">
          <a href="https://www.linkedin.com/in/krithin-kamineni" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn profile" className="text-white/50 hover:text-white transition-colors duration-150">
            <svg viewBox="0 0 24 24" width={20} height={20} fill="currentColor" aria-hidden="true"><path d={siLinkedin.path} /></svg>
          </a>
          <a href="https://github.com/KrithinKamineni" target="_blank" rel="noopener noreferrer" aria-label="GitHub profile" className="text-white/50 hover:text-white transition-colors duration-150">
            <svg viewBox="0 0 24 24" width={20} height={20} fill="currentColor" aria-hidden="true"><path d={siGithub.path} /></svg>
          </a>
          <a href="mailto:kkam06@berkeley.edu" aria-label="Send email" className="text-white/50 hover:text-accent transition-colors duration-150">
            <Mail size={20} />
          </a>
        </div>

        <div className="border-t border-white/10 pt-8">
          <p className="font-sans text-sm text-white/30">© 2026 Krithin Kamineni</p>
        </div>
      </div>
    </footer>
  );
}
