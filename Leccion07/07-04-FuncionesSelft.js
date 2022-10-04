//definir
(function(){
    console.log("Ejecutando la función");
})();
//nose puede reutilizar pq no se esta asignando a un avariabke y no tiene un nimbre
//util para proyecto web, que s emande a llamar una funcion a si misma


(function(a,b){
    console.log("Ejecutando la función"+(a+b));
})(3,4);