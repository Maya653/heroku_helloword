function actualizarContacto() {
    const email = document.getElementById('actualizarEmail').value;
    const nombre = prompt("Ingrese el nuevo nombre del contacto:");
    const telefono = prompt("Ingrese el nuevo teléfono del contacto:");

    fetch(`https://heroku-maya653-a4efb34028f5.herokuapp.com/contactos/${email}`, {
        method: "PUT",
        headers: {
            "Content-Type": "application/json",
        },
        body: JSON.stringify({ "nombre": nombre, "telefono": telefono }),
    })
        .then(response => response.json())
        .then(data => mostrarResultado(data.mensaje))
        .catch(error => console.error('Error:', error));
}