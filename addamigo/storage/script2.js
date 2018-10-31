console.log(window.localStorage.getItem('palabraAlmacenada'));

let amigosRetStr=window.localStorage.getItem('listaamigos');
let amigosRet=JSON.parse(amigosRetStr);


document.getElementById('amigos').innerHTML=(function(){
    let html='';

    amigosRet.forEach(element => {
        html+= `<li>${element.name}|${element.apellidos}</li>`;
    });

        return html;

})(); //hay que invocar a la funcion vacía para que no nos muestre lo intrinseco del array.