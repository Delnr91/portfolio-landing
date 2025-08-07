import React from 'react';
import { Copyright, Heart } from 'lucide-react';

import { useTranslation } from 'react-i18next';

/**
 * Componente Footer.
 * El pie de página de la aplicación, con derechos de autor y mensaje de tecnología.
 * @returns {JSX.Element} - Pie de página completo.
 */
const Footer = () => {
  
  // Inicializa el hook useTranslation
  const { t } = useTranslation();
  const currentYear = new Date().getFullYear();
  const yourName = "Daniel Núñez Rojas";

  return (
    <footer className="bg-gray-800 text-stone-300 py-6 text-center text-sm
                       dark:bg-white dark:text-gray-700 transition-colors duration-500">
      <div className="container mx-auto px-4 flex flex-col md:flex-row justify-center items-center gap-2">
        {/* Sección de Derechos de Autor */}
        <span className="flex items-center">
          <Copyright className="inline-block w-4 h-4 mr-1 text-stone-400 dark:text-gray-500 transition-colors duration-500" />
          {currentYear} {yourName}. {t('common.all_rights_reserved')} {/* Usamos la traducción */}
        </span>

        {/* Separador para pantallas medianas y grandes */}
        <span className="hidden md:inline-block text-stone-500 dark:text-gray-400 mx-3">|</span>

        {/* Sección "Creado con" y Mini LED */}
        <span className="flex items-center mt-2 md:mt-0">
          {t('footer_section.created_with')}{" "} {/* Usamos la traducción */}
          <span className="w-2 h-2 mx-1 bg-green-500 rounded-full inline-block animate-pulse"></span>{" "}
          Vite & React
        </span>
      </div>
    </footer>
  );
};

export default Footer;