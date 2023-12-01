async function buscarPorEmail() {
    try {
        const email = document.getElementById('buscarEmail').value;
        const response = await fetch(`http://localhost:8000/contactos/${email}`);

        if (!response.ok) {
            throw new Error('No se encontraron resultados para ese email.');
        }

        const data = await response.json();
        const contactosDiv = document.getElementById('resultadoBusqueda');
        contactosDiv.innerHTML = '<h2>Resultado de búsqueda:</h2>';

        if (data.email) {
            contactosDiv.innerHTML += `<p>Nombre: ${data.nombre}<br>Email: ${data.email}<br>Teléfono: ${data.telefono}</p>`;
        } else {
            contactosDiv.innerHTML += '<p>No se encontraron resultados para ese email.</p>';
        }
    } catch (error) {
        console.error('Error:', error);
    }
}