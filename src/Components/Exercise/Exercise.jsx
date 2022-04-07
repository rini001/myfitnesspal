import ex from '../Exercise/ex.module.css'
const Exercise = () => {
    return(
        <div className={ex.mainb}>
            <section className={ex.bold}>
                <h2>Calories Burned From Exercise</h2>
                <hr />
            </section>
            <section className={ex.dev}>
                <section className={ex.search}>
                    <form className={ex.sform}>
                        <p>Search our exercise database by name:</p>
                        <input type="text" />
                        <input type="submit"/>
                    </form>
                    <p>Matching exercises:</p>
                    <section className={ex.box}></section>
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
                        </section>    
                        <section className={ex.wc}>
                            <form>
                            <span>Your Weight: </span>
                            <input type="text"/>
                            <select name="" id="">
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

export {Exercise}