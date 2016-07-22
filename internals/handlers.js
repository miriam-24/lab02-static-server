// Manejadores de rutas virtuales
var fortune = require("./fortune");
var fechaDeNacimiento = new Date(1992,10,22,1,45);
module.exports = {
    "/edad/miriam-cruz" : function(req, res){
        res.writeHead(200, {
            "Content-Type" : "application/json"

        });
        // Calculo la edad
        var hoy = new Date();
        var age = 
        Math.ceil((hoy - fechaDeNacimiento)/(1000*3600*24*365))
        //Armando el json
        var objetoRespuesta = {
            "edad" : age
        };
        var jsonResponse = 
        JSON.stringify(objetoRespuesta);
        //envio la respuesta al cliente
        res.end(jsonResponse);
    },
    //AGREGANDO OTRO METODO AL,OBJETO DE RUTAS
    "/getfortune": function(req ,res){
        console.log(">Se solicita fotuna...");
        // // SE OBTIENE EL MENSAJE DE LA SUERTE
        //var fortunePaper = {
        //  "mensaje" :
        //"La honestidad es un regalo caro, no lo esperes de gente barata"
        //};
        // SE CONFIGURA EL ENCABEZADO DE RESPUESTA HTTP
        // res.writeHead(200,{
        //    "Content-type" :"application/jason"
        //});
        //PARSEANDO  STRING EL objetoRespuesta
        //al estar en
        //var jsonResponse = JSON.stringify(fortunePaper);
        fortune.getFortune(function(fortunePaper){
            //SE CONFIGURA EL ENCABEZADO DE RESPUESTA HTTP
        res.writeHead(200,{
            "Content-type" :"application/json"
        });
    }); 
        //RESPONDEMOS AL OBJETO
        res.end(jsonResponse);

    }


};