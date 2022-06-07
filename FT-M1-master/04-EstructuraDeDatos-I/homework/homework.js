'use strict'

/*
Definir las funciones recursivas nFactorial y nFibonacci.

nFactorial(n) debe retornar el factorial de n sabiendo que, siendo n un número natural, su factorial (representado como n!) es el producto de n por todos los números naturales menores que él y mayores a 0. Ejemplo: 5! = 5 * 4 * 3 * 2 * 1

nFibonacci(n) debe retornar el enésimo número de la secuencia de Fibonacci, tomando al 0 y al 1, respectivamente, como primer y segundo elementos de la misma, y sabiendo que cualquier elemento que se agregue a esta secuencia será el resultado de la suma del último elemento y el anterior.
Ejemplo: nFibonacci(7) retornará 13, ya que 13 es el dígito que está en la posición 7 de la secuencia.

Secuencia:  0, 1, 1, 2, 3, 5, 8, 13, 21, 34, ... 


Como ejercicio adicional y completamente opcional, al terminar de resolver este problema pueden intentar definir funciones que logren los mismos resultados pero de manera iterativa.
*/

function nFactorial(n) {
  
  if(n<0) return -1; //podría generar error
  //0! = 1 && 1! =1
  if(n>0 && n<2) return 1;

  return n*nFactorial(n-1) //el caso base es lo primordial en este tipo de problemas, ya que es impresindible saber hasta donde llegaremos o se nos formará un bucle infinito (creo yo), en este caso el factorial de un numero donde va disminuyendo a medida que hacela operacion, entra el valor ingresado por el uusario, caso sea 5, recurre a las condiciones y se demuestra que puede retornar 5*4! y luegro ingresar 4, pasa las condiciones y luego hace 4*3! y seguido hace todo hasta que llegue a 0 o 1, donde retorna el valor de 1, luego hace la operacion apilada de stuck, y retorna un nuevo valor bajo la operacion que le siguee 

}



function nFibonacci(n) {

  if(n>=0 && n<2) return n; //super clave ya que acá me retornará el caso base que será 1 o 0

  return nFibonacci(n-1) + nFibonacci(n-2)

}

/*
Implementar la clase Queue, sabiendo que es una estructura de tipo FIFO, donde el primer elemento que ingresa es el primero que se quita. Definir los siguientes métodos:
  - enqueue: agrega un valor respetando el orden.
  - dequeue: remueve un valor respetando el orden. Retorna undefined cuando la queue está vacía.
  - size: retorna el tamaño (cantidad de elementos) de la queue.

Pueden utilizar class o función constructora.
*/

function Queue() {
  this.arr = []
}

Queue.prototype.enqueue = function(value){
  this.Queue.push(value)
}
Queue.prototype.dequeue = function(value){
  return this.Queue.shift(value)
}
Queue.prototype.size = function(value){
  return this.Queue.length(value)
}

// No modifiquen nada debajo de esta linea
// --------------------------------

module.exports = {
  Queue,
  nFactorial,
  nFibonacci
};
