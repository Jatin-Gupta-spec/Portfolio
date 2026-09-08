import type { Evidence, Project } from "../../lib/content/types";
import { Container } from "../ui/container";
import { Section } from "../ui/section";
function EvidenceText({ evidence }: { evidence: Evidence }) {
  return evidence.state === "verified" ? (
    <div>
      <p>{evidence.text}</p>
      <ul className="source-list">
        {evidence.sources.map((source) => (
          <li key={source}>{source}</li>
        ))}
      </ul>
    </div>
  ) : (
    <div className="pending">
      <span className="eyebrow">Evidence pending</span>
      <p>{evidence.note}</p>
    </div>
  );
}
export function ProjectDetail({ project }: { project: Project }) {
  const foundations = [
    { id: "problem", title: "The problem", evidence: project.problem },
    { id: "product", title: "The product", evidence: project.solution },
    {
      id: "architecture",
      title: "System architecture",
      evidence: project.architecture,
    },
    { id: "results", title: "Results & evidence", evidence: project.results },
  ];
  return (
    <Container>
      <div className="page-intro">
        <a className="text-link" href="/work">
          ← All work
        </a>
        <p className="eyebrow">
          Flagship /{" "}
          {project.caseStudy.status === "outline"
            ? "Case study outline"
            : "Case study"}
        </p>
        <h1>{project.title}</h1>
        <p className="lead measure">{project.description}</p>
        {project.caseStudy.status === "outline" && (
          <p className="notice">
            This is a content scaffold, not a claim of completed capabilities.
            All technical sections below await verification.
          </p>
        )}
      </div>
      <dl className="project-metadata">
        <div>
          <dt>Role</dt>
          <dd>{project.role ?? "To be verified"}</dd>
        </div>
        <div>
          <dt>Year</dt>
          <dd>{project.year ?? "To be verified"}</dd>
        </div>
        <div>
          <dt>Project status</dt>
          <dd>
            {project.status === "unverified" ? "Unverified" : project.status}
          </dd>
        </div>
        <div>
          <dt>Technologies</dt>
          <dd>
            {project.technologies.length
              ? project.technologies.join(", ")
              : "To be verified"}
          </dd>
        </div>
      </dl>
      {project.links.length > 0 && (
        <nav aria-label="Project resources">
          <ul className="navigation">
            {project.links.map((link) => (
              <li key={link.href}>
                <a href={link.href}>{link.label}</a>
              </li>
            ))}
          </ul>
        </nav>
      )}
      {foundations.map((section, index) => (
        <Section
          key={section.id}
          id={section.id}
          number={`0${index + 1}`}
          title={section.title}
        >
          <EvidenceText evidence={section.evidence} />
        </Section>
      ))}
      <Section id="technical-outline" number="05" title="Technical evidence">
        <p className="muted measure">
          The planned reading structure. Expand a topic to see the evidence
          needed for the case study.
        </p>
        <div className="outline-list">
          {project.caseStudy.sections.map((section) => (
            <details key={section.id} id={section.id}>
              <summary>{section.title}</summary>
              <EvidenceText evidence={section.evidence} />
            </details>
          ))}
        </div>
      </Section>
    </Container>
  );
}
