function getAll() {
    var request = new XMLHttpRequest();
    request.open('GET', "http://localhost:8000/contactos");
    request.send();

    request.onload = (e) => {
        const response = request.responseText;
        const contacts = JSON.parse(response);
        
        const tbody = document.getElementById("tbody_contactos");

        // Iterar sobre los contactos y crear una fila por cada uno
        contacts.forEach(contact => {
            var tr = document.createElement("tr");
            var td_email = document.createElement("td");
            var td_nombre = document.createElement("td");
            var td_telefono = document.createElement("td");

            td_email.textContent = contact.email;
            td_nombre.textContent = contact.nombre;
            td_telefono.textContent = contact.telefono;

            tr.appendChild(td_email);
            tr.appendChild(td_nombre);
            tr.appendChild(td_telefono);

            tbody.appendChild(tr);
        });
    };
};
