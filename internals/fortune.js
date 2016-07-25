//1. cargando el driver de mongodb que me 
//permitira conectarme a la base de datos
var mongo = require("mongodb");
//CARGO AL CLIENTE DE DRIVER
var mongoClient = mongodb.MongoClient;
module.exports = {
    "getFortune" : function(cb){
        //conectando el cliente a la base de datos fortune
        mongoClient.connect("mongodb://127.0.0.1:2701/fortune");
        function(err, db){
            if(err){
                console.log("Error al conectarse a" +
                "La base de datos:"+ "mongodb://127.0.0.1:2701/fortune");
var fortunePaper = {
     "mensaje" :
        "La honestidad es un regalo caro, no lo esperes de gente barata"
 };
            }
        }
        // //convirtiendo el fortunepaper de objeto a su version en string
        var fortunePaperResponse = JSON.stringify(fortunePaper);
        // //Ejecuto el callback (cb) pasandole
        // //como parametro el fortunepapaer string
         cb(fortunePaperResponse)
        }else{
            //obtengo ls colleccion con la que quiero trabajar
            var papersCollection = db collection("papers");
            //consultos los documentos de mi collecion
            var objetoResultado=
            papersCollection.find({});
            //parseo el objeto resultado en un arreglo
            objetoResultado.toArray(function(err, papers){
                //investigar codigo un arreglo por su tamaño para siempre tomar un elemento al azar
                var fortunePaperResponse= JSON.stringify(papers[0]);
                //cerrar la conexion entre el cliente
                //y la base de datos
                db.close()
                //invoco al cb pasandole como parametro la respuesta
                cb(fortunePaperResponse);
            })
        }
};