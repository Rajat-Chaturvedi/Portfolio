import React from "react";
import Link from "next/link";
import styles from "./writing.module.scss";

interface WritingItem {
  id: number;
  title: string;
  summary: string;
  url: string;
}

const Writing = ({ data }: { data: WritingItem[] }) => {
  const validItems = (data || []).filter(
    (item) => item?.title?.trim() && item?.summary?.trim(),
  );

  if (!validItems.length) return null;

  return (
    <section className={styles.section} id="writing">
      <div className={styles.container}>
        <h2>Writing and Notes</h2>
        <div className={styles.grid}>
          {validItems.map((item) => (
            <article key={item.id} className={styles.card}>
              <h3>{item.title}</h3>
              <p>{item.summary}</p>
              {item.url?.trim() ? (
                <Link href={item.url} target="_blank">
                  Read article
                </Link>
              ) : null}
            </article>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Writing;
