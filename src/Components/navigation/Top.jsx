import { Link, Outlet } from 'react-router-dom'
import top from './top.module.css'
import {getAuth} from "firebase/auth"
const Top = () => {
    const auth = getAuth()
    const user = auth.currentUser;
    if(user !== null){
        console.log(user.email);
    }
    console.log();
    return(
        <div className = {top.banner}>
        <Link to=''><img src="https://www.myfitnesspal.com/assets/logo.svg" alt="" /></Link>
        <section>
            <Link to="login">LOGIN</Link>{" | "}
            <Link to="signup">SIGN UP</Link>
        </section>
        
        </div>
    )
}

export {Top}