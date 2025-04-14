import React from 'react'; // Importar React (aunque opcional en nuevas versiones, es buena práctica)

/**
 * Componente para Títulos de Sección reutilizables.
 * Aplica estilos consistentes y fuente serif a los títulos principales.
 * @param {object} props - Propiedades del componente.
 * @param {React.ReactNode} props.children - Contenido del título (texto).
 * @returns {JSX.Element} - Elemento h2 estilizado.
 */
const SectionTitle = ({ children }) => (
  // Fuente Serif aplicada mediante clase 'font-serif' (requiere configuración en tailwind.config.js)
  // Estilos de tamaño, peso, alineación, margen y color definidos con Tailwind
  <h2 className="text-3xl md:text-4xl font-bold font-serif text-center mb-8 md:mb-12 text-stone-100">{children}</h2>
);

// Exporta el componente para poder importarlo en otros archivos
export default SectionTitle;
