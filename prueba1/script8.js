/*let clase = [{ id:1,nombre:'jose',edad:28, showInfo:function(){
    return '[' +this.id+']'+this.nombre+', '+this.edad}}

,{ id:2,nombre:'juan',edad:20,showInfo:function(){return '[' +this.id+']'+this.nombre+', '+this.edad}},

{ id:3,nombre:'javi',edad:27,showInfo:function(){return '[' +this.id+']'+this.nombre+', '+this.edad}}];*/
 


//for (let i =0; i < clase.length; i++) {

 // console.log(clase[i].showInfo());

  
//}

//una clase es una plantilla para definir objetos

//ES5  las clases se definen mediante funciones

/*let Persona = function(id, nom, ed, g){
    this.id=id;
    this.nombre=nom;
    this.edad=ed;
    this.genero=g;

    this.showInfo=function(){
return '[' +this.id+'] '+this.nombre+', '+this.edad+', '+this.genero;
    
    }
}

let ricard=new Persona(1,'ricard',32,'M');

console.log(ricard);

let clase2 = [
    new Persona(1,'jose',28,'M'),
    new Persona(2,'Maria',29,'F'),
    new Persona(3,'javi',38,'m'),
];

for (let i =0; i < clase2.length; i++) {

    console.log(clase2[i].showInfo());

}
*/
//ES6

class Persona{
    constructor(id, nom, ed, g){

    this.id=id;
    this.nombre=nom;
    this.edad=ed;
    this.genero=g;
    }
    showInfo(){
        return '[' +this.id+'] '+this.nombre+', '+this.edad+', '+this.genero;
    }
}

let clase2 = [
    new Persona(1,'jose',28,'M'),
    new Persona(2,'Maria',29,'F'),
    new Persona(3,'javi',38,'M'),
     ];

for (let i =0; i < clase2.length; i++) {

    console.log(clase2[i].showInfo());
}