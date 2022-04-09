import React from "react";
import { Link, useNavigate } from "react-router-dom";
import styles from "./All.module.css";

const Stage1st = () => {
  const nav = useNavigate()
 
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
              <div
                className={`${styles.MuiGrid_root} ${styles.MuiGrid_container} ${styles.MuiGrid_direction_xs_column} ${styles.css_dw3q30}`}
              >
                <div
                  className={`${styles.MuiGrid_root} ${styles.MuiGrid_item} ${styles.css_10r4g2f}`}
                >
                  <h1
                    className={`${styles.MuiTypography_root} ${styles.MuiTypography_h2} ${styles.MuiTypography_alignCenter} ${styles.css_ak8is5}`}
                  >
                    Welcome! Just a few quick questions so we can customize
                    MyFitnessPal for you.
                  </h1>
                </div>
                <div
                  className={`${styles.MuiGrid_root} ${styles.MuiGrid_item} ${styles.css_1wxaqej}`}
                >
                  <button onClick={() => nav('/stage2')}
                    className={`${styles.MuiButton_root} ${styles.MuiButton_contained} ${styles.MuiButton_containedPrimary} ${styles.MuiButton_sizeMedium} ${styles.MuiButton_containedSizeMedium} ${styles.MuiButton_fullWidth} ${styles.MuiButtonBase_root}  ${styles.css_1gpft47}`}
                    tabindex="0"
                    type="button"
                  >
                    <span
                      className={`${styles.MuiTypography_root}${styles.MuiTypography_button1} ${styles.css_b9fb38}`}
                    >
                      <Link style={{color:'white'}} to="work">Continue</Link>
                    </span>
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
