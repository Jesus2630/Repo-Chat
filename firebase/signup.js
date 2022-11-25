//registro de usuario firebase

const { getAuth, createUserWithEmailAndPassword } = require("firebase/auth");
const {request,response}=require('express')
const{app}=require('../firebase/login');
const{auth}=require('../firebase/login'); 
const{showmessage}=require('../firebase/showmessage')
const {Toastify} = require('toastify-js');



const registroUsuario = async(request,response)=>{
 
  const {email, pass} = request.body;
  console.log(email,pass)
  try {

      const usuarioCredencial = await createUserWithEmailAndPassword(
          auth,
          email,
          pass

      )
      console
      console.log(usuarioCredencial)
     if(usuarioCredencial){
     
     }
  } catch (error) {
      console.log(error)
  }
}

module.exports={
  registroUsuario
}
