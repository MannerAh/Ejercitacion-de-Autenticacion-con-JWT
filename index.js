const express = require('express');
const app = express();



app.use('/login', (req, res) => {
    // Genero el token
    // accessToken = jwt.sign({ userId: user._id }, process.env.SECRET, { expiresIn: '1h' });
    res.json({accessToken});
})

app