import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import CountUp from 'react-countup';
import { useLanguage } from '../contexts/LanguageContext';
import { FaTrophy, FaGraduationCap, FaUniversity } from 'react-icons/fa';

const Achievements = () => {
  const { t } = useLanguage();
  const [ref, inView] = useInView({
    threshold: 0.3,
    triggerOnce: true,
  });
  
  // Student results images - duplicate the array for infinite scroll effect
  const studentResults = [
    { id: 1, image: '/assets/Results/result1.png', alt: 'Student Result 1' },
    { id: 2, image: '/assets/Results/result2.png', alt: 'Student Result 2' },
    { id: 3, image: '/assets/Results/result3.png', alt: 'Student Result 3' },
    { id: 4, image: '/assets/Results/result4.png', alt: 'Student Result 4' },
  ];
  
  // Duplicate the array for seamless infinite scroll
  const duplicatedResults = [...studentResults, ...studentResults];

  const achievements = [
    {
      icon: <FaTrophy className="text-5xl" />,
      value: parseInt(t('achievements.counter1.value')),
      suffix: t('achievements.counter1.suffix'),
      label: t('achievements.counter1.label'),
      color: 'from-blue-500 to-blue-600',
    },
    {
      icon: <FaGraduationCap className="text-5xl" />,
      value: parseInt(t('achievements.counter2.value')),
      suffix: '',
      label: t('achievements.counter2.label'),
      color: 'from-orange-500 to-orange-600',
    },
    {
      icon: <FaUniversity className="text-5xl" />,
      value: parseInt(t('achievements.counter3.value')),
      suffix: t('achievements.counter3.suffix'),
      label: t('achievements.counter3.label'),
      color: 'from-green-500 to-green-600',
    },
  ];

  return (
    <section className="py-20 gradient-bg relative overflow-hidden">
      {/* Animated Background Particles */}
      <div className="absolute inset-0">
        {[...Array(20)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute w-2 h-2 bg-white rounded-full opacity-20"
            initial={{
              x: Math.random() * window.innerWidth,
              y: window.innerHeight + 100,
            }}
            animate={{
              y: -100,
            }}
            transition={{
              duration: Math.random() * 10 + 10,
              repeat: Infinity,
              delay: Math.random() * 5,
              ease: "linear",
            }}
          />
        ))}
      </div>

      <div className="section-padding relative z-10" ref={ref}>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
            {t('achievements.title')}
          </h2>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 sm:gap-8">
          {achievements.map((achievement, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: index * 0.2 }}
              whileHover={{ scale: 1.05 }}
              className="relative group"
            >
              <div className="bg-white rounded-2xl p-6 sm:p-8 shadow-xl text-center relative overflow-hidden">
                {/* Gradient Background on Hover */}
                <motion.div
                  className={`absolute inset-0 bg-gradient-to-r ${achievement.color} opacity-0 group-hover:opacity-5 transition-opacity duration-300`}
                />

                {/* Icon */}
                <motion.div
                  animate={inView ? { rotate: [0, 360] } : {}}
                  transition={{ duration: 1, delay: 0.5 + index * 0.2 }}
                  className={`inline-block mb-4 bg-gradient-to-r ${achievement.color} text-white p-4 rounded-full`}
                >
                  {achievement.icon}
                </motion.div>

                {/* Counter */}
                <div className="text-5xl font-bold mb-2 gradient-text">
                  {inView && (
                    <>
                      {achievement.prefix}
                      <CountUp
                        start={0}
                        end={achievement.value}
                        duration={2.5}
                        separator=","
                        delay={0.5}
                      />
                      {achievement.suffix}
                    </>
                  )}
                </div>

                {/* Label */}
                <p className="text-gray-600 font-medium">
                  {achievement.label}
                </p>

                {/* Decorative Element */}
                <motion.div
                  className="absolute -bottom-2 -right-2 w-20 h-20 bg-gradient-to-r from-blue-200 to-orange-200 rounded-full opacity-20"
                  animate={{
                    scale: [1, 1.2, 1],
                  }}
                  transition={{
                    duration: 3,
                    repeat: Infinity,
                    ease: "easeInOut",
                  }}
                />
              </div>

              {/* Shadow Effect */}
              <motion.div
                className="absolute inset-0 bg-gradient-to-r from-primary to-accent rounded-2xl -z-10"
                initial={{ scale: 0.95, opacity: 0 }}
                whileHover={{ scale: 1, opacity: 0.3 }}
                transition={{ duration: 0.3 }}
              />
            </motion.div>
          ))}
        </div>
        
        {/* Student Results Infinite Carousel */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="mt-16"
        >
          {/* Infinite Scrolling Carousel Container */}
          <div className="relative overflow-hidden">
            {/* Gradient Masks for smooth edges */}
            <div className="absolute left-0 top-0 bottom-0 w-20 bg-gradient-to-r from-[#1a237e] to-transparent z-10 pointer-events-none" />
            <div className="absolute right-0 top-0 bottom-0 w-20 bg-gradient-to-l from-[#1a237e] to-transparent z-10 pointer-events-none" />
            
            {/* Scrolling Container */}
            <motion.div
              className="flex gap-6"
              animate={{
                x: ['0%', '-50%'],
              }}
              transition={{
                x: {
                  duration: 30,
                  repeat: Infinity,
                  ease: "linear",
                  repeatType: "loop",
                },
              }}
            >
              {/* First set of images */}
              {[...duplicatedResults, ...duplicatedResults].map((result, index) => (
                <div
                  key={`${result.id}-${index}`}
                  className="flex-shrink-0 w-96 group" // w-96 = 384px
                >
                  <div className="relative overflow-hidden rounded-xl transition-all duration-300 transform group-hover:scale-105 group-hover:shadow-2xl">
                    <img
                      src={result.image}
                      alt={result.alt}
                      className="w-[384px] h-[392px] object-cover"
                      style={{ objectPosition: 'center' }}
                    />
                    {/* Optional: Add a subtle overlay on hover */}
                    <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                  </div>
                </div>
              ))}
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Achievements;
