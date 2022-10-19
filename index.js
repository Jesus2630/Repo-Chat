require('dotenv').config();
const Server = require('./models/Server')


const servidorLocal = new Server;

servidorLocal.listen();