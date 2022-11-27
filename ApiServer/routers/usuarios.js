const { Router } = require('express');
const router = Router();

const { usuarioGet, usuarioPost, usuarioPut, usuarioPatch, usuarioDelete } = require('../controllers/usuarios');

//GET
router.get('/', usuarioGet);
//POST
router.post('/', usuarioPost);
//PUT
router.put('/', usuarioPut);
//PATCH
router.patch('/', usuarioPatch);
//DELETE
router.delete('/', usuarioDelete);

module.exports = router;