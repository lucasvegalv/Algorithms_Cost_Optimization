/* 
Problema del Cambio con Programación Dinámica: 

- La idea es construir una tabla (o matriz) en la que cada celda represente el mínimo número de monedas necesarias para obtener una cantidad específica de dinero. Inicialmente, esta tabla se llena con valores infinitos, excepto para el caso base donde la cantidad de dinero es cero, que requiere cero monedas.

- La relación de recurrencia se define de la siguiente manera: para cada cantidad de dinero i, el mínimo número de monedas necesarias se calcula como el mínimo entre el número de monedas necesarias para alcanzar la cantidad de dinero i menos el valor de una de las denominaciones de monedas, más uno (ya que estamos agregando una moneda adicional).

- Se llena la tabla siguiendo la recurrencia mencionada anteriormente, empezando desde el caso base y avanzando hacia la cantidad deseada de dinero.

- Una vez que la tabla está completa, la cantidad mínima de monedas necesarias para el cambio deseado se encuentra en la última celda de la tabla.

- Si se necesita conocer las monedas específicas utilizadas para obtener el cambio mínimo, se puede realizar un proceso de retroceso siguiendo las decisiones tomadas durante la construcción de la tabla.

- IMPORTANTE: Para el armado de la tabla vamos a tener lo siguiente:
  - Filas (i): Candidatos
  - Columnas (j): Total a pagar de 0  a n, siendo n el objetivo
  - Celdas: Cantidad de monedas (i) que necesito para pagar el monto (j) 

Ejemplo de tabla -> Tenemos monedas de 6, 4 y 1 para pagar 8

---------------------------------------
  | 0 | 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8 |
---------------------------------------
1 |   |   |   |   |   |   |   |   |   |
---------------------------------------
4 |   |   |   |   |   |   |   |   |   |
---------------------------------------
6 |   |   |   |   |   |   |   |   |   |
---------------------------------------

Formulas para definir valor en cada celda (tabla[i][j]):
  - Si j = 0 ? 0
  - Si i = 1 && di > j ? infinito // di es el valor de la denominacion en la posicion i. Es decir si la denominacion que tengo en la primer fila es mayor a lo que tengo que pagar. Basicamente, no puedo pagar
  - Si i = 1 && di <= j ? tabla[i][j-1] + 1
  - Si i > 1 && i > j ? tabla[i-1][j]
  - Si i > 1 && di <= j ? min(tabla[i][j-di], tabla[i-1][j])
*/

function cambioDinamica(candidatos, objetivo) {
  let matriz = [];
  let filas = candidatos.length;
  let columnas = objetivo + 1;

  // Llenamos la matriz con ceros
  for (let i = 0; i < filas; i++) {
      matriz.push(new Array(columnas).fill(0));
  }

  // Generamos los valores con las fórmulas
  for (let i = 0; i < filas; i++) {
    for (let j = 0; j < columnas; j++) {
        if (j === 0) {
            matriz[i][j] = 0;
        } else if (i === 0) {
            if (candidatos[i] > j) {
                matriz[i][j] = Infinity;
            } else {
                matriz[i][j] = matriz[i][j - candidatos[i]] + 1;
            }
        } else {
            if (candidatos[i] > j) {
                matriz[i][j] = matriz[i - 1][j];
            } else {
                matriz[i][j] = Math.min(matriz[i][j - candidatos[i]] + 1, matriz[i - 1][j]);
            }
        }
    }
  }

  // Mostramos la matriz obtenida
  console.log("-------------------------------------------------------------------")
  mostrarMatriz(matriz);
  console.log("-------------------------------------------------------------------");

}


function mostrarMatriz(m) {
  for (let fila of m) {
      console.log(fila.join('\t'));
  }
}

let cand = [1, 4, 6]
let obj = 8

cambioDinamica(cand, obj)