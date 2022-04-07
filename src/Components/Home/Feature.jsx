import feat from '../Home/feat.module.css'
import shoe from '/Users/ayush/pro/fitness/src/assets/shoe.svg'
import diary from '/Users/ayush/pro/fitness/src/assets/diary.svg'
import barcode from '/Users/ayush/pro/fitness/src/assets/barcode.svg'
const Feature = () => {
    return (
        <div className={feat.fbox}>
            <section className={feat.text}>
                <h1>The Tools for Your Goals</h1>
                <p>Trying to lose weight, tone up, lower your BMI, or invest in your overall health? We give you the right features to hit your goals.</p>
            </section>
            <section className={feat.sbox}>
                <div className={feat.b1}>
                    <img src={diary} alt="" />
                    <h3>Learn. Track. Improve.</h3>
                    <p>Keeping a food diary helps you understand your habits and increases your likelihood of hitting your goals.</p>
                </div>
                <div className={feat.b1}>
                    <img src={barcode} alt="" />
                    <h3>Logging Simplified</h3>
                    <p>Scan barcodes, save meals and recipes, and use Quick Tools for fast and easy food tracking.</p>
                </div>
                <div className={feat.b1}>
                    <img src={shoe} alt="" />
                    <h3>Stay Motivated</h3>
                    <p>Join the World’s Largest Fitness Community for advice, tips, and support 24/7.</p>
                </div>
            </section>
            <section className={feat.btn}>
            <button>START YOUR JOURNEY TODAY</button>
            </section>

        </div>
    )
}

export {Feature}