function eliminarContacto() {
    const email = prompt("Ingrese el email del contacto a eliminar:");

    fetch(`https://heroku-maya653-a4efb34028f5.herokuapp.com/contactos/${email}`, {
        method: "DELETE",
    })
        .then(response => response.json())
        .then(data => console.log(data))
        .catch(error => console.error('Error:', error));
}