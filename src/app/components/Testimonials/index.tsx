import React from "react";
import styles from "./testimonials.module.scss";

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
        <h2>Testimonials</h2>
        <div className={styles.grid}>
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
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
