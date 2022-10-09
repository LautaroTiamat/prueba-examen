const router = require('express').Router();
const validarJWT = require('../middlewares/validarJWT');
const {
    getTasks,
    getTaskById,
    postTask,
    putTask,
    deleteTask
} = require('./../controllers/task.controller')

/* ----------- GET ----------- */

// Ver las tareas creadas
router.get('/tasks', [validarJWT], getTasks);

// Ver una sola tarea: Por ID
router.get('/task/:taskId', [validarJWT], getTaskById);

/* ----------- POST ----------- */

// Crear una tarea:
router.post('/task', [validarJWT], postTask);

/* ----------- PUT ----------- */

// Actualizar una tarea:
router.put('/task/:taskId', [validarJWT], putTask);

/* ----------- DELETE ----------- */

// Eliminar una tarea:
router.delete('/task/:taskId', [validarJWT], deleteTask);

module.exports = router;