// tailwind.config.js
/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  darkMode: 'class',
  theme: {
    extend: {
      // AQUÍ ES DONDE NECESITAMOS AÑADIR LAS VARIANTES DE GRADIENTE PARA EL MODO OSCURO
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        // Define aquí la variante del gradiente para el modo oscuro
        // Puedes ajustar estos colores según tu preferencia para el modo claro del Hero
        'gradient-radial-dark': 'radial-gradient(var(--tw-gradient-stops))', // Usaremos esta clase para el modo claro
      },
      colors: {
        // ... tus colores personalizados si los tienes ...
      },
    },
  },
  plugins: [],
}