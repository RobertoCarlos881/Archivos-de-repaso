function queTipoSoy<T>(argumento: T) {
    return argumento;
}

let soyString = queTipoSoy('Hola mundo');
let soyNumero = queTipoSoy(52);
let soyArreglo = queTipoSoy([1,2,4,56,20]);
let soyExplicito = queTipoSoy<number>(150);