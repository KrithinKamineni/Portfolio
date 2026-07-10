export interface Project {
  name: string;
  period: string;
  summary: string;
  bullets: string[];
  tags: string[];
  github: string | null;
  demo: string | null;
  demoLabel?: string;
  video?: string;
  logo?: string;
}

export const projects: Project[] = [
  {
    name: "Lighthouse",
    period: "Jun 2026",
    summary:
      "A personalization layer on top of official emergency alerts that reconciles conflicting channels into one clear, household-tailored instruction delivered by text.",
    bullets: [
      "Built at the UC Berkeley AI Hackathon 2026 to address a fatal gap exposed by the 2023 Lahaina fire: overlapping, contradictory alerts (sirens, wireless alerts, county pages, radio) that all assume you have a car and can just drive away.",
      "Reconciles every conflicting alert channel into a single authoritative picture, then personalizes guidance to each household — vehicle access, family size, mobility needs — and delivers it as a plain-language text with no app or login, failing safe to official guidance.",
      "Built with BrowserBase for live scraping of official emergency sources, Poke for text delivery and agent orchestration, and Claude for formatting and communication-validity checking; backend in TypeScript/Node.js with weather.gov, Google Places, and OpenStreetMap data.",
    ],
    tags: ["TypeScript", "Claude AI", "BrowserBase", "Node.js"],
    github: null,
    demo: "https://devpost.com/software/lighthouse-o06q58",
    demoLabel: "View on Devpost",
    video: "https://www.youtube.com/watch?v=7y_beNlmHXU",
  },
  {
    name: "Glean",
    period: "In Progress",
    summary:
      "Pantry-first meal planning app that recommends recipes from what you already have, using a multi-agent AI pipeline aligned to your dietary preferences and macro targets.",
    bullets: [
      "Full-stack app with a Next.js + TypeScript frontend, a FastAPI (Python) backend, and PostgreSQL for data and auth; supports voice grocery entry via the Web Speech API and Gemini parsing against the USDA FoodData Central database.",
      "Multi-agent recommendation pipeline: a Recipe Agent proposes recipes from your pantry and preferences while a Nutrition Agent estimates per-serving macros and approves or rejects them against your targets within a ±15% tolerance, coordinated in a propose → evaluate → retry loop of up to 3 iterations.",
      "Designed to cut food waste and decision fatigue: recipes prioritize pantry items, flag what you still need to buy, and are validated for nutrition fit before being shown.",
    ],
    tags: ["Next.js", "FastAPI", "PostgreSQL", "AI Agents"],
    github: null,
    demo: "https://glean-bay.vercel.app",
    demoLabel: "Live Site",
  },
  {
    name: "Wandr",
    period: "Feb – May 2026",
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
    summary: "Full-stack financial planning app with 6 interconnected tools for wealth modeling, job comparison, and cash flow visualization.",
    bullets: [
      "Built a full-stack financial planning app with 6 interconnected tools using React, TypeScript, Supabase, and Vite, enabling users to model wealth growth, compare jobs, and visualize cash flow with compound interest projections across 1-50 year horizons.",
      "Implemented Supabase authentication with email/password signup and secure backend integration, enabling persistent user profiles and real-time data synchronization across all financial tools.",
      "Architected a compound interest projection engine with dynamic time horizons, milestone tracking, and interactive financial visualizations using Recharts, allowing users to make data-driven investment decisions based on personalized scenarios.",
    ],
    tags: ["React", "TypeScript", "PostgreSQL", "Finance"],
    github: null,
    demo: "https://swell-six-alpha.vercel.app",
    demoLabel: "Live Site",
    logo: "/swell-logo.png",
  },
];
