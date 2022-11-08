//iniciar sesion de usuario con firebase

import { signInWithEmailAndPassword } from "https://www.gstatic.com/firebasejs/9.13.0/firebase-auth.js";
import { auth } from "./firebaselogin.js";
import { showMessage } from "./showmessage.js";

const singInForm = document.querySelector("#form-login");

singInForm.addEventListener("submit", async (e) => {
  e.preventDefault();

  const email = singinForm["signin-email"].value;
  const pass = singinForm["signin-pass"].value;

  try {
    const usercredentialsIn = await signInWithEmailAndPassword(
      auth,
      email,
      pass
    );
    console.log(usercredentialsIn);
  } catch (error) {
    console.log("no hay usuario");
  }
});
