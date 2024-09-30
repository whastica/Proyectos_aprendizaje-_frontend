'Use Strict'

// DOM Document object model: sirve para seleccionary manipular los elemntos del HTML

// Mediante document pordemos acceder a los elemntos del html
// Con getElementById accedes a un elementos cuya etiqueta tenga un id 
// document podra ingresar a todos los elementos del html que esten antes del script 
// por eso en el HTML el script se coloca al final 
// inner.HTML nos ayuda a obtber solo el contenido que esta dentro de la etiqueta HTML con el id dado

var caja = document.getElementById("micaja"). innerHTML;

// Para modificar el contenido de un elemento
caja.innerHTML = "Nuevo Texto";
// Para modificar el stilo de un elemento
//caja.style.backgroundColor = "black";
// agregar una clase al elemnto
caja.className = "Hola";

//Query Selector 
//Para acceder a un id utilizamos #
//Para acceder a una clase utilizamos .
var caja2 = document.querySelector("#micaja");

caja2.innerHTML = "Nuevo Texto 3";

console.log(caja2);