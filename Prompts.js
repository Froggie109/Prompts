var name = prompt("¿Cuál es tu nombre?");
if(name == null || name == ""){
    txt = "¡No me díste nada!";
}else{
    txt = "¡Hola, " + name + "!";
}
alert(txt);