import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { useLanguage } from '../contexts/LanguageContext';

const Mission = () => {
  const { t } = useLanguage();
  const [ref, inView] = useInView({
    threshold: 0.3,
    triggerOnce: true,
  });

  return (
    <section id="mission" className="py-20 relative overflow-hidden bg-white">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute inset-0" style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23002B7F' fill-opacity='1'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`
        }} />
      </div>

      {/* Animated Lines Background */}
      <motion.div
        className="absolute inset-0 pointer-events-none"
        initial={{ opacity: 0 }}
        animate={{ opacity: 0.05 }}
        transition={{ duration: 2 }}
      >
        <svg className="w-full h-full" preserveAspectRatio="none">
          <motion.line
            x1="0%"
            y1="50%"
            x2="100%"
            y2="50%"
            stroke="#002B7F"
            strokeWidth="2"
            initial={{ pathLength: 0 }}
            animate={{ pathLength: 1 }}
            transition={{ duration: 3, ease: "easeInOut", repeat: Infinity }}
          />
          <motion.line
            x1="50%"
            y1="0%"
            x2="50%"
            y2="100%"
            stroke="#FF7A00"
            strokeWidth="2"
            initial={{ pathLength: 0 }}
            animate={{ pathLength: 1 }}
            transition={{ duration: 3, delay: 0.5, ease: "easeInOut", repeat: Infinity }}
          />
          <motion.circle
            cx="50%"
            cy="50%"
            r="100"
            stroke="#002B7F"
            strokeWidth="1"
            fill="none"
            initial={{ scale: 0, opacity: 1 }}
            animate={{ scale: 3, opacity: 0 }}
            transition={{ duration: 4, repeat: Infinity }}
          />
        </svg>
      </motion.div>

      <div className="relative z-10" ref={ref}>
        <div className="section-padding">
          <div className="max-w-4xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6 }}
            className="text-center"
          >
            <motion.h2
              initial={{ opacity: 0, scale: 0.9 }}
              animate={inView ? { opacity: 1, scale: 1 } : {}}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="text-4xl md:text-5xl font-bold mb-12 text-primary"
            >
              {t('mission.title')}
            </motion.h2>

            <motion.div
              initial={{ opacity: 0, y: 40 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ 
                duration: 1,
                delay: 0.4,
                ease: [0.25, 0.1, 0.25, 1]
              }}
              className="relative"
            >
              {/* Quote Mark */}
              <motion.div
                initial={{ opacity: 0, scale: 0 }}
                animate={inView ? { opacity: 0.1, scale: 1 } : {}}
                transition={{ 
                  duration: 0.8, 
                  delay: 0.5,
                  ease: "easeOut"
                }}
                className="absolute -top-10 left-0 text-8xl text-primary font-serif"
              >
                "
              </motion.div>

              <motion.p
                initial={{ opacity: 0, y: 30 }}
                animate={inView ? { opacity: 1, y: 0 } : {}}
                transition={{ 
                  duration: 1.2, 
                  delay: 0.6,
                  ease: [0.25, 0.1, 0.25, 1]
                }}
                className="text-xl md:text-2xl text-gray-800 leading-relaxed px-8 py-6 bg-gradient-to-r from-blue-50 to-orange-50 rounded-2xl shadow-lg relative font-semibold"
              >
                {t('mission.text')}
              </motion.p>

              {/* Quote Mark */}
              <motion.div
                initial={{ opacity: 0, scale: 0 }}
                animate={inView ? { opacity: 0.1, scale: 1 } : {}}
                transition={{ 
                  duration: 0.8, 
                  delay: 0.7,
                  ease: "easeOut"
                }}
                className="absolute -bottom-10 right-0 text-8xl text-accent font-serif rotate-180"
              >
                "
              </motion.div>
            </motion.div>

            {/* Decorative Elements */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={inView ? { opacity: 1 } : {}}
              transition={{ duration: 1, delay: 0.8 }}
              className="flex justify-center mt-12 space-x-8"
            >
              <motion.div
                whileHover={{ rotate: 360 }}
                transition={{ duration: 0.6 }}
                className="w-16 h-16 bg-gradient-to-r from-primary to-blue-600 rounded-full flex items-center justify-center text-white text-2xl font-bold shadow-lg"
              >
                π
              </motion.div>
              <motion.div
                whileHover={{ rotate: 360 }}
                transition={{ duration: 0.6 }}
                className="w-16 h-16 bg-gradient-to-r from-accent to-orange-600 rounded-full flex items-center justify-center text-white text-2xl font-bold shadow-lg"
              >
                ∑
              </motion.div>
              <motion.div
                whileHover={{ rotate: 360 }}
                transition={{ duration: 0.6 }}
                className="w-16 h-16 bg-gradient-to-r from-primary to-accent rounded-full flex items-center justify-center text-white text-2xl font-bold shadow-lg"
              >
                ∫
              </motion.div>
            </motion.div>
          </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Mission;
