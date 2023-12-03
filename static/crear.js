async function crearContacto() {
    try {
        const email = prompt("Ingrese el email del nuevo contacto:");
        const nombre = prompt("Ingrese el nombre del nuevo contacto:");
        const telefono = prompt("Ingrese el teléfono del nuevo contacto:");

        const contactosDiv = document.getElementById('resultadoBusqueda');

        const response = await fetch('https://contactos-backen-b4d88f351253.herokuapp.com/contactos', {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify({ email, nombre, telefono }),
        });

        const data = await response.json();
        console.log(data);

        // Mostrar el resultado en el elemento con id 'resultadoBusqueda'
        contactosDiv.innerHTML = `
            <p>Resultado de la creación:</p>
            <p>Email: ${data.email}</p>
            <p>Nombre: ${data.nombre}</p>
            <p>Teléfono: ${data.telefono}</p>
        `;
    } catch (error) {
        console.error('Error:', error);
    }
}
function regresar() {
    window.history.back();
}
