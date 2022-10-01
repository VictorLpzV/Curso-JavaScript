/*OPERADOR AND*/
let a=15;
let valMin =0; valMax=10;

if(a>=valMin && a<= valMax){
    console.log("Dentro del rango")
}
else{
    console.log("Fuera del rango");
}



/*OPERADOR OR*/
let vacaciones = false, diaDescanso = false;
if(vacaciones || diaDescanso){
    console.log("Padre puede asistir al juego de su hijo");
}
else{
    console.log("Padre no puede asistir al juego de su hijo");
}

/*Operador Ternario */
let resutado = (1>2)? "verdadero" : "falso";
console.log(resultado); 

let numero=9;
resutado = (numero %2==0) ? "Número par" : "Número impar";
console.log(resultado);


/* Combertir String a number*/
let miNumero = "10";
let edad = Number(miNumero);

if(edad>=18){
    console.log("Puede votar");
}
else{
    console.log("Muy joven para votar");
}

/*Ejercicio con operador ternario */
let resultado = (edad>=18)? "Puede votar" : "Muy joven para votar";
console.log(resultado);