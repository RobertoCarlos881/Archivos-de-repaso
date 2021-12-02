//parametros por default en las funciones
//estos parametros son undefined pero se pueden modificar
function actividad(nombre, actividad) {
    console.log(`La persona ${nombre}, esta realizando la actividad ${actividad}`);
}
actividad('Roberto', 'Aprender JavaScript');
actividad('Jimena', 'Esta aprendiendo quimica');
actividad();

//function declaration
//por ejemplo en esta otra funcion podemos ver como se cambian los parametros
function actividad1(nombre = 'walter white', actividad = 'Crear metanfetaminas') {
    console.log(`La persona ${nombre}, esta realizando la actividad ${actividad}`);
}
actividad1('Roberto', 'Aprender JavaScript');
actividad1('Jimena', 'Esta aprendiendo quimica');
actividad1();

//ahora con function expression cambia un poco
const actividad2 = function(nombre = 'walter white', actividad = 'Crear metanfetaminas'){
    console.log(`La persona ${nombre}, esta realizando la actividad ${actividad}`);
}
actividad2('Roberto', 'Aprender JavaScript');
actividad2('Jimena', 'Esta aprendiendo quimica');
actividad2();