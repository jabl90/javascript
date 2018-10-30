function generarHtml(paramelemid, paramigos){
    $.ajax({
        url: "http://www.mocky.io/v2/5bd84b343100002714474d53",
    }).done(function (data) {
        console.log(data);
        //inyectar amigos
    
    $(paramelemid).html(function () {
        let htmlamigos = '';
        paramigos.forEach(unamigo => {
            htmlamigos += `<li>${unamigo.name}
                  <div><button class='saluda' data-value="${'hola ' + unamigo.name}">Saludar</button></div></li>`;
        })
        return htmlamigos;
    });
    $('.saluda').click(function () {                         //se tiene que colocar fuera del                                                  bucle y del HTML  ya que una vez que                                              está cargado lo  muestra cuando le                                                corresponde en la secuencia del                                                     código
        alert($(this).attr('data-value') + '!!');
    });

};

$('#cargarbtnface').click(function () {
    
        generarHtml('#amigosface',data);

        //asociar eventos
   
});


$('#cargarbtnspoty').click(function () {
    
    generarHtml('#amigosspoty',data); 
       
    });




