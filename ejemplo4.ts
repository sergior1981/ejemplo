//clase
class Estudiante {
    nombreCompleto: string;
    constructor (public nombre: string, public apellido: string){
        this.nombreCompleto=nombre + " "+ apellido;
    }
}
//función
interface Persona{
    nombre: string;
    apellido: string;
}

function example (person: Persona){
    return "Hola, " + person.nombre+" "+ person.apellido;
}
let user = new Estudiante ("Sergio","Rossetti");
document.body.innerHTML=example(user);
