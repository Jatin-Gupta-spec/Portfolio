import type { Evidence, Project } from "../../../lib/content/types";
const pending = (note: string): Evidence => ({ state: "pending", note });
export const socIq = {
  title: "SOC-IQ",
  slug: "soc-iq",
  description:
    "The flagship project in this portfolio. A structured case study is being prepared; implementation details and supporting evidence have not yet been supplied.",
  role: null,
  technologies: [],
  year: null,
  status: "unverified",
  featured: true,
  links: [],
  problem: pending(
    "Add the verified problem, intended audience and constraints.",
  ),
  solution: pending(
    "Document the product and implemented capabilities from source evidence.",
  ),
  architecture: pending(
    "Add a source-backed architecture diagram and explain the system boundaries.",
  ),
  results: pending(
    "Add reproducible outcomes only when supporting evidence is available. No metrics are claimed.",
  ),
  caseStudy: {
    status: "outline",
    sections: [
      {
        id: "ioc-analysis",
        title: "IOC analysis",
        evidence: pending(
          "Document supported indicator types, inputs and validation.",
        ),
      },
      {
        id: "threat-intelligence",
        title: "Threat intelligence",
        evidence: pending(
          "Verify intelligence sources, integrations and data provenance.",
        ),
      },
      {
        id: "risk-scoring",
        title: "Risk scoring",
        evidence: pending(
          "Explain the actual scoring logic, uncertainty and limitations.",
        ),
      },
      {
        id: "investigation",
        title: "Investigation workflow",
        evidence: pending(
          "Show the implemented investigation path and evidence handling.",
        ),
      },
      {
        id: "frontend",
        title: "Frontend engineering",
        evidence: pending(
          "Add verified interface decisions, accessibility and state handling.",
        ),
      },
      {
        id: "runtime",
        title: "Runtime & system architecture",
        evidence: pending(
          "Explain real services, execution boundaries and failure behavior.",
        ),
      },
      {
        id: "testing",
        title: "Testing",
        evidence: pending(
          "Attach reproducible test commands and actual results.",
        ),
      },
      {
        id: "packaging",
        title: "Packaging",
        evidence: pending(
          "Document supported installation, distribution and reproducibility.",
        ),
      },
      {
        id: "production",
        title: "Production engineering",
        evidence: pending(
          "Verify deployment, security, monitoring and operational trade-offs.",
        ),
      },
    ],
  },
  media: [],
} satisfies Project;
