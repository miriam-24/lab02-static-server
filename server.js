//crearemos un modulo que sirve para crear y hacer cosas web con el modulo http
var http = require("http");
var fs = require('fs');
var config = require("./config/config.js");
var staticServer = require('./internals/static-server');
var colors = require('colors');
var handlers = require('./internals/handlers');
// obteniendo informacion del entorno de ejecucion con respecto al ip y al puerto que debemos usar en nuestro server
// obteniendo las configuraciones del modulo de configuracion
var PORT = config.PORT;
var IP = config.IP;
if(IP =='127.0.0.1'){
    console.log(">----EJECUTANTO EN MODO LOCAL----<")
}
// crear un servidor(aquel que escucha en un puerto, escucha peticiones) basico
// el nucleo de node nos permite crear esto
// una funcion es una accion--collback funcion que es ejecutada---()parametros y cuerpo{}
// esta funcion se va a ejecutar cada vez que el server reciba una peticion 
var server = http.createServer(function(req, res){
    
    // obtener url del archivo de la peticion le asigno una variable url
    // si la url es un slash/
    var url = req.url;
    if(url == "/"){
        // entonces responde a un index
        // sirve el index
        url = "/index.html";
    }
    // Verificando que la peticion
    // del cliente sea una ruta
    // virtual
    if(typeof(handlers[url]) === 'function'){
        // si entro aqui, significa que
        // existe un manejador para url que se esta solicitando 
        //por lo tanto la ejecuto
        handlers[url](req, res)
    }else{ 
         console.log(('>URL Solicitada: ${url} ...'.yellow));
    // Sirvo la url con mi server statico:
    staticServer.serve(url, res);
    }
});
    
// poner a trabajar al server
// puerto3000,localhost'127.0.0.1
server.listen(PORT,IP, function(){
    //HAREMOS INTERPOLACION DE CADENAS
    console.log(`> Server listening @http://${IP}:${PORT} ...`);
});
