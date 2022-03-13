//Objetos
const nombre = "Tablet";
const precio = 300;
const disponible = true

const producto = {
    Nombre: "Tablet",
    Precio: 300,
    Disponible: true
}

console.table(producto)
//Destructurar objetos
console.log(producto.Nombre)
//Otra forma de destructuring
const { Nombre } = producto
console.log(Nombre)

//Object literal enhacement
const autenticado = true;
const user = "Roberto";
const nuevoObjeto = {
    autenticado,
    user
}
console.table(nuevoObjeto)