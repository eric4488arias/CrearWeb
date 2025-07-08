// ---------------------------------------------------
// Mensajes
const msj1 = document.getElementById("msj1");
if (msj1){
    msj1.innerHTML = "Titulo de la pagina";
}
const msj2 = document.getElementById("msj2");
if (msj2){
    msj2.innerHTML = "Ultimo mensaje de la pagina de inicio";
}
const msj3 = document.getElementById("msj3");
if (msj3){
    msj3.innerHTML = "Estas en la segunda pagina";
}
const msj4 = document.getElementById("msj4");
if (msj4){
    msj4.innerHTML = "Estas en la tercera pagina";
}
const msj5 = document.getElementById("msj5");
if (msj5){
    msj5.innerHTML = "Otro mensaje en la pagina de inicio.";
}
const msj6 = document.getElementById("msj6");
if (msj6){
    msj6.innerHTML = "Este es un mensaje dentro del contenedor 7";
}
const msj8 = document.getElementById("msj8");
if (msj8){
    msj8.innerHTML = "Estas en la pagina de inicio";
}
const msj9 = document.getElementById("msj9");
if (msj9){
    msj9.innerHTML = "Ultimo mensaje de la segunda pagina";
}
const msj10 = document.getElementById("msj10");
if (msj10){
    msj10.innerHTML = "Este mensaje es para ajustar el contenedor en las dimensiones.";
}
const msj11 = document.getElementById("msj11");
if (msj11){
    msj11.innerHTML = "Mensaje en la tercera pagina, mensaje inferior.";
}
// ---------------------------------------------------
// funcion mostrar y ocultar contenedor
function funcionClick(){
    var contenedor10 = document.getElementsByClassName("contenedor10")[0]; 
    if (contenedor10.style.visibility == "hidden"){
        contenedor10.style.visibility = "visible";
    }else{
        contenedor10.style.visibility = "hidden";
    }
}
//---------------------------------------------
// funcion hamburguesa
const nav = document.querySelector(".nav-enlaces");
const abrir = document.querySelector("#abrir");
const cerrar = document.querySelector("#cerrar");

abrir.addEventListener("click", () => {
    nav.classList.add("visible");
});
cerrar.addEventListener("click", () => {
    nav.classList.remove("visible");
});

//---------------------------------------------
// funcion ver dimensiones de la pantalla
function funcionDimension() {
    const ancho = window.innerWidth;
    const alto = window.innerHeight;
    document.getElementById("id-dimension").textContent = `ventana: ${ancho} x ${alto}`;
}
// Mostrar el tamaño al cargar la página
funcionDimension();
// Actualizar cuando se redimensiona
window.addEventListener("resize", funcionDimension);
// Mostrar solo en movil
function funcionDimension() {
    const ancho = window.innerWidth;
    const alto = window.innerHeight;
    
    let dispositivo = "";
    if (ancho <= 600) {
        dispositivo = " (Celular)";
    } else if (ancho <= 1024) {
        dispositivo = " (Tablet)";
    } else {
        dispositivo = " (Escritorio)";
    }
    document.getElementById("id-dimension").textContent = `ventana: ${ancho} x ${alto}${dispositivo}`;
}
// ---------------------------------------------------