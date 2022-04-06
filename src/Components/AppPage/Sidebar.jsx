import React from 'react'
import styles from './Sidebar.module.css'
export const Sidebar = () => {
  return (
    <div className={styles.mainDiv}>
        <div>
        <input type="text" placeholder="Search.."></input>
        </div>
 
<div>
<h3>Categories</h3>
      <div>All  <hr /></div>
     
      <div>Activity Trackers <hr /></div>
      <div>Steps Trackers <hr /></div>
      <div>Scale <hr /></div>
      <div>Lifestyle <hr /></div>
      <div>Wearables <hr /></div>
      <div>Fitness Apps <hr /></div>
      <div>Exercise Equipment <hr /></div>
      <div>Fertility <hr /></div>
</div>
       
    </div>
  )
}
