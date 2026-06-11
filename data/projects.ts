export interface Project {
  name: string;
  period: string;
  description: string;
  summary: string;
  bullets: string[];
  tags: string[];
  github: string | null;
  demo: string | null;
  logo?: string;
}

export const projects: Project[] = [
  {
    name: "Wandr",
    period: "Feb – May 2026",
    description:
      "Social travel discovery app with personalized feed, interactive map, itinerary generator, and NLP search.",
    summary: "Social travel discovery app with personalized feed, interactive map, itinerary generator, and NLP search.",
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
    summary: "Custom analog circuit designed to boost frequencies between 300Hz–15KHz for guitar, built and validated from scratch.",
    bullets: [
      "Designed high-pass filter and non-inverting amplifier; calculated component values using KCL.",
      "Validated with LTspice Bode plot simulation achieving 3% simulation error, then built and verified the physical circuit with 6% error.",
    ],
    tags: ["Hardware", "Circuit Design", "LTspice"],
    github: null,
    demo: null,
  },
  {
    name: "Swell",
    period: "In Progress",
    description: "Full-stack financial planning app with 6 interconnected tools for wealth modeling, job comparison, and cash flow visualization.",
    summary: "Full-stack financial planning app with 6 interconnected tools for wealth modeling, job comparison, and cash flow visualization.",
    bullets: [
      "Built a full-stack financial planning app with 6 interconnected tools using React, TypeScript, Supabase, and Vite, enabling users to model wealth growth, compare jobs, and visualize cash flow with compound interest projections across 1-50 year horizons.",
      "Implemented Supabase authentication with email/password signup and secure backend integration, enabling persistent user profiles and real-time data synchronization across all financial tools.",
      "Architected a compound interest projection engine with dynamic time horizons, milestone tracking, and interactive financial visualizations using Recharts, allowing users to make data-driven investment decisions based on personalized scenarios.",
    ],
    tags: ["React", "TypeScript", "Supabase", "Finance"],
    github: null,
    demo: "https://swell-six-alpha.vercel.app",
    logo: "/swell-logo.png",
  },
];
