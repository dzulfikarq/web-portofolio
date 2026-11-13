import { Braces, Clapperboard, GraduationCap } from "lucide-react";
import Image from "next/image";
import type { Project } from "@/data/portfolio";

const artworkByCategory = {
  Education: { icon: GraduationCap, label: "LEARN WITH CLARITY", mark: "B" },
  "Developer tooling": { icon: Braces, label: "BUILD YOUR NEXT", mark: "{ }" },
  "Video workflow": { icon: Clapperboard, label: "MAKE EVERY FRAME", mark: "K" },
  "Business administration": { icon: Braces, label: "BUSINESS OPERATIONS", mark: "P" },
  "Web experience": { icon: GraduationCap, label: "DIGITAL INVITATION", mark: "D" },
  "Business dashboard": { icon: Braces, label: "ACADEMIC DASHBOARD", mark: "M" },
  "Merchant dashboard": { icon: Braces, label: "MERCHANT OPERATIONS", mark: "L" },
} as const;

export function ProjectArtwork({ project }: { project: Project }) {
  if (project.thumbnail) {
    return (
      <div className={`project-artwork project-artwork-image artwork-${project.slug}`}>
        <Image
          src={project.thumbnail}
          alt={project.thumbnailAlt ?? `${project.name} screenshot.`}
          fill
          sizes="(max-width: 600px) 100vw, (max-width: 820px) 50vw, 33vw"
        />
      </div>
    );
  }

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
      <span className="artwork-caption">ILLUSTRATIVE ARTWORK <span>—</span> {project.category.toUpperCase()}</span>
    </div>
  );
}
