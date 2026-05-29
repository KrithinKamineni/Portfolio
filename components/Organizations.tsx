"use client";

import { useState } from "react";
import Image from "next/image";
import { ExternalLink } from "lucide-react";
import { organizations } from "@/data/organizations";
import type { Organization } from "@/data/organizations";
import FadeIn from "./FadeIn";

function OrgCard({ org, index }: { org: Organization; index: number }) {
  const [hovered, setHovered] = useState(false);

  return (
    <FadeIn delay={index * 0.1}>
      <div
        className="relative bg-surface rounded-lg p-6 md:p-8 overflow-hidden transition-all duration-200"
        style={{ border: `1px solid ${hovered ? org.accentColor : "#E4E0DA"}` }}
        onMouseEnter={() => setHovered(true)}
        onMouseLeave={() => setHovered(false)}
      >
        <span
          className="absolute left-0 top-0 bottom-0 w-0.5 transition-transform duration-200 origin-top"
          style={{
            backgroundColor: org.accentColor,
            transform: hovered ? "scaleY(1)" : "scaleY(0)",
          }}
        />

        <div className="flex items-start gap-4 mb-5">
          <a
            href={org.website}
            target="_blank"
            rel="noopener noreferrer"
            aria-label={`${org.name} website`}
            className="flex-shrink-0 hover:scale-110 hover:opacity-80 transition-all duration-150"
          >
            <div className="w-12 h-12 rounded-md overflow-hidden border border-border bg-background flex items-center justify-center">
              <Image
                src={org.logoImage}
                alt={`${org.name} logo`}
                width={48}
                height={48}
                className="w-12 h-12 object-cover"
              />
            </div>
          </a>

          <div className="flex-1 min-w-0">
            <div className="flex items-center gap-2">
              <h3 className="font-serif text-lg text-text-primary">{org.name}</h3>
              <a
                href={org.website}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={`${org.name} website`}
                className="text-text-secondary hover:text-text-primary transition-colors duration-150"
              >
                <ExternalLink size={14} />
              </a>
            </div>
            <p className="font-sans text-sm text-text-secondary mt-0.5">UC Berkeley</p>
          </div>
        </div>

        <div className="ml-16 flex flex-col gap-0">
          {org.roles.map((role, ri) => (
            <div key={ri} className="relative flex gap-4">
              <div className="flex flex-col items-center">
                <div
                  className="w-2 h-2 rounded-full mt-1 flex-shrink-0"
                  style={{ backgroundColor: org.accentColor }}
                />
                {ri < org.roles.length - 1 && (
                  <div className="w-px flex-1 bg-border mt-1 mb-1" />
                )}
              </div>
              <div className="pb-4">
                <div className="flex items-center gap-2 flex-wrap">
                  <span className="font-sans text-sm font-medium text-text-primary">
                    {role.title}
                  </span>
                  {role.current && (
                    <span
                      className="font-mono text-[10px] rounded-full px-2 py-0.5 tracking-widest border"
                      style={{
                        color: org.accentColor,
                        borderColor: `${org.accentColor}66`,
                        backgroundColor: `${org.accentColor}0d`,
                      }}
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
    </FadeIn>
  );
}

export default function Organizations() {
  return (
    <section id="organizations" className="py-20 md:py-28 bg-background scroll-mt-20">
      <div className="max-w-content mx-auto px-6">
        <FadeIn>
          <div className="mb-12">
            <p className="font-mono text-sm text-accent tracking-widest uppercase mb-3">Campus</p>
            <h2 className="font-serif text-4xl md:text-5xl text-text-primary">Organizations</h2>
          </div>
        </FadeIn>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {organizations.map((org, i) => (
            <OrgCard key={org.name} org={org} index={i} />
          ))}
        </div>
      </div>
    </section>
  );
}
