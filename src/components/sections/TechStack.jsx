import React from 'react'; // Importar React
// eslint-disable-next-line no-unused-vars
import { motion } from 'framer-motion'; // Para animaciones
import SectionTitle from '../common/SectionTitle'; // Título reutilizable
import SkillBadge from '../common/SkillBadge'; // Badge de habilidad reutilizable
// Importar TODOS los iconos necesarios para las tecnologías listadas en el objeto 'stack'
import { Code, Braces, FileCode, Paintbrush, Wind, Server, Network, Cpu, Bot, Database, Github, Container, Cloud, Package } from 'lucide-react';

/**
 * Sección de Stack Tecnológico.
 * Muestra las tecnologías agrupadas por categoría usando SkillBadge.
 * @returns {JSX.Element} - Sección de Stack Tecnológico completa.
 */
const TechStack = () => {
   // TU STACK TECNOLÓGICO (¡Ajustar según tus habilidades!)
   // Mapeo de tecnologías a iconos de lucide-react (Mejor esfuerzo).
   // Recordatorio: Sé honesto sobre tu nivel de dominio al presentar estas habilidades.
   const stack = {
    Frontend: [
      { name: 'React', icon: Braces }, // Usar Braces para frameworks JS
      { name: 'JavaScript (ES6+)', icon: Code },
      { name: 'TypeScript', icon: Code },
      { name: 'HTML5', icon: FileCode },
      { name: 'CSS3 / SASS', icon: Paintbrush },
      { name: 'Tailwind CSS', icon: Wind },
    ],
    Backend: [
      { name: 'Spring Boot', icon: Server }, // O Code si se prefiere
      { name: 'Java', icon: Code },
      { name: 'Node.js', icon: Server },
      { name: 'Express', icon: Server },
      { name: 'REST APIs', icon: Network }, // Reutilizando Network o usar Code
      { name: 'XAMPP', icon: Server },
    ],
    'IA / Modelos y Herramientas': [ // Categoría IA actualizada
        { name: 'ChatGPT / LLMs', icon: Bot },
        { name: 'Google AI Studio', icon: Bot }, // Actualizado
        { name: 'Python (para IA)', icon: Code },
    ],
    Databases: [
      { name: 'SQL (PostgreSQL, MySQL)', icon: Database },
      // { name: 'NoSQL (MongoDB)', icon: Database }, // Eliminado según solicitud
      { name: 'JPA / Hibernate', icon: Database }, // O Code
    ],
    'Tools & DevOps': [
      { name: 'Git / GitHub', icon: Github },
      { name: 'Docker', icon: Container },
      { name: 'Google Cloud', icon: Cloud },
      { name: 'Postman', icon: Network },
      { name: 'Vercel / Netlify', icon: Cloud }, // O Server
      { name: 'Maven / Gradle', icon: Package }, // Icono de paquete
    ],
  };

  return (
    // Contenedor de la sección con ID, estilos de fondo y padding
    <section id="tech-stack" className="py-16 md:py-24 bg-gray-800 px-4">
      {/* Contenedor principal con ancho máximo */}
      <div className="container mx-auto max-w-6xl">
        {/* Título de la sección */}
        <SectionTitle>Stack Tecnológico</SectionTitle>
        {/* Itera sobre cada categoría del objeto 'stack' */}
        {Object.entries(stack).map(([category, technologies]) => (
          // Contenedor animado para cada categoría
          <motion.div
            key={category} // Clave única para el mapeo
            initial={{ opacity: 0, x: -20 }} // Animación de entrada
            whileInView={{ opacity: 1, x: 0 }} // Animación al aparecer en vista
            viewport={{ once: true, amount: 0.2 }} // Configuración de la vista
            transition={{ duration: 0.5 }} // Duración
            className="mb-12" // Margen inferior entre categorías
          >
            {/* Título de la categoría */}
            <h3 className="text-2xl font-semibold font-serif mb-6 text-center md:text-left text-stone-200">{category}</h3>
            {/* Cuadrícula responsiva para los badges de tecnología */}
            <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4">
              {/* Mapea las tecnologías dentro de la categoría */}
              {technologies.map((tech) => (
                // Renderiza un SkillBadge para cada tecnología, pasando el icono y nombre
                // Usa el icono 'Code' como fallback si no se especifica uno
                <SkillBadge key={tech.name} icon={tech.icon || Code} name={tech.name} />
              ))}
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

// Exporta el componente para usarlo en App.jsx
export default TechStack;
