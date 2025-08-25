/*Para ello:

Utiliza una sentencia if para comprobar si el year es divisible por 400; si es así, es un año bisiesto.
Si no, utiliza una sentencia else if para comprobar si el year es divisible entre 100; si es así, no es un año bisiesto.
Si no, utiliza una sentencia else if para comprobar si el year es divisible entre 4; si es así, es un año bisiesto.
Si no se cumple ninguna de las condiciones, el bloque else debe indicar que el año no es bisiesto.*/

let year = 2020;

if (year % 400 === 0) {
  console.log(`${year} es un año bisiesto.`);
} else if (year % 100 === 0) {
  console.log(`${year} no es un año bisiesto.`);
} else if (year % 4 === 0) {
  console.log(`${year} es un año bisiesto.`);
} else {
  console.log(`${year} no es un año bisiesto.`);
}
