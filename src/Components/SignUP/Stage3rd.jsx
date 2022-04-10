import React from "react";
import styles from "./All.module.css";

const Stage3rd = () => {
  return (
    <>
      <section className={`${styles.alingleft} ${styles.SignUP1fxczvu}`}>
        <span className={styles.span1}>
          <img
            alt="background"
            sizes="100vw"
            src="https://www.myfitnesspal.com/_next/image?url=%2Fpages%2Fsignup%2Fbg.png&w=2048&q=75"
            decoding="async"
            data-nimg="fill"
            className={styles.img1}
          />
        </span>
        <div className={styles.SignUP1001}>
          <main className={`${styles.alingleft} ${styles.SignUP1002}`}>
            <div className={`${styles.alingleft} ${styles.SignUP1003}`}>
              <form className={styles.section3}>
                <div
                  className={`${styles.Grid_spacing_xs_8}  ${styles.SignUP1m7nlmx}`}
                >
                  <div
                    className={`${styles.containeritem} ${styles.SignUP1lytz60}`}
                  >
                    <h1 className={`${styles.SignUP172n4b4}`}>
                      What is your baseline activity level?
                    </h1>
                    <p
                      className={`${styles.Typography_body2} ${styles.SignUP1fqwhl7}`}
                    >
                      Not including workouts–we count that separately
                    </p>
                  </div>
                  <div
                    className={`${styles.containeritem} ${styles.SignUP1007}`}
                  >
                    <div className={`${styles.SignUP6474a7}`}>
                      <button
                        className={`${styles._selected} ${styles.onfocus} ${styles.SignUP1dl41vr}`}
                        type="button"
                        value="1"
                      >
                        <div>
                          <p
                            className={`${styles.btntext} ${styles.SignUP1013}`}
                          >
                            Not Very Active
                          </p>
                          <p
                            className={`${styles.Typography_body2} ${styles.SignUPxq5ncm}`}
                          >
                            Spend most of the day sitting (e.g., bankteller,
                            desk job)
                          </p>
                        </div>
                      </button>
                      <button
                        className={`${styles.onfocus} ${styles.SignUP1dl41vr}`}
                        type="button"
                        value="2"
                      >
                        <div>
                          <p
                            className={`${styles.btntext} ${styles.SignUP1013}`}
                          >
                            Lightly Active
                          </p>
                          <p
                            className={`${styles.Typography_body2} ${styles.SignUPxq5ncm}`}
                          >
                            Spend a good part of the day on your feet (e.g.,
                            teacher, salesperson)
                          </p>
                        </div>
                      </button>
                      <button
                        className={`${styles.onfocus} ${styles.SignUP1dl41vr}`}
                        type="button"
                        value="3"
                      >
                        <div>
                          <p
                            className={`${styles.btntext} ${styles.SignUP1013}`}
                          >
                            Active
                          </p>
                          <p
                            className={`${styles.Typography_body2} ${styles.SignUPxq5ncm}`}
                          >
                            Spend a good part of the day doing some physical
                            activity (e.g., food server, postal carrier)
                          </p>
                        </div>
                      </button>
                      <button
                        className={`${styles.onfocus} ${styles.SignUP1dl41vr}`}
                        type="button"
                        value="4"
                      >
                        <div>
                          <p
                            className={`${styles.btntext} ${styles.SignUP1013}`}
                          >
                            Very Active
                          </p>
                          <p
                            className={`${styles.Typography_body2} ${styles.SignUPxq5ncm}`}
                          >
                            Spend a good part of the day doing heavy physical
                            activity (e.g., bike messenger, carpenter)
                          </p>
                        </div>
                      </button>
                    </div>
                  </div>
                  <div
                    className={`${styles.containeritem} ${styles.SignUP1007}`}
                  >
                    <nav className={`${styles.alingleft} ${styles.SignUP1014}`}>
                      <a className={` ${styles.SignUP1015}`} href="#">
                        <span className={`${styles.SignUPbutton}`}>Back</span>
                      </a>
                      <button className={` ${styles.SignUP1016}`} type="submit">
                        <span className={`${styles.SignUPbutton}`}>Next</span>
                      </button>
                    </nav>
                  </div>
                </div>
              </form>
            </div>
          </main>
        </div>
      </section>
    </>
  );
};

export default Stage3rd;
