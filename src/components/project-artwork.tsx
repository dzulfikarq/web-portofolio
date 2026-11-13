import { Braces, Clapperboard, GraduationCap } from "lucide-react";
import type { Project } from "@/data/portfolio";

const artworkByCategory = {
  Education: { icon: GraduationCap, label: "LEARN WITH CLARITY", mark: "B" },
  "Developer tooling": { icon: Braces, label: "BUILD YOUR NEXT", mark: "{ }" },
  "Video workflow": { icon: Clapperboard, label: "MAKE EVERY FRAME", mark: "K" },
  AI: { icon: Braces, label: "IDEAS INTO INSIGHT", mark: "AI" },
  Food: { icon: GraduationCap, label: "FIND YOUR NEXT", mark: "F" },
  Design: { icon: Braces, label: "MADE TO CREATE", mark: "D" },
} as const;

export function ProjectArtwork({ project }: { project: Project }) {
  const artwork = artworkByCategory[project.category];
  const Icon = artwork.icon;

  return (
    <div className={`project-artwork artwork-${project.slug}`} aria-hidden="true">
      <div className="artwork-topline"><span /><span /><span /></div>
      <div className="artwork-canvas">
        <div className="artwork-copy">
          <span className="artwork-icon"><Icon size={16} strokeWidth={1.8} /></span>
          <span className="artwork-label">{artwork.label}</span>
          <span className="artwork-title">{project.name.split(" /")[0]}</span>
          <span className="artwork-rule" />
          <span className="artwork-rule artwork-rule-short" />
        </div>
        <div className="artwork-orbit"><span>{artwork.mark}</span><i /><i /><i /></div>
      </div>
      <span className="artwork-caption">PROJECT STUDY <span>—</span> {project.category.toUpperCase()}</span>
    </div>
  );
}
