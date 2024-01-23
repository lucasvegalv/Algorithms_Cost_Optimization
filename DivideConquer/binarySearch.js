// De los primeros algoritmos que vemos cuando estudiamos divide and conquer ya que, mediante esta tecnica, podemos mejorar la eficiencia y la complejidad de metodos de busqueda que vimos en cursos anteriores.


// Principalmente lo que hace este algoritmo es dividir a la entrada (un array en este caso) y comparar si ese numero del "medio" es el que estamos buscando. En caso de que no sea, compara si es mayor o menor. A partir de esa informacion, nos vamos a quedar con una mitad (izquierda) u otra (derecha) y repetimos el proceso hasta encontrar el numero.

// ** Importante: Es pre-requisito obligatorio que nuestro array de entrada este ordenado para que binary search funcione correctamente 



function binarySearch(arr, num, ini, fin) {

  // Verificar si los índices están fuera de rango
  if (ini <= fin) {
    let mid = Math.floor((ini + fin) / 2);
  
    // Caso base
    if(num === arr[mid]) {
      console.log("Encontramos al", num, "en el array");
      return true;
    }

    if(num < arr[mid]) {
      // Nos quedamos con la mitad de la izquierda y hacemos el llamado recursivo
      return binarySearch(arr, num, ini, mid - 1);
    } else {
      // Nos quedamos con la mitad de la derecha y hacemos el llamado recursivo
      return binarySearch(arr, num, mid + 1, fin);
    }
  }
}

let array = [1, 2, 5, 7, 9, 10, 12, 14, 15, 17, 20, 34, 43, 50, 79, 86, 95, 100];
const obj = 12;

console.log(binarySearch(array, obj, 0, (array.length - 1)));
