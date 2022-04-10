import React from "react";
import styles from "./All.module.css";

const Stage7th = () => {
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
                  className={`${styles.Grid_spacing_xs_8}  ${styles.SignUP1vi05hx}`}
                >
                  <div
                    className={`${styles.containeritem} ${styles.SignUP1007}`}
                  >
                    <h1 className={`${styles.SignUP1010}`}>
                      Create a username.
                    </h1>
                  </div>
                  <div
                    className={`${styles.containeritem} ${styles.SignUP1007}`}
                  >
                    <div className={`${styles.SignUP1ojbn3v}`}>
                      <label
                        className={`${styles.SignUP1f09bpi}`}
                        for="Create a username"
                        id="Create a username-label"
                      >
                        Create a username
                      </label>
                      <div className={`${styles.SignUP1v3dwsv}`}>
                        <input
                          aria-invalid="false"
                          id="Create a username"
                          type="text"
                          className={`  ${styles.SignUP5v3ygq}`}
                          value=""
                        />
                        <fieldset
                          aria-hidden="true"
                          className={`${styles.OutlinedInput_notchedOutline} ${styles.SignUPigs3ac}`}
                        >
                          <legend className={`${styles.SignUP1z7n62}`}>
                            <span>Create a username</span>
                          </legend>
                        </fieldset>
                      </div>
                    </div>
                  </div>
                  <div
                    className={`${styles.containeritem} ${styles.SignUP1007}`}
                  >
                    <nav className={`${styles.alingleft} ${styles.SignUP1014}`}>
                      <a
                        className={` ${styles.SignUP1015}`}
                        href="/account/create"
                      >
                        <span className={`${styles.SignUPbutton}`}>Back</span>
                      </a>
                      <button className={` ${styles.SignUP1016}`} type="submit">
                        <span className={`${styles.SignUPbutton}`}>Finish</span>
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

export default Stage7th;
