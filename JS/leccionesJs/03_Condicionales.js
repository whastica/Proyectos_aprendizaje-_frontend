// Operadores lógicos
var a = true;
var b = false;
console.log(a && b); // Operdor y
console.log(a || b); // Operador o 
console.log(!a); // Operador de negacion NOT

// condicional IF

var x = 10;
if(x > 5){
    console.log("x es mayor que 5");
}

// condicional IF-ELSE

var y = 8;
if(y > 5){
    console.log("y es mayor que 5");
}else{
    console.log("y es menor que 5");
}

// condicional SWITCH

var letra = "a";
switch(letra){
    case "a":
        console.log("z es igual a 'a'");
        break;
    case "b":
        console.log("z es igual a 'b'");
        break;
    default:
        console.log("z no es igual a 'a' ni 'b'");
}

// operador ternario
// es una especie de if else donde se evalua asi  condicion ? valorSiVerdadero : valorSiFalso;
var numero = 10;
var resultado = numero > 5 ? "numero es mayor que 5" : "numero es menor que 5";
console.log(resultado);

// operador nullish coalescing
// le da un valor por defecto a una variable si esta fue inicializada con null 

var w = null;
var defaultValor = w ?? "Valor por defecto";
console.log(defaultValor);

// operador spread
// Forma de concatenar Arrays
var arr1 = [1, 2, 3];
var arr2 = [4, 5, 6];
var arrConcatenado = [...arr1, ...arr2];
console.log(arrConcatenado);

/* operador rest

function sumar(...numeros){
    return numeros.reduce((acumulador, numero) => acumulador + numero, 0);
}

console.log(sumar(1, 2, 3, 4, 5));*/

// operador de desestructuracion
// permite extraer valores de objetos o arrays y asignarlos a variables de una manera más concisa y legible
var obj = {nombre: "Juan", edad: 25};
var {nombre, edad} = obj;
console.log(nombre);
console.log(edad);

