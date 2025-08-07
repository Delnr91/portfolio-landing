
import React from 'react';
import {
  Code, Server, Database, Cloud, Laptop, GitBranch, Github, Figma, Sparkles, Component,
  Search, Zap, FileCode, Key, BarChart, TestTube, Shield,
  Network, Layout, Pyramid,
  Lightbulb, // Sugerido para IA Generativa, Prompt Engineering (ideas, creatividad)
  Pencil, // Para Prompt Engineering (escribir, guiar)
 
} from 'lucide-react'; 

/**
 * Mapeo de nombres de habilidades a componentes de íconos de lucide-react.
 * ¡Ajusta estos mapeos y las importaciones de Lucide según los íconos que elijas de lucide.dev!
 */
const iconComponents = {
  // Frontend
  'JavaScript': Zap,
  'React': Sparkles,
  'HTML5': FileCode,
  'CSS3': FileCode,
  'TypeScript': Code,
  'Tailwind CSS': Component,

  // Backend (Java/Spring)
  'Java': Code,
  'Spring Boot': Server,
  'Spring Security': Shield,
  'Microservicios': Network,
  'Patrones de Diseño': Layout,

  // Testing & Calidad
  'JUnit': TestTube,
  'Mockito': TestTube,

  // Bases de Datos
  'PostgreSQL': Database,
  'MySQL': Database,
  'SQL': Key,

  // Cloud & DevOps
  'Docker': Code,
  'Postman': Search,
  'Git': GitBranch,
  'GitHub': Github,
  'Google Cloud': Cloud,

  // IA & Herramientas Complementarias (Actualizado)
  'IA Generativa': Lightbulb,
  'Prompt Engineering': Pencil,
  'Vibe Coding': Code,
  'MCP': Lightbulb,
};

const SkillBadge = ({ name, icon }) => {
  const IconComponent = iconComponents[icon] || Laptop; // Fallback a Laptop si no se encuentra el icono

  if (!iconComponents[icon]) {
    console.warn(`SkillBadge: Icono "${icon}" no encontrado en iconComponents. Usando icono de fallback.`);
  }

  return (
    <div className="flex flex-col items-center p-4 rounded-lg shadow-md
                    bg-gray-700 hover:bg-gray-600 transition-all duration-300 transform hover:scale-105
                    border border-gray-600 dark:bg-white dark:hover:bg-gray-50 dark:border-gray-200">
      <IconComponent className="w-10 h-10 mb-2 text-cyan-400 dark:text-cyan-700 transition-colors duration-500" />
      <span className="text-sm font-medium text-stone-100 dark:text-gray-800 transition-colors duration-500">
        {name}
      </span>
    </div>
  );
};

export default SkillBadge;