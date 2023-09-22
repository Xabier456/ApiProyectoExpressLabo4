const axios = require('axios');
const { request, response} = require('express');

const getPeliculas = (req = request, res = response) => {  
    const { anio, ...resto } = req.query;
    console.log(req.query);
    console.log(resto);
    res.status(401).json({name: `Peliculas del año ${anio}`});
}

const getPelicula = (req = request, res = response) => {  
    const {id} = req.params;
    console.log(id);
    res.json({name: `Pelicula con ID: ${id}`});
}


const getEstrenos = (req = request, res = response) => {
    res.json({name: 'Estrenos'});
}

const getActores = (req = request, res = response) => {
    res.json({name: 'Actores'});
}

const getOrigenNombre = (req = request, res = response) => {
    console.log(req.params);
    const { name } = req.params;

    axios.get(`https://api.nationalize.io/?name=${name}`)
        .then(({ status, data, statusText }) => {
            // handle success
            console.log({ status, data, statusText });
            res.status(200).json({
                status,
                data,
                statusText,
                name
            });
        })
        .catch((error)=>{
            // handle error
            console.log(error);
            res.status(400).json({
                status:400,
                msg: 'Error inesperado'
            })
        });        

    
}

//recibir los actuales 50 juegos mas jugados de twitch api
const getJuegos = (req = request, res = response) => {
    const { API_KEY, CLIENT_ID } = process.env;
    axios.get(`https://api.twitch.tv/helix/games/top?first=50`, {
        headers: {
            "client-id": CLIENT_ID,
            "Authorization": "Bearer " + API_KEY,
        }
    })
        .then(({ status, data }) => {
            res.status(200).json({
                status,
                data
            });
        })
        .catch((error)=>{
        if (error.response.status === 401) {
            res.status(401).json({
                status:401,
                mensaje: 'Error en el token'
            })
        }
        });
}

//recibir el canal en directo con mas espectadores de un juego especifico
const getTopCanalJuego = (req = request, res = response) => {
    const { API_KEY, CLIENT_ID } = process.env;
    const { id } = req.params;
    console.log(id)
    axios.get(`https://api.twitch.tv/helix/streams?game_id=${id}`, {
        headers: {
            "client-id": CLIENT_ID,
            "Authorization": "Bearer " + API_KEY,
        }
    })
        .then(({ status, data }) => {
            res.status(200).json({
                status,
                data
            });
        })
        .catch((error)=>{
            console.log(error.response.status)
            if (error.response.status === 401) {
                res.status(401).json({
                    status:401,
                    mensaje: 'Error en el token'
            })
            } else if (error.response.status === 400) {
                res.status(400).json({
                    status:400,
                    mensaje: 'la id de juego no existe'
            })
            }
        }
        );
}

//recibir los 20 canales mas visto dependiendo del juego y el idioma
const getTopCanalesJuegoIdioma = (req = request, res = response) => {
    const { API_KEY, CLIENT_ID } = process.env;
    const { id, idioma } = req.params;
    axios.get(`https://api.twitch.tv/helix/streams?game_id=${id}&language=${idioma}`, {
        headers: {
            "client-id": CLIENT_ID,
            "Authorization": "Bearer " + API_KEY,
        }
    })
        .then(({ status, data }) => {
            res.status(200).json({
                status,
                data
            });
        })
        .catch((error)=>{
            if (error.response.status === 401) {
                res.status(401).json({
                    status:401,
                    mensaje: 'Error en el token'
            })
            } else if (error.response.status === 400) {
                res.status(400).json({
                    status:400,
                    mensaje: 'la id de juego o el idioma no existe'
            })
            }
        }
        );
}


module.exports = {
    getJuegos,
    getTopCanalJuego,
    getTopCanalesJuegoIdioma
};