import React from 'react';
import { motion } from 'framer-motion';
import { useLanguage } from '../contexts/LanguageContext';
import { GridPattern } from './ui/grid-pattern';
import { cn } from '../lib/utils';

const Hero = () => {
  const { t } = useLanguage();

  const scrollToSection = (sectionId) => {
    const section = document.getElementById(sectionId);
    section?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section id="hero" className="relative bg-[#FCF8F1] bg-opacity-30 min-h-screen flex items-center overflow-hidden">
      {/* Grid Pattern Background */}
      <GridPattern
        width={60}
        height={60}
        x={-1}
        y={-1}
        strokeDasharray="0"
        squares={[
          [2, 3],
          [4, 2],
          [6, 5],
          [8, 3],
          [10, 6],
          [3, 8],
          [7, 7],
          [11, 4],
          [5, 9],
          [9, 8],
          [12, 6],
          [14, 9],
          [4, 11],
          [8, 10],
          [13, 12],
        ]}
        className={cn(
          "fill-primary/5 stroke-primary/10",
          "[mask-image:radial-gradient(ellipse_at_center,white,transparent_70%)]",
        )}
      />

      <div className="section-padding relative z-10 py-24 sm:py-28 lg:py-32">
        <div className="grid items-center grid-cols-1 gap-8 lg:gap-12 lg:grid-cols-2">
          {/* Text Content */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="order-1 lg:order-1"
          >
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2, duration: 0.8 }}
              className="text-3xl font-bold text-black sm:text-4xl lg:text-5xl xl:text-6xl leading-tight"
            >
              {t('hero.title')}
            </motion.h1>
            
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3, duration: 0.8 }}
              className="mt-4 text-base text-black lg:mt-6 sm:text-lg lg:text-xl leading-relaxed"
            >
              {t('hero.subtitle')}
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4, duration: 0.8 }}
              className="flex flex-col sm:flex-row gap-3 sm:gap-4 mt-6 lg:mt-10"
            >
              <button
                onClick={() => scrollToSection('courses')}
                className="inline-flex items-center justify-center px-6 sm:px-8 py-3 sm:py-4 text-sm sm:text-base font-semibold text-white transition-all duration-200 bg-accent rounded-full hover:bg-opacity-90 focus:bg-opacity-90 shadow-lg hover:shadow-xl w-full sm:w-auto"
              >
                {t('hero.cta1')}
                <svg 
                  className="w-5 h-5 sm:w-6 sm:h-6 ml-2 sm:ml-3 -mr-1" 
                  xmlns="http://www.w3.org/2000/svg" 
                  fill="none" 
                  viewBox="0 0 24 24" 
                  stroke="currentColor"
                >
                  <path 
                    strokeLinecap="round" 
                    strokeLinejoin="round" 
                    strokeWidth="2" 
                    d="M13 9l3 3m0 0l-3 3m3-3H8m13 0a9 9 0 11-18 0 9 9 0 0118 0z" 
                  />
                </svg>
              </button>

              <button
                onClick={() => scrollToSection('mission')}
                className="inline-flex items-center justify-center px-6 sm:px-8 py-3 sm:py-4 text-sm sm:text-base font-semibold text-primary bg-white border-2 border-primary transition-all duration-200 rounded-full hover:bg-primary hover:text-white focus:bg-primary focus:text-white shadow-lg hover:shadow-xl w-full sm:w-auto"
              >
                {t('hero.cta2')}
              </button>
            </motion.div>

            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.6, duration: 0.8 }}
              className="mt-5 lg:mt-6 text-sm sm:text-base text-gray-600"
            >
              SAT • AP Calculus • AP Statistics • AP Computer Science
            </motion.p>
          </motion.div>

          {/* Image */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="order-2 lg:order-2 relative"
          >
            <motion.div
              animate={{ y: [-10, 10, -10] }}
              transition={{
                duration: 6,
                repeat: Infinity,
                ease: "easeInOut"
              }}
              className="relative max-w-lg mx-auto lg:mx-0"
            >
              <img
                src="/assets/student.png"
                alt="BMOS Student"
                className="w-full h-auto relative z-10"
              />
              
              {/* Decorative Elements */}
              <motion.div
                animate={{ 
                  x: [0, 20, 0],
                  y: [0, -20, 0],
                  rotate: [0, 360]
                }}
                transition={{
                  duration: 8,
                  repeat: Infinity,
                  ease: "linear"
                }}
                className="absolute -top-6 sm:-top-10 -left-6 sm:-left-10 bg-accent text-white w-12 h-12 sm:w-16 sm:h-16 flex items-center justify-center rounded-full shadow-lg text-xl sm:text-2xl font-bold z-20"
              >
                π
              </motion.div>
              
              <motion.div
                animate={{ 
                  x: [0, -15, 0],
                  y: [0, 15, 0],
                  rotate: [0, -360]
                }}
                transition={{
                  duration: 10,
                  repeat: Infinity,
                  ease: "linear"
                }}
                className="absolute -bottom-4 sm:-bottom-5 -right-4 sm:-right-5 bg-primary text-white w-12 h-12 sm:w-16 sm:h-16 flex items-center justify-center rounded-full shadow-lg text-xl sm:text-2xl font-bold z-20"
              >
                ∑
              </motion.div>
              
              <motion.div
                animate={{ 
                  scale: [1, 1.2, 1],
                }}
                transition={{
                  duration: 5,
                  repeat: Infinity,
                  ease: "easeInOut"
                }}
                className="absolute top-1/2 -right-6 sm:-right-8 bg-accent/80 text-white w-10 h-10 sm:w-12 sm:h-12 flex items-center justify-center rounded-full shadow-lg text-lg sm:text-xl font-bold z-20"
              >
                √
              </motion.div>

              <motion.div
                animate={{ 
                  x: [0, -10, 0],
                  y: [0, 10, 0],
                }}
                transition={{
                  duration: 7,
                  repeat: Infinity,
                  ease: "easeInOut"
                }}
                className="absolute top-1/4 -left-6 sm:-left-8 bg-primary/80 text-white w-10 h-10 sm:w-12 sm:h-12 flex items-center justify-center rounded-full shadow-lg text-lg sm:text-xl font-bold z-20"
              >
                ∫
              </motion.div>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
