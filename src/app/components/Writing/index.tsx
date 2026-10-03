import React from "react";
import Link from "next/link";
import styles from "./writing.module.scss";
import { UI_CONTENT } from "../../constants";
import { ArrowRight, ExternalLink } from "lucide-react";
import type { WritingItem } from "../../utils/writingsMapper";
import { writingDestination } from "../../utils/writingDestination";
import ExpandableList from "../ExpandableList";

const Writing = ({ data, standalone = false }: { data: WritingItem[]; standalone?: boolean }) => {
  const validItems = (data || []).filter(
    (item) => item?.title?.trim() && item?.summary?.trim() && writingDestination(item.url),
  );

  if (!validItems.length && !standalone) return null;
  const Heading = standalone ? "h1" : "h2";

  return (
    <section className={`${styles.section} ${standalone ? styles.standalone : ""}`} id="writing">
      <div className={styles.container}>
        <div className={styles.heading}>
          <Heading>{UI_CONTENT.headings.writing}</Heading>
          {!standalone && <Link href="/writing">{UI_CONTENT.writing.viewAll}<ArrowRight size={18} /></Link>}
        </div>
        {!validItems.length && <p className={styles.empty}>{UI_CONTENT.writing.empty}</p>}
        <ExpandableList initialCount={UI_CONTENT.lists.writingCount} className={styles.list}>
          {validItems.map((item) => {
            const destination = writingDestination(item.url)!;
            return (
              <li key={item.id}>
                <Link className={styles.row} href={destination.href}
                  target={destination.external ? "_blank" : undefined}
                  rel={destination.external ? "noopener noreferrer" : undefined}
                  aria-label={`${item.title}: ${UI_CONTENT.writing.readArticle}${destination.external ? ` (${UI_CONTENT.writing.external})` : ""}`}>
                  <div>
                    {item.publisher && <span className={styles.publisher}>{item.publisher}</span>}
                    <h3>{item.title}</h3>
                    <p>{item.summary}</p>
                  </div>
                  {destination.external ? <ExternalLink size={20} aria-hidden="true" /> : <ArrowRight size={20} aria-hidden="true" />}
                </Link>
              </li>
            );
          })}
        </ExpandableList>
      </div>
    </section>
  );
};

export default Writing;
