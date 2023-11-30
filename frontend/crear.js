function crearContacto() {
    const email = prompt("Ingrese el email del nuevo contacto:");
    const nombre = prompt("Ingrese el nombre del nuevo contacto:");
    const telefono = prompt("Ingrese el teléfono del nuevo contacto:");

    fetch("https://heroku-maya653-a4efb34028f5.herokuapp.com/contactos", {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
        },
        body: JSON.stringify({ email, nombre, telefono }),
    })
        .then(response => response.json())
        .then(data => console.log(data))
        .catch(error => console.error('Error:', error));
}