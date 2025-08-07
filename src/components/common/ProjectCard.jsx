// src/components/common/ProjectCard.jsx
import React from 'react';
// eslint-disable-next-line no-unused-vars
import { motion } from 'framer-motion';
import { Github, ExternalLink } from 'lucide-react';
import { useTranslation } from 'react-i18next';

const ProjectCard = ({ title, description, imageUrl, techStack, liveUrl, repoUrl }) => {
  const { t } = useTranslation();

  return (
    <div className="flex flex-col rounded-lg shadow-xl overflow-hidden
                    bg-gray-800 border border-gray-700
                    dark:bg-white dark:border-gray-200
                    hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-1">
      {/* Contenedor del banner/imagen. Si imageUrl es null, solo muestra el título h2 como banner. */}
      <div className="w-full h-48 flex items-center justify-center p-4
                      bg-gray-700 text-stone-100 dark:bg-gray-100 dark:text-gray-800">
        {imageUrl ? ( // Si imageUrl existe, renderiza la imagen
          <img
            className="w-full h-full object-cover object-center"
            src={imageUrl}
            alt={t('projects_section.project_image_alt', { title: title })}
            onError={(e) => { e.target.onerror = null; e.target.src='https://placehold.co/600x400/374151/e5e7eb'; }}
          />
        ) : ( // Si imageUrl es null, renderiza el título como un banner de texto
          <h2 className="text-2xl md:text-3xl font-bold font-serif text-center break-words leading-tight px-2"> {/* px-2 para asegurar padding si el título es largo */}
            {title}
          </h2>
        )}
      </div>
      {/* Contenido de texto de la tarjeta (el h3 principal) */}
      <div className="p-6 flex-grow">
        {/* Este h3 se muestra DESPUÉS del banner/imagen/título.
            Puedes mantenerlo o eliminarlo si el h2 de arriba es suficiente.
            Para mantenerlo como lo tenías, lo dejamos.
        */}
        <h3 className="text-xl font-semibold font-serif mb-3 text-stone-100
                       dark:text-gray-800 transition-colors duration-500">
          {title}
        </h3>
        <p className="text-stone-300 text-sm mb-4 leading-relaxed
                      dark:text-gray-600 transition-colors duration-500">
          {description}
        </p>
        <div className="mb-4">
          <h4 className="text-sm font-medium text-cyan-400 mb-2
                         dark:text-cyan-700 transition-colors duration-500">
            {t('common.technologies_used')}
          </h4>
          <div className="flex flex-wrap gap-2">
            {techStack.map((tech, index) => (
              <span
                key={index}
                className="px-3 py-1 bg-gray-700 text-xs rounded-full font-medium text-stone-200
                           dark:bg-gray-200 dark:text-gray-700 transition-colors duration-500"
              >
                {tech}
              </span>
            ))}
          </div>
        </div>
      </div>
      {/* Contenedor de botones de acción */}
      <div className="p-6 border-t border-gray-700 flex justify-center gap-4 mt-auto
                      dark:border-gray-200 transition-colors duration-500">
        {liveUrl && (
          <a
            href={liveUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center px-4 py-2 bg-cyan-600 text-white rounded-md text-sm font-medium
                       hover:bg-cyan-700 focus:outline-none focus:ring-2 focus:ring-cyan-500 focus:ring-opacity-75
                       dark:bg-cyan-700 dark:hover:bg-cyan-800 dark:focus:ring-cyan-600
                       transition-colors duration-500"
          >
            <ExternalLink className="w-4 h-4 mr-2" />
            {t('common.demo')}
          </a>
        )}
        {repoUrl && (
          <a
            href={repoUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center px-4 py-2 bg-gray-700 text-stone-200 rounded-md text-sm font-medium
                       hover:bg-gray-600 focus:outline-none focus:ring-2 focus:ring-gray-500 focus:ring-opacity-75
                       dark:bg-gray-200 dark:text-gray-700 dark:hover:bg-gray-300 dark:focus:ring-gray-400
                       transition-colors duration-500"
          >
            <Github className="w-4 h-4 mr-2" />
            {t('common.github')}
          </a>
        )}
      </div>
    </div>
  );
};

export default ProjectCard;