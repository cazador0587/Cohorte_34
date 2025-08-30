/**
 * Hay un array de nombres de estudiantes en el código. Estos estudiantes son todos de la cohorte 30.

Muestra cada nombre en la consola seguido del nombre de la cohorte. Utiliza la concatenación de strings para añadir el número de cohorte después de cada nombre:

La salida debería verse así:

Isabel Cohorte 30
Elisa Cohorte 30
Tomás Cohorte 30
 * 
 */

let students = ["Isabel", "Elisa", "Tomás"];
let cohort = 30;

for (const student of students) {
    console.log(student + " Cohorte " + cohort);
}