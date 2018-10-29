let piano=[
    {tecla: 'do', sonido:'./wav/a1.wav', tono:true},
    {tecla: 'dos', sonido:'./wav/a1s.wav', tono:false},
    {tecla: 're', sonido:'./wav/b1.wav', tono:true},
    {tecla: 'res', sonido:'./wav/b1s.wav', tono:false},
    {tecla: 'mi', sonido:'./wav/c1.wav', tono:true},
    {tecla: 'fa', sonido:'./wav/c2.wav', tono:true},
    {tecla: 'do', sonido:'./wav/c1s.wav', tono:false},
    {tecla: 'sol',sonido:'./wav/d1.wav',tono:true},
    {tecla: 'do', sonido:'./wav/d1s.wav', tono:false},
    {tecla: 'la', sonido:'./wav/f1s.wav', tono:false},
    {tecla: 'do', sonido:'./wav/g1s.wav', tono:false},
    {tecla: 'si', sonido:'./wav/g1.wav', tono:true}
    
    
]

function elpiano () {
    let listateclas = document.getElementById('teclaspiano');
    for (let index = 0; index < teclasdepiano.length; index++) {
        listateclas.onclick=function() {
       this.teclasdepiano[index].tecla
       this.teclasdepiano[index].sonido
       this.teclasdepiano[index].tono

       alert(this.getAttribute(teclasdepiano))
        
    }
}
}
elpiano(piano);


