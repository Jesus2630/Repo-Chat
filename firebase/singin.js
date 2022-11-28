//iniciar sesion de usuario con firebase

const { getAuth,signInWithEmailAndPassword }=require('firebase/auth')
const {request,response}=require('express')
const{app}=require('../firebase/login');
const{auth}=require('../firebase/login'); 
const {google} = require('googleapis');
const axios = require('axios')

const oauth2Client = new google.auth.OAuth2(
  '676531764541-jnon4ek71jopdj7gnp9505n9fln1tpbb.apps.googleusercontent.com',
  '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',
  'http://localhost:8080/_/auth'
);

const ingresoUsuario = async(request,response)=>{
 
  const {email, pass} = request.body;
  console.log(email,pass)
  try {

      const usuarioCredencial = await signInWithEmailAndPassword(
          auth,
          email,
          pass

      )
      console
      console.log(usuarioCredencial)
      if(usuarioCredencial){
        response.redirect('chat')
      } 
  } catch (error) {
    console.log(error)
  }
}
const ingresoOAuth = async function(req=request,res=response){

  const code =  req.query.code;
  console.log(code)
  const credentials = await axios.get(
    'https://www.googleapis.com/oauth2/v1/userinfo?alt=json',
    {headers:{'Authorization':`Bearer ${code}`}}).catch(el=>{

      console.error(el)
      return {}
    })
  
    console.log(credentials.body)
  res.render('home', {
    titulo: req.url
})
}
module.exports={
  ingresoUsuario,
  ingresoOAuth
}

