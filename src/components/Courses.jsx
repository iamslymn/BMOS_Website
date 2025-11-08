import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { useLanguage } from '../contexts/LanguageContext';
import { FaTimes, FaWhatsapp } from 'react-icons/fa';

const Courses = () => {
  const { t } = useLanguage();
  const [ref, inView] = useInView({
    threshold: 0.1,
    triggerOnce: true,
  });
  const [selectedCourse, setSelectedCourse] = useState(null);

  const courses = [
    {
      image: '/assets/Our Programs/SAT Math.png',
      title: t('courses.satMath.title'),
      description: t('courses.satMath.description'),
      details: t('courses.satMath.details'),
      color: 'from-blue-500 to-blue-600',
    },
    {
      image: '/assets/Our Programs/SAT Verbal.png',
      title: t('courses.satVerbal.title'),
      description: t('courses.satVerbal.description'),
      details: t('courses.satVerbal.details'),
      color: 'from-purple-500 to-purple-600',
    },
    {
      image: '/assets/Our Programs/AP Calculus BC.png',
      title: t('courses.apCalculus.title'),
      description: t('courses.apCalculus.description'),
      details: t('courses.apCalculus.details'),
      color: 'from-green-500 to-green-600',
    },
    {
      image: '/assets/Our Programs/AP Statistics.png',
      title: t('courses.apStatistics.title'),
      description: t('courses.apStatistics.description'),
      details: t('courses.apStatistics.details'),
      color: 'from-orange-500 to-orange-600',
    },
    {
      image: '/assets/Our Programs/AP Computer Science.png',
      title: t('courses.apCompSci.title'),
      description: t('courses.apCompSci.description'),
      details: t('courses.apCompSci.details'),
      color: 'from-pink-500 to-pink-600',
    },
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
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
    <section id="courses" className="py-20 bg-light-gray" ref={ref}>
      <div className="section-padding">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-4 text-primary">
            {t('courses.title')}
          </h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            {t('courses.subtitle')}
          </p>
        </motion.div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8"
        >
          {courses.map((course, index) => (
            <motion.div
              key={index}
              variants={itemVariants}
              whileHover={{ 
                scale: 1.05,
                transition: { type: "spring", stiffness: 300 }
              }}
              onClick={() => setSelectedCourse(course)}
              className="bg-white rounded-2xl shadow-lg overflow-hidden group cursor-pointer"
            >
              {/* Image Header */}
              <div className="h-48 relative overflow-hidden bg-gray-100">
                <motion.div
                  className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent opacity-0"
                  whileHover={{ opacity: 1 }}
                  transition={{ duration: 0.3 }}
                />
                <img 
                  src={course.image} 
                  alt={course.title}
                  className="w-full h-full object-cover"
                />
              </div>
              
              {/* Card Content */}
              <div className="p-6">
                <h3 className="text-lg sm:text-xl font-bold text-gray-800 mb-3">
                  {course.title}
                </h3>
                <p className="text-sm sm:text-base text-gray-600 mb-4">
                  {course.description}
                </p>
                
                <motion.button
                  whileHover={{ x: 5 }}
                  onClick={(e) => {
                    e.stopPropagation();
                    setSelectedCourse(course);
                  }}
                  className="flex items-center text-primary font-semibold group"
                >
                  {t('courses.learnMore')}
                  <motion.svg
                    className="w-5 h-5 ml-2"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                    animate={{ x: 0 }}
                    whileHover={{ x: 5 }}
                  >
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                  </motion.svg>
                </motion.button>
              </div>

              {/* Hover Effect Border */}
              <motion.div
                className="absolute inset-0 border-2 border-primary rounded-2xl opacity-0"
                whileHover={{ opacity: 1 }}
                transition={{ duration: 0.3 }}
                style={{ pointerEvents: 'none' }}
              />
            </motion.div>
          ))}
        </motion.div>
      </div>

      {/* Modal */}
      <AnimatePresence>
        {selectedCourse && (
          <>
            {/* Backdrop */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setSelectedCourse(null)}
              className="fixed inset-0 bg-black/60 backdrop-blur-sm z-50"
            />
            
            {/* Modal Content */}
            <motion.div
              initial={{ opacity: 0, scale: 0.9, y: 50 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.9, y: 50 }}
              transition={{ type: 'spring', damping: 25 }}
              className="fixed inset-0 z-50 flex items-center justify-center p-4"
              onClick={() => setSelectedCourse(null)}
            >
              <div
                onClick={(e) => e.stopPropagation()}
                className="bg-white rounded-2xl shadow-2xl max-w-2xl w-full max-h-[90vh] overflow-y-auto"
              >
                {/* Modal Header */}
                <div className="relative">
                  {/* Image Background */}
                  <div className="h-56 relative overflow-hidden">
                    <img 
                      src={selectedCourse.image} 
                      alt={selectedCourse.title}
                      className="w-full h-full object-cover"
                    />
                    <div className={`absolute inset-0 bg-gradient-to-r ${selectedCourse.color} opacity-80`} />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
                    
                    <button
                      onClick={() => setSelectedCourse(null)}
                      className="absolute top-4 right-4 text-white hover:bg-white/20 rounded-full p-2 transition-colors z-10"
                    >
                      <FaTimes className="text-xl" />
                    </button>
                    
                    <div className="absolute bottom-0 left-0 right-0 p-6 text-white">
                      <h3 className="text-3xl font-bold mb-2">{selectedCourse.title}</h3>
                      <p className="text-white/90">{selectedCourse.description}</p>
                    </div>
                  </div>
                </div>

                {/* Modal Body */}
                <div className="p-4 sm:p-6">
                  <h4 className="text-lg sm:text-xl font-bold text-gray-800 mb-4">{t('courses.courseDetails')}</h4>
                  <p className="text-sm sm:text-base text-gray-700 leading-relaxed">
                    {selectedCourse.details}
                  </p>
                  
                  <div className="mt-8 flex flex-col sm:flex-row gap-3 justify-end">
                    <button
                      onClick={() => setSelectedCourse(null)}
                      className="px-6 py-3 rounded-full font-semibold text-gray-700 bg-gray-100 hover:bg-gray-200 transition-all duration-300"
                    >
                      Close
                    </button>
                    <button
                      onClick={() => {
                        window.open('https://wa.me/994778123456?text=Hello! I would like to register for ' + selectedCourse.title, '_blank');
                      }}
                      className="px-6 py-3 rounded-full font-semibold text-white bg-gradient-to-r from-green-500 to-green-600 hover:from-green-600 hover:to-green-700 transition-all duration-300 shadow-md hover:shadow-lg flex items-center justify-center space-x-2"
                    >
                      <FaWhatsapp className="text-xl" />
                      <span>{t('courses.registerNow')}</span>
                    </button>
                  </div>
                </div>
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </section>
  );
};

export default Courses;