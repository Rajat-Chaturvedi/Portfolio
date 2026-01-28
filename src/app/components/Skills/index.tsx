import React from "react";
import Skill from "../Skill";
import styles from "./skills.module.scss";
import { SkillItem } from "@/app/utils/skillMapper";

interface SkillsProps {
  data: SkillItem[];
}

const Skills: React.FC<SkillsProps> = ({ data }) => {
  if (!data?.length) return null;

  return (
    <div className={styles.mainContainer} id="skills">
      <h2 className={styles.heading}>Skills</h2>

      <div className={styles.subContainer}>
        <div className={styles.Wrapper}>
          {data.map((item) => (
            <Skill key={item.id} item={item} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Skills;
