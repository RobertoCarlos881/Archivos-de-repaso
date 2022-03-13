//Operaciones en los arreglos

const tecnologias = ['HTML', 'CSS', 'JAVASCRIPT', 'REACT', 'NODEJS']

//Añadir elementos al array
//Viejo o no recomendable con react
//tecnologias.unshift('NEXTJS') //añade al principio del array
//tecnologias.push('GRAPHQL') //añade al final del array
//Nuevo o mejor
const nuevoArreglo = [ "NEXTJS", ...tecnologias, 'GRAPHQL' ] 

//Eliminar elementos al array
//Viejo o no recomendable con react
//tecnologias.pop() //elimina del final
//tecnologias.shift() //primer elemento del arreglo
//tecnologias.splice(2, 1) //El primer elemento es para eliminar el elemento en la posicion
//el segundo numero es el que dice cuantos elementos debe de eleminar a partir de este

const nuevoArray = tecnologias.filter( function (tech) {
    //return tech !== 'HTML'; //traer todos menos html
    return tech === 'REACT'; //traer solo a react
})

//Editar elementos del array
//Viejo o no recomendable con react
//tecnologias[0] = 'php'
const nuevoArray2 = tecnologias.map( function (tech) {
    if(tech === "HTML"){
        return "GRAPHQL"
    } else {
        return tech;
    }
})


//Nota: porque no es recomendable lo que se dice que no es recomendable, mas que nada porque se alteran los datos.
console.table(tecnologias)
console.table(nuevoArreglo)
console.log(nuevoArray);
console.log(nuevoArray2);