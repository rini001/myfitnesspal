import React from "react";

const Stage2nd = () => {
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
              <form className={`${styles.MuiBox_root} ${styles.css_0}`}>
                <div
                  className={`${styles.MuiGrid_root} ${styles.MuiGrid_container} ${styles.MuiGrid_direction_xs_column} ${styles.css_1wkwmmc}`}
                >
                  <h1
                    className={`${styles.MuiTypography_root} ${styles.MuiTypography_h3} ${styles.MuiTypography_gutterBottom} ${styles.css_bwtxxq}`}
                  >
                    What is your weight goal?
                  </h1>
                  <div
                    role="group"
                    className={`${styles.MuiToggleButtonGroup_root} ${styles.MuiToggleButtonGroup_vertical} ${styles.css_1nvizyd}`}
                  >
                    <button
                      className={`${styles.MuiButtonBase_root} ${styles.MuiToggleButton_root} ${styles.MuiToggleButton_sizeMedium} ${styles.MuiToggleButton_standard} ${styles.MuiToggleButtonGroup_grouped} ${styles.MuiToggleButtonGroup_groupedVertical} ${styles.css_1b72681}`}
                      tabindex="0"
                      type="button"
                      value="lose"
                      aria-pressed="false"
                    >
                      <p
                        className={`${styles.MuiTypography_root} ${styles.MuiTypography_body1} ${styles.css_17pbj4j}`}
                      >
                        Lose Weight
                      </p>
                    </button>
                    <button
                      className={`${styles.MuiButtonBase_root} ${styles.MuiToggleButton_root} ${styles.MuiToggleButton_sizeMedium} ${styles.MuiToggleButton_standard} ${styles.MuiToggleButtonGroup_grouped} ${styles.MuiToggleButtonGroup_groupedVertical} ${styles.css_1b72681}`}
                      tabindex="0"
                      type="button"
                      value="maintain"
                      aria-pressed="false"
                    >
                      <p
                        className={`${styles.MuiTypography_root} ${styles.MuiTypography_body1} ${styles.css_17pbj4j}`}
                      >
                        Maintain Weight
                      </p>
                    </button>
                    <button
                      className={`${styles.MuiButtonBase_root} ${styles.MuiToggleButton_root} ${styles.MuiToggleButton_sizeMedium} ${styles.MuiToggleButton_standard} ${styles.MuiToggleButtonGroup_grouped} ${styles.MuiToggleButtonGroup_groupedVertical} ${styles.css_1b72681}`}
                      tabindex="0"
                      type="button"
                      value="gain"
                      aria-pressed="false"
                    >
                      <p
                        className={`${styles.MuiTypography_root} ${styles.MuiTypography_body1} ${styles.css_17pbj4j}`}
                      >
                        Gain Weight
                      </p>
                    </button>
                  </div>
                  <nav
                    className={`${styles.MuiBox_root} ${styles.css_1y4j5le}`}
                  >
                    <a
                      className={`${styles.MuiButton_root} ${styles.MuiButton_outlined} ${styles.MuiButton_outlinedPrimary} ${styles.MuiButton_sizeMedium} ${styles.MuiButton_outlinedSizeMedium} ${styles.MuiButton_fullWidth} ${styles.MuiButtonBase_root}  ${styles.css_1215evx}`}
                      tabindex="0"
                      href="/account/create/welcome"
                    >
                      <span
                        className={`${styles.MuiTypography_root} ${styles.MuiTypography_button1} ${styles.css_b9fb38}`}
                      >
                        Back
                      </span>
                    </a>
                    <button
                      className={`${styles.MuiButton_root} ${styles.MuiButton_contained} ${styles.MuiButton_containedPrimary} ${styles.MuiButton_sizeMedium} ${styles.MuiButton_containedSizeMedium} ${styles.MuiButton_fullWidth} ${styles.MuiButtonBase_root}  ${styles.css_1q2wf90}`}
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
              </form>
            </div>
          </main>
        </div>
      </section>
    </>
  );
};

export default Stage2nd;
