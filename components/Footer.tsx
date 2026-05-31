"use client";

import { Mail, MessageCircle } from "lucide-react";
import { siLinkedin, siGithub } from "simple-icons";

export default function Footer() {
  return (
    <footer id="contact" className="pt-32 pb-12 md:pt-40 md:pb-16 bg-[#111111] scroll-mt-20 relative z-10 isolate">
      <div className="max-w-content mx-auto px-6 text-center">
        <div className="flex items-center justify-center gap-1.5 mb-6">
          <MessageCircle size={11} className="text-accent" />
          <p className="font-sans text-xs text-accent tracking-widest uppercase">Get in Touch</p>
        </div>
        <h2 className="font-serif text-5xl md:text-6xl lg:text-7xl text-white leading-tight mb-6">
          Let&apos;s build<br />something great.
        </h2>
        <p className="font-sans text-base text-white/50 max-w-sm mx-auto mb-10">
          Open to new opportunities, collaborations, or a good conversation.
        </p>

        <a
          href="mailto:kkam06@berkeley.edu"
          className="btn-shimmer btn-accent inline-flex items-center gap-2 px-6 py-3 bg-accent text-white font-sans text-sm font-medium rounded-lg hover:scale-105 transition-all duration-150 mb-16"
        >
          <Mail size={15} />
          kkam06@berkeley.edu
        </a>

        <div className="flex items-center justify-center gap-6 mb-16">
          <a href="https://www.linkedin.com/in/krithin-kamineni" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn profile" className="text-white/40 hover:text-white transition-colors duration-150">
            <svg viewBox="0 0 24 24" width={18} height={18} fill="currentColor" aria-hidden="true"><path d={siLinkedin.path} /></svg>
          </a>
          <a href="https://github.com/KrithinKamineni" target="_blank" rel="noopener noreferrer" aria-label="GitHub profile" className="text-white/40 hover:text-white transition-colors duration-150">
            <svg viewBox="0 0 24 24" width={18} height={18} fill="currentColor" aria-hidden="true"><path d={siGithub.path} /></svg>
          </a>
          <a href="mailto:kkam06@berkeley.edu" aria-label="Send email" className="text-white/40 hover:text-accent transition-colors duration-150">
            <Mail size={18} />
          </a>
        </div>

        <p className="font-sans text-xs text-white/20">© 2026 Krithin Kamineni</p>
      </div>
    </footer>
  );
}
