//Metodos en arreglos
const personas = [
    {nombre: 'Roberto', edad: 21, aprendiendo: 'Javascript'},
    {nombre: 'Jimena', edad: 20, aprendiendo: 'Quimica'},
    {nombre: 'Miguel', edad: 22, aprendiendo: 'Java'},
    {nombre: 'Jose', edad: 23, aprendiendo: 'Python'}
]

console.log(personas);

//Mayores de 21 años
const mayores = personas.filter(persona => {
    return persona.edad > 21;
})
console.log(mayores);

//Que aprende jose y su edad
const jose = personas.find(personas => {
    return persona.nombre === 'Jose';
})
console.log(jose);

//
let total = personas.reduce((edadtotal, persona) => {
    return edadtotal + persona.edad;
}, 0);
console.log(total/4);