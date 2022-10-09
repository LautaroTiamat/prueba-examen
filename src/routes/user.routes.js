const router = require('express').Router();
const validarJWT = require('../middlewares/validarJWT');
const { getUser, postUser } = require('./../controllers/user.controller');

// GET
router.get('/user', [validarJWT], getUser);

// POST
router.post('/user', [], postUser);

// PUT

// DELETE

module.exports = router;