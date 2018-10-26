let jose = {
    nombre:'jose',
    apellido:'barea',
    email:'jose.barealpz@gmail.com',
    edad:28,
    gustanvideojuegos: true,
    saludar: function(){
        return "Hello! This is " + this.nombre + " tengo "+ this.edad + " años y soy del Getafe";
    }
};

let paco = {
    nombre:'paco',
    apellido:'garcia',
    email:'paco.b@gmail.com',
    edad:40,
    gustanvideojuegos: false
};

/*
console.log(jose.nombre);
console.log('Apellido: ',jose.apellido);
console.log('Edad: ',jose.edad);
console.log(jose.saludar());

//console es un objeto
*/