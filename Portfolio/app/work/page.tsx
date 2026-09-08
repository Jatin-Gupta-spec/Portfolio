import type { Metadata } from "next";
import { Container } from "../../components/ui/container";
import { ProjectSummary } from "../../components/projects/project-summary";
import { projects } from "../../lib/content/projects";
export const metadata: Metadata = {
  title: "Work",
  description:
    "Engineering projects and source-backed case studies. SOC-IQ is the flagship; its technical evidence is being prepared.",
};
export default function WorkPage() {
  const entries = projects.all();
  return (
    <Container>
      <div className="page-intro">
        <p className="eyebrow">Work / Project index</p>
        <h1>
          Built to be
          <br />
          understood.
        </h1>
        <p className="lead measure">
          Projects are the proof. The reasoning behind them matters just as much
          as the result.
        </p>
      </div>
      <section aria-labelledby="work-heading" className="work-list">
        <h2 id="work-heading">
          Projects{" "}
          <span className="muted">
            / {String(entries.length).padStart(2, "0")}
          </span>
        </h2>
        {entries.length ? (
          entries.map((project) => (
            <ProjectSummary key={project.slug} project={project} />
          ))
        ) : (
          <p>Verified project entries will appear here.</p>
        )}
      </section>
    </Container>
  );
}
