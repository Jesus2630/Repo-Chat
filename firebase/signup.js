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


const registroUsuario = async(request,response)=>{
 
  const {email, pass} = request.body;
  console.log(email,pass)
  try {

      const usuarioCredencial = await createUserWithEmailAndPassword(
          auth,
          email,
          pass

      )
      const user = usuarioCredencial.user
     const res = await sendEmailVerification(user,actionCodeSettings).catch(console.error)
      //  console.log(res)  
      

      console.log(usuarioCredencial, "soy el usercredential")
     if(usuarioCredencial){
        response.send("you are in")
     }
  } catch (error) {
      console.error(error)
  }
}

module.exports={

  registroUsuario
}
