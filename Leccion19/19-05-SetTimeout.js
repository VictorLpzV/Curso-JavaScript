/**
 * Vamos a usar setTimeout conbinandolo con
 * Async, await y promesas
 */

async function funcionTimeOut(){
    let miPromesa = new Promise(resolver =>{
        setTimeout(()=>resolver("promesa con await y timeout"),3000);
    });
    console.log(await miPromesa);
}
funcionTimeOut();
//no podemos usar async si no estamos dentro de una funcion async