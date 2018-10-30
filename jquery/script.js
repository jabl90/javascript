console.log($('#holabtn').html());

$('#holabtn').click(function () { //$ es indempotente: el objeto resultante de la operacion es dle mismo tipo que eld e la operación inicial. Sirve para que ante una misma entrada se tenga una salida igual
  //  alert("hola");
});

$('h1').html('holaaaaa').click(function () {
    alert('Este es el título');
}).html('otro título'); //Ejemplo de idempotencia

//lo que recibo del servidor
let amigos = [
    { name: 'Jose', email: 'jose.barealpz@gmail.com' },
    { name: 'Paco', email: 'paco.lopez@gmail.com' },
    { name: 'Lara', email: 'lara.garcia@gmail.com' },
    { name: 'Javi', email: 'javi.barreiro@gmail.com' },
    { name: 'Luisa', email: 'luisa.gonzalez@gmail.com' }
];

$('#amigos').html(function () {
    let htmlamigos = '';
    amigos.forEach(unamigo => {
        htmlamigos += `<li>${unamigo.name}
      <div><button class='saluda' data-value="${'hola ' + unamigo.name}">Saludar</button></div></li>`;

    })
    return htmlamigos;
});

$('.saluda').click(function () {
    alert($(this).attr('data-value') + '!!');
});

$('#holabtn').click(function () {
    $('#amigos').toggle();
});

/* JSON. RESULTADOS OBTENIDOS DE LA CONSOLA
let persona = {nombre: 'jose', edad:28, sabio:true}
undefined
persona
{nombre: "jose", edad: 28, sabio: true}
JSON.stringify(persona);
"{"nombre":"jose","edad":28,"sabio":true}"
JSON.parse('{"nombre":"jose","edad":28,"sabio":true}');
{nombre: "jose", edad: 28, sabio: true}
*/