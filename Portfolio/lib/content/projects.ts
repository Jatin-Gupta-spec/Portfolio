import { socIq } from "../../content/projects/soc-iq";
import type { Project } from "./types";

export function isSafeContentLink(href: string): boolean {
  if (/^\/(?!\/)[^\\]*$/.test(href) && !/[\x00-\x20]/.test(href)) return true;
  try {
    return new URL(href).protocol === "https:";
  } catch {
    return false;
  }
}

export function createProjectRegistry(entries: readonly Project[]) {
  const bySlug = new Map<string, Project>();
  for (const project of entries) {
    if (!/^[a-z0-9]+(?:-[a-z0-9]+)*$/.test(project.slug))
      throw new Error("Invalid project slug");
    if (bySlug.has(project.slug))
      throw new Error(`Duplicate project: ${project.slug}`);
    if (project.links.some((link) => !isSafeContentLink(link.href)))
      throw new Error("Unsafe project link");
    if (project.media.some((media) => !media.alt.trim()))
      throw new Error("Media requires alt text");
    const sections = project.caseStudy.sections;
    if (new Set(sections.map((section) => section.id)).size !== sections.length)
      throw new Error("Duplicate case study section");
    bySlug.set(project.slug, project);
  }
  return {
    all: (): readonly Project[] => [...bySlug.values()],
    featured: (): readonly Project[] =>
      [...bySlug.values()].filter((project) => project.featured),
    get: (slug: string): Project | undefined => bySlug.get(slug),
  };
}
export const projects = createProjectRegistry([socIq]);
