import { useState } from "react";
import { validarNombre, saludar } from "../api/userApi";

export function useUser() {
  const [nombre, setNombre] = useState("");
  const [mensaje, setMensaje] = useState("");
  const [error, setError] = useState("");

  const manejarEnvio = async () => {
    setError("");
    setMensaje("");

    if (!nombre.trim()) {
      setError("Por favor, ingresa un nombre.");
      return;
    }

    try {
      const esValido = await validarNombre(nombre);
      console.log("¿Es válido?", esValido);

      if (!esValido) {
        setError("Nombre no válido.");
        return;
      }

      const saludo = await saludar(nombre);
      console.log("Saludo:", saludo);
      setMensaje(saludo);
    } catch (err) {
      console.error("Error al conectar con el backend:", err);
      setError("Ocurrió un error al conectar con el servidor.");
    }
  };

  return {
    nombre,
    setNombre,
    mensaje,
    error,
    manejarEnvio,
  };
}
