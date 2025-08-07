import React from 'react'; 

/**
 * Componente de Botón reutilizable.
 * Soporta diferentes variantes de estilo, iconos y enlaces o acciones.
 * @param {object} props - Propiedades del componente.
 * @param {string} [props.href] - URL si el botón es un enlace. Renderiza como 'a', si no como 'button'.
 * @param {React.ReactNode} props.children - Contenido del botón (texto).
 * @param {'primary' | 'secondary' | 'outline'} [props.variant='primary'] - Variante de estilo.
 * @param {string} [props.className=''] - Clases CSS adicionales para personalizar.
 * @param {React.ElementType} [props.icon] - Componente de icono (pasado como prop) a mostrar antes del texto.
 * @param {boolean|string} [props.download] - Activa el atributo download para enlaces. Si es true, usa nombre por defecto; si es string, usa ese nombre.
 * @returns {JSX.Element} - Elemento 'a' o 'button' estilizado.
 */
const Button = ({ href, children, variant = 'primary', className = '', icon: Icon, download, ...props }) => {
  // Estilos base comunes a todos los botones
  const baseStyle = 'inline-flex items-center justify-center px-6 py-3 rounded-lg font-semibold transition duration-300 ease-in-out focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-900'; // Offset ajustado para dark mode

  // Definición de estilos para cada variante usando clases de Tailwind
  const styles = {
    primary: 'bg-cyan-500 text-gray-900 hover:bg-cyan-600 focus:ring-cyan-400',
    secondary: 'bg-gray-700 text-stone-200 hover:bg-gray-600 focus:ring-gray-500',
    outline: 'border-2 border-cyan-400 text-cyan-400 hover:bg-cyan-400 hover:text-gray-900 focus:ring-cyan-300',
  };

  // Determina si el elemento HTML será un enlace 'a' o un botón 'button'
  const Tag = href ? 'a' : 'button';

  // Prepara las props para la descarga si la prop 'download' está presente
  const downloadProps = download ? { download: download === true ? '' : download } : {};

  return (
    // Renderiza el Tag ('a' o 'button') con los estilos combinados y props
    <Tag
      href={href} // URL del enlace (si aplica)
      className={`${baseStyle} ${styles[variant]} ${className}`} // Combina estilos base, de variante y clases extra
      {...downloadProps} // Añade props de descarga (si aplica)
      {...props} // Añade cualquier otra prop pasada (ej. onClick, target, rel, etc.)
    >
      {/* Muestra el icono si se proporciona como prop 'icon' */}
      {Icon && <Icon className="w-5 h-5 mr-2" />}
      {/* Muestra el contenido (texto) del botón */}
      {children}
    </Tag>
  );
};

export default Button;
