const {request,response} = require('express')

const registerController = (req=request, res=response)=>{
    res.render('register.hbs')
}

module.exports = {
    registerController
}