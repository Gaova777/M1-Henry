'use strict'
// No cambies los nombres de las funciones.

function factorear(num) {
  // Factorear el número recibido como parámetro y devolver en un array
  // los factores por los cuales se va dividiendo a dicho número (De menor a mayor)
  // Ej: factorear(180) --> [1, 2, 2, 3, 3, 5] Ya que 1x2x2x3x3x5 = 180 y son todos números primos
  // Tu código:

  /*
  
  */
var arr = [1]; // siempre va a empezar por 1 
var divisor = 2;

while(num!==1){

  if(num%divisor==0){
    arr.push(divisor);
    num=num/divisor;

  }else{
    divisor++;
  }


}

return arr;

}

function bubbleSort(array) {
  // Implementar el método conocido como bubbleSort para ordenar de menor a mayor
  // el array recibido como parámetro
  // Devolver el array ordenado resultante
  // Tu código:
/*- va comparando de a 2 valores (i con i +1)
- si el que esta en la posicion i es mas grande que el de adlante
los intercambia
- (deberia guardame en un auxiliar loque esta en i antes de pisarlo)
-**optimización**
- si detecta que dio una vuelta y no hizo cambios corta!
ejemplo
[5    ,1    ,4    ,2    ,8] 
 i
      i+1*/
//aux = 5
var flag = true;

while(flag){
  flag = false
  for (var i = 0 ;i < array.length -1 ;i++) {
    if(array[i]>array[i+1]){
      var aux = array[i];
      array[i] = array[i+1]//lo que sucede es que al guardar en aux el valor anterior en array[i], podemos designar ahora si lo que hay en esa posicion a un mas adelante, que es lo que se hace en esa linea de codigo
      array[i+1]=aux;// y en array[i+1] se reescribe bajo lo que guardamos en aux, es como un intercambio a fin de cuentas, uno es el otro y el otro guardado se pone en el otro jaja
      flag = true;// el flag me va a ayudar a volver a empezar el while 

    }
    
  }
}

return array;
}


function insertionSort(array) {
  // Implementar el método conocido como insertionSort para ordenar de menor a mayor
  // el array recibido como parámetro utilizando arreglos
  // Devolver el array ordenado resultante
  // Tu código:
/* tengo que ir "sacando" los valores de mi array y comparandeo con los de atras lo suelto o cuando llegue a la posicion cero o adelante de un valor mas chico

[5, 1, 4, 2, 8]
    i
 j       
 
 */

  for (var i =1 ;i < array.length; i++) {
    var j = i - 1 
    var aux = array[i];//claro!, para poder comenzar a comparar debo guardar en una variable auxiliar, sería algo útil.
    while(j >= 0 && array[j] > aux){
      array[j+1]=array[j];
      j-- //retrocederemos para poder salirse del while y colocar la siguiente condicion

    }
    array[j+1]=aux; //acá, por aplicar j-- queda valiendo
  
  }
  return array;
}



function selectionSort(array) {
  // Implementar el método conocido como selectionSort para ordenar de menor a mayor
  // el array recibido como parámetro utilizando dos arreglos
  // Devolver el array ordenado resultante
  // Tu código:
/* tegno que ir buscando el valor mas chico de mi array
para ubicarlo adelante de todo
[5,   1,   4,   2,    8]
 i 
      j
min*/

  for(var i = 0; i<array.length;i++){
    var min = i;
    for(var j=i+1; j<array.length; j++){
      if(array[j] < array[min]){
        min = j
      }
    }
    var aux = array[i];
    array[i]=array[min];
    array[min] = aux;
  }
  return array;

}


// No modificar nada debajo de esta línea
// --------------------------------

module.exports = {
  factorear,
  bubbleSort,
  insertionSort,
  selectionSort,
};
