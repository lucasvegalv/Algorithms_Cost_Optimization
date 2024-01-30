function fibonacciDinamica(n){

  // Inicializamos la tabla para almacenar las soluciones parciales y ya incluimos los casos bases
  let tabla = [0, 1]
  console.log(tabla)

  // Desde la posicion 2, iteramos y agregamos nuevas soluciones a la tabla
  for(let i = 2; i <= n; i++){
    let nuevoValor = (tabla[i-1]) + (tabla[i-2])
    tabla.push(nuevoValor) 
  }
  // Devolvemos el ultimo valor que es el que en realidad buscamos
  return tabla[n]
}

console.log(fibonacciDinamica(8))