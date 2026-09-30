import React from "react";
import styles from "./nowSection.module.scss";
import { UI_CONTENT } from "../../constants";

interface NowContent {
  title: string;
  focus: string;
  learning: string;
  building: string;
  availability: string;
}

const NowSection = ({ data }: { data: NowContent }) => {
  const hasContent = Boolean(
    data?.title?.trim() &&
    (data?.focus?.trim() ||
      data?.learning?.trim() ||
      data?.building?.trim() ||
      data?.availability?.trim()),
  );

  if (!hasContent) return null;

  const cards = [
    { title: UI_CONTENT.now.focus, value: data.focus },
    { title: UI_CONTENT.now.learning, value: data.learning },
    { title: UI_CONTENT.now.building, value: data.building },
    { title: UI_CONTENT.now.availability, value: data.availability },
  ].filter((card) => card.value?.trim());

  return (
    <section className={styles.section} id="now">
      <div className={styles.container}>
        <h2>{data.title}</h2>
        <div className={styles.grid}>
          {cards.map((card) => (
            <article key={card.title}>
              <h3>{card.title}</h3>
              <p>{card.value}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
};

export default NowSection;
