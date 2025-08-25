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

let cardNumber = 123; // Ejemplo de ID de membresía (0 significa que no hay membresía)
let role = "invitado"; // El estado puede ser "invitado", "estudiante" o cualquier otro

if (cardNumber > 0 || role === "estudiante")  {
  console.log("¡Acceso concedido! Disfruta de tus libros.");
} else {
  console.log("Lo sentimos, esta sección está restringida.");
}
