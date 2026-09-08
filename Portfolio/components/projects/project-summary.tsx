import type { Project } from "../../lib/content/types";
export function ProjectSummary({ project }: { project: Project }) {
  return (
    <article
      className="project-summary"
      aria-labelledby={`project-${project.slug}`}
    >
      <div className="project-index">
        <span className="eyebrow">
          {project.featured ? "Flagship project" : "Project"}
        </span>
        <span className="status">
          {project.caseStudy.status === "outline"
            ? "Case study · outline"
            : "Case study · published"}
        </span>
      </div>
      <div>
        <h3 id={`project-${project.slug}`}>
          <a className="project-title" href={`/work/${project.slug}`}>
            {project.title}
            <span aria-hidden="true">↗</span>
          </a>
        </h3>
        <p className="measure muted">{project.description}</p>
        <a className="text-link" href={`/work/${project.slug}`}>
          Explore {project.title} <span aria-hidden="true">→</span>
        </a>
      </div>
    </article>
  );
}
