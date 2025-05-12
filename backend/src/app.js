import express from "express";
const app = express();
const PORT = process.env.PORT || 3000;

app.use(express.json());
app.use((req, res, next) => {
  res.header("Access-Control-Allow-Origin", "*");
  next();
});

const usuariosValidos = ["Maxi", "Tati", "Mauri", "Anto"];

// Validar Nombre
app.get("/validar/:nombre", (req, res) => {
  const nombre = req.params.nombre;
  const esValido = usuariosValidos.includes(nombre);

  res.json({
    nombre: esValido,
    mensaje: esValido ? "El nombre es válido" : "El nombre no es válido",
  });
});

// Saludar con el nombre Validado
app.get("/saludar/:nombre", (req, res) => {
  const nombre = req.params.nombre;
  res.json({
    mensaje: `Hola, ¿Cómo estás? ${nombre}`,
  });
});

app.listen(PORT, () => {
  console.log(`Servidor corriendo en el puerto: ${PORT}`);
});
