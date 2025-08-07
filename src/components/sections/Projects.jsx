
import React from 'react';
import SectionTitle from '../common/SectionTitle';
import ProjectCard from '../common/ProjectCard';
import { useTranslation } from 'react-i18next';

const Projects = () => {
  const { t } = useTranslation();

   const projectData = [
     {
      title: t('projects_section.project1_title'), 
      description: t('projects_section.project1_description'),
      imageUrl: null, 
      techStack: ['React', 'Spring Boot', 'Java 21', 'PostgreSQL', 'MySQL', 'Docker', 'Google Cloud Platform', 'Render.com', 'REST API', 'Tailwind CSS', 'Vite', 'Postman', 'Git', 'GitHub'],
      liveUrl: 'https://gestiondeclientes.onrender.com',
      repoUrl: 'https://github.com/Delnr91/GestionDeClientes',
    },
    {
      
      title: t('projects_section.project2_title'),
      description: t('projects_section.project2_description'),
      imageUrl: 'https://placehold.co/600x400/1f2937/9ca3af?text=InmoRISM', 
      techStack: ['Java 21', 'Spring Boot 3', 'Microservices', 'Spring Security', 'Netflix Eureka', 'Feign Client', 'Resilience4j', 'PostgreSQL', 'MySQL', 'Thymeleaf', 'Maven', 'JUnit 5', 'Mockito', 'Swagger', 'Git', 'GitHub', 'Docker'],
      liveUrl: 'https://youtu.be/T_MMc3W5i7o',
      repoUrl: 'https://github.com/Delnr91/ProyectoMicrosrvices',
    },
   ];

  return (
    <section
      id="projects"
      className="min-h-screen flex flex-col items-center justify-center px-4 py-16
                 bg-gray-900 dark:bg-blue-50 transition-colors duration-500"
    >
      <div className="container mx-auto max-w-6xl w-full flex-grow flex flex-col justify-center">
        <SectionTitle>{t('projects_section.title')}</SectionTitle>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 w-full">
          {projectData.map((project, index) => (
            <ProjectCard key={index} {...project} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;