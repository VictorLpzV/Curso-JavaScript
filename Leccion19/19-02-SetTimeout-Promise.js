let miPromesa = new Promise((resolver,rechazar)=>{
    let expresion = true;
    if(expresion){
        resolver("se resolvio la promesa");
    }
    else{
        rechazar("Se produjo un error");
    }
        
});

/*cabe aclarar que no es necesario manejar los 2 parametros obligatoriamente */
let promesa = new Promise((resolver)=>{
    setTimeout(()=> resolver("saludos con promesa y timeout"),3000);
    console.log("fin promesa");
});
promesa.then(valor =>console.log(valor));

/*Una promesa puede estar dentro de otra promesa */