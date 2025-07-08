// Importación de dependencias
const express = require('express');
const app = express();
const PORT = process.env.PORT || 3000;

// Parseo de datos JSON
app.use(express.json());

// --- Rutas --- 

// POST Register
app.use('/register', require('./routes/registerRoutes'));

// POST Login
app.use('/login', require('./routes/loginRoutes'));

// GET Tareas?
app.use('/workouts', require('./routes/workoutRoutes'));

// --- Servidor ---
app.listen(3000, () => {
    console.log(`Server listening on port ${PORT}`);
})