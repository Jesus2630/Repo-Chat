//iniciar sesion de usuario con firebase

import { signInWithEmailAndPassword } from "https://www.gstatic.com/firebasejs/9.13.0/firebase-auth.js";
import { auth } from "./firebaselogin.js";

const singInForm = document.querySelector("#formuser2");

singInForm.addEventListener('submit', async (e) => {
  e.preventDefault();

  const email = singinForm["signin-email"].value;
  const pass = singinForm["signin-pass"].value;

  try {
    const usercredentialsIn = await singInWithEmailAndPassword(
      auth,
      email,
      pass
    );
    console.log(usercredentialsIn);
  } catch (error) {
    console.log(error);
  }
});
