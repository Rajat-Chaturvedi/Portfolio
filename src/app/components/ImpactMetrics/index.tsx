import React from "react";
import styles from "./impactMetrics.module.scss";

interface Metric {
  id: number;
  value: string;
  label: string;
  note: string;
}

const ImpactMetrics = ({ data }: { data: Metric[] }) => {
  const validItems = (data || []).filter(
    (metric) => metric?.value?.trim() && metric?.label?.trim(),
  );

  if (!validItems.length) return null;

  return (
    <section className={styles.section} id="impact-metrics">
      <div className={styles.container}>
        {validItems.map((metric) => (
          <article key={metric.id} className={styles.card}>
            <p className={styles.value}>{metric.value}</p>
            <h3>{metric.label}</h3>
            <p className={styles.note}>{metric.note}</p>
          </article>
        ))}
      </div>
    </section>
  );
};

export default ImpactMetrics;
