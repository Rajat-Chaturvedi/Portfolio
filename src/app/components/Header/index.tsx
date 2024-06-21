'use client'

import React, { useState } from "react";
import styles from "./header.module.scss";
import Link from "next/link";
import { CV, Close, Github, HamBurger, LinkedIn } from "../svgs";

function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const handleMenuToggle = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <header className={styles.headerContainer}>
      <div className={styles.headerSubContainer}>
        {/* Left Part */}
        <div className={styles.headerLeftWrapper}>
          <div>
            <Link href="#" passHref className={styles.logo}>
              {/* <a className={styles.logo}> */}
              <span>RC</span>
              {/* </a> */}
            </Link>
            <span className={styles.firstName}>
              Rajat <span className={styles.lastName}>Chaturvedi</span>
            </span>
          </div>
          <div className={styles.hamBurgerMenu}>
            <button onClick={handleMenuToggle}>
              {!isMenuOpen ? (
                <HamBurger
                  height={18}
                  width={24}
                  style={{
                    color: "#510c76",
                    background: "#f9f5fe",
                    // border: "1px solid #510c76",
                    borderRadius: "8px",
                    padding: "8px",
                    fontWeight: "500",
                    fontSize: "16px",
                    marginTop: "4px",
                  }}
                />
              ) : (
                <Close
                  height={18}
                  width={20}
                  style={{
                    color: "#510c76",
                    background: "#f9f5fe",
                    // border: "1px solid #510c76",
                    borderRadius: "50%",
                    padding: "8px",
                    fontWeight: "500",
                    fontSize: "16px",
                    marginTop: "4px",
                  }}
                />
              )}
            </button>
          </div>
        </div>
        {/* Mid Part */}

        <div className={styles.headerMidWrapper}>
          <Link href="#about" passHref className={styles.navLink}>
            About
          </Link>
          <Link href="#experience" passHref className={styles.navLink}>
            Works
          </Link>
          <Link href="#skills" passHref className={styles.navLink}>
            Skills
          </Link>
          <Link href="#projects" passHref className={styles.navLink}>
            Projects
          </Link>
          <Link href="#awards" passHref className={styles.navLink}>
            Awards
          </Link>
          <Link href="#contact" passHref className={styles.navLink}>
            Contact
          </Link>
        </div>
        {/* Right Part */}

        <div className={styles.headerRightWrapper}>
          <Link
            href="https://www.linkedin.com/in/rajat-chaturvedi-524683187"
            passHref
          >
            <button className={styles.buttonLinkedIn}>
              <span>
                <LinkedIn width={32} height={22} />
                LinkedIn
              </span>
            </button>
          </Link>
          <Link href="https://github.com/Rajat-Chaturvedi" passHref>
            <button className={styles.buttonGitHub}>
              <span>
                <Github width={32} height={22} />
                GitHub
              </span>
            </button>
          </Link>
          <Link
            href="https://drive.google.com/file/d/1y36Ke--8uzQN-_KxJSV2OIF0CeJGWnUU/view?usp=drive_link"
            passHref
          >
            <button className={styles.buttonCV}>
              <span>
                <CV style={{color:'#4c4c4c'}} width={32} height={22} />
                Resume
              </span>
            </button>
          </Link>
        </div>
      </div>
    </header>
  );
}

export default Header;
