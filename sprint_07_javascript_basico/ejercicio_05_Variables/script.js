/*
	José está creando un cartel,
	ayúdale declarando las variables para el nombre de su club y para el del artista
	utiliza tanto const/let
*/
const clubName = 'House of Blues';
let performingArtist = 'Chuck Berry';

console.log(clubName);
console.log(performingArtist);

performingArtist = 'Muddy Waters';

console.log(performingArtist);

/*
¿Recuerdas a Miguel? Si es así, probablemente recuerdes que utilizamos tres cálculos separados para calcular el número de discos que podía comprar y la cantidad de dinero que le quedaba después. Si no recuerdas a Miguel, lo ayudamos en la lección Números y operadores aritméticos. Nuestro código habría sido mucho mejor si hubiéramos utilizado variables, ¡así que vamos a utilizar nuestros nuevos conocimientos para hacer precisamente eso!

Esta es la descripción del ejercicio de esa lección:

Mike trabaja como ingeniero de escena para una agencia de conciertos. Una famosa banda viene a la ciudad y se le pide que compre tantos fuegos artificiales como sea posible con un presupuesto de 1000. Cada fuego artificial cuesta 60.

Lo que quede al final se lo puede gastar Miguel en lo que quiera. Siendo un amante de los discos de vinilo, decide utilizar el dinero sobrante en comprar tantos discos como sea posible. Cada disco de vinilo cuesta  18.

¿Cuánto dinero le quedará a Miguel después de pedir los fuegos artificiales?
¿Cuántos discos comprará Miguel?
¿Cuánto dinero le quedará al final?
Muestra las respuestas a las preguntas anteriores en la consola en el orden descrito anteriormente. Solo debes escribir números y operadores matemáticos dentro de métodos console.log() independientes.

Para responder a la segunda pregunta, necesitaremos obtener el número entero redondeando el resultado de la división. Utiliza el método especial Math.floor() para redondear el número.

Utiliza unas variables llamadas budget (presupuesto), fireworkCost (costo de los fuegos artificiales) y vinylRecordCost (costo de los discos de vinilo) y utiliza los mismos valores de antes. Declara tres variables más: moneyLeftAfterOrderingFireworks (dinero restante después de comprar los fuegos arificiales), vinylRecordsCount (número de discos de vinilo) y moneyLeftAfterOrderingVinylRecords (dinero restante después de comprar los discos de vinilo). Calcula los valores correspondientes y luego muestra estas variables en la consola.
*/
// Math.floor(2.5) // 2
const budget = 1000;
const fireworkCost = 60;
const vinylRecordCost = 18;

const moneyLeftAfterOrderingFireworks = budget - (Math.floor(budget / fireworkCost) * fireworkCost);
const vinylRecordsCount = Math.floor(moneyLeftAfterOrderingFireworks / vinylRecordCost);
const moneyLeftAfterOrderingVinylRecords = moneyLeftAfterOrderingFireworks - (vinylRecordsCount * vinylRecordCost);

console.log(moneyLeftAfterOrderingFireworks);
console.log(vinylRecordsCount);
console.log(moneyLeftAfterOrderingVinylRecords);
// Ejercicio extra
/*Miguel ha decidido que quiere comprar un coche. El coche cuesta 5000 y Miguel tiene 2000 ahorrados. ¿Cuánto dinero le falta a Miguel para comprar el coche? Utiliza una variable llamada carCost (costo del coche) y otra llamada moneySaved (dinero ahorrado). Calcula cuánto dinero le falta a Miguel para comprar el coche y muestra el resultado en la consola.
*/
const carCost = 5000;
const moneySaved = 2000;
const moneyNeededForCar = carCost - moneySaved; 
console.log(moneyNeededForCar);
// Ejercicio extra 2
/*Miguel ha decidido que quiere comprar un coche. El coche cuesta 5000 y Miguel
tiene 2000 ahorrados. ¿Cuánto dinero le falta a Miguel para comprar el coche? Utiliza una variable llamada carCost (costo del coche) y otra llamada moneySaved (dinero ahorrado). Calcula cuánto dinero le falta a Miguel para comprar el coche y muestra el resultado en la consola.
*/
const carCost2 = 5000;
const moneySaved2 = 2000;
const moneyNeededForCar2 = carCost2 - moneySaved2;
console.log(moneyNeededForCar2);
// Ejercicio extra 3
/*Miguel ha decidido que quiere comprar un coche. El coche cuesta 5000 y Miguel
tiene 2000 ahorrados. ¿Cuánto dinero le falta a Miguel para comprar
el coche? Utiliza una variable llamada carCost (costo del coche) y otra llamada moneySaved (dinero ahorrado). Calcula cuánto dinero le falta a Miguel para comprar el coche y muestra el resultado en la consola.
*/
const carCost3 = 5000;
const moneySaved3 = 2000;
const moneyNeededForCar3 = carCost3 - moneySaved3;
console.log(moneyNeededForCar3);
// Ejercicio extra 4
/*Miguel ha decidido que quiere comprar un coche. El coche cuesta 5000 y Miguel
tiene 2000 ahorrados. ¿Cuánto dinero le falta a Miguel para comprar el coche? Utiliza una variable llamada carCost (costo del coche) y otra llamada moneySaved (dinero ahorrado). Calcula cuánto dinero le falta a Miguel para comprar el coche y muestra el resultado en la consola.
*/
const carCost4 = 5000;
const moneySaved4 = 2000;
const moneyNeededForCar4 = carCost4 - moneySaved4;
console.log(moneyNeededForCar4);
// Ejercicio extra 5
/*Miguel ha decidido que quiere comprar un coche. El coche cuesta 5000 y Miguel
tiene 2000 ahorrados. ¿Cuánto dinero le falta a Miguel para comprar el coche? Utiliza una variable llamada carCost (costo del coche) y otra llamada moneySaved (dinero ahorrado). Calcula cuánto dinero le falta a Miguel para comprar el coche y muestra el resultado en la consola.
*/
const carCost5 = 5000;
const moneySaved5 = 2000;
const moneyNeededForCar5 = carCost5 - moneySaved5;
console.log(moneyNeededForCar5);
// Ejercicio extra 6
/*Miguel ha decidido que quiere comprar un coche. El coche cuesta 5000 y Miguel
tiene 2000 ahorrados. ¿Cuánto dinero le falta a Miguel para comprar el coche? Utiliza una variable llamada carCost (costo del coche) y otra llamada moneySaved (dinero ahorrado). Calcula cuánto dinero le falta a Miguel para comprar el coche y muestra el resultado en la consola.
*/
