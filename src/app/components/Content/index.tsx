"use client";

import React, { useEffect, useRef } from "react";
import styles from "./content.module.scss";
import { Cursor, useTypewriter } from "react-simple-typewriter";
import Lottie from "lottie-web";

const DynamicContent = () => {
  const animationData = require("../../../../public/assets/projects.json");
  const [text, count] = useTypewriter({
    words: [
      "Hi, I am Rajat Chaturvedi.",
      "I am a Software Engineer.",
      "Passionate about crafting engaging user interfaces and developing dynamic websites.",
    ],
    loop: true,
    delaySpeed: 2000,
  });

  const container = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (container.current) {
      Lottie.loadAnimation({
        container: container.current,
        renderer: "svg",
        loop: true,
        autoplay: true,
        animationData: animationData,
      });
    }
  }, [animationData]);

  return (
    <section className={styles.section1}>
      <div className={styles.pannelContainer}>
        {/* left section */}
        <div className={styles.leftPannel}>
          <div className={styles.leftContentWrapper}>
            <div>
              <h1 className={styles.A}>
                <span>{text}</span>
                <Cursor />
              </h1>
              <p className={styles.B}>
                I am a FrontEnd Developer eager to gain full-stack experience
                and enthusiastic about exploring the full potential of the
                Next.js framework.
              </p>
              <div className={styles.buttonWrapper}>
                <button className={styles.btnLearn}>Learn More</button>
                <button className={styles.btnContact}> Contact Me</button>
              </div>
            </div>
          </div>
        </div>
        {/* right section */}
        <div className={styles.righPanel}>
          <div ref={container} className={styles.animationContainer}></div>
          <div className={styles.rightPanelContent}>
            <h1 className={styles.trend}>Coding | Learnings | LifeStyles</h1>
            <p className={styles.description}>
              3 Years of Experience | 8 Projects completed
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default DynamicContent;
