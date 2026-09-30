import React from "react";
import styles from "./experience.module.scss";
import { UI_CONTENT } from "../../constants";

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

        <div className={styles.cardWrapper}>
          {validItems.map((item) => (
            <div key={item.id} className={styles.cardContainer}>
              <div className={styles.imgContainer}>
                {item.logo && (
                  <img
                    src={item.logo}
                    alt={item.company}
                    className={styles.logo}
                  />
                )}
              </div>

              <h4 className={styles.title}>
                {item.title} {UI_CONTENT.experience.companyJoiner} {item.company}
              </h4>
              <h5>{`${item?.startDate} - ${item?.endDate}`}</h5>
              <ul className={styles.bullets}>
                {item?.bullets?.map((bullet) => (
                  <li key={bullet.id}>{bullet.point}</li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </>
  );
};

export default Experience;
