import React from "react";
import styles from "./project.module.scss";

// Define the type for the props
interface SkillProps {
  item: {
    id: string;
    name: string;
    image: string;
    description: string;
    techStack: string[]; // Assuming type is an array of objects with id and name properties
  };
}

const Project: React.FC<SkillProps> = ({ item }) => {
  return (
    <div className={styles.contentContainer}>
      <div className={styles.imgContainer}>
        <img src={item?.image} alt={item?.name} />
      </div>
      <p className={styles.title}>{item?.name}</p>
      <div className={styles.itemContainer}>
        <p className={styles.description}>{item?.description}</p>
        <p className={styles.techStack}>
          <span className={styles.techStackTitle}>Stack :</span>
          {item?.techStack.map((subItem, index) => (
            <span key={index} className={styles.techStackName}>
              #{subItem}
            </span>
          ))}
        </p>
      </div>
    </div>
  );
};

export default Project;
