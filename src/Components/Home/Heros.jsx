import sero from '../Home/sero.module.css'

const Heros = () => {
    return(
        <div className={sero.bg}>
            <section className={sero.search}>
                <h1>Search over 11 million foods in our database.</h1>
                <p>What's in your food? Learn about calorie count, nutrition information and serving size.</p>
                <section  className={sero.sbox}>
                    <input type="text" placeholder='Search Any Thing'/>
                </section>
            </section>
        </div>
    )
}

export {Heros}