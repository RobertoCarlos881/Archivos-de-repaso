//Arrow functionc con array methods

const tecnologias = ['HTML', 'CSS', 'JAVASCRIPT', 'REACT', 'NODEJS']

const nuevoArray = tecnologias.filter( tech => {
    return tech !== 'HTML'; //traer todos menos html
    //return tech === 'REACT'; //traer solo a react
})

const nuevoArray2 = tecnologias.map( tech => {
    if(tech === "HTML"){
        return "GRAPHQL"
    } else {
        return tech;
    }
})

console.log(nuevoArray);
console.log(nuevoArray2);
