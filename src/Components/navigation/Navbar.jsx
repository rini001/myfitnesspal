import style from './nav.module.css'
import { Top } from './Top'
import {Link, Outlet} from 'react-router-dom'
const Navbar = () => {
    return(
        <div className={style.navhead}>
            <Top/>
            <section className={style.navlinks}>
                <section className={style.nlinks}><Link to="about">ABOUT</Link></section>
                <section className={style.nlinks}><Link to="food">FOOD</Link></section>
                <section className={style.nlinks}><Link to="exercise">EXERCISE</Link></section>
                <section className={style.nlinks}><Link to="apps">APPS</Link></section>
                <section className={style.nlinks}><Link to="community">COMMUNITY</Link></section>
                <section className={style.nlinks}><Link to="blog">BLOG</Link></section>
                <section className={style.nlinks}><Link to="premium">PREMIUM</Link></section>
            </section>
            <Outlet/>
        </div>
    )
}
export {Navbar}