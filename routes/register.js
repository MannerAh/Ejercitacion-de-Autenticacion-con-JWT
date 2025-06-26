const router = require('express').Router()
const {registro} = require('../controllers/logicas.js')

router.post('/', registro)

module.exports = router;