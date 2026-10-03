"use client";

import React, { useRef, useState } from "react";
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
  maintenance?: boolean;
}

function Header({ links, maintenance = false }: HeaderProps) {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const menuToggle = useRef<HTMLButtonElement>(null);
  const nav = maintenance ? UI_CONTENT.header.maintenanceNav : UI_CONTENT.header.nav;

  const handleMenuToggle = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <header
      className={`${styles.headerContainer} ${maintenance ? styles.maintenanceHeader : ""}`}
      onKeyDown={(event) => {
        if (event.key === "Escape" && isMenuOpen) {
          setIsMenuOpen(false);
          menuToggle.current?.focus();
        }
      }}
    >
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
            <button
              ref={menuToggle}
              type="button"
              onClick={handleMenuToggle}
              aria-expanded={isMenuOpen}
              aria-controls="mobile-navigation"
              aria-label={isMenuOpen ? UI_CONTENT.header.closeMenu : UI_CONTENT.header.openMenu}
            >
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
        {!maintenance && (
          <div className={styles.headerMidWrapper}>
            {nav.map(({ href, label }) => (
              <Link key={href} href={href} passHref className={styles.navLink}>
                {label}
              </Link>
            ))}
          </div>
        )}
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
        <nav id="mobile-navigation" aria-label={UI_CONTENT.header.navigation} className={styles.mobileMenuContainer}>
          <div className={styles.mobileMenuWrapper}>
            {/* 1st Part */}
            <div className={styles.headerMidWrapper}>
              {nav.map(({ href, label }) => (
                <Link key={href} href={href} passHref className={styles.navLink} onClick={() => setIsMenuOpen(false)}>
                  {label}
                </Link>
              ))}
            </div>
            {/* 2nd Part */}
            <div className={styles.headerRightWrapper}>
                <Link target="_blank" rel="noopener noreferrer" href={links.linkedin} className={`${styles.mobileAction} ${styles.buttonLinkedIn}`} onClick={() => setIsMenuOpen(false)}>
                  <span>
                    <LinkedIn className={styles.icon} />
                    <span className={styles.btnText}>{UI_CONTENT.header.linkedin}</span>
                  </span>
                </Link>
                <Link target="_blank" rel="noopener noreferrer" href={links.github} className={`${styles.mobileAction} ${styles.buttonGitHub}`} onClick={() => setIsMenuOpen(false)}>
                  <span>
                    <Github className={styles.icon} />
                    <span className={styles.btnText}>{UI_CONTENT.header.github}</span>
                  </span>
                </Link>
                <Link target="_blank" rel="noopener noreferrer" href={links.resume} className={`${styles.mobileAction} ${styles.buttonCV}`} onClick={() => setIsMenuOpen(false)}>
                  <span>
                    <CV style={{ color: "#4c4c4c" }} className={styles.icon} />
                    <span className={styles.btnText}>{UI_CONTENT.header.resume}</span>
                  </span>
                </Link>
            </div>
          </div>
        </nav>
      )}
    </header>
  );
}

export default Header;
