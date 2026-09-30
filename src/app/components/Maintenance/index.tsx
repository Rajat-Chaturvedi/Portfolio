import { SITE_CONTENT, UI_CONTENT } from "../../constants";
import styles from "./maintenance.module.css";

export default function Maintenance() {
  const content = UI_CONTENT.maintenance;
  return (
    <main className={styles.maintenance}>
      <div className={styles.maintenanceContent}>
        <span className={styles.maintenanceLabel}>{content.label}</span>
        <h1>{content.title}</h1>
        <p>{content.message}</p>
        <a href={`mailto:${SITE_CONTENT.email}`}>
          {content.contactLabel} <span aria-hidden="true">&rarr;</span>
        </a>
      </div>
    </main>
  );
}