//Iteradores en JS
const tecnologias = ['HTML', 'CSS', 'JAVASCRIPT', 'REACT', 'NODEJS']

//ForEach - Accede a cada elemento del array
const arrayForeach = tecnologias.forEach(function (tech) {
    return tech;
})


//map - Crea un nuevo array
//Es mejor usar map en react
const arrayMap = tecnologias.map(function (tech) {
    return tech;
})

console.log(arrayForeach)
console.log(arrayMap);