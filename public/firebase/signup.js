//registro de usuario firebase

import { createUserWithEmailAndPassword } from "https://www.gstatic.com/firebasejs/9.13.0/firebase-auth.js";
import { auth } from "./firebaselogin.js";
import { showMessage } from "./showmessage.js";

console.log("conectado");
const singupForm = document.querySelector("#form-register");


singupForm.addEventListener("submit", async (e) => {
  e.preventDefault();
  const email = singupForm["signup-email"].value;
  const pass = singupForm["signup-pass"].value;
  
 

  try {
    const userCredential = await createUserWithEmailAndPassword(
      auth,
      email,
      pass
    );
    console.log(userCredential);
    showMessage("Bienvenido " + userCredential.user.email)
  } catch (error) {
    console.log(error.code);
    if (error.code == "auth/email-already-in-use") {
     showMessage("email already in use","error")
    }
    else if(error.code== "auth/weak-password"){
      showMessage("Password is to weak","error")

    }
  }
});
