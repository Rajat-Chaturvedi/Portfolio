import React from "react";
import styles from "./experience.module.scss";
import { UI_CONTENT } from "../../constants";
import ExpandableList from "../ExpandableList";

interface ExperienceItem {
  id: number;
  company: string;
  title: string;
  startDate: string;
  endDate: string;
  logo: string;
  bullets: ExperienceBullet[];
}

interface ExperienceBullet {
  id: number;
  point: string;
}

const Experience = ({ data }: { data: ExperienceItem[] }) => {
  const validItems = (data || [])
    .map((item) => ({
      ...item,
      bullets: (item?.bullets || []).filter((bullet) => bullet?.point?.trim()),
    }))
    .filter(
      (item) =>
        item?.title?.trim() &&
        item?.company?.trim() &&
        item?.startDate?.trim() &&
        item?.endDate?.trim() &&
        item?.bullets?.length,
    );

  if (!validItems.length) return null;

  return (
    <>
      <div className={styles.container} id="experience">
        <h2 className={styles.heading}>{UI_CONTENT.headings.experience}</h2>

        <ExpandableList as="ol" initialCount={UI_CONTENT.lists.experienceCount} className={styles.cardWrapper}>
          {validItems.map((item) => (
            <li key={item.id} className={styles.cardContainer}>
              <h3 className={styles.title}>
                {item.title}
              </h3>
              <p className={styles.company}>{item.company}</p>
              <p className={styles.dates}>{`${item?.startDate} - ${item?.endDate}`}</p>
              <ul className={styles.bullets}>
                {item?.bullets?.map((bullet) => (
                  <li key={bullet.id}>{bullet.point}</li>
                ))}
              </ul>
            </li>
          ))}
        </ExpandableList>
      </div>
    </>
  );
};

export default Experience;
