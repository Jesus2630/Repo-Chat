const {request,response} = require('express')

const chatController = (req=request, res=response)=>{
    res.render('chat')
}

module.exports = {
    chatController
}