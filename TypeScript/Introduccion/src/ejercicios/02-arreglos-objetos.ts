/*
    ===== Código de TypeScript =====
*/

let habilidades: (boolean | string | number)[] = ['Bash', 'Counter', 'Healing', 100, true];
//cuando se definen varios tipos de datos, se tiene que poner al lado unos corchetes, para decirle que es un arreglo de varios tipos
//habilidades.push(1)

//Objeto o json
interface Personaje {
    nombre: string;
    hp: number;
    habilidades: string[];
    puebloNatal?: string; //el signo de pregunta significa que no es opcional
}
//con el interface podemos definir nuestro objeto
const personaje: Personaje = {
    nombre: 'Strider',
    hp: 100,
    habilidades: ['Bash', 'Counter', 'Healing']
};

personaje.puebloNatal = 'Pueblo paleta';

console.table( personaje ) //para que inprima en modo de tabla, debe de tener espacios