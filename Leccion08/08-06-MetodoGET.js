let persona = {
    nombre: "Victor",
    apellido:"Lopez",
    email:"vic29@gmail.com",
    edad:20,
    get nombreCompleto(){
        return this.nombre + " " + this.apellido;
    }
}

console.log(persona.nombreCompleto);

