//Funcion constructor de tipo Persona
function  Persona(nombre,apellido,email){
    this.nombre = nombre;
    this.apellido = apellido;
    this.email = email;
    //agregarlo desd el constructor
    this.nombreCompleto = function(){
        return this.nombre + "" + this.apellido;
    }
}

let padre = new Persona("Liam","Lopez","liam@gmail.com");
console.log(padre.nombreCompleto());

let madre = new Persona("Laura","Quintero","lquin@gmail.com");
console.log(madre.nombreCompleto());

padre.nombre = ("Carlos");
console.log(padre);
console.log(madre);