/* 

Spanning Tree: Kruskal

En el caso de Kruskal, cambia un criterio y es que no pasa nada si los vertices no estan conectados. Lo principal es que siempre agarremos el par de vertices con la arista de menor costo.

Ahora bien, lo que hará factible sumar el par o no es que cuando lo agreguemos no se forme un ciclo. Si se forma un ciclo, lo descartamos

Teniendo en cuenta esto, para resolver el problema con Kruskal, nos serviria ordenar a los pares de menor a mayor en base al costo de su arista. De esta forma siempre vamos a agarrar al de menor costo y, antes de agregarlo, verificamos que agregandolo no se forme un ciclo. Si se formara, lo salteamos y probamos con el siguiente

*/