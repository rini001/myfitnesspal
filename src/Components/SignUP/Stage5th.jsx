import React from "react";
import { useNavigate } from "react-router-dom";
import styles from "./All.module.css";

const Stage5th = () => {
  const navigation = useNavigate()
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
                  className={`${styles.MuiGrid_root} ${styles.MuiGrid_container} ${styles.MuiGrid_spacing_xs_5} ${styles.MuiGrid_direction_xs_column} ${styles.css_12dsom7}`}
                >
                  <div
                    className={`${styles.MuiGrid_root} ${styles.MuiGrid_item} ${styles.css_1wxaqej}`}
                  >
                    <h1
                      className={`${styles.MuiTypography_root} ${styles.MuiTypography_h3} ${styles.MuiTypography_gutterBottom} ${styles.css_3o5yhq}`}
                    >
                      How tall are you?
                    </h1>
                    <div
                      className={`${styles.MuiGrid_root} ${styles.MuiGrid_container} ${styles.MuiGrid_spacing_xs_2} ${styles.css_tuxzvu}`}
                    >
                      <div
                        className={`${styles.MuiGrid_root} ${styles.MuiGrid_item} ${styles.MuiGrid_grid_xs_6} ${styles.css_1can3ro}`}
                      >
                        <div
                          className={`${styles.MuiFormControl_root} ${styles.MuiTextField_root} ${styles.css_toc561}`}
                        >
                          <label
                            className={`${styles.MuiInputLabel_root} ${styles.MuiInputLabel_formControl} ${styles.MuiInputLabel_animated} ${styles.MuiInputLabel_outlined} ${styles.MuiFormLabel_root} ${styles.MuiFormLabel_colorPrimary} ${styles.Mui_error} ${styles.css_nhysvk}`}
                            for="Height (feet)"
                            id="Height (feet)-label"
                          >
                            Height (feet)
                          </label>
                          <div
                            className={`${styles.MuiOutlinedInput_root} ${styles.MuiInputBase_root} ${styles.MuiInputBase_colorPrimary} ${styles.Mui_error} ${styles.MuiInputBase_formControl} ${styles.MuiInputBase_adornedEnd} ${styles.css_yyj737}`}
                          >
                            <input
                              id="Height (feet)"
                              name="height-feet"
                              type="text"
                              className={`${styles.MuiOutlinedInput_input} ${styles.MuiInputBase_input} ${styles.MuiInputBase_inputAdornedEnd} ${styles.css_106dx4m}`}
                              value=""
                            />
                            <div
                              className={`${styles.MuiInputAdornment_root} ${styles.MuiInputAdornment_positionEnd} ${styles.MuiInputAdornment_outlined} ${styles.MuiInputAdornment_sizeMedium} ${styles.css_1ffzwmf}`}
                              aria-label="feet"
                            >
                              <p
                                className={`${styles.MuiTypography_root} ${styles.MuiTypography_body1} ${styles.css_17pbj4j}`}
                              >
                                ft
                              </p>
                            </div>
                            <fieldset
                              aria-hidden="true"
                              className={`${styles.MuiOutlinedInput_notchedOutline} ${styles.css_igs3ac}`}
                            >
                              <legend className={`${styles.css_173wfxe}`}>
                                <span>Height (feet)</span>
                              </legend>
                            </fieldset>
                          </div>
                        </div>
                        <p
                          className={`${styles.MuiTypography_root} ${styles.MuiTypography_inherit} ${styles.css_k38b6r}`}
                        >
                          Please enter your height.
                        </p>
                      </div>
                      <div
                        className={`${styles.MuiGrid_root} ${styles.MuiGrid_item} ${styles.MuiGrid_grid_xs_6} ${styles.css_1can3ro}`}
                      >
                        <div
                          className={`${styles.MuiFormControl_root} ${styles.MuiTextField_root} ${styles.css_toc561}`}
                        >
                          <label
                            className={`${styles.MuiInputLabel_root} ${styles.MuiInputLabel_formControl} ${styles.MuiInputLabel_animated} ${styles.MuiInputLabel_outlined} ${styles.MuiFormLabel_root} ${styles.MuiFormLabel_colorPrimary} ${styles.Mui_error} ${styles.css_nhysvk}`}
                            for="Height (inches)"
                            id="Height (inches)-label"
                          >
                            Height (inches)
                          </label>
                          <div
                            className={`${styles.MuiOutlinedInput_root} ${styles.MuiInputBase_root} ${styles.MuiInputBase_colorPrimary} ${styles.Mui_error} ${styles.MuiInputBase_formControl} ${styles.MuiInputBase_adornedEnd} ${styles.css_yyj737}`}
                          >
                            <input
                              id="Height (inches)"
                              name="height-inches"
                              type="text"
                              className={`${styles.MuiOutlinedInput_input} ${styles.MuiInputBase_input} ${styles.MuiInputBase_inputAdornedEnd} ${styles.css_106dx4m}`}
                              value=""
                            />
                            <div
                              className={`${styles.MuiInputAdornment_root} ${styles.MuiInputAdornment_positionEnd} ${styles.MuiInputAdornment_outlined} ${styles.MuiInputAdornment_sizeMedium} ${styles.css_1ffzwmf}`}
                              aria_label="inches"
                            >
                              <p
                                className={`${styles.MuiTypography_root} ${styles.MuiTypography_body1} ${styles.css_17pbj4j}`}
                              >
                                in
                              </p>
                            </div>
                            <fieldset
                              aria_hidden="true"
                              className={`${styles.MuiOutlinedInput_notchedOutline} ${styles.css_igs3ac}`}
                            >
                              <legend className={`${styles.css_173wfxe}`}>
                                <span>Height (inches)</span>
                              </legend>
                            </fieldset>
                          </div>
                        </div>
                      </div>
                    </div>
                    <button
                      className={`${styles.MuiButtonBase_root} ${styles.css_1b47e06}`}
                      tabindex="0"
                      type="button"
                    >
                      <p
                        className={`${styles.MuiTypography_root} ${styles.MuiTypography_body1} ${styles.MuiTypography_paragraph} ${styles.css_1pufet8}`}
                      >
                        Change units to centimeters
                      </p>
                    </button>
                  </div>
                  <div
                    className={`${styles.MuiGrid_root} ${styles.MuiGrid_item} ${styles.css_1wxaqej}`}
                  >
                    <h2
                      className={`${styles.MuiTypography_root} ${styles.MuiTypography_h3} ${styles.MuiTypography_gutterBottom} ${styles.css_172n4b4}`}
                    >
                      How much do you weigh?
                    </h2>
                    <p
                      className={`${styles.MuiTypography_root} ${styles.MuiTypography_inherit} ${styles.MuiTypography_gutterBottom} ${styles.css_1tsy5de}`}
                    >
                      It's OK to estimate. You can update this later.
                    </p>
                    <div
                      className={`${styles.MuiGrid_root} ${styles.MuiGrid_container} ${styles.MuiGrid_spacing_xs_2} ${styles.css_tuxzvu}`}
                    >
                      <div
                        className={`${styles.MuiGrid_root} ${styles.MuiGrid_item} ${styles.MuiGrid_grid_xs_6} ${styles.css_1can3ro}`}
                      >
                        <div
                          className={`${styles.MuiFormControl_root} ${styles.MuiTextField_root} ${styles.css_toc561}`}
                        >
                          <label
                            className={`${styles.MuiInputLabel_root} ${styles.MuiInputLabel_formControl} ${styles.MuiInputLabel_animated} ${styles.MuiInputLabel_outlined} ${styles.MuiFormLabel_root} ${styles.MuiFormLabel_colorPrimary} ${styles.Mui_error} ${styles.css_nhysvk}`}
                            for="Current weight"
                            id="Current weight-label"
                          >
                            Current weight
                          </label>
                          <div
                            className={`${styles.MuiOutlinedInput_root} ${styles.MuiInputBase_root} ${styles.MuiInputBase_colorPrimary} ${styles.Mui_error} ${styles.MuiInputBase_formControl} ${styles.MuiInputBase_adornedEnd} ${styles.css_yyj737}`}
                          >
                            <input
                              id="Current weight"
                              name="weight_current_value"
                              type="text"
                              className={`${styles.MuiOutlinedInput_input} ${styles.MuiInputBase_input} ${styles.MuiInputBase_inputAdornedEnd} ${styles.css_106dx4m}`}
                              value=""
                            />
                            <div
                              className={`${styles.MuiInputAdornment_root} ${styles.MuiInputAdornment_positionEnd} ${styles.MuiInputAdornment_outlined} ${styles.MuiInputAdornment_sizeMedium} ${styles.css_1ffzwmf}`}
                              aria-label="Pounds"
                            >
                              <p
                                className={`${styles.MuiTypography_root} ${styles.MuiTypography_body1} ${styles.css_17pbj4j}`}
                              >
                                lbs
                              </p>
                            </div>
                            <fieldset
                              aria-hidden="true"
                              className={`${styles.MuiOutlinedInput_notchedOutline} ${styles.css_igs3ac}`}
                            >
                              <legend className={`${styles.css_173wfxe}`}>
                                <span>Current weight</span>
                              </legend>
                            </fieldset>
                          </div>
                        </div>
                      </div>
                    </div>
                    <p
                      className={`${styles.MuiTypography_root} ${styles.MuiTypography_inherit} ${styles.css_k38b6r}`}
                    >
                      Please enter a valid weight.
                    </p>
                    <button
                      className={`${styles.MuiButtonBase_root} ${styles.css_1b47e06}`}
                      tabindex="0"
                      type="button"
                    >
                      <p
                        className={`${styles.MuiTypography_root} ${styles.MuiTypography_body1} ${styles.MuiTypography_paragraph} ${styles.css_1pufet8}`}
                      >
                        Change units to kilograms/stone
                      </p>
                    </button>
                  </div>
                  <div
                    className={`${styles.MuiGrid_root} ${styles.MuiGrid_item} ${styles.css_1wxaqej}`}
                  >
                    <p
                      className={`${styles.MuiTypography_root} ${styles.MuiTypography_h3} ${styles.MuiTypography_gutterBottom} ${styles.css_172n4b4}`}
                    >
                      What's your goal weight?
                    </p>
                    <p
                      className={`${styles.MuiTypography_root} ${styles.MuiTypography_inherit} ${styles.MuiTypography_gutterBottom} ${styles.css_1tsy5de}`}
                    >
                      Don't worry. This doesn't affect your daily calorie goal
                      and you can always change it later.
                    </p>
                    <div
                      className={`${styles.MuiGrid_root} ${styles.MuiGrid_container} ${styles.MuiGrid_spacing_xs_2} ${styles.css_tuxzvu}`}
                    >
                      <div
                        className={`${styles.MuiGrid_root} ${styles.MuiGrid_item} ${styles.MuiGrid_grid_xs_6} ${styles.css_1can3ro}`}
                      >
                        <div
                          className={`${styles.MuiFormControl_root} ${styles.MuiTextField_root} ${styles.css_toc561}`}
                        >
                          <label
                            className={`${styles.MuiInputLabel_root} ${styles.MuiInputLabel_formControl} ${styles.MuiInputLabel_animated} ${styles.MuiInputLabel_outlined} ${styles.MuiFormLabel_root} ${styles.MuiFormLabel_colorPrimary} ${styles.Mui_error} ${styles.css_nhysvk}`}
                            for="Goal weight"
                            id="Goal weight-label"
                          >
                            Goal weight
                          </label>
                          <div
                            className={`${styles.MuiOutlinedInput_root} ${styles.MuiInputBase_root} ${styles.MuiInputBase_colorPrimary} ${styles.Mui_error} ${styles.MuiInputBase_formControl} ${styles.MuiInputBase_adornedEnd} ${styles.css_yyj737}`}
                          >
                            <input
                              id="Goal weight"
                              name="weight_goal_value"
                              type="text"
                              className={`${styles.MuiOutlinedInput_input} ${styles.MuiInputBase_input} ${styles.MuiInputBase_inputAdornedEnd} ${styles.css_106dx4m}`}
                              value=""
                            />
                            <div
                              className={`${styles.MuiInputAdornment_root} ${styles.MuiInputAdornment_positionEnd} ${styles.MuiInputAdornment_outlined} ${styles.MuiInputAdornment_sizeMedium} ${styles.css_1ffzwmf}`}
                              aria-label="Pounds"
                            >
                              <p
                                className={`${styles.MuiTypography_root} ${styles.MuiTypography_body1} ${styles.css_17pbj4j}`}
                              >
                                {" "}
                                lbs
                              </p>
                            </div>
                            <fieldset
                              aria-hidden="true"
                              className={`${styles.MuiOutlinedInput_notchedOutline} ${styles.css_igs3ac}`}
                            >
                              <legend className={`${styles.css_173wfxe}`}>
                                <span>Goal weight</span>
                              </legend>
                            </fieldset>
                          </div>
                        </div>
                      </div>
                    </div>
                    <p
                      className={`${styles.MuiTypography_root} ${styles.MuiTypography_inherit} ${styles.css_k38b6r}`}
                    >
                      Please enter a valid goal weight.
                    </p>
                  </div>
                  <div
                    className={`${styles.MuiGrid_root} ${styles.MuiGrid_item} ${styles.css_1wxaqej}`}
                  >
                    <div className={`${styles.MuiBox_root} ${styles.css_0}`}>
                      <nav
                        className={`${styles.MuiBox_root} ${styles.css_1y4j5le}`}
                      >
                        <a
                          className={`${styles.MuiButton_root} ${styles.MuiButton_outlined} ${styles.MuiButton_outlinedPrimary} ${styles.MuiButton_sizeMedium} ${styles.MuiButton_outlinedSizeMedium} ${styles.MuiButton_fullWidth} ${styles.MuiButtonBase_root} ${styles.css_1215evx}`}
                          tabindex="0"
                          href="/account/create/demographic-1"
                        >
                          <span
                            className={`${styles.MuiTypography_root} ${styles.MuiTypography_button1} ${styles.css_b9fb38}`}
                          >
                            Back
                          </span>
                        </a>
                        <button
                          onClick={() =>  navigation('/s6')}
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
                </div>
              </form>
            </div>
          </main>
        </div>
      </section>
    </>
  );
};

export default Stage5th;
