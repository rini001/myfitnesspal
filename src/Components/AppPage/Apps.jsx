import React from "react";
import { Link } from "react-router-dom";
import styles from "./Apps.module.css";
export const Apps = ({ image, appName, category,id }) => {
  return (
    <div className={styles.div1}>
      <div className={styles.divImg}>
        <img src={image} alt="" />
      </div>
      <div className={styles.div2}>
        <div className={styles.appName}><Link to={`./${id}`}>{appName} </Link></div>
        <div className={styles.category}>{category}</div>
          <div className={styles.divbtn}><button className={styles.btn}>GET</button></div>
      </div>
     
    </div>
  );
};