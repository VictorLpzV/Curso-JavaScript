/*Esta palabra no sva a facilitar el uso de promesas

Al poner la palabra Async antes de un método significa 
que ese método está obligado a regresar una promesa


*/
let promesa = new Promise((resolver)=>{
    setTimeout(()=> resolver("saludos con promesa y timeout"),3000);
    //console.log("fin promesa");
});

//una funcion la podemos convertir en promesa simplemente agregando "async"
//lo que retorne lo podemos consumir por medio de la funcion then 
async function miFuncionConPromesa(){
    return "saludos con promesa y async";

}
miFuncionConPromesa().then(valor => console.log(valor));