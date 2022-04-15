//3. Arrays
//  a.Dado el siguiente array: ["Enero", "Febrero", "Marzo", "Abril", "Mayo", "Junio", "Julio", "Agosto", "Septiembre", "Octubre", "Noviembre", "Diciembre"] mostrar por consola los meses 5 y 11(utilizar console.log).
//  b.Ordenar el array de meses alfabéticamente y mostrarlo por consola(utilizar sort).
//  c.Agregar un elemento al principio y al final del array(utilizar unshift y push).
//  d.Quitar un elemento del principio y del final del array(utilizar shift y pop).
//  e.Invertir el orden del array(utilizar reverse).
//  f.Unir todos los elementos del array en un único string donde cada mes este separado por un guión - (utilizar join).
//  g.Crear una copia del array de meses que contenga desde Mayo hasta Noviembre(utilizar slice).

console.log('- Ejercicio 3 - Arrays');

console.log('a.');
var arrayMeses = ["Enero", "Febrero", "Marzo", "Abril", "Mayo", "Junio", "Julio", "Agosto", "Septiembre", "Octubre", "Noviembre", "Diciembre"];
console.log('Mes 5: ' + arrayMeses[5] + ' Mes 11: ' + arrayMeses[11]);

console.log('b.');
console.log('Meses ordenados: ' + arrayMeses.sort());

console.log('c.');
arrayMeses.unshift('Inicio');
arrayMeses.push('Fin');
console.log(arrayMeses);

console.log('d.');
arrayMeses.shift();
arrayMeses.pop();
console.log(arrayMeses);

console.log('e.');
console.log('Meses al reves: ' + arrayMeses.reverse());

console.log('f.');
var arrayJoin = arrayMeses.join('-');
console.log(arrayJoin);

console.log('g.');
arrayMeses = ["Enero", "Febrero", "Marzo", "Abril", "Mayo", "Junio", "Julio", "Agosto", "Septiembre", "Octubre", "Noviembre", "Diciembre"];
var arrayMesesCopia = arrayMeses.slice(4,11);
console.log(arrayMesesCopia);

