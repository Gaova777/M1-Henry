"use strict";

// Closures

function counter() {
  /*
  Ejercicio 1

  La función counter debe retornar otra función. Esta función retornada debe actuar como un contador, retornando un valor numérico que empieza en 1 e incrementa con cada invocación.

  Ejemplo:
  const nuevoContador = counter()
  nuevoContador()     // 1
  nuevoContador()     // 2
  nuevoContador()     // 3

  const otroContador = counter()
  otroContador()      // 1
  otroContador()      // 2
  otroContador()      // 3
   */
var count = 1; //acá vemos que se crea la variable donde podremos sacar su valor y guardarlo en memoria
  return function(){
    return count ++; //con el valor guardado retorna ese primer valor, y queda almacenado en la variable donde se invoca
  }
}
//var nuevoContador = counter(); queda con count --> 1
//nuevoContador(); al ejecutarse retornará con el valor guardado en counter(); por lo que me saldrá con 1 y al ejecutarla de nuevo me saldrá con el aumento que viene dado de la funcion, otra forma de verlo, es que me retorna el valor count directamente y paso seguido lo aumenta y lo guarda.
//
//primer se crea el contexto de creacion, creamos newconter, y luego el contexto de ejecucion donde invocamos counter, seguidamente en ese contexto nuevo de crecion de counter(); se crea la variable count que se inicializa en 1 y ese valor se guarda en newconter y al mismo tiempo newconter se convierte en la funcion que retorna el primer valor de count que sería 1 

//podemos decir que la funcion retornada será asignada a la variable nuevoContador, y además tendrá acceso a las variables cradas en el contexto Padre, que es el que tiene counter, tener en cuenta que una vez que llega al return, es decir despues de que se finalizó todo el proceso dentro de la funcion padre, lel contexto de ejecución Padre se elimina y queda lo que se devuelve, osea la funcion, y despues al ejecuta

//algo nuevo es poder realizar la siguiente operacion --> counter()(); si bien el primer parentesis me retorna una funcion, pero el segundo parentesis me retorna un valor

function cacheFunction(cb) {
  /*
  Ejercicio 2

  Tu tarea aquí es lograr, mediante un closure, que cacheFunction actúe como una memoria caché para el callback que recibe por parámetro (cb); es decir, que "recuerde" el resultado de cada operación que hace, de manera que, al realizar una operación por segunda vez, se pueda obtener el resultado de esa "memoria" sin tener que efectuar otra vez cálculos que ya se hicieron anteriormente.

  cacheFunction debe retornar una función. Esta función debe aceptar un argumento (arg) e invocar a cb con ese argumento; hecho eso, debe guardar el argumento junto con el resultado de la invocación (tip: usá un objeto donde cada propiedad sea el argumento, y su valor el resultado de la correspondiente invocación a cb) de manera que, la próxima vez que reciba el mismo argumento, no sea necesario volver a invocar a cb, porque el resultado estará guardado en la "memoria caché".


  Ejemplo:
  function square(n){
    return n * n
  }

  const squareCache = cacheFunction(square)

  squareCache(5)    // invocará a square(5), almacenará el resultado y lo retornará
  squareCache(5)    // no volverá a invocar a square, simplemente buscará en la caché cuál es el resultado de square(5) y lo retornará (tip: si usaste un objeto, podés usar hasOwnProperty) 

  */
 
var cache = {} // acá vamos a guardar los argumentos y será util para poder mirar si tenemos o no alguno que pidan otra vez
    return function(arg){
      if(cache.hasOwnProperty(arg)){ //preguntammos si el argumento que ingresamos está en el objeto cache
        return cache[arg] //si, si está entonces devolvemos el cache
      }else{
        cache[arg] = cb(arg) //como no esta en el cache, entonces le realizamos el proceso con cb al argumento y continuamente lo retornamos mi wero
        return cache[arg]
      }//acá podemos describir que la funcion retornada me va a asignar una propiedad con su respectivo valor, donde el valor será el argunmento de cb donde se invocara para retornar el proceso dentro de cb, y así durante todos los valores que se deseen asignar, Pero si hay un valor ingresado que ya se trabajó, el objeto cache me será util para retornar dicho valor sin hacer ningun proceso en cb. :) 
    }


}
const cb = function(x){
  return x * 2;
};


// Bind

var instructor = {
  nombre: "Franco",
  edad: 25,
};

var alumno = {
  nombre: "Juan",
  curso: "FullStack",
};

function getNombre() {
  return this.nombre;
}

/*
  Ejercicio 3

  IMPORTANTE: no modificar el código de arriba (variables instructor y alumno, y función getNombre)

  Usando el método bind() guardar, en las dos variables declaradas a continuación, dos funciones que actúen como getNombre pero retornen el nombre del instructor y del alumno, respectivamente.
*/

let getNombreInstructor = getNombre.bind(instructor);
//al aplicar bind lo que hace es devolver una nueva funcion:
//getNombreInstructo = function getNombre(){ return instructor.nombre} une el this con el objeto dicho anteriormente

let getNombreAlumno = getNombre.bind(alumno);

/*
  Ejercicio 4
  
  Sin modificar la función crearCadena, usar bind para guardar, en las tres variables declaradas a continuación, tres funciones que retornen una cadena (string) y el delimitador especificado (asteriscos, guiones, y guiones bajos, respectivamente). Las funciones obtenidas deberían recibir solamente un argumento - la cadena de texto - ya que los otros argumentos habrán sido "bindeados". 
*/

function crearCadena(delimitadorIzquierda, delimitadorDerecha, cadena) {
  return delimitadorIzquierda + cadena + delimitadorDerecha;
}

let textoAsteriscos = crearCadena.bind(this,'*','*'); //acá lo que ocurre es que le asigno variables fijas a 'delimitadorIzquierda' y 'delimitadorDerecha', el this se deja por convencion pero no es necesario, se puede colocar cuealquier cosa (null, 233, 'cualquier cosa')

//me retorna si la invoco
//textoAsteriscos('Juan'); //*Juan*
//textoAsteriscos('hola'); //*hola*
let textoGuiones = crearCadena.bind(this,'-','-');
let textoUnderscore = crearCadena.bind(this,'_','_');  

// No modifiquen nada debajo de esta linea
// --------------------------------

module.exports = {
  counter,
  cacheFunction,
  getNombreInstructor,
  getNombreAlumno,
  textoAsteriscos,
  textoGuiones,
  textoUnderscore,
};
