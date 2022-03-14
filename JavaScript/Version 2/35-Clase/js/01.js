//Template string

const producto = "Tablet de 12 pulgadas";
const precio = 40
const marca = "Orange"

function textoFuncion() {
    return "Este texto viene de la funcion"
}

//No usar esto
console.log( producto + " $" + precio + " Dolares, Marca: " + marca);
//Usar esto
console.log(`${producto} $${precio} Dolares, Marca: ${marca}, ${textoFuncion()}`);
