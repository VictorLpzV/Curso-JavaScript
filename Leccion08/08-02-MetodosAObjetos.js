let x=10;
console.log(x.length);

let persona = {
    nombre: "Victor",
    apellido:"Lopez",
    email:"vic29@gmail.com",
    edad:20,
    nombreCompleto:function(){
        return this.nombre + " " + this.apellido;
    }
}

console.log(persona.nombre);
console.log(persona.edad);
console.log(persona.apellido);
console.log(persona.email);
console.log(persona.nombreCompleto());
//imprimir todo
console.log(persona);