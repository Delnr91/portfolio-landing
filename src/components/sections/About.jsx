import React from 'react'; // Importar React
// eslint-disable-next-line no-unused-vars
import { motion } from 'framer-motion'; // Para animaciones
import SectionTitle from '../common/SectionTitle'; // Importar título de sección reutilizable
import Button from '../common/Button'; // Importar botón reutilizable
// Importar los iconos necesarios para esta sección
import { BrainCircuit, Users, MessageSquare, Target, Code, Cpu, Download } from 'lucide-react';

/**
 * Sección "Sobre Mí".
 * Presenta información personal y profesional, habilidades y filosofía.
 * Incluye foto y enlace para descargar CV.
 * @returns {JSX.Element} - Sección Sobre Mí completa.
 */
const About = () => (
  // Contenedor de la sección con ID, estilos de fondo y padding
  <section id="about" className="py-16 md:py-24 bg-gray-800 px-4">
    {/* Contenedor principal con ancho máximo */}
    <div className="container mx-auto max-w-6xl">
      {/* Título de la sección (componente reutilizable) */}
      <SectionTitle>Sobre Mí</SectionTitle>
      {/* Contenedor animado para el contenido de la sección */}
      <motion.div
        initial={{ opacity: 0 }} // Estado inicial (invisible)
        whileInView={{ opacity: 1 }} // Estado animado (visible al entrar en vista)
        viewport={{ once: true, amount: 0.3 }} // Configuración de la animación en scroll
        transition={{ duration: 0.7 }} // Duración
        className="flex flex-col md:flex-row items-center gap-12" // Layout flexible (columna en móvil, fila en escritorio)
      >
        {/* Columna para la Imagen */}
        <div className="md:w-1/3 flex justify-center">
          {/* TU FOTO (Reemplazar src con la URL/ruta de tu foto) */}
          <img
            src="https://placehold.co/300x300/374151/e5e7eb?text=Tu+Foto" // Placeholder oscuro
            alt="[Foto profesional de Tu Nombre]" // Texto alternativo (¡Reemplazar 'Tu Nombre'!)
            // Estilos de la imagen: redondeada, tamaño, ajuste, sombra, borde turquesa
            className="rounded-full w-48 h-48 md:w-64 md:h-64 object-cover shadow-lg border-4 border-cyan-400"
            // Manejador de error para la imagen
            onError={(e) => { e.target.onerror = null; e.target.src='https://placehold.co/300x300/374151/e5e7eb?text=Error+Foto'; }}
          />
        </div>
        {/* Columna para el Texto */}
        <div className="md:w-2/3 text-center md:text-left"> {/* Alineación de texto */}
          {/* Párrafo Introductorio (¡Reemplazar contenido!) */}
          {/* **Reescribir con tu historia, "por qué" y conexión cultural si es apropiado y te sientes cómodo** */}
          <p className="text-lg text-stone-300 mb-6 leading-relaxed">
            Aquí va tu párrafo introductorio enfocado en storytelling. Comparte tu pasión, tu viaje, motivaciones. Puedes mencionar sutilmente cómo tu perspectiva o herencia influye en tu enfoque hacia la tecnología o la resolución de problemas, si lo deseas.
          </p>
          {/* Sección Filosofía/Enfoque (¡Ajustar texto!) */}
          <div className="mb-6">
            <h3 className="text-xl font-semibold font-serif mb-3 text-stone-100">Filosofía / Enfoque</h3>
            <p className="text-stone-400 italic">
              "Creo firmemente en escribir código limpio, mantenible y priorizar siempre la experiencia del usuario final. Me enfoco en la entrega continua de valor a través de soluciones robustas y escalables, explorando activamente el potencial de la IA."
            </p>
          </div>
          {/* Cuadrícula para Habilidades Blandas y Técnicas */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 mb-8">
            {/* Columna Habilidades Blandas (¡Ajustar lista!) */}
            <div>
              <h3 className="text-xl font-semibold font-serif mb-3 text-stone-100">Habilidades Blandas</h3>
              <ul className="space-y-2 text-stone-400">
                <li className="flex items-center"><BrainCircuit className="w-5 h-5 mr-2 text-cyan-400" /> Resolución de Problemas</li>
                <li className="flex items-center"><Users className="w-5 h-5 mr-2 text-cyan-400" /> Trabajo en Equipo</li>
                <li className="flex items-center"><MessageSquare className="w-5 h-5 mr-2 text-cyan-400" /> Comunicación Efectiva</li>
                <li className="flex items-center"><Target className="w-5 h-5 mr-2 text-cyan-400" /> Aprendizaje Continuo</li>
              </ul>
            </div>
            {/* Columna Habilidades Técnicas (¡Ajustar lista!) */}
            <div>
              <h3 className="text-xl font-semibold font-serif mb-3 text-stone-100">Habilidades Técnicas Clave</h3>
              <ul className="space-y-2 text-stone-400">
                <li className="flex items-center"><Code className="w-5 h-5 mr-2 text-cyan-400" /> React</li>
                <li className="flex items-center"><Code className="w-5 h-5 mr-2 text-cyan-400" /> Spring Boot / Java</li>
                <li className="flex items-center"><Code className="w-5 h-5 mr-2 text-cyan-400" /> JavaScript / TypeScript</li>
                <li className="flex items-center"><Code className="w-5 h-5 mr-2 text-cyan-400" /> SQL</li> {/* Ajustado */}
                <li className="flex items-center"><Cpu className="w-5 h-5 mr-2 text-cyan-400" /> Inteligencia Artificial</li>
                <li className="flex items-center"><Code className="w-5 h-5 mr-2 text-cyan-400" /> Git / Docker</li>
              </ul>
            </div>
          </div>
          {/* Botón para Descargar CV */}
          <div className="text-center md:text-left">
            {/* TU CV (¡Reemplazar href y nombre de archivo!) */}
            {/* Coloca tu CV PDF en la carpeta 'public' de tu proyecto Vite y usa la ruta relativa desde la raíz pública */}
            <Button
              href="/nombre-de-tu-cv.pdf" // Ejemplo: si tu CV se llama 'MiCV.pdf' y está en /public, usa '/MiCV.pdf'
              variant="outline"
              icon={Download} // Icono de descarga
              download="TuNombre_CV.pdf" // Nombre sugerido para el archivo descargado (¡Reemplazar 'TuNombre'!)
              className="text-sm" // Estilo más pequeño
            >
              Descargar CV
            </Button>
          </div>
        </div>
      </motion.div>
    </div>
  </section>
);

// Exporta el componente para usarlo en App.jsx
export default About;
