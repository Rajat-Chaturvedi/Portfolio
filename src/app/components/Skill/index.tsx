import React from "react";
import styles from "./skill.module.scss";

// Define the type for the props
interface SkillProps {
  item: {
    id: string;
    skill: string;
    type: { image: string; subType: string }[]; // Assuming type is an array of objects with id and name properties
  };
}

const Skill: React.FC<SkillProps> = ({ item }) => {
  return (
    <div className={styles.contentContainer}>
      <p>{item?.skill}</p>
      <div className={styles.imageWrapper}>
        {item?.type.map((subItem, index) => (
          <div key={index} className={styles.itemContainer}>
            <div className={styles.imgContainer}>
              <img src={subItem?.image} alt={subItem?.subType} />
            </div>
            <h6>{subItem?.subType}</h6>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Skill;
