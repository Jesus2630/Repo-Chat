const {request,response} = require('express')

const loginController = (req=request, res=response)=>{
    res.render('login', {
        titulo: 'Inicio de sesión'
    })
}

module.exports = {
    loginController
}