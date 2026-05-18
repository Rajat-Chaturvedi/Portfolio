import React from "react";
import Link from "next/link";
import styles from "./cta.module.scss";

interface CTAData {
  headline: string;
  subheadline: string;
  email: string;
  resumeUrl: string;
  calendarUrl: string;
  allSlotsUrl: string;
}

const CTA = ({ data }: { data: CTAData }) => {
  const hasContent = Boolean(
    data?.headline?.trim() &&
    (data?.email?.trim() ||
      data?.resumeUrl?.trim() ||
      data?.calendarUrl?.trim() ||
      data?.allSlotsUrl?.trim()),
  );

  if (!hasContent) return null;

  return (
    <section className={styles.section} id="hire-me">
      <div className={styles.container}>
        <h2>{data.headline}</h2>
        {data.subheadline?.trim() ? <p>{data.subheadline}</p> : null}
        <div className={styles.actions}>
          {data.email?.trim() ? (
            <Link href={`mailto:${data.email}`}>Email Me</Link>
          ) : null}
          {data.resumeUrl?.trim() ? (
            <Link href={data.resumeUrl} target="_blank">
              View Resume
            </Link>
          ) : null}
          {data.calendarUrl?.trim() ? (
            <Link href={data.calendarUrl} target="_blank">
              Book a Call
            </Link>
          ) : null}
          {data.allSlotsUrl?.trim() && data.allSlotsUrl !== data.calendarUrl ? (
            <Link href={data.allSlotsUrl} target="_blank">
              View all slots
            </Link>
          ) : null}
        </div>
      </div>
    </section>
  );
};

export default CTA;
