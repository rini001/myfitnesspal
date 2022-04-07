import { Card } from '../Home/Card.jsx'
import find from '../Search/find.module.css'
import {BsSearch} from 'react-icons/bs'
const Find = () => {
    return(
        <div>
            <section className= {find.search}>
            <input type="text" placeholder='Search Your Food' name="" id="" />
            </section>
            <section className={find.card}>
        
            </section>
        </div>
    )
}
export {Find}