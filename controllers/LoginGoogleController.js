const {request,response} = require('express')
const {google} = require('googleapis');


const oauth2Client = new google.auth.OAuth2(
    '676531764541-jnon4ek71jopdj7gnp9505n9fln1tpbb.apps.googleusercontent.com',
    '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',
    'http://localhost:8080/ouath'
  );
  
   
  
  // generate a url that asks permissions for Blogger and Google Calendar scopes
  const scopes = [
   'https://www.googleapis.com/auth/userinfo.email',
   'https://www.googleapis.com/auth/userinfo.profile'
  ];
  
  
  const loginController = (req=request, res=response)=>{
      
  const url = oauth2Client.generateAuthUrl({
      // 'online' (default) or 'offline' (gets refresh_token)
      access_type: 'offline',
    
      // If you only need one scope you can pass it as a string
      scope: scopes
    });  
      res.render('login', {
          titulo: 'Inicio de sesión',
          googleOAuthURL:url
      })
  }

  module.exports = {
    loginController,
}