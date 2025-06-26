const fs = require('fs');
const jwt = require('jsonwebtoken');
const path = require('path');
const express = require('express');
const app = express();
require('dotenv').config();
const {usuarios} = require('../data/usuarios.js')
const {tareas} = require('../data/tareas.js')
/* process.env.SECRET = 'secret' */


const usuariosFile = path.join(__dirname, '../data/usuarios.js')
const tareasFile = path.join(__dirname, '../data/tareas.js')

function saveUsuarios(usuarios) {
    fs.writeFileSync(usuariosFile, `const usuarios = ${JSON.stringify(usuarios)}; module.exports = { usuarios };`)
}

function saveTareas(tareas) {
    fs.writeFileSync(tareasFile, `const tareas = ${JSON.stringify(tareas)}; module.exports = { tareas };`)
}
// Registro
// Registrarse enviando un username y una contraseña, y guardándolos en la lista de usuarios, responder con mensajes de error
const registro = (req, res) => {
    const {username, password} = req.body;
    if (!username || !password) {
        res.status(400).json({error: 'Ambos campos son obligatorios para el registro'});
    } else {
        usuarios.push({username, password});
        saveUsuarios(usuarios); // <-- Esto guarda el cambio en el archivo
        res.status(201).json({message: 'Usuario registrado'});
    }
}

// Login
const login = (req, res) => {
    const {username, password} = req.body;
    const user = usuarios.find(u => u.username === username && u.password === password);
    if (!user) {
        res.status(401).json({error: 'Usuario o contraseña inválidos!'})
        return;
    }
    const accesstoken = jwt.sign({ userId: user.username }, process.env.SECRET, { expiresIn: '1h' });
    res.status(200).json({
        message: 'Usuario logueado correctamente',
        accesstoken: accesstoken})
}

// Get Tareas
const getTareas = (req, res) => {
    res.json(tareas);
}

// Post Tareas
const postTareas = (req, res) => {
    const {id, userId, tarea} = req.body;
    if (!id || !userId || !tarea) {
        res.status(400).json({error: 'Todos los campos son obligatorios'});
    } else {
        tareas.push({id, userId, tarea});
        saveTareas(tareas); // <-- Esto guarda el cambio en el archivo
        res.status(201).json({message: 'Tarea creada'});
    }
}

// Delete Tareas
const deleteTareas = (req, res) => {
    const {id} = req.params;
    const tarea = tareas.find(t => t.id === id)
    if (!tarea) {
        res.status(404).json({error: 'Tarea no encontrada'});
        return;
    } else {
        tareas.splice(tareas.indexOf(tarea), 1)
    }
    saveTareas(tareas);
    res.status(200).json({message: 'Tarea eliminada'});
}

module.exports = { registro, login, getTareas, postTareas, deleteTareas }