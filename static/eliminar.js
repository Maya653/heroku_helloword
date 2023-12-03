function mostrarMensaje(mensaje) {
    alert(mensaje); 
}

async function eliminarContacto() {
    try {
        const email = document.getElementById('eliminarEmail').value;
        const contactosDiv = document.getElementById('resultadoBusqueda');

        const response = await fetch(`https://contactos-backen-b4d88f351253.herokuapp.com/contactos/${email}`, {
            method: "DELETE",
        });

        if (response.status === 200) {
            // Éxito al eliminar el contacto (aunque el código sea 200)
            const data = await response.json();
            console.log('Respuesta del servidor:', data);
            mostrarMensaje('Contacto eliminado exitosamente.');

            // Limpiar el contenido del elemento con id 'resultadoBusqueda'
            contactosDiv.innerHTML = '';
        } else if (response.status === 204) {
            // Éxito al eliminar el contacto
            mostrarMensaje('Contacto eliminado exitosamente.');

            // Limpiar el contenido del elemento con id 'resultadoBusqueda'
            contactosDiv.innerHTML = '';
        } else {
            // Otros estados
            const data = await response.json();
            console.error('Error al intentar eliminar el contacto:', response.status, response.statusText);
            console.error('Detalles del error:', data);
            mostrarMensaje('Error al intentar eliminar el contacto.');
        }
    } catch (error) {
        console.error('Error:', error);
    }
}
function regresar() {
    window.history.back();
}
