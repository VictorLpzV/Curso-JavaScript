//funcion normal
function miFunction(){
    console.log("Saludos---");
}
miFunction();

let miFunction2 = function(){ //es una funcion anomima ya que no recibe un nombre
    console.log("Saludos---");
}

//funciones flecha
let miFuncionFlecha = () =>{
    console.log("saludos....");
}

miFuncionFlecha();

//podemos simplificar la funcion flecha 
const miFuncionFlecha2 = () => console.log("saludos....");
//cuando es una sola linea en el interior, se puede reducir

//Funcion flecha para retornar datos
const saludar = () =>{
    return "saludos a todos";
}
console.log(saludar());

//Funcion flecha para retornar datos, simplificado
const saludar2 = () => "saludos desde la funciomn flecha";

//para regresar un objeto
const regresarObjeto = () => ({nombre: "Victor", apellido:"López"});
console.log(regresarObjeto());

//para recibir parametros


const funcionConParametros = (mensaje) => console.log(mensaje);
funcionConParametros("saludos con parametros");

//fucnion con varios parametros
const funcionConVariosParametros = (op1,op2) => op1 + op2;
console.log(funcionConVariosParametros(3,5));