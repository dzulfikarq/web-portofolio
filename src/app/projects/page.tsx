import type { Metadata } from "next";
import { ArrowLeft } from "lucide-react";
import Link from "next/link";
import { ProjectBrowser } from "@/components/project-browser";
import { Reveal } from "@/components/reveal";
import { profile, publishedProjects } from "@/data/portfolio";

export const metadata: Metadata = {
  title: "Projects",
  description: `Selected projects by ${profile.name}, ${profile.title}.`,
  openGraph: {
    title: "Projects | Danny Akhmad Zulfikar",
    description: "Selected projects across product, tooling, and creative workflows.",
    type: "website",
  },
};

export default function ProjectsPage() {
  return (
    <main className="page-main" id="main-content">
      <section className="shell page-hero" aria-labelledby="projects-heading">
        <Link className="back-link" href="/#projects"><ArrowLeft size={15} /> Back to home</Link>
        <Reveal>
          <span className="eyebrow">Selected work</span>
          <h1 id="projects-heading">Projects &amp; experiments.</h1>
          <p>A selection of products and tools I’ve worked on. Only verified details are included.</p>
        </Reveal>
        <ProjectBrowser projects={publishedProjects} />
      </section>
    </main>
  );
}
