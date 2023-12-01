const apiUrl = "http://localhost:8000/contactos";

async function listarContactos() {
    try {
        const response = await fetch(apiUrl, {method: 'GET', mode: 'cors'});
        const data = await response.json();

        const contactosDiv = document.getElementById('resultadoBusqueda');
        contactosDiv.innerHTML = '<h2>Listado de contactos:</h2><ul>';

        if (data.length > 0) {
            data.forEach(contacto => {
                contactosDiv.innerHTML += `<li>${contacto.nombre} - ${contacto.email} - ${contacto.telefono}</li>`;
            });
        } else {
            contactosDiv.innerHTML += '<p>No hay contactos para mostrar.</p>';
        }

        contactosDiv.innerHTML += '</ul>';
    } catch (error) {
        console.error('Error:', error);
    }
}
