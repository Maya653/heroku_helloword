// Función para mostrar mensajes en la interfaz de usuario
function mostrarMensaje(mensaje) {
    alert(mensaje); // Puedes personalizar esto según tu interfaz
}

// Función asincrónica para eliminar un contacto
async function eliminarContacto() {
    try {
        const email = document.getElementById('eliminarEmail').value;
        const contactosDiv = document.getElementById('resultadoBusqueda');

        const response = await fetch(`https://contactos-backen-b4d88f351253.herokuapp.com/contactos/${email}`, {
            method: "DELETE",
        });

        if (response.status === 204) {
            // Éxito al eliminar el contacto
            mostrarMensaje('Contacto eliminado exitosamente.');

            // Limpiar el contenido del elemento con id 'resultadoBusqueda'
            contactosDiv.innerHTML = '';
        } else {
            // Error al intentar eliminar el contacto
            mostrarMensaje('Error al intentar eliminar el contacto.');
        }
    } catch (error) {
        console.error('Error:', error);
    }
}

