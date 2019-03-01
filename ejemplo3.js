function example(person) {
    return "Hola, " + person.nombre + " " + person.apellido;
}
var user = { nombre: "Hernan", apellido: "Carrillo" };
document.body.innerHTML = example(user);
