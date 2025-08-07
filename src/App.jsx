// src/App.jsx
// --- Importaciones ---
import React, { useState } from 'react';
// Importa el hook useTranslation de react-i18next
import { useTranslation } from 'react-i18next';
// eslint-disable-next-line no-unused-vars
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X } from 'lucide-react';

// Importar ThemeToggle
import ThemeToggle from './components/common/ThemeToggle';

// Importar todos los componentes de sección
import Hero from './components/sections/Hero.jsx';
import About from './components/sections/About.jsx';
import Projects from './components/sections/Projects.jsx';
import TechStack from './components/sections/TechStack.jsx';
import Experience from './components/sections/Experience.jsx';
import Testimonials from './components/sections/Testimonials.jsx';
import Contact from './components/sections/Contact.jsx';
import Footer from './components/sections/Footer.jsx';

function App() {
  // Inicializa el hook useTranslation
  const { t, i18n } = useTranslation();
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  // Función para cambiar el idioma
  const changeLanguage = (lng) => {
    i18n.changeLanguage(lng);
  };

  const navLinks = [
    { name: t('nav.home'), href: '#hero' },
    { name: t('nav.about'), href: '#about' },
    { name: t('nav.projects'), href: '#projects' },
    { name: t('nav.stack'), href: '#tech-stack' },
    { name: t('nav.experience'), href: '#experience' },
    /* { name: t('nav.testimonials'), href: '#testimonials' }, */
    { name: t('nav.contact'), href: '#contact' },
  ];

  const scrollToSection = (e, href) => {
      e.preventDefault();
      const section = document.querySelector(href);
      if (section) {
          section.scrollIntoView({ behavior: "smooth" });
          setIsMenuOpen(false);
      }
  };

  return (
    <div className="min-h-screen flex flex-col font-sans bg-gray-900 text-stone-100 dark:bg-stone-50 dark:text-gray-900 transition-colors duration-500">

      {/* --- Header y Navegación --- */}
      <header className="bg-gray-800 shadow-md sticky top-0 z-50 border-b border-gray-700 dark:bg-white dark:border-gray-300 transition-colors duration-500">
        <nav className="container mx-auto px-4 py-4 flex justify-between items-center">
          {/* Logo/Nombre */}
          <a href="#hero" onClick={(e) => scrollToSection(e, '#hero')}
             className="text-xl font-bold text-cyan-400 font-serif dark:text-cyan-700 transition-colors duration-500">
            {t('common.name')} {/* Usamos la traducción para el nombre */}
          </a>
          {/* Navegación Desktop */}
          <div className="hidden md:flex space-x-6 items-center">
            {navLinks.map(link => (
              <a
                key={link.name}
                href={link.href}
                onClick={(e) => scrollToSection(e, link.href)}
                className="text-stone-300 hover:text-cyan-400 transition duration-300 font-medium
                           dark:text-gray-700 dark:hover:text-cyan-700"
              >
                {link.name}
              </a>
            ))}
            {/* Selector de idioma */}
            <div className="flex items-center space-x-2 ml-4">
              <button
                onClick={() => changeLanguage('es')}
                className={`px-3 py-1 rounded-md text-sm font-medium ${i18n.language === 'es' ? 'bg-cyan-600 text-white' : 'bg-gray-700 text-stone-300 dark:bg-gray-200 dark:text-gray-700'} hover:bg-cyan-500 dark:hover:bg-gray-300 transition-colors duration-300`}
              >
                ES
              </button>
              <button
                onClick={() => changeLanguage('en')}
                className={`px-3 py-1 rounded-md text-sm font-medium ${i18n.language === 'en' ? 'bg-cyan-600 text-white' : 'bg-gray-700 text-stone-300 dark:bg-gray-200 dark:text-gray-700'} hover:bg-cyan-500 dark:hover:bg-gray-300 transition-colors duration-300`}
              >
                EN
              </button>
            </div>
          </div>
          {/* Botón Menú Móvil */}
          <div className="md:hidden flex items-center gap-2">
            {/* Selector de idioma para móvil (se puede integrar en el menú desplegable si se prefiere) */}
            <div className="flex items-center space-x-2">
              <button
                onClick={() => changeLanguage('es')}
                className={`px-2 py-1 rounded-md text-xs font-medium ${i18n.language === 'es' ? 'bg-cyan-600 text-white' : 'bg-gray-700 text-stone-300 dark:bg-gray-200 dark:text-gray-700'} hover:bg-cyan-500 dark:hover:bg-gray-300 transition-colors duration-300`}
              >
                ES
              </button>
              <button
                onClick={() => changeLanguage('en')}
                className={`px-2 py-1 rounded-md text-xs font-medium ${i18n.language === 'en' ? 'bg-cyan-600 text-white' : 'bg-gray-700 text-stone-300 dark:bg-gray-200 dark:text-gray-700'} hover:bg-cyan-500 dark:hover:bg-gray-300 transition-colors duration-300`}
              >
                EN
              </button>
            </div>
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
              className="md:hidden bg-gray-800 border-t border-gray-700 dark:bg-stone-100 dark:border-gray-300"
            >
              <div className="flex flex-col items-center space-y-4 py-4">
                {navLinks.map(link => (
                  <a
                    key={link.name}
                    href={link.href}
                    onClick={(e) => scrollToSection(e, link.href)}
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

      {/* ThemeToggle */}
      <div className="absolute top-4 right-4 z-50">
        <ThemeToggle />
      </div>

      <main>
        <Hero />
        <About />
        <Projects />
        <TechStack />
        <Experience />
        <Testimonials />
        <Contact />
      </main>

      <Footer />
    </div>
  );
}

export default App;