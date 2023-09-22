const { Router } = require('express');
const { getJuegos, getTopCanalJuego } = require('../controllers/demo');

const rutas = Router();

rutas.get('/juegos', getJuegos);
rutas.get('/topcanaljuego', getTopCanalJuego);


module.exports = rutas;