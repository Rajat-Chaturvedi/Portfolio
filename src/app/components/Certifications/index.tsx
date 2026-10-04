import Link from "next/link";
import { ArrowRight, ExternalLink, GraduationCap, Award } from "lucide-react";
import { credentials, credentialDestination } from "../../utils/credentials";
import { UI_CONTENT } from "../../constants";
import styles from "./certifications.module.css";
import ExpandableList from "../ExpandableList";

export default function Certifications({ standalone = false }: { standalone?: boolean }) {
  const content = UI_CONTENT.credentials;
  const Heading = standalone ? "h1" : "h2";
  return (
    <section id="certifications" className={`${styles.section} ${standalone ? styles.standalone : ""}`}>
      <div className={styles.inner}>
        <div className={styles.heading}>
          <Heading>{content.title}</Heading>
          {!standalone && <Link href="/certifications">{content.viewAll}<ArrowRight size={18} /></Link>}
        </div>
        <ExpandableList initialCount={UI_CONTENT.lists.credentialCount} className={styles.list}>
          {credentials.map(item => {
            const destination = credentialDestination(item);
            const row = <>
              <div className={styles.icon}>{item.category === "education" ? <GraduationCap size={24} aria-hidden="true" /> : <Award size={24} aria-hidden="true" />}</div>
              <div>
                <span className={styles.category}>{item.category === "education" ? content.education : item.category === "workshop" ? content.workshop : content.certification}</span>
                <h3>{item.title}</h3>
                {item.issuer && <p className={styles.issuer}>{item.issuer}</p>}
                <p>{item.description}</p>
              </div>
              {destination && <span className={styles.actionIcon}>{destination.external ? <ExternalLink size={18} aria-hidden="true" /> : <ArrowRight size={18} aria-hidden="true" />}</span>}
            </>;
            return <li key={item.id} id={`credential-${item.id}`}>
              {destination ? <Link
                href={destination.href}
                className={`${styles.row} ${styles.linkedRow}`}
                target={destination.external ? "_blank" : undefined}
                rel={destination.external ? "noopener noreferrer" : undefined}
                aria-label={`${item.title}: ${destination.external ? content.openExternal : content.viewImage}`}
              >{row}</Link> : <div className={styles.row}>{row}</div>}
            </li>;
          })}
        </ExpandableList>
      </div>
    </section>
  );
}