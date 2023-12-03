
// Define la URL del API
const apiUrl = "https://contactos-backen-b4d88f351253.herokuapp.com/contactos";

// Función asincrónica para listar contactos
async function listarContactos() {
    try {
        // Realiza una solicitud GET al API usando fetch
        const response = await fetch(apiUrl, { method: 'GET', mode: 'cors' });

        // Parsea la respuesta como JSON
        const data = await response.json();

        // Obtiene el elemento con el id 'resultadoBusqueda'
        const contactosDiv = document.getElementById('resultadoBusqueda');

        // Construye la lista de contactos en el elemento HTML
        contactosDiv.innerHTML = '<h2>Listado de contactos:</h2><ul>';

        if (data.length > 0) {
            // Si hay contactos, los muestra en la lista
            data.forEach(contacto => {
                contactosDiv.innerHTML += `<li>${contacto.nombre} - ${contacto.email} - ${contacto.telefono}</li>`;
            });
        } else {
            // Si no hay contactos, muestra un mensaje
            contactosDiv.innerHTML += '<p>No hay contactos para mostrar.</p>';
        }

        contactosDiv.innerHTML += '</ul>';
    } catch (error) {
        // Captura y muestra cualquier error en la consola
        console.error('Error:', error);
    }
    
}
function regresar() {
    window.history.back();
}
