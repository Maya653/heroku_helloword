async function buscarPorEmail() {
    try {
        const emailInput = document.getElementById('buscarEmail');
        const contactosDiv = document.getElementById('resultadoBusqueda');

        // Verificar si el elemento 'buscarEmail' existe
        if (!emailInput) {
            console.error('Elemento con ID "buscarEmail" no encontrado.');
            return;
        }

        const email = emailInput.value;

        // Verificar si el email no está vacío
        if (!email.trim()) {
            console.error('Por favor, ingrese un email antes de buscar.');
            return;
        }

        const response = await fetch(`https://contactos-backen-b4d88f351253.herokuapp.com/contactos/${email}`);

        if (!response.ok) {
            throw new Error('No se encontraron resultados para ese email.');
        }

        const data = await response.json();

        // Limpiar el contenido existente antes de agregar nuevos elementos
        contactosDiv.innerHTML = '';

        contactosDiv.innerHTML += '<h2>Resultado de búsqueda:</h2>';

        if (data.email) {
            contactosDiv.innerHTML += `<p>Nombre: ${data.nombre}<br>Email: ${data.email}<br>Teléfono: ${data.telefono}</p>`;
        } else {
            contactosDiv.innerHTML += '<p>No se encontraron resultados para ese email.</p>';
        }
    } catch (error) {
        console.error('Error:', error);
    }
}
function regresar() {
    window.history.back();
}

