import React from 'react'
import styles from './DailySummary.module.css'
export const DailySummary = () => {
  return (
    <div className={styles.maindiv} >
      <div className={styles.summary}>Your daily summary</div>
      <div className={styles.div1} >
        <div className={styles.div2}>
        <div className={styles.uploadphoto}>
          <p className={styles.para01}>No photo provided</p>
          <h6 className={styles.heading}><a className={styles.anchor} href="">upload photo</a></h6>
        </div>
        {/* <div className={styles.lbs} >
          <p>0</p>
        
        </div> */}
        </div>
        <div className={styles.div3}>
          <div>
              <p className={styles.cal}>Calories remaining <span className={styles.change}>Change</span></p>
          </div>
          <div className={styles.calCount}>
           
              1290
              </div>
            <div className={styles.addbtns}>
            <button className={styles.addbtn1}>Add Exercise</button>
            <button className={styles.addbtn2}>Add Food</button>
            </div>
         
        
      </div>
        </div>
        
    </div>
  )
}
