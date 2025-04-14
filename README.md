<<<<<<< HEAD
# Plantilla de Portafolio Personal con React, Vite y Tailwind CSS

Este repositorio contiene una plantilla para crear un portafolio personal de desarrollador web moderno, atractivo y personalizable. Está construido con tecnologías actuales y sigue una estructura de componentes organizada para facilitar su modificación.

**Tema Actual:** Dark Mode / Geometría Sagrada (Sutil) / Inspiración Nativo Norteamericana (Abstracta)

## ✨ Características

* **Stack Moderno:** React (con Hooks), Vite (desarrollo rápido), Tailwind CSS (utility-first CSS).
* **Diseño Adaptable (Responsive):** Se adapta a diferentes tamaños de pantalla (móvil, tablet, escritorio).
* **Componentes Reutilizables:** Estructura organizada en componentes comunes y de sección (`src/components/`).
* **Animaciones Sutiles:** Uso de `framer-motion` para micro-interacciones y efectos de entrada.
* **Iconografía:** Integración con `lucide-react` para iconos limpios y consistentes.
* **Formulario de Contacto Funcional:** Preparado para integración fácil con [Formspree](https://formspree.io/).
* **Optimizado para SEO (Básico):** Incluye metatags básicas en `index.html`.
* **Personalizable:** Diseñado para ser fácilmente adaptable con tu propia información, estilo y contenido.
* **Comentado:** Código fuente con comentarios para facilitar la comprensión.

## 🛠️ Stack Tecnológico

* **Frontend:** React 18+, Vite
* **Estilos:** Tailwind CSS v3+
* **Animaciones:** Framer Motion
* **Iconos:** Lucide React
* **Formulario:** Formspree (servicio externo)

## 📁 Estructura del Proyecto

El código fuente (`src`) está organizado de la siguiente manera:

/src|-- /assets             # Imágenes, SVGs u otros recursos estáticos usados en componentes|-- /components|   |-- /common         # Componentes pequeños y reutilizables (Button, SectionTitle, Card, Badge)|   |-- /sections       # Componentes grandes que representan secciones de la página (Hero, About, Projects, etc.)|-- App.jsx             # Componente principal que ensambla las secciones y maneja navegación|-- index.css           # Archivo CSS global (principalmente para directivas de Tailwind)|-- main.jsx            # Punto de entrada de la aplicación React/Vite
## 🚀 Cómo Empezar (Setup Local)

1.  **Clonar el Repositorio (si está en GitHub/GitLab):**
    ```bash
    git clone <URL_DEL_REPOSITORIO>
    cd <NOMBRE_CARPETA_PROYECTO>
    ```
    *Si solo tienes los archivos localmente, simplemente navega a la carpeta del proyecto en tu terminal.*

2.  **Instalar Dependencias:** (Asegúrate de tener Node.js y npm instalados)
    ```bash
    npm install
    ```
    *(O `yarn install` si prefieres usar Yarn)*

3.  **Ejecutar el Servidor de Desarrollo:**
    ```bash
    npm run dev
    ```
    *(O `yarn dev`)*

4.  Abre tu navegador y ve a `http://localhost:5173` (o la URL que indique la terminal).

## 🎨 Guía de Personalización

Para adaptar esta plantilla a tu portafolio personal, necesitarás modificar varios archivos. Aquí tienes una guía detallada:

### Información General y Textos

* **Tu Nombre:**
    * `src/components/sections/Hero.jsx`: Dentro del `<h1>`.
    * `src/components/sections/Footer.jsx`: En el texto de copyright.
    * `public/index.html` (o `index.html` raíz): Dentro de la etiqueta `<title>` y `<meta name="description">`.
* **Título Profesional:**
    * `src/components/sections/Hero.jsx`: En el `<p>` debajo del nombre.
* **Propuesta de Valor / Tagline:**
    * `src/components/sections/Hero.jsx`: En el párrafo principal debajo del título profesional.
* **Texto "Sobre Mí":**
    * `src/components/sections/About.jsx`: Reemplaza el contenido del párrafo principal (`<p>`).
* **Filosofía / Enfoque:**
    * `src/components/sections/About.jsx`: Edita el texto dentro del `<div>` correspondiente.
* **Disponibilidad:**
    * `src/components/sections/Hero.jsx`: Busca el `<div>` con posicionamiento absoluto y modifica el texto (ej. "Disponible para Trabajar", "Abierto a ofertas", etc.) o elimina el `div` si no quieres mostrarlo.
* **Textos de Secciones (Títulos, Botones, etc.):**
    * Revisa cada componente en `src/components/sections/` y `src/components/common/` para ajustar textos específicos de botones, etiquetas o párrafos introductorios (ej. título del formulario de contacto en `Contact.jsx`).

### Estilos y Tema Visual

* **Paleta de Colores:**
    * Los colores se definen mediante clases de utilidad de Tailwind directamente en los componentes (`bg-gray-900`, `text-cyan-400`, `border-orange-600`, etc.).
    * Busca y reemplaza estas clases en los archivos `.jsx` para cambiar la paleta. Los colores principales actuales están comentados al inicio de `App.jsx` como referencia.
    * Para cambios globales, puedes definir colores personalizados en `tailwind.config.js` dentro de `theme.extend.colors = { ... }` y luego usar clases como `bg-primary`, `text-accent`, etc. (Consulta la [documentación de Tailwind](https://tailwindcss.com/docs/customizing-colors)).
* **Fuentes:**
    * **Cargar Fuentes:** Añade o modifica los enlaces `<link>` a Google Fonts (u otra fuente) dentro del `<head>` en `index.html`.
    * **Configurar en Tailwind:** Define qué fuente corresponde a `font-sans` (cuerpo) y `font-serif` (títulos) en `tailwind.config.js` dentro de `theme.extend.fontFamily`.
* **Patrones / Efectos Visuales:**
    * El gradiente radial del Hero está definido en `tailwind.config.js` (`theme.extend.backgroundImage`) y se aplica con `bg-gradient-radial` en `Hero.jsx`. Puedes modificarlo o quitarlo.
    * El detalle del Footer es un `<div>` con un gradiente lineal en `Footer.jsx`.
    * Para patrones más complejos (geométricos, etc.), considera usar imágenes de fondo SVG aplicadas con CSS o estilos inline.

### Contenido Específico

* **Foto de Perfil:**
    1.  Coloca tu archivo de imagen (ej. `tu-foto.jpg`) en la carpeta `public/assets/images/` (crea las carpetas si no existen).
    2.  Abre `src/components/sections/About.jsx`.
    3.  Busca la etiqueta `<img>`.
    4.  Cambia el atributo `src` al path público de tu imagen (ej. `src="/assets/images/tu-foto.jpg"`). Recuerda usar la barra `/` al inicio para rutas desde `public`.
    5.  Actualiza el atributo `alt` con una descripción tuya.
* **Habilidades (Stack Tecnológico):**
    1.  Abre `src/components/sections/TechStack.jsx`.
    2.  Modifica el objeto `const stack = { ... }`.
    3.  Añade/elimina/modifica categorías (claves del objeto, ej. `'Frontend'`).
    4.  Dentro de cada categoría, añade/elimina/modifica los objetos `{ name: 'NombreTecnologia', icon: IconoLucide }`.
    5.  Asegúrate de importar los iconos (`IconoLucide`) necesarios desde `lucide-react` al principio del archivo. Sé honesto sobre tu nivel de dominio.
* **Experiencia:**
    1.  Abre `src/components/sections/Experience.jsx`.
    2.  Modifica el array `const experiences = [ ... ]`.
    3.  Añade/elimina/modifica objetos con `company`, `role`, `dates`, y `description` (una lista de puntos clave).
    4.  Si no tienes experiencia para mostrar, simplemente deja el array vacío (`const experiences = []`) y la sección no se renderizará.
* **Proyectos:**
    1.  Abre `src/components/sections/Projects.jsx`.
    2.  Modifica el array `const projectData = [ ... ]`.
    3.  Añade/elimina/modifica objetos para cada proyecto, asegurándote de completar: `title`, `description` (detallada: problema, rol, impacto, aprendizaje), `imageUrl` (imagen de alta calidad, colócala en `public/assets/images/` y usa la ruta pública `/assets/images/...`), `techStack` (array de strings), `liveUrl` (URL de la demo), `repoUrl` (URL del repo).
* **Testimonios:**
    1.  Abre `src/components/sections/Testimonials.jsx`.
    2.  Modifica el array `const testimonialsData = [ ... ]`.
    3.  Añade/elimina/modifica objetos con `quote`, `name`, `title`.
    4.  Si no tienes testimonios, deja el array vacío (`const testimonialsData = []`) y se mostrará un mensaje indicándolo.
* **Descarga de CV:**
    1.  Coloca tu archivo CV (preferiblemente PDF) en la carpeta `public/` (ej. `public/MiCV.pdf`).
    2.  Abre `src/components/sections/About.jsx`.
    3.  Busca el componente `<Button>` para "Descargar CV".
    4.  Actualiza el prop `href` con la ruta pública a tu CV (ej. `href="/MiCV.pdf"`).
    5.  Actualiza el prop `download` con el nombre que quieres que tenga el archivo al descargarse (ej. `download="TuNombre_CV.pdf"`).
* **Formulario de Contacto (Formspree):**
    1.  Ve a [Formspree.io](https://formspree.io/), regístrate y crea un nuevo formulario asociado a tu email.
    2.  Copia la URL del endpoint que te proporciona Formspree (ej. `https://formspree.io/f/xxxxxxxx`).
    3.  Abre `src/components/sections/Contact.jsx`.
    4.  Busca la línea `const formspreeEndpoint = '...';`.
    5.  Reemplaza `'https://formspree.io/f/YOUR_FORMSPREE_ID'` con tu URL real de Formspree.
* **Enlaces Sociales/Contacto:**
    1.  Abre `src/components/sections/Contact.jsx`.
    2.  Busca la sección de enlaces (`<a>` tags) al final.
    3.  Actualiza los atributos `href` para tu email (`mailto:`), GitHub, LinkedIn y YouTube con tus URLs personales.

### Iconos

* Todos los iconos provienen de `lucide-react`. Puedes buscar más iconos en [lucide.dev](https://lucide.dev/) e importarlos en los componentes donde los necesites.

## ☁️ Despliegue (Deploy)

* **Vercel (Recomendado):** Conecta tu repositorio de GitHub/GitLab/Bitbucket a Vercel. Detectará automáticamente que es un proyecto Vite y lo desplegará fácilmente. Configura las variables de entorno si es necesario (aunque esta plantilla no usa ninguna por defecto).
* **Netlify:** Similar a Vercel, conecta tu repositorio Git.
* **Otros:** Puedes generar los archivos estáticos de producción con `npm run build` y subirlos a cualquier hosting estático.

---

¡Esperamos que esta plantilla te sea útil! Siéntete libre de adaptarla completamente a tu estilo y necesidades.
=======
# portfolio-landing
Plantilla Portafolio
>>>>>>> 180e42807e3d317caaa524217583f2d1db5f706e
