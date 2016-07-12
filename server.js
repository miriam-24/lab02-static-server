//crearemos un modulo que sirve para crear y hacer cosas web con el modulo http
var http = require("http");
var fs = require('fs');
var config = require("./config/config.js");
var colors = require('colors');
var staticServer = require('./internals/static-server')
//obteniendo informacion del entorno de ejecucion con respecto al ip y al puerto que debemos usar en nuestro server
//obteniendo las configuraciones del modulo de configuracion
var PORT = config.PORT;
var IP = config.IP;
if(IP =='127.0.0.1'){
    console.log(">----EJECUTANTO EN MODO LOCAL----<")
}
//crear un servidor(aquel que escucha en un puerto, escucha peticiones) basico
//el nucleo de node nos permite crear esto
//una funcion es una accion--collback funcion que es ejecutada---()parametros y cuerpo{}
//esta funcion se va a ejecutar cada vez que el server reciba una peticion 
var server = http.createServer(function(req, res){
    
    //obtener url del archivo de la peticion le asigno una variable url
    var url = req.url;
    if(url == "/"){
        //sirve el index
        url = "/index.html";
    }
    console.log(('>URL Solicitada: ${URL} ...'.yellow));
    //Sirvo la url con mi server statico:
    staticServer.serve(url, res);
});
    
// poner a trabajar al server
//puerto3000,localhost'127.0.0.1
server.listen(PORT,IP, function(){
    //HAREMOS INTERPOLACION DE CADENAS
    console.log(`> Server listening @http://${IP}:${PORT} ...`);
});
