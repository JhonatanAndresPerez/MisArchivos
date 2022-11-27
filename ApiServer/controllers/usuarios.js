const { response } = require('express')

//GET
const usuarioGet = (req, res = response) => {
    res.json({
        msg: "get API-Controlador"
    });
}
//POST
const usuarioPost = (req, res = response) => {
    res.json({
        msg: "post API-Controlador"
    });
}
//PUT
const usuarioPut = (req, res = response) => {
    res.json({
        msg: "put API-Controlador"
    });
}
//PATCH
const usuarioPatch = (req, res = response) => {
    res.json({
        msg: "patch API-Controlador"
    });
}
//DELETE
const usuarioDelete = (req, res = response) => {
    res.json({
        msg: "delete API-Controlador"
    });
}

module.exports = {
    usuarioGet,
    usuarioPost,
    usuarioPut,
    usuarioPatch,
    usuarioDelete
}