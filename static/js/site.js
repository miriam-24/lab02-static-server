function hola(){
    sweetAlert("World Places",
    "¡Bienevenido a esta pagina!");
    document.body.style.backgroundColor = "lightseagreen"
}
function changeBkgColor(){
    var color = document.body.style.backgroundColor;
    console.log(">color original:" + color);
    if(color == "lightseagreen"){
    color = "honeydew";
}else{
    color = "lightseagreen";
}
console.log(">Cambiando el color a " + color);
document.body.style.backgroundColor = color;
}
