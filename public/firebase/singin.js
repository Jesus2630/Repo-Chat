//iniciar sesion de usuario con firebase

import { signInWithEmailAndPassword } from "https://www.gstatic.com/firebasejs/9.13.0/firebase-auth.js";
import { auth } from "./firebaselogin.js";
import { showMessage } from "./showmessage.js";

const singInForm = document.querySelector("#form-login");

singInForm.addEventListener("submit", async (e) => {
  e.preventDefault();

  const email = singInForm["signin-email"].value;
  const pass = singInForm["signin-pass"].value;

  try {
    const usercredentialsIn = await signInWithEmailAndPassword(
      auth,
      email,
      pass
    );
    if (usercredentialsIn) {
      window.location ="chat"
    }
  } catch (error) {
    console.log("no hay usuario");
  }
})


