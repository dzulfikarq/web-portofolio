import {
  ArrowDownRight,
  ArrowRight,
  ArrowUpRight,
  CalendarDays,
  Code2,
  Database,
  Mail,
  PanelsTopLeft,
  Sparkles,
} from "lucide-react";
import Link from "next/link";
import { ProjectCard } from "@/components/project-card";
import { Reveal } from "@/components/reveal";
import { experience, profile, publishedProjects, skills } from "@/data/portfolio";
import { personStructuredData } from "@/lib/structured-data";

function SectionHeading({
  eyebrow,
  title,
  description,
  id,
}: {
  eyebrow: string;
  title: string;
  description?: string;
  id?: string;
}) {
  return (
    <div className="section-heading">
      <span className="eyebrow">{eyebrow}</span>
      <h2 id={id}>{title}</h2>
      {description && <p>{description}</p>}
    </div>
  );
}

const highlights = [
  { icon: CalendarDays, value: profile.experience, label: "Professional frontend experience" },
  { icon: Code2, value: "Fullstack", label: "Frontend craft, backend perspective" },
  { icon: PanelsTopLeft, value: skills[0].group, label: skills[0].items.slice(0, 3).join(" · ") },
  { icon: Database, value: skills[1].group, label: skills[1].items.join(" · ") },
];

export default function HomePage() {
  const personJsonLd = JSON.stringify(personStructuredData()).replace(/</g, "\\u003c");

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: personJsonLd }} />
      <main className="min-h-screen" id="main-content">
        <section className="hero-section shell" id="home" aria-labelledby="hero-title">
          <div className="hero-copy">
            <div className="hero-kicker">
              <span className="availability-dot" />
              <span>{profile.title}</span>
              <span className="kicker-divider">/</span>
              <span>{profile.location}</span>
            </div>
            {profile.availability && <span className="availability-badge"><span className="availability-dot" />{profile.availability.label}</span>}
            <h1 id="hero-title">Building thoughtful digital products <span>with code.</span></h1>
            <p className="hero-description">{profile.heroDescription}</p>
            <div className="hero-actions">
              <a className="button button-primary" href="#projects">
                View projects <ArrowDownRight size={17} aria-hidden="true" />
              </a>
              <Link className="button button-secondary" href="/resume">
                View resume <ArrowUpRight size={16} aria-hidden="true" />
              </Link>
            </div>
            <div className="hero-socials">
              <a href={profile.githubUrl} target="_blank" rel="noreferrer">
                <Code2 size={16} aria-hidden="true" /> GitHub
              </a>
              {profile.linkedinUrl && <a href={profile.linkedinUrl} target="_blank" rel="noreferrer"><ArrowUpRight size={16} aria-hidden="true" /> LinkedIn</a>}
              {profile.email && <a href={`mailto:${profile.email}`}><Mail size={16} aria-hidden="true" /> Email</a>}
            </div>
          </div>

          <div className="hero-visual" role="img" aria-label="Abstract code editor illustration with frontend, backend, and product details">
            <div className="hero-visual-glow" />
            <div className="hero-orbit hero-orbit-one" />
            <div className="hero-orbit hero-orbit-two" />
            <div className="hero-floating-note note-top"><Sparkles size={15} /> Made with intention</div>
            <div className="editor-window">
              <div className="editor-chrome">
                <div className="window-dots"><i /><i /><i /></div>
                <span>thoughtful-work.tsx</span>
                <Code2 size={15} />
              </div>
              <div className="editor-content">
                <div className="editor-line"><span className="line-no">01</span><span><b>const</b> product = &#123;</span></div>
                <div className="editor-line indent"><span className="line-no">02</span><span>purpose: <em>&quot;useful&quot;</em>,</span></div>
                <div className="editor-line indent"><span className="line-no">03</span><span>experience: <em>&quot;thoughtful&quot;</em>,</span></div>
                <div className="editor-line indent"><span className="line-no">04</span><span>quality: <em>&quot;built to last&quot;</em></span></div>
                <div className="editor-line"><span className="line-no">05</span><span>&#125;;</span></div>
                <div className="editor-line editor-empty"><span className="line-no">06</span><span /></div>
                <div className="editor-line"><span className="line-no">07</span><span><b>export default</b> product;</span></div>
              </div>
              <div className="editor-status"><span><i /> Ready to build</span><span>UTF-8&nbsp; · &nbsp;TSX</span></div>
            </div>
            <div className="hero-floating-note note-bottom"><span className="note-spark">✳</span> Design <span className="note-arrow">↗</span> Develop <span className="note-arrow">↗</span> Refine</div>
            <div className="hero-stack-chip chip-react"><span>R</span> React</div>
            <div className="hero-stack-chip chip-ts"><span>TS</span> TypeScript</div>
            <div className="hero-visual-index">01 <span>—</span> 04</div>
          </div>
        </section>

        <section className="highlight-section shell" aria-label="Professional highlights">
          {highlights.map(({ icon: Icon, value, label }, index) => (
            <Reveal className="highlight-card" delay={index * 0.06} key={value}>
              <span className="highlight-icon"><Icon size={17} aria-hidden="true" /></span>
              <span className="highlight-copy"><strong>{value}</strong><span>{label}</span></span>
            </Reveal>
          ))}
        </section>

        <section className="stack-section section-space" id="stack" aria-labelledby="stack-title">
          <div className="shell stack-inner">
            <div className="stack-intro">
              <span className="eyebrow">The toolkit</span>
              <h2 id="stack-title">Tools I work with</h2>
            </div>
            {skills.map((group) => (
              <div className="stack-group" key={group.group}>
                <span>{group.group}</span>
                <div className="stack-tags">
                  {group.items.map((skill) => <span className="stack-tag" key={skill}>{skill}</span>)}
                </div>
              </div>
            ))}
          </div>
        </section>

        <section className="projects-section section-space" id="projects" aria-labelledby="projects-title">
          <div className="shell">
            <Reveal>
              <SectionHeading
                eyebrow="Featured projects"
                title="Selected Works"
                description="A few products I’ve worked on, from academic platforms to developer tools."
                id="projects-title"
              />
            </Reveal>
            <div className="project-grid featured-project-grid">
              {publishedProjects.map((project, index) => (
                <Reveal key={project.slug} delay={index * 0.08}>
                  <ProjectCard project={project} />
                </Reveal>
              ))}
            </div>
            <div className="section-cta">
              <Link className="button button-secondary" href="/projects">
                Explore all projects <ArrowRight size={16} aria-hidden="true" />
              </Link>
            </div>
          </div>
        </section>

        <section className="about-section section-space shell" id="about" aria-labelledby="about-title">
          <Reveal className="about-aside">
            <span className="eyebrow">A little about me</span>
            <p className="about-aside-quote">Good software feels considered — from the first interaction to the details under the hood.</p>
            <span className="about-aside-mark">DAZ<span>.</span></span>
          </Reveal>
          <Reveal className="about-content" delay={0.1}>
            <h2 id="about-title">Engineering with a <span>human touch.</span></h2>
            <p>{profile.about}</p>
            <a className="text-link" href={profile.githubUrl} target="_blank" rel="noreferrer">
              More about my work <ArrowUpRight size={16} aria-hidden="true" />
            </a>
          </Reveal>
        </section>

        <section className="experience-section section-space shell" id="experience" aria-labelledby="experience-title">
          <Reveal className="experience-heading">
            <span className="eyebrow">The path so far</span>
            <h2 id="experience-title">Experience</h2>
            <p>Professional frontend development, with a growing fullstack toolkit.</p>
          </Reveal>
          {experience.length > 0 ? experience.map((entry) => (
            <Reveal className="experience-entry" delay={0.1} key={`${entry.role}-${entry.organization ?? ""}`}>
              <div className="experience-marker"><span /></div>
              <div className="experience-entry-main">
                <span className="experience-period">{entry.period}</span>
                <h3>{entry.role}</h3>
                {entry.organization && <span className="experience-organization">{entry.organization}</span>}
                {entry.description && <p>{entry.description}</p>}
              </div>
              <span className="experience-entry-location">{profile.location}</span>
            </Reveal>
          )) : (
            <Reveal className="experience-entry" delay={0.1}>
              <div className="experience-marker"><span /></div>
              <div className="experience-entry-main">
                <span className="experience-period">{profile.experience}</span>
                <h3>Professional frontend development</h3>
                <p>Employer and role details have not been added.</p>
              </div>
              <span className="experience-entry-location">{profile.location}</span>
            </Reveal>
          )}
        </section>

        <section className="resume-section section-space shell" id="resume" aria-labelledby="resume-title">
          <Reveal className="resume-preview">
            <div className="resume-preview-copy">
              <span className="eyebrow">A clear overview</span>
              <h2 id="resume-title">Let’s make introductions easy.</h2>
              <p>{profile.summary}</p>
              <Link className="button button-primary" href="/resume">
                View online resume <ArrowUpRight size={16} aria-hidden="true" />
              </Link>
            </div>
            <div className="resume-preview-paper" aria-hidden="true">
              <span className="paper-monogram">DAZ</span>
              <span className="paper-rule paper-rule-wide" />
              <span className="paper-rule" />
              <span className="paper-section-title">EXPERIENCE</span>
              <span className="paper-rule paper-rule-wide" />
              <span className="paper-rule" />
              <span className="paper-section-title">SELECTED WORK</span>
              <span className="paper-rule paper-rule-wide" />
              <span className="paper-rule paper-rule-short" />
            </div>
          </Reveal>
        </section>

        <section className="contact-section section-space shell" id="contact" aria-labelledby="contact-title">
          <Reveal className="contact-panel">
            <span className="contact-orbit contact-orbit-one" />
            <span className="contact-orbit contact-orbit-two" />
            <div className="contact-content">
              <span className="eyebrow">Have something in mind?</span>
              <h2 id="contact-title">Let’s build something <span>worth using.</span></h2>
              <p>The best way to reach me right now is through GitHub.</p>
              <a className="button button-light" href={profile.githubUrl} target="_blank" rel="noreferrer">
                Find me on GitHub <Code2 size={17} aria-hidden="true" /> <ArrowUpRight size={14} aria-hidden="true" />
              </a>
            </div>
            <div className="contact-stamp" aria-hidden="true">{profile.initials}<span>·</span></div>
          </Reveal>
        </section>
      </main>
    </>
  );
}
