import React from "react";
import tax from "../../assets/tax.png";
import life from "../../assets/life.png";
import commision from "../../assets/commision.png";
import styles from "./Choose.module.css";

const Choose = () =>{
    return(
        <div className="container">
       <div className={styles.chooseSection}>
       <h1 className={styles.title}>why choose us</h1>
       <p className={styles.text}>our goal is at the heart of all that we do. we make our clients happiness our soul priority.</p>
       <div className={styles.chooseBlocks}>

       <div className={styles.block}>
       <div className={`${styles.iconBlock} ${styles.tax}`}>
       <img src={tax}  alt="tax icon"/>
       </div>
       <h2>tax advatnage</h2>
       <p>tax advantage which applies to investment</p>
       </div>

       <div className={styles.block}>
       <div className={`${styles.iconBlock} ${styles.life}`}>
       <img src={life}  alt="life insurance icon"/>
       </div>
       <h2>property insurance</h2>
       <p>a series of policies that offer either protection of coverage.</p>
       </div>

       <div className={styles.block}>
       <div className={`${styles.iconBlock} ${styles.commision}`}>
       <img src={commision}  alt="commision icon"/>
       </div>
       <h2>lowest commision</h2>
       <p>no longer have to negotiate and hagle other agents.</p>
       </div>
       </div>
       </div>
        </div>
    )
}

export default Choose;