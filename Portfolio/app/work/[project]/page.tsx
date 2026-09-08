import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { projects } from "../../../lib/content/projects";
import { ProjectDetail } from "../../../components/projects/project-detail";
type Props = { params: Promise<{ project: string }> };
export function generateStaticParams() {
  return projects.all().map((project) => ({ project: project.slug }));
}
export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const project = projects.get((await params).project);
  if (!project)
    return {
      title: "Project not found",
      robots: { index: false, follow: false },
    };
  return { title: project.title, description: project.description };
}
export default async function ProjectPage({ params }: Props) {
  const project = projects.get((await params).project);
  if (!project) notFound();
  return <ProjectDetail project={project} />;
}
