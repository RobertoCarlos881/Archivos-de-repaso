//Estructuras y tipos de datos
//Son varios pero algunos de los mas importantes son:
//Object, null, undefined, number, function, symbol, big int, boolean, string

//Undefined
let cliente

console.log(cliente);
console.log(typeof cliente);

//Boolean
const descuento = false

console.log(descuento);
console.log(typeof descuento)

//Number
const numero1 = 20.20;
const numero2 = 30;
const numero3 = -100;

console.log(typeof numero1);
console.log(typeof numero2);
console.log(typeof numero3);

//String
const alumno = "Roberto"

console.log(alumno);
console.log(typeof alumno);

//BigInt
//Esto nos seguira sacando que es de tipo number
const numeroGrande = 6871687168418971684464348671786684;
//Para hacerlo Bigint se tiene que parsear el dato
const numeroGrande2 = BigInt(6871687168418971684464348671786684);
//Cabe aclarar que si tratas de sumar un number con un bigint te va a marcar error, porque son tipo de datos diferentes
//En ese caso se aconseja parsear alguno de los 2 datos preferentemente el bigint

//Nota el parseo de datos en javascript, tambien se puede llamar coersion o conversion

console.log(numeroGrande2);
console.log(typeof numeroGrande2);

//Symbol
//Los symbol son diferentes y unicos
const primerSymbol = Symbol(30)
const segundoSymbol = Symbol(30)

console.log(primerSymbol === segundoSymbol)

//null
const nulo = null
console.log(typeof nulo);