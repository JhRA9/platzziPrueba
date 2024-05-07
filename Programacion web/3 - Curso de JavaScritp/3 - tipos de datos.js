// Solo hay 10 tipos de datos en JavaScript, los cuales se dividen en dos categorías: primitivos y complejos.

// Los primivitos son los más básicos y no son objetos. Son inmutables, lo que significa que no pueden ser alterados. Los tipos de datos primitivos son:
 
// 1 )String: Cadenas de texto que se pueden definir con comillas simples o dobles.
 String: "Hola Mundo"

// 2) Number: Números enteros o decimales. También incluye valores especiales como Infinity, -Infinity y NaN (Not a Number).
 Number: 100

// 3) Boolean: Valores que pueden ser verdaderos o falsos. Se utilizan para tomar decisiones.
Boolean: true

// 4) Undefined: Valor que se asigna a una variable que no ha sido inicializada. También es el valor de retorno de una función que no devuelve nada.
undefined

// 5) Null: Valor que se asigna a una variable para indicar que no tiene valor.
null

// 6) Symbol: Valor único que no es igual a ningún otro valor. Se utiliza para crear identificadores únicos para objetos.
Symbol('a')
// 7) bigint: Números enteros de longitud arbitraria. Se crean añadiendo n al final de un número entero. Por ejemplo, 10n. 
BigInt(10)

// Los tipos de datos complejos son objetos y se utilizan para almacenar colecciones de datos y más complejos. Los tipos de datos complejos son:

// 1) Object: Colección de datos y/o funcionalidades. Se pueden crear con llaves {} o con la palabra clave new. 
Object: {nombre: "Juan", edad: 30}

// 2) Function: Bloque de código que se puede reutilizar. Se pueden crear con la palabra clave function o con una función flecha =>.
function sumar(a, b) {
  return a + b;
}

// 3) Array: Colección ordenada de datos. Se pueden crear con corchetes [] o con la palabra clave new. 
Array: [1, 2, 3]