import type { Metadata } from "next";
import { ArrowLeft, ArrowUpRight, Code2, MapPin } from "lucide-react";
import Link from "next/link";
import { PrintButton } from "@/components/print-button";
import { education, experience, featuredProjects, languages, profile, skills } from "@/data/portfolio";

export const metadata: Metadata = {
  title: "Resume",
  description: `Online resume for ${profile.name}, ${profile.title} based in ${profile.location}.`,
  openGraph: {
    title: `Resume | ${profile.name}`,
    description: `${profile.title} — ${profile.location}`,
    type: "profile",
  },
};

export default function ResumePage() {
  return (
    <main className="page-main resume-page" id="main-content">
      <div className="shell resume-actions no-print">
        <Link className="back-link" href="/#resume"><ArrowLeft size={15} /> Back to home</Link>
        <PrintButton />
      </div>
      <article className="resume-document shell" aria-labelledby="resume-name">
        <header className="resume-header">
          <div>
            <span className="eyebrow">Professional resume</span>
            <h1 id="resume-name">{profile.name}</h1>
            <p className="resume-role">{profile.title}</p>
          </div>
          <div className="resume-contact">
            <span><MapPin size={15} /> {profile.location}</span>
            <a href={profile.githubUrl} target="_blank" rel="noreferrer"><Code2 size={15} /> github.com/dzulfikarq <ArrowUpRight size={13} /></a>
            <a href={`mailto:${profile.email}`}>{profile.email}</a>
            <a href={profile.linkedinUrl} target="_blank" rel="noreferrer">LinkedIn <ArrowUpRight size={13} /></a>
          </div>
        </header>

        <section className="resume-section-block">
          <h2>Professional summary</h2>
          <p>{profile.summary}</p>
        </section>

        <section className="resume-section-block">
          <h2>Work experience</h2>
          {experience.map((entry) => (
            <div className="resume-entry" key={`${entry.role}-${entry.organization ?? ""}`}>
              <div className="resume-entry-heading">
                <h3>{entry.role}</h3>
                {entry.period && <span>{entry.period}</span>}
              </div>
              {entry.organization && <p className="resume-entry-organization">{entry.organization}</p>}
              {entry.description && <p>{entry.description}</p>}
            </div>
          ))}
        </section>

        <section className="resume-section-block">
          <h2>Education</h2>
          {education.map((item) => (
            <div className="resume-entry" key={`${item.institution}-${item.qualification ?? ""}`}>
              <div className="resume-entry-heading">
                <h3>{item.institution}</h3>
                {item.period && <span>{item.period}</span>}
              </div>
              {item.qualification && <p className="resume-entry-organization">{item.qualification}{item.gpa && ` · GPA ${item.gpa}`}</p>}
            </div>
          ))}
        </section>

        <section className="resume-section-block">
          <h2>Technical skills</h2>
          <div className="resume-skills">
            {skills.map((group) => (
              <div className="resume-skill-group" key={group.group}>
                <h3>{group.group}</h3>
                <p>{group.items.join(" · ")}</p>
              </div>
            ))}
          </div>
        </section>

        <section className="resume-section-block">
          <h2>Languages</h2>
          <p>{languages.join(" · ")}</p>
        </section>

        <section className="resume-section-block resume-contact-block">
          <h2>Selected projects</h2>
          {featuredProjects.map((project) => (
            <div className="resume-entry resume-project" key={project.slug}>
              <div className="resume-entry-heading">
                <h3><Link href={`/projects/${project.slug}`}>{project.name}</Link></h3>
                <span>{project.category}</span>
              </div>
              <p>{project.description}</p>
            </div>
          ))}
        </section>
      </article>
    </main>
  );
}
