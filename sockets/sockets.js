const Usuarios = require('../models/Usuarios');

const usuarios = new Usuarios();

class Sockets {

    constructor( io ) {

        this.io = io;

        this.socketEvents();
    }

    socketEvents(){
        this.io.on('connection', (socket)=>{
            console.log('Cliente conectado')

            socket.on('entrar-chat', (usuario, callback)=>{
                
                if(!usuario.nombre){
                    return callback({
                        error: true,
                        mensaje: 'Se necesita un usuario'
                    })
                }

                let personas = usuarios.agregarPersona(socket.id,usuario.nombre);

                socket.broadcast.emit('lista-personas', usuarios.getPersonas());

                callback(personas);
            })

            socket.on('enviar-mensaje', (data)=>{
            this.io.emit('mostrar-mensaje', data)
            })

            //Desconexión del cliente
            socket.on('disconnect', ()=>{
              let personaBorrada = usuarios.borrarPersona(socket.id);

              socket.broadcast.emit('crear-mensaje', {usuario: 'Administrador', mensaje: `${personaBorrada.nombre} abandonó la sala.`});
              socket.broadcast.emit('lista-personas', usuarios.getPersonas());
            })
        })
    }
}

module.exports = Sockets;



       
