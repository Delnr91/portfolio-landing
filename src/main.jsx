
import React, { Suspense } from 'react'; 
import ReactDOM from 'react-dom/client';
import App from './App.jsx';
import './index.css';
import { ThemeProvider } from './contexts/ThemeContext.jsx';
import './i18n.js'; // Esto inicializa i18next

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    {/* Envuelve tu aplicación con Suspense */}
    {/* Muestra un mensaje de 'Cargando...' mientras las traducciones se cargan */}
    <Suspense fallback={
      <div className="min-h-screen flex items-center justify-center bg-gray-900 text-stone-100 dark:bg-stone-50 dark:text-gray-900 transition-colors duration-500">
        <p className="text-xl md:text-2xl font-semibold">Cargando portafolio...</p>
      </div>
    }>
      <ThemeProvider>
        <App />
      </ThemeProvider>
    </Suspense>
  </React.StrictMode>,
);