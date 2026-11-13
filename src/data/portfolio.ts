export type ProjectCategory =
  | "Education"
  | "Developer tooling"
  | "Video workflow"
  | "Business administration"
  | "Web experience"
  | "Business dashboard"
  | "Merchant dashboard";

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
  thumbnailAlt?: string;
  imageCaption?: string;
  featured?: boolean;
  published: boolean;
  caseStudy?: {
    problem?: string;
    solution?: string;
    myRole?: string;
    features?: string[];
    technicalChallenges?: string[];
    visibleModules?: string[];
    screenshots?: ProjectScreenshot[];
    outcome?: string;
  };
};

export const profile = {
  name: "Danny Akhmad Zulfikar",
  initials: "DAZ",
  portrait: "/images/danny-potrait.png",
  title: "Frontend Engineer & Fullstack Developer",
  location: "Malang, Indonesia",
  experience: "5+ years",
  heroDescription:
    "I build scalable, responsive web applications with Vue.js, React.js, and Next.js, integrating RESTful and GraphQL APIs.",
  about:
    "I’m a Frontend Engineer & Fullstack Developer based in Malang, Indonesia, with 5+ years of experience building scalable and responsive web applications. I work with Vue.js, React.js, and Next.js, integrate RESTful and GraphQL APIs, and build reusable components for maintainable digital products.",
  summary:
    "Frontend Engineer with 5+ years of experience building scalable and responsive web applications. Experienced with Vue.js, React.js, and Next.js, as well as RESTful and GraphQL API integration. Builds reusable components and collaborates with cross-functional teams to deliver maintainable digital products.",
  githubUrl: "https://github.com/dzulfikarq",
  availability: null as { label: string } | null,
  email: "danny.zulfikar99@gmail.com",
  linkedinUrl: "https://www.linkedin.com/in/danny-zulfikar",
};

export const skills = [
  { group: "Frontend", items: ["Vue.js", "React.js", "Next.js", "TypeScript", "JavaScript"] },
  { group: "Backend & API", items: ["Node.js", "Golang", "PHP", "Laravel", ".NET", "REST API", "GraphQL"] },
  { group: "Database / Tools", items: ["MySQL", "Git"] },
] as const;

export const languages = ["Bahasa Indonesia (Native)", "English (Professional Working Proficiency)"];

export const experience: {
  role: string;
  organization?: string;
  period?: string;
  description?: string;
}[] = [
  {
    role: "Frontend Engineer",
    organization: "PT Mumtaz Teknologi Indonesia",
    period: "2023–2026",
    description: "Developed and maintained web applications with Vue.js and Next.js; integrated RESTful and GraphQL APIs; built reusable components and improved application performance and experience across devices.",
  },
  {
    role: "Fullstack Engineer",
    organization: "PT Glovory Technologies Indonesia",
    period: "2022–2023",
    description: "Developed web application features with React.js and Next.js, contributing to backend development and database design with cross-functional teams.",
  },
  {
    role: "Web Developer",
    organization: "CV Indosoft",
    period: "2019–2022",
    description: "Worked across requirements, database design, UI implementation, .NET and WordPress development, and deployment.",
  },
  {
    role: "Fullstack Developer",
    organization: "PT Internusa Cipta Solusi Perdana",
    period: "2018–2019",
    description: "Built internal systems with Laravel, contributed to Java Android development, and helped define an SOP-based development framework.",
  },
];

export const education: {
  institution: string;
  qualification?: string;
  period?: string;
  gpa?: string;
}[] = [
  {
    institution: "Institut Teknologi dan Bisnis Asia Malang",
    qualification: "Bachelor of Informatics Engineering",
    period: "2022–2026",
    gpa: "3.87",
  },
  {
    institution: "SMK PGRI 3 Malang",
    qualification: "Software Engineering",
    period: "2014–2017",
  },
];

export const projects: Project[] = [
  {
    slug: "bimbinganku",
    name: "BimbinganKu",
    category: "Education",
    description: "Academic workspace for managing projects, courses, and academic guidance activities.",
    overview: "Academic workspace for managing projects, courses, and academic guidance activities.",
    thumbnail: "/projects/bimbinganku.webp",
    thumbnailAlt: "BimbinganKu academic workspace interface screenshot.",
    technologies: [],
    featured: true,
    published: true,
    caseStudy: {
      visibleModules: ["Product landing page", "Feature navigation and plan information", "Workspace preview", "Sign-in and registration flow"],
    },
  },
  {
    slug: "mumtaz-dashboard",
    name: "Mumtaz Dashboard",
    category: "Business dashboard",
    description: "Back-office dashboard for academic activities, student records, transactions, and financial reporting.",
    overview: "Back-office dashboard for academic activities, student records, transactions, and financial reporting.",
    thumbnail: "/projects/mumtaz-dashboard.webp",
    thumbnailAlt: "Mumtaz Dashboard overview; transaction identifiers and monetary details are redacted.",
    imageCaption: "Transaction identifiers and monetary details are redacted.",
    technologies: [],
    featured: true,
    published: true,
    caseStudy: {
      visibleModules: ["Students, classes, and attendance", "Finance charts", "Recent transactions", "Mini bank, bills, and reports"],
    },
  },
  {
    slug: "project-generator",
    name: "FormaForge / Project Generator",
    category: "Developer tooling",
    description: "Developer tooling for project scaffolding and reusable templates.",
    overview: "A developer tool for project scaffolding and reusable templates.",
    technologies: [],
    githubUrl: "https://github.com/dzulfikarq/project-generator",
    featured: true,
    published: true,
    caseStudy: {},
  },
  {
    slug: "pt-prima-laksana-sarana",
    name: "PT Prima Laksana Sarana",
    category: "Business administration",
    description: "Business administration and finance dashboard covering documentation, administrative workflows, finance, and company data.",
    overview: "Business administration and finance dashboard covering documentation, administrative workflows, finance, and company data.",
    thumbnail: "/projects/pt-prima-laksana-sarana.webp",
    thumbnailAlt: "PT Prima Laksana Sarana administration dashboard; table entries and monetary details are redacted.",
    imageCaption: "Company, transaction, and monetary details are redacted.",
    technologies: [],
    published: true,
    caseStudy: {
      visibleModules: ["Company quotations and purchase orders", "Scheduling and reports", "Billing and expenses", "Receipts and company records"],
    },
  },
  {
    slug: "desy-danny",
    name: "Desy & Danny",
    category: "Web experience",
    description: "Digital wedding invitation site with a personalized watercolor illustration experience.",
    overview: "Digital wedding invitation site with a personalized watercolor illustration experience.",
    thumbnail: "/projects/desy-danny.webp",
    thumbnailAlt: "Watercolor-style hero from the Desy and Danny digital wedding invitation.",
    technologies: [],
    published: true,
    caseStudy: {
      visibleModules: ["Illustrated hero", "Event and couple information", "Scrolling navigation", "Elegant visual identity"],
    },
  },
  {
    slug: "lapas-merchant",
    name: "Lapas Merchant",
    category: "Merchant dashboard",
    description: "Merchant dashboard interface for staff and resident summaries, finance activities, and merchant modules.",
    overview: "Merchant dashboard interface for staff and resident summaries, finance activities, and merchant modules.",
    thumbnail: "/projects/lapas-merchant.webp",
    thumbnailAlt: "Lapas Merchant dashboard; transaction identifiers and monetary details are redacted.",
    imageCaption: "Transaction identifiers and monetary details are redacted.",
    technologies: [],
    published: true,
    caseStudy: {
      visibleModules: ["Staff and resident summaries", "Recent transactions", "Mini bank and canteen", "Users, roles, and reports"],
    },
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
];

export const publishedProjects = projects.filter(
  (project) => project.published && project.description,
);

export const featuredProjects = publishedProjects.filter((project) => project.featured);

export const siteUrl = process.env.NEXT_PUBLIC_SITE_URL
  ? new URL(process.env.NEXT_PUBLIC_SITE_URL)
  : undefined;
