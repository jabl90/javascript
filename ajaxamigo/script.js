function generarHtml(paramElemid, paramAmigos) {
    $(paramElemid).html(function () {
        let htmlAmigos = '';
        paramAmigos.forEach(unAmigo => {
            htmlAmigos += `<li>
            <div>${unAmigo.name}</div>
            <div>${unAmigo.email}</div>        
            <div><button class="saludaBtn" data-value="${unAmigo.name}">Saludar</button></div>        
            </li>`;
        });

        return htmlAmigos;
    });
}

function asociaClick(paramSelector){
    $(paramSelector).click(function () {
        alert("Hola " + $(this).attr('data-value') + "!!");
    })
}

$('#cargarbtnFace').click(function () {

    $.ajax({
        url: "http://www.mocky.io/v2/5bd84ad03100002714474d35",
    }).done(function (amigosFromServer) {
        console.log(amigosFromServer);
        //INYECTAR amigosFromServer en el html
        generarHtml('#amigosface',amigosFromServer);

        // Asociar eventos
        asociaClick('#amigosface .saludaBtn');
    });

});

$('#cargarbtnSpoty').click(function () {

    $.ajax({
        url: "http://www.mocky.io/v2/5bd84ad03100002714474d35",
    }).done(function (amigosFromServer) {
        console.log(amigosFromServer);
        //INYECTAR amigosFromServer en el html
        generarHtml('#amigosspoty',amigosFromServer);

        // Asociar eventos
        asociaClick('#amigosspoty .saludaBtn');

    });

});