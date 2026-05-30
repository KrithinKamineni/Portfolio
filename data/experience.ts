export interface Experience {
  company: string;
  location: string;
  role: string;
  period: string;
  tags: string[];
  logo: string;
  logoColor: string;
  logoBg: string;
  logoImage?: string;
  website?: string;
  bullets: string[];
}

export const experiences: Experience[] = [
  {
    company: "InsightLab AI",
    location: "San Francisco, CA",
    role: "Incoming Software Engineer Intern",
    period: "Summer 2026",
    tags: ["Engineering", "AI"],
    logo: "IL",
    logoColor: "#FFFFFF",
    logoBg: "#111111",
    logoImage: "/insightlab-logo.png",
    website: "https://insightlabai.dev/",
    bullets: [],
  },
  {
    company: "WhiteHelmet",
    location: "Remote",
    role: "Associate Product Management Intern",
    period: "Feb 2026 – Present",
    tags: ["Product", "AI", "Research"],
    logo: "WH",
    logoColor: "#FFFFFF",
    logoBg: "#1a1a1a",
    logoImage: "/whitehelmet-logo.jpg",
    website: "https://www.whitehelmet.sa/",
    bullets: [
      "Leading user research initiative by conducting 15 stakeholder interviews with architects and engineers to validate AI design compliance workflows and identify market gaps for US market expansion.",
      "Analyzed competitive landscape across Solibri and 7+ AI compliance platforms; created competitive matrix and strategic recommendations.",
      "Engineering an async Python agent for regulatory table validation, achieving F1 1.00 on benchmarks and 99% human evaluation acceptance; validated on real 100+ page documents with 22 passing unit tests, supporting AI compliance analysis roadmap.",
    ],
  },
  {
    company: "Athena",
    location: "Berkeley, CA",
    role: "Software Engineer Intern",
    period: "May – Aug 2025",
    tags: ["Engineering", "AI", "Full Stack"],
    logo: "A",
    logoColor: "#FFFFFF",
    logoBg: "#2563EB",
    bullets: [
      "Engineered an AI-powered assignment analyzer using JavaScript, OpenAI API, and image vectorization for automated plagiarism detection, rubric-based grading, and personalized feedback.",
      "Optimized backend performance by refactoring 500+ lines of code, resolving 20+ bugs, and reducing average load times by 40%.",
      "Developed file upload and API orchestration system connecting plagiarism detection APIs and OpenAI's image/file APIs.",
    ],
  },
  {
    company: "PossoBuild",
    location: "Remote",
    role: "Software Development Engineer Intern",
    period: "Jun – Aug 2023",
    tags: ["Engineering", "Backend", "AWS"],
    logo: "PB",
    logoColor: "#FFFFFF",
    logoBg: "#059669",
    logoImage: "/possobuild-logo.jpg",
    website: "https://www.possobuild.ai/",
    bullets: [
      "Built an automated feedback email system using Python, AWS SES, and PostgreSQL delivering AI-generated interview evaluations to 100+ users per session.",
      "Optimized backend performance by resolving 15+ bugs and improving database query efficiency 20% via SQL indexing.",
      "Integrated email delivery with React frontend through RESTful API endpoints in an Agile workflow.",
    ],
  },
];
