async function actualizarContacto() {
    try {
        const email = document.getElementById('actualizarEmail').value;
        const nuevoNombre = document.getElementById('nuevoNombre').value;
        const nuevoTelefono = document.getElementById('nuevoTelefono').value;

        const response = await fetch(`http://localhost:8000/contactos/${email}`, {
            method: "PUT",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify({ "nombre": nuevoNombre, "telefono": nuevoTelefono }),
        });

        if (response.ok) {
            const data = await response.json();
            // Puedes mostrar el resultado directamente o utilizar tu función mostrarResultado
            console.log(data.mensaje);
        } else {
            // Puedes manejar el error aquí o utilizar tu función mostrarResultado
            console.error('Error al actualizar el contacto.');
        }
    } catch (error) {
        console.error('Error:', error);
    }
}
