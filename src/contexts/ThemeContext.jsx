// src/contexts/ThemeContext.jsx
import React, { createContext, useContext, useEffect, useState } from 'react';

// 1. Crear el Contexto
// Se inicializa con un objeto que contendrá el tema actual ('dark' por defecto)
// y una función para cambiarlo.
export const ThemeContext = createContext({
  theme: 'dark', // Tema por defecto
  toggleTheme: () => {}, // Función vacía que será sobrescrita por el proveedor
});

// 2. Crear el Hook Personalizado para usar el Tema
// Este hook simplifica el acceso al contexto en otros componentes.
export const useTheme = () => useContext(ThemeContext);

// 3. Crear el Proveedor del Tema
// Este componente envolverá a toda la aplicación o a las partes que necesiten acceso al tema.
export const ThemeProvider = ({ children }) => {
  // Estado para el tema. Intenta leerlo de localStorage al inicio.
  // Si no hay nada en localStorage, usa 'dark' como tema por defecto.
  const [theme, setTheme] = useState(() => {
    // Comprueba si estamos en el navegador antes de acceder a localStorage
    if (typeof window !== 'undefined') {
      const savedTheme = localStorage.getItem('theme');
      return savedTheme ? savedTheme : 'dark';
    }
    return 'dark';
  });

  // Efecto para aplicar/quitar la clase 'dark' al <html>
  // y guardar el tema actual en localStorage cada vez que 'theme' cambia.
  useEffect(() => {
    const root = window.document.documentElement; // Accede al elemento <html>

    // Elimina la clase del tema anterior (si existe)
    root.classList.remove(theme === 'dark' ? 'light' : 'dark');
    // Añade la clase del tema actual
    root.classList.add(theme);

    // Guarda el tema en localStorage
    localStorage.setItem('theme', theme);
  }, [theme]); // Este efecto se ejecuta cada vez que el valor de 'theme' cambia

  // Función para alternar el tema entre 'light' y 'dark'
  const toggleTheme = () => {
    setTheme((prevTheme) => (prevTheme === 'light' ? 'dark' : 'light'));
  };

  // El proveedor del contexto que envuelve a los componentes 'children'
  // y les proporciona el tema actual y la función para cambiarlo.
  return (
    <ThemeContext.Provider value={{ theme, toggleTheme }}>
      {children}
    </ThemeContext.Provider>
  );
};