const router = require('express').Router()
const {deleteTareas} = require('../controllers/logicas.js')

router.post('/api', deleteTareas)

module.exports = router;