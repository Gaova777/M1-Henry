//encontrar el maximo en un arreglo... miraremos complejidad, o cantidad de pasos

//N = length del array
// var max = array[0];// 1 paso
// for( var i = 0; i <= array.length; i++){// va  a entrar N veces
//  if( array[i] > max) { // 1
//   max = array[i]; // 1
//  }
// }
// console.log(max);//1

//que podemos decir de esto, como es la complejidad de esto
/* podremos darnos cuenta haciendo operaciones que equivalgan en los pasos dados dentro del algoritmo es decir:

1 + N*2 + 2 = 2 + 2N --> como nno hay otro tipo de valores  mas nos muestra una funcion lineal, por lo tanto esta complejidad es lineal es big O N --> O(N) */


// otro ejemplo sería

for( var i = 0; i <= array.length; i++){ //N veces
    for( var j = 0; j <= array.length; j++){ // N veces
      if(array[i] === array[j]){ // 1 N
       return true; // 1N
      }
    }
   };// O( N x N) = O (n²)