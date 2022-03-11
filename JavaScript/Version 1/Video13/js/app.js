//Metodos o funciones de un objeto
const persona = {
    nombre: 'Roberto',
    trabajo: 'Desarrollador web',
    edad: 21,
    musicaRock : true, 
    mostrarInformacion: function(){
        console.log(`${this.nombre} es ${this.trabajo} y su edad es ${this.edad}`);
    }
}

persona.mostrarInformacion();