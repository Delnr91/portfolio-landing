import React from 'react'; // Importar React

/**
 * Componente Footer (Pie de Página).
 * Muestra información de copyright y un pequeño detalle visual.
 * @returns {JSX.Element} - Footer completo.
 */
const Footer = () => (
  // Contenedor del footer con estilos de fondo (muy oscuro) y texto
  <footer className="bg-gray-950 text-stone-500 py-8 px-4">
    {/* Contenedor interno centrado */}
    <div className="container mx-auto text-center">
      {/* Texto de Copyright (¡Reemplazar 'Tu Nombre'!) */}
      <p className="text-sm">© {new Date().getFullYear()} Tu Nombre. Todos los derechos reservados.</p>
      {/* Crédito opcional */}
      <p className="text-xs mt-2">Construido con React y Tailwind CSS.</p>
      {/* Pequeño detalle visual con gradiente */}
      <div className="w-16 h-1 bg-gradient-to-r from-gray-800 via-cyan-500 to-gray-800 mx-auto mt-4 rounded"></div>
    </div>
  </footer>
);

// Exporta el componente para usarlo en App.jsx
export default Footer;
