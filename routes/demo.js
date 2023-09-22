const { Router } = require('express');
const { getJuegos, getTopCanalJuego, getTopCanalesJuegoIdioma } = require('../controllers/demo');

const rutas = Router();

rutas.get('/juegos', getJuegos);
rutas.get('/topcanaljuego/:id', getTopCanalJuego);
rutas.get('/getTopCanalesJuegoIdioma/:id/:idioma', getTopCanalesJuegoIdioma);


module.exports = rutas;