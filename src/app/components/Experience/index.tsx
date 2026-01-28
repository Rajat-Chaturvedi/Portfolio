import React from "react";
import styles from "./experience.module.scss";

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
  if (!data || data.length === 0) return null;

  return (
    <>
      <div className={styles.container} id="experience">
        <h2 className={styles.heading}>Experience</h2>

        <div className={styles.cardWrapper}>
          {data.map((item) => (
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
                {item.title} at {item.company}
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
