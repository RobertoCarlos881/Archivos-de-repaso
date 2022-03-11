//Sprear operator
let lenguajes = ['Javascript', 'Python', 'Php'];
let frameworks = ['ReactJS', 'Django', 'Laravel'];

//Unir arreglos en 1 solo vieja
let combinacion = lenguajes.concat(frameworks);
console.log(combinacion);

//unir arreglos en 1 solo nueva
let combinacion1 = [...lenguajes, ...frameworks];
console.log(combinacion1);

//Sin sprear
//aqui hay un problema a la hora de imprimir lengfuajes se voltea la cadena
let [ultimo] = lenguajes.reverse();
console.log(lenguajes);
console.log(ultimo);

//con sprear
//Aqui se mantiene nuestra cadena igual, y podemos obtener el ultimo valor
let [ultimo] = [...lenguajes].reverse();
console.log(lenguajes);
console.log(ultimo);


//Otro uso de sprear
function suma(a, b, c){
    console.log(a+b+c);
}
const numeros = [1, 2, 3];
suma(...numeros);
