// paso por valor
let x = 1
let y = "hola"
let z = null

let a = x
let b = y
let c = z

console.log(x, y, z ,a,b,c) 

 a = 12
 b = 'mundo'
 c = undefined

 // Lo que quiere decir paso por valor es que si modificamos el valor de una variable que fue asignada a otra variable, la variable original no se modifica

// paso por referencia

let frutas = ['manzama']
frutas.push('pera')
console.log(frutas)

// lo que quiere decir paso por referencia es que si modificamos el valor de una variable que fue asignada a otra variable, la variable original si se modifica

let panes = ['🥐']
let copiaPanes = panes
let copiaPanes2 = [...panes]

panes.push('🍞')
console.log( panes, copiaPanes, copiaPanes2)

// lo que sucede con panes y copiaPanes es que ambos apuntan a la misma dirección de memoria, por lo que si modificamos uno, el otro también se modifica