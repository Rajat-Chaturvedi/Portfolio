import React from "react";
import styles from "./skill.module.scss";
import { SkillItem } from "@/app/utils/skillMapper";

interface SkillProps {
  item: SkillItem;
}

const Skill: React.FC<SkillProps> = ({ item }) => {
  return (
    <div className={styles.contentContainer}>
      <p>{item.name}</p>

      <div className={styles.imageWrapper}>
        {item.types.map((type) => (
          <div key={type.id} className={styles.itemContainer}>
            {type.icon && (
              <div className={styles.imgContainer}>
                <img src={type.icon.url} alt={type.subType} loading="lazy" />
              </div>
            )}
            <h6>{type.subType}</h6>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Skill;
