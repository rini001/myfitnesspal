import rec from '../Home/rec.module.css'
import { Card } from './Card'
import salad from '/Users/ayush/pro/fitness/src/assets/salad.png'
import red from '/Users/ayush/pro/fitness/src/assets/red.png'
const Recipie = () =>{
    return(
        <div className = {rec.rbox}>
            <section className={rec.text}>
                <h1>Recipes & Inspiration</h1>
                <p>Get nutritionist-approved recipes and motivational workout tips from MyFitnessPal experts.</p>
               
            </section>
            <section className={rec.flex}>
                <Card image={salad} 
                ctext={'What the 1,200-Calorie Diet Looks Like'}/>
                <Card image={red} 
                ctext={'What the 1,200-Calorie Diet Looks Like'}/>
                <Card image={salad} 
                ctext={'What the 1,200-Calorie Diet Looks Like'}/>
                
             </section>
        </div>
    )
}

export {Recipie}