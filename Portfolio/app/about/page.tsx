import type { Metadata } from "next";
import { Container } from "../../components/ui/container";
import { Section } from "../../components/ui/section";
import { profile } from "../../content/about";
export const metadata: Metadata = {
  title: "About",
  description:
    "The intent behind Himanshu’s engineering portfolio: systems thinking, accessible interfaces and evidence-driven technical storytelling.",
};
export default function AboutPage() {
  return (
    <Container>
      <div className="page-intro">
        <p className="eyebrow">About / {profile.name}</p>
        <h1>
          Beyond the
          <br />
          technology list.
        </h1>
        <p className="lead measure">{profile.introduction}</p>
      </div>
      <Section id="perspective" number="01" title="Perspective">
        <p className="section-lead">Engineering, explained.</p>
        <p className="muted measure">
          This portfolio is being built as an interactive engineering editorial:
          a place for the work, the decisions behind it and the evidence that
          supports it.
        </p>
        <ul className="about-focus">
          {profile.focus.map((focus) => (
            <li key={focus}>{focus}</li>
          ))}
        </ul>
      </Section>
      <Section id="biography" number="02" title="The person">
        <div className="pending">
          <span className="eyebrow">
            {profile.biography ? "Biography" : "Content pending"}
          </span>
          <p>
            {profile.biography ??
              "A verified biography, background and experience have not yet been provided. They will be added here without inventing credentials or personal history."}
          </p>
        </div>
      </Section>
      <Section id="next-step" number="03" title="Explore">
        <a className="button-link" href="/work/soc-iq">
          Explore SOC-IQ →
        </a>
        <a className="text-link section-link" href="/#contact">
          Contact information →
        </a>
      </Section>
    </Container>
  );
}
