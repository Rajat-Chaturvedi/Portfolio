import React from "react";
import styles from "./project.module.scss";
import { ExternalLink } from "lucide-react";
import Link from "next/link";
import { UI_CONTENT } from "../../constants";

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
        {item.image && <img src={item.image} alt={item.name} />}
      </div>

      {/* External link */}
      <Link
        href={item.link}
        target="_blank"
        rel="noopener noreferrer"
        className={styles.externalLink}
        aria-label={`${item.name}: ${UI_CONTENT.project.openLink}`}
        title={`${item.name}: ${UI_CONTENT.project.openLink}`}
      >
        <ExternalLink size={20} strokeWidth={1.75} aria-hidden="true" />
      </Link>

      {/* Title */}
      <p className={styles.title}>{item.name}</p>

      {/* Description + stack */}
      <div className={styles.itemContainer}>
        <p className={styles.description}>{item.description}</p>

        {item.techStack.length > 0 && (
          <>
            <span className={styles.techStackTitle}>
              {UI_CONTENT.project.stack}
            </span>
            <ul
              className={styles.techStack}
              aria-label={UI_CONTENT.project.stack}
            >
              {item.techStack.map((tech, index) => (
                <li key={`${tech}-${index}`} className={styles.techStackName}>
                  {tech}
                </li>
              ))}
            </ul>
          </>
        )}
      </div>
    </div>
  );
};

export default Project;
