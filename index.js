const express = require('express');
const app = express();
const PORT = process.env.PORT || 3000;
//Middleware de parseo
app.use(express.json());

//Rutas

// Login
app.use('/login', require('./routes/login.js'))

// Registro
app.use('/register', require('./routes/register.js'))

// Get, Post, Delete Tareas
app.use('/tareas', require('./routes/tareas.js'))

app.listen(3000, () => {
    console.log(`Servidor iniciado en http://localhost:${PORT}`)
});