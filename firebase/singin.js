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
      

      if(usuarioCredencial){
        if(!usuarioCredencial.user.emailVerified){
          res.render('login', {
            error: 'No estas autenticado, revise su Email'
          });
           }
       


        else{
          res.redirect('signInUser')
        }
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

