// require('express').Router() crea un router modular, que es una función que nos devuelve un router que podemos usar
// es un app.use() que nos permite usar el router en cualquier ruta
const router = require('express').Router()
const {login} = require('../controllers/logicas.js')

router.post('/', login)

module.exports = router;