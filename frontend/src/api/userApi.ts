const API_URL = "http://localhost:3000";

export async function validarNombre(nombre: string): Promise<boolean> {
  const response = await fetch(`${API_URL}/validar/${nombre}`);
  const data = await response.json();
  return data.nombre;
}

export async function saludar(nombre: string): Promise<string> {
  const res = await fetch(`${API_URL}/saludar/${nombre}`);
  const data = await res.json();
  return data.mensaje;
}
