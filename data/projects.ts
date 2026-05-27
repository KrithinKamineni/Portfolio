export interface Project {
  name: string;
  period: string;
  description: string;
  bullets: string[];
  tags: string[];
  github: string | null;
  demo: string | null;
}

export const projects: Project[] = [
  {
    name: "Wandr",
    period: "Feb – May 2026",
    description:
      "Social travel discovery app with personalized feed, interactive map, itinerary generator, and NLP search.",
    bullets: [
      "Built with Next.js + TypeScript; fully client-side through a client-side persistence architecture with no backend.",
      "642-line NLP search engine across 102 spots in 29 cities — bigram/trigram detection, fuzzy matching, negation handling — returning ranked results in <150ms entirely client-side.",
      "Product decisions shaped via user interviews, competitive survey, and SWOT analysis.",
    ],
    tags: ["Next.js", "TypeScript", "NLP", "Product"],
    github: "https://github.com/KrithinKamineni",
    demo: null,
  },
  {
    name: "Treble Boost Circuit",
    period: "May 2025",
    description:
      "Custom analog circuit designed to boost frequencies between 300Hz–15KHz for guitar, built and validated from scratch.",
    bullets: [
      "Designed high-pass filter and non-inverting amplifier; calculated component values using KCL.",
      "Validated with LTspice Bode plot simulation achieving 3% simulation error, then built and verified the physical circuit with 6% error.",
    ],
    tags: ["Hardware", "Circuit Design", "LTspice"],
    github: null,
    demo: null,
  },
];
