//arrow function o funcion flecha
// let viajando = function(destino){
//     return `Viajando a la ciudad de: ${destino}`;
// }

let viajando = destino => { //si se toma un parametro se puede quedar sin parentesis, pero si hay mas de 1 parametro se ponen entre parentesis
    return `Viajando a la ciudad de: ${destino}`;
}

let viaje;
viaje = viajando('Paris');
viaje = viajando('Londres');
viaje = viajando('Barcelona');

console.log(viaje);