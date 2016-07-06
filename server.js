//crearemos un modulo que sirve para crear y hacer cosas web con el modulo http
var http = require("http");
//crear un servidor(aquel que escucha en un puerto, escucha peticiones) basico
//el nucleo de node nos permite crear esto
//una funcion es una accion--collback funcion que es ejecutada---()parametros y cuerpo{}
//esta funcion se va a ejecutar cada vez que el server reciba una peticion 
var server = http.createServer(function(req, res){
    //armar la respuesta http
    //armar un encabezado http
    res.writeHead(200, {
        "Content-Type" : "text/plain", "Server" : "ITGAM@4.4.7"
    });
    // enviamos la respuesta
    res.write("hola mundo");
    //cerrar la conexion
    res.end();
});
// poner a trabajar al server
//puerto3000,localhost'127.0.0.1
server.listen(3000,'127.0.0.1', function(){
    console.log(">Server listening @http://localhost:3000 ...");
});
