// src/i18n.js
import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import LanguageDetector from 'i18next-browser-languagedetector';
import Backend from 'i18next-http-backend';

i18n
  .use(Backend)
  .use(LanguageDetector)
  .use(initReactI18next)
  .init({
    backend: {
      loadPath: '/locales/{{lng}}/{{ns}}.json',
    },
    supportedLngs: ['es', 'en'],
    fallbackLng: 'es',
    detection: {
      order: ['queryString', 'cookie', 'localStorage', 'navigator', 'htmlTag'],
      caches: ['localStorage'],
    },
    defaultNS: 'translation',
    debug: true, // Puedes cambiar a 'false' una vez que funcione bien
    interpolation: {
      escapeValue: false,
    },
    // ¡CAMBIADO A TRUE! Esto permite que React.Suspense funcione con las traducciones
    react: {
      useSuspense: true,
    },
  });

export default i18n;