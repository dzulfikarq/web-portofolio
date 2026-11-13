import type { Metadata } from "next";
import Image from "next/image";
import { ArrowLeft, ArrowUpRight, BriefcaseBusiness, Building2, CalendarDays, Code2, GraduationCap, Globe2, Layers3, Mail, MapPin, Monitor, UserRound } from "lucide-react";
import Link from "next/link";
import { education, experience, languages, profile, skills } from "@/data/portfolio";

export const metadata: Metadata = {
  title: "Resume",
  description: `Online resume for ${profile.name}, ${profile.title} based in ${profile.location}.`,
  openGraph: {
    title: `Resume | ${profile.name}`,
    description: `${profile.title} — ${profile.location}`,
    type: "profile",
  },
};

const contactLinks = [
  { label: "Email", href: `mailto:${profile.email}`, value: profile.email, icon: Mail },
  { label: "GitHub", href: profile.githubUrl, value: "github.com/dzulfikarq", icon: Code2 },
  { label: "LinkedIn", href: profile.linkedinUrl, value: "linkedin.com/in/danny-zulfikar", icon: ArrowUpRight },
];

const experienceIcons = [Building2, Code2, Monitor, Layers3];
const languageRows = languages.map((language) => {
  const match = language.match(/^(.*?)\s+\((.*)\)$/);
  return { name: match?.[1] ?? language, proficiency: match?.[2] ?? "" };
});

export default function ResumePage() {
  return (
    <main className="page-main resume-page" id="main-content">
      <div className="shell resume-actions">
        <Link className="back-link" href="/#resume"><ArrowLeft size={16} /> Back to home</Link>
      </div>

      <article className="resume-document shell" aria-labelledby="resume-name">
        <header className="resume-hero">
          <div className="resume-hero-copy">
            <span className="eyebrow">Professional resume</span>
            <h1 id="resume-name">{profile.name}</h1>
            <p className="resume-role">{profile.title}</p>
            <div className="resume-hero-meta" aria-label="Contact details">
              <span className="resume-meta-location"><MapPin size={16} aria-hidden="true" /> {profile.location}</span>
              {contactLinks.map(({ label, href, value, icon: Icon }) => (
                <a href={href} key={label} target={label === "Email" ? undefined : "_blank"} rel={label === "Email" ? undefined : "noreferrer"}>
                  <Icon size={16} aria-hidden="true" /> {value}
                </a>
              ))}
            </div>
          </div>
          <figure className="resume-portrait" aria-label="Portrait illustration">
            <Image
              src={profile.portrait}
              alt={`Illustrated portrait of ${profile.name}`}
              fill
              sizes="(max-width: 600px) 180px, (max-width: 900px) 240px, 350px"
            />
          </figure>
        </header>

        <div className="resume-layout">
          <div className="resume-main-column">
            <section className="resume-card resume-summary-card" aria-labelledby="summary-heading">
              <div className="resume-card-heading">
                <span className="resume-card-icon"><UserRound size={22} aria-hidden="true" /></span>
                <h2 id="summary-heading">Professional Summary</h2>
              </div>
              <p className="resume-summary-text">{profile.summary}</p>
            </section>

            <section className="resume-card resume-experience-card" aria-labelledby="experience-heading">
              <div className="resume-card-heading">
                <span className="resume-card-icon"><BriefcaseBusiness size={22} aria-hidden="true" /></span>
                <h2 id="experience-heading">Work Experience</h2>
              </div>
              <ol className="resume-timeline">
                {experience.map((entry, index) => {
                  const Icon = experienceIcons[index] ?? Building2;
                  return (
                    <li className="resume-timeline-item" key={`${entry.role}-${entry.organization ?? ""}`}>
                      <span className="resume-timeline-node" aria-hidden="true" />
                      <article className="resume-entry-card">
                        <span className="resume-entry-icon"><Icon size={21} aria-hidden="true" /></span>
                        <div className="resume-entry-content">
                          <div className="resume-entry-heading">
                            <div>
                              <h3>{entry.role}</h3>
                              {entry.organization && <p className="resume-entry-organization">{entry.organization}</p>}
                            </div>
                            {entry.period && <span className="resume-period"><CalendarDays size={14} aria-hidden="true" /> {entry.period}</span>}
                          </div>
                          {entry.description && <p className="resume-entry-description">{entry.description}</p>}
                        </div>
                      </article>
                    </li>
                  );
                })}
              </ol>
            </section>
          </div>

          <aside className="resume-side-column" aria-label="Contact and qualifications">
            <section className="resume-card resume-contact-card" aria-labelledby="contact-heading">
              <div className="resume-card-heading resume-card-heading-compact">
                <span className="resume-card-icon"><Mail size={21} aria-hidden="true" /></span>
                <div>
                  <h2 id="contact-heading">Contact</h2>
                  <p>Get in touch with me</p>
                </div>
              </div>
              <ul className="resume-contact-list">
                {contactLinks.map(({ label, href, value, icon: Icon }) => (
                  <li key={label}>
                    <a href={href} target={label === "Email" ? undefined : "_blank"} rel={label === "Email" ? undefined : "noreferrer"}>
                      <Icon size={16} aria-hidden="true" />
                      <span>{value}</span>
                      {label !== "Email" && <ArrowUpRight size={14} aria-hidden="true" />}
                    </a>
                  </li>
                ))}
                <li className="resume-contact-location"><MapPin size={16} aria-hidden="true" /><span>{profile.location}</span></li>
              </ul>
            </section>

            <section className="resume-card resume-education-card" aria-labelledby="education-heading">
              <div className="resume-card-heading resume-card-heading-compact">
                <span className="resume-card-icon"><GraduationCap size={22} aria-hidden="true" /></span>
                <h2 id="education-heading">Education</h2>
              </div>
              <ol className="resume-education-list">
                {education.map((item) => (
                  <li className="resume-education-item" key={`${item.institution}-${item.qualification ?? ""}`}>
                    <span className="resume-education-node" aria-hidden="true" />
                    <div className="resume-education-heading">
                      <h3>{item.institution}</h3>
                      {item.period && <span className="resume-period">{item.period}</span>}
                    </div>
                    {item.qualification && <p>{item.qualification}</p>}
                    {item.gpa && <p className="resume-gpa">GPA {item.gpa}</p>}
                  </li>
                ))}
              </ol>
            </section>

            <section className="resume-card resume-skills-card" aria-labelledby="skills-heading">
              <div className="resume-card-heading resume-card-heading-compact">
                <span className="resume-card-icon"><Layers3 size={21} aria-hidden="true" /></span>
                <h2 id="skills-heading">Technical Skills</h2>
              </div>
              <div className="resume-skill-groups">
                {skills.map((group) => (
                  <div className="resume-skill-group" key={group.group}>
                    <h3>{group.group}</h3>
                    <ul className="resume-skill-list">
                      {group.items.map((skill) => <li key={skill}>{skill}</li>)}
                    </ul>
                  </div>
                ))}
              </div>
            </section>

            <section className="resume-card resume-languages-card" aria-labelledby="languages-heading">
              <div className="resume-card-heading resume-card-heading-compact">
                <span className="resume-card-icon"><Globe2 size={21} aria-hidden="true" /></span>
                <h2 id="languages-heading">Languages</h2>
              </div>
              <ul className="resume-language-list">
                {languageRows.map(({ name, proficiency }) => (
                  <li key={name}><strong>{name}</strong><span>{proficiency}</span></li>
                ))}
              </ul>
            </section>
          </aside>
        </div>
      </article>
    </main>
  );
}
