import React, { useState } from "react";
import styles from "./Premium.module.css";
import { AiOutlineDown } from "react-icons/ai";
import { AiFillCheckCircle } from "react-icons/ai";

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
      <main className={styles.premium52}>
        <div
          className={`${styles.mainContainer} ${styles.premium53} ${styles.permium1001}`}
        >
          <div className={styles.premium54}>
            <div className={styles.premium55}>
              <div className={styles.premium58}>
                <div className={styles.premium65}>Premium</div>
              </div>
              <div className={styles.premium59}>
                <h1
                  className={`${styles.margin0} ${styles.premium74} ${styles.premium60}`}
                >
                  Start Your Free Trial Today
                </h1>
              </div>
              <div className={styles.premium61}>
                <p
                  className={`${styles.margin0} ${styles.premium62} ${styles.Fontstyle}`}
                >
                  Premium members are 65% more likely to reach their weight loss
                  goal.
                </p>
              </div>
              <button
                className={`${styles.btntextstyle}  ${styles.btnpadding}  ${styles.premium85} ${styles.premium63} ${styles.buttoncolor}`}
                type="button"
              >
                <span className={styles.btnspan}>
                  <span className={`${styles.margin0} ${styles.premium80}`}>
                    Start free 1-month trial
                  </span>
                </span>
              </button>
            </div>
            <div className={styles.premium56}>
              <img
                src="https://www.myfitnesspal.com/react-static/e4537e1d014a66cb6083eb6025813bb6.png"
                className={styles.premium57}
                alt="hero gif"
              />
            </div>
          </div>
          <div>
            <div
              className={`${styles.premium64} ${styles.secondcontainer} ${styles.widthchange}`}
            >
              <div className={`${styles.boxes} ${styles.responsivwidth}`}>
                <div className={styles.premium86}>
                  <div className={styles.premium87}>
                    <img
                      src="https://www.myfitnesspal.com/react-static/51b6c01dec78ddfb6d693b1ff8d23d44.png"
                      className={styles.premium88}
                      alt="feature logo"
                    />
                  </div>
                  <div>
                    <div className={styles.premium90}>
                      <h3
                        className={`${styles.margin0} ${styles.premium91} ${styles.boxesh3}`}
                      >
                        Meal Plans &amp; Recipes
                      </h3>
                    </div>
                    <p
                      className={`${styles.margin0} ${styles.premium92} ${styles.Fontstyle}`}
                    >
                      Gain insight into your nutrition
                    </p>
                  </div>
                </div>
              </div>
              <div className={`${styles.boxes} ${styles.responsivwidth}`}>
                <div className={styles.premium86}>
                  <div className={styles.premium87}>
                    <img
                      src="https://www.myfitnesspal.com/react-static/c51db6a037b248c10816974faac845f9.png"
                      className={styles.premium88}
                      alt="feature logo"
                    />
                  </div>
                  <div>
                    <div className={styles.premium90}>
                      <h3
                        className={`${styles.margin0} ${styles.premium91} ${styles.boxesh3}`}
                      >
                        Personalized Goals
                      </h3>
                    </div>
                    <p
                      className={`${styles.margin0} ${styles.premium92} ${styles.Fontstyle}`}
                    >
                      Get guidance &amp; coaching tailored to you
                    </p>
                  </div>
                </div>
              </div>
              <div className={`${styles.boxes} ${styles.responsivwidth}`}>
                <div className={styles.premium86}>
                  <div className={styles.premium87}>
                    <img
                      src="https://www.myfitnesspal.com/react-static/93c7966575adb77a179235b991596985.png"
                      className={styles.premium88}
                      alt="feature logo"
                    />
                  </div>
                  <div>
                    <div className={styles.premium90}>
                      <h3
                        className={`${styles.margin0} ${styles.premium91} ${styles.boxesh3}`}
                      >
                        Ad-Free Experience
                      </h3>
                    </div>
                    <p
                      className={`${styles.margin0} ${styles.premium92} ${styles.Fontstyle}`}
                    >
                      Focus on your goals without distraction
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className={`${styles.mainContainer} ${styles.premium93}`}>
          <div className={styles.premium94}>
            <header className={styles.premium96}>
              <h2
                className={`${styles.margin0} ${styles.premium75} ${styles.premium97}`}
              >
                Your Goals, Your Way
              </h2>
              <p
                className={`${styles.margin0} ${styles.premium98} ${styles.Fontstyle}`}
              >
                Advanced tools and in-depth analysis to help you build lifelong
                healthy habits.
              </p>
            </header>
            <div className={styles.premium101}>
              <div className={styles.premium102}></div>
              <table className={`${styles.Table} ${styles.premium95}`}>
                <thead className={`${styles.TableHead}`}>
                  <tr className={styles.TableRow}>
                    <th
                      className={`${styles.TableColm} ${styles.Thheadcolor} ${styles.thandtdalignitem}`}
                    ></th>
                    <th
                      className={`${styles.TableColm} ${styles.Thheadcolor} ${styles.thandtdalignitem}`}
                    >
                      <span className={styles.premium100}>Free</span>
                    </th>
                    <th
                      className={`${styles.TableColm} ${styles.Thheadcolor} ${styles.thandtdalignitem}`}
                    >
                      <span className={styles.premium100}>Premium</span>
                    </th>
                  </tr>
                </thead>
                <tbody>
                  <tr
                    className={`${styles.TableRow_root} ${styles.premium103}`}
                  >
                    <td
                      className={`${styles.TableColm} ${styles.tdcolor} ${styles.tdalignLeft}`}
                    >
                      <h3
                        className={`${styles.margin0} ${styles.premium104} ${styles.tdhdfont}`}
                      >
                        <strong>Nutrition Tracking</strong>
                      </h3>
                      <p
                        className={`${styles.margin0} ${styles.premium105} ${styles.Fontstyle}`}
                      >
                        Log your food from our extensive database.
                      </p>
                    </td>
                    <td
                      className={`${styles.TableColm} ${styles.tdcolor} ${styles.thandtdalignitem}`}
                    >
                      <div>
                        <AiFillCheckCircle className={styles.yes} />
                      </div>
                    </td>
                    <td
                      className={`${styles.TableColm} ${styles.tdcolor} ${styles.thandtdalignitem}`}
                    >
                      <div>
                        <AiFillCheckCircle className={styles.yes} />
                      </div>
                    </td>
                  </tr>
                  <tr
                    className={`${styles.TableRow_root} ${styles.premium103}`}
                  >
                    <td
                      className={`${styles.TableColm} ${styles.tdcolor} ${styles.tdalignLeft}`}
                    >
                      <h3
                        className={`${styles.margin0} ${styles.premium104} ${styles.tdhdfont}`}
                      >
                        <strong>
                          Customizable Carbs, Protein &amp; Fat Goals
                        </strong>
                      </h3>
                      <p
                        className={`${styles.margin0} ${styles.premium105} ${styles.Fontstyle}`}
                      >
                        Track your macros by gram or percentage.
                      </p>
                    </td>
                    <td
                      className={`${styles.TableColm} ${styles.tdcolor} ${styles.thandtdalignitem}`}
                    ></td>
                    <td
                      className={`${styles.TableColm} ${styles.tdcolor} ${styles.thandtdalignitem}`}
                    >
                      <div>
                        <AiFillCheckCircle className={styles.yes} />
                      </div>
                    </td>
                  </tr>
                  <tr
                    className={`${styles.TableRow_root} ${styles.premium103}`}
                  >
                    <td
                      className={`${styles.TableColm} ${styles.tdcolor} ${styles.tdalignLeft}`}
                    >
                      <h3
                        className={`${styles.margin0} ${styles.premium104} ${styles.tdhdfont}`}
                      >
                        <strong>Guided Fitness &amp; Nutrition Plans</strong>
                      </h3>
                      <p
                        className={`${styles.margin0} ${styles.premium105} ${styles.Fontstyle}`}
                      >
                        Get coaching and content to achieve your goals.
                      </p>
                    </td>
                    <td
                      className={`${styles.TableColm} ${styles.tdcolor} ${styles.thandtdalignitem}`}
                    ></td>
                    <td
                      className={`${styles.TableColm} ${styles.tdcolor} ${styles.thandtdalignitem}`}
                    >
                      <div>
                        <AiFillCheckCircle className={styles.yes} />
                      </div>
                    </td>
                  </tr>
                  <tr
                    className={`${styles.TableRow_root} ${styles.premium103}`}
                  >
                    <td
                      className={`${styles.TableColm} ${styles.tdcolor} ${styles.tdalignLeft}`}
                    >
                      <h3
                        className={`${styles.margin0} ${styles.premium104} ${styles.tdhdfont}`}
                      >
                        <strong>Custom Home Screen Dashboard</strong>
                      </h3>
                      <p
                        className={`${styles.margin0} ${styles.premium105} ${styles.Fontstyle}`}
                      >
                        Reach goals faster by seeing what’s important to you.
                      </p>
                    </td>
                    <td
                      className={`${styles.TableColm} ${styles.tdcolor} ${styles.thandtdalignitem}`}
                    ></td>
                    <td
                      className={`${styles.TableColm} ${styles.tdcolor} ${styles.thandtdalignitem}`}
                    >
                      <div>
                        <AiFillCheckCircle className={styles.yes} />
                      </div>
                    </td>
                  </tr>
                  <tr
                    className={`${styles.TableRow_root} ${styles.premium103}`}
                  >
                    <td
                      className={`${styles.TableColm} ${styles.tdcolor} ${styles.tdalignLeft}`}
                    >
                      <h3
                        className={`${styles.margin0} ${styles.premium104} ${styles.tdhdfont}`}
                      >
                        <strong>Food Analysis &amp; Insights</strong>
                      </h3>
                      <p
                        className={`${styles.margin0} ${styles.premium105} ${styles.Fontstyle}`}
                      >
                        Follow your progress through your data.
                      </p>
                    </td>
                    <td
                      className={`${styles.TableColm} ${styles.tdcolor} ${styles.thandtdalignitem}`}
                    ></td>
                    <td
                      className={`${styles.TableColm} ${styles.tdcolor} ${styles.thandtdalignitem}`}
                    >
                      <div>
                        <AiFillCheckCircle className={styles.yes} />
                      </div>
                    </td>
                  </tr>
                  <tr
                    className={`${styles.TableRow_root} ${styles.premium103}`}
                  >
                    <td
                      className={`${styles.TableColm} ${styles.tdcolor} ${styles.tdalignLeft}`}
                    >
                      <h3
                        className={`${styles.margin0} ${styles.premium104} ${styles.tdhdfont}`}
                      >
                        <strong>Meals &amp; Recipes</strong>
                      </h3>
                      <p
                        className={`${styles.margin0} ${styles.premium105} ${styles.Fontstyle}`}
                      >
                        Learn how to eat with your goals in mind.
                      </p>
                    </td>
                    <td
                      className={`${styles.TableColm} ${styles.tdcolor} ${styles.thandtdalignitem}`}
                    ></td>
                    <td
                      className={`${styles.TableColm} ${styles.tdcolor} ${styles.thandtdalignitem}`}
                    >
                      <div>
                        <AiFillCheckCircle className={styles.yes} />
                      </div>
                    </td>
                  </tr>
                  <tr
                    className={`${styles.TableRow_root} ${styles.premium103}`}
                  >
                    <td
                      className={`${styles.TableColm} ${styles.tdcolor} ${styles.tdalignLeft}`}
                    >
                      <h3
                        className={`${styles.margin0} ${styles.premium104} ${styles.tdhdfont}`}
                      >
                        <strong>Ad-Free Experience</strong>
                      </h3>
                      <p
                        className={`${styles.margin0} ${styles.premium105} ${styles.Fontstyle}`}
                      >
                        Focus on your fitness and nutrition without ads.
                      </p>
                    </td>
                    <td
                      className={`${styles.TableColm} ${styles.tdcolor} ${styles.thandtdalignitem}`}
                    ></td>
                    <td
                      className={`${styles.TableColm} ${styles.tdcolor} ${styles.thandtdalignitem}`}
                    >
                      <div>
                        <AiFillCheckCircle className={styles.yes} />
                      </div>
                    </td>
                  </tr>
                  <tr
                    className={`${styles.TableRow_root} ${styles.premium103}`}
                  >
                    <td
                      className={`${styles.TableColm} ${styles.tdcolor} ${styles.tdalignLeft}`}
                    >
                      <h3
                        className={`${styles.margin0} ${styles.premium104} ${styles.tdhdfont}`}
                      >
                        <strong>Subtract Exercise Calories</strong>
                      </h3>
                      <p
                        className={`${styles.margin0} ${styles.premium105} ${styles.Fontstyle}`}
                      >
                        Adjust your day’s calorie goal automatically.
                      </p>
                    </td>
                    <td
                      className={`${styles.TableColm} ${styles.tdcolor} ${styles.thandtdalignitem}`}
                    ></td>
                    <td
                      className={`${styles.TableColm} ${styles.tdcolor} ${styles.thandtdalignitem}`}
                    >
                      <div>
                        <AiFillCheckCircle className={styles.yes} />
                      </div>
                    </td>
                  </tr>
                  <tr
                    className={`${styles.TableRow_root} ${styles.premium103}`}
                  >
                    <td
                      className={`${styles.TableColm} ${styles.tdcolor} ${styles.tdalignLeft}`}
                    >
                      <h3
                        className={`${styles.margin0} ${styles.premium104} ${styles.tdhdfont}`}
                      >
                        <strong>Quick-Add Carbs, Fat &amp; Protein</strong>
                      </h3>
                      <p
                        className={`${styles.margin0} ${styles.premium105} ${styles.Fontstyle}`}
                      >
                        Log your meals quickly and easily.
                      </p>
                    </td>
                    <td
                      className={`${styles.TableColm} ${styles.tdcolor} ${styles.thandtdalignitem}`}
                    ></td>
                    <td
                      className={`${styles.TableColm} ${styles.tdcolor} ${styles.thandtdalignitem}`}
                    >
                      <div>
                        <AiFillCheckCircle className={styles.yes} />
                      </div>
                    </td>
                  </tr>
                  <tr
                    className={`${styles.TableRow_root} ${styles.premium103}`}
                  >
                    <td
                      className={`${styles.TableColm} ${styles.tdcolor} ${styles.tdalignLeft}`}
                    >
                      <h3
                        className={`${styles.margin0} ${styles.premium104} ${styles.tdhdfont}`}
                      >
                        <strong>File Export</strong>
                      </h3>
                      <p
                        className={`${styles.margin0} ${styles.premium105} ${styles.Fontstyle}`}
                      >
                        Download CSV files of all your progress.
                      </p>
                    </td>
                    <td
                      className={`${styles.TableColm} ${styles.tdcolor} ${styles.thandtdalignitem}`}
                    ></td>
                    <td
                      className={`${styles.TableColm} ${styles.tdcolor} ${styles.thandtdalignitem}`}
                    >
                      <div>
                        <AiFillCheckCircle className={styles.yes} />
                      </div>
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        </div>
        <div className={`${styles.mainContainer} ${styles.permium1001}`}>
          <div className={styles.premium117}>
            <header className={styles.premium114}>
              <div className={styles.premium65}>Premium</div>
              <h2
                className={`${styles.margin0} ${styles.premium126} ${styles.premium116}`}
              >
                Frequently Asked Questions
              </h2>
            </header>
            <div className={styles.questionbox}>
              <div
                onClick={handleShow1}
                className={`${styles.btntextstyle} ${styles.questions}`}
              >
                <div className={styles.questionstext}>
                  <h3 className={`${styles.margin0} ${styles.tdhdfont}`}>
                    When will I get charged?
                  </h3>
                </div>
                <div className={`${styles.btntextstyle} ${styles.arrowicon} `}>
                  <span className={styles.Iconspan}>
                    <AiOutlineDown
                      className={`${show1 ? styles.upside : styles.downside} ${
                        styles.Aiicon
                      }`}
                    />
                  </span>
                </div>
              </div>
              <div
                className={`${show1 ? styles.showtext : styles.hidetext} ${
                  styles.p1
                } ${styles.anscontainer}`}
                //   style="min-height: 0px;"
              >
                <div className={styles.anscontainer2}>
                  <div className={styles.anscontainer3}>
                    <div>
                      <div className={styles.anscontainer4}>
                        <p className={`${styles.margin0} ${styles.anstext}`}>
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
            <div className={`${styles.questionbox}`}>
              <div
                onClick={handleShow2}
                className={`${styles.btntextstyle} ${styles.questions}`}
              >
                <div className={styles.questionstext}>
                  <h3 className={`${styles.margin0} ${styles.tdhdfont}`}>
                    Will my subscription automatically renew?
                  </h3>
                </div>
                <div className={`${styles.btntextstyle} ${styles.arrowicon} `}>
                  <span className={styles.Iconspan}>
                    <AiOutlineDown
                      className={`${show2 ? styles.upside : styles.downside} ${
                        styles.Aiicon
                      }`}
                    />
                  </span>
                </div>
              </div>
              <div
                className={`${show2 ? styles.showtext : styles.hidetext} ${
                  styles.anscontainer
                }`}
              >
                <div className={styles.anscontainer2}>
                  <div className={styles.anscontainer3}>
                    <div>
                      <div className={styles.anscontainer4}>
                        <p className={`${styles.margin0} ${styles.anstext}`}>
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
            <div className={`${styles.questionbox}`}>
              <div
                onClick={handleShow3}
                className={`${styles.btntextstyle} ${styles.questions}`}
              >
                <div className={styles.questionstext}>
                  <h3 className={`${styles.margin0} ${styles.tdhdfont}`}>
                    Can I cancel anytime?
                  </h3>
                </div>
                <div className={`${styles.btntextstyle} ${styles.arrowicon} `}>
                  <span className={styles.Iconspan}>
                    <AiOutlineDown
                      className={`${show3 ? styles.upside : styles.downside} ${
                        styles.Aiicon
                      }`}
                    />
                  </span>
                </div>
              </div>
              <div
                className={`${show3 ? styles.showtext : styles.hidetext} ${
                  styles.anscontainer
                }`}
              >
                <div className={styles.anscontainer2}>
                  <div className={styles.anscontainer3}>
                    <div>
                      <div className={styles.anscontainer4}>
                        <p className={`${styles.margin0} ${styles.anstext}`}>
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
            <div className={`${styles.questionbox}`}>
              <div
                onClick={handleShow4}
                className={`${styles.btntextstyle} ${styles.questions}`}
              >
                <div className={styles.questionstext}>
                  <h3 className={`${styles.margin0} ${styles.tdhdfont}`}>
                    What do I need to upgrade?
                  </h3>
                </div>
                <div className={`${styles.btntextstyle} ${styles.arrowicon} `}>
                  <span className={styles.Iconspan}>
                    <AiOutlineDown
                      className={`${show4 ? styles.upside : styles.downside} ${
                        styles.Aiicon
                      }`}
                    />
                  </span>
                </div>
              </div>
              <div
                className={`${show4 ? styles.showtext : styles.hidetext} ${
                  styles.anscontainer
                }`}
              >
                <div className={styles.anscontainer2}>
                  <div className={styles.anscontainer3}>
                    <div>
                      <div className={styles.anscontainer4}>
                        <p className={`${styles.margin0} ${styles.anstext}`}>
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
            className={`${styles.mainContainer} ${styles.premium134} ${styles.permium1001}`}
          >
            <div className={styles.premium135}>
              <div className={`${styles.premium65} ${styles.premium66}`}>
                1-month free
              </div>
            </div>
            <div className={styles.premium136}>
              <h2
                className={`${styles.margin0} ${styles.premium75} ${styles.premium137}`}
              >
                Go Premium, Get Results
              </h2>
            </div>
            <div className={styles.premium138}>
              <p
                className={`${styles.margin0} ${styles.premium139} ${styles.Fontstyle}`}
              >
                Choose a MyFitnessPal Premium plan to start your 1-month free
                trial. You will be charged after the trial has ended—cancel
                anytime.
              </p>
            </div>
            <div className={styles.premium140}>
              <div>
                <div className={styles.premium141}>
                  <div className={styles.premium260}>
                    <div className={styles.premium262}>
                      <span className={styles.premium261}>
                        <h4
                          className={`${styles.margin0} ${styles.premium261} ${styles.tdhdfont}`}
                        >
                          Save 67%
                        </h4>
                      </span>
                    </div>
                    <div className={styles.premium142}>
                      <div className={styles.premium143}>
                        <h3
                          className={`${styles.margin0} ${styles.premium146} ${styles.boxesh3}`}
                        >
                          Annual
                        </h3>
                      </div>
                      <div className={styles.premium144}>
                        <h3
                          className={`${styles.margin0} ${styles.premium74} ${styles.premium145}`}
                        >
                          $79.99
                          <h4
                            className={`${styles.margin0} ${styles.tdhdfont} ${styles.pertext}`}
                          >
                            Per Year
                          </h4>
                        </h3>
                      </div>
                      <div className={styles.premium147}>
                        <h4
                          className={`${styles.margin0} ${styles.premium148} ${styles.tdhdfont}`}
                        >
                          $79.99 billed yearly after free trial ends.
                        </h4>
                      </div>
                      <div className={styles.premium149}>
                        <button
                          className={`${styles.btntextstyle} ${styles.btnpadding}  ${styles.premium85} ${styles.premium150} ${styles.buttoncolor}`}
                          type="button"
                        >
                          <span className={styles.btnspan}>Subscribe</span>
                        </button>
                      </div>
                    </div>
                  </div>
                  <div className={styles.premium263}>
                    <div className={styles.premium142}>
                      <div className={styles.premium143}>
                        <h3
                          className={`${styles.margin0} ${styles.premium146} ${styles.boxesh3}`}
                        >
                          Monthly
                        </h3>
                      </div>
                      <div className={styles.premium144}>
                        <h3
                          className={`${styles.margin0} ${styles.premium74} ${styles.premium145}`}
                        >
                          $19.99
                          <div
                            className={`${styles.margin0} ${styles.rateh5} ${styles.pertext}`}
                          >
                            Per Month
                          </div>
                        </h3>
                      </div>
                      <div className={styles.premium147}>
                        <h4
                          className={`${styles.margin0} ${styles.premium148} ${styles.tdhdfont}`}
                        >
                          $19.99 billed monthly after free trial ends.
                        </h4>
                      </div>
                      <div className={styles.premium149}>
                        <button
                          className={`${styles.btntextstyle}  ${styles.whitebtn}  ${styles.premium85} ${styles.premium150} ${styles.Button_outlinedPrimary}`}
                          type="button"
                        >
                          <span className={styles.btnspan}>Subscribe</span>
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
