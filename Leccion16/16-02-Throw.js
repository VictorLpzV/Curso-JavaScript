"Use strict";

try{
    x=10;
    //miFuncion();
    throw "Nuevo error"; //para lanzar un nuevo error
}
catch(error){
    console.log(error);
}
finally{
    console.log("Termina la revision de errores")
}

console.log("Continuamos")

//////////////////////////////
let resultado = 11;

try{
    if(isNaN(resultado)) throw "No es un número";
    else if(resultado == "") throw "Es una cadena vacía";
    else if(resultado >=0) throw "Valor positivo";
    else if (resultado<0) throw "Valor negativo";
}catch(error){
    console.log(error);
    //console.log(error.nombre);
    //console.log(error.mensaje);
}
finally{
    console.log("finalizacion");
}