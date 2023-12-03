async function actualizarContacto() {
    try {
        const email = document.getElementById('actualizarEmail').value;
        const nuevoNombre = document.getElementById('nuevoNombre').value;
        const nuevoTelefono = document.getElementById('nuevoTelefono').value;
        const contactosDiv = document.getElementById('resultadoBusqueda');

        const response = await fetch(`https://contactos-backen-b4d88f351253.herokuapp.com/contactos/${email}`, {
            method: "PUT",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify({ "nombre": nuevoNombre, "telefono": nuevoTelefono }),
        });

        if (response.ok) {  
            const data = await response.json();

            // Actualizar el contenido del elemento con id 'resultadoBusqueda'
            contactosDiv.innerHTML = `
                <p>Resultado de la actualización:</p>
                <p>ID: ${data.id}</p>
                <p>Email: ${data.email}</p>
                <p>Nombre: ${data.nombre}</p>
                <p>Teléfono: ${data.telefono}</p>
            `;

            console.log(data.mensaje);
        } else {
            // Puedes manejar el error aquí o utilizar tu función mostrarResultado
            console.error('Error al actualizar el contacto:', response.status, response.statusText);
            const data = await response.json();
            console.error('Detalles del error:', data);
        }
    } catch (error) {
        console.error('Error:', error);
    }
}
