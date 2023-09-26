## API de twitch para laboratorio de computacion 4 (Xabier Bascuñan)

generar nueva key para la api (abajo en las coleccion hay un ejemplo)
https://dev.twitch.tv/docs/authentication/getting-tokens-oauth/#client-credentials-grant-flow

colleccion de la api para usar en insomnia (nose si funcionará con postman)
https://drive.google.com/file/d/1QRUmrrU7Cz-bQ-1GsoJY5VFtlwx5p3RU/view?usp=drive_link


# endpoints

## obtener los 50 juegos/categorias con mas espectadores ahora
GET https://api-render-express.onrender.com/api/juegos
 - status 200: salio todo bien y deberia recibir el json con los datos
 - status 401: error en la autenticacion del token o la id del cliente


## obtener el canal con mas espectadores de un juego/categoria en particular
GET https://api-render-express.onrender.com/api/topcanaljuego/(id)
 - status 200: salio todo bien y deberia recibir el json con los datos
 - status 401: error en la autenticacion del token o la id del cliente
 - status 400: la id del juego esta mal colocada o no existe


## obtener los 20 canales con mas espectadores de un juego/categoria e idioma en particular
GET https://api-render-express.onrender.com/api/topcanalesjuegoidioma
### query params ejemplo: ?juego=34223&idioma=es
 - status 200: salio todo bien y deberia recibir el json con los datos
 - status 401: error en la autenticacion del token o la id del cliente
 - status 400: la id del juego o idioma esta mal colocado o no existe


## crear token nuevo de api
POST https://id.twitch.tv/oauth2/token
### query params ejemplo: ?client_id=asdaaads&client_secret=dsadsadsa&grant_type=client_credentials


para obtener la client_secret debe ir a la pagina https://dev.twitch.tv/ crear una nueva extension y luego ir a las configuraciones de la extension para generar la clave secreta
