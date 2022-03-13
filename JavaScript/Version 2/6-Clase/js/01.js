//Objetos - Destructuring con 2 o mas objetos

const producto = {
    nombre: "Tablet",
    precio: 300,
    disponible: true
}

const cliente = {
    nombre: "Roberto",
    premium: true
}

//tener cuidado cuando se destructura un objeto ya que puede tener nombres iguales y pueden causar conflictos,
//satisfactoriamete se puede parametrizar el dato como se observa en el segundo const
const { nombre, precio, disponible } = producto
const { nombre: nombreCliente, premium } = cliente

console.log(nombre, precio, disponible)
console.log(nombreCliente, premium)