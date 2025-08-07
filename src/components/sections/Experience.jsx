import React from 'react';
import { useTranslation } from 'react-i18next'; 
// eslint-disable-next-line no-unused-vars
import { motion } from 'framer-motion';
import SectionTitle from '../common/SectionTitle';

/**
 * Sección de Experiencia Laboral o Logros.
 * Muestra una línea de tiempo con hitos profesionales o académicos.
 * Es opcional, no se renderiza si el array `experiences` está vacío.
 * @returns {JSX.Element|null} - Sección de Experiencia o null si no hay datos.
 */
const Experience = () => {
  const { t } = useTranslation(); 
  // TU EXPERIENCIA 
  const experiences = [
    {
      company: t('experience_section.project_name'), // InmoRISM
      role: t('experience_section.project_role'), // Desarrollador Backend (Microservicios)
      dates: t('experience_section.project_dates'), // Noviembre 2024 - Marzo 2025
      description: [
        t('experience_section.project_description_points.0'), // Punto 1
        t('experience_section.project_description_points.1'), // Punto 2
        t('experience_section.project_description_points.2'), // Punto 3
        t('experience_section.project_description_points.3'), // Punto 4
        t('experience_section.project_description_points.4'), // Punto 5
        t('experience_section.project_description_points.5'), // Punto 6
        t('experience_section.project_description_points.6'), // Punto 7
        t('experience_section.project_description_points.7'), // Punto 8 (Testing)
        t('experience_section.project_description_points.8')  // Punto 9 (Documentación)
      ],
    },
  ];

  // --- Renderizado Condicional ---
  if (experiences.length === 0) {
    return null;
  }

  // --- Renderizado de la Sección (si hay experiencias) ---
  return (
    <section
      id="experience"
      className="min-h-screen flex flex-col items-center justify-center px-4 py-16
                 bg-gray-900 dark:bg-blue-50 transition-colors duration-500"
    >
      <div className="container mx-auto max-w-4xl w-full flex-grow flex flex-col justify-center">
        <SectionTitle>{t('experience_section.title')}</SectionTitle>
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.7 }}
          className="space-y-8 relative border-l-2 border-gray-700 pl-6
                     dark:border-gray-300 transition-colors duration-500"
        >
          {experiences.map((exp, index) => (
            <div key={index} className="relative">
              <div className="absolute -left-[34px] top-1 w-4 h-4 bg-cyan-400 rounded-full border-4 border-gray-900
                               dark:bg-cyan-700 dark:border-stone-50 transition-colors duration-500"></div>
              <h3 className="text-xl font-semibold font-serif text-stone-100
                             dark:text-gray-800 transition-colors duration-500">{exp.role}</h3>
              <p className="text-orange-500 font-medium mb-1
                            dark:text-orange-700 transition-colors duration-500">{exp.company}</p>
              <p className="text-sm text-stone-500 mb-2
                            dark:text-gray-500 transition-colors duration-500">{exp.dates}</p>
              <ul className="list-disc list-inside text-stone-400 space-y-1 text-sm
                             dark:text-gray-600 transition-colors duration-500">
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

export default Experience;