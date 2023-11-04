function getAll() {
    var request = new XMLHttpRequest();
    request.open('GET', 'http://localhost:8000/contactos');
    request.send();

    request.onload = function() {
        if (request.status === 200) {
            const response = JSON.parse(request.responseText);
            console.log('json:', response);

            const tbody_contactos = document.getElementById('tbody_contactos');

            response.forEach(contacto => {
                const tr = document.createElement('tr');
                const td_email = document.createElement('td');
                const td_nombre = document.createElement('td');
                const td_telefono = document.createElement('td');

                td_email.innerHTML = contacto.email;
                td_nombre.innerHTML = contacto.nombre;
                td_telefono.innerHTML = contacto.telefono;

                tr.appendChild(td_email);
                tr.appendChild(td_nombre);
                tr.appendChild(td_telefono);

                tbody_contactos.appendChild(tr);
            });
        } else {
            console.error('Error al obtener datos. Estado:', request.status);
        }
    };
}
