import type { Metadata } from "next";
import Link from "next/link";
import { ArrowLeft, ArrowUpRight } from "lucide-react";
import { getImpactMetrics } from "../utils/api/impactMetrics";
import { SITE_CONTENT, UI_CONTENT } from "../constants";
import ImpactVisualization from "./ImpactVisualization";
import styles from "./impact.module.css";

export const metadata: Metadata = {
  title: `${UI_CONTENT.impact.pageTitle} | ${SITE_CONTENT.name}`,
  description: UI_CONTENT.impact.pageDescription,
};

export default async function ImpactPage() {
  const stories = await getImpactMetrics();

  return (
    <main className={styles.page}>
      <div className={styles.inner}>
        <Link href="/#impact-metrics" className={styles.back}>
          <ArrowLeft size={18} aria-hidden="true" />
          {UI_CONTENT.impact.back}
        </Link>
        <header className={styles.heading}>
          <p className={styles.eyebrow}>{UI_CONTENT.impact.pageEyebrow}</p>
          <h1>{UI_CONTENT.impact.pageTitle}</h1>
          <p>{UI_CONTENT.impact.pageDescription}</p>
        </header>

        <div className={styles.stories}>
          {stories.map((story) => (
            <article id={story.slug} key={story.slug} className={styles.story}>
              <div className={styles.metric}>
                <span>{story.value}</span>
                <span>{story.label}</span>
              </div>
              <div className={styles.storyBody}>
                <p className={styles.project}>{story.project}</p>
                {story.company && <h2>{story.company}</h2>}
                <p className={styles.detail}>{story.detail}</p>
                <p className={styles.measurement}>
                  <strong>{UI_CONTENT.impact.measuredBy}</strong> {story.measurement}
                </p>
                <Link href={story.href} className={styles.relatedLink}>
                  {story.href.startsWith("/projects/")
                    ? UI_CONTENT.impact.viewProject
                    : UI_CONTENT.impact.viewExperience}
                  <ArrowUpRight size={17} aria-hidden="true" />
                </Link>
                <ImpactVisualization
                  slug={story.slug}
                  visualization={story.visualization}
                />
              </div>
            </article>
          ))}
        </div>

        <p className={styles.sourceNote}>
          {UI_CONTENT.impact.sourceNote}
        </p>
      </div>
    </main>
  );
}
