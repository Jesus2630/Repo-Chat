const {request,response} = require('express');
const { getAuth,onAuthStateChanged }=require('firebase/auth');

const chatController = (req=request, res=response)=>{

    const auth = getAuth();
    onAuthStateChanged(auth, (user) => {
    if (user) {
        const uid = user.uid;
        // ...
    } else {
        // User is signed out
        // ...
    }
    });


    res.render('chat',{
        titulo: 'Chat'
    })
}

module.exports = {
    chatController
}