var fortunePaper = {
    "mensaje" :
    "La honestidad es un regalo caro, no lo esperes de gente barata"
};
module.exports = {
    "getFortune" : function(cb){
        //convirtiendo el fortunepaper de objeto a su version en string
        fortunePaper = JSON.strinify(fortunePaper);
        //Ejecuto el callback (cb) pasandole
        //como parametro el fortunepapaer string
        cb(fortunePaper)

    }
};