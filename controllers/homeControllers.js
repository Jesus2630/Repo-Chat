const {request,response} = require('express')

const homeController = (req=request, res=response)=>{
    res.render('home', {
        titulo: 'Inicio'
    })
}

module.exports = {
    homeController
}