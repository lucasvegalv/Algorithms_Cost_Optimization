/* 
Problema del Cambio con Programacion Dinamica: 

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
*/

function cambioDinamica(candidatos, objetivo) {

  let tabla = [[]]

  // Evaluamos qué nos conviene

  // Si i = 0 ? 
    // Si i <= j ? tabla[i][j] = 
 
}