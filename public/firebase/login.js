// modulo que verifica que el usuario este inicializado 
import {onAuthStateChanged} from "https://www.gstatic.com/firebasejs/9.13.0/firebase-auth.js";
// modulos importados 
import { app } from "./firebaselogin.js";
import { auth } from "./firebaselogin.js";


// funcion que veriffica la inicializacion
onAuthStateChanged(auth, async(user)=>{
    console.log(user, "hola si  soy el usuario")

})