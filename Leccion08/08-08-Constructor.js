//Funcion constructor de tipo Persona
function  Persona(nombre,apellido,email){
    this.nombre = nombre;
    this.apellido = apellido;
    this.email = email;
}

let padre = new Persona("Liam","Lopez","liam@gmail.com");
console.log(padre);

let madre = new Persona("Laura","Quintero","lquin@gmail.com");
console.log(madre);

padre.nombre = ("Carlos");
console.log(padre);
console.log(madre);
