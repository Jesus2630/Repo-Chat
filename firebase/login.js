// Import the functions you need from the SDKs you need

const{ initializeApp } =require("firebase/app");
const{getAuth}=require('firebase/auth')
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: "AIzaSyDoHvnH7drMrwESxANsfj8yUVedJwQqejc",
    authDomain: "proyect-repochat-grupo1-f7e17.firebaseapp.com",
    databaseURL: "https://proyect-repochat-grupo1-f7e17-default-rtdb.firebaseio.com",
    projectId: "proyect-repochat-grupo1-f7e17",
    storageBucket: "proyect-repochat-grupo1-f7e17.appspot.com",
    messagingSenderId: "676531764541",
    appId: "1:676531764541:web:8a62a66b1207846a045954",
    measurementId: "G-X26TE792D5"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app)

module.exports={
  app,
  auth
}