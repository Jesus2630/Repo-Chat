const {request,response} = require('express')

const chatController = (req=request, res=response)=>{
    res.render('chat',{
        titulo: 'Chat'
    })
}

module.exports = {
    chatController
}