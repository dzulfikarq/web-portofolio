import type { MetadataRoute } from "next";
import { publishedProjects, siteUrl } from "@/data/portfolio";

export default function sitemap(): MetadataRoute.Sitemap {
  if (!siteUrl) return [];

  const routes = ["", "/projects", "/resume", ...publishedProjects.map(({ slug }) => `/projects/${slug}`)];
  return routes.map((route) => ({
    url: new URL(route, siteUrl).toString(),
    changeFrequency: "monthly",
    priority: route === "" ? 1 : 0.7,
  }));
}
