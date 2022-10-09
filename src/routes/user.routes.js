const router = require('express').Router();
const validarJWT = require('../middlewares/validarJWT');
const { getUser, postUser } = require('./../controllers/user.controller');

/* ----------- GET ----------- */

// Conseguir datos del usuario loggeado
router.get('/user', [validarJWT], getUser);

/* ----------- POST ----------- */

// Agregar un usuario
router.post('/user', [], postUser);

module.exports = router;