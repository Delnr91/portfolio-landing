
import React from 'react';
// eslint-disable-next-line no-unused-vars
import { motion } from 'framer-motion';
import SectionTitle from '../common/SectionTitle';
import Button from '../common/Button';
import { BrainCircuit, Users, MessageSquare, Target, Code, Cpu, Download } from 'lucide-react';

import { useTranslation } from 'react-i18next';

/**
 * Sección "Sobre Mí".
 * Presenta información personal y profesional, habilidades y filosofía.
 * Incluye foto y enlace para descargar CV.
 * @returns {JSX.Element} - Sección Sobre Mí completa.
 */
const About = () => {
  
  // Inicializa el hook useTranslation
  const { t } = useTranslation();

  return (
    <section
      id="about"
      className="min-h-screen flex flex-col items-center px-4 py-16
               bg-gray-800 dark:bg-gray-50 transition-colors duration-500"
    >
      <div className="container mx-auto max-w-6xl w-full flex-grow flex flex-col justify-center">
        <SectionTitle>{t('about_section.title')}</SectionTitle> {/* Traducido */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.7 }}
          className="flex flex-col md:flex-row items-center md:items-start gap-12 justify-center flex-grow"
        >
          {/* Columna para la Imagen */}
          <div className="md:w-1/3 flex justify-center md:justify-end shrink-0">
            {/* ¡ACTUALIZA ESTA LÍNEA CON LA RUTA A TU FOTO! */}
            <img
              src="/images/mi-foto-perfil.webp" // EJEMPLO: Si tu foto se llama mi-foto-perfil.webp y está en public/images
              alt={t('about_section.photo_alt_text', { name: t('common.name') })} // Texto alternativo traducido y dinámico
              className="rounded-full w-48 h-48 md:w-64 md:h-64 object-cover shadow-lg border-4 border-cyan-400
                         dark:border-cyan-700 transition-colors duration-500"
              onError={(e) => { e.target.onerror = null; e.target.src='[https://placehold.co/300x300/374151/e5e7eb?text=Error+Foto](https://placehold.co/300x300/374151/e5e7eb?text=Error+Foto)'; }}
            />
          </div>
          {/* Columna para el Texto */}
          <div className="md:w-2/3 flex-grow text-center md:text-left">
            {/* Párrafo Introductorio (Storytelling) */}
            <p className="text-lg text-stone-300 mb-6 leading-relaxed
                          dark:text-gray-700 transition-colors duration-500">
              {t('about_section.introduction_paragraph')} {/* Traducido */}
            </p>
            {/* Sección Filosofía/Enfoque */}
            <div className="mb-6">
              <h3 className="text-xl font-semibold font-serif mb-3 text-stone-100
                             dark:text-gray-800 transition-colors duration-500">
                {t('about_section.philosophy_title')} {/* Traducido */}
              </h3>
              <p className="text-stone-400 italic
                            dark:text-gray-600 transition-colors duration-500">
                {t('about_section.philosophy_quote')} {/* Traducido */}
              </p>
            </div>
            {/* Cuadrícula para Habilidades Blandas y Técnicas */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 mb-8">
              {/* Habilidades Blandas */}
              <div>
                <h3 className="text-xl font-semibold font-serif mb-3 text-stone-100
                               dark:text-gray-800 transition-colors duration-500">
                  {t('about_section.soft_skills_title')} {/* Traducido */}
                </h3>
                <ul className="space-y-2 text-stone-400 list-none p-0 flex flex-col items-center md:items-start">
                  <li className="flex items-center text-stone-400 dark:text-gray-600 transition-colors duration-500"><BrainCircuit className="w-5 h-5 mr-2 text-cyan-400 dark:text-cyan-700" /> {t('about_section.problem_solving')}</li> {/* Traducido */}
                  <li className="flex items-center"><Users className="w-5 h-5 mr-2 text-cyan-400 dark:text-cyan-700" /> {t('about_section.teamwork')}</li> {/* Traducido */}
                  <li className="flex items-center"><MessageSquare className="w-5 h-5 mr-2 text-cyan-400 dark:text-cyan-700" /> {t('about_section.effective_communication')}</li> {/* Traducido */}
                  <li className="flex items-center"><Target className="w-5 h-5 mr-2 text-cyan-400 dark:text-cyan-700" /> {t('about_section.continuous_learning')}</li> {/* Traducido */}
                </ul>
              </div>
              {/* Habilidades Técnicas Clave */}
              <div>
                <h3 className="text-xl font-semibold font-serif mb-3 text-stone-100
                               dark:text-gray-800 transition-colors duration-500">
                  {t('about_section.tech_skills_title')} {/* Traducido */}
                </h3>
                <ul className="space-y-2 text-stone-400 list-none p-0 flex flex-col items-center md:items-start">
                  <li className="flex items-center text-stone-400 dark:text-gray-600 transition-colors duration-500"><Code className="w-5 h-5 mr-2 text-cyan-400 dark:text-cyan-700" /> React</li>
                  <li className="flex items-center"><Code className="w-5 h-5 mr-2 text-cyan-400 dark:text-cyan-700" /> Spring Boot / Java</li>
                  <li className="flex items-center"><Code className="w-5 h-5 mr-2 text-cyan-400 dark:text-cyan-700" /> JavaScript / TypeScript</li>
                  <li className="flex items-center"><Code className="w-5 h-5 mr-2 text-cyan-400 dark:text-cyan-700" /> SQL</li>
                  <li className="flex items-center"><Cpu className="w-5 h-5 mr-2 text-cyan-400 dark:text-cyan-700" /> Inteligencia Artificial</li>
                  <li className="flex items-center"><Code className="w-5 h-5 mr-2 text-cyan-400 dark:text-cyan-700" /> Git / Docker</li>
                </ul>
              </div>
            </div>
            {/* Botón para Descargar CV */}
            <div className="text-center md:text-left">
              <Button
                href="/nombre-de-tu-cv.pdf" // Asegúrate de que esta ruta sea correcta
                variant="outline"
                icon={Download}
                download="Daniel_Nunez_Rojas_CV.pdf" // Nombre sugerido para la descarga
                className="text-sm"
              >
                {t('common.download_cv')} {/* Traducido */}
              </Button>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default About;