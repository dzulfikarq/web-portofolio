"use client";

import { ArrowUpRight, Menu, X } from "lucide-react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import { profile } from "@/data/portfolio";
import { ThemeToggle } from "@/components/theme-toggle";

const navigation = [
  { label: "Home", href: "#home", id: "home" },
  { label: "About", href: "#about", id: "about" },
  { label: "Projects", href: "#projects", id: "projects" },
  { label: "Experience", href: "#experience", id: "experience" },
  { label: "Education", href: "#education", id: "education" },
  { label: "Resume", href: "#resume", id: "resume" },
  { label: "Contact", href: "#contact", id: "contact" },
];

export function SiteHeader() {
  const pathname = usePathname();
  const [menuOpen, setMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState(pathname === "/" ? "home" : "");

  useEffect(() => {
    if (pathname !== "/") return;

    const sections = navigation
      .map(({ id }) => document.getElementById(id))
      .filter((section): section is HTMLElement => section !== null);
    const observer = new IntersectionObserver(
      (entries) => {
        const visible = entries
          .filter((entry) => entry.isIntersecting)
          .sort((a, b) => b.intersectionRatio - a.intersectionRatio)[0];
        if (visible) setActiveSection(visible.target.id);
      },
      { rootMargin: "-30% 0px -55% 0px", threshold: [0, 0.2, 0.5, 1] },
    );

    const clearActiveAtTop = () => {
      if (window.scrollY < 160) setActiveSection("home");
    };

    sections.forEach((section) => observer.observe(section));
    window.addEventListener("scroll", clearActiveAtTop, { passive: true });
    return () => {
      observer.disconnect();
      window.removeEventListener("scroll", clearActiveAtTop);
    };
  }, [pathname]);

  return (
    <header className="site-header">
      <div className="shell header-inner">
        <Link className="brand" href="/#home" aria-label={`${profile.name}, home`} onClick={() => { setMenuOpen(false); setActiveSection("home"); }}>
          <span className="brand-mark">{profile.initials}</span>
          <span className="brand-name">{profile.name}</span>
        </Link>

        <button
          className="mobile-menu-toggle"
          type="button"
          aria-label={menuOpen ? "Close navigation" : "Open navigation"}
          aria-expanded={menuOpen}
          aria-controls="primary-navigation"
          onClick={() => setMenuOpen((open) => !open)}
        >
          {menuOpen ? <X size={21} /> : <Menu size={21} />}
        </button>

        <nav
          className={`primary-navigation${menuOpen ? " is-open" : ""}`}
          id="primary-navigation"
          aria-label="Primary navigation"
        >
          {navigation.map((item) => (
            <a
              className={(pathname === "/" && activeSection === item.id) || (pathname === "/resume" && item.id === "resume") ? "nav-link is-active" : "nav-link"}
              href={pathname === "/" ? item.href : `/${item.href}`}
              key={item.id}
              aria-current={pathname === "/resume" && item.id === "resume" ? "page" : undefined}
              onClick={() => setMenuOpen(false)}
            >
              {item.label}
            </a>
          ))}
          <Link className="nav-project-link" href="/projects" onClick={() => setMenuOpen(false)}>
            All projects <ArrowUpRight size={14} aria-hidden="true" />
          </Link>
          <div className="nav-mobile-theme"><ThemeToggle /></div>
        </nav>

        <div className="header-actions">
          <a
            className="header-github"
            href={profile.githubUrl}
            target="_blank"
            rel="noreferrer"
            aria-label="Visit Danny on GitHub"
          >
            GitHub <ArrowUpRight size={14} aria-hidden="true" />
          </a>
          <ThemeToggle />
        </div>
      </div>
    </header>
  );
}
