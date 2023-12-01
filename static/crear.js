async function crearContacto() {
    try {
        const email = prompt("Ingrese el email del nuevo contacto:");
        const nombre = prompt("Ingrese el nombre del nuevo contacto:");
        const telefono = prompt("Ingrese el teléfono del nuevo contacto:");

        const response = await fetch('http://localhost:8000/contactos', {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify({ email, nombre, telefono }),
        });

        const data = await response.json();
        console.log(data);
    } catch (error) {
        console.error('Error:', error);
    }
}