"use client";

import { useMemo, useState } from "react";
import type { Project } from "@/data/portfolio";
import { ProjectCard } from "@/components/project-card";

export function ProjectBrowser({ projects }: { projects: Project[] }) {
  const [activeCategory, setActiveCategory] = useState("All");
  const categories = useMemo(
    () => ["All", ...new Set(projects.map((project) => project.category))],
    [projects],
  );
  const filteredProjects = activeCategory === "All"
    ? projects
    : projects.filter((project) => project.category === activeCategory);

  return (
    <>
      <div className="project-filters" role="group" aria-label="Filter projects by category">
        {categories.map((category) => (
          <button
            className={activeCategory === category ? "filter-button is-active" : "filter-button"}
            type="button"
            key={category}
            aria-pressed={activeCategory === category}
            onClick={() => setActiveCategory(category)}
          >
            {category}
          </button>
        ))}
      </div>
      <div className="project-grid" aria-live="polite">
        {filteredProjects.map((project) => <ProjectCard project={project} key={project.slug} />)}
      </div>
    </>
  );
}
