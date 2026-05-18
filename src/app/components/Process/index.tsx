import React from "react";
import styles from "./process.module.scss";

interface ProcessItem {
  id: number;
  step: string;
  title: string;
  description: string;
}

const Process = ({ data }: { data: ProcessItem[] }) => {
  const validItems = (data || []).filter(
    (item) =>
      item?.step?.trim() && item?.title?.trim() && item?.description?.trim(),
  );

  if (!validItems.length) return null;

  return (
    <section className={styles.section} id="process">
      <div className={styles.container}>
        <h2>How I Build</h2>
        <div className={styles.grid}>
          {validItems.map((item) => (
            <article key={item.id} className={styles.card}>
              <span>{item.step}</span>
              <h3>{item.title}</h3>
              <p>{item.description}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Process;
