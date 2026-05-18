import React from "react";
import styles from "./awards.module.scss";

interface Award {
  id: number;
  title: string;
}

interface AwardsProps {
  data: Award[];
}

const Awards = ({ data }: AwardsProps) => {
  const validItems = (data || []).filter((item) => item?.title?.trim());

  if (!validItems.length) return null;

  return (
    <div className={styles.masterContainer} id="awards">
      <div className={styles.subContainer}>
        <h2>Awards</h2>

        <ul className={styles.listContainer}>
          {validItems.map((item) => (
            <li key={item.id}>{item.title}</li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default Awards;
