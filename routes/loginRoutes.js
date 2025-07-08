const router = require('express').Router();
const { login } = require('../controllers/logicas');

router.post('/', login);

module.exports = router;