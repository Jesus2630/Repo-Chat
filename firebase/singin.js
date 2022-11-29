//iniciar sesion de usuario con firebase

const { getAuth,signInWithEmailAndPassword,onAuthStateChanged }=require('firebase/auth')
const {request,response}=require('express')
const{app}=require('../firebase/login');
const{auth}=require('../firebase/login'); 




const ingresoUsuario = async(req = request,res = response)=>{
 
  const {email, pass} = req.body;
  try {
      const usuarioCredencial = await signInWithEmailAndPassword(
          auth,
          email,
          pass
      )
<<<<<<< HEAD
=======
      onAuthStateChanged(auth, (user) => {
        if (user) {
        console.log(user,"hola soy")
          const uid = user.uid;
          // ...
        } else {
          console.log('nada')
        }
      });
>>>>>>> df7a49954161948f676c6fee19da0471f79dd156
      

      if(usuarioCredencial){
        res.redirect('chat')
      } 
  } catch (error) {
    //Perdón a los dioses de la programación por repetir código jeje
      const errores = (error)=>{
        if(error.code == "auth/user-not-found"){return 'Usuario inexistente'}
      }
      const resultErrores = errores(error);

      res.render('login', {
        error: resultErrores
      });
  }
}

module.exports={
  ingresoUsuario,
}

