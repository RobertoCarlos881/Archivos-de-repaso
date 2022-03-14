//Selectores del DOM

//querySelector nos trae 1 o 2 elementos
//querySelectorAll nos trae todos los elementos
const heading = document.querySelector('.heading')

//se puede acceder a varias propiedades de este mismo si es un objeto
console.log(heading)
console.log(heading.textContent);
console.log(heading.tagName);
console.log(heading.classList);
console.log(heading.id);

//esto de aqui solo nos va a traer el elemento a, para traer todo veremos el querySelectorAll
const enlaces = document.querySelector('.navegacion a')

console.log(enlaces);