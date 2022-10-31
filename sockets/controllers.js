const socketControllers = (socket) =>{
    console.log('Cliente conectado')

    socket.on('enviar-mensaje', (data)=>{
        socket.broadcast.emit('mostrar-mensaje', data)
    })

    //Desconexión del cliente
    socket.on('disconnect', ()=>{
        console.log('Cliente desconectado', socket.id )
    })
}

module.exports = {
    socketControllers
}