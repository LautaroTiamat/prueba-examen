const router = require('express').Router();

const { generarToken } = require('./../controllers/token.controller');

router.post('/generarToken', [], generarToken);

module.exports = router;