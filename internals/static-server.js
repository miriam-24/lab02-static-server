//Cargas las librerias necesarias 
//para crear mi servidor estatico
var fs = require('fs'),
    config = require('../config/config.js')
mime = require('mime');

//Exortar la funcion de servidor estatico
exports.serve = function (url, res) {
    //Acompletar el path static
    var filePath = config.STATIC_PATH + url;
   console.log("> "+ filePath);
    //VERIFICANDO SI EXISTE O NO 
    //EL ARCHIVO DENTRO DEL SERVIDOR
    fs.exists(filePath, function (exists) {
        if (exists) {
            //si existe? sirvo el archivo,
            fs.readFile(filePath, function (err, content) { 
            //revisar si hay un error
            if (err) {
                console.log('>Hubo error en la lectura del archivo: ${filePath}');
            //enviar error 500  que quiere decir que es un error interno
            res.writeHead(500, {
                'ContentType': 'text/html',
                'Server': 'PilgrimHawks-server@4.4,7'  
        });
        res.end("<h1> Error 500: Recurso Dañado</h1>");
            }else{
                 //configuramos la respuesta
                 var contentType = mime.lookup(filePath);
                 //armamos respuesta
                 res.writeHead(200,{    
                      'Content-Type': contentType,
                      'Server': 'PilgrimHawks-server@4.4,7'  
                 });
                 res.end(content);
            }
           
        });
}else{
    //mando un codigo 404
     res.writeHead(404, {
                'Content-Type': 'text/html',
                'Server': 'PilgrimHawks-server@4.4,7'  
     });
                res.end("<h1>404: Recurso no encontrado</h1>");
}
    });
};