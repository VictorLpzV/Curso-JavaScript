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
        //se aplica polimorfismo
        //el metodo se ejecuta depende si es 
        //una referencia de tipo padre o de tipo hijo
        return this.nombreCompleto;
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


let persona1 = new Persona("Valeria","Morales");
console.log(persona1);

let empleado1 = new Empleado("Maria","Santos","Software");
console.log(empleado1);
console.log(empleado1.nombreCompleto);
console.log(empleado1.toString());

//persona1.saludar();no es posible llamar un metodo static desde un objeto

//se debe llamar desde una clase
Persona.saludar();

Persona.saludar2();

//mandar a llamar el metodo desde la clase empleado
Empleado.saludar();
Empleado.saludar2(empleado1);