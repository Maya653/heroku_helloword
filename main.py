import os
from flask import Flask, render_template
from flask_cors import CORS  # Importa el módulo CORS desde flask_cors


app = Flask(__name__)
CORS(app)

CORS(app, resources={r"/api/*": {"origins": "https://contactos-frontend-6d58a4eb9f51.herokuapp.com"}})


@app.route("/",  methods=["GET"])
def index():
    return render_template('index.html')

@app.route("/listar", methods=["GET"])
def listar():
    # Lógica para listar contactos
    return render_template('listar.html')

@app.route("/actualizar", methods=["GET"])
def actualizar():
    # Lógica para actualizar contactoss
    return render_template('actualizar.html')

@app.route("/eliminar", methods=["GET"])
def eliminar():
    # Lógica para eliminar contactos
    return render_template('eliminar.html')

@app.route("/buscar", methods=["GET"])
def buscar():
    # Lógica para buscar contactos
    return render_template('buscar.html')

@app.route("/crear", methods=["GET"])
def crear():
    # Lógica para crear contactos
    return render_template('crear.html')


if __name__ == '__main__':
    app.run(debug=True, host='0.0.0.0', port=int(os.environ.get('PORT', 5000)))
