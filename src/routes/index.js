const express = require('express');
const cors = require('cors');
const helmet = require('helmet');
const compression = require('compression');
require('express-async-errors');
const {NotFoundMiddlware, ErrorMiddlware} = require('../middlewares')


module.exports = function({HomeRoutes}){
    const router = express.Router();
    const apiRoutes = express.Router();

    apiRoutes
    .use(express.json())
    .use(cors())
    .use(helmet())
    .use(compression());

    apiRoutes.use("/home", HomeRoutes);

    router.use("/v1/api", apiRoutes);

    //Rutas para manejar errores
    router.use(NotFoundMiddlware);
    router.use(ErrorMiddlware)

    return router;
}