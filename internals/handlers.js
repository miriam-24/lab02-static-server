// Manejadores de rutas virtuales
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
        //SE OBTIENE EL MENSAJE DE LA SUERTE
        var fortunePaper = {
            "mensaje" :
            "La honestidad es un regalo caro, no lo esperes de gente barata"
        };
        //SE CONFIGURA EL ENCABEZADO DE RESPUESTA HTTP
        res.writeHead(200,{
            "Content-type" :"application/json"
        })
        //PARSEANDO  STRING EL objetoRespuesta
        var jsonResponse = JSON.stringify(fortunePaper);
        //RESPONDEMOS AL OBJETO
        res.end(jsonResponse);

    }


};