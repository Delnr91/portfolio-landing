import React from 'react'; // Importar React
import SectionTitle from '../common/SectionTitle'; // Importar título de sección reutilizable
import ProjectCard from '../common/ProjectCard'; // Importar la tarjeta de proyecto reutilizable

/**
 * Sección de Proyectos Destacados.
 * Muestra una cuadrícula de componentes ProjectCard.
 * @returns {JSX.Element} - Sección de Proyectos completa.
 */
const Projects = () => {
   // DATOS DE TUS PROYECTOS (¡Reemplazar con los tuyos!)
   // Define aquí un array con la información de cada proyecto que quieras mostrar.
   // Asegúrate de llenar todos los campos necesarios para cada ProjectCard.
   const projectData = [
     {
      title: 'Proyecto Ejemplo 1: E-commerce con Recomendaciones IA',
      description: 'Plataforma de e-commerce completa con carrito, pagos (simulado) y motor de recomendaciones basado en IA...',
      imageUrl: 'https://placehold.co/600x400/1f2937/9ca3af?text=Proyecto+1', // URL de la imagen
      techStack: ['React', 'Node.js', 'Express', 'PostgreSQL', 'Tailwind', 'Python'], // Tecnologías usadas
      liveUrl: '#', // URL de la demo en vivo (o null/undefined si no hay)
      repoUrl: '#', // URL del repositorio (o null/undefined si no hay)
    },
    {
      title: 'Proyecto Ejemplo 2: Dashboard Analítico',
      description: 'Dashboard para visualizar datos de ventas en tiempo real...',
      imageUrl: 'https://placehold.co/600x400/1f2937/9ca3af?text=Proyecto+2',
      techStack: ['React', 'D3.js', 'Python', 'Flask'],
      liveUrl: '#',
      repoUrl: '#',
    },
    {
      title: 'Proyecto Ejemplo 3: Blog Personal',
      description: 'Blog con CMS propio usando Spring Boot...',
      imageUrl: 'https://placehold.co/600x400/1f2937/9ca3af?text=Proyecto+3',
      techStack: ['Spring Boot', 'Java', 'Thymeleaf', 'MySQL', 'AWS S3'],
      // liveUrl: null, // Ejemplo sin demo en vivo
      repoUrl: '#',
    },
     // Añade más objetos de proyecto aquí según necesites
   ];

  return (
    // Contenedor de la sección con ID, estilos de fondo y padding
    <section id="projects" className="py-16 md:py-24 bg-gray-900 px-4">
      {/* Contenedor principal con ancho máximo */}
      <div className="container mx-auto max-w-6xl">
        {/* Título de la sección */}
        <SectionTitle>Proyectos Destacados</SectionTitle>
        {/* Cuadrícula responsiva para mostrar las tarjetas de proyecto */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {/* Mapeo del array projectData para renderizar un ProjectCard por cada objeto */}
          {projectData.map((project, index) => (
            // Pasa todas las propiedades del objeto 'project' al componente ProjectCard
            <ProjectCard key={index} {...project} />
          ))}
        </div>
      </div>
    </section>
  );
};

// Exporta el componente para usarlo en App.jsx
export default Projects;
