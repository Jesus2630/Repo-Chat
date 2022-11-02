const express = require('express');
const exphbs  = require('express-handlebars');

class Server{
    constructor(){
        this.app = express();
        this.server = require('http').Server(this.app);
        this.socketio = require('socket.io')(this.server);
        this.port = process.env.PORT;
        this.indexRoutes = require('../routes');
        

        //Middlewares
        this.middlewares();
        //View Engine
        this.engineHb();
        //Routes
        this.routes();
    }

    engineHb(){
        this.app.engine('.hbs', 
            exphbs.engine({
                extname: '.hbs',
                defaultLayout: 'layout',
            })
        )
        this.app.set('view engine', '.hbs');
    }

    middlewares(){
        this.app.use(express.static('public'))
        this.app.use(express.json())
    }

    routes(){
        this.app.use(this.indexRoutes)
    }

    listen(){
        this.server.listen(this.port, () =>{
            console.log(`Servidor iniciado en el puerto ${this.port}`)
        })
    }
}



module.exports = Server;