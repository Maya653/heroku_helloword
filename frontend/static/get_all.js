function getAll(){
	var request = new XMLHttpRequest;
	request.open('GET',"http//localhost:8000/contactos");
	request.send();

	request.onload = (e) => {
		const responce = request.responseText;
		const json = JSON.parse(responce);
		console.log("response"+ json.response);
        console.log("json:" +json);
        console.log("status_code: " + request.status);

        console.log("Email: " +json[0]["email"]);
        console.log("Nombre: " + json[0]["nombre"]);
        console.log("Telefono: " + json[0]["telefono"]);

        const tbody_contactos = document.getElementById("tybody_contactos");
        var tr = document.createElement("tr")
		var td_email = document.createElement("td");
		var id_nombre = document.createElement("td");
	
		td_email.innerHTML = json[0]["email"];
		td_nombre.innerHTML = json[0]["nombre"];
		td_telefono.innerHTML = json[0]["telefono"];
		
		
		tr.appendChild(td_email);
		tr.appendChild(td_nombre);
		tr.appendChild(td_telefono);

		tbody_contactos.appendChild(tr);
			
	};
};