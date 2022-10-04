let persona = {
    nombre: "Victor",
    apellido:"Lopez",
    email:"vic29@gmail.com",
    edad:20,
    nombreCompleto:function(){
        return this.nombre + " " + this.apellido;
    }
}

//forma 1
console.log(persona.nombre);

//forma 2, acceder como si fuera un array
console.log (persona["apellido"]);

//forma 3, por un ciclo para recorrer las propiedades del objeto
for(nombrePropiedad in persona){
    console.log(nombrePropiedad);
    console.log(persona[nombrePorpiedad]);
}