const { Router } = require('express');
const { getJuegos, getTopCanalJuego, getTopCanalesJuegoIdioma } = require('../controllers/demo');

const rutas = Router();

rutas.get('/juegos', getJuegos);
rutas.get('/topcanaljuego/:id', getTopCanalJuego);
rutas.get('/TopCanalesJuegoIdioma', getTopCanalesJuegoIdioma);


module.exports = rutas;