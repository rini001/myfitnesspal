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
        <div>
        <div className={styles.halfborder}>
          <div>
              <p className={styles.cal}>Calories remaining <span className={styles.change}>change</span></p>
          </div>
          <div className={styles.div001}>
          <div className={styles.calCount}>
            1290
            </div>
            <div className={styles.btnFlex}>
            <button className={styles.addExercise}>Add Exercise</button>
            <button className={styles.addFood}>Add Food</button>
            </div>
            </div>
       
      </div>
      <div className={styles.hi}>
        <div className={styles.d1}>
          <p className={styles.p1}>1290</p>
          <p className={styles.p2}>GOAL</p>
        </div>
        <div className={styles.d1}>
          <p className={styles.p1}>0</p>
          <p className={styles.p2}>FOOD</p>
        </div>
        <div className={styles.d1}>
          <p className={styles.p2}>-</p>
        </div>
        <div className={styles.d1}>
          <p className={styles.p1}>0</p>
          <p className={styles.p2}>EXERCISE</p>
        </div>
        <div className={styles.d1}>
          <p className={styles.p2}>=</p>
        </div>
        <div className={styles.d1}>
          <p className={styles.p1}>0</p>
          <p className={styles.p2}>NET</p>
        </div>
        {/* <div className={styles.d1}>7</div> */}
      </div>
      <div className={styles.hi1}></div>
      </div>
        </div>
        
    </div>
  )
}
