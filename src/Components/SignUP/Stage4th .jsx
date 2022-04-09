import React from "react";
import { useNavigate } from "react-router-dom";
import styles from "./All.module.css";

const Stage4th = () => {
  const navigate = useNavigate();
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
            <div className={`${styles.MuiBox_root} ${styles.css_1t5i1n4}`}>
              <form className={styles.section3}>
                <div
                  className={`${styles.MuiGrid_root} ${styles.MuiGrid_container} ${styles.MuiGrid_spacing_xs_8} ${styles.MuiGrid_direction_xs_column} ${styles.css_1m7nlmx}`}
                >
                  <div
                    className={`${styles.MuiGrid_root} ${styles.MuiGrid_item} ${styles.css_1wxaqej}`}
                  >
                    <h1
                      className={`${styles.MuiTypography_root} ${styles.MuiTypography_h3} ${styles.css_4tr9mt}`}
                    >
                      Please select which sex we should use to calculate your
                      calorie needs.
                    </h1>
                    <div
                      className={`${styles.MuiFormGroup_root} ${styles.css_18r8671}`}
                    >
                      <label
                        className={`${styles.MuiFormControlLabel_root} ${styles.MuiFormControlLabel_labelPlacementEnd} ${styles.css_1th7rei}`}
                      >
                        <span
                          className={`${styles.MuiRadio_root} ${styles.MuiRadio_colorPrimary} ${styles.MuiButtonBase_root} ${styles.MuiRadio_root} ${styles.MuiRadio_colorPrimary} ${styles.PrivateSwitchBase_root} ${styles.css_wiurcy}`}
                        >
                          <input
                            className={`${styles.PrivateSwitchBase_input} ${styles.css_1m9pwf3}`}
                            name="sex"
                            type="radio"
                            value="M"
                          />
                        </span>
                        <span
                          className={`${styles.MuiTypography_root} ${styles.MuiTypography_body1} ${styles.MuiFormControlLabel_label} ${styles.css_17pbj4j}`}
                        >
                          Male
                        </span>
                      </label>
                      <label
                        className={`${styles.MuiFormControlLabel_root} ${styles.MuiFormControlLabel_labelPlacementEnd} ${styles.css_1th7rei}`}
                      >
                        <span
                          className={`${styles.MuiRadio_root} ${styles.MuiRadio_colorPrimary} ${styles.MuiButtonBase_root} ${styles.MuiRadio_root} ${styles.MuiRadio_colorPrimary} ${styles.PrivateSwitchBase_root} ${styles.css_1n3maxe}`}
                        >
                          <input
                            className={`${styles.PrivateSwitchBase_input} ${styles.css_1m9pwf3}`}
                            name="sex"
                            type="radio"
                            value="F"
                          />
                        </span>
                        <span
                          className={`${styles.MuiTypography_root} ${styles.MuiTypography_body1} ${styles.MuiFormControlLabel_label} ${styles.css_17pbj4j}`}
                        >
                          Female
                        </span>
                      </label>
                    </div>
                    <button
                      className={`${styles.MuiBox_root} ${styles.css_142gop6}`}
                    >
                      <p
                        className={`${styles.MuiTypography_root} ${styles.MuiTypography_body1} ${styles.css_1stmbwu}`}
                        id="tooltip"
                      >
                        Which one should I choose?
                      </p>
                    </button>
                  </div>
                  <div
                    className={`${styles.MuiGrid_root} ${styles.MuiGrid_item} ${styles.css_1wxaqej}`}
                  >
                    <h1
                      className={`${styles.MuiTypography_root} ${styles.MuiTypography_h3} ${styles.css_4tr9mt}`}
                    >
                      When were you born?
                    </h1>
                    <div
                      className={`${styles.MuiGrid_root} ${styles.MuiGrid_container} ${styles.MuiGrid_spacing_xs_2} ${styles.css_tuxzvu}`}
                    >
                      <div
                        className={`${styles.MuiGrid_root} ${styles.MuiGrid_item} ${styles.MuiGrid_grid_xs_6} ${styles.css_wpl0hm}`}
                      >
                        <div
                          className={`${styles.MuiFormControl_root} ${styles.MuiTextField_root} ${styles.css_toc561}`}
                        >
                          <label
                            className={`${styles.MuiInputLabel_root} ${styles.MuiInputLabel_formControl} ${styles.MuiInputLabel_animated} ${styles.MuiInputLabel_outlined} ${styles.MuiFormLabel_root} ${styles.MuiFormLabel_colorPrimary} ${styles.css_nhysvk}`}
                            id="birthday-label"
                          >
                            Date
                          </label>
                          <div
                            className={`${styles.MuiOutlinedInput_root} ${styles.MuiInputBase_root} ${styles.MuiInputBase_colorPrimary} ${styles.MuiInputBase_formControl} ${styles.css_1k70y2s}`}
                          >
                            <input
                              id="birthday"
                              type="date"
                              className={`${styles.MuiOutlinedInput_input} ${styles.MuiInputBase_input} ${styles.css_5v3ygq}`}
                              value=""
                            />
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div
                    className={`${styles.MuiGrid_root} ${styles.MuiGrid_item} ${styles.css_1wxaqej}`}
                  >
                    <h1
                      className={`${styles.MuiTypography_root} ${styles.MuiTypography_h3} ${styles.css_4tr9mt}`}
                    >
                      Where do you live?
                    </h1>
                    <div
                      className={`${styles.MuiGrid_root} ${styles.MuiGrid_container} ${styles.MuiGrid_spacing_xs_2} ${styles.css_tuxzvu}`}
                    >
                      <div
                        className={`${styles.MuiGrid_root} ${styles.MuiGrid_item} ${styles.MuiGrid_grid_xs_6} ${styles.css_wpl0hm}`}
                      >
                        <div
                          className={`${styles.MuiFormControl_root} ${styles.MuiFormControl_fullWidth} ${styles.css_tzsjye}`}
                        >
                          <label
                            className={`${styles.MuiInputLabel_root} ${styles.MuiInputLabel_formControl} ${styles.MuiInputLabel_animated} ${styles.MuiInputLabel_shrink} ${styles.MuiInputLabel_outlined} ${styles.MuiFormLabel_root} ${styles.MuiFormLabel_colorPrimary} ${styles.MuiFormLabel_filled} ${styles.css_1f09bpi}`}
                          >
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
                        className={`${styles.MuiGrid_root} ${styles.MuiGrid_item} ${styles.MuiGrid_grid_xs_6} ${styles.css_wpl0hm}`}
                      >
                        <div
                          className={`${styles.MuiFormControl_root} ${styles.MuiFormControl_fullWidth} ${styles.MuiTextField_root} ${styles.css_1ojbn3v}`}
                        >
                          <label
                            className={`${styles.MuiInputLabel_root} ${styles.MuiInputLabel_formControl} ${styles.MuiInputLabel_animated} ${styles.MuiInputLabel_outlined} ${styles.MuiFormLabel_root} ${styles.MuiFormLabel_colorPrimary} ${styles.css_nhysvk}`}
                            for="zipcode"
                            id="zipcode-label"
                          >
                            Zip code
                          </label>
                          <div
                            className={`${styles.MuiOutlinedInput_root} ${styles.MuiInputBase_root} ${styles.MuiInputBase_colorPrimary} ${styles.MuiInputBase_fullWidth} ${styles.MuiInputBase_formControl} ${styles.css_1v3dwsv}`}
                          >
                            <input
                              id="zipcode"
                              name="zipcode"
                              type="text"
                              className={`${styles.MuiOutlinedInput_input} ${styles.MuiInputBase_input} ${styles.css_5v3ygq}`}
                              
                              
                            />
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div
                    className={`${styles.MuiGrid_root} ${styles.MuiGrid_item} ${styles.css_1wxaqej}`}
                  >
                    <p
                      className={`${styles.MuiTypography_root} ${styles.MuiTypography_body2} ${styles.css_3etz74}`}
                    >
                      We use this information to calculate an accurate calorie
                      goal for you.
                    </p>
                    <nav
                      className={`${styles.MuiBox_root} ${styles.css_1y4j5le}`}
                    >
                      <a
                        className={`${styles.MuiButton_root} ${styles.MuiButton_outlined} ${styles.MuiButton_outlinedPrimary} ${styles.MuiButton_sizeMedium} ${styles.MuiButton_outlinedSizeMedium} ${styles.MuiButton_fullWidth} ${styles.MuiButtonBase_root} ${styles.css_1215evx}`}
                        tabindex="0"
                        href="/account/create/activity-level"
                      >
                        <span
                          className={`${styles.MuiTypography_root} ${styles.MuiTypography_button1} ${styles.css_b9fb38}`}
                        >
                          Back
                        </span>
                      </a>
                      <button
                        onClick={() => navigate('/s5')}
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

export default Stage4th;
