/**
 * Tu tarea consistirá en crear un bucle que muestre los números del 1 al 100 en la consola.
 * Utiliza un bucle for desde el que iterar del 1 al 100, ambos inclusive.
 * 
 */
for (let i = 1; i <= 100; i++) {
    console.log(i);
}

/**
 * ¿Recuerdas el ejercicio del TripleTen Express de la lección anterior? Esta vez, ¡vamos a resolverlo usando un bucle for!

Aquí tienes un rápido recordatorio de la tarea:

Eres el controlador del tren de alta velocidad "TripleTen Express", que sigue una ruta donde hace paradas cada 10 kilómetros. El tren inicia su viaje a los 10 km y continúa hasta los 100 km, anunciando cada parada a lo largo del camino.

Tu tarea es mostrar la lista de todas las paradas de tren.

El resultado:

¡El "TripleTen Express" está saliendo! Próximas paradas:  
Parada a los 10 km  
Parada a los 20 km  
Parada a los 30 km  
Parada a los 40 km  
Parada a los 50 km  
Parada a los 60 km  
Parada a los 70 km  
Parada a los 80 km  
Parada a los 90 km  
Parada a los 100 km  
¡El "TripleTen Express" ha llegado a su destino final!
 * 
 */


let km = 10; // Primera parada

console.log('¡El "TripleTen Express" está saliendo!, Próximas paradas: ');
for (let i = 10; i <= 100; i+= 10) {
    console.log(`Parada a los ${i} km,`);
}  
console.log('¡El "TripleTen Express" ha llegado a su destino final!');

for (let i = 10; i <= 100; i += 10) {
  console.log(`Parada a los ${i} km,`);
}
console.log('¡El "TripleTen Express" ha llegado a su destino final!');