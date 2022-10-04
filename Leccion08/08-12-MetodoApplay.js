let persona1 = {
    nombre: "Victor",
    apellido: "Lopez",
    nombreCopleto : function(titulo, tel){
       // return this.nombre + " " +this.apellido;
       return titulo + " : " + this.nombre + " : " + this.apellido + " : " + tel
    }
}

let persona2 ={
    nombre:"Liam",
    apellido: "Vasquez"
}


console.log(persona1.nombreCopleto);

//Metodo Applay
//mandar a llamar un metodo en un un objeto que
//no tiene definido cierto metodo
console.log(persona1.nombreCopleto("Lic","123456"));


let arreglo = ["ing","987654"];
console.log(persona1.nombreCopleto.apply(persona2, arreglo));