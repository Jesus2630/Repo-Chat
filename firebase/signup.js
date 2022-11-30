//registro de usuario firebase

const { getAuth, createUserWithEmailAndPassword, sendEmailVerification} = require("firebase/auth");
const {request,response}=require('express') 
const{auth}=require('../firebase/login'); 
const{auth:authAdmin}=require('../firebase/admin'); 
const{showmessage}=require('../firebase/showmessage')



const actionCodeSettings = {
  // URL you want to redirect back to. The domain (www.example.com) for this
  // URL must be in the authorized domains list in the Firebase Console.
  url: 'http://localhost:8080',
  // This must be true.
 handleCodeInApp: true,
  /*iOS: {
    bundleId: 'com.example.ios'
  },
  android: {
    packageName: 'com.example.android',
    installApp: true,
    minimumVersion: '12'
  },
  //dynamicLinkDomain: 'proyect-repochat-grupo1-f7e17.firebaseapp.com'*/
};


const registroUsuario = async(req = request,res = response)=>{
 
  const {email, pass} = req.body;
  try {

      const usuarioCredencial = await createUserWithEmailAndPassword(
          auth,
          email,
          pass

      )
      const user = usuarioCredencial.user
     const res = await sendEmailVerification(user,actionCodeSettings).catch(console.error)
      //  console.log(res)  
      

      sendSignInLinkToEmail(auth, email, actionCodeSettings)
        .then(() => {            // The link was successfully sent. Inform the user.
          // Save the email locally so you don't need to ask the user for it again
          // if they open the link on the same device.
          window.localStorage.setItem('emailForSignIn', email);
          // ...
        })
        .catch((error) => {
          console.log(error.code);
          console.log(error.message);
        });

      console.log(usuarioCredencial)
     if(usuarioCredencial){
        res.redirect('/login')
     }
  } catch (error) {
      const errores = (error)=>{
        if(error.code == "auth/email-already-in-use"){return 'Correo en uso'}
      }
      const resultErrores = errores(error);

      res.render('register', {
        error: resultErrores
      });
  }
}

module.exports={

  registroUsuario
}
