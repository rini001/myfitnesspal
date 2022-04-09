import ex from '../EBoard/ex.module.css'
import {useState} from 'react'
const Board = () => {
    const [text, setText] = useState('')
    const [isBox, setIsBox] = useState(false);
    function show(){
        if(isBox === true){
            setIsBox(false)
        }
        else{
            setIsBox(true)
        }
    }
    return(
        
            <div className={ex.man}>
                <section className={ex.calt}>
                    <h3>Your Exercise Diary for:</h3>
                    <input className={ex.date} type="date"/>
                </section>
                <section className={ex.tone}>
             <table className={ex.table}>
                    <thead>
                        <tr>
                            <th className={ex.sec}>Cardiovascular</th>
                            <th className={ex.head}>Minutes</th>
                            <th className={ex.head}>Calories Burned</th>
                            
    
                        </tr>
                    </thead>
                    <tbody>

                        <tr className={ex.bc}>
                            <td className={ex.first}>First</td>
                            <td className={ex.h2}>2000</td>
                            <td className={ex.h2}>2000</td>
                            <th><a href="#">-</a></th>
                        </tr>
                        <tr>
                            <td>
                                <div>
                                    <a href="#">Add Exercise </a>{" | "}
                                    <a href="#">Quick Tools</a>
                                </div>
                            </td>
                        </tr>
                      
                     </tbody>
                    </table>
                    </section>
                    <section className={ex.ttwo}>
                        <table>
                           <tr className={ex.tc}>
                               <th className={ex.sec}>Strenght Training</th>
                               <th className={ex.head}>Sets</th>
                               <th className={ex.head}>Reps/Set</th>
                               <th className={ex.head}>Weight/Set</th>
                           </tr>
                        </table>
                        <tbody>
                        <tr className={ex.me}>
                            <td className={ex.second}>First</td>
                            <td className={ex.somel}>Second</td>
                            <td className={ex.somel}>third</td>
                            <td className={ex.somel}>Fourth</td>
                            <td className={ex.somel}>fifts</td>
                        </tr>
                        <tr>
                            <td>
                                <div>
                                    <a href="#">Add Exercise </a>{" | "}
                                    <a href="#">Quick Tools</a>
                                </div>
                            </td>
                        </tr>
                        </tbody>

                    </section>

                
                   
              
                <section className={ex.notes}>
                    <div className={ex.edi}> 
                    <h3 style={{color: '#00548f'}}>Today's Exercise Note</h3>
                    <h4><a onClick={show} href="#">✒</a></h4>
                    </div>
                    <section>
                        
                        {isBox ? <textarea cols="90" rows="10" value={text} onChange={(e) => setText(e.target.value)}></textarea>: <section className={ex.box}> <p>{text}</p></section>}
                        
                    </section>
                </section> 
            </div>
        
    )
}
export {Board}