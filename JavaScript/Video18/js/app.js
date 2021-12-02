//Promises con ajax
const descargarUsuarios = cantidad => new Promise((resolve, reject) => {
    const api = `https://randomuser.me/api/?results=${cantidad}&nat=us`;
    //llamado ajax
    const xhr = new XMLHttpRequest();
    //abrir la conexion
    xhr.open('get', api, true);
    //on load
    xhr.onload = () => {
        if(xhr.status === 200) {
            resolve(JSON.parse(xhr.responseText).results);
        } else {
            reject(Error(xhr.statusText));
        }
    }
    //enviar
    xhr.send()
})

console.log(descargarUsuarios(20));





//2020
async function getUserAsync(cantidadUsuarios) {
    try {
      let response = await fetch(
        `https://randomuser.me/api/?results=${cantidadUsuarios}&nat=us`
      );
      let data = await response.json();
      return data;
    } catch (error) {
      return "Ocurrio el siguiente error: " + error;
    }
  }
   
  getUserAsync(10).then(data => console.log(data));