//Comparacion y valor estricto

const numero1 = 20;
const numero2 = "20"

/* 
 == Comparacion pero no es estricta
 === Comparacion estricta

*/

if(numero1 === Number(numero2)) {
    console.log('Si son iguales');
} else {
    console.log('No son iguales');
}