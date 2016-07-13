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
    }


};