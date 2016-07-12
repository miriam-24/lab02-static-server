function hola(){
    alert("Bienvenido a esta pagina...");
}
function changeBkgColor(){
    var color = document.body.style.backgroundColor;
    console.log(">COLOR ORIGINAL")
    if(color == "lightseagreen"){
    color = "honeydew";
}else{
    color = "lightseagreen";
}
console.log(">Cambiando el color a " + color);
document.body.style.backgroundColor = color;
}
