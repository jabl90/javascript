document.getElementById('accederbtn').onclick = (function(evnt) {
    //  console.log(evnt);
    evnt.preventDefault(); //evita que el formulario se envie si no esta completo
    // document.getElementById('mensaje').innerHTML="Usuario y/o contraseña incorrectos"  //muestra mensaje. Esta linea de código ha sido sustituida por los mensajes de error de cada campo
    document.querySelectorAll('.error').forEach(elem => {
        elem.classList.add('hide');
    });

    let formValid = document.getElementById('loginform').checkValidity();

    if (formValid) {
        //enviar
        $.ajax({
            method: "POST",
            url: "http://www.mocky.io/v2/5bd973492f0000810006d12d",//caso true
           // url: "http://www.mocky.io/v2/5bd977ce2f0000790006d157", //False
            data: {
                username: document.getElementById('username').value,
                password: document.getElementById('password').value
            }
        }).done(function (data) {
            console.log(data);
            if (data.result) {
                window.location.href = 'dashboard.html';
            } else {
                document.getElementById('mensaje').classList.remove('hide'); //mensaje de error
            }
        });

    } else {

        if (!document.getElementById('username').checkValidity()) {
            document.getElementById('errorusername').classList.remove('hide');
        }
        if (!document.getElementById('password').checkValidity()) {
            document.getElementById('errorpassword').classList.remove('hide');
        }
    }

});