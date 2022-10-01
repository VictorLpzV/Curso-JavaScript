let numero =3;

let numeroTexto = "Valr desconocido";

switch(numero){
    case 1:
        numeroTexto = "Número uno";
        break;
    case 2:
        numeroTexto= "Número dos";
        break;
    case 3:
        numeroTexto="Número tres";
        break;
    default:
        numeroTexto = "Caso no encontrado";
        break;
     
}

console.log(numeroTexto);