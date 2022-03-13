//Operador terniario
const autenticado = true;

autenticado ? console.log('Usuario autenticado') : console.log('Usuario no autenticado');
//Nombre de la funcion o parametro a pasar, si el dato es verdadero o solicitado, el dato si es erroneo

const saldo = 600
const pagar = 650
const tarjeta = false

saldo > pagar ? console.log('Puedes pagar con tu saldo') : tarjeta ?
    console.log('Puedes pagar con tarjeta') : console.log('NO puedes pagar');