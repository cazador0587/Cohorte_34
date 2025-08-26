/*
Es la víspera de Año Nuevo 🎉 y la cuenta atrás comienza a partir de 10 segundos. El segundero sigue avanzando mientras no llegue a cero.

Escribe un bucle while que cuente atrás desde 10 y muestre "¡Feliz Año Nuevo!" cuando llegue a cero.
*/

// La cuenta comienza por 10
let count = 10;

// Escribe tu código aquí
while (count >= 0) {
    console.log(count);
    count--;
}
console.log("¡Feliz Año Nuevo!");

//*************************************/

/**
 * Eres el controlador del tren de alta velocidad "TripleTen Express", 
 * que sigue una ruta donde hace paradas cada 10 kilómetros. 
 * El tren inicia su viaje a los 10 km y continúa hasta los 100 km,
 * anunciando cada parada a lo largo del camino. 
 * 
 * Tu tarea es escribir un programa que utilice while
 * para mostrar la lista de todas las paradas de tren.
 * 
 * El resultado:
 * 
 * ¡El "TripleTen Express" está saliendo! Próximas paradas: 
 * 
 * Parada a los 10 km, 
 * Parada a los 20 km,
 * Parada a los 30 km, 
 * Parada a los 40 km,
 * Parada a los 50 km,
 * Parada a los 60 km,
 * Parada a los 70 km,
 * Parada a los 80 km,
 * Parada a los 90 km,
 * Parada a los 100 km,
 * 
 * ¡El "TripleTen Express" ha llegado a su destino final!
 * 
 */

//Solición con while
let km = 10; // Primera parada

console.log('¡El "TripleTen Express" está saliendo!, Próximas paradas: ');

while (km <= 100) {
    console.log(`Parada a los ${km} km,`);
    km += 10; // Incrementa en 10 km para la siguiente parada
}

console.log('¡El "TripleTen Express" ha llegado a su destino final!');

// Solución con for
for (let i = 10; i <= 100; i+= 10) {
    console.log(`Parada a los ${i} km,`);
}
console.log("¡El \"TripleTen Express\" ha llegado a su destino final!");