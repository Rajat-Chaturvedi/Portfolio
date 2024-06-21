"use client";

import React, { useEffect, useRef, useState } from "react";
import styles from "./about.module.scss";
import { Cursor, useTypewriter } from "react-simple-typewriter";
import Lottie from "lottie-web";
import { Call, Reading } from "../svgs";

const About = () => {
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
  const [margin, setMargin] = useState(true);

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
      setMargin(false);
    }
  }, [animationData]);

  return (
    <section className={styles.section1}>
      <div className={styles.pannelContainer} id="about">
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
                <button className={styles.btnLearn}>
                  <span>
                    <Reading
                      style={{ color: "#048848" }}
                      width={32}
                      height={24}
                    />
                    Learn More
                  </span>
                </button>
                <button className={styles.btnContact}>
                  <span>
                    <Call style={{ color: "#6f10a2" }} width={32} height={24} />
                    Contact Me
                  </span>
                </button>
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

export default About;
