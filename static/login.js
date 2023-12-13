function mostrarMensaje(mensaje) {
    alert(mensaje);
}

async function login() {
    try {
        const username = document.getElementById('username').value;
        const password = document.getElementById('password').value;
        const loginErrorDiv = document.getElementById('login-error');

        const response = await fetch('https://contactos-backen-b4d88f351253.herokuapp.com/token', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({
                username: username,
                password: password,
            }),
        });

        if (response.ok) {
            const data = await response.json();
            console.log('Respuesta del servidor:', data);

            // Almacena el token en localStorage o en una cookie (cambia según tus necesidades)
            localStorage.setItem('access_token', data.access_token);

            // Redirige a la página principal o realiza otras acciones necesarias
            window.location.href = '/';  // Cambia la URL según tu configuración
        } else {
            // Muestra un mensaje de error en el formulario
            const errorData = await response.json();
            console.error('Error al intentar iniciar sesión:', response.status, response.statusText);
            console.error('Detalles del error:', errorData);
            loginErrorDiv.textContent = 'Error al intentar iniciar sesión. Verifica tus credenciales.';
        }
    } catch (error) {
        console.error('Error:', error);
        loginErrorDiv.textContent = 'Ocurrió un error inesperado. Por favor, intenta nuevamente.';
    }
}

function regresar() {
    document.getElementById('username').value = '';
    document.getElementById('password').value = '';
    window.history.back();
}
