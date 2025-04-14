import React from 'react'; // Importar React
// eslint-disable-next-line no-unused-vars
import { motion } from 'framer-motion'; // Para animaciones
import SectionTitle from '../common/SectionTitle'; // Título reutilizable

/**
 * Sección de Experiencia Laboral o Logros.
 * Muestra una línea de tiempo con hitos profesionales o académicos.
 * Es opcional, no se renderiza si el array `experiences` está vacío.
 * @returns {JSX.Element|null} - Sección de Experiencia o null si no hay datos.
 */
const Experience = () => {
  // TU EXPERIENCIA (¡Reemplazar o dejar vacío el array para ocultar la sección!)
  // Si no tienes experiencia formal, enfócate en proyectos académicos importantes, contribuciones open source, etc.
  const experiences = [
     {
      company: 'Empresa Ficticia S.A.', // Nombre de la empresa o proyecto
      role: 'Desarrollador Fullstack Jr.', // Tu cargo o rol
      dates: 'Ene 2023 - Presente', // Fechas
      description: [ // Lista de logros o responsabilidades clave (sé específico)
        'Desarrollo y mantenimiento de aplicación web X usando React y Spring Boot.',
        'Colaboración en equipo ágil (Scrum) para entrega de nuevas funcionalidades.',
        'Integración con API de OpenAI para funcionalidad Y.',
        'Optimización de rendimiento de base de datos (reducción de tiempos de carga en 15%).',
      ],
    },
    {
      company: 'Proyecto Académico Destacado: Sistema de Reservas',
      role: 'Desarrollador Principal',
      dates: 'Sep 2022 - Dic 2022',
      description: [
        'Diseño e implementación de sistema de reservas con Java y MySQL.',
        'Creación de interfaz de usuario intuitiva con HTML, CSS y JS básico.',
        'Presentación exitosa del proyecto final de curso.',
      ],
    },
     // Añade más experiencias si es necesario
  ];

  // --- Renderizado Condicional ---
  // Si el array 'experiences' está vacío, el componente no devuelve nada (null),
  // por lo que la sección no aparecerá en la página.
  if (experiences.length === 0) {
    return null;
  }

  // --- Renderizado de la Sección (si hay experiencias) ---
  return (
    // Contenedor de la sección con ID, estilos de fondo y padding
    <section id="experience" className="py-16 md:py-24 bg-gray-900 px-4">
      {/* Contenedor principal con ancho máximo */}
      <div className="container mx-auto max-w-4xl">
        {/* Título de la sección */}
        <SectionTitle>Experiencia y Logros</SectionTitle>
        {/* Contenedor animado para la línea de tiempo */}
        <motion.div
          initial={{ opacity: 0 }} // Animación de entrada
          whileInView={{ opacity: 1 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.7 }}
          // Estilos de la línea de tiempo: borde izquierdo, padding izquierdo, espaciado entre elementos
          className="space-y-8 relative border-l-2 border-gray-700 pl-6"
        >
          {/* Mapeo del array 'experiences' para crear cada entrada de la línea de tiempo */}
          {experiences.map((exp, index) => (
            <div key={index} className="relative"> {/* Contenedor relativo para posicionar el punto */}
              {/* Punto decorativo en la línea de tiempo */}
              <div className="absolute -left-[34px] top-1 w-4 h-4 bg-cyan-400 rounded-full border-4 border-gray-900"></div>
              {/* Contenido de la entrada de experiencia */}
              <h3 className="text-xl font-semibold font-serif text-stone-100">{exp.role}</h3>
              <p className="text-orange-500 font-medium mb-1">{exp.company}</p> {/* Color de acento secundario */}
              <p className="text-sm text-stone-500 mb-2">{exp.dates}</p>
              {/* Lista de descripción/logros */}
              <ul className="list-disc list-inside text-stone-400 space-y-1 text-sm">
                {exp.description.map((point, i) => (
                  <li key={i}>{point}</li>
                ))}
              </ul>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

// Exporta el componente para usarlo en App.jsx
export default Experience;
