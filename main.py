import os
from flask import Flask, render_template, request, redirect, url_for, session
from flask_cors import CORS  # Importa el módulo CORS desde flask_cors


app = Flask(__name__)
app.secret_key = "BHzIsCEJ3Sww9zQTVFp5mgRkKlXOdnmgc8jXF4Yh24s"  # Cambia esto por una clave secreta más segura

CORS(app, resources={r"/api/*": {"origins": ["https://contactos-frontend-6d58a4eb9f51.herokuapp.com", "https://contactos-backen-b4d88f351253.herokuapp.com"] }})

@app.route("/login", methods=["GET"])
def login_page():
    return render_template('login.html')


def login():
    if request.method == "POST":
        # Lógica para validar el formulario de login
        username = request.form.get("username")
        password = request.form.get("password")

        # Validar las credenciales (puedes usar tu lógica de autenticación aquí)
        # Por ahora, solo verificaré que haya un username y un password no vacíos
        if username and password:
            # Almacena el username en la sesión (simulando un usuario autenticado)
            session["username"] = username
            return redirect(url_for("index"))
        return render_template("login.html")    


    # Renderiza la página de login
    return render_template("login.html")
@app.route("/",  methods=["GET"])
def index():
    return render_template('index.html')

@app.route("/listar", methods=["GET"])
def listar():
    # Lógica para listar contactos
    return render_template('listar.html')

@app.route("/actualizar", methods=["GET", "PUT"])
def actualizar():
    # Lógica para actualizar contactoss
    return render_template('actualizar.html')

@app.route("/eliminar", methods=["GET", "DELETE"])
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
    app.run(debug=True, host='0.0.0.0', port=int(os.environ.get('PORT', 5000)))
