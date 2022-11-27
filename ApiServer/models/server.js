require('dotenv').config();
const express = require('express')
const cors = require('cors')

class Server {

    constructor() {
        this.app = express();
        this.port = process.env.PORT;
        //RUTAS
        this.usuarioPath = '/api/usuarios';
        //Milddlewares
        this.milddlewares();
        //Rutas de la aplicación
        this.routers();
    }

    milddlewares() {
        //CORS
        this.app.use(cors());
        //STATIC
        this.app.use(express.static('./public'));
    }
    routers() {
        this.app.use(this.usuarioPath, require('../routers/usuarios'));
    }

    listen() {
        this.app.listen(this.port, () => {
            console.log("El servidor esta corriendo en el puerto : ", this.port);
        })
    }


}
module.exports = Server;