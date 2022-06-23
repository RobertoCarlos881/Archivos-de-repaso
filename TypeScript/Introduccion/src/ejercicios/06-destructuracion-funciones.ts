//Destructuracion de funciones
export interface Producto {
    desc: string;
    precio: number;
}
const telefono: Producto = {
    desc: 'Nokia A1',
    precio: 150
}

const tableta: Producto = {
    desc: 'Ipad A14',
    precio: 350
}

export function calculaISV(productos: Producto[]): [number, number] {
    let total = 0;
    productos.forEach(({precio}) => {
        //En esta parte se puede definir asi tambien (producto), pero esto se vuelve algo tedioso para acceder al dato
        //por que el dato quedaria asi total += producto.precio
        total += precio;
    })
    return [total, total*0.15];
}

const articulos = [telefono, tableta];

const [total, isv] = calculaISV(articulos);

console.log('Total:', total);
console.log('ISV:', isv);