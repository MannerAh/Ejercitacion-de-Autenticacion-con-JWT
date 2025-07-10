# API REST de Workouts con JWT, Express y MongoDB
## Pensé que este era el trabajo integrador, JA
## Requisitos

- Node.js
- mongoose
- express
- jsonwebtoken

## Instalación

```bash
npm install
```

## Ejecución

```bash
npm start
```

## Autor  

[Leandro Ramiro Baro](https://github.com/MannerAh)

### Ejemplo de código
```javascript
const express = require('express');
const app = express();

app.get('/', (req, res) => {
  res.send('Hola Mundo!');
});

app.listen(3000, () => {
  console.log('Servidor escuchando en el puerto 3000');
});
```