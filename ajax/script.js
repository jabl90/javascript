function generarHtml(paramelemid, paramigos){
    $(paramelemid).html(function () {
        let htmlamigos = '';
        paramigos.forEach(unamigo => {
            htmlamigos += `<li>${unamigo.name}
                  <div><button class='saluda' data-value="${'hola ' + unamigo.name}">Saludar</button></div></li>`;
        })
        return htmlamigos;
    });

}

function asociaclick(paramelemid){
    $(paramelemid+' .saluda').click(function () {             
        alert($(this).attr('data-value') + '!!');
    });

}

$('#cargarbtnface').click(function () {
    $.ajax({
        url: "http://www.mocky.io/v2/5bd84b343100002714474d53",
    }).done(function (data) {
        console.log(data);
        
        generarHtml('#amigosface',data);
      asociaclick('#amigosface');
        
    });
});


$('#cargarbtnspoty').click(function () {
    $.ajax({
        url: "http://www.mocky.io/v2/5bd84b343100002714474d53",
    }).done(function (data) {
        console.log(data);
    generarHtml('#amigosspoty',data); 
    asociaclick('#amigosspoty');
       
        
    });

});




