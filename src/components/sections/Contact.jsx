import React, { useState } from 'react';
import { useTranslation } from 'react-i18next'; // Importa useTranslation
// eslint-disable-next-line no-unused-vars
import { motion } from 'framer-motion';
import SectionTitle from '../common/SectionTitle';
import { Mail, Linkedin, Twitter, Github, Send, Instagram } from 'lucide-react';

/**
 * Sección de Contacto.
 * Incluye un formulario de contacto funcional y enlaces a redes sociales.
 * @returns {JSX.Element} - Sección de Contacto completa.
 */
const Contact = () => {
  const { t } = useTranslation(); 

  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });
  const [status, setStatus] = useState('');
  const [showEmailHover, setShowEmailHover] = useState(false);

  const myRealEmail = "invdesdev33@gmail.com";
  const myInstagram = "[https://instagram.com/danidev.io](https://instagram.com/danidev.io)";
  const myGithub = "[https://github.com/Delnr91](https://github.com/Delnr91)";
  const myLinkedin = "[https://www.linkedin.com/in/delnr91](https://www.linkedin.com/in/delnr91)";

  const FORMSPREE_ENDPOINT = import.meta.env.VITE_FORMSPREE_ENDPOINT;

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus('sending');

    // Validación básica con textos traducidos
    if (!formData.name || !formData.email || !formData.message) {
      setStatus('error: ' + t('contact_section.form_error_required'));
      return;
    }
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(formData.email)) {
      setStatus('error: ' + t('contact_section.form_error_invalid_email'));
      return;
    }

    if (!FORMSPREE_ENDPOINT) {
        setStatus('error: ' + t('contact_section.form_error_config'));
        console.error('Error: VITE_FORMSPREE_ENDPOINT no está configurado en el archivo .env o en el entorno de despliegue.');
        return;
    }

    try {
      const response = await fetch(FORMSPREE_ENDPOINT, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          "Accept": "application/json"
        },
        body: JSON.stringify(formData)
      });

      if (response.ok) {
        setStatus('success: ' + t('contact_section.form_success'));
        setFormData({ name: '', email: '', message: '' });
      } else {
        const data = await response.json();
        if (data.errors) {
          setStatus('error: ' + data.errors.map(err => err.message).join(', '));
        } else {
          setStatus('error: ' + t('contact_section.form_error_problem'));
        }
      }
    } catch (error) {
      console.error('Error al enviar el formulario:', error);
      setStatus('error: ' + t('contact_section.form_error_connection'));
    }
  };

  return (
    <section
      id="contact"
      className="min-h-screen flex flex-col items-center justify-center px-4 py-16
                 bg-gray-800 dark:bg-blue-50 transition-colors duration-500"
    >
      <div className="container mx-auto max-w-4xl w-full flex-grow flex flex-col justify-center">
        <SectionTitle>{t('contact_section.title')}</SectionTitle> {/* Traducido */}

        <div className="grid md:grid-cols-2 gap-12 items-start w-full">
          {/* Columna del Formulario */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.6 }}
            className="bg-gray-700 p-8 rounded-lg shadow-xl border border-gray-600
                       dark:bg-white dark:border-gray-200 transition-colors duration-500"
          >
            <h3 className="text-2xl font-bold font-serif mb-6 text-stone-100
                           dark:text-gray-800 transition-colors duration-500">{t('contact_section.send_message_title')}</h3> {/* Traducido */}
            <form onSubmit={handleSubmit} className="space-y-4">
              <div>
                <label htmlFor="name" className="block text-sm font-medium text-stone-300 mb-1
                                                 dark:text-gray-700 transition-colors duration-500">{t('contact_section.name_label')}</label> {/* Traducido */}
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  className="w-full px-4 py-2 rounded-md bg-gray-600 border border-gray-500 text-stone-100
                             focus:outline-none focus:ring-2 focus:ring-cyan-500
                             dark:bg-gray-100 dark:border-gray-300 dark:text-gray-800 transition-colors duration-500"
                  required
                />
              </div>
              <div>
                <label htmlFor="email" className="block text-sm font-medium text-stone-300 mb-1
                                                  dark:text-gray-700 transition-colors duration-500">{t('contact_section.email_label')}</label> {/* Traducido */}
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  className="w-full px-4 py-2 rounded-md bg-gray-600 border border-gray-500 text-stone-100
                             focus:outline-none focus:ring-2 focus:ring-cyan-500
                             dark:bg-gray-100 dark:border-gray-300 dark:text-gray-800 transition-colors duration-500"
                  required
                />
              </div>
              <div>
                <label htmlFor="message" className="block text-sm font-medium text-stone-300 mb-1
                                                    dark:text-gray-700 transition-colors duration-500">{t('contact_section.message_label')}</label> {/* Traducido */}
                <textarea
                  id="message"
                  name="message"
                  rows="5"
                  value={formData.message}
                  onChange={handleChange}
                  className="w-full px-4 py-2 rounded-md bg-gray-600 border border-gray-500 text-stone-100
                             focus:outline-none focus:ring-2 focus:ring-cyan-500
                             dark:bg-gray-100 dark:border-gray-300 dark:text-gray-800 transition-colors duration-500"
                  required
                ></textarea>
              </div>
              {status && (
                <p className={`text-sm font-semibold mt-2
                  ${status.startsWith('success') ? 'text-emerald-400 dark:text-emerald-600' : 'text-red-400 dark:text-red-600'}`}>
                  {status.split(':')[1] || status}
                </p>
              )}
              <button
                type="submit"
                className="w-full flex items-center justify-center px-6 py-3 bg-cyan-600 text-white rounded-md font-semibold
                           hover:bg-cyan-700 focus:outline-none focus:ring-2 focus:ring-cyan-500 focus:ring-opacity-75
                           disabled:opacity-50 disabled:cursor-not-allowed
                           dark:bg-cyan-700 dark:hover:bg-cyan-800 dark:focus:ring-cyan-600
                           transition-colors duration-500"
                disabled={status === 'sending'}
              >
                {status === 'sending' ? t('common.sending') : ( // Traducido
                  <>
                    <Send className="w-5 h-5 mr-2" />
                    {t('common.send_message')} {/* Traducido */}
                  </>
                )}
              </button>
            </form>
          </motion.div>

          {/* Columna de Información de Contacto y Redes Sociales */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.6 }}
            className="bg-gray-700 p-8 rounded-lg shadow-xl border border-gray-600
                       dark:bg-white dark:border-gray-200 transition-colors duration-500"
          >
            <h3 className="text-2xl font-bold font-serif mb-6 text-stone-100
                           dark:text-gray-800 transition-colors duration-500">{t('contact_section.other_contact_title')}</h3> {/* Traducido */}
            {/* Sección de Email en Hover */}
            <div
              className="flex items-center mb-4 cursor-pointer group"
              onMouseEnter={() => setShowEmailHover(true)}
              onMouseLeave={() => setShowEmailHover(false)}
            >
              <Mail className="w-6 h-6 mr-3 text-cyan-400 dark:text-cyan-700 transition-colors duration-500 group-hover:text-cyan-600 dark:group-hover:text-cyan-800" />
              <span className="text-lg text-stone-300 dark:text-gray-700 transition-colors duration-500 group-hover:text-cyan-400 dark:group-hover:text-cyan-700">
                {showEmailHover ? (
                  <a href={`mailto:${myRealEmail}`} className="underline">
                    {myRealEmail}
                  </a>
                ) : (
                  t('common.pass_to_see_email') 
                )}
              </span>
            </div>
            {/* Enlaces a Redes Sociales */}
            <div className="mt-8">
              <h4 className="text-xl font-semibold font-serif mb-4 text-stone-100
                             dark:text-gray-800 transition-colors duration-500">{t('contact_section.follow_me_title')}</h4> {/* Traducido */}
              <div className="flex space-x-6">
                {/* LinkedIn */}
                <a
                  href={myLinkedin}
                  target="_blank" rel="noopener noreferrer"
                  className="text-cyan-400 hover:text-cyan-600 transform hover:scale-110 transition-transform duration-300
                             dark:text-cyan-700 dark:hover:text-cyan-800"
                  aria-label="LinkedIn Profile"
                >
                  <Linkedin className="w-8 h-8" />
                </a>
                {/* GitHub */}
                <a
                  href={myGithub}
                  target="_blank" rel="noopener noreferrer"
                  className="text-cyan-400 hover:text-cyan-600 transform hover:scale-110 transition-transform duration-300
                             dark:text-cyan-700 dark:hover:text-cyan-800"
                  aria-label="GitHub Profile"
                >
                  <Github className="w-8 h-8" />
                </a>
                {/* Instagram */}
                <a
                  href={myInstagram}
                  target="_blank" rel="noopener noreferrer"
                  className="text-cyan-400 hover:text-cyan-600 transform hover:scale-110 transition-transform duration-300
                             dark:text-cyan-700 dark:hover:text-cyan-800"
                  aria-label="Instagram Profile"
                >
                  <Instagram className="w-8 h-8" />
                </a>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Contact;