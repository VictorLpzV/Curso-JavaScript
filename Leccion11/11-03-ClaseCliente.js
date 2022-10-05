class Cliente extends ClasePersona{
    static contadorClientes=0;

    constructor(fechaRegistro){
        this._idCliente = ++ Empleado.contadorClientes;
        this._fechaRegistro = fechaRegistro;

    }

    get _idCliente(){
        return this._idCliente;
    }

    get fechaRegistro(){
        return this._fechaRegistro;
    }

    set fechaRegistro(fechaRegistro){
        this._fechaRegistro= fechaRegistro;
    }

    toString(){
        return `${super.toString()} ${this._idCliente} ${this._fechaRegistro}`;
    }

}