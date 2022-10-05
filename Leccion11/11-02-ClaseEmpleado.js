class Empleado extends ClasePersona{
    static contadorEmpleados=0;

    constructor(sueldo){
        this._idEmpleado = ++ Empleado.contadorEmpleados;
        this._sueldo = sueldo;

    }

    get _idEmpleado(){
        return this._idEmpleado;
    }
    
    get sueldo(){
        return this._sueldo= sueldo;
    }

    set sueldo(sueldo){
        this._sueldo=sueldo;
    }

    toString(){
        return `${super.toString()} ${this._idEmpleado} ${this._sueldo}`;
    }
}