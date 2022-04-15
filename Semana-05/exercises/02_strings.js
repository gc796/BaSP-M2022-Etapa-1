//2. Strings
//  a.Crear una variable de tipo string con al menos 10 caracteres y convertir todo el texto en 
// mayúscula(utilizar toUpperCase).
//  b.Crear una variable de tipo string con al menos 10 caracteres y generar un nuevo string con los primeros 5 caracteres guardando el resultado en una nueva variable(utilizar substring).
//  c.Crear una variable de tipo string con al menos 10 caracteres y generar un nuevo string con los últimos 3 caracteres guardando el resultado en una nueva variable(utilizar substring).

//a
var stringUpper = 'esternocleidomastoideo';
console.log(stringUpper.toUpperCase());

//b
var stringSub = 'electrocardiograma';
var fiveCharacters = stringSub.substring(0,5);
console.log(fiveCharacters);

//c
var stringSub2 = 'paralelepípedo';
var threeCharacters = stringSub2.substring(11, 14);
console.log(threeCharacters);