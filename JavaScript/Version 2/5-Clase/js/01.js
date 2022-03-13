//Objetos manipulacion
const producto = {
    nombre: "Tablet",
    precio: 300,
    disponible: true
}

//Se pueden congelar las propiedades y que no se les pueda hacer ningun cambio
//Object.freeze(producto)
//Con seal solo se pueden modificar las propiedades existentes
//Object.seal(producto)

//Editar un objeto
producto.nombre = "Monitor Curvo"
//Crear un valor de un objeto
producto.imagen = "imagen.jpg"
//Eliminar un objeto
delete producto.disponible
//Se pueden borrar datos que no existan en el objeto

console.table(producto)