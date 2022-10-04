//Declaración
const sumarFuncionTipoFlecha = (a,b) => a+b;
resultado = sumarFuncionTipoFlecha(3,5);
console.log(resultado);


//Argumentos y parametros
let sumar = function (a=4,b=5){
    console.log(arguments[0]);
    console.log(arguments[1]);
    return a+b;
}

resultado = sumar(3,2);
console.log(resultado);
