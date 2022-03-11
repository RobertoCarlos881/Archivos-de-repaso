//destructuring de objetos
//mas que nada es como extraer informacion o valores del objeto
const aprendiendoJS = {
    version: {
        nueva : 'ES6+',
        anterior: 'ES5'
    },
    frameworks: ['React', 'VueJs', 'AngularJS']
}

console.log(aprendiendoJS);

//Version anteior
//Esto ya no se usa porque cada vez que tiene mas valores un objeto, se vuelve mas complicado acceder a el
let version = aprendiendoJS.version.nueva; 
console.log(version)

//version nueva
let {version, frameworks} = aprendiendoJS;
console.log(version);
console.log(frameworks);

let {nueva} = aprendiendoJS.version;
console.log(nueva);