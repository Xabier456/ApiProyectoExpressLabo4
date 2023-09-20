const { Router } = require('express');
const { getJuegos } = require('../controllers/demo');

const rutas = Router();

rutas.get('/juegos', getJuegos);


module.exports = rutas;