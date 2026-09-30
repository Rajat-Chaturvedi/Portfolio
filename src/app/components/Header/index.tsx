"use client";

import React, { useState } from "react";
import styles from "./header.module.scss";
import Link from "next/link";
import { CV, Close, Github, HamBurger, LinkedIn } from "../svgs";
import { UI_CONTENT } from "../../constants";

interface HeaderProps {
  links: {
    github: string;
    linkedin: string;
    resume: string;
  };
}

function Header({ links }: HeaderProps) {
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
              <span>{UI_CONTENT.header.initials}</span>
              {/* </a> */}
            </Link>
            <span className={styles.firstName}>
              {UI_CONTENT.header.firstName} <span className={styles.lastName}>{UI_CONTENT.header.lastName}</span>
            </span>
          </div>
          <div className={styles.hamBurgerMenu}>
            <button onClick={handleMenuToggle}>
              {!isMenuOpen ? (
                <HamBurger
                  height={18}
                  width={24}
                  className={styles.menuToggleIcon}
                />
              ) : (
                <Close
                  height={18}
                  width={20}
                  className={styles.menuToggleIcon}
                />
              )}
            </button>
          </div>
        </div>
        {/* Mid Part */}
        <div className={styles.headerMidWrapper}>
          {UI_CONTENT.header.nav.map(({ href, label }) => (
            <Link key={href} href={href} passHref className={styles.navLink}>
              {label}
            </Link>
          ))}
        </div>
        {/* Right Part */}
        <div className={styles.headerRightWrapper}>
          <Link target="_blank" href={links.linkedin} passHref>
            <button className={styles.buttonLinkedIn}>
              <span>
                <LinkedIn width={32} height={22} />
                <span className={styles.btnText}>{UI_CONTENT.header.linkedin}</span>
              </span>
            </button>
          </Link>
          <Link target="_blank" href={links.github} passHref>
            <button className={styles.buttonGitHub}>
              <span>
                <Github width={32} height={22} />
                <span className={styles.btnText}>{UI_CONTENT.header.github}</span>
              </span>
            </button>
          </Link>
          <Link target="_blank" href={links.resume} passHref>
            <button className={styles.buttonCV}>
              <span>
                <CV style={{ color: "#4c4c4c" }} width={32} height={22} />
                <span className={styles.btnText}>{UI_CONTENT.header.resume}</span>
              </span>
            </button>
          </Link>
        </div>
      </div>
      {isMenuOpen && (
        <div className={styles.mobileMenuContainer}>
          <div className={styles.mobileMenuWrapper}>
            {/* 1st Part */}
            <div className={styles.headerMidWrapper}>
              {UI_CONTENT.header.nav.map(({ href, label }) => (
                <Link key={href} href={href} passHref className={styles.navLink}>
                  {label}
                </Link>
              ))}
            </div>
            {/* 2nd Part */}
            <div className={styles.headerRightWrapper}>
              <button className={styles.buttonLinkedIn}>
                <Link target="_blank" href={links.linkedin} passHref>
                  <span>
                    <LinkedIn className={styles.icon} />
                    <span className={styles.btnText}>{UI_CONTENT.header.linkedin}</span>
                  </span>
                </Link>
              </button>
              <button className={styles.buttonGitHub}>
                <Link target="_blank" href={links.github} passHref>
                  <span>
                    <Github className={styles.icon} />
                    <span className={styles.btnText}>{UI_CONTENT.header.github}</span>
                  </span>
                </Link>
              </button>
              <button className={styles.buttonCV}>
                <Link target="_blank" href={links.resume} passHref>
                  <span>
                    <CV style={{ color: "#4c4c4c" }} className={styles.icon} />
                    <span className={styles.btnText}>{UI_CONTENT.header.resume}</span>
                  </span>
                </Link>
              </button>
            </div>
          </div>
        </div>
      )}
    </header>
  );
}

export default Header;
