import { Container } from "../components/ui/container";
import { Section } from "../components/ui/section";
import { ProjectSummary } from "../components/projects/project-summary";
import { IntelligenceOutline } from "../components/layout/intelligence-outline";
import { projects } from "../lib/content/projects";
import { profile, engineeringPrinciples } from "../content/about";
import { journey } from "../content/journey";
export default function HomePage() {
  return (
    <Container>
      <section className="hero" aria-labelledby="hero-title">
        <div className="hero-topline">
          <p className="eyebrow">Engineering portfolio / {profile.name}</p>
          <span className="eyebrow">Foundation · 01</span>
        </div>
        <h1 id="hero-title">
          Understanding
          <br />
          systems.
          <br />
          <span>Building with intent.</span>
        </h1>
        <div className="hero-bottom">
          <p className="lead measure">{profile.introduction}</p>
          <a className="button-link" href="#selected-work">
            Explore the work <span aria-hidden="true">↓</span>
          </a>
        </div>
        <ul className="focus-list" aria-label="Areas of focus">
          {profile.focus.map((focus) => (
            <li key={focus}>{focus}</li>
          ))}
        </ul>
      </section>
      <Section id="selected-work" number="01" title="Selected work">
        {projects.featured().map((project) => (
          <ProjectSummary key={project.slug} project={project} />
        ))}
        <a className="text-link section-link" href="/work">
          View all work →
        </a>
      </Section>
      <Section id="engineering" number="02" title="Engineering">
        <p className="section-lead">
          Not just what it does.
          <br />
          Why it works.
        </p>
        <p className="muted measure">
          The principles this portfolio is being built around—not a substitute
          for project evidence.
        </p>
        <div className="principles">
          {engineeringPrinciples.map((principle, index) => (
            <article key={principle.title}>
              <span className="eyebrow">0{index + 1}</span>
              <h3>{principle.title}</h3>
              <p className="muted">{principle.description}</p>
            </article>
          ))}
        </div>
      </Section>
      <Section
        id="interactive-architecture"
        number="03"
        title="Interactive architecture"
      >
        <IntelligenceOutline />
      </Section>
      <Section id="journey" number="04" title="Journey">
        {journey.length ? (
          <ol className="journey-list">
            {journey.map((entry) => (
              <li key={entry.id}>
                <h3>{entry.title}</h3>
                <p>
                  {entry.start}
                  {entry.end ? ` — ${entry.end}` : ""} · {entry.kind}
                </p>
                <p>
                  {entry.evidence.state === "verified"
                    ? entry.evidence.text
                    : entry.evidence.note}
                </p>
              </li>
            ))}
          </ol>
        ) : (
          <div className="pending">
            <span className="eyebrow">Content pending</span>
            <h3>The path behind the work.</h3>
            <p className="muted measure">
              Verified experience, achievements, certifications and technical
              writing will appear here. No timeline or credentials have been
              supplied yet.
            </p>
          </div>
        )}
      </Section>
      <Section id="about" number="05" title="About">
        <p className="section-lead">{profile.name}.</p>
        <p className="muted measure">
          {profile.biography ??
            "Personal biography pending. This portfolio’s intended focus is software engineering, cybersecurity, frontend craft and systems thinking."}
        </p>
        <a className="text-link" href="/about">
          About this portfolio →
        </a>
      </Section>
      <Section id="contact" number="06" title="Contact">
        <p className="section-lead">Start a conversation.</p>
        {profile.contact ? (
          <a className="button-link" href={profile.contact.href}>
            {profile.contact.label} ↗
          </a>
        ) : (
          <p className="muted measure">
            Contact details are pending publication. No unverified email, social
            profile or availability claim is shown.
          </p>
        )}
      </Section>
    </Container>
  );
}
