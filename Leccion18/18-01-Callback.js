//para mandar a llamar funcuiones dentro de otras funciones

//funcion normal
function miFuncion1(){
    console.log("funcion 1");
}

function miFuncion2(){
    console.log("funcion 2");
}

miFuncion1();
miFuncion2();

//funciones callback
function imprimir(mensaje){
    console.log(mensaje);
}

function sumar(op1,op2, funcionCallback){
    let resultado = op1 +op2;
    funcionCallback("Resultado: "+ resultado); 
}

sumar(5,3,imprimir);
