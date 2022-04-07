import React, { useState } from "react";
import styles from "../Components/Premium.module.css";
import { AiOutlineDown } from "react-icons/ai";

const Premium = () => {
  const [show1, setShow1] = useState(false);
  const [show2, setShow2] = useState(false);
  const [show3, setShow3] = useState(false);
  const [show4, setShow4] = useState(false);

  const handleShow1 = () => {
    setShow1(!show1);
  };
  const handleShow2 = () => {
    setShow2(!show2);
  };
  const handleShow3 = () => {
    setShow3(!show3);
  };
  const handleShow4 = () => {
    setShow4(!show4);
  };
  return (
    <>
      <main className={styles.jss52}>
        <div
          className={`${styles.MuiContainer_root} ${styles.jss53} ${styles.MuiContainer_maxWidthLg}`}
        >
          <div className={styles.jss54}>
            <div className={styles.jss55}>
              <div className={styles.jss58}>
                <div className={styles.jss65}>Premium</div>
              </div>
              <div className={styles.jss59}>
                <h1
                  className={`${styles.MuiTypography_root} ${styles.jss74} ${styles.jss60}`}
                >
                  Start Your Free Trial Today
                </h1>
              </div>
              <div className={styles.jss61}>
                <p
                  className={`${styles.MuiTypography_root} ${styles.jss62} ${styles.MuiTypography_body1}`}
                >
                  Premium members are 65% more likely to reach their weight loss
                  goal.
                </p>
              </div>
              <button
                className={`${styles.MuiButtonBase_root} ${styles.MuiButton_root} ${styles.MuiButton_contained} ${styles.jss83} ${styles.jss84} ${styles.jss85} ${styles.jss63} ${styles.MuiButton_containedPrimary}`}
                tabindex="0"
                type="button"
              >
                <span className={styles.MuiButton_label}>
                  <span
                    className={`${styles.MuiTypography_root} ${styles.jss80}`}
                  >
                    Start free 1-month trial
                  </span>
                </span>
              </button>
            </div>
            <div className={styles.jss56}>
              <img
                src="https://www.myfitnesspal.com/react-static/e4537e1d014a66cb6083eb6025813bb6.png"
                className={styles.jss57}
                alt="hero gif"
              />
            </div>
          </div>
          <div>
            <div
              className={`${styles.MuiGrid_root} ${styles.jss64} ${styles.MuiGrid_container} ${styles.MuiGrid_spacing_xs_3}`}
            >
              <div
                className={`${styles.MuiGrid_root} ${styles.MuiGrid_item} ${styles.MuiGrid_grid_xs_12} ${styles.MuiGrid_grid_sm_4}`}
              >
                <div className={styles.jss86}>
                  <div className={styles.jss87}>
                    <img
                      src="https://www.myfitnesspal.com/react-static/51b6c01dec78ddfb6d693b1ff8d23d44.png"
                      className={styles.jss88}
                      alt="feature logo"
                    />
                  </div>
                  <div>
                    <div className={styles.jss90}>
                      <h3
                        className={`${styles.MuiTypography_root} ${styles.jss91} ${styles.MuiTypography_h3}`}
                      >
                        Meal Plans &amp; Recipes
                      </h3>
                    </div>
                    <p
                      className={`${styles.MuiTypography_root} ${styles.jss92} ${styles.MuiTypography_body1}`}
                    >
                      Gain insight into your nutrition
                    </p>
                  </div>
                </div>
              </div>
              <div
                className={`${styles.MuiGrid_root} ${styles.MuiGrid_item} ${styles.MuiGrid_grid_xs_12} ${styles.MuiGrid_grid_sm_4}`}
              >
                <div className={styles.jss86}>
                  <div className={styles.jss87}>
                    <img
                      src="https://www.myfitnesspal.com/react-static/c51db6a037b248c10816974faac845f9.png"
                      className={styles.jss88}
                      alt="feature logo"
                    />
                  </div>
                  <div>
                    <div className={styles.jss90}>
                      <h3
                        className={`${styles.MuiTypography_root} ${styles.jss91} ${styles.MuiTypography_h3}`}
                      >
                        Personalized Goals
                      </h3>
                    </div>
                    <p
                      className={`${styles.MuiTypography_root} ${styles.jss92} ${styles.MuiTypography_body1}`}
                    >
                      Get guidance &amp; coaching tailored to you
                    </p>
                  </div>
                </div>
              </div>
              <div
                className={`${styles.MuiGrid_root} ${styles.MuiGrid_item} ${styles.MuiGrid_grid_xs_12} ${styles.MuiGrid_grid_sm_4}`}
              >
                <div className={styles.jss86}>
                  <div className={styles.jss87}>
                    <img
                      src="https://www.myfitnesspal.com/react-static/93c7966575adb77a179235b991596985.png"
                      className={styles.jss88}
                      alt="feature logo"
                    />
                  </div>
                  <div>
                    <div className={styles.jss90}>
                      <h3
                        className={`${styles.MuiTypography_root} ${styles.jss91} ${styles.MuiTypography_h3}`}
                      >
                        Ad-Free Experience
                      </h3>
                    </div>
                    <p
                      className={`${styles.MuiTypography_root} ${styles.jss92} ${styles.MuiTypography_body1}`}
                    >
                      Focus on your goals without distraction
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className={`${styles.MuiContainer_root} ${styles.jss93}`}>
          <div className={styles.jss94}>
            <header className={styles.jss96}>
              <h2
                className={`${styles.MuiTypography_root} ${styles.jss75} ${styles.jss97}`}
              >
                Your Goals, Your Way
              </h2>
              <p
                className={`${styles.MuiTypography_root} ${styles.jss98} ${styles.MuiTypography_body1}`}
              >
                Advanced tools and in-depth analysis to help you build lifelong
                healthy habits.
              </p>
            </header>
            <div className={styles.jss101}>
              <div className={styles.jss102}></div>
              <table className={`${styles.MuiTable_root} ${styles.jss95}`}>
                <thead className={`${styles.MuiTableHead_root}`}>
                  <tr
                    className={`${styles.MuiTableRow_root} ${styles.MuiTableRow_head}`}
                  >
                    <th
                      className={`${styles.MuiTableCell_root} ${styles.MuiTableCell_head} ${styles.MuiTableCell_alignCenter}`}
                      role="columnheader"
                      scope="col"
                    ></th>
                    <th
                      className={`${styles.MuiTableCell_root} ${styles.MuiTableCell_head} ${styles.MuiTableCell_alignCenter}`}
                      role="columnheader"
                      scope="col"
                    >
                      <span className={styles.jss100}>Free</span>
                    </th>
                    <th
                      className={`${styles.MuiTableCell_root} ${styles.MuiTableCell_head} ${styles.MuiTableCell_alignCenter}`}
                      role="columnheader"
                      scope="col"
                    >
                      <span className={styles.jss100}>Premium</span>
                    </th>
                  </tr>
                </thead>
                <tbody className={styles.MuiTableBody_root}>
                  <tr className={`${styles.MuiTableRow_root} ${styles.jss103}`}>
                    <td
                      className={`${styles.MuiTableCell_root} ${styles.MuiTableCell_body} ${styles.MuiTableCell_alignLeft}`}
                    >
                      <h3
                        className={`${styles.MuiTypography_root} ${styles.jss104} ${styles.MuiTypography_h4}`}
                      >
                        <strong>Nutrition Tracking</strong>
                      </h3>
                      <p
                        className={`${styles.MuiTypography_root} ${styles.jss105} ${styles.MuiTypography_body1}`}
                      >
                        Log your food from our extensive database.
                      </p>
                    </td>
                    <td
                      className={`${styles.MuiTableCell_root} ${styles.MuiTableCell_body} ${styles.MuiTableCell_alignCenter}`}
                    >
                      <div>
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          width="22"
                          height="22"
                          viewBox="0 0 22 22"
                        >
                          <path
                            fill="#0066EE"
                            d="M11 0c6.075 0 11 4.925 11 11s-4.925 11-11 11S0 17.075 0 11 4.925 0 11 0zm5.535 6L9.24 13.1l-2.796-2.67L5 11.9 9.197 16h.018L18 7.44 16.535 6z"
                          ></path>
                        </svg>
                      </div>
                    </td>
                    <td
                      className={`${styles.MuiTableCell_root} ${styles.MuiTableCell_body} ${styles.MuiTableCell_alignCenter}`}
                    >
                      <div>
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          width="22"
                          height="22"
                          viewBox="0 0 22 22"
                        >
                          <path
                            fill="#0066EE"
                            d="M11 0c6.075 0 11 4.925 11 11s-4.925 11-11 11S0 17.075 0 11 4.925 0 11 0zm5.535 6L9.24 13.1l-2.796-2.67L5 11.9 9.197 16h.018L18 7.44 16.535 6z"
                          ></path>
                        </svg>
                      </div>
                    </td>
                  </tr>
                  <tr className={`${styles.MuiTableRow_root} ${styles.jss103}`}>
                    <td
                      className={`${styles.MuiTableCell_root} ${styles.MuiTableCell_body} ${styles.MuiTableCell_alignLeft}`}
                    >
                      <h3
                        className={`${styles.MuiTypography_root} ${styles.jss104} ${styles.MuiTypography_h4}`}
                      >
                        <strong>
                          Customizable Carbs, Protein &amp; Fat Goals
                        </strong>
                      </h3>
                      <p
                        className={`${styles.MuiTypography_root} ${styles.jss105} ${styles.MuiTypography_body1}`}
                      >
                        Track your macros by gram or percentage.
                      </p>
                    </td>
                    <td
                      className={`${styles.MuiTableCell_root} ${styles.MuiTableCell_body} ${styles.MuiTableCell_alignCenter}`}
                    ></td>
                    <td
                      className={`${styles.MuiTableCell_root} ${styles.MuiTableCell_body} ${styles.MuiTableCell_alignCenter}`}
                    >
                      <div>
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          width="22"
                          height="22"
                          viewBox="0 0 22 22"
                        >
                          <path
                            fill="#0066EE"
                            d="M11 0c6.075 0 11 4.925 11 11s-4.925 11-11 11S0 17.075 0 11 4.925 0 11 0zm5.535 6L9.24 13.1l-2.796-2.67L5 11.9 9.197 16h.018L18 7.44 16.535 6z"
                          ></path>
                        </svg>
                      </div>
                    </td>
                  </tr>
                  <tr className={`${styles.MuiTableRow_root} ${styles.jss103}`}>
                    <td
                      className={`${styles.MuiTableCell_root} ${styles.MuiTableCell_body} ${styles.MuiTableCell_alignLeft}`}
                    >
                      <h3
                        className={`${styles.MuiTypography_root} ${styles.jss104} ${styles.MuiTypography_h4}`}
                      >
                        <strong>Guided Fitness &amp; Nutrition Plans</strong>
                      </h3>
                      <p
                        className={`${styles.MuiTypography_root} ${styles.jss105} ${styles.MuiTypography_body1}`}
                      >
                        Get coaching and content to achieve your goals.
                      </p>
                    </td>
                    <td
                      className={`${styles.MuiTableCell_root} ${styles.MuiTableCell_body} ${styles.MuiTableCell_alignCenter}`}
                    ></td>
                    <td
                      className={`${styles.MuiTableCell_root} ${styles.MuiTableCell_body} ${styles.MuiTableCell_alignCenter}`}
                    >
                      <div>
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          width="22"
                          height="22"
                          viewBox="0 0 22 22"
                        >
                          <path
                            fill="#0066EE"
                            d="M11 0c6.075 0 11 4.925 11 11s-4.925 11-11 11S0 17.075 0 11 4.925 0 11 0zm5.535 6L9.24 13.1l-2.796-2.67L5 11.9 9.197 16h.018L18 7.44 16.535 6z"
                          ></path>
                        </svg>
                      </div>
                    </td>
                  </tr>
                  <tr className={`${styles.MuiTableRow_root} ${styles.jss103}`}>
                    <td
                      className={`${styles.MuiTableCell_root} ${styles.MuiTableCell_body} ${styles.MuiTableCell_alignLeft}`}
                    >
                      <h3
                        className={`${styles.MuiTypography_root} ${styles.jss104} ${styles.MuiTypography_h4}`}
                      >
                        <strong>Custom Home Screen Dashboard</strong>
                      </h3>
                      <p
                        className={`${styles.MuiTypography_root} ${styles.jss105} ${styles.MuiTypography_body1}`}
                      >
                        Reach goals faster by seeing what’s important to you.
                      </p>
                    </td>
                    <td
                      className={`${styles.MuiTableCell_root} ${styles.MuiTableCell_body} ${styles.MuiTableCell_alignCenter}`}
                    ></td>
                    <td
                      className={`${styles.MuiTableCell_root} ${styles.MuiTableCell_body} ${styles.MuiTableCell_alignCenter}`}
                    >
                      <div>
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          width="22"
                          height="22"
                          viewBox="0 0 22 22"
                        >
                          <path
                            fill="#0066EE"
                            d="M11 0c6.075 0 11 4.925 11 11s-4.925 11-11 11S0 17.075 0 11 4.925 0 11 0zm5.535 6L9.24 13.1l-2.796-2.67L5 11.9 9.197 16h.018L18 7.44 16.535 6z"
                          ></path>
                        </svg>
                      </div>
                    </td>
                  </tr>
                  <tr className={`${styles.MuiTableRow_root} ${styles.jss103}`}>
                    <td
                      className={`${styles.MuiTableCell_root} ${styles.MuiTableCell_body} ${styles.MuiTableCell_alignLeft}`}
                    >
                      <h3
                        className={`${styles.MuiTypography_root} ${styles.jss104} ${styles.MuiTypography_h4}`}
                      >
                        <strong>Food Analysis &amp; Insights</strong>
                      </h3>
                      <p
                        className={`${styles.MuiTypography_root} ${styles.jss105} ${styles.MuiTypography_body1}`}
                      >
                        Follow your progress through your data.
                      </p>
                    </td>
                    <td
                      className={`${styles.MuiTableCell_root} ${styles.MuiTableCell_body} ${styles.MuiTableCell_alignCenter}`}
                    ></td>
                    <td
                      className={`${styles.MuiTableCell_root} ${styles.MuiTableCell_body} ${styles.MuiTableCell_alignCenter}`}
                    >
                      <div>
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          width="22"
                          height="22"
                          viewBox="0 0 22 22"
                        >
                          <path
                            fill="#0066EE"
                            d="M11 0c6.075 0 11 4.925 11 11s-4.925 11-11 11S0 17.075 0 11 4.925 0 11 0zm5.535 6L9.24 13.1l-2.796-2.67L5 11.9 9.197 16h.018L18 7.44 16.535 6z"
                          ></path>
                        </svg>
                      </div>
                    </td>
                  </tr>
                  <tr className={`${styles.MuiTableRow_root} ${styles.jss103}`}>
                    <td
                      className={`${styles.MuiTableCell_root} ${styles.MuiTableCell_body} ${styles.MuiTableCell_alignLeft}`}
                    >
                      <h3
                        className={`${styles.MuiTypography_root} ${styles.jss104} ${styles.MuiTypography_h4}`}
                      >
                        <strong>Meals &amp; Recipes</strong>
                      </h3>
                      <p
                        className={`${styles.MuiTypography_root} ${styles.jss105} ${styles.MuiTypography_body1}`}
                      >
                        Learn how to eat with your goals in mind.
                      </p>
                    </td>
                    <td
                      className={`${styles.MuiTableCell_root} ${styles.MuiTableCell_body} ${styles.MuiTableCell_alignCenter}`}
                    ></td>
                    <td
                      className={`${styles.MuiTableCell_root} ${styles.MuiTableCell_body} ${styles.MuiTableCell_alignCenter}`}
                    >
                      <div>
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          width="22"
                          height="22"
                          viewBox="0 0 22 22"
                        >
                          <path
                            fill="#0066EE"
                            d="M11 0c6.075 0 11 4.925 11 11s-4.925 11-11 11S0 17.075 0 11 4.925 0 11 0zm5.535 6L9.24 13.1l-2.796-2.67L5 11.9 9.197 16h.018L18 7.44 16.535 6z"
                          ></path>
                        </svg>
                      </div>
                    </td>
                  </tr>
                  <tr className={`${styles.MuiTableRow_root} ${styles.jss103}`}>
                    <td
                      className={`${styles.MuiTableCell_root} ${styles.MuiTableCell_body} ${styles.MuiTableCell_alignLeft}`}
                    >
                      <h3
                        className={`${styles.MuiTypography_root} ${styles.jss104} ${styles.MuiTypography_h4}`}
                      >
                        <strong>Ad-Free Experience</strong>
                      </h3>
                      <p
                        className={`${styles.MuiTypography_root} ${styles.jss105} ${styles.MuiTypography_body1}`}
                      >
                        Focus on your fitness and nutrition without ads.
                      </p>
                    </td>
                    <td
                      className={`${styles.MuiTableCell_root} ${styles.MuiTableCell_body} ${styles.MuiTableCell_alignCenter}`}
                    ></td>
                    <td
                      className={`${styles.MuiTableCell_root} ${styles.MuiTableCell_body} ${styles.MuiTableCell_alignCenter}`}
                    >
                      <div>
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          width="22"
                          height="22"
                          viewBox="0 0 22 22"
                        >
                          <path
                            fill="#0066EE"
                            d="M11 0c6.075 0 11 4.925 11 11s-4.925 11-11 11S0 17.075 0 11 4.925 0 11 0zm5.535 6L9.24 13.1l-2.796-2.67L5 11.9 9.197 16h.018L18 7.44 16.535 6z"
                          ></path>
                        </svg>
                      </div>
                    </td>
                  </tr>
                  <tr className={`${styles.MuiTableRow_root} ${styles.jss103}`}>
                    <td
                      className={`${styles.MuiTableCell_root} ${styles.MuiTableCell_body} ${styles.MuiTableCell_alignLeft}`}
                    >
                      <h3
                        className={`${styles.MuiTypography_root} ${styles.jss104} ${styles.MuiTypography_h4}`}
                      >
                        <strong>Subtract Exercise Calories</strong>
                      </h3>
                      <p
                        className={`${styles.MuiTypography_root} ${styles.jss105} ${styles.MuiTypography_body1}`}
                      >
                        Adjust your day’s calorie goal automatically.
                      </p>
                    </td>
                    <td
                      className={`${styles.MuiTableCell_root} ${styles.MuiTableCell_body} ${styles.MuiTableCell_alignCenter}`}
                    ></td>
                    <td
                      className={`${styles.MuiTableCell_root} ${styles.MuiTableCell_body} ${styles.MuiTableCell_alignCenter}`}
                    >
                      <div>
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          width="22"
                          height="22"
                          viewBox="0 0 22 22"
                        >
                          <path
                            fill="#0066EE"
                            d="M11 0c6.075 0 11 4.925 11 11s-4.925 11-11 11S0 17.075 0 11 4.925 0 11 0zm5.535 6L9.24 13.1l-2.796-2.67L5 11.9 9.197 16h.018L18 7.44 16.535 6z"
                          ></path>
                        </svg>
                      </div>
                    </td>
                  </tr>
                  <tr className={`${styles.MuiTableRow_root} ${styles.jss103}`}>
                    <td
                      className={`${styles.MuiTableCell_root} ${styles.MuiTableCell_body} ${styles.MuiTableCell_alignLeft}`}
                    >
                      <h3
                        className={`${styles.MuiTypography_root} ${styles.jss104} ${styles.MuiTypography_h4}`}
                      >
                        <strong>Quick-Add Carbs, Fat &amp; Protein</strong>
                      </h3>
                      <p
                        className={`${styles.MuiTypography_root} ${styles.jss105} ${styles.MuiTypography_body1}`}
                      >
                        Log your meals quickly and easily.
                      </p>
                    </td>
                    <td
                      className={`${styles.MuiTableCell_root} ${styles.MuiTableCell_body} ${styles.MuiTableCell_alignCenter}`}
                    ></td>
                    <td
                      className={`${styles.MuiTableCell_root} ${styles.MuiTableCell_body} ${styles.MuiTableCell_alignCenter}`}
                    >
                      <div>
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          width="22"
                          height="22"
                          viewBox="0 0 22 22"
                        >
                          <path
                            fill="#0066EE"
                            d="M11 0c6.075 0 11 4.925 11 11s-4.925 11-11 11S0 17.075 0 11 4.925 0 11 0zm5.535 6L9.24 13.1l-2.796-2.67L5 11.9 9.197 16h.018L18 7.44 16.535 6z"
                          ></path>
                        </svg>
                      </div>
                    </td>
                  </tr>
                  <tr className={`${styles.MuiTableRow_root} ${styles.jss103}`}>
                    <td
                      className={`${styles.MuiTableCell_root} ${styles.MuiTableCell_body} ${styles.MuiTableCell_alignLeft}`}
                    >
                      <h3
                        className={`${styles.MuiTypography_root} ${styles.jss104} ${styles.MuiTypography_h4}`}
                      >
                        <strong>File Export</strong>
                      </h3>
                      <p
                        className={`${styles.MuiTypography_root} ${styles.jss105} ${styles.MuiTypography_body1}`}
                      >
                        Download CSV files of all your progress.
                      </p>
                    </td>
                    <td
                      className={`${styles.MuiTableCell_root} ${styles.MuiTableCell_body} ${styles.MuiTableCell_alignCenter}`}
                    ></td>
                    <td
                      className={`${styles.MuiTableCell_root} ${styles.MuiTableCell_body} ${styles.MuiTableCell_alignCenter}`}
                    >
                      <div>
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          width="22"
                          height="22"
                          viewBox="0 0 22 22"
                        >
                          <path
                            fill="#0066EE"
                            d="M11 0c6.075 0 11 4.925 11 11s-4.925 11-11 11S0 17.075 0 11 4.925 0 11 0zm5.535 6L9.24 13.1l-2.796-2.67L5 11.9 9.197 16h.018L18 7.44 16.535 6z"
                          ></path>
                        </svg>
                      </div>
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        </div>
        <div
          className={`${styles.MuiContainer_root} ${styles.MuiContainer_maxWidthLg}`}
        >
          <div className={styles.jss117}>
            <header className={styles.jss114}>
              <div className={styles.jss65}>Premium</div>
              <h2
                className={`${styles.MuiTypography_root} ${styles.jss126} ${styles.jss116}`}
              >
                Frequently Asked Questions
              </h2>
            </header>
            <div
              className={`${styles.MuiPaper_root} ${styles.MuiExpansionPanel_root} ${styles.MuiExpansionPanel_rounded} ${styles.MuiPaper_elevation1} ${styles.MuiPaper_rounded}`}
            >
              <div
                onClick={handleShow1}
                className={`${styles.MuiButtonBase_root} ${styles.MuiExpansionPanelSummary_root}`}
                tabindex="0"
                role="button"
                aria-disabled="false"
                aria-expanded="false"
                aria-controls="faq-1-content"
                id="faq-1-header"
              >
                <div className={styles.MuiExpansionPanelSummary_content}>
                  <h3
                    className={`${styles.MuiTypography_root} ${styles.MuiTypography_h4}`}
                  >
                    When will I get charged?
                  </h3>
                </div>
                <div
                  className={`${styles.MuiButtonBase_root} ${styles.MuiIconButton_root} ${styles.MuiExpansionPanelSummary_expandIcon} ${styles.MuiIconButton_edgeEnd}`}
                  aria-disabled="false"
                  aria-hidden="true"
                >
                  <span className={styles.MuiIconButton_label}>
                    <AiOutlineDown className={styles.MuiSvgIcon_root} />
                  </span>
                </div>
              </div>
              <div
                className={`${show1 ? styles.showtext : styles.hidetext} ${
                  styles.p1
                } ${styles.MuiCollapse_container} ${styles.MuiCollapse_hidden}`}
                //   style="min-height: 0px;"
              >
                <div className={styles.MuiCollapse_wrapper}>
                  <div className={styles.MuiCollapse_wrapperInner}>
                    <div
                      aria-labelledby="faq-1-header"
                      id="faq-1-content"
                      role="region"
                    >
                      <div className={styles.MuiExpansionPanelDetails_root}>
                        <p
                          className={`${styles.MuiTypography_root} ${styles.MuiTypography_body2} ${styles.MuiTypography_colorTextSecondary}`}
                        >
                          If you’ve never upgraded to Premium or never started a
                          Premium trial before, you are eligible for a 1-month
                          trial, and the first Premium subscription charge on
                          your credit card will be after the trial. Once the
                          trial ends, your subscription will auto-renew unless
                          you cancel. If you purchased a monthly subscription,
                          you will get charged every month. If you purchased an
                          annual subscription, you will be charged every year.
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div
              className={`${styles.MuiPaper_root} ${styles.MuiExpansionPanel_root} ${styles.MuiExpansionPanel_rounded} ${styles.MuiPaper_elevation1} ${styles.MuiPaper_rounded}`}
            >
              <div
                onClick={handleShow2}
                className={`${styles.MuiButtonBase_root} ${styles.MuiExpansionPanelSummary_root}`}
                tabindex="0"
                role="button"
                aria-disabled="false"
                aria-expanded="false"
                aria-controls="faq-2-content"
                id="faq-2-header"
              >
                <div className={styles.MuiExpansionPanelSummary_content}>
                  <h3
                    className={`${styles.MuiTypography_root} ${styles.MuiTypography_h4}`}
                  >
                    Will my subscription automatically renew?
                  </h3>
                </div>
                <div
                  className={`${styles.MuiButtonBase_root} ${styles.MuiIconButton_root} ${styles.MuiExpansionPanelSummary_expandIcon} ${styles.MuiIconButton_edgeEnd}`}
                  aria-disabled="false"
                  aria-hidden="true"
                >
                  <span className={styles.MuiIconButton_label}>
                    <AiOutlineDown className={styles.MuiSvgIcon_root} />
                  </span>
                </div>
              </div>
              <div
                className={`${show2 ? styles.showtext : styles.hidetext} ${
                  styles.MuiCollapse_container
                } ${styles.MuiCollapse_hidden}`}
              >
                <div className={styles.MuiCollapse_wrapper}>
                  <div className={styles.MuiCollapse_wrapperInner}>
                    <div
                      aria-labelledby="faq-2-header"
                      id="faq-2-content"
                      role="region"
                    >
                      <div className={styles.MuiExpansionPanelDetails_root}>
                        <p
                          className={`${styles.MuiTypography_root} ${styles.MuiTypography_body2} ${styles.MuiTypography_colorTextSecondary}`}
                        >
                          MyFitnessPal Premium features are available on a
                          monthly or yearly subscription basis, depending on
                          which one you purchase. By default, your subscription
                          will renew automatically when your membership period
                          is up—unless you manually cancel your subscription.
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div
              className={`${styles.MuiPaper_root} ${styles.MuiExpansionPanel_root} ${styles.MuiExpansionPanel_rounded} ${styles.MuiPaper_elevation1} ${styles.MuiPaper_rounded}`}
            >
              <div
                onClick={handleShow3}
                className={`${styles.MuiButtonBase_root} ${styles.MuiExpansionPanelSummary_root}`}
                tabindex="0"
                role="button"
                aria-disabled="false"
                aria-expanded="false"
                aria-controls="faq-3-content"
                id="faq-3-header"
              >
                <div className={styles.MuiExpansionPanelSummary_content}>
                  <h3
                    className={`${styles.MuiTypography_root} ${styles.MuiTypography_h4}`}
                  >
                    Can I cancel anytime?
                  </h3>
                </div>
                <div
                  className={`${styles.MuiButtonBase_root} ${styles.MuiIconButton_root} ${styles.MuiExpansionPanelSummary_expandIcon} ${styles.MuiIconButton_edgeEnd}`}
                  aria-disabled="false"
                  aria-hidden="true"
                >
                  <span className={styles.MuiIconButton_label}>
                    <AiOutlineDown className={styles.MuiSvgIcon_root} />
                  </span>
                </div>
              </div>
              <div
                className={`${show3 ? styles.showtext : styles.hidetext} ${
                  styles.MuiCollapse_container
                } ${styles.MuiCollapse_hidden}`}
              >
                <div className={styles.MuiCollapse_wrapper}>
                  <div className={styles.MuiCollapse_wrapperInner}>
                    <div
                      aria-labelledby="faq-3-header"
                      id="faq-3-content"
                      role="region"
                    >
                      <div className={styles.MuiExpansionPanelDetails_root}>
                        <p
                          className={`${styles.MuiTypography_root} ${styles.MuiTypography_body2} ${styles.MuiTypography_colorTextSecondary}`}
                        >
                          Yes, you may cancel your recurring subscription at any
                          time. Cancel at least 24 hours before the next renewal
                          date to avoid being charged for the upcoming billing
                          cycle. When you cancel, you are canceling the next
                          billing charge—Premium features will remain available
                          to you until the end of your current paid subscription
                          period, regardless of when you cancel the automatic
                          renewal.
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div
              className={`${styles.MuiPaper_root} ${styles.MuiExpansionPanel_root} ${styles.MuiExpansionPanel_rounded} ${styles.MuiPaper_elevation1} ${styles.MuiPaper_rounded}`}
            >
              <div
                onClick={handleShow4}
                className={`${styles.MuiButtonBase_root} ${styles.MuiExpansionPanelSummary_root}`}
                tabindex="0"
                role="button"
                aria-disabled="false"
                aria-expanded="false"
                aria-controls="faq-4-content"
                id="faq-4-header"
              >
                <div className={styles.MuiExpansionPanelSummary_content}>
                  <h3
                    className={`${styles.MuiTypography_root} ${styles.MuiTypography_h4}`}
                  >
                    What do I need to upgrade?
                  </h3>
                </div>
                <div
                  className={`${styles.MuiButtonBase_root} ${styles.MuiIconButton_root} ${styles.MuiExpansionPanelSummary_expandIcon} ${styles.MuiIconButton_edgeEnd}`}
                  aria-disabled="false"
                  aria-hidden="true"
                >
                  <span className={styles.MuiIconButton_label}>
                    <AiOutlineDown className={styles.MuiSvgIcon_root} />
                  </span>
                </div>
              </div>
              <div
                className={`${show4 ? styles.showtext : styles.hidetext} ${
                  styles.MuiCollapse_container
                } ${styles.MuiCollapse_hidden}`}
              >
                <div className={styles.MuiCollapse_wrapper}>
                  <div className={styles.MuiCollapse_wrapperInner}>
                    <div
                      aria-labelledby="faq-4-header"
                      id="faq-4-content"
                      role="region"
                    >
                      <div className={styles.MuiExpansionPanelDetails_root}>
                        <p
                          className={`${styles.MuiTypography_root} ${styles.MuiTypography_body2} ${styles.MuiTypography_colorTextSecondary}`}
                        >
                          Just tap one of the buttons below to start a monthly
                          or annual subscription. A Premium subscription adds
                          more extensive options to MyFitnessPal's feature set,
                          increasing customizability and flexibility. Your
                          MyFitnessPal account will stay just as you've built
                          it—friends, favorite foods, diary history—with many
                          new and enhanced features added once you go Premium.
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div>
          <div
            className={`${styles.MuiContainer_root} ${styles.jss134} ${styles.MuiContainer_maxWidthLg}`}
          >
            <div className={styles.jss135}>
              <div className={`${styles.jss65} ${styles.jss66}`}>
                1-month free
              </div>
            </div>
            <div className={styles.jss136}>
              <h2
                className={`${styles.MuiTypography_root} ${styles.jss75} ${styles.jss137}`}
              >
                Go Premium, Get Results
              </h2>
            </div>
            <div className={styles.jss138}>
              <p
                className={`${styles.MuiTypography_root} ${styles.jss139} ${styles.MuiTypography_body1}`}
              >
                Choose a MyFitnessPal Premium plan to start your 1-month free
                trial. You will be charged after the trial has ended—cancel
                anytime.
              </p>
            </div>
            <div className={styles.jss140}>
              <div>
                <div className={styles.jss141}>
                  <div className={styles.jss260}>
                    <div className={styles.jss262}>
                      <span className={styles.jss261}>
                        <h4
                          className={`${styles.MuiTypography_root} ${styles.jss261} ${styles.MuiTypography_h4}`}
                        >
                          Save 67%
                        </h4>
                      </span>
                    </div>
                    <div className={styles.jss142}>
                      <div className={styles.jss143}>
                        <h3
                          className={`${styles.MuiTypography_root} ${styles.jss146} ${styles.MuiTypography_h3}`}
                        >
                          Annual
                        </h3>
                      </div>
                      <div className={styles.jss144}>
                        <h3
                          className={`${styles.MuiTypography_root} ${styles.jss74} ${styles.jss145}`}
                        >
                          $79.99
                          <h4
                            className={`${styles.MuiTypography_root} ${styles.MuiTypography_h4} ${styles.MuiTypography_displayInline}`}
                          >
                            Per Year
                          </h4>
                        </h3>
                      </div>
                      <div className={styles.jss147}>
                        <h4
                          className={`${styles.MuiTypography_root} ${styles.jss148} ${styles.MuiTypography_h4}`}
                        >
                          $79.99 billed yearly after free trial ends.
                        </h4>
                      </div>
                      <div className={styles.jss149}>
                        <button
                          className={`${styles.MuiButtonBase_root} ${styles.MuiButton_root} ${styles.MuiButton_contained} ${styles.jss83} ${styles.jss84} ${styles.jss85} ${styles.jss150} ${styles.MuiButton_containedPrimary}`}
                          tabindex="0"
                          type="button"
                        >
                          <span className={styles.MuiButton_label}>
                            Subscribe
                          </span>
                        </button>
                      </div>
                    </div>
                  </div>
                  <div className={styles.jss263}>
                    <div className={styles.jss142}>
                      <div className={styles.jss143}>
                        <h3
                          className={`${styles.MuiTypography_root} ${styles.jss146} ${styles.MuiTypography_h3}`}
                        >
                          Monthly
                        </h3>
                      </div>
                      <div className={styles.jss144}>
                        <h3
                          className={`${styles.MuiTypography_root} ${styles.jss74} ${styles.jss145}`}
                        >
                          $19.99
                          <div
                            className={`${styles.MuiTypography_root} ${styles.MuiTypography_h5} ${styles.MuiTypography_displayInline}`}
                          >
                            Per Month
                          </div>
                        </h3>
                      </div>
                      <div className={styles.jss147}>
                        <h4
                          className={`${styles.MuiTypography_root} ${styles.jss148} ${styles.MuiTypography_h4}`}
                        >
                          $19.99 billed monthly after free trial ends.
                        </h4>
                      </div>
                      <div className={styles.jss149}>
                        <button
                          className={`${styles.MuiButtonBase_root} ${styles.MuiButton_root} ${styles.MuiButton_outlined} ${styles.jss83} ${styles.jss84} ${styles.jss85} ${styles.jss150} ${styles.MuiButton_outlinedPrimary}`}
                          tabindex="0"
                          type="button"
                        >
                          <span className={styles.MuiButton_label}>
                            Subscribe
                          </span>
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>
    </>
  );
};

export default Premium;
