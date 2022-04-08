import { useEffect,useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import ex from '../Exercise/ex.module.css'
import { getData } from '../Redux/Exercise/exAction'
const Exercise = () => {
    const exname = useSelector(state => state.exercise)
    const dispatch = useDispatch()
    const [search, setSearch] = useState([])
    const [find, setFind] = useState('')


    function handleChange(event){
        setSearch(event.target.value)
    }
    function handleSubmit(event){
        event.preventDefault()
        dispatch(getData(search))
    }
    const {exercise, loading} = exname
    console.log(exname);
   
   return(
       
        <div className={ex.mainb}>
            <section className={ex.bold}>
                <h2>Calories Burned From Exercise</h2>
                <hr />
            </section>
            <section className={ex.dev}>
                <section className={ex.search}>
                    <form className={ex.sform} onSubmit={handleSubmit}>
                        <p>Search our exercise database by name:</p>
                        <input type="text" value={search} onChange={handleChange}/>
                        <input type="submit"/>
                    </form>
                    <p>Matching exercises:</p>
                    <section className={ex.box}>

                        {exercise.map(res => {
                            return (
                                <div key={res.id}>
                                    <p style={{cursor:'pointer', fontSize:'16px', color: 'black', padding:'0px 2px'}} onClick={() => setFind(res.title)}>{res.title}</p>
                                </div>
                            )
                        })}
                    </section>
                </section>
                <section className={ex.select}>
                    <h3>...or choose an exercise below:</h3>
                    <form className={ex.op}>
                        <select>
                            <option value="9Round">9Rounds</option>
                            <option value="9Round">9Rounds</option>
                            <option value="9Round">9Rounds</option>
                            <option value="9Round">9Rounds</option>
                        </select>
                    </form>
                    <section className={ex.calc}>
                        <section className={ex.ctext}>
                            <h3>How Many Calories Did I Burn ?</h3>
                            <h4>{find}</h4>
                        </section>    
                        <section className={ex.wc}>
                            <form>
                            <span>Your Weight: </span>
                            <input type="text"/>
                            <select>
                                <option value="pounds">Pounds</option>
                                <option value="kilogram">Kilogram</option>
                            </select>
                            </form>
                        </section>
                        <section className={ex.lc}>
                            <form>
                                <span>How Long: </span>
                                <input type="text"/>
                                <span>Minutes</span>
                            </form>
                        </section>
                        <span>Calories burned: <span className={ex.g}>{'0'}</span></span>
                    </section>
                </section>
            </section>
           
        </div>
    )
}

const mapStateToProps = state => {

}

export {Exercise}