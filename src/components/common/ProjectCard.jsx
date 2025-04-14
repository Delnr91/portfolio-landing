import React from 'react'; // Importar React
// eslint-disable-next-line no-unused-vars
import { motion } from 'framer-motion'; // Importar motion para animaciones
import { ExternalLink, Github } from 'lucide-react'; // Importar iconos necesarios
import Button from './Button'; // Importar el componente Button que acabamos de crear

/**
 * Componente para mostrar la tarjeta de un proyecto individual.
 * Incluye imagen, título, descripción, stack tecnológico y enlaces a demo/código.
 * @param {object} props - Propiedades del componente.
 * @param {string} props.title - Título del proyecto.
 * @param {string} props.description - Descripción del proyecto.
 * @param {string} props.imageUrl - URL de la imagen del proyecto.
 * @param {string[]} props.techStack - Array de strings con las tecnologías usadas.
 * @param {string} [props.liveUrl] - URL de la demo en vivo (opcional).
 * @param {string} [props.repoUrl] - URL del repositorio de código (opcional).
 * @returns {JSX.Element} - Tarjeta de proyecto estilizada y animada.
 */
const ProjectCard = ({ title, description, imageUrl, techStack, liveUrl, repoUrl }) => (
  // Animación de entrada con Framer Motion
  <motion.div
    initial={{ opacity: 0, y: 20 }} // Estado inicial
    whileInView={{ opacity: 1, y: 0 }} // Estado animado al entrar en vista
    viewport={{ once: true, amount: 0.3 }} // Configuración de la vista para la animación
    transition={{ duration: 0.5 }} // Duración de la animación
    // Estilos de la tarjeta: fondo, bordes redondeados, sombra, transformación en hover, bordes, hover de borde, grupo para efectos internos
    className="bg-gray-800 rounded-lg shadow-lg overflow-hidden transform hover:scale-[1.02] transition duration-300 ease-in-out border border-gray-700 hover:border-cyan-400 group"
  >
    {/* Contenedor para la imagen con overflow hidden para controlar el escalado */}
    <div className="overflow-hidden">
        {/* Recordatorio: Usar imágenes de alta calidad y atractivas para cada proyecto */}
        <img
          // Usa la URL proporcionada o un placeholder si no hay URL
          src={imageUrl || 'https://placehold.co/600x400/1f2937/9ca3af?text=Imagen+Proyecto'}
          alt={`[Imagen de ${title || 'Proyecto'}]`} // Texto alternativo descriptivo
          // Estilos de la imagen: ancho completo, altura fija, ajuste de objeto, transición y escalado en hover (usando 'group-hover')
          className="w-full h-48 object-cover transition-transform duration-500 ease-in-out group-hover:scale-110"
          // Manejador de error para mostrar un placeholder si la imagen falla
          onError={(e) => { e.target.onerror = null; e.target.src='https://placehold.co/600x400/1f2937/9ca3af?text=Error+Imagen'; }}
        />
    </div>
    {/* Contenedor para el contenido textual de la tarjeta */}
    <div className="p-6">
      {/* Título del proyecto */}
      <h3 className="text-xl font-semibold font-serif mb-2 text-stone-100">{title || 'Nombre del Proyecto'}</h3>
      {/* Descripción del proyecto */}
      {/* Recordatorio: Descripción clara y concisa. Incluir: Problema resuelto, tu rol específico, impacto/resultado y aprendizaje clave. */}
      <p className="text-stone-400 mb-4 text-sm">{description || 'Descripción detallada del proyecto aquí...'}</p>
      {/* Sección de Tecnologías */}
      <div className="mb-4">
        <h4 className="font-semibold text-sm mb-1 text-stone-300">Tecnologías:</h4>
        {/* Mapeo del array techStack para mostrar badges */}
        <div className="flex flex-wrap gap-2">
          {/* Usa el array techStack o uno por defecto si no se proporciona */}
          {(techStack && techStack.length > 0 ? techStack : ['React', 'Tailwind', 'Node.js']).map((tech) => (
            <span key={tech} className="bg-gray-700 text-cyan-100 text-xs font-medium px-2.5 py-0.5 rounded-full">{tech}</span>
          ))}
        </div>
      </div>
      {/* Sección de Enlaces (Demo y Código) */}
      {/* Recordatorio: Asegurarse que los enlaces a Demo y Código estén siempre visibles y funcionen */}
      <div className="flex justify-start gap-4 mt-4">
        {/* Botón de Demo (se muestra solo si liveUrl existe) */}
        {liveUrl && (
          <Button
            href={liveUrl}
            variant="outline"
            className="text-sm px-4 py-2" // Estilos más pequeños para botones de card
            icon={ExternalLink} // Icono de enlace externo
            target="_blank" // Abrir en nueva pestaña
            rel="noopener noreferrer" // Buenas prácticas de seguridad para target="_blank"
          >
            Demo
          </Button>
        )}
        {/* Botón de Código (se muestra solo si repoUrl existe) */}
        {repoUrl && (
          <Button
            href={repoUrl}
            variant="secondary"
            className="text-sm px-4 py-2" // Estilos más pequeños
            icon={Github} // Icono de GitHub
            target="_blank" // Abrir en nueva pestaña
            rel="noopener noreferrer"
          >
            Código
          </Button>
        )}
      </div>
    </div>
  </motion.div>
);

// Exporta el componente para poder usarlo en otros lugares (como en la sección Projects)
export default ProjectCard;
