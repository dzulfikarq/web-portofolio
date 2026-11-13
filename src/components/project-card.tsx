import { ArrowUpRight, Code2 } from "lucide-react";
import Link from "next/link";
import type { Project } from "@/data/portfolio";
import { ProjectArtwork } from "@/components/project-artwork";

export function ProjectCard({ project }: { project: Project }) {
  return (
    <article className="project-card">
      <Link className="project-card-art-link" href={`/projects/${project.slug}`} aria-label={`View ${project.name} case study`}>
        <ProjectArtwork project={project} />
      </Link>
      <div className="project-card-content">
        <div className="project-card-heading">
          <div>
            <span className="project-category">{project.category}</span>
            <h3><Link href={`/projects/${project.slug}`}>{project.name}</Link></h3>
          </div>
          <Link className="project-arrow" href={`/projects/${project.slug}`} aria-label={`View ${project.name}`}>
            <ArrowUpRight size={19} />
          </Link>
        </div>
        <p>{project.description}</p>
        {project.technologies && project.technologies.length > 0 && (
          <ul className="tag-list" aria-label="Technologies">
            {project.technologies.map((technology) => <li key={technology}>{technology}</li>)}
          </ul>
        )}
        <div className="project-card-footer">
          <Link className="text-link" href={`/projects/${project.slug}`}>
            Case study <ArrowUpRight size={15} />
          </Link>
          <div className="project-external-links">
            {project.githubUrl && (
              <a href={project.githubUrl} target="_blank" rel="noreferrer" aria-label={`${project.name} on GitHub`}>
                <Code2 size={17} />
              </a>
            )}
            {project.demoUrl && (
              <a href={project.demoUrl} target="_blank" rel="noreferrer" aria-label={`${project.name} live demo`}>
                <ArrowUpRight size={17} />
              </a>
            )}
          </div>
        </div>
      </div>
    </article>
  );
}
