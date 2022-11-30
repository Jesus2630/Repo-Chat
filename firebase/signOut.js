const { onAuthStateChanged, signOut } = require("firebase/auth");
const{request,response}=require('express')
const{auth}=require('./login')


signOut(auth).then(() => {
  // Sign-out successful.
}).catch((error) => {
  // An error happened.
});
