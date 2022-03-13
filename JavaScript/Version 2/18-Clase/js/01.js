//Array methods
const tecnologias = ['HTML', 'CSS', 'JAVASCRIPT', 'REACT', 'NODEJS']
const numeros = [10, 20, 30]

let nuevoArray

//filter
nuevoArray = tecnologias.filter( tech => tech !== 'REACT');

//Includes regresa un boolean de si existe o no el dato
const resultado = tecnologias.includes('REACT')

//some regresa un boolean si al menos 1 valor cumple la condicion que se indica
const resultado2 = numeros.some( numero => numero > 15)

//Find devuelve el primer elemento que cumpla la condicion pedida
const resultado3 = numeros.find( numero => numero > 15)

//Every devuelve un boolean si todos los elementos cumplen la condicion
const resultado4 = numeros.every( numero => numero >= 10)

//reduce este va acumular cantidades
const resultado5 = numeros.reduce( (total, numero) => numero+total, 100)

//Filter - Crea un nuevo array en base a una condicion
//const resultado6 = tecnologias.filter( tech => tech ==='NODEJS')
const resultado6 = numeros.filter( numero => numero > 15)

//--------------------------------------------------------------------------------------

tecnologias.forEach( (tech, index) => console.log(index, tech));

const arrayMap = tecnologias.map( tech => tech)

console.log(resultado);
console.log(resultado2);
console.log(resultado3);
console.log(resultado4)
console.log(resultado5)
console.log(resultado6)
console.log(arrayMap);
