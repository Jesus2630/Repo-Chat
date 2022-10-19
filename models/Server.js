const express = require('express');
const exphbs  = require('express-handlebars');

class Server{
    constructor(){
        this.app = express();
        this.port = process.env.PORT;
        this.indexRoutes = require('../routes');
        

        //Middlewares
        this.middlewares();
        //View Engine
        this.engineHb();
        //Routes
        this.routes();
    }
    //Metodos

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
    }

    routes(){
        this.app.use(this.indexRoutes)
    }

    listen(){
        this.app.listen(this.port, () =>{
            console.log(`Servidor iniciado en el puerto ${this.port}`)
        })
    }
}

module.exports = Server;