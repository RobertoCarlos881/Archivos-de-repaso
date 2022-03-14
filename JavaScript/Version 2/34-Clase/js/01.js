//Fetch API Async await

const url = "https://jsonplaceholder.typicode.com/comments";
const url2 = "https://jsonplaceholder.typicode.com/photos";

const consultarAPI = async () => {

    const inicio = performance.now()
    const respuesta = await fetch(url)
    const resultado = await respuesta.json()
    //console.log(resultado);

    //console.log("Segunda consulta");

    const respuesta2 = await fetch(url2)
    const resultado2 = await respuesta2.json()
    //console.log(resultado2);
    const fin = performance.now();
    console.log(`Ejecucion primer async ${fin - inicio} ms`);
}

//Tiene mejor performance la segunda forma
const consultarAPI2 = async () => {
    const inicio = performance.now()
    const [respuesta, respuesta2] = await Promise.all([fetch(url), fetch(url2)])
    const resultado = await respuesta.json()
    //console.log(resultado);
    const resultado2 = await respuesta2.json()
    //console.log(resultado2);
    const fin = performance.now();
    console.log(`Ejecucion segundo async ${fin - inicio} ms`);
}

consultarAPI();
consultarAPI2();