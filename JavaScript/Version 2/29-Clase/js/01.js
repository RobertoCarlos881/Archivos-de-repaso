//Eventos del DOM - submit
const formulario = document.querySelector('#formulario')
formulario.addEventListener('submit', (e) => {
    e.preventDefault();
    //preventDefault lo puedes usar para validar y despues mandar datos
    const nombre = document.querySelector('.nombre').value
    const password = document.querySelector('.password').value
    if(nombre === "" || password === "") {
        console.log("Todos los campos son obligatorios");
    } else {
        console.log("Todo bien, continua");
    }
    console.log('Enviaste un formulario');
})
