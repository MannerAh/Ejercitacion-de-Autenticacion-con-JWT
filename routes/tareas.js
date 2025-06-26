const router = require('express').Router()
const authenticateToken = require('../middleware/authToken.js')
const {getTareas, postTareas, deleteTareas} = require('../controllers/logicas.js')

router.get('/', authenticateToken, getTareas)

router.post('/', authenticateToken, postTareas)

router.delete('/:id', authenticateToken, deleteTareas)

module.exports = router;