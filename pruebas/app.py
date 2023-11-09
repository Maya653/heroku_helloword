from flask import Flask

app = Flask(__name__)

@app.route("/")
def index():
    """Ruta para la página principal"""
    return "Hola Mundo"

@app.route("/buscar", methods=["GET", "POST"])
def buscar():
    """Ruta para la página de búsqueda"""
    return "Página de búsqueda"

if __name__ == '__main__':
    app.run(debug=True)
