import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react-swc'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  base: '/portfolio-landing/', // Agregar la ruta base del portafolio, para evitar pantalla blanca en el deploy*
})