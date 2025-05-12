# TP2 - ReactJS + Node.js

Este proyecto consiste en una aplicación simple que permite al usuario ingresar su nombre, validarlo contra una lista definida en el backend, y recibir un saludo personalizado si el nombre es válido.

## 🛠️ Tecnologías usadas

- **Frontend:**

  - ReactJS + TypeScript
  - Vite
  - TailwindCSS
  - Canvas-Confetti (Animaciones de confetti)

- **Backend:**
  - Node.js
  - Express.js

---

## 📂 Estructura del proyecto

```
📁 backend/
│   └── src/
│       ├── app.js
📁 frontend/
│   ├── src/
│   │   ├── api/
│   │   │   └── userApi.ts
│   │   ├── hooks/
│   │   │   └── useUser.ts
│   │   ├── App.tsx
│   │   └── main.tsx
```

---

## 🚀 Instrucciones para ejecutar

### 1. Clonar el repositorio

```bash
git clone https://github.com/mau-jsx/Trabajo_Practico_N-_2
cd tu-repo
```

### 2. Ejecutar el backend

```bash
cd backend
npm install
node app.js
```

Esto levantará el servidor en `http://localhost:3000`.

---

### 3. Ejecutar el frontend

```bash
cd frontend
npm install
npm run dev
```

Esto levantará el frontend normalmente en `http://localhost:5173`.

---

## 🔍 Funcionamiento

1. El usuario ingresa su nombre en un campo de texto.
2. Al hacer clic en "Enviar":
   - Se hace una solicitud GET a `/validar/:nombre`.
   - Si el nombre **no es válido**, se muestra un mensaje de error.
   - Si el nombre **es válido**, se hace otra solicitud GET a `/saludar/:nombre`.
   - Se muestra el saludo devuelto por el servidor.

---

## ✅ Nombres válidos (definidos en el backend)

```js
["Maxi", "Tati", "Mauri", "Anto"];
```

---
