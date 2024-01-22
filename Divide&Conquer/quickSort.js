
let arr = [5, 3, 10, 6, 20, 28, 9, 11, 43, 27, 50, 2];

function quickSort(arr) {

  // Caso base: si la lista es de longitud 0 o 1, ya está ordenada
  if (arr.length <= 1) {
    return arr;
  }
  
  // Seleccionamos el pivot
  let pivot = arr[0]; // pivot = 5

  // Generamos dos listas ordenando el pivot
  let left = arr.slice(1).filter(x => x <= pivot); // con el slice(1) generamos una copia del array pero excluyendo al arr[0] (pivot)
  let right = arr.slice(1).filter(x => x > pivot); // con el filter nos aseguramos de ordenar a un lado los menos y al otro los mayores al pivot

  // left = [3, 2]
  // right = [10, 6, 20, 28, 9, 11, 43, 27, 50]

  // Concatenamos ambas listas y ordenamos el pivot
  return quickSort(left).concat(pivot, quickSort(right));
}

console.log(quickSort(arr));