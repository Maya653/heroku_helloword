async function eliminarContacto() {
    try {
        const email = document.getElementById('eliminarEmail').value;

        const response = await fetch(`http://localhost:8000/contactos/${email}`, {
            method: "DELETE",
        });

        if (response.status === 204) {
            // Éxito al eliminar el contacto
            mostrarMensaje('Contacto eliminado exitosamente.');
        } else {
            // Error al intentar eliminar el contacto
            mostrarMensaje('Error al intentar eliminar el contacto.');
        }
    } catch (error) {
        console.error('Error:', error);
    }
}

function mostrarMensaje(mensaje) {
    // Mostrar el mensaje en un div con el id "mensajeEliminacion"
    const mensajeDiv = document.getElementById('mensajeEliminacion');
    mensajeDiv.textContent = mensaje;

    // Limpiar el mensaje después de unos segundos (opcional)
    setTimeout(() => {
        mensajeDiv.textContent = '';
    }, 3000); // 3000 milisegundos = 3 segundos
}
