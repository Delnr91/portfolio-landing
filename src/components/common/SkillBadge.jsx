import React from 'react'; // Importar React
import { Code } from 'lucide-react'; // Importar el icono 'Code' como fallback por si no se pasa un icono específico

/**
 * Componente para mostrar una habilidad o tecnología con un icono.
 * @param {object} props - Propiedades del componente.
 * @param {React.ElementType} [props.icon] - Componente de icono a mostrar (de lucide-react). Si no se proporciona, usa el icono 'Code'.
 * @param {string} props.name - Nombre de la habilidad/tecnología.
 * @returns {JSX.Element} - Badge de habilidad estilizado.
 */
const SkillBadge = ({ icon: Icon, name }) => (
  // Contenedor principal del badge con estilos de fondo, borde, sombra y efectos hover
  <div className="flex flex-col items-center p-4 bg-gray-800 rounded-lg shadow-sm hover:shadow-md hover:bg-gray-700 transition duration-300 border border-gray-700">
    {/* Renderiza el icono pasado como prop 'icon'. Si no se pasa ninguno (Icon es null o undefined), usa el icono 'Code' importado como fallback. */}
    {Icon ? <Icon className="w-10 h-10 mb-2 text-cyan-400" /> : <Code className="w-10 h-10 mb-2 text-cyan-400" />}
    {/* Nombre de la habilidad/tecnología */}
    <span className="text-sm font-medium text-stone-300 text-center">{name}</span>
  </div>
);

// Exporta el componente para usarlo en TechStack
export default SkillBadge;
