"use client";

import React, { useEffect, useRef } from "react";
import styles from "./about.module.scss";
import { Cursor, useTypewriter } from "react-simple-typewriter";
import type { AnimationItem } from "lottie-web";
import { Call, Reading } from "../svgs";
import Link from "next/link";
import { UI_CONTENT } from "../../constants";

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
    : [UI_CONTENT.about.typewriterFallback];

  const [text] = useTypewriter({
    words: typewriterWords,
    loop: true,
    delaySpeed: 2000,
  });

  useEffect(() => {
    let disposed = false;
    let animation: AnimationItem | undefined;
    import("lottie-web").then(({ default: lottie }) => {
      if (disposed || !container.current) return;
      animation = lottie.loadAnimation({
        container: container.current,
        renderer: "svg",
        loop: true,
        autoplay: true,
        animationData: require("../../../../public/assets/projects.json"),
      });
    });

    return () => {
      disposed = true;
      animation?.destroy();
    };
  }, []);

  const [left, right] = data?.experienceStats
    .split("|")
    .map((s) => s.trim()) || ["", ""];

  // ✅ JSX-level guard (NOT hook-level)
  if (!data) {
    return (
      <section className={styles.section1} id="about">
        <p>{UI_CONTENT.about.loading}</p>
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
                    <Link target="_blank" href={data.resumeUrl} passHref>
                      <span>
                        <Reading width={24} height={24} /> {UI_CONTENT.about.learnMore}{" "}
                      </span>
                    </Link>
                  </button>
                )}

                <button className={styles.btnContact}>
                  <Link href={UI_CONTENT.about.contactHref} passHref>
                    <span>
                      <Call
                        style={{ color: "#6f10a2" }}
                        width={32}
                        height={24}
                      />
                      {UI_CONTENT.about.contactMe}
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
            <div className={styles.experienceStrip}>
              <span>{left}</span>
              <span className={styles.separator}> | </span>
              <span>{right}</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
