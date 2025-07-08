const router = require('express').Router();
const { register } = require('../controllers/logicas');

router.post('/', register);

module.exports = router;