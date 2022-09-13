import React from "react";
import about from "../../assets/about.png";
import styles from "./About.module.css";

const About = () => {
  return (
    <div className={styles.aboutBlock}>
      <div className="container">
        <h1 className={styles.title}>about us</h1>
        <div className={styles.aboutContent}>
          <div className={styles.pictures}>
            <img src={about} alt="about picture" className={styles.aboutImg} />
          </div>
          <div className={styles.aboutText}>
            <h2>we provide the best property for you</h2>
            <p>
              lorem ipsum lorem ipsumlorem ipsumlorem ipsumlorem ipsumlorem ipsumlorem ipsumlorem ipsumlorem ipsumlorem
              ipsumlorem ipsumlorem ipsumlorem ipsum
            </p>
            <button className={styles.moreBtn}>read more</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
