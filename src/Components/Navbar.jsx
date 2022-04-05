import style from './nav.module.css'
const Navbar = () => {
    return(
        <div className={style.navhead}>
            <section className={style.navbox}>
                <section className={style.logo}>
                    <a href="#"><img src="https://www.myfitnesspal.com/assets/logo.svg" alt="" /></a>
                </section>
                <section className={style.dynamic}>
                    <a href="#">Login</a> |{"   "}{" "}
                    <a href="#">SIGN UP</a>
                </section>
            </section>
            <section className={style.navlinks}>
                <section className={style.nlinks}><a href="#">ABOUT</a></section>
                <section className={style.nlinks}><a href="#">FOOD</a></section>
                <section className={style.nlinks}><a href="#">EXERCISE</a></section>
                <section className={style.nlinks}><a href="#">APPS</a></section>
                <section className={style.nlinks}><a href="#">COMMUNITY</a></section>
                <section className={style.nlinks}><a href="#">BLOG</a></section>
                <section className={style.nlinks}><a href="#">PREMIUM</a></section>
            </section>
        </div>
    )
}
export {Navbar}