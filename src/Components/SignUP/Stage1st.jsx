import React from "react";
import styles from "./All.module.css";

const Stage1st = () => {
  return (
    <>
      <section className={`${styles.alingleft} ${styles.SignUP1fxczvu}`}>
        <span className={styles.span1}>
          <img
            alt="background"
            sizes="100vw"
            src="https://www.myfitnesspal.com/_next/image?url=%2Fpages%2Fsignup%2Fbg.png&w=2048&q=75"
            className={styles.img1}
          />
        </span>
        <div className={styles.SignUP1001}>
          <main className={`${styles.alingleft} ${styles.SignUP1002}`}>
            <div className={`${styles.alingleft} ${styles.SignUP1003}`}>
              <div className={styles.SignUP1004}>
                <div className={`${styles.containeritem} ${styles.SignUP1005}`}>
                  <h1 className={styles.SignUP1006}>
                    Welcome! Just a few quick questions so we can customize
                    MyFitnessPal for you.
                  </h1>
                </div>
                <div className={`${styles.containeritem} ${styles.SignUP1007}`}>
                  <button className={styles.SignUP1008} type="button">
                    <span className={styles.SignUPbutton}>Continue</span>
                  </button>
                </div>
              </div>
            </div>
          </main>
        </div>
      </section>
    </>
  );
};

export default Stage1st;
