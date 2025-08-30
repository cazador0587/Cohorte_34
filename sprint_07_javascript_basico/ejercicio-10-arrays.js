/**
 * Crea una variable llamada morningList (Lista de la mañana) y conviértelo en un array de actividades 
 * matutinas añadiendo los siguientes strings:

"Levantarse de la cama"

"Cepillarse los dientes"

"Ver las redes sociales"

"Desayunar"

Muestra el array resultante en la consola.
 * 
 
let morningList = [
    "Levantarse de la cama",
    "Cepillarse los dientes",
    "Ver las redes sociales",
    "Desayunar"
];

console.log(morningList);*/

/**
 * Muestra en la consola el primer y el último elemento del array. 
 * Encuentra el índice del último elemento utilizando la propiedad length.
 * Recuerda que el primer elemento de un array tiene el índice 0.
 * 
 */

/*let morningList = [
  'Levantarse de la cama',
  'Cepillarse los dientes',
  'Ver las redes sociales',
  'Desayunar'
];

// Primer elemento → índice 0
console.log("Primer elemento:", morningList[0]);

// Último elemento → índice = length - 1
let ultimoIndice = morningList.length - 1;
console.log("Último elemento:", morningList[ultimoIndice]);*/

let morningList = [
  "Levantarse de la cama",
  "Cepillarse los dientes",
  "Ver las redes sociales",
  "Desayunar",
];

// Sustituir el tercer elemento (índice 2)
morningList[2] = 'Ejercicio';

// Agregar "Lavar los platos" al final del array
morningList[morningList.length] = 'Lavar los platos';

// Mostrar la nueva versión en consola
console.log(morningList);