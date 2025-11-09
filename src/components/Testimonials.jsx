import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination, Autoplay } from 'swiper/modules';
import { useLanguage } from '../contexts/LanguageContext';
import { FaQuoteLeft, FaQuoteRight } from 'react-icons/fa';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';

const Testimonials = () => {
  const { t } = useLanguage();
  const [ref, inView] = useInView({
    threshold: 0.1,
    triggerOnce: true,
  });

  const testimonials = [
    {
      name: t('testimonials.testimonial1.name'),
      text: t('testimonials.testimonial1.text'),
      role: 'Student',
      rating: 5,
    },
    {
      name: t('testimonials.testimonial2.name'),
      text: t('testimonials.testimonial2.text'),
      role: 'Student',
      rating: 5,
    },
    {
      name: t('testimonials.testimonial3.name'),
      text: t('testimonials.testimonial3.text'),
      role: 'Parent',
      rating: 5,
    },
    {
      name: t('testimonials.testimonial4.name'),
      text: t('testimonials.testimonial4.text'),
      role: 'Student',
      rating: 5,
    },
  ];

  return (
    <section id="testimonials" className="py-20 bg-white relative overflow-hidden" ref={ref}>
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute inset-0" style={{
          backgroundImage: `repeating-linear-gradient(45deg, #002B7F 0, #002B7F 1px, transparent 1px, transparent 15px, #002B7F 15px, #002B7F 16px, transparent 16px, transparent 30px)`
        }} />
      </div>

      <div className="section-padding relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-4 text-primary">
            {t('testimonials.title')}
          </h2>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="max-w-4xl mx-auto"
        >
          <Swiper
            modules={[Navigation, Pagination, Autoplay]}
            spaceBetween={30}
            slidesPerView={1}
            navigation
            pagination={{ clickable: true }}
            autoplay={{
              delay: 5000,
              disableOnInteraction: false,
            }}
            className="testimonials-swiper"
          >
            {testimonials.map((testimonial, index) => (
              <SwiperSlide key={index}>
                <motion.div
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ duration: 0.5 }}
                  className="px-4 sm:px-8 py-8 sm:py-12"
                >
                  <div className="relative">
                    {/* Quote Icons */}
                    <FaQuoteLeft className="absolute -top-2 sm:-top-4 -left-2 sm:-left-4 text-2xl sm:text-3xl text-primary/20" />
                    <FaQuoteRight className="absolute -bottom-2 sm:-bottom-4 -right-2 sm:-right-4 text-2xl sm:text-3xl text-accent/20" />
                    
                    {/* Testimonial Content */}
                    <div className="bg-gradient-to-br from-blue-50 to-orange-50 rounded-2xl p-6 sm:p-8 shadow-lg">
                      {/* Stars */}
                      <div className="flex justify-center mb-4">
                        {[...Array(testimonial.rating)].map((_, i) => (
                          <motion.span
                            key={i}
                            initial={{ opacity: 0, scale: 0 }}
                            animate={{ opacity: 1, scale: 1 }}
                            transition={{ delay: i * 0.1 }}
                            className="text-yellow-400 text-2xl"
                          >
                            ★
                          </motion.span>
                        ))}
                      </div>
                      
                      {/* Text */}
                      <p className="text-base sm:text-lg text-gray-700 text-center mb-6 italic leading-relaxed">
                        "{testimonial.text}"
                      </p>
                      
                      {/* Author */}
                      <div className="text-center">
                        <h4 className="font-bold text-gray-800">{testimonial.name}</h4>
                        <p className="text-sm text-gray-600">{testimonial.role}</p>
                      </div>
                    </div>
                  </div>
                </motion.div>
              </SwiperSlide>
            ))}
          </Swiper>
        </motion.div>
      </div>

      <style jsx global>{`
        .testimonials-swiper .swiper-button-next,
        .testimonials-swiper .swiper-button-prev {
          color: #002B7F;
          background: white;
          width: 40px;
          height: 40px;
          border-radius: 50%;
          box-shadow: 0 2px 8px rgba(0, 0, 0, 0.1);
        }
        
        .testimonials-swiper .swiper-button-next:after,
        .testimonials-swiper .swiper-button-prev:after {
          font-size: 20px;
        }
        
        .testimonials-swiper .swiper-pagination-bullet {
          background: #002B7F;
          opacity: 0.3;
        }
        
        .testimonials-swiper .swiper-pagination-bullet-active {
          background: #FF7A00;
          opacity: 1;
        }
      `}</style>
    </section>
  );
};

export default Testimonials;
