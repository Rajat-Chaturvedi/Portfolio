import React from "react";
import styles from "./projects.module.scss";
import Project from "../Project";

type ProjectType = {
  id: number;
  name: string;
  image: string;
  description: string;
  link: string;
  techStack: string[];
};

interface ProjectsProps {
  projects: ProjectType[];
}

const Projects = ({ projects }: ProjectsProps) => {
  const validProjects = (projects || []).filter(
    (item) =>
      item?.name?.trim() && item?.description?.trim() && item?.link?.trim(),
  );

  if (!validProjects.length) return null;

  return (
    <section className={styles.mainContainer} id="projects">
      <div className={styles.contentContainer}>
        <h2>Projects</h2>

        <div className={styles.Wrapper}>
          {validProjects.map((item) => (
            <Project key={item.id} item={item} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
