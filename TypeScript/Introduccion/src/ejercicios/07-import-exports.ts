import { Producto } from "./06-destructuracion-funciones";
import { calculaISV } from "./06-destructuracion-funciones";

const carritoCompras: Producto[] = [
    {
        desc: 'Telefono 1',
        precio: 100
    },
    {
        desc: 'Telefono 2',
        precio: 800
    }
];

console.log(carritoCompras);

const [total, isv] = calculaISV(carritoCompras);

console.log('Total:', total);
console.log('ISV', isv);
