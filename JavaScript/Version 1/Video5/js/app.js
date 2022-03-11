//Creando una funcion

//Function declaration
//En este tipo de funciones puedes iniciar la funcion antes o despues de la misma, ya que primero
//va a checar cuantas funciones existen para despues correrlas
function saludar(nombre) {
    console.log('Bienvenido' + nombre);
}
saludar('Roberto');
saludar('Jimena');
saludar('Miguel');

//function expression
//En este tipo de funciones si importa que la funcion se inicie despues de la misma ya que te va a marcar error
const cliente = function(nombreCliente) {
    console.log('Mostrando datos del cliente: ' + nombreCliente);
}
cliente('Roberto');