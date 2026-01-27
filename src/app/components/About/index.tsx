"use client";

import React, { useEffect, useRef, useState } from "react";
import styles from "./about.module.scss";
import { Cursor, useTypewriter } from "react-simple-typewriter";
import Lottie from "lottie-web";
import { Call, Reading } from "../svgs";
import Link from "next/link";

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
                Full-Stack Developer with a strong focus on Front-End
                Development and 4+ years of hands-on experience. I have
                successfully led 10+ projects, achieving a 30% boost in user
                interaction, 20% reduction in page load times, and a 25%
                increase in user satisfaction. My passion lies in building
                user-centric web applications that deliver seamless, engaging,
                and visually appealing experiences.
              </p>
              <p className={styles.B}>
                Proficient in the entire development lifecycle, I excel at
                transforming wireframes into functional, high-performance web
                pages with SEO-optimized code and cross-browser compatibility.
                While I possess solid back-end development knowledge, my
                expertise shines in front-end implementation using modern
                frameworks like Next.js, React.js, and Redux.
              </p>
              <p>
                I am deeply enthusiastic about exploring the full potential of
                Next.js and expanding my skill set to become a well-rounded
                Full-Stack Developer. My goal is to leverage my expertise in
                React and front-end development to contribute to innovative
                projects and drive your team’s success.
              </p>
              <div className={styles.buttonWrapper}>
                <button className={styles.btnLearn}>
                  <Link
                    target="_blank"
                    href="https://drive.google.com/file/d/1aIvEo07boKmmFPijFTHZ5vO1oxkvxtxh/view?usp=sharing"
                    passHref
                  >
                    <span>
                      <Reading
                        style={{ color: "#048848" }}
                        width={32}
                        height={24}
                      />
                      Learn More
                    </span>
                  </Link>
                </button>
                <button className={styles.btnContact}>
                  <Link href="#contact" passHref>
                    <span>
                      <Call
                        style={{ color: "#6f10a2" }}
                        width={32}
                        height={24}
                      />
                      Contact Me
                    </span>
                  </Link>
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
              4+ Years of Experience | 10+ Projects completed
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
