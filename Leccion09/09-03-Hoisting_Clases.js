//No es posible crear objetos antes de declarar la clases
//No se aplica el concepto de hoisting
//let persona2 = new Persona("Valeria","Morales");

class Persona{

    constructor(nombre,apellido){
        this._nombre = nombre;
        this._apellido = apellido;

    }

    get nombre(){
        return this._nombre;
    }

    set nombre(nombre){
        this._nombre=nombre;
    }

}
let persona2 = new Persona("Valeria","Morales");
console.log(persona2);