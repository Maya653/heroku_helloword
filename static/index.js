// index.js
const express = require('express');
const path = require('path');
const app = express();

// Configuración de express y rutas aquí

const PORT = process.env.PORT || 3000;

app.listen(PORT, () => {
  console.log(`Servidor escuchando en el puerto ${PORT}`);
});
