//Object literal enhancement
const banda = 'Metallica';
const genero = 'Heavy metal';
const canciones = ['Master of puppets', 'Seek and destroy', 'Enter sandman'];

//forma anterior
const metallica = {
    banda: banda,
    genero: genero,
    canciones: canciones
}
console.log(metallica)

//forma nueva
const metallica1 = {banda, genero, canciones};
console.log(metallica1)