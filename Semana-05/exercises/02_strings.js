//2. Strings
//  a.Crear una variable de tipo string con al menos 10 caracteres y convertir todo el texto en 
// mayúscula(utilizar toUpperCase).
//  b.Crear una variable de tipo string con al menos 10 caracteres y generar un nuevo string con los primeros 5 caracteres guardando el resultado en una nueva variable(utilizar substring).
//  c.Crear una variable de tipo string con al menos 10 caracteres y generar un nuevo string con los últimos 3 caracteres guardando el resultado en una nueva variable(utilizar substring).
//  d.Crear una variable de tipo string con al menos 10 caracteres y generar un nuevo string con la primera letra en mayúscula y las demás en minúscula.Guardar el resultado en una nueva variable(utilizar substring, toUpperCase, toLowerCase y el operador +).
//  e.Crear una variable de tipo string con al menos 10 caracteres y algún espacio en blanco.Encontrar la posición del primer espacio en blanco y guardarla en una variable(utilizar indexOf).
//  f.Crear una variable de tipo string con al menos 2 palabras largas(10 caracteres y algún espacio entre medio).Utilizar los métodos de los ejercicios anteriores para generar un nuevo string que tenga la primera letra de ambas palabras en mayúscula y las demás letras en minúscula(utilizar indexOf, substring, toUpperCase, toLowerCase y el operador +).

console.log('- Ejercicio 2 - Strings');

console.log('a.');
var stringUpper = 'esternocleidomastoideo';
console.log(stringUpper.toUpperCase());

console.log('b.');
var stringSub = 'electrocardiograma';
var fiveCharacters = stringSub.substring(0,5);
console.log('Los primeros 5 caracteres son: ' + fiveCharacters);

console.log('c.');
var stringSub2 = 'paralelepípedo';
var threeCharacters = stringSub2.substring(11, 14);
console.log('Los 3 ultimos caracteres son: ' + threeCharacters);

console.log('d.');
var stringD = 'alquimistas';
var resultadoD = stringD.substring(0,1).toUpperCase() + stringD.substring(1,11).toLowerCase();
console.log(resultadoD);

console.log('e.');
var stringE = 'Encontrar espacio'
var indexEspacio = stringE.indexOf(' ');
console.log('El espacio está en el índice nro: ' + indexEspacio);

console.log('f.');
var stringF = 'picardium rocket';
var resultadoF = stringF.substring(0, 1).toUpperCase() + stringF.substring(1, stringF.indexOf(' ')).toLowerCase() + ' ' + stringF.substring(stringF.indexOf(' ') + 1, stringF.indexOf(' ') + 2).toUpperCase() + stringF.substring(stringF.indexOf(' ') + 2).toLowerCase();
console.log(resultadoF);

