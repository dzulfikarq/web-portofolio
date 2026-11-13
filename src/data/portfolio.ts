export type ProjectCategory =
  | "Education"
  | "Developer tooling"
  | "Video workflow"
  | "AI"
  | "Food"
  | "Design";

export type ProjectScreenshot = {
  src: string;
  alt: string;
  caption?: string;
};

export type Project = {
  slug: string;
  name: string;
  category: ProjectCategory;
  description?: string;
  overview?: string;
  technologies?: string[];
  githubUrl?: string;
  demoUrl?: string;
  thumbnail?: string;
  published: boolean;
  caseStudy?: {
    problem?: string;
    solution?: string;
    myRole?: string;
    features?: string[];
    technicalChallenges?: string[];
    screenshots?: ProjectScreenshot[];
    outcome?: string;
  };
};

export const profile = {
  name: "Danny Akhmad Zulfikar",
  initials: "DAZ",
  title: "Fullstack Developer",
  location: "Malang, Indonesia",
  experience: "Around 4 years",
  heroDescription:
    "I build thoughtful web experiences, balancing polished interfaces with reliable systems behind them.",
  about:
    "I’m a Malang-based Fullstack Developer with around four years of professional frontend development experience. My toolkit spans React, Next.js and TypeScript through NestJS and PostgreSQL. I value useful products, thoughtful details, and code that stays maintainable.",
  summary:
    "Fullstack Developer based in Malang, Indonesia, with around four years of professional frontend development experience. Focused on building thoughtful, maintainable web products across frontend and backend technologies.",
  githubUrl: "https://github.com/dzulfikarq",
  availability: null as { label: string } | null,
  email: null as string | null,
  linkedinUrl: null as string | null,
};

export const skills = [
  { group: "Frontend", items: ["React", "Next.js", "TypeScript", "JavaScript", "Tailwind CSS"] },
  { group: "Backend & data", items: ["NestJS", "PostgreSQL"] },
] as const;

export const experience: {
  role: string;
  organization?: string;
  period?: string;
  description?: string;
}[] = [];

export const education: {
  institution: string;
  qualification?: string;
  period?: string;
}[] = [];

export const projects: Project[] = [
  {
    slug: "bimbinganku",
    name: "BimbinganKu",
    category: "Education",
    description: "Academic productivity and AI-powered education platform.",
    overview: "An academic productivity and AI-powered education platform.",
    technologies: [],
    published: true,
    caseStudy: {},
  },
  {
    slug: "project-generator",
    name: "FormaForge / Project Generator",
    category: "Developer tooling",
    description: "Developer tooling for project scaffolding and reusable templates.",
    overview: "A developer tool for project scaffolding and reusable templates.",
    technologies: [],
    githubUrl: "https://github.com/dzulfikarq/project-generator",
    published: true,
    caseStudy: {},
  },
  {
    slug: "klipnara",
    name: "Klipnara",
    category: "Video workflow",
    description: "A workflow for clipping, editing, and publishing video.",
    overview: "A video clipping, editing, and publishing workflow.",
    technologies: [],
    githubUrl: "https://github.com/dzulfikarq/klipnara",
    published: true,
    caseStudy: {},
  },
  {
    slug: "ai-facts-studio",
    name: "AI Facts Studio",
    category: "AI",
    published: false,
    caseStudy: {},
  },
  {
    slug: "foodrec",
    name: "FoodRec",
    category: "Food",
    published: false,
    caseStudy: {},
  },
  {
    slug: "design-templates",
    name: "Design Templates",
    category: "Design",
    published: false,
    caseStudy: {},
  },
];

export const publishedProjects = projects.filter(
  (project) => project.published && project.description,
);

export const siteUrl = process.env.NEXT_PUBLIC_SITE_URL
  ? new URL(process.env.NEXT_PUBLIC_SITE_URL)
  : undefined;
