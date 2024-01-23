/* 

Problema del cambio/moneda.

El ejemplo mas sencillo y el primero que vamos a ver es el problema del cambio. 

El mismo consiste en encontrar la forma de devolver un vuelto de valor "v" con monedas de distintas denominaciones usando la menor cantidad de monedas posible.

Por ejemplo, queremos devoler $74 y tenemos billetes de $50, &$15, $10 $5 y $1

La forma mas sencilla seria la siguiente combinacion:
  - 1x $50
  - 1x $15
  - 1x $5
  - 4x $1
  ---------
       $74

En este ejemplo del cambio, podemos identificar las funciones y los candidatos que mencionamos en la teoria (theroy.txt):
  
  - Candidatos: [50, 15, 10 5 y 1] *Fijate que no es casualidad que esten ordenados! 
  - funcion de seleccion: Elige el primer elemento del array de candidatos
  - funcion de factibilidad: Evalua si nos pasamos del objetivo en caso de agregar el candidato a nuestra solucion
  - funcion solucion: Evalua si llegamos al objetivo comparando el acumulado con lo que queremos devolver
  - funcion objetivo: Esta implicita y minimiza la cantidad de monedas


Analizando el costo, va a depender si tenemos ordenada la entrada o no. Si tenemos que ordenarla, el algoritmo de ordenamiento va a determinar la complejidad y la misma sera de O(n log n). En cambio, si no tenemos que ordenar podria ser de O(n) o hasta de O(1)

*/

const prompt = require("prompt-sync")()

let monedas = [50, 25, 10, 5, 1]
let objetivo = parseInt(prompt("Ingrese el motno a devolver: "))

function cambio(candidatos, obj) {

  let acumulador = 0;
  let arrSolucion = [];
  let i = 0;

  while (acumulador < obj && i < candidatos.length) {
    if (acumulador + candidatos[i] <= obj) {
      arrSolucion.push(candidatos[i]);
      acumulador += candidatos[i];
    } else {
      i++;
    }
  }

  // Verificar si se alcanzó el objetivo
  if (acumulador === obj) {
    return arrSolucion;
  } else {
    return "No hay solución exacta con las monedas proporcionadas.";
  }

}

console.log(cambio(monedas, objetivo));