import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { useLanguage } from '../contexts/LanguageContext';
import { FaWhatsapp } from 'react-icons/fa';

const Materials = () => {
  const { t } = useLanguage();
  const [ref, inView] = useInView({
    threshold: 0.1,
    triggerOnce: true,
  });

  const books = [
    {
      image: '/assets/books/sat_math1.png',
      title: t('materials.book1.title'),
      description: t('materials.book1.description'),
    },
    {
      image: '/assets/books/sat_math2.png',
      title: t('materials.book2.title'),
      description: t('materials.book2.description'),
    },
    {
      image: '/assets/books/examoon1.png',
      title: t('materials.book3.title'),
      description: t('materials.book3.description'),
    },
    {
      image: '/assets/books/examoon2.png',
      title: t('materials.book4.title'),
      description: t('materials.book4.description'),
    },
  ];

  const handleOrder = () => {
    window.open('https://wa.me/994778123456', '_blank');
  };

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15,
      },
    },
  };

  const itemVariants = {
    hidden: { y: 30, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        type: 'spring',
        stiffness: 100,
      },
    },
  };

  return (
    <section id="materials" className="py-20 bg-light-gray" ref={ref}>
      <div className="section-padding">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-4 text-primary">
            {t('materials.title')}
          </h2>
        </motion.div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8"
        >
          {books.map((book, index) => (
            <motion.div
              key={index}
              variants={itemVariants}
              whileHover={{ y: -10 }}
              className="group relative"
            >
              <div className="bg-white rounded-xl overflow-hidden shadow-lg h-full flex flex-col">
                {/* Book Image Container */}
                <div className="relative h-64 bg-gradient-to-br from-blue-50 to-orange-50 p-4 overflow-hidden">
                  <motion.div
                    whileHover={{ scale: 1.1, rotate: 2 }}
                    transition={{ duration: 0.3 }}
                    className="h-full flex items-center justify-center"
                  >
                    <img
                      src={book.image}
                      alt={book.title}
                      className="max-h-full max-w-full object-contain drop-shadow-lg"
                    />
                  </motion.div>
                </div>

                {/* Book Details */}
                <div className="p-6 flex-grow flex flex-col">
                  <h3 className="text-lg font-bold text-gray-800 mb-2">
                    {book.title}
                  </h3>
                  <p className="text-sm text-gray-600 mb-4 flex-grow">
                    {book.description}
                  </p>

                  {/* Order Button */}
                  <motion.button
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    onClick={handleOrder}
                    className="w-full bg-gradient-to-r from-green-500 to-green-600 text-white py-3 rounded-lg font-semibold flex items-center justify-center space-x-2 shadow-md hover:shadow-lg transition-shadow"
                  >
                    <FaWhatsapp className="text-xl" />
                    <span>{t('materials.orderNow')}</span>
                  </motion.button>
                </div>

                {/* Decorative Badge - Temporarily Hidden */}
                {/* <motion.div
                  className="absolute top-4 right-4 bg-accent text-white text-xs px-2 py-1 rounded-full opacity-0 group-hover:opacity-100 transition-opacity"
                  initial={{ rotate: -15 }}
                  whileHover={{ rotate: 0 }}
                >
                  NEW
                </motion.div> */}
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default Materials;