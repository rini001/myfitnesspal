import doe from '../Home/do.module.css'
import apple from '../assets/apple-app-store-badge.svg'
import google from '../assets/google-play-badge.svg'

const Download = () => {
    return (
        <div>
            <section className={doe.box}>
                <h1>Connect with over 50 apps.</h1>
                <p>Easily link your MyFitnessPal account with apps that support your healthier lifestyle. It’s not just about calories. It’s about feeling better, looking better, and living better.</p>
                <section className={doe.img}>
                 <img src='https://www.myfitnesspal.com/_next/image?url=%2F_next%2Fstatic%2Fmedia%2Fimg-apps%402x.85e549ef.png&w=2048&q=75' alt='img'/>;

                </section>
                <section className={doe.icon}>
                <img src={google} alt="" />
                <img src={apple} alt="" />
                </section>
            </section>
        </div>
    )
}
export {Download}