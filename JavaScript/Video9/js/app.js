//Object constructor
function Tarea(nombre, urgencia){
    this.nombre = nombre;
    this.urgencia = urgencia;
}
const tarea1 = new Tarea('Aprender javascript y react', 'Urgente');
const tarea2 = new Tarea('Dormir', 'Puede esperar');
const tarea3 = new Tarea('Hacerte menso', 'temporal');
console.log(tarea1);
console.log(tarea1.nombre);
console.log(tarea2);
console.log(tarea3);