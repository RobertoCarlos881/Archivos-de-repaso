//Or y and
const saldo = 600
const pagar = 500
const tarjeta = true

/*
    || si se cumple una ya paso
    && se tienen que cumplir las 2 para pasar
*/

if(saldo > pagar ||/*&&*/ tarjeta) {
    console.log('Puedes pagar con tu saldo');
} else {
    console.log('Estas pobre');
}
