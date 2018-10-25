var meses = ['enero', 'febrero', 'marzo', 'abril', 'mayo', 'junio', 'julio', 'agosto', 'septiembre', 'octubre', 'noviembre', 'diciembre'];

console.log("los meses son: ", meses[0], ", ", meses[6], ", ", meses[10], ", ", meses[11]);


var peso = 70;
var altura = 170;
var cachas = false;

if (peso <= altura - 120) {   //la primera opción siempre tiene que ser la más restrictiva
    cachas = false;
    console.log('come más tirillas');
}
else if (peso <= altura - 100) {
    cachas = true;
    console.log("Estas to tocho!");
}
else {
    cachas = false;
    console.log("Estas tocho polvo, te sobran", peso - (altura - 100), "KG");
}


var num1 = 0;
var num2 = 10000;
var num3 = 98888800;

if ((num1>num2)&&(num1>num3)) {

    console.log("el número más grande es: ",num1);
}
else if ((num2>num1)&&(num2>num3)) {
    console.log("el número más grande es: ",num2);
}
else {
    console.log("el número más grande es: ",num3);
}

