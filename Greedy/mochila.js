/*

Se tiene una mochila con un peso "p" y un valor "v"

La mochila puede llevar un peso que no sobrepase P

Vamos a llenar la mochile con objetos que tienen pesos y valores

El objetivo es MAXIMIZAR el valor de los objetos agregados

Dependiendo el problema, los objetos pueden ser fraccionados o no
  - Si una fraccion (0 <= x >= 1) de un objeto es agregada a la mochila, contribuye en:
    - x * p al peso total de la mochila
    - x * v al valor total de la carga
    
* Observacion: Esta claro que si la suma de todos los pesos es menor al peso maximo de la mochila, no hay nada que maximizar y agregamos a todos los objetos

La mayoria de las veces eso no pasa y hay que elegir a cual agregamos y a cual no

Para hacer esto, lo mejor es ordenar los objetos de mayor a menor segun su relacion valor/peso de cada objeto, luego vamos tomando los objetos en ese orden, consideramos lo maximo que podemos tomar sin pasarse del peso y continuamos

*/

// No tenemos una lista de objetos, sino que los identificamos por su posicion en ambos arreglos (pesos y valores)


function mochilaGreedy(items, capacidad) {
  // Ordenar los items en orden decreciente según el valor por peso (valor/peso)
  items.sort((a, b) => (b[0] / b[1]) - (a[0] / a[1]));

  let mochila = [];
  let capacidadRestante = capacidad;

  // Iterar sobre los items ordenados
  for (let item of items) {
      const [valor, peso] = item;

      // Si el peso del item es menor o igual a la capacidad restante de la mochila
      if (peso <= capacidadRestante) {
          // Agregar el item a la mochila
          mochila.push(item);
          // Restar el peso del item de la capacidad restante de la mochila
          capacidadRestante -= peso;
      }
  }
  return mochila;
}

// Ejemplo de Uso:
const items = [
  [60, 10],  // Item 1: Valor = 60, Peso = 10 --> 6
  [100, 20], // Item 2: Valor = 100, Peso = 20 --> 5
  [120, 30]  // Item 3: Valor = 120, Peso = 30 --> 4
];

const capacidadMochila = 50; // Capacidad máxima de la mochila

const resultado = mochilaGreedy(items, capacidadMochila);

console.log("Obtuviste un total de ", (resultado[0][1] + resultado[1][1]), " para el peso, y un total de ", (resultado[0][0] + resultado[1][0]), " como valor"); // 30 de peso y 160 