//Objetos - Unir 2 objetos

const producto = {
    nombre: "Tablet",
    precio: 300,
    disponible: true
}

const cliente = {
    nombre: "Roberto",
    premium: true
}

// const nuevoObjeto = Object.assign(producto, cliente) no hacerlo de esta forma, porque los datos nombre se pierden
//Normalmente el spread operator, no modifica los datos, solamente hay que parametrizar los objetos
const nuevoObjeto2 = { 
    producto: {...producto}, 
    cliente: {...cliente} 
}
console.log(nuevoObjeto2)
