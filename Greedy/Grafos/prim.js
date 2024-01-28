/* 

Spanning Treee: Prim

- El resultado es un sub grafo del grafo original
- Este sub grafo tiene la misma cantidad de vertices que el original pero tiene SIEMPRE una arista menos. De esta manera, evitas los ciclos.
- Hay tantos sub grafos posibles como cantidad de vertices
- El problema a resolver es encontrar cual de todos esos sub grafos es el de menor costo

Elementos:
- Los candidatos son los vertices aun no incluidos. Se comienza con un vertice cualquiera, puede ser el que tenga la arista de menor peso
- La funcion de seleccion elige entre los candidatos al que tiene la siguiente arista de costo minimo
- La funcion de factibilidad decide si incluirla o no. En el caso de Prim, solo vamos a incluirla si esta artista esta conectada con alguno de los vertices ya incluidos. Es decir, siempre tenemos que tener formado un arbol. Si el vertice con arista de menor costo no esta conectada, se descarta y se elige la siguiente
- La funcion solucion verifica que hayamos seleccionado a todos los vertices



*/