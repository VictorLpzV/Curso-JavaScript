let persona = {
    nombre: "Victor",
    apellido:"Lopez",
    email:"vic29@gmail.com",
    edad:20,
    nombreCompleto:function(){
        return this.nombre + " " + this.apellido;
    }
}

//agregar
persona.tel ="123456";
console.log(persona);

//elimimar
delete persona.tel;
console.log(persona);