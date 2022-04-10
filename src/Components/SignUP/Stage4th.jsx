import React from "react";
import styles from "./All.module.css";

const Stage4th = () => {
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
              <form className={styles.section3}>
                <div
                  className={`${styles.Grid_spacing_xs_8}  ${styles.SignUP1m7nlmx}`}
                >
                  <div
                    className={`${styles.containeritem} ${styles.SignUP1007}`}
                  >
                    <h1 className={`${styles.SignUP4tr9mt}`}>
                      Please select which sex we should use to calculate your
                      calorie needs.
                    </h1>
                    <div className={`${styles.SignUP18r8671}`}>
                      <label className={`${styles.SignUP1th7rei}`}>
                        <span className={`${styles.SignUPwiurcy}`}>
                          <input
                            className={`${styles.SignUP1m9pwf3}`}
                            name="sex"
                            type="radio"
                            value="M"
                          />
                        </span>
                        <span
                          className={`${styles.btntext} ${styles.SignUP1013}`}
                        >
                          Male
                        </span>
                      </label>
                      <label className={`${styles.SignUP1th7rei}`}>
                        <span className={`${styles.SignUP1n3maxe}`}>
                          <input
                            className={`${styles.SignUP1m9pwf3}`}
                            name="sex"
                            type="radio"
                            value="F"
                          />
                        </span>
                        <span
                          className={`${styles.btntext} ${styles.SignUP1013}`}
                        >
                          Female
                        </span>
                      </label>
                    </div>
                    <button
                      className={`${styles.alingleft} ${styles.SignUP142gop6}`}
                    >
                      <p
                        className={`${styles.btntext} ${styles.SignUP1stmbwu}`}
                        id="tooltip"
                      >
                        Which one should I choose?
                      </p>
                    </button>
                  </div>
                  <div
                    className={`${styles.containeritem} ${styles.SignUP1007}`}
                  >
                    <h1 className={`${styles.SignUP4tr9mt}`}>
                      When were you born?
                    </h1>
                    <div className={`${styles.SignUPtuxzvu}`}>
                      <div
                        className={`${styles.containeritem} ${styles.SignUPwpl0hm}`}
                      >
                        <div className={`${styles.SignUPtoc561}`}>
                          <label
                            className={`${styles.SignUPnhysvk}`}
                            id="birthday-label"
                          >
                            Date
                          </label>
                          <div className={`${styles.SignUP1k70y2s}`}>
                            <input
                              id="birthday"
                              type="date"
                              className={`${styles.SignUP5v3ygq}`}
                              value=""
                            />
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div
                    className={`${styles.containeritem} ${styles.SignUP1007}`}
                  >
                    <h1 className={`${styles.SignUP4tr9mt}`}>
                      Where do you live?
                    </h1>
                    <div className={`${styles.SignUPtuxzvu}`}>
                      <div
                        className={`${styles.containeritem} ${styles.SignUPwpl0hm}`}
                      >
                        <div className={`${styles.SignUPtzsjye}`}>
                          <label className={`${styles.SignUP1f09bpi}`}>
                            Country
                          </label>
                          <select name="" className={styles.select}>
                            <option value="us">United state</option>
                            <option value="">India</option>
                            <option value="">UK</option>
                            <option value="">Russia</option>
                            <option value="">Brazil</option>
                            <option value="">China</option>
                            <option value="">Shree lanka</option>
                          </select>
                        </div>
                      </div>
                      <div
                        className={`${styles.containeritem} ${styles.SignUPwpl0hm}`}
                      >
                        <div className={`${styles.SignUP1ojbn3v}`}>
                          <label
                            className={`${styles.SignUPnhysvk}`}
                            for="zipcode"
                            id="zipcode-label"
                          >
                            Zip code
                          </label>
                          <div className={`${styles.SignUP1v3dwsv}`}>
                            <input
                              id="zipcode"
                              name="zipcode"
                              type="text"
                              className={`${styles.SignUP5v3ygq}`}
                              value=""
                              placeholder="Zip Code"
                            />
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div
                    className={`${styles.containeritem} ${styles.SignUP1007}`}
                  >
                    <p
                      className={`${styles.Typography_body2} ${styles.SignUP3etz74}`}
                    >
                      We use this information to calculate an accurate calorie
                      goal for you.
                    </p>
                    <nav className={`${styles.alingleft} ${styles.SignUP1014}`}>
                      <a
                        className={` ${styles.SignUP1015}`}
                        href="/account/create/activity-level"
                      >
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

export default Stage4th;
