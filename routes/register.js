const router = require('express').Router()
const {registro} = require('../controllers/logicas.js')

router.post('/api', registro)

module.exports = router;