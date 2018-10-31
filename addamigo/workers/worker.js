/*onmessage=function(mess){
    let text=mess.data;
    console.log(text);
    this.postMessage("*"+text+"*");

}
*/

onmessage=function(mess){
  
    let resultado=mess.data;
    let suma=0;
    for (let index = 0; index < resultado.length; index++) {
        suma = resultado[index]+suma;
        
    }
    
    this.postMessage("Resultado:"+suma);
    console.log(suma);
}
