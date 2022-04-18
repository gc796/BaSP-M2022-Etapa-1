//6. Funciones
//  a.Crear una función suma que reciba dos valores numéricos y retorne el resultado.Ejecutar la función y guardar el resultado en una variable, mostrando el valor de dicha variable en la consola del navegador.
//  b.A la función suma anterior, agregarle una validación para controlar si alguno de los parámetros no es un número, mostrar una alerta aclarando que uno de los parámetros tiene error y retornar el valor NaN como resultado.
//  c.Crear una función validate integer que reciba un número como parámetro y devuelva verdadero si es un número entero.
//  d.A la función suma del ejercicio 6b) agregarle una llamada que valide que los números sean enteros.En caso que haya decimales mostrar un alerta con el error y retorna el número convertido a entero(redondeado).
//  e.Convertir la validación del ejercicio 6d) en una función separada y llamarla dentro de la función suma probando que todo siga funcionando igual.

console.log('- Ejercicio 6 - Funciones');

console.log('a.');
var resultadoA;
function sum(num1, num2) {
    resultadoA = num1 + num2;
    return console.log(resultadoA);
}
sum(3,8);
sum(10,13);


console.log('b.');
var resultadoB;
function sumB(num3, num4) {
    if (typeof num3 == 'number' && typeof num4 == 'number') {
        resultadoB = num3 + num4;
        return console.log(resultadoB);
    } else {
        alert('Error, debe ingresar un nro')
        resultadoB = NaN;
        return console.log(resultadoB);
    }
}
sumB(43,7);
sumB('zumbi',10);


console.log('c.');
var resultadoC;
function validateInteger(num5) {
    resultadoC = Number.isInteger(num5);
    return console.log(resultadoC);
}
validateInteger(4);
validateInteger(13123123);
validateInteger(4.5);


console.log('d.');
var resultadoD;
function sumD(num6, num7) {
    if (typeof num6 == 'number' && typeof num7 == 'number') {
        if (Number.isInteger(num6) && Number.isInteger(num7)) {
            resultadoD = num6 + num7;
            return console.log(resultadoD);
        } else {
            alert('Debe ingresar nros enteros, el/los nro/s sera/n redondeado/s');
            num6 = Math.round(num6);
            num7 = Math.round(num7);
            resultadoD = num6 + num7;
            return console.log(resultadoD);
        };
    } else {
        alert('Error, debe ingresar un nro');
        resultadoD = NaN;
        return console.log(resultadoD);
    };
};

sumD(14,14.3);
sumD(12,12);

console.log('e.');
var resultadoE;
function validateInteger2(num8) {
    if (Number.isInteger(num8)) {
        return num8;
    } else {
        alert('El nro: ' + num8 + ' será redondeando');
        return Math.round(num8);
    }
};

function sumE(num9, num10) {
    if (typeof num9 == 'number' && typeof num10 == 'number') {
        num9 = validateInteger2(num9);
        num10 = validateInteger2(num10);
        resultadoE = num9 + num10;
        return console.log(resultadoE);
    } else {
        alert('Error, debe ingresar un nro')
        resultadoE = NaN;
        return console.log(resultadoE);
    }
};

sumE(11,22);
sumE(11.7,100.2);