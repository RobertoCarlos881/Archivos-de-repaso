//Eventos del DOM - inputs
const inputNombre = document.querySelector('.nombre')
inputNombre.addEventListener('input', function (e) {
    //console.log("Hola soy input");
    //console.log(inputNombre.value); no es la forma adecuada
    console.log(e.target.value);
})
/*
    input - es muy comun porque captura todos los eventos
    keydown - se activa cuando pulsan una tecla
    keyup - se activa cuando levantas la tecla o en correcion cuando se deja de presionar
*/

const inputPassword = document.querySelector('.password')
inputPassword.addEventListener('input', funcionPassword)

function funcionPassword(e) {
    inputPassword.type = 'text';

    setTimeout(() => {
        inputPassword.type = 'password';
    }, 1000);
}