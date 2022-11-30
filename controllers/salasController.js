const {request,response} = require('express')

const mostrarSalas = (req=request, res=response)=>{
    res.render('salas', {
        titulo: 'Salas'
    })
}

module.exports = {
    mostrarSalas
}