import React from 'react'
import styles from './Invite.module.css'
export const Invite = () => {
  return (
    <div>
      <div className={styles.maindiv}>
        <p className={styles.para1}>Add Friends to help you reach your goals!</p>
        <p className={styles.para2}>Lose up to 3x more with the support of friends, than those who diet alone.</p>
        <button className={styles.mainbutton}>
        <svg className={styles.btnIcon} focusable="false" aria-hidden="true" viewBox="0 0 24 24" data-testid="EmailIcon"><path d="M20 4H4c-1.1 0-1.99.9-1.99 2L2 18c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm0 4-8 5-8-5V6l8 5 8-5v2z"></path></svg>
         <p className={styles.btnInside}>Invite by Email</p> </button>
        
      </div>
    </div>
  )
}
