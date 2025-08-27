/*Utiliza un bucle for desde el que iterar del 1 al 100, ambos inclusive.
 El bucle también debe mostrar lo siguiente en la consola:
  el número actual y si se trata de un número par o impar. Utiliza este formato:*/

for (let i = 1; i <= 100; i++) {
  if (i % 2 === 0) {
    console.log(`${i} es par.`);
  } else {
    console.log(`${i} es impar.`);
  }
}

/**
 * Imagina que estás ayudando a organizar un concurso. Hay 10 participantes y cada uno tiene un número del 1 al 10.

Te han pedido que escribas un programa que encuentre a los ganadores con base en dos sencillas reglas:

Un participante gana si su número es par. o
Su número es divisible por 5.
Salida esperada:

¡El participante número 2 es un ganador!
¡El participante número 4 es un ganador!
¡El participante número 5 es un ganador!
¡El participante número 6 es un ganador!
¡El participante número 8 es un ganador!
¡El participante número 10 es un ganador!

Puedes usar cualquier bucle que quieras: for o while.
*/

for (let i = 1; i <= 10; i++){
    if(i % 2 === 0 || i % 5 === 0){
        console.log(`¡El participante número ${i} es un ganador!`)
    }
}

/**
 * Estás creando una pequeña función estadística para una tienda online: sumar los números de pedido del start (principio) al end (final).

Calcula la suma de todos los números enteros del start al end, incluidos en la variable total.

Muestra el resultado en la consola con el siguiente formato: La suma de los números del 3 al 7 es 25.
 */

let start = 3;
let end = 7;
let total = 0;

for (let i = start; i <= end; i++) {
  total += i; // va sumando cada número
}

console.log(`La suma de los números del ${start} al ${end} es ${total}.`);

/**
 * Estás organizando una carrera con 10 participantes, numerados del 1 al 10. 
 * Sin embargo, se descalificarán algunos participantes antes de que comience la carrera.
 * 
 * Números descalificados: 3 y 7.

 *Tu tarea es:

 *Recorrer los participantes numerados del 1 al 10.
 *Si el participante es descalificado, omítelo.
 *Para el resto de participantes, muestra en pantalla: "El participante X puede competir"
 *
 * Salida esperada:

 *El participante 1 puede competir  
 *El participante 2 puede competir  
 *El participante 4 puede competir  
 *El participante 5 puede competir  
 *El participante 6 puede competir  
 *El participante 8 puede competir  
 *El participante 9 puede competir  
 *El participante 10 puede competir
 * 
 */

for (let i = 1; i <= 10; i++) {
  if (i === 3 || i === 7) {
    continue; // Salta a la siguiente iteración si el participante está descalificado
  }
  console.log(`El participante ${i} puede competir`);
}

for (let i = 0; i <= 6; i++) {
    console.log('¡Hola, mundo!');
  if (i === 3) {
    continue;
  }

}