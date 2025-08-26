/*
Es la víspera de Año Nuevo 🎉 y la cuenta atrás comienza a partir de 10 segundos. El segundero sigue avanzando mientras no llegue a cero.

Escribe un bucle while que cuente atrás desde 10 y muestre "¡Feliz Año Nuevo!" cuando llegue a cero.
*/

// La cuenta comienza por 10
/*let count = 10;

// Escribe tu código aquí
while (count >= 0) {
    console.log(count);
    count--;
}
console.log("¡Feliz Año Nuevo!");


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
/*let km = 10; // Primera parada

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

/*************************************/

/**
 * A Julia se le asignó la tarea de comprar comestibles.
 * Después de comprar lo que necesitaba, a Julia le quedaban $15 y quería revisar todos los estantes de dulces,
 * tomando uno de cada tipo para ella. 
 * 
 * Cada golosina cuesta $2. No tiene el suficiente dinero para comprar todos los dulces de la tienda. 
 * Utiliza un bucle while para mostrar cuántos dulces compró. 
 * Cada vez que Julia compre una golosina, muestra Julia compró n dulces en la consola,
 * donde n es el total acumulado de dulces que compró a partir de la iteración actual. 
 * Después de salir del bucle, muestra en la consola la cantidad de dinero (si queda) que le queda a Julia.
 * 
 **/

const candyPrice = 2;
let candiesBought = 0;
let moneyLeft = 15;

/*while (moneyLeft >= candyPrice) {
    candiesBought++;
    moneyLeft -= candyPrice;
    console.log(`Julia compró ${candiesBought} dulces`);
}
console.log(`A Julia le quedan $ ${moneyLeft}`);
/**
 * 
 */
while (moneyLeft >= candyPrice) {
  candiesBought += 1;
  console.log(`Julia compró ${candiesBought} dulces`);

  moneyLeft = moneyLeft - candyPrice;
}
console.log(`A Julia le quedan $ ${moneyLeft}`);