
import React from 'react';
import { useTranslation } from 'react-i18next';
// eslint-disable-next-line no-unused-vars
import { motion } from 'framer-motion';
import Button from '../common/Button';

const Hero = () => {
  const { t } = useTranslation();

  return (
    <section
      id="hero"
      
      
      className="min-h-screen flex items-center justify-center bg-gradient-radial from-gray-800 via-gray-900 to-gray-900 text-center py-20 md:py-32 px-4 relative
                 dark:bg-gradient-radial-dark dark:from-blue-50 dark:via-blue-100 dark:to-blue-200 transition-all duration-500"
    >
      
      <div className="absolute top-4 right-4 md:top-6 md:right-6 z-20"> {/* Aumentamos z-index para asegurar que esté encima */}
        <span className="inline-flex items-center px-3 py-1 rounded-full text-xs font-medium
                         bg-emerald-800 text-emerald-100 border border-emerald-600
                         dark:bg-emerald-300 dark:text-emerald-900 dark:border-emerald-500">
          <span className="w-2 h-2 mr-1.5 bg-emerald-400 rounded-full animate-pulse
                            dark:bg-emerald-600"></span>
          {t('common.available_for_work')}
        </span>
      </div>

      {/* Contenedor para la animación de entrada */}
      <motion.div
        initial={{ opacity: 0, y: -30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
        className="relative z-10" // Mantenemos z-10 para el contenido principal
      >
        {/* TU NOMBRE */}
        <h1 className="text-4xl md:text-6xl font-bold font-serif text-stone-100 mb-4
                       dark:text-gray-800 transition-colors duration-500">
          {t('common.name')}
        </h1>
        {/* TU TÍTULO PROFESIONAL */}
        <p className="text-xl md:text-2xl text-cyan-400 font-semibold mb-6
                      dark:text-cyan-700 transition-colors duration-500">
          {t('hero_section.title')}
        </p>
        {/* TU PROPUESTA DE VALOR */}
        <p className="text-lg md:text-xl text-stone-300 max-w-3xl mx-auto mb-8
                      dark:text-gray-600 transition-colors duration-500">
          {t('hero_section.description')}
        </p>
        {/* Botones de Llamada a la Acción (CTAs) */}
        <div className="flex flex-col sm:flex-row justify-center gap-4">
          <Button href="#projects" variant="primary">
            {t('common.view_my_projects')}
          </Button>
          <Button href="#contact" variant="secondary">
            {t('common.contact_me')}
          </Button>
        </div>
      </motion.div>
    </section>
  );
};

export default Hero;