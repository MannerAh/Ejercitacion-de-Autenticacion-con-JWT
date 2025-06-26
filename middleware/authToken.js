// Middleware para autenticar el token JWT
module.exports = function authenticateToken(req, res, next) {
    const authHeader = req.headers['authorization'];
    const token = authHeader && authHeader.split(' ')[1]; // Espera formato "Bearer <token>"
    if (!token) return res.status(401).json({ error: 'Token requerido' });

    jwt.verify(token, process.env.SECRET, (err, user) => {
        if (err) return res.status(403).json({ error: 'Token inválido' });
        req.user = user;
        next();
    });
}