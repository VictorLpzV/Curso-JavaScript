/**
 * Await espera el reultado de una promesa
 * simpleficando la llamada a la promesa 
 * y ya no utilizaremos then
 */

async function funcionAwait(){
    let miPromesa = new Promise(resolver=>{
        resolver("Promesa con await");
    });
    console.log(await miPromesa);
}

funcionAwait();