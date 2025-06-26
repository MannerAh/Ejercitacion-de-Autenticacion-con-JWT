const router = require('express').Router()
const {getTareas} = require('../controllers/logicas.js')

router.post('/api', getTareas)

module.exports = router;