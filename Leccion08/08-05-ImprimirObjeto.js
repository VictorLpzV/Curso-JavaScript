let persona = {
    nombre: "Victor",
    apellido:"Lopez",
    email:"vic29@gmail.com",
    edad:20,
    nombreCompleto:function(){
        return this.nombre + " " + this.apellido;
    }
}


// forma 1: concatenar cada valor de cada propiedad
console.log(persona.nombre + " " + persona.apellido);

//Forma 2: por for in
for(nombrePropiedad in persona){
    console.log(persona[nombrePropiedad]);
}

//forma 3: utilizando sintaxys de object
let personaArray= Object.values(persona);
console.log(personaArray);

//forma 4: utilizar el metodo Json.Stringify
let personaString = JSON.stringify(persona);
console.log(personaString);