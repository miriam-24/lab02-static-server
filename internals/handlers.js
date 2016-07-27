// Manejadores de rutas virtuales
var fortune = require("./fortune");

var fechaDeNacimiento = new Date(1992,04,09,5);
module.exports = {
    "/edad/miriam-cruz" : function(req, res){
        res.writeHead(200,{
            "Content-Type" : "application/json"
        });
        // Calculamos la edad
        var hoy = new Date();
        var age = 
        Math.ceil((hoy - fechaDeNacimiento)/(1000*3600*24*365))
        // Ahora vamos a armar el json
        var objetoRespuesta = {
            "edad" : age
        };
        var jsonResponse = 
        JSON.stringify(objetoRespuesta);
        // Enviando la respuesta al cliente
        res.end(jsonResponse); 
    },
    "/getfortune": function(req, res){
        console.log("> Se solicita fortuna...");
        // // Obtenemos el mensaje de la suerte
        fortune.getFortune(function(fortunePaper){
            // Se configura el encabezado de respuesta
            // HTTP
            res.writeHead(200,{
                "Content-Type" : "application/json"
            });
            console.log("Contestando: " + fortunePaper);
            // Respondemos al Objeto
            res.end(fortunePaper);
        });
    }
};