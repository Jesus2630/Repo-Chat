const express = require('express');
const cors    = require('cors');
const database = require('../db/config')
const exphbs  = require('express-handlebars');
const socketio = require('socket.io');

const Sockets = require('../sockets/sockets');

class Server{
    constructor(){
        this.app = express();
        this.PORT = process.env.PORT || 4000;
        this.server = require('http').createServer(this.app);
        this.io = socketio(this.server);
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
        this.app.use(express.urlencoded({extended:false}))
        //Alertas y Flashh messages
        /* this.app.use(flash());
        this.app.use((req,res,next) =>{
            res.locals.mensajes = req.flash(); 
            next();
        }) */
    }

    routes(){
        this.app.use(this.indexRoutes)
    }


    sockets(){
        new Sockets( this.io );    
    }

    listen(){
        this.server.listen(this.PORT, ()=>{
            console.log(`Servidor iniciado en el puerto ${this.PORT}`)
        })
    }
}

module.exports = Server;