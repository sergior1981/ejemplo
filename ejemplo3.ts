

interface Persona{
    nombre: string;
    apellido: string;
}

function example (person: Persona){
    return "Hola, " + person.nombre+" "+ person.apellido;
}
let user ={nombre: "Hernan", apellido: "Carrillo"}
document.body.innerHTML=example(user);
