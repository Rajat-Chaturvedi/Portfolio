import React from "react";
import Link from "next/link";
import styles from "./caseStudies.module.scss";
import { UI_CONTENT } from "../../constants";

interface CaseStudy {
  id: number;
  title: string;
  role: string;
  duration: string;
  problem: string;
  solution: string;
  outcome: string;
  stack: string[];
  liveUrl: string;
  repoUrl: string;
}

const CaseStudies = ({ data }: { data: CaseStudy[] }) => {
  const validItems = (data || []).filter(
    (study) =>
      study?.title?.trim() &&
      study?.problem?.trim() &&
      study?.solution?.trim() &&
      study?.outcome?.trim(),
  );

  if (!validItems.length) return null;

  return (
    <section className={styles.section} id="case-studies">
      <div className={styles.container}>
        <h2>{UI_CONTENT.headings.caseStudies}</h2>
        <div className={styles.grid}>
          {validItems.map((study) => (
            <article key={study.id} className={styles.card}>
              <div className={styles.header}>
                <h3>{study.title}</h3>
                <p>
                  {study.role} • {study.duration}
                </p>
              </div>
              <div className={styles.content}>
                <p>
                  <strong>{UI_CONTENT.caseStudies.problem}</strong> {study.problem}
                </p>
                <p>
                  <strong>{UI_CONTENT.caseStudies.solution}</strong> {study.solution}
                </p>
                <p>
                  <strong>{UI_CONTENT.caseStudies.outcome}</strong> {study.outcome}
                </p>
              </div>
              <div className={styles.stack}>
                {study.stack.map((item) => (
                  <span key={item}>{item}</span>
                ))}
              </div>
              <div className={styles.links}>
                <Link href={study.liveUrl} target="_blank">
                  {UI_CONTENT.caseStudies.live}
                </Link>
                <Link href={study.repoUrl} target="_blank">
                  {UI_CONTENT.caseStudies.source}
                </Link>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
};

export default CaseStudies;
