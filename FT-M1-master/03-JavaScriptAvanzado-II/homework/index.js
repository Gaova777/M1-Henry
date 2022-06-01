// //CLOUSERS

// function saludar (saludo){
//     return function(nombre){
//         console.log(saludo+' '+nombre)
//     }
// }

// var saludoconNombre = saludar('Hola')

// saludoconNombre('Diego');

// // this is a FACTORY FUNCTION
// function hacerSaludo( lenguaje ){
//     return function(){
//       if ( lenguaje === 'en'){
//         console.log('Hi!'); //acá vemos como se va creando el clouser, guardando en memoria cada valor que puede tener la variable de entrada lenguaje, lo cual es fasinante que se pueda guardar una vez eliminado el contexto de ejecución apriori de la funcion........here we see how is creating the clousure, saving in memory computer each valor of the argument of hacerSaludo, that is wonderful! how is saved after to remove the execution context a priori  of the function
//       }
  
//       if ( lenguaje === 'es'){
//         console.log('Hola!');
//       }
//     }
//   }
  
//   var saludoIngles = hacerSaludo('en');
//   var saludoEspaniol = hacerSaludo('es')
// //   saludoEspaniol();
// saludoIngles();

//***** USO DE BIND, CALL AND APLLY */

// var persona = {
//     nombre: 'Franco',
//     apellido: 'Chequer',
  
//     getNombre: function(){
//       var nombreCompleto = this.nombre + ' ' + this.apellido;
//       return nombreCompleto;
//     }
//   }
  
//   var logNombre = function(){
//     console.log(this.getNombre()); // para este caso vemos que usa el this global, no esta diciendo cual this puntualmente usar :/ 
//   }

//   var logNombrePersona = logNombre.bind(persona);
// logNombrePersona(); //acá si estamos redirigiendo la funcion de logNombre al objeto persona, gracias a bind. por lo que en el parametro de bind le asignamos el objeto y este parametro lo conecta con el this de la funcion que necesitamos usar

// var logNombre = function(arg1, arg2){
//     console.log(arg1 +' '+ this.getNombre() +' '+ arg2);
//   }
  
//   logNombre.call(persona, 'Hola', ', Cómo estas?'); //con call es mas directa la cosa, podemos acceder directamente al this de la funcion colocando los parametros tal y como aparecen acá, con el orden especificado, primero el objeto, luego el argumento uno y el ultimo o los que sean necesarios.


// var logNombre = function(arg1, arg2){
//     console.log(arg1 +' '+ this.getNombre() +' '+ arg2);
//     }

//     logNombre.apply(persona, ['Hola', ', Cómo estas?']); //para este caso, es lo mismo que call pero los argumentos de la funcion logNombre van como si fueran un arreglo, muy util cuando no se sabe cuantos argumentos deben colocarse.

// /** FUNCTION BORROWING
//  * PODEMOS decir que es una especie de metodo del call o puede ser de los otros tambien, no se, donde se puede pedir prestada una funcion del anterior objeto para aplicarlo a nuevo objeto:
//  */

//  var persona2 = {
//     nombre: 'Manu',
//     apellido: 'Barna'
//   };

//   persona.getNombre.call(persona2);



//FUNCTION CURRYING


function multiplica(a, b){
    return a * b;
  }
  
  var multiplicaPorDos = multiplica.bind(this, 2); //Acá le pasamos a "a" el parametro de a, el this antecedido no es reelevante, pero esto con el fin de bindear el 2 con el "a" para colocarlos de forma fija