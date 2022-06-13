"use strict";

/*
Implementar la clase LinkedList, definiendo los siguientes métodos:
  - add: agrega un nuevo nodo al final de la lista;
  - remove: elimina el último nodo de la lista y retorna su valor (tener en cuenta el caso particular de una lista de un solo nodo y de una lista vacía);
  - search: recibe un parámetro y lo busca dentro de la lista, con una particularidad: el parámetro puede ser un valor o un callback. En el primer caso, buscamos un nodo cuyo valor coincida con lo buscado; en el segundo, buscamos un nodo cuyo valor, al ser pasado como parámetro del callback, retorne true. 
  Ejemplo: 
  search(3) busca un nodo cuyo valor sea 3;
  search(isEven), donde isEven es una función que retorna true cuando recibe por parámetro un número par, busca un nodo cuyo valor sea un número par.
  En caso de que la búsqueda no arroje resultados, search debe retornar null.
*/
//es totalmente recomendable ver los test para poder reconocer que se hace 
function LinkedList() {
  this.head = null; 

}

function Node(value) {
  this.value = value;
  this.next = null;
}
/**es de destacar que cada aspecto de acá se realiza siguiendo el paso a paso de los teste */
//creamos los metodos del linkedlist


LinkedList.prototype.add = function(value){
  var newNode = new Node(value);
  var curr = this.head;
  if(!curr){ //en este if preguntamos si la lista esta vacia es decir si this.head es null. El " ! "  antecedido de curr significa si curr === null
    this.head = newNode;
    return // es bueno ademas de necesario colocar el return o sino va a seguir ejecutando codigo sin necesidad
  }
  // si la lista no está vacía entonces:
    while(curr.next){
      curr = curr.next
    }
    curr.next = newNode; // acá precisamente colocamos un nuevo nodo en la ultima cola
} //el prototipe hace que yo acceda a las propiedades de la instancia y pueda crear propios metodos
LinkedList.prototype.remove = function(){
  var curr = this.head;
  //si esta vacía para el caso de que necesite retornar null
  if(!curr){
    return null; //esto es si tiene un solo nodo
  }
  if(!curr.next){//esta es una condicion si nada más tenemos un solo nodo
    var aux = this.head
    this.head = null; // acá desconectamos de la lista
    return aux.value; //con la variable auxiliar podemos hacer lo mismo
  }
  //si tiene mas de un nodo
  //1--2--3--4--null  debo pararme en 3 y preguntar en los dos siguientes si el ultimo es null es decir en curr.next.next
  while(curr.next.next){
    curr = curr.next;
  }
  var aux = curr.next;// acá lo que hacemos es guardar desde el penultimo valor
  curr.next = null;//y convierte despues ese penultimo en null, por lo queel antepenultimo se convierte en el que tiene el null de siguiente
  return aux.value; // y como guardamos anteriormente el valor de ese nodo

  //ahora vamos a sacar o remover el ultimo valor y éste será retornado
}
LinkedList.prototype.search = function(value){
    var curr = this.head;
    //se dividirá el problema en dos problemas chiquitos
    //1. caso) si la lista está vacia no hay ningun solo nodo
    if(!curr) return null; // si curr no tiene head entonces esta null
    //2. lista no vacía

    while(curr){ //mientras exxistaa curr

      //acá viene el uso de typeof que me identifica el tipo de argumento que nos entra
      if(typeof value === "function"){// la funcion me devuelve un booleano
      //si me devuelve true---encontré el valor
      //la debo ejecutar con el valor del nodo
        if(value(curr.value)){ //si ejecuto el argumento entrante, cuando éste es una función, me retornara true sii el argumento de la funcion es igual al valor entrante en el nodo buscado, entonces me retornará igual true o false, si me retorna true, entonces retorno el valor buscado
          return curr.value;
        }
      }
      if(curr.value===value) return value //tambien curr.value
      curr = curr.next;
    }
    return null

}

/*
Implementar la clase HashTable.

Nuetra tabla hash, internamente, consta de un arreglo de buckets (slots, contenedores, o casilleros; es decir, posiciones posibles para almacenar la información), donde guardaremos datos en formato clave-valor (por ejemplo, {instructora: 'Ani'}).
Para este ejercicio, la tabla debe tener 35 buckets (numBuckets = 35). (Luego de haber pasado todos los tests, a modo de ejercicio adicional, pueden modificar un poco la clase para que reciba la cantidad de buckets por parámetro al momento de ser instanciada.)

La clase debe tener los siguientes métodos:
  - hash: función hasheadora que determina en qué bucket se almacenará un dato. Recibe un input alfabético, suma el código numérico de cada caracter del input (investigar el método charCodeAt de los strings) y calcula el módulo de ese número total por la cantidad de buckets; de esta manera determina la posición de la tabla en la que se almacenará el dato.
  - set: recibe el conjunto clave valor (como dos parámetros distintos), hashea la clave invocando al método hash, y almacena todo el conjunto en el bucket correcto.
  - get: recibe una clave por parámetro, y busca el valor que le corresponde en el bucket correcto de la tabla.
  - hasKey: recibe una clave por parámetro y consulta si ya hay algo almacenado en la tabla con esa clave (retorna un booleano).

Ejemplo: supongamos que quiero guardar {instructora: 'Ani'} en la tabla. Primero puedo chequear, con hasKey, si ya hay algo en la tabla con el nombre 'instructora'; luego, invocando set('instructora', 'Ani'), se almacenará el par clave-valor en un bucket específico (determinado al hashear la clave)
*/

function HashTable() {
  
  
  this.numBuckets = 35 //el primer requirement.
  this.buckets = []
}
HashTable.prototype.set = function(key, value) {
  if(typeof key !== "string") throw new TypeError('Keys must be strings')
  var index = this.hash(key) // -->un numero entre 0 y 34
  if(!this.buckets[index]){
    this.buckets[index]={};//se crea el objeto si no lo tenemos
  }
  
  
  this.buckets[index][key] = value //me apropio del key en el hash que obtuvimos mediante el modulo de 35 con el codecharat, para guardarlo en index, y como es un numero determinado, puedo usar buckets y en la posicion index guardo el value.
  //bueno algo muy relevante es el this.bucket[index] como es un objeto con propiedades ya adentro, el key me le añade propiedades, una vez que sale del if si, sii encontramos objetos, en esa misma posicion ya que encontramos el colisiones, crea una nueva key dentro y le añade el valor
}
HashTable.prototype.get = function(key) {
  var index = this.hash(key)
  return this.buckets[index][key];
}
HashTable.prototype.hasKey = function(key) {
  var index = this.hash(key)
  return this.buckets[index].hasOwnProperty(key)
}
HashTable.prototype.hash = function(key) {
  var res = 0;
  for (var i = 0; i < key.length; i++) {
    res = res + key.charCodeAt(i)
  }
  return res % this.numBuckets;
}


// No modifiquen nada debajo de esta linea
// --------------------------------

module.exports = {
  Node,
  LinkedList,
  HashTable,
};
