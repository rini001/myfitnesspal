import React from "react";
import styles from "./All.module.css";

const Stage3rd = () => {
  return (
    <>
      <section className={`${styles.MuiBox_root} ${styles.css_1fxczvu}`}>
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
        <div
          className={`${styles.MuiContainer_root} ${styles.MuiContainer_maxWidthSm} ${styles.css_qpa126}`}
        >
          <main className={`${styles.MuiBox_root} ${styles.css_dmeihm}`}>
            <span
              className={`${styles.MuiLinearProgress_root} ${styles.MuiLinearProgress_colorPrimary} ${styles.MuiLinearProgress_determinate} ${styles.css_q9ysjp}`}
              role="progressbar"
              aria-valuenow="11"
              aria-valuemin="0"
              aria-valuemax="100"
              aria-label="progress bar"
            >
              <span
                className={`${styles.MuiLinearProgress_bar} ${styles.MuiLinearProgress_barColorPrimary} ${styles.MuiLinearProgress_bar1Determinate} ${styles.css_1c2o5lx}`}
              ></span>
            </span>
            <div className={`${styles.MuiBox_root} ${styles.css_1t5i1n4}`}>
              <form className={styles.section3}>
                <div
                  className={`${styles.MuiGrid_root} ${styles.MuiGrid_container} ${styles.MuiGrid_spacing_xs_8} ${styles.MuiGrid_direction_xs_column} ${styles.css_1m7nlmx}`}
                >
                  <div
                    className={`${styles.MuiGrid_root} ${styles.MuiGrid_item} ${styles.css_1lytz60}`}
                  >
                    <h1
                      className={`${styles.MuiTypography_root} ${styles.MuiTypography_h3} ${styles.MuiTypography_gutterBottom} ${styles.css_172n4b4}`}
                    >
                      What is your baseline activity level?
                    </h1>
                    <p
                      className={`${styles.MuiTypography_root} ${styles.MuiTypography_body2} ${styles.css_1fqwhl7}`}
                    >
                      Not including workouts–we count that separately
                    </p>
                  </div>
                  <div
                    className={`${styles.MuiGrid_root} ${styles.MuiGrid_item} ${styles.css_1wxaqej}`}
                  >
                    <div
                      role="group"
                      className={`${styles.MuiToggleButtonGroup_root} ${styles.MuiToggleButtonGroup_vertical} ${styles.css_6474a7}`}
                    >
                      <button
                        className={`${styles.MuiButtonBase_root} ${styles.MuiToggleButton_root} ${styles.Mui_selected} ${styles.MuiToggleButton_sizeMedium} ${styles.MuiToggleButton_standard} ${styles.MuiToggleButtonGroup_grouped} ${styles.MuiToggleButtonGroup_groupedVertical} ${styles.css_1dl41vr}`}
                        tabindex="0"
                        type="button"
                        value="1"
                        aria-pressed="true"
                      >
                        <div>
                          <p
                            className={`${styles.MuiTypography_root} ${styles.MuiTypography_body1} ${styles.css_17pbj4j}`}
                          >
                            Not Very Active
                          </p>
                          <p
                            className={`${styles.MuiTypography_root} ${styles.MuiTypography_body2} ${styles.css_xq5ncm}`}
                          >
                            Spend most of the day sitting (e.g., bankteller,
                            desk job)
                          </p>
                        </div>
                      </button>
                      <button
                        className={`${styles.MuiButtonBase_root} ${styles.MuiToggleButton_root} ${styles.MuiToggleButton_sizeMedium} ${styles.MuiToggleButton_standard} ${styles.MuiToggleButtonGroup_grouped} ${styles.MuiToggleButtonGroup_groupedVertical} ${styles.css_1dl41vr}`}
                        tabindex="0"
                        type="button"
                        value="2"
                        aria-pressed="false"
                      >
                        <div>
                          <p
                            className={`${styles.MuiTypography_root} ${styles.MuiTypography_body1} ${styles.css_17pbj4j}`}
                          >
                            Lightly Active
                          </p>
                          <p
                            className={`${styles.MuiTypography_root} ${styles.MuiTypography_body2} ${styles.css_xq5ncm}`}
                          >
                            Spend a good part of the day on your feet (e.g.,
                            teacher, salesperson)
                          </p>
                        </div>
                      </button>
                      <button
                        className={`${styles.MuiButtonBase_root} ${styles.MuiToggleButton_root} ${styles.MuiToggleButton_sizeMedium} ${styles.MuiToggleButton_standard} ${styles.MuiToggleButtonGroup_grouped} ${styles.MuiToggleButtonGroup_groupedVertical} ${styles.css_1dl41vr}`}
                        tabindex="0"
                        type="button"
                        value="3"
                        aria-pressed="false"
                      >
                        <div>
                          <p
                            className={`${styles.MuiTypography_root} ${styles.MuiTypography_body1} ${styles.css_17pbj4j}`}
                          >
                            Active
                          </p>
                          <p
                            className={`${styles.MuiTypography_root} ${styles.MuiTypography_body2} ${styles.css_xq5ncm}`}
                          >
                            Spend a good part of the day doing some physical
                            activity (e.g., food server, postal carrier)
                          </p>
                        </div>
                      </button>
                      <button
                        className={`${styles.MuiButtonBase_root} ${styles.MuiToggleButton_root} ${styles.MuiToggleButton_sizeMedium} ${styles.MuiToggleButton_standard} ${styles.MuiToggleButtonGroup_grouped} ${styles.MuiToggleButtonGroup_groupedVertical} ${styles.css_1dl41vr}`}
                        tabindex="0"
                        type="button"
                        value="4"
                        aria-pressed="false"
                      >
                        <div>
                          <p
                            className={`${styles.MuiTypography_root} ${styles.MuiTypography_body1} ${styles.css_17pbj4j}`}
                          >
                            Very Active
                          </p>
                          <p
                            className={`${styles.MuiTypography_root} ${styles.MuiTypography_body2} ${styles.css_xq5ncm}`}
                          >
                            Spend a good part of the day doing heavy physical
                            activity (e.g., bike messenger, carpenter)
                          </p>
                        </div>
                      </button>
                    </div>
                  </div>
                  <div
                    className={`${styles.MuiGrid_root} ${styles.MuiGrid_item} ${styles.css_1wxaqej}`}
                  >
                    <nav
                      className={`${styles.MuiBox_root} ${styles.css_1y4j5le}`}
                    >
                      <a
                        className={`${styles.MuiButton_root} ${styles.MuiButton_outlined} ${styles.MuiButton_outlinedPrimary} ${styles.MuiButton_sizeMedium} ${styles.MuiButton_outlinedSizeMedium} ${styles.MuiButton_fullWidth} ${styles.MuiButtonBase_root} ${styles.css_1215evx}`}
                        tabindex="0"
                        href="/account/create/goals"
                      >
                        <span
                          className={`${styles.MuiTypography_root} ${styles.MuiTypography_button1} ${styles.css_b9fb38}`}
                        >
                          Back
                        </span>
                      </a>
                      <button
                        className={`${styles.MuiButton_root} ${styles.MuiButton_contained} ${styles.MuiButton_containedPrimary} ${styles.MuiButton_sizeMedium} ${styles.MuiButton_containedSizeMedium} ${styles.MuiButton_fullWidth} ${styles.MuiButtonBase_root} ${styles.css_1q2wf90}`}
                        tabindex="0"
                        type="submit"
                      >
                        <span
                          className={`${styles.MuiTypography_root} ${styles.MuiTypography_button1} ${styles.css_b9fb38}`}
                        >
                          Next
                        </span>
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
