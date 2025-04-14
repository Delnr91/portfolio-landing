import React, { useState } from 'react'; // Importar React y useState para el formulario
// eslint-disable-next-line no-unused-vars
import { motion, AnimatePresence } from 'framer-motion'; // Para animaciones (incluyendo salida de mensajes)
import SectionTitle from '../common/SectionTitle'; // Título reutilizable
import Button from '../common/Button'; // Botón reutilizable
// Importar los iconos necesarios para esta sección
import { Send, Mail, Github, Linkedin, Youtube } from 'lucide-react';

/**
 * Sección de Contacto.
 * Incluye un formulario (integrado con Formspree) y enlaces a redes/email.
 * Maneja el estado del formulario y muestra mensajes de éxito/error.
 * @returns {JSX.Element} - Sección de Contacto completa.
 */
const Contact = () => {
  // Estado para almacenar los datos introducidos en el formulario
  const [formData, setFormData] = useState({ name: '', email: '', message: '' });
  // Estado para indicar visualmente que el formulario se está enviando (deshabilita el botón)
  const [isSubmitting, setIsSubmitting] = useState(false);
  // Estado para controlar qué mensaje mostrar después del envío (éxito, error o ninguno)
  const [submitStatus, setSubmitStatus] = useState(null); // Puede ser 'success', 'error', o null

  // Función que maneja los cambios en los campos del formulario
  const handleChange = (e) => {
    const { name, value } = e.target; // Obtiene el nombre y valor del campo que cambió
    // Actualiza el estado 'formData' manteniendo los valores anteriores y actualizando el campo modificado
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  // Función que se ejecuta al enviar el formulario
  const handleSubmit = async (e) => {
    e.preventDefault(); // Previene la recarga de la página por defecto del formulario HTML
    setIsSubmitting(true); // Activa el estado "enviando"
    setSubmitStatus(null); // Limpia mensajes de estado anteriores

    // --- ¡IMPORTANTE! Reemplaza con tu endpoint real de Formspree ---
    // 1. Ve a formspree.io
    // 2. Crea una cuenta (gratuita) y un nuevo formulario.
    // 3. Copia el ID único de tu formulario.
    // 4. Pega el ID donde dice 'YOUR_FORMSPREE_ID'.
    const formspreeEndpoint = 'https://formspree.io/f/YOUR_FORMSPREE_ID';

    try {
      // Intenta enviar los datos del estado 'formData' al endpoint de Formspree
      const response = await fetch(formspreeEndpoint, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json', // Indica que enviamos JSON
          'Accept': 'application/json' // Indica que esperamos una respuesta JSON
        },
        body: JSON.stringify(formData), // Convierte el objeto de estado a una cadena JSON
      });

      // Comprueba si la respuesta del servidor fue exitosa (código 2xx)
      if (response.ok) {
        setSubmitStatus('success'); // Establece el estado a 'éxito'
        setFormData({ name: '', email: '', message: '' }); // Limpia los campos del formulario
      } else {
        // Si hubo un error en el servidor de Formspree
        const data = await response.json(); // Intenta leer el cuerpo del error
        console.error("Error response from Formspree:", data); // Muestra el error en la consola del navegador
        setSubmitStatus('error'); // Establece el estado a 'error'
      }
    } catch (error) {
      // Captura errores de red (ej. sin conexión) u otros problemas en el 'fetch'
      console.error('Error al enviar el formulario:', error);
      setSubmitStatus('error'); // Establece el estado a 'error'
    } finally {
      // Este bloque se ejecuta siempre, tanto si hubo éxito como si hubo error
      setIsSubmitting(false); // Desactiva el estado "enviando"
      // Oculta el mensaje de estado (éxito o error) después de 5 segundos
      setTimeout(() => setSubmitStatus(null), 5000);
    }
  };

  return (
    // Contenedor de la sección con ID, estilos de fondo y padding
    <section id="contact" className="py-16 md:py-24 bg-gray-900 px-4">
      {/* Contenedor principal con ancho máximo */}
      <div className="container mx-auto max-w-3xl">
        {/* Título de la sección */}
        <SectionTitle>Contacto</SectionTitle>
        {/* Contenedor animado para el contenido */}
        <motion.div
          initial={{ opacity: 0, y: 20 }} // Animación de entrada
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.6 }}
        >
          {/* Texto introductorio */}
          <p className="text-center text-lg text-stone-300 mb-8">
            ¿Listo/a para construir algo increíble juntos? ¡Hablemos!
          </p>
          {/* Formulario */}
          <form onSubmit={handleSubmit} className="space-y-6"> {/* Espaciado entre campos */}
            {/* Campo Nombre */}
            <div>
              <label htmlFor="name" className="block text-sm font-medium text-stone-300 mb-1">Nombre</label>
              <input
                type="text" name="name" id="name" required // Campo requerido
                value={formData.name} // Valor controlado por el estado
                onChange={handleChange} // Manejador de cambio
                // Estilos del input para dark mode
                className="w-full px-4 py-2 bg-gray-800 border border-gray-700 text-stone-100 rounded-lg focus:ring-cyan-400 focus:border-cyan-400 placeholder-stone-500"
                placeholder="Tu nombre completo"
              />
            </div>
            {/* Campo Email */}
            <div>
              <label htmlFor="email" className="block text-sm font-medium text-stone-300 mb-1">Email</label>
              <input
                type="email" name="email" id="email" required
                value={formData.email}
                onChange={handleChange}
                className="w-full px-4 py-2 bg-gray-800 border border-gray-700 text-stone-100 rounded-lg focus:ring-cyan-400 focus:border-cyan-400 placeholder-stone-500"
                placeholder="tu.email@ejemplo.com"
              />
            </div>
            {/* Campo Mensaje */}
            <div>
              <label htmlFor="message" className="block text-sm font-medium text-stone-300 mb-1">Mensaje</label>
              <textarea
                name="message" id="message" rows="4" required
                value={formData.message}
                onChange={handleChange}
                className="w-full px-4 py-2 bg-gray-800 border border-gray-700 text-stone-100 rounded-lg focus:ring-cyan-400 focus:border-cyan-400 placeholder-stone-500"
                placeholder="¿En qué puedo ayudarte?"
              ></textarea>
            </div>
            {/* Botón de Envío */}
            <div className="text-center">
              <Button type="submit" variant="primary" disabled={isSubmitting} className="w-full sm:w-auto">
                {/* Cambia el texto del botón si se está enviando */}
                {isSubmitting ? 'Enviando...' : 'Enviar Mensaje'}
                {/* Muestra el icono solo si no se está enviando */}
                {!isSubmitting && <Send className="w-5 h-5 ml-2" />}
              </Button>
            </div>
          </form>

          {/* Contenedor para los Mensajes de Estado (con animación de presencia) */}
          <AnimatePresence>
            {/* Mensaje de Éxito (se muestra solo si submitStatus es 'success') */}
            {submitStatus === 'success' && (
              <motion.div
                initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0, y: -10 }}
                className="mt-4 p-3 bg-emerald-900 text-emerald-200 rounded-lg text-center text-sm border border-emerald-700"
              >
                ¡Mensaje enviado con éxito! Gracias por contactarme.
              </motion.div>
            )}
            {/* Mensaje de Error (se muestra solo si submitStatus es 'error') */}
            {submitStatus === 'error' && (
              <motion.div
                initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0, y: -10 }}
                className="mt-4 p-3 bg-rose-900 text-rose-200 rounded-lg text-center text-sm border border-rose-700"
              >
                Hubo un error al enviar el mensaje. Por favor, inténtalo de nuevo o contáctame por email.
              </motion.div>
            )}
          </AnimatePresence>

     {/* Enlaces Sociales y de Contacto Adicionales */}
             {/* Recordatorio: Hacer el email directo fácil de encontrar */}
             <div className="mt-12 text-center">
               <p className="text-stone-400 mb-4">O encuéntrame en:</p>
               {/* Contenedor flexible para los iconos/enlaces */}
               <div className="flex flex-wrap justify-center items-center gap-6">
                 {/* TU EMAIL (Reemplazar) */}
                 <a href="mailto:tu.email@ejemplo.com" className="text-stone-400 hover:text-cyan-400 transition duration-300 flex items-center gap-1" title="Enviar Email">
                   <Mail className="w-6 h-6" />
                   <span className="text-sm underline">tu.email@ejemplo.com</span> {/* Email visible */}
                 </a>
                 {/* TU GITHUB (Reemplazar) */}
                 <a href="https://github.com/tu-usuario" target="_blank" rel="noopener noreferrer" className="text-stone-400 hover:text-cyan-400 transition duration-300" title="Perfil de GitHub">
                   <Github className="w-7 h-7" />
                 </a>
                 {/* TU LINKEDIN (Reemplazar) */}
                 <a href="https://linkedin.com/in/tu-usuario" target="_blank" rel="noopener noreferrer" className="text-stone-400 hover:text-cyan-400 transition duration-300" title="Perfil de LinkedIn">
                   <Linkedin className="w-7 h-7" />
                 </a>
                 {/* TU YOUTUBE (Reemplazar) */}
                 <a href="https://youtube.com/tu-canal" /* Reemplaza con la URL de tu canal */ target="_blank" rel="noopener noreferrer" className="text-stone-400 hover:text-cyan-400 transition duration-300" title="Canal de YouTube">
                   <Youtube className="w-7 h-7" />
                 </a>
               </div>
             </div>
           </motion.div>
         </div>
       </section>
     );
   };

   export default Contact;