import React from "react";
import styles from "./awards.module.scss";

const Awards = () => {
  const awards = [
    "Awarded Performer of the Month for February 2024 at Quara Digital Pvt Ltd.",
    "Holds a Bachelor of Technology degree (Honors) in B.Tech.",
    "Secured 1st Position in the Robotics workshop/competition held at the district level by IIT Kharagpur.",
    "Participated in a Robotics competition at the National Level organized by IIT Mumbai.",
    "Attended a Certified WAC Workshop on IC Engine and Design at IIT Roorkee.",
  ];
  return (
    <div className={styles.masterContainer} id='award'>
      <div className={styles.subContainer}>
        <h2>Awards</h2>
        <ul className={styles.listContainer}>
            {awards.map((item,index)=>(
                <li key={index}>{item}</li>
            ))}
        </ul>
      </div>
    </div>
  );
};

export default Awards;
