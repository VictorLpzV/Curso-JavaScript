//se crea un objeto porque se le puden asignar propiedades

const persona ={
    nombre:"Victor",
    apellido: "Lopez"
}

function cambiarValorObjeto(p1){
    p1.nombre = "Liam";
    p1.apellido = "Vasquez";
}

cambiarValorObjeto(persona);//aqui se hace el paso por referencia

console.log(persona);