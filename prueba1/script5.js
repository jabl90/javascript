function concatenar(str1, str2){

    return str1+' '+str2;
}

console.log(concatenar('Hola', 'Mundo'));

/*let para las variables y const para constantes, este último lo vamos a utilizar para guardar funciones*/

const concatenar2 = function concatenar(str1, str2){

    return str1+' '+str2;
}

console.log(concatenar2('Hola2', 'Mundo2'));

(function(texto){
    console.log(texto);
}) ('Hola mundo');

