import React from "react";
import styles from "./testimonials.module.scss";
import { UI_CONTENT } from "../../constants";
import ExpandableList from "../ExpandableList";

interface Testimonial {
  id: number;
  name: string;
  role: string;
  company: string;
  quote: string;
}

const Testimonials = ({ data }: { data: Testimonial[] }) => {
  const validItems = (data || []).filter(
    (item) => item?.name?.trim() && item?.role?.trim() && item?.quote?.trim(),
  );

  if (!validItems.length) return null;

  return (
    <section className={styles.section} id="testimonials">
      <div className={styles.container}>
        <h2>{UI_CONTENT.headings.testimonials}</h2>
        <ExpandableList as="div" initialCount={UI_CONTENT.lists.testimonialCount} className={styles.grid}>
          {validItems.map((item) => (
            <article key={item.id} className={styles.card}>
              <p className={styles.quote}>&quot;{item.quote}&quot;</p>
              <p className={styles.author}>{item.name}</p>
              <p className={styles.meta}>
                {item.role}
                {item.company ? `, ${item.company}` : ""}
              </p>
            </article>
          ))}
        </ExpandableList>
      </div>
    </section>
  );
};

export default Testimonials;
