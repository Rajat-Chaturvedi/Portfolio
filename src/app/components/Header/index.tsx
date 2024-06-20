import React from "react";
import styles from "./header.module.scss"

function Header() {
  return (
    <header className={styles.headerContainer}>
        <div className={styles.headerSubContainer}>
      {/* Left Part */}
      <div  className={styles.headerLeftWrapper}>
        <a href="" className={styles.logo}>
            <span>RC</span>
        </a>
        <span className={styles.firstName}>Rajat <span className={styles.lastName}></span>Chaturvedi</span>
      </div>
      {/* Mid Part */}

      <div className={styles.headerMidWrapper}>
        <p>About</p>
        <p>Skills</p>
        <p>Contact</p>
      </div>
      {/* Right Part */}

      <div className={styles.headerRightWrapper}>
        <button className={styles.buttonLinkedIn}>LinkedIn</button>
        <button className={styles.buttonGitHub}>GitHub</button>
        <button className={styles.buttonCV}>Resume</button>
      </div>
      </div>
    </header>
  );
}

export default Header;
