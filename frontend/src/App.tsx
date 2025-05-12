import { useState, useEffect } from "react";
import { useUser } from "./hooks/useUser";

function App() {
  const { nombre, setNombre, mensaje, error, manejarEnvio } = useUser();
  const [isHovered, setIsHovered] = useState(false);
  const [inputFocused, setInputFocused] = useState(false);

  // Efecto de confeti al éxito
  useEffect(() => {
    if (mensaje) {
      import("canvas-confetti").then((confetti) => {
        confetti.default({
          particleCount: 100,
          spread: 70,
          origin: { y: 0.6 },
          colors: ["#a855f7", "#ec4899", "#6366f1"],
        });
      });
    }
  }, [mensaje]);

  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gradient-to-br from-indigo-200 via-purple-100 to-pink-200 text-center px-4">
      {/* Título con animación */}
      <h1 className="text-4xl font-bold mb-8 text-transparent bg-clip-text bg-gradient-to-r from-indigo-600 to-purple-600 animate-float">
        Validador de Nombre
      </h1>

      {/* Tarjeta Glass con efecto hover */}
      <div
        className={`glass-card bg-white/20 backdrop-blur-lg p-8 rounded-2xl shadow-xl w-full max-w-md transition-all duration-500 ${
          isHovered ? "shadow-indigo-300/30" : "shadow-purple-300/20"
        }`}
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
      >
        <div className="relative mb-6">
          <input
            type="text"
            value={nombre}
            onChange={(e) => setNombre(e.target.value)}
            onFocus={() => setInputFocused(true)}
            onBlur={() => setInputFocused(false)}
            className={`glass-input bg-white/40 border-2 ${
              inputFocused ? "border-indigo-400/80" : "border-white/30"
            } p-4 rounded-xl w-full focus:outline-none placeholder-indigo-300/80 transition-all duration-300`}
            placeholder="Ingresa tu nombre"
          />
          {/* Efecto de onda al hacer focus (como el Material Design) */}
          {inputFocused && (
            <div className="absolute inset-0 rounded-xl pointer-events-none border-2 border-indigo-400/50 animate-ping-once" />
          )}
        </div>

        <button
          onClick={manejarEnvio}
          className={`glass-button relative overflow-hidden bg-gradient-to-r from-indigo-500/90 to-purple-500/90 text-white px-8 py-3 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-[1.02] group`}
        >
          {/* Efecto de brillo al hacer hover */}
          <span className="absolute inset-0 bg-white/20 group-hover:bg-white/30 transition-all duration-500 transform group-hover:scale-150 opacity-0 group-hover:opacity-100 rounded-full" />
          <span className="relative z-10 flex items-center justify-center gap-2">
            Enviar
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5 group-hover:translate-x-1 transition-transform"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M13 7l5 5m0 0l-5 5m5-5H6"
              />
            </svg>
          </span>
        </button>
      </div>

      {/* Notificaciones con iconos animados */}
      {error && (
        <div className="glass-notification bg-red-400/20 backdrop-blur-lg border-l-4 border-red-500 text-black p-5 rounded-xl mt-6 max-w-md animate-fade-in flex items-start gap-3">
          <div className="animate-shake">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-6 w-6"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z"
              />
            </svg>
          </div>
          <div>
            <p className="font-medium">{error}</p>
            <p className="text-sm opacity-80 mt-1">
              Intenta con un nombre válido
            </p>
          </div>
        </div>
      )}

      {mensaje && (
        <div className="glass-notification bg-green-400/20 backdrop-blur-lg border-l-4 border-green-500 text-black p-5 rounded-xl mt-6 max-w-md animate-fade-in flex items-start gap-3">
          <div className="animate-bounce">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-6 w-6"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"
              />
            </svg>
          </div>
          <div>
            <p className="font-medium">{mensaje}</p>
            <p className="text-sm opacity-80 mt-1">¡Nombre válido!</p>
          </div>
        </div>
      )}
    </div>
  );
}

export default App;
