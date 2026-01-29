"use client";

import React, { useEffect, useRef } from "react";
import styles from "./about.module.scss";
import { Cursor, useTypewriter } from "react-simple-typewriter";
import Lottie from "lottie-web";
import { Call, Reading } from "../svgs";
import Link from "next/link";

interface AboutProps {
  data: {
    role: string;
    summary: string;
    paragraphs: string;
    resumeUrl?: string;
    typewriterTexts: string[];
    experienceStats: string;
  } | null;
}

const About: React.FC<AboutProps> = ({ data }) => {
  const container = useRef<HTMLDivElement>(null);

  // ✅ SAFE FALLBACKS (important)
  const typewriterWords = data?.typewriterTexts?.length
    ? data.typewriterTexts
    : ["Hi, I am Rajat Chaturvedi."];

  const [text] = useTypewriter({
    words: typewriterWords,
    loop: true,
    delaySpeed: 2000,
  });

  useEffect(() => {
    if (!container.current) return;

    const animation = Lottie.loadAnimation({
      container: container.current,
      renderer: "svg",
      loop: true,
      autoplay: true,
      animationData: require("../../../../public/assets/projects.json"),
    });

    return () => animation.destroy();
  }, []);

  // ✅ JSX-level guard (NOT hook-level)
  if (!data) {
    return (
      <section className={styles.section1} id="about">
        <p>Loading...</p>
      </section>
    );
  }

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

              <p className={styles.B}>{data.summary}</p>
              <p className={styles.B}>{data.paragraphs}</p>

              <div className={styles.buttonWrapper}>
                {data.resumeUrl && (
                  <button className={styles.btnLearn}>
                    <Link
                      target="_blank"
                      href={data.resumeUrl}
                      passHref
                    >
                      <span>
                        <Reading width={24} height={24} /> Learn More{" "}
                      </span>
                    </Link>
                  </button>
                )}

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
          <div ref={container} className={styles.animationContainer} />
          <div className={styles.rightPanelContent}>
            <h1 className={styles.trend}>{data.role}</h1>
            <p className={styles.description}>{data.experienceStats}</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
