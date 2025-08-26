/* 
Celso está organizando un evento que tiene criterios de admisión específicos.
Para participar, una persona debe:

1.- Tener al menos 18 años Y tener una entrada válida.
  Celso necesita escribir un programa que compruebe la edad de los asistentes
  y se asegure de que tengan una entrada.
  Se le dan dos variables:
    age (la edad, que es un número) 
    
    y hasTicket (si tiene entrada, que es un booleano).
    Utiliza una sentencia if y else con un operador lógico para determinar si la persona puede entrar al evento.

Estos son los mensajes de salida proporcionados:

Si el asistente es apto para asistir al evento, muestra el mensaje: "¡Te damos la bienvenida! ¡Diviértete!"
Si el asistente NO es apto, muestra el mensaje: "Lo siento, no puedes entrar."
JavaScript básico
1134px × 745px*/

const age = 18;
const hasTicket = true;

if (age >= 18 && hasTicket) {
  console.log("¡Te damos la bienvenida! ¡Diviértete!");
}else {
  console.log("Lo siento, no puedes entrar.");
}

/**
 * Emma administra una biblioteca pública y quiere establecer reglas para acceder a ciertas secciones de libros. Un visitante puede ingresar a una sección restringida si cumple al menos una de estas condiciones:

Disponer de una tarjeta de la biblioteca, indicado por su número de identificación (cardNumber).
Tienen un rol (role) especial, como "estudiante".
Utiliza una sentencia if y else con un operador lógico para determinar si la persona puede entrar en la sección restringida.

Si la persona puede entrar, se muestra: "¡Acceso concedido! Disfruta de tus libros."
Si la persona no puede entrar, se muestra: "Lo sentimos, esta sección está restringida."
 * 
*/

const cardNumber = 123; // Ejemplo de ID de membresía (0 significa que no hay membresía)
const role = "invitado"; // El estado puede ser "invitado", "estudiante" o cualquier otro

if (cardNumber > 0 || role === "estudiante")  {
  console.log("¡Acceso concedido! Disfruta de tus libros.");
} else {
  console.log("Lo sentimos, esta sección está restringida.");
}


/*
Estás trabajando en una aplicación de suscripción que da a los usuarios acceso a contenido premium.

Cada usuario tiene una variable hasSubscription (tiene suscripción). Si no tienen una suscripción, debes mostrar un mensaje pidiéndoles que actualicen su suscripción.

Si no tienen una suscripción, muestra:

"Suscríbete ahora para desbloquear contenido premium."

Si la tienen, muestra:

"¡Te damos la bienvenida de nuevo, usuario premium!"
*/

let hasSubscription = false;

if (!hasSubscription) {
  console.log("Suscríbete ahora para desbloquear contenido premium.");
} else {
  console.log("¡Te damos la bienvenida de nuevo, usuario premium!");
}

/**
 * Estás construyendo un sistema de control de seguridad para un centro de investigación. Una persona puede participar si cumple al menos una de estas condiciones:

Su nivel de autorización (clearenceLevel) es 5 o superior.
Tienen un pase de acceso especial (hasAccessPass).
Sin embargo, las personas incluidas en la lista de rechazados (isBlacklisted) siempre tienen el acceso denegado, independientemente de otras condiciones.

Tu tarea es implementar un programa que evalúe si a una persona se le concede acceso o se le deniega la entrada en función de estas condiciones:

Si la persona está en la lista de rechazados, muestra: "Acceso denegado. Estás en la lista de rechazados."
Si la persona cumple una de las condiciones de seguridad, muestra: "Acceso concedido. Te damos la bienvenida al área restringida."
Si la persona no cumple con todas las condiciones, muestra: "Acceso denegado. No tienes la autorización requerida."
Utiliza sentencias if, else if, y else con operadores lógicos para determinar si la persona puede entrar o no en el área restringida.
 * 
 */

const clearanceLevel = 4;  // Ejemplo de nivel de autorización
const hasAccessPass = false; // Ejemplo de estado del pase de acceso
const isBlacklisted = false; // Ejemplo de estado de la lista de rechazados

if (isBlacklisted) {
  console.log("Acceso denegado. Estás en la lista de rechazados.");
} else if (clearanceLevel >= 5 || hasAccessPass) {
  console.log("Acceso concedido. Te damos la bienvenida al área restringida.");
} else {
  console.log("Acceso denegado. No tienes la autorización requerida.");
}

let counter = 7;
counter++;
counter -= 2;
console.log(counter);


let points = 4;
points += 3;
points--;
points--;
console.log(points);

let i = 0;

while (i < 5) {
  i++;
  console.log(i);
}