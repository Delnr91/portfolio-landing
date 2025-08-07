
import React from 'react';
import { useTheme } from '../../contexts/ThemeContext';

import { FiSun, FiMoon } from 'react-icons/fi'; 

const ThemeToggle = () => {
  const { theme, toggleTheme } = useTheme();

  return (
    <button
      onClick={toggleTheme}
      className={`p-2 rounded-full transition-colors duration-300
        ${theme === 'dark' ? 'bg-gray-700 text-yellow-300 hover:bg-gray-600' : 'bg-blue-300 text-yellow-800 hover:bg-blue-400'}
        focus:outline-none focus:ring-2 focus:ring-opacity-75
        ${theme === 'dark' ? 'focus:ring-yellow-400' : 'focus:ring-blue-500'}
      `}
      aria-label={theme === 'dark' ? 'Cambiar a modo claro' : 'Cambiar a modo oscuro'}
    >
      {/* Usa los componentes de ícono directamente */}
      {theme === 'dark' ? (
        <FiMoon className="h-6 w-6" /> // Ícono de luna para el modo oscuro
      ) : (
        <FiSun className="h-6 w-6" /> // Ícono de sol para el modo claro
      )}
    </button>
  );
};

export default ThemeToggle;