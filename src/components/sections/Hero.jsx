import React from 'react'; // Importar React
// eslint-disable-next-line no-unused-vars
import { motion } from 'framer-motion'; // Importar motion para animaciones
import Button from '../common/Button'; // Importar el componente Button desde la carpeta common

/**
 * Sección Hero (Introducción Principal).
 * Contiene el nombre, título, propuesta de valor y CTAs principales.
 * Incluye un indicador de disponibilidad opcional.
 * @returns {JSX.Element} - Sección Hero completa.
 */
const Hero = () => (
  // Sección principal con ID para navegación y estilos de fondo/padding/alineación
  <section
    id="hero" // ID para el scroll de navegación
    // Fondo con gradiente radial sutil y posicionamiento relativo para el badge de disponibilidad
    className="bg-gradient-radial from-gray-800 via-gray-900 to-gray-900 text-center py-20 md:py-32 px-4 relative"
  >
    {/* Contenedor para la animación de entrada */}
    <motion.div
      initial={{ opacity: 0, y: -30 }} // Estado inicial de la animación
      animate={{ opacity: 1, y: 0 }} // Estado final de la animación
      transition={{ duration: 0.8, ease: "easeOut" }} // Configuración de la transición
    >
       {/* Indicador de Disponibilidad (Posicionado absolutamente en la esquina superior derecha) */}
       {/* Puedes comentar o eliminar este div si no quieres mostrarlo */}
       <div className="absolute top-4 right-4 md:top-6 md:right-6">
         <span className="inline-flex items-center px-3 py-1 rounded-full text-xs font-medium bg-emerald-800 text-emerald-100 border border-emerald-600">
           {/* Punto verde animado */}
           <span className="w-2 h-2 mr-1.5 bg-emerald-400 rounded-full animate-pulse"></span>
           {/* Texto de disponibilidad (¡Personalizar!) */}
           Disponible para Trabajar
         </span>
       </div>

      {/* TU NOMBRE (¡Reemplazar!) */}
      <h1 className="text-4xl md:text-6xl font-bold font-serif text-stone-100 mb-4">
        Tu Nombre
      </h1>
      {/* TU TÍTULO PROFESIONAL (¡Reemplazar!) */}
      <p className="text-xl md:text-2xl text-cyan-400 font-semibold mb-6">
        Desarrollador Fullstack | Especialista en React, Spring Boot e IA
      </p>
      {/* TU PROPUESTA DE VALOR (¡Reemplazar!) */}
      <p className="text-lg md:text-xl text-stone-300 max-w-3xl mx-auto mb-8">
        Apasionado por crear interfaces accesibles y de alto rendimiento que resuelven problemas reales, aplicando soluciones de IA cuando aportan valor.
      </p>
      {/* Botones de Llamada a la Acción (CTAs) */}
      <div className="flex flex-col sm:flex-row justify-center gap-4">
        {/* Usamos el componente Button importado */}
        <Button href="#projects" variant="primary">
          Ver mis Proyectos
        </Button>
        <Button href="#contact" variant="secondary">
          Contacta conmigo
        </Button>
      </div>
    </motion.div>
  </section>
);

// Exporta el componente para poder importarlo en App.jsx
export default Hero;
