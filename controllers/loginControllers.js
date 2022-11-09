

const {request,response} = require('express')

const loginController = (req=request, res=response)=>{
    res.render('login')
}

const resdirectChat = (req=request, res=response)=>{
    if (usercredentialsIn) {
       res.send('usuario')
        
    }
}



module.exports = {
    loginController,
    resdirectChat
}