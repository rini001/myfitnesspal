import { Card } from '../Home/Card.jsx'
import find from '../Search/find.module.css'
import {BsSearch} from 'react-icons/bs'
import { useEffect, useState } from 'react'
const Find = () => {
    const [food, searchFood] = useState('');
    const [data, setData] = useState([]);
    
    function handle(e){
        searchFood(e.target.value)
        
    }
    function api(){
        fetch(`http://localhost:3000/food?q=${food}`)
        .then(res => res.json())
        .then(js => setData(js))
        .catch(err => console.log('error'))
    }
    useEffect(() => {
        
    },[])
    function down(e){
        if(e.key === 'Enter'){
           console.log(data);
           api()
        }
    }
    return(
        <div>
            <section className= {find.search}>
            <input onKeyDown={down} type="text" value = {food} onChange={handle} placeholder='Search Your Food'/>
            </section>
            <section className={find.ge}>
            {data.map((res)=>{
                return(
                    res.length !== 0?
                    <section className={find.card}>
                        <h2>{res.name}</h2>
                        <p>{`Calorie ${res.calorie}`}</p>
                    </section>:<p>h</p>
                )
            })}
            </section>
            
        </div>
    )
}
export {Find}