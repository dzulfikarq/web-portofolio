"use client";

import { Moon, Sun } from "lucide-react";

export function ThemeToggle() {
  function toggleTheme() {
    const nextDark = !document.documentElement.classList.contains("dark");
    document.documentElement.classList.toggle("dark", nextDark);
    localStorage.setItem("portfolio-theme", nextDark ? "dark" : "light");
  }

  return (
    <button
      className="theme-toggle"
      type="button"
      onClick={toggleTheme}
      aria-label="Toggle color theme"
      title="Toggle color theme"
    >
      <Moon className="theme-icon-light" size={18} aria-hidden="true" />
      <Sun className="theme-icon-dark" size={18} aria-hidden="true" />
    </button>
  );
}
