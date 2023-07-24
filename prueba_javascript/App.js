// ----------- JavaScript
//-- Variables 
// no es una buena forma de declaracion 
var x;
var z= 1;
// Forma correcta de declaracion de variables
let a;
let b = 1;
// Crea constantes es decir se deben inicializar
const n =2

/* -- Hosting-- elevacion de funciones del motor de js
 Podemos usar en una llamada de funcniones o clases antes de la declaracion del metodo o la variable
 con las variables debemos declarar antes de la declaracion -- var: undefined - let: error.
*/
let nombre = 'Prueba hosting'
Saludar(nombre)
function Saludar(nombre){
    console.log(nombre);
}
 
/*
-- Reglas para nombrar variables:
1.solo pueden contener valores alfanumericos, no se aceptan guiones medios como nombre-completo
2. no pueden comenzar por un digito
3. no contiene espacios
4. no pueden ser palabras reservadas
Convenciones
* camelCasing: nombreUsuario
* PascalCasing: NombreUsuario
* snake_casing: nombre_usuario
* SCREAM_SNAKE_CASING: NOMBRE_USUARIO --- Se deben usar mas para la definicion de constantes
*/

/*
-- Block scope
global scope - function scope
si las variables estan declaradas dentro de {} nos se pueden acceder desde fuera
*/
let alcanceGlobal = '1. Scope Global'
{
    let alcanceBloque = '2. Block Scope'
    console.log(alcanceBloque)
}
// console.log(alcanceBloque) -- nos arroja un error en el compilado

function PruebaScope(){
    let nombreScope = '3. Function Scope'
    console.log(nombreScope +' - '+  alcanceGlobal)
}
PruebaScope()
// console.log(nombreScope) -- Error de no definido
// NOTA: Los objetos y funciones tambien son variables

/*
---------------- Tipos de datos
------ Primitivos-. es la forma mas simple de un dato, no tienen propiedades o metodos asociados a ellos
- String: Cadenas de texto
- udefined: indefinidos
- number: integer - float
- begint: para enteros grandes
- boolean: para booleanos
- null: datos nulos
- Symbol: para simbolos
------ Objeto-. es un valor compuesto de primitivas, un objeto puede tener propiedades y metodos adjuntos, tambien son conocidos como referencias
- Arrays: es una coleccion ordenada de datos
- Functions: partes de codigo que se ejecutan cuando la funcion es llamada
- Objects: es un conjunto de propiedades y metodos

typeof: identificar que tipo de dato es
*/

// Symbol
const simbolo = Symbol('Simbolo_1') // se crea un nuevo simbolo sin el new
console.log(simbolo)
console.log("Para saber que tipo de dato es (typeof): "+ typeof simbolo)
// Generar una key con Symbol
key = Symbol.keyFor(Symbol.for('SymbolKey'))

// Prototipo: una forma de almacenar sub funciones en js
const prototipo= new Object({
    nombre: 'Prototipo',
    edad: 25,
    saludo: function(){
        console.log('mensaje dentro de objeto')
    }
})
Object.prototype.dimeAlgo = function(){
    console.log('Algo')
}

const newProto = Object.create(prototipo)


// Conversion implicita de datos

console.log('("3" - "1") = ' + ("3" - "1"));
console.log('("3" - 1) = ' + ("3" - 1));
console.log('("3" * "2") = ' + ("3" * "2"));
console.log('("3" % "2") = ' + ("3" % "2"));
console.log('("3" + null) = ' + ("3" + null));

// Conversiones de valores
// String: String() - toString()
let numero = 200798
console.log("Con String(): "+String(numero))
console.log("Con toString(): "+numero.toString())
// Number: Number()
let texto = "72919698" // Si se trata de pasar los siguientes casos dara: " " = 0 - "Texto normal" = NaN
console.log("Con Number():"+Number(texto))

