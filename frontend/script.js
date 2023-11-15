function listarContactos() {
    fetch('https://heroku-maya653-a4efb34028f5.herokuapp.com/contactos') // Hacer una solicitud GET al backend
        .then(response => response.json())
        .then(data => {
            const contactosDiv = document.getElementById('resultadoBusqueda');
            contactosDiv.innerHTML = '<h2>Listado de contactos:</h2><ul>';

            data.forEach(contacto => {
                contactosDiv.innerHTML += `<li>${contacto.nombre} - ${contacto.email} - ${contacto.telefono}</li>`;
            });

            contactosDiv.innerHTML += '</ul>';
        })
        .catch(error => console.error('Error:', error));
}

function buscarPorEmail() {
    const email = document.getElementById('buscarEmail').value;
    fetch(`https://heroku-maya653-a4efb34028f5.herokuapp.com/contactos/${email}`)
        .then(response => {
            if (!response.ok) {
                throw new Error('No se encontraron resultados para ese email.');
            }
            return response.json();
        })
        .then(data => {
            const contactosDiv = document.getElementById('resultadoBusqueda');
            contactosDiv.innerHTML = '<h2>Resultado de búsqueda:</h2>';

            if (data.email) {
                contactosDiv.innerHTML += `<p>Nombre: ${data.nombre}<br>Email: ${data.email}<br>Teléfono: ${data.telefono}</p>`;
            } else {
                contactosDiv.innerHTML += '<p>No se encontraron resultados para ese email.</p>';
            }
        })
        .catch(error => console.error('Error:', error));
}
    // Función para crear un nuevo contacto
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
// funcion para actualizar un conracto
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


// Función para eliminar un contacto
function eliminarContacto() {
    const email = prompt("Ingrese el email del contacto a eliminar:");

    fetch(`https://heroku-maya653-a4efb34028f5.herokuapp.com/contactos/${email}`, {
        method: "DELETE",
    })
        .then(response => response.json())
        .then(data => console.log(data))
        .catch(error => console.error('Error:', error));
}