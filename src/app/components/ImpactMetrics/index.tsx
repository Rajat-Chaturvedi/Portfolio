import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import { UI_CONTENT } from "../../constants";
import type { ImpactMetric } from "../../types/impactMetric";
import ExpandableList from "../ExpandableList";
import styles from "./impactMetrics.module.scss";

const ImpactMetrics = ({ data }: { data: ImpactMetric[] }) => {
  const featured = data.filter((story) => story.featured);

  return (
    <section className={styles.section} id="impact-metrics">
      <div className={styles.container}>
        <div className={styles.heading}>
          <div>
            <p className={styles.eyebrow}>{UI_CONTENT.impact.sectionEyebrow}</p>
            <h2>{UI_CONTENT.impact.sectionTitle}</h2>
            <p className={styles.intro}>{UI_CONTENT.impact.sectionDescription}</p>
          </div>
          <Link className={styles.detailLink} href="/impact">
            {UI_CONTENT.impact.viewDetails} <ArrowUpRight size={18} aria-hidden="true" />
          </Link>
        </div>
        <ExpandableList
          as="div"
          initialCount={UI_CONTENT.lists.impactMetricCount}
          className={styles.grid}
        >
          {featured.map((story) => (
            <Link
              key={story.slug}
              href={`/impact#${story.slug}`}
              className={styles.card}
            >
              <span className={styles.value}>{story.value}</span>
              <span className={styles.label}>{story.label}</span>
              <span className={styles.note}>{story.context}</span>
              <ArrowUpRight
                className={styles.cardArrow}
                size={18}
                aria-hidden="true"
              />
            </Link>
          ))}
        </ExpandableList>
      </div>
    </section>
  );
};

export default ImpactMetrics;
