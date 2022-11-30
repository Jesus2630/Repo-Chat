const {request,response} = require('express')

const stageRoom = (req=request, res=response)=>{
    res.render('SignInUser', {
        titulo: 'Sala de Espera'
    })
}

module.exports = {
    stageRoom
}