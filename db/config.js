const mongoose = require('mongoose');
require('dotenv').config();


const conectDB = async()=>{
    try {
        const uri = process.env.URI
        mongoose.connect(uri)
        console.log('Base de datos conectada')
    } catch (error) {
        console.log('Error al conectar a la base de datos')
    }
}

module.exports = conectDB;