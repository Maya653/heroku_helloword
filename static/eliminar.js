async function eliminarContacto() {
    try {
        const email = prompt("Ingrese el email del contacto a eliminar:");

        const response = await fetch(`http://localhost:8000/contactos/${email}`, {
            method: "DELETE",
        });

        const data = await response.json();
        console.log(data);
    } catch (error) {
        console.error('Error:', error);
    }
}
