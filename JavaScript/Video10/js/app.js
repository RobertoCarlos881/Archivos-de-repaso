//Prototypes
//esto sirve para heredar, se hereda primero a la funcion y despues al objeto
function Tarea(nombre, urgencia){
    this.nombre = nombre;
    this.urgencia = urgencia;
}

Tarea.prototype.mostrarInformacionTarea = function(){
    return `La tarea ${this.nombre} tiene una prioridad de ${this.urgencia}`;
}

const tarea1 = new Tarea('Aprender javascript y react', 'Urgente');

const mostrarInfo = mostrarInformacionTarea(tarea1.nombre, tarea1.urgencia);
console.log(tarea1);