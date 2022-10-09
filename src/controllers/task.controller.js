const Task = require('./../models/Task');

const taskController = {}

taskController.getTasks = async (req, res) => {
    const userId = req.user._id;

    const tasks = await Task.find({ userId, isActive: true });

    if (!tasks) {
        return res.status(400).json({
            message: 'No se encontraron tareas para el usuario.'
        });
    }

    return res.json({
        message: 'Tareas encontradas.',
        tasks
    });
}

taskController.getTaskById = async (req, res) => {
    const id = req.params.taskId;
    const userId = req.user._id;

    const task = await Task.find({ _id: id, userId, isActive: true });

    if (!task || task.length === 0) {
        return res.status(400).json({
            message: 'No se encontró o no se puede acceder a la tarea.'
        });
    }

    return res.json({
        message: 'Tarea encontrada.',
        task
    });
}

taskController.postTask = async (req, res) => {
    const { titulo, descripcion } = req.body;
    const userId = req.user._id;

    const newTask = new Task({
        titulo,
        descripcion,
        userId
    });

    const task = await newTask.save();
    
    return res.json({
        message: 'Tarea creada correctamente.',
        task
    });
}

taskController.putTask = async (req, res) => {
    const taskId = req.params.taskId;
    const userId = req.user._id;
    const { titulo, descripcion, estado } = req.body;

    const filter = { _id: taskId, userId, isActive: true }
    const update = {}

    if (titulo) {
        update.titulo = titulo;
    }

    if (descripcion) {
        update.descripcion = descripcion;
    }

    if (estado) {
        update.estado = estado;
    }

    const taskUpdated = await Task.findOneAndUpdate(filter, update);

    if (!taskUpdated) {
        return res.status(400).json({
            message: 'No se pudo actualizar la tarea.'
        });
    }

    const task = await Task.findById(taskId)

    return res.json({
        message: 'Tarea actualizda correctamente.',
        task
    });
}

taskController.deleteTask = async (req, res) => {
    const taskId = req.params.taskId;
    const userId = req.user._id;

    const filter = { _id: taskId, userId }
    const update = { isActive: false }

    const taskUpdated = await Task.findOneAndUpdate(filter, update);

    if (!taskUpdated) {
        return res.status(400).json({
            message: 'No se pudo eliminar la tarea.'
        });
    }

    return res.json({
        message: 'Tarea eliminada correctamente.'
    });
}

module.exports = taskController;