// ipo de dato complejo paso por referencia
let frutas = {
    naranja: '🍊',
}

let vegetales = frutas

vegetales.naranja = '🥦'
console.log(frutas, vegetales)

let ropa = {
    blusa : '👚'
}

ropa.pantalon = '👖'
console.log(ropa)

// lo que sucede con ropa es que podemos agregar propiedades a la variable ropa, ya que es un objeto, y los objetos son de tipo de dato complejo, por lo que se pasan por referencia