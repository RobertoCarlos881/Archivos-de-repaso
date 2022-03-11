//scope
// var musica = 'rock';
// if (musica) {
//     var musica = 'grunje';
//     console.log('dentro del if:', musica);
// }
// console.log('fuera del if', musica);

//scope con let
let musica = 'rock';
if (musica) {
    let musica = 'grunje';
    console.log('dentro del if:', musica);
}
console.log('fuera del if', musica);
//esto funciona tambien con const 