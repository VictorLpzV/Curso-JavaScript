class Persona{

    static contadorPersonas = 3;
 

    constructor(nombre,apellido){
        this._nombre = nombre;
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