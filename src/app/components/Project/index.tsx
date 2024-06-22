import React from "react";
import styles from "./project.module.scss";
import { Arrow } from "../svgs";
import Link from "next/link";

// Define the type for the props
interface SkillProps {
  item: {
    id: string;
    name: string;
    image: string;
    description: string;
    link: string;
    techStack: string[]; // Assuming type is an array of objects with id and name properties
  };
}

const Project: React.FC<SkillProps> = ({ item }) => {
  return (
    <div className={styles.contentContainer}>
      <div className={styles.imgContainer}>
        <img src={item?.image} alt={item?.name} />
      </div>
      <Link href={item?.link} passHref className={styles.arrowWrapper}>
        <span>
          <Arrow
            styles={{ color: "#4c4c4c", backgroundColor: "#4c4c4c" }}
            // width={34}
            // height={20}
            className={styles.Arrow}
          />
        </span>
      </Link>
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
