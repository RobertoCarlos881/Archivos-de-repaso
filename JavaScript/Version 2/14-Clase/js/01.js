//funciones que retornan valores

function sumar(numero = 0, numero2 = 0) {
    return [numero + numero2, "Hola mundo"]
}

const [resultado, holaMundo] = sumar(20, 30)
console.log(resultado)
console.log(holaMundo);

function sumar2(numero = 0, numero2 = 0) {
    return {
        resultado2: numero + numero2, 
        mensaje: "Hola mundo"
    }
}

const {resultado2, mensaje} = sumar2(50, 80)
console.log(resultado2)
console.log(mensaje)