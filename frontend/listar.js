
function listarContactos() {
    fetch('https://heroku-maya653-a4efb34028f5.herokuapp.com/contactos') // Hacer una solicitud GET al backend
        .then(response => response.json())
        .then(data => {
            const contactosDiv = document.getElementById('resultadoBusqueda');
            contactosDiv.innerHTML = '<h2>Listado de contactos:</h2><ul>';

            data.forEach(contacto => {
                contactosDiv.innerHTML += `<li>${contacto.nombre} - ${contacto.email} - ${contacto.telefono}</li>`;
            });

            contactosDiv.innerHTML += '</ul>';
        })
        .catch(error => console.error('Error:', error));
}
