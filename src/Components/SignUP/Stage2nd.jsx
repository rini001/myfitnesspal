import React from "react";
import styles from "./All.module.css";

const Stage2nd = () => {
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
        <div
          className={`${styles.MuiContainer_root} ${styles.MuiContainer_maxWidthSm} ${styles.css_qpa126}`}
        >
          <main className={`${styles.MuiBox_root} ${styles.css_dmeihm}`}>
            <div className={styles.SignUP1001}>
              <main className={`${styles.alingleft} ${styles.SignUP1002}`}>
                <div className={`${styles.alingleft} ${styles.SignUP1003}`}>
                  <form className={`${styles.alingleft}`}>
                    <div className={styles.SignUP1009}>
                      <h1 className={`${styles.SignUP1010}`}>
                        What is your weight goal?
                      </h1>
                      <div className={`${styles.SignUP1011}`}>
                        <button
                          className={`${styles.onfocus} ${styles.SignUP1012}`}
                          type="button"
                          value="lose"
                        >
                          <p
                            className={`${styles.btntext} ${styles.SignUP1013}`}
                          >
                            Lose Weight
                          </p>
                        </button>
                        <button
                          className={`${styles.onfocus} ${styles.SignUP1012}`}
                          type="button"
                          value="maintain"
                        >
                          <p
                            className={`${styles.btntext} ${styles.SignUP1013}`}
                          >
                            Maintain Weight
                          </p>
                        </button>
                        <button
                          className={`${styles.onfocus} ${styles.SignUP1012}`}
                          type="button"
                          value="gain"
                        >
                          <p
                            className={`${styles.btntext} ${styles.SignUP1013}`}
                          >
                            Gain Weight
                          </p>
                        </button>
                      </div>
                      <nav
                        className={`${styles.alingleft} ${styles.SignUP1014}`}
                      >
                        <a className={`${styles.SignUP1015}`} href="#">
                          <span className={`${styles.SignUPbutton}`}>Back</span>
                        </a>
                        <button
                          className={`${styles.SignUP1016}`}
                          type="submit"
                        >
                          <span className={`${styles.SignUPbutton}`}>Next</span>
                        </button>
                      </nav>
                    </div>
                  </form>
                </div>
              </main>
            </div>
          </main>
        </div>
      </section>
    </>
  );
};

export default Stage2nd;
