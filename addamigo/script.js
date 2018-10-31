function generarHtml(paramelemid, paramigos) {
    $(paramelemid).html(function () {
        let htmlamigos = '';
        paramigos.forEach(unamigo => {
            htmlamigos += `<li>${unamigo.name}
                  <div><button class='saluda' data-value="${'hola ' + unamigo.name}">Saludar</button></div></li>`;
        })
        return htmlamigos;
    });

}

function asociaclick(paramelemid) {
    $(paramelemid + ' .saluda').click(function () {
        alert($(this).attr('data-value') + '!!');
    });

}

$('#cargarbtnface').click(function () {
    $.ajax({
        url: "http://www.mocky.io/v2/5bd84b343100002714474d53",
    }).done(function (data1) {
        console.log(data1);

        generarHtml('#amigosface', data1);
        asociaclick('#amigosface');

    });
});


$('#cargarbtnspoty').click(function () {
    $.ajax({
        url: "http://www.mocky.io/v2/5bd84b343100002714474d53",
    }).done(function (data1) {
        console.log(data1);
        generarHtml('#amigosspoty', data1);
        asociaclick('#amigosspoty');
    });
});

function addAmigoHtml(paramElemid, unAmigo) {
    let htmlAmigos = `<li>
    <div>${unAmigo.nombre}</div>
    <div>${unAmigo.email}</div>        
    <div><button class="saludaBtn green" data-value="${unAmigo.nombre}">Saludar</button></div>        
    </li>`;


    $(paramElemid).append(htmlAmigos);
    asociaClick('#amigosface .saludaBtn');

}

$('#accederbtn').click(function(evnt) {

    evnt.preventDefault();

    document.querySelectorAll('.error').forEach(elem => {
        elem.classList.add('esconder');
    });

    let formValid = document.getElementById('addForm').checkValidity();

    if (formValid) {
        let newAmigo = {
            nombre: document.getElementById('nombre').value,
            email: document.getElementById('email').value
        };

        //ENVIAR
        $.ajax({
            method: "POST",
            url: "http://www.mocky.io/v2/5bd9731d2f00005e0006d11d",   
            data: newAmigo
        }).done(function (data) {
            console.log(data);
            if (data.result) {
                addAmigoHtml('#amigosface', newAmigo);

            } else {
                //mensaje de error
                document.getElementById('mensaje').classList.remove('esconder');
            }
        });

    } else {

        if (!document.getElementById('nombre').checkValidity()) {
            document.getElementById('errorusername').classList.remove('esconder');
        }

        if (!document.getElementById('email').checkValidity()) {
            document.getElementById('erroremail').classList.remove('esconder');
        }
    }

});