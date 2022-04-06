import React from "react";
import styles from "./Apps.module.css";
export const Apps = ({ image, appName, category }) => {
  return (
    <div className={styles.div1}>
      <div className={styles.divImg}>
        <img src={image} alt="" />
      </div>
      <div className={styles.div2}>
        <div className={styles.appName}>{appName}</div>
        <div className={styles.category}>{category}</div>
          <div className={styles.divbtn}><button className={styles.btn}>GET</button></div>
      
      </div>
    </div>
  );
};
