var Estudiante = /** @class */ (function () {
    function Estudiante(nombre, apellido) {
        this.nombre = nombre;
        this.apellido = apellido;
        this.nombreCompleto = nombre + " " + apellido;
    }
    return Estudiante;
}());
function example(person) {
    return "Hola, " + person.nombre + " " + person.apellido;
}
var user = new Estudiante("Sergio", "Rossetti");
document.body.innerHTML = example(user);
