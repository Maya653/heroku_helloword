import os
from flask import Flask, render_template, request, redirect, url_for, session
from flask_cors import CORS

app = Flask(__name__)

# Utiliza una variable de entorno para la clave secreta
app.secret_key = os.environ.get("FLASK_SECRET_KEY", "clave_secreta_predeterminada")

# Configura CORS para permitir solicitudes desde dominios específicos
CORS(app, resources={r"/api/*": {"origins": ["https://contactos-frontend-6d58a4eb9f51.herokuapp.com", "https://contactos-backen-b4d88f351253.herokuapp.com"]}})

# Simulación de una base de datos de usuarios (reemplázalo con una autenticación real)
usuarios_registrados = {"maya@gmail.com": "1234"}

@app.route("/login", methods=["GET", "POST"])
def login():
    if request.method == "POST":
        # Lógica para validar el formulario de login
        username = request.form.get("username")
        password = request.form.get("password")

        # Validar las credenciales (simulación, reemplázalo con autenticación real)
        if username in usuarios_registrados and usuarios_registrados[username] == password:
            # Almacena el username en la sesión (simulando un usuario autenticado)
            session["username"] = username
            return redirect(url_for("index"))

    # Renderiza la página de login
    return render_template("login.html")


@app.route("/", methods=["GET"])
def index():
    # Verifica si el usuario está autenticado antes de mostrar la página principal
    if "username" in session:
        return render_template('index.html')
    else:
        return redirect(url_for("login"))


@app.route("/listar", methods=["GET"])
def listar():
    # Lógica para listar contactos
    return render_template('listar.html')


@app.route("/actualizar", methods=["GET", "POST"])
def actualizar():
    # Lógica para actualizar contactos
    return render_template('actualizar.html')


@app.route("/eliminar", methods=["GET", "POST"])
def eliminar():
    # Lógica para eliminar contactos
    return render_template('eliminar.html')


@app.route("/buscar", methods=["GET"])
def buscar():
    # Lógica para buscar contactos
    return render_template('buscar.html')


@app.route("/crear", methods=["GET", "POST"])
def crear():
    # Lógica para crear contactos
    return render_template('crear.html')


if __name__ == '__main__':
    # Configura la aplicación para ejecutarse en el puerto proporcionado por Heroku o en el puerto 5000 por defecto
    app.run(debug=True, host='0.0.0.0', port=int(os.environ.get('PORT', 5000)))
