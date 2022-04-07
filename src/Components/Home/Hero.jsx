import hero from '../Home/hero.module.css'
import { Download } from './Download'
import { Feature } from './Feature'
import { Heros } from './Heros'
import { Recipie } from './Recipie'

const Hero = () =>{
    return(
    
        <div>
            <section className={hero.hero}>
                <section className={hero.text}>
                    <h1>Fitness starts with what you eat.</h1>
                    <p>Take control of your goals. Track calories, break down ingredients, and log activities with MyFitnessPal.</p>
                    <button>START FOR FREE</button>
                    <p>Already have an account?<span> <a href="">Login</a></span></p>
                </section>
                <span className={hero.image}>
                    
                </span>
                <section className={hero.yellow}>

                </section>
            </section>
            <Heros/>
            <Feature/>
            <Recipie/>
            <Download/>
            
        </div>
    )
}
export {Hero}