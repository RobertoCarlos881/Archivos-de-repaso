function sumar(a: number, b: number): number {
    return a + b;
}

const sumarFlecha = (a: number, b: number): number => {
    return a + b;
}
//En los parametros siempre deben de ir en este orden los requeridos, despues los opcionales
//y al final los por defecto
function multiplicar(numero: number, otroNumero?: number, base: number = 10) {
    return numero * base;
}

interface PersonajeLOR {
    nombre: string;
    pv: number;
    mostrarHp: () => void;
}

//un void se suele usar para no retornar nada
function curar( personaje: PersonajeLOR, curacion: number ): void {
    personaje.pv += curacion;

    console.log(personaje);
    
}

const nuevoPersonaje: PersonajeLOR = {
    nombre: 'Strider',
    pv: 50,
    mostrarHp() {
        console.log('Puntos de vida:', this.pv);
    }
}

curar(nuevoPersonaje, 100);
nuevoPersonaje.mostrarHp();

const resultado0 = multiplicar(10, 20)
const resultado = sumar(5, 10);

console.log(resultado);