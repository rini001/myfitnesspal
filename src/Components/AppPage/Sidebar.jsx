import React from 'react'
import styles from './Sidebar.module.css'
export const Sidebar = () => {
  return (
    <div className={styles.mainDiv}>
        <div>
        <input type="text" placeholder="Search"></input>
        <i class="fa fa-search"></i>
        </div>
 
<div>
<h3>Categories</h3>

      <div className={styles.all}>All  </div>
     
      <div className={styles.same}><a href='https://www.myfitnesspal.com/apps?app_category=activity_trackers'>Activity Trackers </a></div>
      <div className={styles.same}><a href='https://www.myfitnesspal.com/apps?app_category=step_trackers'>Steps Trackers </a></div>
      <div className={styles.same}><a href='https://www.myfitnesspal.com/apps?app_category=scales'>Scale </a></div>
      <div className={styles.same}><a href='https://www.myfitnesspal.com/apps?app_category=lifestyle'>Lifestyle </a></div>
      <div className={styles.same}><a href='https://www.myfitnesspal.com/apps?app_category=wearables'>Wearables </a></div>
      <div className={styles.same}><a href='https://www.myfitnesspal.com/apps?app_category=fitness_apps'>Fitness Apps </a></div>
      <div className={styles.same}><a href='https://www.myfitnesspal.com/apps?app_category=exercise_equipment'>Exercise Equipment </a></div>
      <div className={styles.same}><a href='https://www.myfitnesspal.com/apps?app_category=fertility'>Fertility </a></div>
</div>
       
    </div>
  )
}