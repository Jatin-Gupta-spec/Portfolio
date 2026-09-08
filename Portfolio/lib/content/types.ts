/** Pending evidence is explicit: an empty field must never imply a verified claim. */
export type Evidence =
  | { state: "pending"; note: string }
  | { state: "verified"; text: string; sources: readonly string[] };

export type ProjectLink = { label: string; href: string };
export type ProjectMedia = { src: string; alt: string; caption?: string };
export type CaseStudySection = {
  id: string;
  title: string;
  evidence: Evidence;
};
export type Project = {
  title: string;
  slug: string;
  description: string;
  role: string | null;
  technologies: readonly string[];
  year: number | null;
  status: "unverified" | "in-progress" | "shipped" | "archived";
  featured: boolean;
  links: readonly ProjectLink[];
  problem: Evidence;
  solution: Evidence;
  architecture: Evidence;
  results: Evidence;
  caseStudy: {
    status: "outline" | "published";
    sections: readonly CaseStudySection[];
  };
  media: readonly ProjectMedia[];
};

/** Shared chronology for future roles, recognition and writing; no placeholder pages. */
export type JourneyEntry = {
  id: string;
  kind: "internship" | "job" | "achievement" | "certification" | "writing";
  title: string;
  organization?: string;
  start: string;
  end?: string;
  evidence: Evidence;
  link?: ProjectLink;
};
