function getFortuneFromServer(){
    //REALIZANDO LA SOLICITUD GET EN AJAX
    $.get("/getfortune", function(data, status){
        //va a escribit en la pamtalla del cliente es un console del frontend
        console.log(">" + typeof(data));
        console.log(">Estatus de respuesta: " + estatus);
        alert(data.mensaje);
        swall({
            title : "¡TU FORTUNA!",
            text: data.mensaje,
            imageUrl: "img/gl.jpg"
        })

    });

   
    

}
