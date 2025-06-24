// --- Importaciones ---
import React, { useState } from 'react'; // Hook para el estado del menú móvil
// eslint-disable-next-line no-unused-vars
import { motion, AnimatePresence } from 'framer-motion'; // Para animar el menú móvil
import { Menu, X } from 'lucide-react'; // Iconos para el botón del menú móvil

// Importar el nuevo componente ThemeToggleButton.jsx
import ThemeToggleButton from './components/common/ThemeToggleButton.jsx';

// Importar todos los componentes de sección desde sus archivos (con extensión .jsx)
import Hero from './components/sections/Hero.jsx';
import About from './components/sections/About.jsx';
import Projects from './components/sections/Projects.jsx';
import TechStack from './components/sections/TechStack.jsx';
import Experience from './components/sections/Experience.jsx';
import Testimonials from './components/sections/Testimonials.jsx';
import Contact from './components/sections/Contact.jsx';
import Footer from './components/sections/Footer.jsx';

// --- Estilos Base (Asegúrate que index.css tenga @tailwind directives) ---
// y que tailwind.config.js esté configurado con darkMode: 'class'.

/**
 * Componente Raíz de la Aplicación.
 * Ensambla todas las secciones y maneja la navegación (header y menú móvil).
 * @returns {JSX.Element} - Aplicación completa.
 */
function App() {
  // Estado para controlar la apertura/cierre del menú móvil
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  // Definición de los enlaces de navegación
  // Nota: El enlace de Testimonios está comentado por defecto. Descoméntalo si se usa esa sección.
  const navLinks = [
    { name: 'Inicio', href: '#hero' }, { name: 'Sobre Mí', href: '#about' },
    { name: 'Proyectos', href: '#projects' }, { name: 'Stack', href: '#tech-stack' },
    { name: 'Experiencia', href: '#experience' },
    /* { name: 'Testimonios', href: '#testimonials' }, */ // Descomentar si se usa Testimonios
    { name: 'Contacto', href: '#contact' },
  ];

  // Función para manejar el scroll suave (igual que antes)
  const scrollToSection = (e, href) => {
      e.preventDefault();
      const section = document.querySelector(href);
      if (section) {
          const headerOffset = 80; // Ajusta según altura del header
          const elementPosition = section.getBoundingClientRect().top;
          const offsetPosition = elementPosition + window.pageYOffset - headerOffset;
          window.scrollTo({ top: offsetPosition, behavior: "smooth" });
          setIsMenuOpen(false); // Cierra el menú móvil al hacer clic
      }
  };

  // --- Renderizado del Componente App ---
  return (
    // Contenedor principal con estilos base que cambian según el tema
    // bg-gray-900 es el fondo para el modo oscuro (por defecto)
    // dark:bg-stone-50 es el fondo para el modo claro
    // text-stone-100 es el color de texto para el modo oscuro (por defecto)
    // dark:text-gray-900 es el color de texto para el modo claro
    <div className="font-sans bg-gray-900 text-stone-100 dark:bg-stone-50 dark:text-gray-900 transition-colors duration-500">

      {/* --- Header y Navegación --- */}
      {/* bg-gray-800 es el fondo para el modo oscuro (por defecto) */}
      {/* dark:bg-white es el fondo para el modo claro */}
      {/* border-b border-gray-700 es el borde inferior para el modo oscuro */}
      {/* dark:border-gray-300 es el borde inferior para el modo claro */}
      <header className="bg-gray-800 shadow-md sticky top-0 z-50 border-b border-gray-700 dark:bg-white dark:border-gray-300 transition-colors duration-500">
        <nav className="container mx-auto px-4 py-4 flex justify-between items-center">
          {/* Logo/Nombre */}
          {/* El color del nombre también debe cambiar */}
          <a href="#hero" onClick={(e) => scrollToSection(e, '#hero')}
             className="text-xl font-bold text-cyan-400 font-serif dark:text-cyan-700 transition-colors duration-500">
            Tu Nombre {/* ¡Reemplazar! */}
          </a>
          {/* Navegación Desktop */}
          <div className="hidden md:flex space-x-6 items-center"> {/* Agregado items-center para alinear el botón de tema */}
            {navLinks.map(link => (
              <a
                key={link.name}
                href={link.href}
                onClick={(e) => scrollToSection(e, link.href)}
                // Estilos de los enlaces de navegación
                className="text-stone-300 hover:text-cyan-400 transition duration-300 font-medium
                           dark:text-gray-700 dark:hover:text-cyan-700"
              >
                {link.name}
              </a>
            ))}
            {/* Botón de cambio de tema para desktop */}
            <ThemeToggleButton />
          </div>
          {/* Botón Menú Móvil */}
          <div className="md:hidden flex items-center gap-2"> {/* Contenedor para el botón de menú y el de tema en móvil */}
            {/* Botón de cambio de tema para móvil */}
            <ThemeToggleButton />
            <button onClick={() => setIsMenuOpen(!isMenuOpen)}
                    className="text-stone-300 hover:text-cyan-400 focus:outline-none
                               dark:text-gray-700 dark:hover:text-cyan-700">
              {isMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </nav>
        {/* Menú Móvil Animado */}
        <AnimatePresence>
          {isMenuOpen && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: 'auto' }}
              exit={{ opacity: 0, height: 0 }}
              transition={{ duration: 0.3, ease: 'easeInOut' }}
              // Fondo del menú móvil también cambia
              className="md:hidden bg-gray-800 border-t border-gray-700 dark:bg-stone-100 dark:border-gray-300"
            >
              <div className="flex flex-col items-center space-y-4 py-4">
                {navLinks.map(link => (
                  <a
                    key={link.name}
                    href={link.href}
                    onClick={(e) => scrollToSection(e, link.href)}
                    // Estilos de los enlaces del menú móvil
                    className="text-stone-300 hover:text-cyan-400 transition duration-300 font-medium
                               dark:text-gray-700 dark:hover:text-cyan-700"
                  >
                    {link.name}
                  </a>
                ))}
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </header>

      {/* --- Contenido Principal --- */}
      {/* Renderiza los componentes de sección importados */}
      <main>
        <Hero />
        <About />
        <Projects />
        <TechStack />
        <Experience /> {/* Renderiza null si su array de datos está vacío */}
        <Testimonials /> {/* Renderiza null o mensaje si su array de datos está vacío */}
        <Contact />
      </main>

      {/* --- Pie de Página --- */}
      <Footer />

      {/* Recordatorios de configuración externa comentados aquí para claridad */}
      {/* Fuentes en index.html, Configuración de fuentes y gradientes en tailwind.config.js, Endpoint de Formspree */}
    </div>
  );
}

// Exporta el componente App como principal
export default App;
