import { ArrowUpRight, Code2 } from "lucide-react";
import Link from "next/link";
import { profile } from "@/data/portfolio";

export function SiteFooter() {
  return (
    <footer className="site-footer">
      <div className="shell footer-inner">
        <Link className="footer-brand" href="/#home">
          <span className="brand-mark">{profile.initials}</span>
          <span>Thoughtful work, built with care.</span>
        </Link>
        <p>© {new Date().getFullYear()} {profile.name}</p>
        <a href={profile.githubUrl} target="_blank" rel="noreferrer" aria-label="Danny on GitHub">
          <Code2 size={17} /> GitHub <ArrowUpRight size={14} />
        </a>
      </div>
    </footer>
  );
}
