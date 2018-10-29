let saludabtns=document.getElementsByClassName('saluda');
let saludaNames=document.getElementsByClassName('amigogame');
let borraramigo = document.getElementsByClassName('borra');

console.log(saludabtns);
console.log(saludaNames);
console.log(borraramigo);

for (let index = 0; index < saludabtns.length; index++) {
    saludabtns[index].onclick=function () {
       let name = this.getAttribute('data-name');
       let id = this.getAttribute('data-id');
       let infparrafo=document.getElementById(id).innerHTML;
        alert(infparrafo);
         removeElement(id);
    }
    
}



for (let index = 0; index < borraramigo.length; index++) {
    borraramigo[index].onclick = function () {
        let idp = this.getAttribute('data-idp');
        removeElement(idp);

    }

}
function removeElement(id) {
    var elem = document.getElementById(id);
    return elem.parentNode.removeChild(elem);
}

