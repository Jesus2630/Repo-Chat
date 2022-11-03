const {request,response} = require('express')

const homeController = (req=request, res=response)=>{
    res.render('home')
}

module.exports = {
    homeController
}