"use strict";

/*
 Implementar la clase BinarySearchTree, definiendo los siguientes métodos recursivos:
  - size: retorna la cantidad total de nodos del árbol
  - insert: agrega un nodo en el lugar correspondiente
  - contains: retorna true o false luego de evaluar si cierto valor existe dentro del árbol
  - depthFirstForEach: recorre el árbol siguiendo el orden depth first (DFS) en cualquiera de sus variantes, según se indique por parámetro ("post-order", "pre-order", o "in-order"). Nota: si no se provee ningún parámetro, hará el recorrido "in-order" por defecto.
  - breadthFirstForEach: recorre el árbol siguiendo el orden breadth first (BFS)

  El ábrol utilizado para hacer los tests se encuentra representado en la imagen bst.png dentro del directorio homework.
*/

function BinarySearchTree(value) {
  this.value = value;
  this.left = null;
  this.right = null;

}

BinarySearchTree.prototype.insert = function(value){
  //comparacion
  //si es mas grande
  if(value > this.value){
    //lo mando para la derecha
    // o mi derecha es null --> lo agrego
    //o tengo algo en la derecha -->aplico recursion
    if(this.right===null){
      //lo agrego
      this.right = new BinarySearchTree(value);
    }else{
      //llamada a recursion
      this.right.insert(value)
    }
  }else{
    //lo mando para la izquierda
    if(this.left===null){
      //lo agrego
      this.left = new BinarySearchTree(value);
    }else{
      //llamada a recursion
      this.left.insert(value)
    }
  }
}
BinarySearchTree.prototype.contains = function(value){
  //que lo encuentre a la primera
  if(value === this.value) return true;
  //comparar valores
  if(value > this.value){
    //me voy a la derecha
    // si no tengo nada a la derecha no esta en mi arbol
    if(this.right === null) return false;
    //recursion
   return this.right.contains(value);
  }else{
    //me voy a la izquierda
    if(this.left === null) return false;
    //recursion
    return this.left.contains(value);
  }

}
BinarySearchTree.prototype.depthFirstForEach = function(cb, order){
  if(order === 'in-order' || !order){
    //si tengo izquierda, voy a la izquierda--desps nodo, desps der
    //equivalente a 
    //if(this.left !== null){thi.left.deffe(cb, order)}

    this.left && this.left.depthFirstForEach(cb, order)
    cb(this.value)
    this.right && this.right.depthFirstForEach(cb, order);
  }else if(order === 'pre-order'){
    cb(this.value)
    this.left && this.left.depthFirstForEach(cb, order)
    
    this.right && this.right.depthFirstForEach(cb, order);

  }else{
    
    this.left && this.left.depthFirstForEach(cb, order)
    
    this.right && this.right.depthFirstForEach(cb, order);
    cb(this.value)
  }
}
BinarySearchTree.prototype.breadthFirstForEach = function(cb, arr){
 if(!arr){
  var arr = []
 }
 
 
  cb(this.value)

  this.left && arr.push(this.left);
  this.right && arr.push(this.right);

  arr.length && arr.shift().breadthFirstForEach(cb,arr) 
}
BinarySearchTree.prototype.size = function(){
  //caso de corte (nodo hoja)
  if(!this.left && !this.right) return 1;
  //caso si tiene un solo hijo
  if(!this.left) return 1 + this.right.size() //este es el caso donde no tiene un nodo izquierdo, entonces va hacia el derecho
  if(!this.right) return 1 + this.left.size()

  // si tiene ambos hijos
  return 1 + this.left.size() + this.right.size()
}

// No modifiquen nada debajo de esta linea
// --------------------------------

module.exports = {
  BinarySearchTree,
};
