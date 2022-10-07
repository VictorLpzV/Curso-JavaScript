//llamadas asincronas con uso setTimeout
function miFuncionCallBack(){
    console.log("Saludos asincrono despues de 3 segundos");

}

setTimeout(miFuncionCallBack, 3000);//despues de 3 segundos

setTimeout(function(){console.log("Saludo asincrono 2")},4000);



//setTimeout con funciones flecha
setTimeout(() => console.log("Saludo asincrono 3"),5000);
