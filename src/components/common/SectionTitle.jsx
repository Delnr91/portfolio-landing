
import React from 'react';

/**
 * Componente para Títulos de Sección reutilizables.
 * Aplica estilos consistentes y fuente serif a los títulos principales.
 * @param {object} props - Propiedades del componente.
 * @param {React.ReactNode} props.children - Contenido del título (texto).
 * @returns {JSX.Element} - Elemento h2 estilizado.
 */
const SectionTitle = ({ children }) => (
  // Aseguramos que siempre sea 'text-center' y tenga un margen inferior consistente.
  <h2 className="text-3xl md:text-4xl font-bold font-serif text-center mb-8 md:mb-12 text-stone-100 dark:text-gray-800 transition-colors duration-500">{children}</h2>
);

export default SectionTitle;