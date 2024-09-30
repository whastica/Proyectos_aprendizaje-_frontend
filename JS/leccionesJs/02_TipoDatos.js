'use strict'

// Operadores 

    // Aritméticos
    console.log(5 + 3); // 8
    console.log(5 - 3); // 2
    console.log(5 * 3); // 15
    console.log(5 / 3); // 1.6666666666666667
    console.log(5 % 3);

    // Incremento y decremento
    var x = 5;
    //asi no incrementa nada
    console.log(x++); // 5

    console.log(x); // 6

    //asi incrementa
    var y = 5;
    console.log(++y); // 6

    //Tipos de datos
    var num = 5;
    var str = "5";
    var bool = false;
    console.log(num + str); // 55
    // con typeof te muestra el tipo de dato de una variable
    console.log(typeof num); // number
    console.log(typeof str); // string
    console.log(typeof bool); // boolean
    console.log(typeof (num + str)); // string
    console.log(parseInt(str)); // true

    // Operadores de comparación
    console.log(5 > 3); // Mayor
    console.log(5 < 3); // Menor
    console.log(5 >= 3); // Mayor igual
    console.log(5 <= 3); // Menor igual
    console.log(5 == 3); // Igual comparacion de dato sin importar tipo
    console.log(5 === 3); //Igual fuerte en tipos de datos
    console.log(5 != 3); // diferente
    console.log(5 !== 3); // diferente fuerte en tipos de datos

    