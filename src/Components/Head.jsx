import './head.modules.css'
import diary from '../assets/diary.svg'
import barcode from '../assets/barcode.svg'
import shoe from '../assets/shoe.svg'

const Head = () =>{
    return(
        <div id="hero-h">
            <div className='block'>
                <section className='text'>
                    <h1>Fitness starts with what you eat.</h1>
                    <p>Take control of your goals. Track calories, break down ingredients, and log activities with MyFitnessPal.</p>
                    <button>Start For Free</button>
                    <p>Already have an accout ?</p>
                </section>
                <section className='img'>

                </section>
                <section className='two'>
                   
                </section>
                <section className='one'>
                <section className="search">
                <div className="info">
                    <h1>Search over 11 million foods in our database.</h1>
                    <p>What's in your food? Learn about calorie count, nutrition information and serving size.</p>
                </div>
                <div className="seachin">
                    <input type="text" name="" id="" placeholder='Get the nutrition of any food like apple, banana'/>
                </div>
                </section>
                </section>
            </div>
            <section>
                <section className="heading">
                    <span className='h1'>The Tools for Your Goals</span>
                    <span className='p'>Trying to lose weight, tone up, lower your BMI, or invest in your overall 
                        health? We give you the right features to hit your goals.</span>
                </section>
                <div className="features">
                    <div className='f-box'>
                        <img src={diary} alt="" />
                        <h3>Learn. Track. Improve.</h3>
                        <p>Keeping a food diary helps you understand your habits and increases your likelihood of hitting your goals.</p>
                    </div>
                    <div className='f-box'>
                        <img src={barcode} alt="" />
                        <h1>Logging Simplified</h1>
                        <p>Scan barcodes, save meals and recipes, and use Quick Tools for fast and easy food tracking.</p>
                    </div>
                    <div className='f-box'>
                        <img src={shoe} alt="" />
                        <h1>Stay Motivated</h1>
                        <p>Join the World's Largest Fitness Community for advice, tips, and support 24/7.</p>
                    </div>
                    
                </div>
                <div className="btn">
                    <button>START YOUR JOURNEY TODAY</button>
                </div>
            </section>
            <section>
                
            </section>
            
        </div>
    )
}

export {Head}