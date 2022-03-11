//Arreglos y map
const carrito = ['Producto1', 'Producto2', 'Producto3'];
console.log(carrito);

//ARREGLO
const appContenedor = document.querySelector('#app');
let html = '';
carrito.forEach(producto => {
    html += `<li>${producto}</li>`;
});
appContenedor.innerHTML = html;

//MAP
carrito.map(producto => {
    return 'El producto es ' +producto;
});

//Object.keys
const persona = {
    nombre: 'Roberto',
    profesion: 'Desarrollador web',
    edad: 21
}
console.log(Object.keys(persona));