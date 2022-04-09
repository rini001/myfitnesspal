import React from "react";
import styles from "./FeaturedApps.module.css";
import { AppsData } from "../../Data/AppsData";
import { Apps } from "./Apps";
export const FeaturedApps = () => {
  // console.log(AppsData)
  return (
    <div className={styles.div0}>
      <h2 className={styles.hh2}>
        Featured Apps
      </h2>
      <div className={styles.div1}>
        {AppsData.map((el) => (
          <Apps
          id={el.id}
            key={el.id}
            image={el.image}
            appName={el.appName}
            category={el.category}
          />
        ))}
      </div>

      <div></div>
    </div>
  );
};
