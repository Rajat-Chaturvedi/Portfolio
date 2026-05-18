import React from "react";
import Link from "next/link";
import styles from "./caseStudies.module.scss";

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
        <h2>Featured Case Studies</h2>
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
                  <strong>Problem:</strong> {study.problem}
                </p>
                <p>
                  <strong>Solution:</strong> {study.solution}
                </p>
                <p>
                  <strong>Outcome:</strong> {study.outcome}
                </p>
              </div>
              <div className={styles.stack}>
                {study.stack.map((item) => (
                  <span key={item}>{item}</span>
                ))}
              </div>
              <div className={styles.links}>
                <Link href={study.liveUrl} target="_blank">
                  Live
                </Link>
                <Link href={study.repoUrl} target="_blank">
                  Source
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
