import {GoogleAuthProvider, signInWithPopup} from "https://www.gstatic.com/firebasejs/9.13.0/firebase-auth.js"
import { auth } from "./firebaselogin.js";
const btn = document.querySelector('#email-google')
//const btn2 = document.querySelector('#google-email2')

btn.addEventListener('click', async ()=>{

    const provider = new GoogleAuthProvider()
    try {
        const credentials = await signInWithPopup(auth,provider) 
        console.log(credentials)
    } catch (error) {
        console.log(error)
        
    }



})

/*btn2.addEventListener('click', async ()=>{

    const provider = new GoogleAuthProvider()
    try {
        const credentials = await signInWithPopup(auth,provider) 
        console.log(credentials)
    } catch (error) {
        console.log(error)
        
    }



})*/