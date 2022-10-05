class Persona{

    static contadorPersonas = 3;
    static get MAX_OBJ(){
        return 5;
    }
 

    constructor(nombre,apellido){
        this._nombre = nombre;
        if(Persona.contadorPersonas < Pérsona.MAX_OBJ){
            this.idPersona = ++ Persona.contadorPersonas;
        }else{
            console.log("se ha superado el limite permitido");
        }
        this._apellido = apellido;
        this.idPersona = Persona.contadorObjetosPersona ++;
      

    }

    get nombre(){
        return this._nombre;
    }

    set nombre(nombre){
        this._nombre=nombre;
    }

    get apellido(){
        return this._apellido;
    }

    set apellido(apellido){
        this._apellido=apellido;
    }
    nombreCompleto(){
        return this._nombre + " " + this._apellido;
    }
    //sobreescribiendo de la clase padre
    toString(){
        return this.idPersona + "" + this._nombre + "" + this._apellido;
    }
    static saludar(){
        console.log("saludos desde el metodo static");
    }
    static saludar2(persona){
        console.log(persona.nombre);
    }

}

class Empleado extends Persona{
    constructor(nombre,apellido,departamento){
        super(this.nombre,this.apellido);
        this._departamento = departamento;
    }
    get departamento(){
        return this._departamento;
    }

    set departamento(departamento){
        this._departamento=departamento;
    }
    //Sobre escribir
    nombreCompleto(){
        return super.nombreCompleto + " " + this._departamento;
    }
}

let persona1 = new Persona("Liam","vasquez");
console.log(persona1.toString());

let empleado1 = new Empleado("Valeria","Vasquez","Software");
console.log(empleado1.toString());

console.log(Persona.contadorPersonas);

let persona2 = new Persona("Mariana", "Ramirez");
console.log(Persona.contadorPersonas);

/////
console.log(Persona.MAX_OBJ);
Persona.MAX_OBJ=10;
console.log(Persona.MAX_OBJ);

let persona3 = new Persona("Mariano","santiago");
let persona4 = new Persona("Mariano","santiago");
let persona5 = new Persona("Mariano","santiago");
console.log(persona5.toString());