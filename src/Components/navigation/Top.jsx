import { Link } from 'react-router-dom'
import top from './top.module.css'
const Top = () => {
    return(
        <div className = {top.banner}>
        <Link to=''><img src="https://www.myfitnesspal.com/assets/logo.svg" alt="" /></Link>
        <section>
            <a href="#">LOGIN</a>{" | "}
            <a href='#'>SIGN UP</a>
        </section>
        </div>
    )
}

export {Top}