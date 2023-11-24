//VARIABLES GLOBALES

const express = require('express');
const app = express();
const port = 3000;

// CREACIÓN DEL SERVIDOR
app.listen(port, () => {
          console.log('El servidor esta funcionando en http://localhost:' + port);
});

//RUTA PRINCIPAL
app.get('/', (req, res) => {
          res.send('Hola Mundo')
});

//RUTA SECUNDARIA
app.get('/ruta1', (req, res) => {
          res.send('ESTA ES LA RUTA 1')
});