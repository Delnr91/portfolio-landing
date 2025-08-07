
import React from 'react';
import { useTranslation } from 'react-i18next'; 
// eslint-disable-next-line no-unused-vars
import { motion } from 'framer-motion';
import SectionTitle from '../common/SectionTitle';
import SkillBadge from '../common/SkillBadge';

const TechStack = () => {
  const { t } = useTranslation();

  const stack = {
    'Frontend': [
      { name: 'JavaScript', icon: 'JavaScript' },
      { name: 'React', icon: 'React' },
      { name: 'HTML5', icon: 'HTML5' },
      { name: 'CSS3', icon: 'CSS3' },
      { name: 'TypeScript', icon: 'TypeScript' },
      { name: 'Tailwind CSS', icon: 'Tailwind CSS' },
    ],
    'Backend': [ 
      { name: 'Java', icon: 'Java' },
      { name: 'Spring Boot', icon: 'Spring Boot' },
      { name: 'Spring Security', icon: 'Spring Security' },
      { name: 'Microservices', icon: 'Microservices' },
      { name: 'Patrones de Diseño', icon: 'Patrones de Diseño' },
    ],
    'Testing & Calidad': [
      { name: 'JUnit', icon: 'JUnit' },
      { name: 'Mockito', icon: 'Mockito' },
    ],
    'Bases de Datos': [
      { name: 'PostgreSQL', icon: 'PostgreSQL' },
      { name: 'MySQL', icon: 'MySQL' },
      { name: 'SQL', icon: 'SQL' },
    ],
    'Cloud & DevOps': [
      { name: 'Docker', icon: 'Docker' },
      { name: 'Postman', icon: 'Postman' },
      { name: 'Git', icon: 'Git' },
      { name: 'GitHub', icon: 'GitHub' },
      { name: 'Google Cloud', icon: 'Google Cloud' },
    ],
    'IA & Herramientas Complementarias': [
      { name: 'IA Generativa', icon: 'IA Generativa' },
      { name: 'Prompt Engineering', icon: 'Prompt Engineering' },
      { name: 'Vibe Coding', icon: 'Vibe Coding' },
      { name: 'MCP (Protocolo de Contexto de Modelo)', icon: 'MCP' },
    ],
  };

  
  const categoryTranslationKeys = {
    'Frontend': 'tech_stack_section.frontend_category',
    'Backend': 'tech_stack_section.backend_category',
    'Testing & Calidad': 'tech_stack_section.testing_category',
    'Bases de Datos': 'tech_stack_section.databases_category',
    'Cloud & DevOps': 'tech_stack_section.cloud_devops_category',
    'IA & Herramientas Complementarias': 'tech_stack_section.ai_tools_category',
  };

  return (
    <section
      id="tech-stack"
      className="min-h-screen flex flex-col items-center justify-center px-4 py-16
                 bg-gray-800 dark:bg-blue-50 transition-colors duration-500"
    >
      <div className="container mx-auto max-w-6xl w-full flex-grow flex flex-col justify-center">
        <SectionTitle>{t('tech_stack_section.title')}</SectionTitle>
        {Object.entries(stack).map(([categoryName, technologies]) => (
          <motion.div
            key={categoryName}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.5 }}
            className="mb-8 w-full"
          >
            <h3 className="text-2xl font-semibold font-serif mb-6 text-center text-stone-100
                           dark:text-gray-800 transition-colors duration-500">
              {t(categoryTranslationKeys[categoryName])}
            </h3>
            <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4 justify-items-center">
              {technologies.map((tech, index) => (
                <SkillBadge key={index} name={tech.name} icon={tech.icon} />
              ))}
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default TechStack;