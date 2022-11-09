const express = require('express');
const cors    = require('cors');
const database = require('../db/config')
const exphbs  = require('express-handlebars');

const Sockets  = require('../sockets/sockets')


class Server{
    constructor(){
        this.app = express();
        this.port = process.env.PORT;
        this.server = require('http').createServer(this.app);
        this.io = require('socket.io')(this.server);
        this.indexRoutes = require('../routes');


        //Conectar base de datos
        this.conectDB();

        //Engine
        this.engineHb();

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
        //Cors
        this.app.use(cors());
        //Public
        this.app.use(express.static('public'))
        //Sockets
    }

    routes(){
        this.app.use(this.indexRoutes)
    }

    sockets(){
        new Sockets( this.io );    
    }


    listen(){
        this.server.listen(this.port, ()=>{
            console.log(`Servidor iniciado en el puerto ${this.port}`)
        })
    }
}

module.exports = Server;