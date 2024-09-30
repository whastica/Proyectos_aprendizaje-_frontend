'Use strict'

// Estructuras de coontrol

// For

for(var i = 0; i < 10; i++){
    console.log(i);
}

// While

var j = 0;

while(j < 10){
    console.log(j);
    j++;
}

// Do-While

var k = 0;

do{
    console.log(k);
    k++;
}while(k < 10);

// Funciones

function sumar(a, b){
    return a + b;
}

console.log(sumar(5, 3));

// Funciones con parametros por defecto

function saludar(nombre = "Desconocido", edad = 0){
    return `Hola ${nombre}, tienes ${edad} años`;
}

console.log(saludar());

// Funciones con parametros rest y spread

function multiplicar(...nums){
    return nums.reduce((acc, num) => acc * num, 1);
}

console.log(multiplicar(2, 3, 4, 5));

// Arrow functions

const sumarArrow = (a, b) => a + b;

console.log(sumarArrow(5, 3));

// Template literals

var nombre = "Juan";
var edad = 25;

console.log(`Hola ${nombre}, tienes ${edad} años`);
