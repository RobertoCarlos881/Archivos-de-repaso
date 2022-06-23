//Extender una clase
class PersonaNormal {
   
    constructor(
        public nombre: string,
        public direccion: string
    ) {}
}

class Heroe extends PersonaNormal { //AQUI YA SE EXTENDIO LA CLASE
    //Normalmente no se ponen las propiedades asi, si no en el constructor
    //alterEgo: string; //private: esta propiedad solo puede ser visible dentro de esta clase
    //edad: number; //public: afuera de la clase cualquiera la puede ver
    //nombreReal: number; //static: se puede acceder al valor de la clase sin instanciar la clase

    //Los constructores se inicializan antes
    //Es mas facil darle las propiedades asi y menos problemas
    constructor(
        public alterEgo: string,
        public edad: number,
        public nombreReal: string
    ) {
        super( nombreReal, 'New York, USA');
    }

}

const ironMan = new Heroe('Iron Man', 28, 'Tony');
console.log(ironMan);