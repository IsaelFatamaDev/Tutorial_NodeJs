/* CONFIGURACIÓN DEL SERVIDOR */

const express = require('express');
const http = require('http');
const path = require('path');
const mysql = require('mysql');
const cors = require('cors');

const app = express();

// Creacion del servidor

const server = http.createServer(app);
const port = 3000;

// Configuracion de Rutas

app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(cors());

// Carpeta public static

app.use(express.static(path.join(__dirname, '/public')));

app.use('/public', express.static('public/'));

// RUTA PRINCIPAL
app.get('/', (req, res) => {
          var filePath = path.join(__dirname, '../public/index.html');
          res.sendFile(filePath);
});

app.get('/app.html', (req, res) => {
          var filePath = path.join(__dirname, '../public/app.html');
          res.sendFile(filePath);
});

// Creacion del servidor en el puerto 3000
server.listen(port, () => {
          console.log("Servidor escuchando en el puerto: http://localhost:" + port);
});