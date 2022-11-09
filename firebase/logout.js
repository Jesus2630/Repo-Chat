import {signOut} from "https://www.gstatic.com/firebasejs/9.13.0/firebase-auth.js"
import { auth } from "./firebase.js";
const logout = document.querySelector('')

logout.addEventListener('click', async ()=>{

    await signOut(auth)
    console.log('user signout')

})