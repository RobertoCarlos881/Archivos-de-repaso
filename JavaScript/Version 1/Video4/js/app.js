//Template string
const nombre = 'Roberto';
const trabajo = 'Desarrollador web'

//concatenar en javascript antes
console.log('Nombre: ' +nombre+ 'Trabajo: ' +trabajo);

//Concatenar ahora
console.log(`Nombre: ${nombre}, Trabajo: ${trabajo}`);

//concatenar con multiples lineas
const contenedorApp = document.querySelector('#app');
// let html = '<ul>' +
//                 '<li> Nombre: ' + nombre + '</li>' +
//                 '<li> Trabajo: ' + trabajo + '</li>' +
//             '</ul>';
let html = `
        <ul>
            <li>Nombre: ${nombre} </li>
            <li>Trabajo: ${trabajo} </li>
        </ul>
    `
contenedorApp.innerHTML = html;