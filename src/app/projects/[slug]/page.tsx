import type { Metadata } from "next";
import { ArrowLeft, ArrowUpRight, Code2 } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { ProjectArtwork } from "@/components/project-artwork";
import { Reveal } from "@/components/reveal";
import { profile, publishedProjects } from "@/data/portfolio";

type ProjectPageProps = {
  params: Promise<{ slug: string }>;
};

export const dynamicParams = false;

export function generateStaticParams() {
  return publishedProjects.map(({ slug }) => ({ slug }));
}

export async function generateMetadata({ params }: ProjectPageProps): Promise<Metadata> {
  const { slug } = await params;
  const project = publishedProjects.find((item) => item.slug === slug);

  if (!project) return { title: "Project not found" };

  return {
    title: project.name,
    description: project.description,
    openGraph: {
      title: `${project.name} | ${profile.name}`,
      description: project.description,
      type: "article",
    },
    twitter: {
      card: "summary_large_image",
      title: `${project.name} | ${profile.name}`,
      description: project.description,
    },
  };
}

function CaseStudyBlock({ title, children }: { title: string; children: React.ReactNode }) {
  return (
    <section className="case-study-block">
      <h2>{title}</h2>
      {children}
    </section>
  );
}

export default async function ProjectCaseStudy({ params }: ProjectPageProps) {
  const { slug } = await params;
  const project = publishedProjects.find((item) => item.slug === slug);
  if (!project) notFound();

  const caseStudy = project.caseStudy;

  return (
    <main className="page-main" id="main-content">
      <article className="shell case-study-page">
        <Link className="back-link" href="/projects"><ArrowLeft size={15} /> All projects</Link>
        <header className="case-study-header">
          <Reveal>
            <span className="eyebrow">{project.category} · Project study</span>
            <h1>{project.name}</h1>
            <p>{project.overview ?? project.description}</p>
            <div className="case-study-links">
              {project.githubUrl && (
                <a className="button button-secondary" href={project.githubUrl} target="_blank" rel="noreferrer">
                  <Code2 size={17} /> View repository <ArrowUpRight size={14} />
                </a>
              )}
              {project.demoUrl && (
                <a className="button button-secondary" href={project.demoUrl} target="_blank" rel="noreferrer">
                  Live demo <ArrowUpRight size={14} />
                </a>
              )}
            </div>
          </Reveal>
          <Reveal className="case-study-art" delay={0.08}>
            <ProjectArtwork project={project} />
            <p className="artwork-disclaimer">
              {project.imageCaption ?? (project.thumbnail ? "Project screenshot." : "Illustrative artwork — project screenshots not supplied.")}
            </p>
          </Reveal>
        </header>

        <div className="case-study-layout">
          <div className="case-study-content">
            {caseStudy?.problem && <CaseStudyBlock title="The problem"><p>{caseStudy.problem}</p></CaseStudyBlock>}
            {caseStudy?.solution && <CaseStudyBlock title="The solution"><p>{caseStudy.solution}</p></CaseStudyBlock>}
            {caseStudy?.myRole && <CaseStudyBlock title="My role"><p>{caseStudy.myRole}</p></CaseStudyBlock>}
            {caseStudy?.visibleModules && caseStudy.visibleModules.length > 0 && (
              <CaseStudyBlock title="Visible modules">
                <ul>{caseStudy.visibleModules.map((module) => <li key={module}>{module}</li>)}</ul>
              </CaseStudyBlock>
            )}
            {caseStudy?.features && caseStudy.features.length > 0 && (
              <CaseStudyBlock title="Key features">
                <ul>{caseStudy.features.map((feature) => <li key={feature}>{feature}</li>)}</ul>
              </CaseStudyBlock>
            )}
            {caseStudy?.technicalChallenges && caseStudy.technicalChallenges.length > 0 && (
              <CaseStudyBlock title="Technical challenges">
                <ul>{caseStudy.technicalChallenges.map((challenge) => <li key={challenge}>{challenge}</li>)}</ul>
              </CaseStudyBlock>
            )}
            {caseStudy?.screenshots && caseStudy.screenshots.length > 0 && (
              <CaseStudyBlock title="Screenshots">
                <div className="case-study-screenshots">
                  {caseStudy.screenshots.map((screenshot) => (
                    <figure key={screenshot.src}>
                      <Image src={screenshot.src} alt={screenshot.alt} width={1200} height={760} />
                      {screenshot.caption && <figcaption>{screenshot.caption}</figcaption>}
                    </figure>
                  ))}
                </div>
              </CaseStudyBlock>
            )}
            {caseStudy?.outcome && <CaseStudyBlock title="Outcome"><p>{caseStudy.outcome}</p></CaseStudyBlock>}
          </div>
          <aside className="case-study-sidebar" aria-label="Project information">
            <div className="case-study-meta">
              <span className="eyebrow">Project</span>
              <p>{project.name}</p>
              <span className="eyebrow">Category</span>
              <p>{project.category}</p>
              {project.technologies && project.technologies.length > 0 && (
                <>
                  <span className="eyebrow">Technologies</span>
                  <ul className="tag-list">
                    {project.technologies.map((technology) => <li key={technology}>{technology}</li>)}
                  </ul>
                </>
              )}
            </div>
          </aside>
        </div>
        <Link className="text-link case-study-next" href="/projects">Explore other projects <ArrowUpRight size={16} /></Link>
      </article>
    </main>
  );
}
