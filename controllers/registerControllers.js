const {request,response} = require('express')

const registerController = (req=request, res=response)=>{
    res.render('register', {
        titulo: 'Registro'
    })
}

module.exports = {
    registerController
}