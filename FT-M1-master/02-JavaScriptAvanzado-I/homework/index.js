// //'''se crea contexto de creación'''
// x = 1;  //'''crea variable global no declarada'''
// var a = 5; //'''crea variable global declarada'''
// var b = 10;//'''crea variable global declarada'''
// var c = function(a, b, c) { //'''se crea creation phase y entra los valores 8,9,10'''
//   var x = 10; //'''declaracion de variable global dentro de c'''
//   console.log(x); // 1) 10
//   console.log(a);// 2) 8
//   var f = function(a, b, c) {//'''nuevo creation phase'''
//     b = a; //b-->8
//     console.log(b);// 3) 8
//     b = c;//b-->10
//     var x = 5; 
//   }
//   f(a,b,c); //entra 8, 9, 10
//   console.log(b); //4) 10
// }
// c(8,9,10); //'''se crea contexto de ejecusión donde se activa a la funcion expresion c'''
// console.log(b);// 5) 10
// console.log(x);// 6) 1

// console.log(bar);//1) 1
// console.log(baz); // se daña porque no se ha creado la variable global no declarada
// foo();
// function foo() { console.log('Hola!'); }//3)
// var bar = 1;
// baz = 2;

// var instructor = "Tony";
// if(true) {
//     var instructor = "Franco";
// }
// console.log(instructor); //Tony, error es franco, el if es más imprescindible

// var instructor = "Tony";
// console.log(instructor); //1) Tony
// (function() {
//    if(true) {
//       var instructor = "Franco";
//       console.log(instructor); //2) Franco
//    }
// })();
// console.log(instructor); //3) Tony

// var instructor = "Tony";
// let pm = "Franco";
// if (true) {
//     var instructor = "The Flash";
//     let pm = "Reverse Flash";
//     console.log(instructor);//1) The Flash
//     console.log(pm);//2) Reverse Flash
// }
// console.log(instructor); //3)The Flash
// console.log(pm); //4) Reverse Flash --> error, el pm del marco global es iimprescindible por el let

// function test() {
//     console.log(a); //1) 1
//     console.log(foo()); //2) 2
 
//     var a = 1;//el hoisiting funciona es con las funciones, mas nooo con las variables, por eso aparece indefinido
//     function foo() {
//        return 2;
//     }
//  }
 
//  test();

// var snack = 'Meow Mix';

// function getFood(food) {
//     if (food) {
//         var snack = 'Friskies';
//         return snack;
//     }
//     return snack;
// }

// getFood(false);//retorna Meow Mix, error, no dio así


// var fullname = 'Juan Perez';
// var obj = {
//    fullname: 'Natalia Nerea',
//    prop: {
//       fullname: 'Aurelio De Rosa',
//       getFullname: function() {
//          return this.fullname;
//       }
//    }
// };

// console.log(obj.prop.getFullname()); //1)Aurelio De Rosa

// var test = obj.prop.getFullname; 

// console.log(test()); //2) Aurelio De Rosa, error, se elimino el entorno de ejecusion (creo)


// function printing() {
//     console.log(1);
//     setTimeout(function() { console.log(2); }, 1000);
//     setTimeout(function() { console.log(3); }, 0);
//     console.log(4);
//  }
 
//  printing(); 
 
//  // 1
//  // 4
//  // 3
//  // 2

console.log(bar);//1) 1
console.log(baz);//2) undf acá se daña el codigo por la no creacion de la variable
foo();
function foo() { console.log('Hola!'); }//3)
var bar = 1;
baz = 2;