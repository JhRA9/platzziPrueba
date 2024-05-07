// Tipo de dato complejo - mutable
let usuario = { nombre: 'Juan', edad: 30 }
usuario.edad = 31
console.log(usuario); // { nombre: 'Juan', edad: 31 }

// lo que sucede en la línea 3 es que se está modificando el valor de la propiedad edad del objeto usuario. Esto es posible porque los tipos de datos complejos son mutables, lo que significa que pueden ser alterados. En este caso, la propiedad edad del objeto usuario se incrementa en 1.

let frutas = ['manzana', 'pera', 'uva']
frutas[0] = 'fresa'
console.log(frutas) // [ 'fresa', 'pera', 'uva' ]

function cambiarNombre (objeto) {
    objeto.nombre = 'Nuevo nombre'
}
let persona = { nombre: 'Juan' }
cambiarNombre(persona)
console.log((persona))

// Lo que sucede en la línea 13 es que se está modificando el valor de la propiedad nombre del objeto persona. Esto es posible porque los tipos de datos complejos son mutables, lo que significa que pueden ser alterados. En este caso, la propiedad nombre del objeto persona se cambia por 'Nuevo nombre'.