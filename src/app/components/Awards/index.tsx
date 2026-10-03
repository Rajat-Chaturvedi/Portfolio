import React from "react";
import styles from "./awards.module.scss";
import { UI_CONTENT } from "../../constants";
import credentials from "../../data/credentials.json";
import ExpandableList from "../ExpandableList";

interface Award {
  id: number;
  title: string;
}

interface AwardsProps {
  data: Award[];
}

const Awards = ({ data }: AwardsProps) => {
  const validItems = (data || []).filter((item) => item?.title?.trim() && !credentials.some(credential => credential.sourceTitle === item.title));

  if (!validItems.length) return null;

  return (
    <div className={styles.masterContainer} id="awards">
      <div className={styles.subContainer}>
        <h2>{UI_CONTENT.headings.awards}</h2>

        <ExpandableList initialCount={UI_CONTENT.lists.awardCount} className={styles.listContainer}>
          {validItems.map((item) => (
            <li key={item.id}>{item.title}</li>
          ))}
        </ExpandableList>
      </div>
    </div>
  );
};

export default Awards;
