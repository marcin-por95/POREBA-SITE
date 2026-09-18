import type { MetadataRoute } from "next";
import { site } from "@/data/site";
import { projects } from "@/data/projects";
import { services } from "@/data/services";
import { categoryOrder } from "@/types/project";

const SEO_UPDATE = new Date("2026-09-18T00:00:00+02:00");

export default function sitemap(): MetadataRoute.Sitemap {
  const staticRoutes = [
    { path: "", priority: 1 },
    { path: "/portfolio", priority: 0.9 },
    { path: "/realizacje", priority: 0.9 },
    { path: "/uslugi", priority: 0.9 },
    { path: "/o-mnie", priority: 0.7 },
    { path: "/kontakt", priority: 0.8 },
    { path: "/polityka-prywatnosci", priority: 0.2 },
    { path: "/cookies", priority: 0.2 },
  ].map(({ path, priority }) => ({
    url: `${site.url}${path}`,
    lastModified: SEO_UPDATE,
    changeFrequency: "monthly" as const,
    priority,
  }));

  const serviceRoutes = services.map((service) => ({
    url: `${site.url}/uslugi/${service.seoSlug}`,
    lastModified: SEO_UPDATE,
    changeFrequency: "monthly" as const,
    priority: 0.9,
  }));

  const portfolioRoutes = categoryOrder.map((category) => ({
    url: `${site.url}/portfolio/${category}`,
    lastModified: SEO_UPDATE,
    changeFrequency: "monthly" as const,
    priority: 0.8,
  }));

  const projectRoutes = projects.map((project) => ({
    url: `${site.url}/realizacje/${project.slug}`,
    lastModified: SEO_UPDATE,
    changeFrequency: "yearly" as const,
    priority: 0.8,
  }));

  return [...staticRoutes, ...serviceRoutes, ...portfolioRoutes, ...projectRoutes];
}
