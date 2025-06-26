const router = require('express').Router()
const {postTareas} = require('../controllers/logicas.js')

router.post('/api', postTareas)

module.exports = router;