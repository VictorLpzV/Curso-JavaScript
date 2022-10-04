let persona1 = {
    nombre: "Victor",
    apellido: "Lopez",
    nombreCopleto : function(){
        return this.nombre + " " +this.apellido;
    }
}

let persona2 ={
    nombre:"Liam",
    apellido: "Vasquez"
}


console.log(persona1.nombreCopleto);

//Uso de metodo call
console.log(persona1.nombreCopleto.call(persona2));

