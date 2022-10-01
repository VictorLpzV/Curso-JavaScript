
const autos= ["BMW","Jeep","Volvo"];
console.log(autos);

console.log(autos[0]);
console.log(autos[1]);

/*Manejo de arrays */
for(let i=0;i<autos.length;i++){
    console.log(i + " : "+ autos[i]);
}

autos[1] = "Camaro";
console.log(autos[1]);

/*Agregar nuevos valores al array */
autos.push("Jeep");
console.log(autos);

autos[autos.length]="cadillac";
console.groupCollapsed(autos);