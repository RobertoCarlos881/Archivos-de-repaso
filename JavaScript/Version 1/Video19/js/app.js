//clases
class Tarea {
    constructor() {
        this.nombre = nombre,
        this.prioridad = prioridad
    }
    mostrar(){
        console.log(`${this.nombre} tiene una prioridad de ${this.prioridad}`);
    }
}

let tarea1 = new Tarea('Aprender javascript', 'Alta');
let tarea2 = new Tarea('Aprender web', 'Alta');

console.log(tarea1);
console.log(tarea2);