class Empleado{
    constructor(nombre, sueldo){
        this._nombre = nombre;
        this._sueldo = sueldo;
    }


    obtenerDetalles(){
        return `Empleado: nombre: ${this._nombre}, sueldo: ${this._sueldo}`;
    }

}


class Gerente extends Empleado{
    constructor(nombre, sueldo, departamento){
        super(nombre, sueldo);
        this._departamento = departamento;
    }
    
    
    obtenerDetalles(){
        return `Gerente: ${super.obtenerDetalles()} depto: ${this._departamento}`;
    }

}

function imprimir(tipo){//puede recibir diferentes tipos
   console.log(tipo.obtenerDetalles());
}

let empleado1 = new Empleado('Victor', 9000);
let gerente1 = new Empleado('Victor', 9000);

imprimir(empleado1);
imprimir(gerente1);
//basicamente su tipo depende de lo que le asignamos
//ejemplo tipo empleado1 y tipo gerente1