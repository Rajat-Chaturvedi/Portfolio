import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { ArrowLeft, ArrowRight, ExternalLink } from "lucide-react";
import { getProjects } from "../../utils/api/projects";
import { projectSlug } from "../../utils/projectSlug";
import { SITE_CONTENT, UI_CONTENT } from "../../constants";
import styles from "./projectDetail.module.css";

type Props = { params: { slug: string } };

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const project = (await getProjects()).find(item => projectSlug(item.name) === params.slug);
  return project ? { title: `${project.name} | ${SITE_CONTENT.name}`, description: project.description } : {};
}

export default async function ProjectDetail({ params }: Props) {
  const projects = await getProjects();
  const index = projects.findIndex(item => projectSlug(item.name) === params.slug);
  if (index < 0) notFound();
  const project = projects[index];
  const next = projects[(index + 1) % projects.length];
  const content = UI_CONTENT.project;

  return (
    <main className={styles.page}>
      <div className={styles.inner}>
        <Link href="/#projects" className={styles.back}><ArrowLeft size={18} />{content.back}</Link>
        <div className={styles.heading}>
          <h1>{project.name}</h1>
          {project.link && <a href={project.link} target="_blank" rel="noopener noreferrer" className={styles.visit}>{content.visit}<ExternalLink size={18} /></a>}
        </div>
        {project.image && <img className={styles.preview} src={project.image} alt={project.name} />}
        <div className={styles.body}>
          <div className={styles.story}>
            <section><h2>{content.overview}</h2><p>{project.description}</p></section>
            {([
              [content.role, project.role], [content.problem, project.problem],
              [content.solution, project.solution], [content.outcome, project.outcome],
            ] as const).filter(([, value]) => value?.trim()).map(([label, value]) => (
              <section key={label}><h2>{label}</h2><p>{value}</p></section>
            ))}
          </div>
          {project.techStack.length > 0 && <aside><h2>{content.stack}</h2><ul className={styles.tags}>{project.techStack.map((tech: string, techIndex: number) => <li key={`${tech}-${techIndex}`}>{tech}</li>)}</ul></aside>}
        </div>
        {projects.length > 1 && <Link className={styles.next} href={`/projects/${projectSlug(next.name)}`}><span>{content.next}<strong>{next.name}</strong></span><ArrowRight size={20} /></Link>}
      </div>
    </main>
  );
}