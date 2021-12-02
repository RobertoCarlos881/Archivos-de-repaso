//Herencia de clases
class Tarea {
    constructor() {
        this.nombre = nombre,
        this.prioridad = prioridad
    }
    mostrar(){
        console.log(`${this.nombre} tiene una prioridad de ${this.prioridad}`);
    }
}

class Compraspendientes extends Tarea {
    constructor(nombre, prioridad, cantidad) {
        super(nombre, prioridad);
        this.cantidad = cantidad;
    }
    mostrar(){
        return 'Hola';
    }
}

let tarea1 = new Tarea('Aprender javascript', 'Alta');
let tarea2 = new Tarea('Aprender web', 'Alta');

console.log(tarea1);
console.log(tarea2);

let compra1 = new Compraspendientes('Jabon', 'Urgente', 3);
console.log(compra1);