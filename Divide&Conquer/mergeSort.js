// Dentro de los metodos de ordenamiento que vimos, como seleccino o insercion, notamos claramente que la complejidad de estos algoritmos no es muy buena... cuadratica en ambos casos. 

// Vamos a ver otras maneras de ordenar sin que nos resulte tan costoso.

// Merge Sort basicamente lo que hace es, de manera recursiva, ir dividiendo a la entrada hasta su minima expresion. Es decir, va a ir dividiendo al array hasta que ya no se pueda dividir mas (un solo elemento). Una vez que termina de dividir, empieza a "mergear" o combinar estos sub-problemas para formar la solucion del problema original (ordenar el array grande). A diferencia de os otros algoritmos, merge sort tiene una complejidad de N log n

let arr = [5, 3, 10, 6, 20, 28, 9, 11, 43, 27, 50, 2];

function mergeSort(arr) {
  // Caso base
  if(arr.length === 1) {
    return arr;
  }

  // Dividimos la entrada
  let mid = Math.floor(arr.length /2);
  
  // Llamados recursivos para cada mitad (seguimos dividiendo las mitades en sub-mitades)
  let left = mergeSort(arr.slice(0, mid));
  let right = mergeSort(arr.slice(mid));
  
  // Ordenamos sub-mitades
  return merge(left, right);
}

function merge(left, right) {

  sortArr = [];
  let i = 0;
  let j = 0;

  while((left.length > 0) && (right.length > 0)) {
    // Comparamos posicion por posicion ambas listas y agregamos al array resultante (ordenado)
    if(left[i] <= right[j]) {
      sortArr.push(left[i]);
      i++;
    } else {
      sortArr.push(right[j]);
      j++;
    }
  }
  return sortArr;
}

console.log(mergeSort(arr));