require('dotenv').config();
const express = require('express');
const mongoose = require('mongoose');

const userRoutes = require('./src/routes/user.routes');
const tokenRoutes = require('./src/routes/token.routes');
const authRoutes = require('./src/routes/auth.routes');

const app = express();
const PORT = process.env.PORT;
const URI_MONGODB = process.env.URI_MONGODB;

app.use(express.json());

// Rutas:
app.use(tokenRoutes);
app.use(userRoutes);
app.use(authRoutes);

app.listen(PORT, () => {
	console.log(`Servidor corriendo en el puerto ${PORT}`);
});

mongoose.connect(URI_MONGODB, { useNewUrlParser: true, useUnifiedTopology: true })
	.then(() => {
		console.log('Conectado a la Base de Datos')
	})
	.catch(error => {
		console.log('Error al conectar la Base de Datos');
		console.log(error);
	})
