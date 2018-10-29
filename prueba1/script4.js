/*let u1_name = 'Ricardo';
let u1_apellido = 'Ahumada';

let u2_name = 'Jose';
let u2_apellido = 'Barea';

let u3_name = 'Paul';
let u3_apellido = 'Smith';

console.log(u1_name+' '+u1_apellido);
console.log(u2_name+' '+u2_apellido);
console.log(u3_name+' '+u3_apellido);


function generarnombrecompleto(unnombre, unapellido){
    let nombre_mod='#'+unnombre+'#';
    let app_mod='//'+unapellido+'//';
    return nombre_mod+' '+app_mod;

}

console.log(generarnombrecompleto(u1_name,u1_apellido));
console.log(generarnombrecompleto(u2_name,u2_apellido));
console.log(generarnombrecompleto('Ruben','Darío')); //le puedo dar valores concretos a los parámetros
*/

let numero1 = 4;
let numero2 = 3;

function operarnumeros(num1, num2, op) {

    let suma = num1 + num2;
    let resta = num1 + num2;
    let mult = num1 * num2;
    let div = num1 / num2

    if (op == '+') {

        return suma;
    }

    if (op == '-') {

        return resta;

    }

    if (op == '*') {

        return mult;

    }

    if (op == '/') {

        return div;

    }
    else {
        if (num2 == 0) return 0;
    }
/*
    console.log(operarnumeros(4, 6, '+'));
    console.log(operarnumeros(4, 6, '-'));
    console.log(operarnumeros(4, 6, '*'));
    console.log(operarnumeros(4, 6, '/'));
}
function operarnumerosarray(resultado, array, op) {

    let array = [2, 4, 6, 4, 1];
 
        let resultado;

        if (op=='+') resultado = 0;
            else if (op == '-') resultado = array && array[0]?array[0]:0;
            else if (op == '*') resultado = 1;
            else if (op == '/') resultado = array && array[0]?array[0]:0;
    
        for (let i = 0; i < array.length; i++) {
            resultado=resultado+array[i];
        }
        return operarnumeros(resultado, array[i], '+');
    }
    console.log(operarnumerosarray(resultado,'+'));
    console.log(operarnumerosarray(resultado,'-'));
    console.log(operarnumerosarray(resultado,'*'));
    console.log(operarnumerosarray(resultado,'/'));
*/
    function opNumArr(arr, op) {
        let resultado;
     
        if (op == '+')  resultado = 0;
        else if (op == '-') { //resultado = (arr && arr[0])?arr[0]:0;
        }
        else if (op == '*'){ resultado = 1;
        }
        else if (op == '/') {resultado = (arr && arr[0])?arr[0]:0;
        }
        for (let i = 0; i < arr.length; i++) {
            if((op=='-'||op=='/') && i==0) resultado=arr[0];
           else resultado = operarNumeros(resultado , arr[i],op);
        }
     
        return resultado;
     }
    }
