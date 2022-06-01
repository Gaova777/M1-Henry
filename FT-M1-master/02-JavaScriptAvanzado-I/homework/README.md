
# Homework JavaScript Avanzado I

## Scope & Hoisting

Determiná que será impreso en la consola, sin ejecutar el código.

> Investiga cuál es la diferencia entre declarar una variable con `var` y directamente asignarle un valor.
> R/ la diferncia entre usar `var` y asignar  directamente es, que al asignar directamente un valor a una variable, ésta se crea a nivel global y no es declarada, lo que no es controlable a la hora de hacer uso del contexto de ejecución, a diferencia del usdo de `var`, donde al declararse a nivel global en el contexto de ejecución, puedes controlarla y saber qué variable es la que será usada según la funcion.
```javascript
'''se crea contexto de creación'''
x = 1;  '''crea variable global no declarada'''
var a = 5; '''crea variable global declarada'''
var b = 10;'''crea variable global declarada'''
var c = function(a, b, c) { '''se crea creation phase y entra los valores 8,9,10'''
  var x = 10; '''declaracion de variable global dentro de c'''
  console.log(x); // 1) 10
  console.log(a);// 2) 8
  var f = function(a, b, c) {'''nuevo creation phase ojo despues de ejecutarse, se elimina el contexto de ejecusion '''
    b = a; //b-->8
    console.log(b);// 3) 8
    b = c;//b-->10
    var x = 5; 
  }
  f(a,b,c); //entra 8, 9, 10
  console.log(b); //4) 10 error...no es 10, es 9 ya que los valores cambiados solo se quedan en el contexto de ejecusión  y se queda con el valor de afuera
}
c(8,9,10); '''se crea contexto de ejecusión donde se activa a la funcion expresion c'''
console.log(b);// 5) 10
console.log(x);// 6) 1
```

```javascript
console.log(bar);//1) 1, error, me aparece indefinido, ya que en el creation context sea crea            la        variable, pero se establece como indefinido, y es lo que aparece en el console
console.log(baz);//2) undf acá se daña el codigo por la no creacion de la variable
foo();
function foo() { console.log('Hola!'); }//3)
var bar = 1;
baz = 2;
```

```javascript
var instructor = "Tony";
if(true) {
    var instructor = "Franco";
}
console.log(instructor); //Tony-->equivocado, es franco, una vez que entra al contexto de ejecución, en la memoria la var instructor se recrea para llamarse "Franco", lo que sucede es que como siempre es true el if entonces va a generar nueva variable directamente en el contexto de ejecución
```

```javascript
var instructor = "Tony";
console.log(instructor); //1) Tony
(function() {
   if(true) {
      var instructor = "Franco";
      console.log(instructor); //2) Franco
   }
})();
console.log(instructor); //3) Tony, debido a que el contexto de ejecución de la funcion se elimino  por lo que queda el contexto de ejecución global
```

```javascript
var instructor = "Tony";
let pm = "Franco";
if (true) {
    var instructor = "The Flash";
    let pm = "Reverse Flash";
    console.log(instructor);//1) The Flash
    console.log(pm);//2) Reverse Flash
}
console.log(instructor); //3)The Flash
console.log(pm); //4)  Reverse Flash --> error, el pm del marco global es iimprescindible por el let, pero es porque el let anterior se elimino ya que nada mas se desempeñaba en un rol interno o dentro de las llavaes
```
### Coerción de Datos

¿Cuál crees que será el resultado de la ejecución de estas operaciones?:

```javascript
6 / "3" // 2, ya que el 3, js lo convierte en numero, bueno
"2" * "3" //concatena, porque son strings, error, los multiplica debido a que son numeros strings y js entiende eso, por lo tanto ejecuta la operación o como hay una multiplicación "*" convierte los strings en numeros
4 + 5 + "px" //hace la operacioón y concatena a "px"
"$" + 4 + 5//concaqueta y luego hace la operacion, error, los concateno todos, debido a que los strings tienen mas peso entonces la operacion de izquier a derecha es, pesos + 4 es unirlos "$4" y aese nuevo strsings le adiciona el 5 "$45"
"4" - 2//hace la operacion, covirtiendo el string en numero
"4px" - 2 //no hace nada, sale equivocado, sale NaN (Not a Number)
7 / 0// se reconoce como infinito
{}[0] // sale nulo, ya que  hay objeto nulo, salio undf, casi, maaaas bien, lo de las llaves es como cuando se encierra el codigo entre llaves, noo necesariamente es objeto, y como noo hay nada en las llaves como codigo noo es relevante y pasa al arreglo que se encuentra al lado, ahí hay un 0 por lo que crea un arreglo random de 0  
parseInt("09") //parseInt, convierte los numeros que entran en letra a entero
5 && 2 //error, me salio 2, el operador && me verifica el primero, si es truee noo mira el siguiente valor sino que asume que es truee, por ende me muestra el segundo valor, lo que es el uno, es el otro
2 && 5//false--> error, me salio 5 por lo mismo de arriba
5 || 0//true--> me salio 5, porque el cero es falso
0 || 5//true--> lo mismo de arriba
[3]+[3]-[10]//sale 23, porque la primer suma es de strings y nos da "33" y luego sigue una resta, dicha resta es solo para numeros, por lo que convierte ambos valores el "33" y el [10] en numeros, y por ende nos da 23, vale aclarar, la suma si esta definida para strings y la resta solo para numeros, por eso hace lo que haace
3>2>1//false--> 3>2 = verdadero, pero verdadero>1 es falso
[] == ![] //undf, error, me salio true, noshe --->acá lo que sucede con el simplee igual es forzar a que un lado sea igual que el otro, por eso 4 == "4" sale truee, por lo que es bueno usar el triple igual en estos casos
```

> Si te quedó alguna duda repasá con [este artículo](http://javascript.info/tutorial/object-conversion).


### Hoisting

¿Cuál es el output o salida en consola luego de ejecutar este código? Explicar por qué:

```javascript
function test() {
   console.log(a); //1) 1
   console.log(foo()); //2) 2

   var a = 1;//el hoisiting lo que hace es colocar las variabless en primer lugar, luego les abre un espacio en memoria que es indefinido (creation phase) y por lo tanto aparece undf y prosigue con la funcion
   function foo() {
      return 2;
   }
}

test();
```

Y el de este código? :

```javascript
var snack = 'Meow Mix';

function getFood(food) {
    if (food) {
        var snack = 'Friskies';
        return snack;
    }
    return snack;
}

getFood(false); //retorna Meow Mix, error, no me retorno nada, me retorna undf ya que esta dentro del contexto de ejecución de getFood, ahí me declara una variable en memoria snack pero noo se le asigna un valor debido a la creation phase. y si se coloca let dentro del if, el snack del return le tocaría ir al contexto padre y coger ese valor
```


### This

¿Cuál es el output o salida en consola luego de ejecutar esté código? Explicar por qué:

```javascript
var fullname = 'Juan Perez';
var obj = {
   fullname: 'Natalia Nerea',
   prop: {
      fullname: 'Aurelio De Rosa',
      getFullname: function() {
         return this.fullname;
      }
   }
};

console.log(obj.prop.getFullname()); //1)Aurelio De Rosa

var test = obj.prop.getFullname; 
      //     function() {
      //    return this.fullname;
      // }

//algo muy interesante acá, asignamos una funcion en la direccion que hacemos referencia a la variable test...acá sucede que en el this global se guarda en el navegador lo que haay en el entorno global, por ende se puede apropiar el fullname del global haciendo uso de la funcion.


console.log(test()); //2) Aurelio De Rosa, error, se elimino el entorno de ejecusion (creo)
```

### Event loop

Considerando el siguiente código, ¿Cuál sería el orden en el que se muestra por consola? ¿Por qué?

```javascript
function printing() {
   console.log(1);
   setTimeout(function() { console.log(2); }, 1000);
   setTimeout(function() { console.log(3); }, 0);
   console.log(4);
}

printing(); 

// 1
// 4
// 3
// 2
```
