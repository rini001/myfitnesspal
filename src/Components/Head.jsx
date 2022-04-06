import land from '../Components/head.module.css'
import diary from '../assets/diary.svg'
import shoe from '../assets/shoe.svg'
import barcode from '../assets/barcode.svg'


const Head = () =>{
    return(
        <div>
        <section>
            <section className={land.container}>
            <section className={land.tcont}>
                <h1>
                Fitness starts with what you eat.
                </h1>
                <p>
                Take control of your goals. Track calories, break down ingredients, and log activities with MyFitnessPal.
                </p>
                <button>
                    START FOR FREE
                </button>
                <p>
                Already have an account? Login
                </p>
            </section>
            <span className={land.hero}>
                <img src="https://www.myfitnesspal.com/_next/image?url=%2F_next%2Fstatic%2Fmedia%2Fhero-collage-top-large%402x.dcc5ac56.png&w=1200&q=75" alt="img" />
            </span>
            <section className={land.dummy}></section>
            </section>
            <div>

            </div>
            <section className={land.yellow}>

                <section className={land.search}>
                    <h1>Search over 11 million foods in our database.</h1>
                    <p>What's in your food? Learn about calorie count, nutrition information and serving size.</p>
                    

                </section>
                <section className={land.sbox}>
                <input type="text" placeholder='Yor Serch Goes Here'/>
                </section>

            </section>
            
        </section>

        <section className={land.sec}>
                <section className={land.heading}>
                    <span className={land.h1}>The Tools for Your Goals</span>
                    <span className={land.p}>Trying to lose weight, tone up, lower your BMI, or invest in your overall 
                        health? We give you the right features to hit your goals.</span>
                </section>
                <div className={land.features}>
                    <div className={land.fbox}>
                        <img src={diary} alt="" />
                        <h3>Learn. Track. Improve.</h3>
                        <p>Keeping a food diary helps you understand your habits and increases your likelihood of hitting your goals.</p>
                    </div>
                    <div className={land.fbox}>
                        <img src={barcode} alt="" />
                        <h1>Logging Simplified</h1>
                        <p>Scan barcodes, save meals and recipes, and use Quick Tools for fast and easy food tracking.</p>
                    </div>
                    <div className={land.fbox}>
                        <img src={shoe} alt="" />
                        <h1>Stay Motivated</h1>
                        <p>Join the World's Largest Fitness Community for advice, tips, and support 24/7.</p>
                    </div>
                    
                </div>
                <div className={land.btn}>
                    <button>START YOUR JOURNEY TODAY</button>
                </div>
            </section>
        </div>
        
    )
}

export {Head}