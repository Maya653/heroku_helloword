function getAll() {
    var request = new XMLHttpRequest();
    request.open('GET', "http://localhost:8000/contactos");
    request.send();

    request.onload = function() {
        const response = request.responseText;
        const json = JSON.parse(response);
        console.log("response", json);
        console.log("status_code:", request.status);

        const tbody_contactos = document.getElementById("tbody_contactos");
        var tr = document.createElement("tr");
        var td_email = document.createElement("td");
        var td_nombre = document.createElement("td");
        var td_telefono = document.createElement("td");

        td_email.textContent = json[0]["email"];
        td_nombre.textContent = json[0]["nombre"];
        td_telefono.textContent = json[0]["telefono"];

        tr.appendChild(td_email);
        tr.appendChild(td_nombre);
        tr.appendChild(td_telefono);

        tbody_contactos.appendChild(tr);
    };
}
