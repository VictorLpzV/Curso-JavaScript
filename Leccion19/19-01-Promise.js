/**
 * Una promesa sirve para tener 2 posibbles reultados 
 * en una servira cuando todo salga bien
 * en la otra opcion servira para cuando haya un error
 */

//sintaxis basica para crear una "promesa"

//lleva 2 parametros de tipo callback 
//La primera es por si se resuelve correctamente, la segunda pro si falla
let miPromesa = new Promise((resolver,rechazar)=>{
    let expresion = true;
    if(expresion){
        resolver("se resolvio la promesa");
    }
    else{
        rechazar("Se produjo un error");
    }
        
});
//recibimos 2 parametros de tipo flecha
/*miPromesa.then(
    valor => console.log(valor),
    error => console.log(error)
);*/

miPromesa
.then(valor => console.log(valor))
.catch(error=>console.log(error));