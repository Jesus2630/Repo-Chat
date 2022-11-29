//iniciar sesion de usuario con firebase

const { getAuth,signInWithEmailAndPassword,onAuthStateChanged }=require('firebase/auth')
const {request,response}=require('express')
const{app}=require('../firebase/login');
const{auth}=require('../firebase/login'); 




const ingresoUsuario = async(request,response)=>{
 
  const {email, pass} = request.body;
  console.log(email,pass)
  try {

      const usuarioCredencial = await signInWithEmailAndPassword(
          auth,
          email,
          pass

      )
      onAuthStateChanged(auth, (user) => {
        if (user) {
        console.log(user,"hola soy")
          const uid = user.uid;
          // ...
        } else {
          console.log('nada')
        }
      });
      

      if(usuarioCredencial){
        response.redirect('chat')
      } 
  } catch (error) {
    console.log(error)
  }
}

module.exports={
  ingresoUsuario,
 
  
}

