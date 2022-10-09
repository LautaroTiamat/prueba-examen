const generarJWT = require('./../helpers/generarJWT');

const token = {}

token.generarToken = async (req, res) => {
    const { id } = req.body;
    const token = await generarJWT(id);

    return res.json({ token });
}

module.exports = token;