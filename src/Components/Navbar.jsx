import style from './nav.module.css'
import {GiHamburgerMenu} from "react-icons/gi"
import {ImCross} from "react-icons/im"
import { useState } from 'react'
const Navbar = () => {
    const [show, setShow] = useState(true)
    const styles = {color:'white', width: '40px', height: '20px', marginTop: '12px'}
    function work(){
        if(show === true){
            setShow(false)
            
        }
        else{
            setShow(true)
           
            
        }
    }
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
            <section className={style.flex}>
                <span onClick={work} className={style.fbox}>
                    {show ? <GiHamburgerMenu style={styles}/>: <ImCross style={styles}/>}
                    <a style={{color: 'white'}} href="#"><img src="https://www.myfitnesspal.com/assets/logo.svg" alt="" /></a>
                </span>
            <section  className={style.navlinks}>
                <section className={style.nlinks}><a href="#">ABOUT</a></section>
                <section className={style.nlinks}><a href="#">FOOD</a></section>
                <section className={style.nlinks}><a href="#">EXERCISE</a></section>
                <section className={style.nlinks}><a href="#">APPS</a></section>
                <section className={style.nlinks}><a href="#">COMMUNITY</a></section>
                <section className={style.nlinks}><a href="#">BLOG</a></section>
                <section className={style.nlinks}><a href="#">PREMIUM</a></section>
            </section>
            </section>
        </div>
    )
}
export {Navbar}