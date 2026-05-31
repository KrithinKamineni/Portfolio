"use client";

import { useState } from "react";
import Image from "next/image";
import { ExternalLink, Users } from "lucide-react";
import { organizations } from "@/data/organizations";
import type { Organization } from "@/data/organizations";
import FadeIn from "./FadeIn";

function OrgCard({ org, index }: { org: Organization; index: number }) {
  const [hovered, setHovered] = useState(false);

  return (
    <FadeIn delay={index * 0.1}>
      <div
        className="group flex gap-5 py-8 border-b border-border last:border-0 hover:bg-surface/60 rounded-xl px-4 -mx-4 transition-all duration-200 cursor-default"
        onMouseEnter={() => setHovered(true)}
        onMouseLeave={() => setHovered(false)}
      >
        <a
          href={org.website}
          target="_blank"
          rel="noopener noreferrer"
          aria-label={`${org.name} website`}
          className="flex-shrink-0 hover:scale-105 transition-all duration-150"
        >
          <div className="w-10 h-10 rounded-xl overflow-hidden flex items-center justify-center">
            <Image src={org.logoImage} alt={`${org.name} logo`} width={40} height={40} className="w-10 h-10 object-cover" />
          </div>
        </a>

        <div className="flex-1 min-w-0">
          <div className="flex items-center gap-2 mb-0.5">
            <h3 className="font-serif text-lg text-text-primary">{org.name}</h3>
          </div>
          <p className="font-sans text-sm text-text-secondary mb-4">UC Berkeley</p>

          <div className="flex flex-col gap-0">
            {org.roles.map((role, ri) => (
              <div key={ri} className="relative flex gap-4">
                <div className="flex flex-col items-center">
                  <div className="w-1.5 h-1.5 rounded-full mt-1.5 flex-shrink-0" style={{ backgroundColor: org.accentColor }} />
                  {ri < org.roles.length - 1 && <div className="w-px flex-1 mt-1 mb-1 bg-border" />}
                </div>
                <div className="pb-3">
                  <div className="flex items-center gap-2 flex-wrap">
                    <span className="font-sans text-sm text-text-primary">{role.title}</span>
                    {role.current && (
                      <span
                        className="font-mono text-[10px] rounded-full px-2 py-0.5 tracking-widest border"
                        style={{ color: org.accentColor, borderColor: `${org.accentColor}66`, backgroundColor: `${org.accentColor}0d` }}
                      >
                        CURRENT
                      </span>
                    )}
                  </div>
                  <span className="font-mono text-xs text-text-secondary">{role.period}</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </FadeIn>
  );
}

export default function Organizations() {
  return (
    <section id="organizations" className="py-20 md:py-28 bg-background scroll-mt-20">
      <div className="max-w-content mx-auto px-6">
        <FadeIn>
          <div className="mb-12">
            <div className="flex items-center gap-1.5 mb-3">
              <Users size={11} className="text-accent" />
              <p className="font-sans text-xs text-accent tracking-widest uppercase">Campus</p>
            </div>
            <h2 className="font-serif text-4xl md:text-5xl text-text-primary">Organizations</h2>
          </div>
        </FadeIn>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-x-12">
          {organizations.map((org, i) => (
            <OrgCard key={org.name} org={org} index={i} />
          ))}
        </div>
      </div>
    </section>
  );
}
