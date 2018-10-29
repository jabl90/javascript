
document.getElementById('M').onclick=function(){

  document.getElementById('par').innerHTML=document.getElementById('par').innerHTML.toUpperCase();

}


document.getElementById('minusculas').onclick=function(){

  document.getElementById('par').innerHTML=document.getElementById('par').innerHTML.toLowerCase();

}

document.getElementById('oracion').onclick = function () {
  var parraf = document.getElementById("par").innerHTML;
  let palabrasTransf = [];
  separat = parraf.split(" ");

  for (let index = 0; index < separat.length; index++) {

      palabrasTransf[index] = separat[index].toLowerCase().replace(separat[index].toLowerCase().charAt(0), separat[index].charAt(0).toUpperCase());

  }
  var palabrasTransfJunto = palabrasTransf.join(" ");
  // console.log(palabrasTransfJunto);

  document.getElementById("par").innerHTML = palabrasTransfJunto;
}