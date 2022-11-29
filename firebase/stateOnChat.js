
const { getAuth,signInWithEmailAndPassword,onAuthStateChanged }=require('firebase/auth')
const {request,response}=require('express')
const{app}=require('./login');
const{auth}=require('./login'); 


const change = onAuthStateChanged(auth, (user) => {
    if (user) {
     console.log(user,"hola soy")
      const uid = user.uid;
    } else {
      console.log('nada')
    }
  });

  module.exports={
    change
  }


  
