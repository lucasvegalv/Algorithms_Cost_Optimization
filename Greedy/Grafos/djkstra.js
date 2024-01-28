/* 

Caminos mínimos: Dijkstra

- Dado un grafo y un nodo particular del mismo, busca el camino mas corto entre ese nodo y todos los demas
- Devuelve el costo de cada camino, no devuelve el camino en si. Si quisieramos eso, deberiamos de modificar el algoritmo original
- Entonces, el resultado es un grafo con los mismos nodos pero solo hay aristas entre el nodo buscado y todos los demas. Ademas, los pesos de estas aristas indican el costo (minimo) del camino
- Para poder ejecutar el algoritmo, es necesario que el grafo sea dirigido y todos los pesos sean positivos. No quiere decir que tenga que ser conexo, eso no es necesario... pueden haber dos nodos que no esten conectados, pero si lo estan, el peso de su arista tiene que ser positivo

Elementos clave:
- Candidatos = Es el conjunto de vertices del grafo, excluyendo el nodo de origen
- Seleccion = Encargado de elegir de todos los nodos pendientes por visitar, aquel que tenga el camino de menor costo desde el origen y lo marca como visitado
El algoritmo finaliza cuando se hayan visitado todos los nodos

*/