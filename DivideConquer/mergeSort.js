// Dentro de los metodos de ordenamiento que vimos, como seleccino o insercion, notamos claramente que la complejidad de estos algoritmos no es muy buena... cuadratica en ambos casos. 

// Vamos a ver otras maneras de ordenar sin que nos resulte tan costoso.

// Merge Sort basicamente lo que hace es, de manera recursiva, ir dividiendo a la entrada hasta su minima expresion. Es decir, va a ir dividiendo al array hasta que ya no se pueda dividir mas (un solo elemento). Una vez que termina de dividir, empieza a "mergear" o combinar estos sub-problemas para formar la solucion del problema original (ordenar el array grande). A diferencia de os otros algoritmos, merge sort tiene una complejidad de N log n

function mergeSort(arr, ini, fin) {
  // Caso base
  if(ini === fin) {
    return [arr[ini]];
  }

  // Dividimos la entrada
  let mid = Math.floor((ini + fin) / 2);

  let left = mergeSort(arr, ini, mid);
  let right = mergeSort(arr, mid + 1, fin);

  // Combinamos los resultados
  return merge(left, right);
}

function merge(left, right) {

  let sortArr = [];
  let i = 0;
  let j = 0;

  while((left.length > i) && (right.length > j)) {
    // Comparamos posicion por posicion ambas listas y agregamos al array resultante (ordenado)
    if(left[i] <= right[j]) {
      sortArr.push(left[i]);
      i++;
    } else {
      sortArr.push(right[j]);
      j++;
    }
  }

    // Agregamos los elementos restantes de ambas listas (si los hay)
  while (i < left.length) {
    sortArr.push(left[i]);
    i++;
  }

  while (j < right.length) {
    sortArr.push(right[j]);
    j++;
  }

  return sortArr;
}

let arr = [5, 3, 10, 50, 2];

console.log(mergeSort(arr, 0, (arr.length - 1)));