//Fetch API

const url = "https://jsonplaceholder.typicode.com/comments";

fetch(url)
    .then( respuesta => respuesta.json())
    .then( resultado => console.log(resultado))