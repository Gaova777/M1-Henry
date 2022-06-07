// //Recursividad
// function factorial(x)
// {
// if (x > -1 && x < 2) return 1; // Cuando -1 < x < 2
// // devolvemos 1 puesto que 0! = 1 y 1! = 1
// else if (x < 0) return 0; // Error no existe factorial de números negativos
// return x * factorial(x - 1); // Si x >= 2 devolvemos el producto de x por el factorial de x - 1
// }// que sucede acá, bueno, cuando ingresamos un valor a la funcion, partimos de que al cumplir con cada una de las condiciones, en factorial (x-1) se van guardando cada uno de los valores despues de retornar 1, apenas devuelve 1, comienza a realizar el factorial de cada uno de los numeros que se iban realizando, por lo que, va realizandose la funcion hasta llegar a la primer condicion que si es menor a 2 o mayor a -1, al momento retorna al ultimo valor de un factorial cualquiera que siempre será 1, luego va ir haciendo la operacion hasta alcanzar el valor inicial ingresado.

// //la funcion en su ultimo retorno, va acumulando las operaciones hasta que llega a 1, se va acumulando operaciones hasta que la función se convierta a un valor y deje de ser expression, por lo que se van apilando operaciones. en realidad son tareas pendientes que se van acumulando

function decimalToBinary(num){
    if(num==1) return '1';
    return decimalToBinary(Math.floor(num/2)) + (num%2)

}


// por ejemplo

// entonces se guarda la funcion antecesora y se hace la operacion empezando por el maximo valor de num


// 6. decimalToBinary(1) = '1' /**acá se cumple la condicion por lo tanto me retorna 1 la funcion se vuelve un valor*/
// 5. decimalToBinary(2) = '1' + (2%2) --> '10' /**vemos como guarda el valor anterior y accede a hacer la operacion */
// 4. decimalToBinary(5)= '10' + (5%2) --> '101'
// 3. decimalToBinary(10) = '101' + (10%2) -->1010
// 2. decimalToBinary(20)='10100'
// 1. decimalToBinary(40)='101000'