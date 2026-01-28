import React from "react";
import styles from "./project.module.scss";
import { Arrow } from "../svgs";
import Link from "next/link";
import Image from "next/image";

interface ProjectProps {
  item: {
    id: number;
    name: string;
    image: string; // full Strapi URL
    description: string;
    link: string;
    techStack: string[];
  };
}

const Project: React.FC<ProjectProps> = ({ item }) => {
  return (
    <div className={styles.contentContainer}>
      {/* Image */}
      <div className={styles.imgContainer}>
        <img src={item?.image} alt={item?.name} />
      </div>

      {/* External link */}
      <Link
        href={item.link}
        target="_blank"
        rel="noopener noreferrer"
        className={styles.arrowWrapper}
      >
        <span>
          <Arrow
            styles={{ color: "#4c4c4c", backgroundColor: "#4c4c4c" }}
            className={styles.Arrow}
          />
        </span>
      </Link>

      {/* Title */}
      <p className={styles.title}>{item.name}</p>

      {/* Description + stack */}
      <div className={styles.itemContainer}>
        <p className={styles.description}>{item.description}</p>

        <p className={styles.techStack}>
          <span className={styles.techStackTitle}>Stack :</span>
          {item.techStack.map((tech, index) => (
            <span key={index} className={styles.techStackName}>
              #{tech}
            </span>
          ))}
        </p>
      </div>
    </div>
  );
};

export default Project;
