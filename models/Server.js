const express = require('express');
const cors    = require('cors');
const { socketControllers } = require('../sockets/controllers');
const database = require('../db/config')

class Server{
    constructor(){
        this.app = express();
        this.port = process.env.PORT;
        this.server = require('http').createServer(this.app);
        this.io = require('socket.io')(this.server);

        this.paths={
            chatRoutes : '/antara/chat'
        }


        //Conectar base de datos
        this.conectDB();

        //Middelwares
        this.middlewares();
        
        //Rutas
        this.routes();

        //Sockets
        this.sockets();
    }

    async conectDB(){
        await database();
    }

    middlewares(){
        //Cors
        this.app.use(cors());
        //Public
        this.app.use(express.static('public'))
        //Sockets
    }

    routes(){
        /* this.app.use(this.paths.chatRoutes, require('../routes/chatRoutes')); */
    }

    sockets(){
        this.io.on('connection', socketControllers)
    }

    listen(){
        this.server.listen(this.port, ()=>{
            console.log(`Servidor iniciado en el puerto ${this.port}`)
        })
    }
}

module.exports = Server;