import React from "react";
import styles from "./projects.module.scss";
import Project from "../Project";
import { UI_CONTENT } from "../../constants";
import ExpandableList from "../ExpandableList";

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
        <h2>{UI_CONTENT.headings.projects}</h2>

        <ExpandableList as="div" initialCount={UI_CONTENT.lists.projectCount} rows={UI_CONTENT.lists.projectRows} className={styles.Wrapper}>
          {validProjects.map((item) => (
            <Project key={item.id} item={item} />
          ))}
        </ExpandableList>
      </div>
    </section>
  );
};

export default Projects;
