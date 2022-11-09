const {request,response} = require('express')

const loginController = (req=request, res=response)=>{
    res.render('login.hbs')
}

module.exports = {
    loginController
}