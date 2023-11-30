function buscarPorEmail() {
    const email = document.getElementById('buscarEmail').value;
    fetch(`https://heroku-maya653-a4efb34028f5.herokuapp.com/contactos/${email}`)
        .then(response => {
            if (!response.ok) {
                throw new Error('No se encontraron resultados para ese email.');
            }
            return response.json();
        })
        .then(data => {
            const contactosDiv = document.getElementById('resultadoBusqueda');
            contactosDiv.innerHTML = '<h2>Resultado de búsqueda:</h2>';

            if (data.email) {
                contactosDiv.innerHTML += `<p>Nombre: ${data.nombre}<br>Email: ${data.email}<br>Teléfono: ${data.telefono}</p>`;
            } else {
                contactosDiv.innerHTML += '<p>No se encontraron resultados para ese email.</p>';
            }
        })
        .catch(error => console.error('Error:', error));
}