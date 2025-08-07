import React from 'react';
import { useTranslation } from 'react-i18next';
// eslint-disable-next-line no-unused-vars
import { motion } from 'framer-motion';
import SectionTitle from '../common/SectionTitle';

const Testimonials = () => {
  const { t } = useTranslation();

  const testimonials = [
     {
      quote: t('testimonials_section.testimonial1_quote'),
      name: t('testimonials_section.testimonial1_name'),
      title: t('testimonials_section.testimonial1_title'),
      initials: "TC",
    },
    {
      quote: t('testimonials_section.testimonial2_quote'),
      name: t('testimonials_section.testimonial2_name'),
      title: t('testimonials_section.testimonial2_title'),
      initials: "GC",
    },
  ];

  if (testimonials.length === 0) {
    return null;
  }

  return (
    <section
      id="testimonials"
      className="min-h-screen flex flex-col items-center justify-center px-4 py-16
                 bg-gray-800 dark:bg-gray-50 transition-colors duration-500"
    >
      <div className="container mx-auto max-w-6xl w-full flex-grow flex flex-col justify-center">
        <SectionTitle>{t('testimonials_section.title')}</SectionTitle>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 w-full">
          {testimonials.map((testimonial, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="bg-gray-700 p-6 rounded-lg shadow-md border border-gray-600
                         dark:bg-white dark:border-gray-200 transition-colors duration-500"
            >
              <p className="italic text-lg mb-4 text-stone-300
                            dark:text-gray-700 transition-colors duration-500">
                "{testimonial.quote}"
              </p>
              <div className="flex items-center mt-4">
                
                <div className="w-12 h-12 rounded-full object-cover mr-4 flex items-center justify-center
                                bg-cyan-600 text-white font-bold text-lg
                                dark:bg-cyan-700 dark:text-stone-100">
                  {testimonial.initials} 
                </div>
                <div>
                  <p className="font-semibold text-stone-100
                                dark:text-gray-800 transition-colors duration-500">
                    {testimonial.name}
                  </p>
                  <p className="text-sm text-stone-400
                                dark:text-gray-500 transition-colors duration-500">
                    {testimonial.title}
                  </p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;