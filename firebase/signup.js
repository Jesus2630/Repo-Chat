//registro de usuario firebase

const { getAuth, createUserWithEmailAndPassword, sendSignInLinkToEmail } = require("firebase/auth");
const {request,response}=require('express')
const{app}=require('../firebase/login');
const{auth}=require('../firebase/login'); 
const{showmessage}=require('../firebase/showmessage')
const {Toastify} = require('toastify-js');


const actionCodeSettings = {
  // URL you want to redirect back to. The domain (www.example.com) for this
  // URL must be in the authorized domains list in the Firebase Console.
  url: 'http://localhost:8080/',
  // This must be true.
  handleCodeInApp: true,
  iOS: {
    bundleId: 'com.example.ios'
  },
  android: {
    packageName: 'com.example.android',
    installApp: true,
    minimumVersion: '12'
  },
  dynamicLinkDomain: 'http://localhost:8080/'
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
          // ...
        });



      console.log(usuarioCredencial)
     if(usuarioCredencial){
        response.send("you are in")
     }
  } catch (error) {
      console.log(error)
  }
}

module.exports={

  registroUsuario
}
