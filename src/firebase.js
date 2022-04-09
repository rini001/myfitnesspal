import { initializeApp } from 'firebase/app'
import {getAuth} from 'firebase/auth'


const firebaseConfig = {
    apiKey: "AIzaSyDGd_t9YxXtA-Y-_SyXOcPXz9XQ-D5-EDA",
    authDomain: "friendlychat-fc78c.firebaseapp.com",
    projectId: "friendlychat-fc78c",
    storageBucket: "friendlychat-fc78c.appspot.com",
    messagingSenderId: "250790923005",
    appId: "1:250790923005:web:4b39e9b57a195c082ecc94"
};




const app = initializeApp(firebaseConfig)
const auth = getAuth(app)

export {auth}