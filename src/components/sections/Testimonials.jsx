import React from 'react'; // Importar React
// eslint-disable-next-line no-unused-vars
import { motion } from 'framer-motion'; // Para animaciones
import SectionTitle from '../common/SectionTitle'; // Título reutilizable

/**
 * Sección de Testimonios.
 * Muestra citas de clientes o colegas.
 * Es opcional, muestra un mensaje si no hay testimonios.
 * @returns {JSX.Element} - Sección de Testimonios completa.
 */
const Testimonials = () => {
  // TUS TESTIMONIOS (¡Reemplazar con testimonios reales cuando los tengas!)
  // Pide testimonios a colegas, clientes, profesores.
  const testimonialsData = [
    {
      quote: '"Trabajar con [Tu Nombre] fue una experiencia excelente. Su habilidad técnica y comunicación proactiva, junto con su visión para aplicar IA de forma práctica, fueron clave para el éxito del proyecto."', // La cita
      name: 'Nombre Cliente/Colega', // Nombre de quien da el testimonio
      title: 'Cargo, Empresa Ficticia', // Cargo y empresa (opcional)
    },
     // Añade más objetos de testimonio aquí
  ];

  // --- Renderizado Condicional ---
  // Si el array 'testimonialsData' está vacío, muestra un mensaje indicándolo.
  if (testimonialsData.length === 0) {
     return (
        // Contenedor de la sección con estilos
        <section id="testimonials" className="py-16 md:py-24 bg-gray-800 px-4 text-center">
             <div className="container mx-auto max-w-4xl">
                 <SectionTitle>Testimonios</SectionTitle>
                 {/* Mensaje si no hay testimonios */}
                 <p className="text-stone-400 italic">Testimonios de clientes y colegas estarán disponibles próximamente.</p>
             </div>
        </section>
     );
  }

  // --- Renderizado de la Sección (si hay testimonios) ---
  return (
    // Contenedor de la sección con ID, estilos de fondo y padding
    <section id="testimonials" className="py-16 md:py-24 bg-gray-800 px-4">
      {/* Contenedor principal con ancho máximo */}
      <div className="container mx-auto max-w-4xl">
        {/* Título de la sección */}
        <SectionTitle>Testimonios</SectionTitle>
        {/* Contenedor animado para las tarjetas de testimonio */}
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }} // Animación de entrada (escala y opacidad)
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.6 }}
          className="space-y-8" // Espacio entre testimonios
        >
          {/* Mapeo del array 'testimonialsData' */}
          {testimonialsData.map((testimonial, index) => (
            // Contenedor de cada testimonio individual
            <div key={index} className="bg-gray-900 p-6 rounded-lg shadow-md text-center border border-gray-700">
              {/* Cita del testimonio */}
              <p className="text-stone-400 italic mb-4">"{testimonial.quote}"</p>
              {/* Nombre de la persona */}
              <p className="font-semibold text-stone-100">{testimonial.name}</p>
              {/* Cargo y empresa (con color de acento) */}
              <p className="text-sm text-cyan-300">{testimonial.title}</p>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

// Exporta el componente para usarlo en App.jsx
export default Testimonials;
