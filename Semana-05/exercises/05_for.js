//5. For
//  a.Crear un array que contenga 5 palabras y recorrer dicho array utilizando un bucle for de JavaScript para mostrar una alerta utilizando cada una de las palabras.
//  b.Al array anterior convertir la primera letra de cada palabra en mayúscula y mostrar una alerta por cada palabra modificada.
//  c.Crear una variable llamada “sentence” que tenga un string vacío, luego al array del punto a) recorrerlo con un bucle for para ir guardando cada palabra dentro de la variable sentence.Al final mostrar una única alerta con la cadena completa.
//  d.Crear una array vacío y con un bucle for de 10 repeticiones.Llenar el array con el número de la repetición, es decir que al final de la ejecución del bucle for debería haber 10 elementos dentro del array, desde el número 0 hasta al número 9. Mostrar por la consola del navegador el array final(utilizar console.log).

console.log('- Ejercicio 5 - For');


console.log('a.');
var newArray = ['hola','soy','un','nuevo','array'];

for (let index = 0; index < newArray.length; index++) {
    alert(newArray[index]);  
}

console.log('b.');
for (let index = 0; index < newArray.length; index++) {
    alert(newArray[index].substring(0, 1).toUpperCase() + newArray[index].substring(1));
}

console.log('c.');
var sentence = '';

for (let index = 0; index < newArray.length; index++) {
    sentence = sentence + ` ` + newArray[index];
}
console.log(sentence);

console.log('d.');
var soyUnArray = [];

for (let index = 0; index < 10; index++) {
    soyUnArray[index] = index;
}

console.log(soyUnArray);