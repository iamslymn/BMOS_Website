import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { useLanguage } from '../contexts/LanguageContext';
import { FaMapMarkerAlt, FaPhone, FaEnvelope, FaInstagram, FaFacebook, FaTelegram, FaWhatsapp } from 'react-icons/fa';

const Contact = () => {
  const { t } = useLanguage();
  const [ref, inView] = useInView({
    threshold: 0.1,
    triggerOnce: true,
  });

  const contactInfo = [
    {
      icon: <FaMapMarkerAlt className="text-2xl" />,
      label: t('contact.address'),
      value: t('contact.addressText'),
      link: 'https://maps.google.com/?q=Ülvi+Bünyadzadə+7,+Baku,+Azerbaijan',
    },
    {
      icon: <FaPhone className="text-2xl" />,
      label: t('contact.phone'),
      value: t('contact.phoneText'),
      link: 'tel:+994778123456',
    },
    {
      icon: <FaEnvelope className="text-2xl" />,
      label: t('contact.email'),
      value: t('contact.emailText'),
      link: 'mailto:info@bmos.az',
    },
  ];

  const socialLinks = [
    {
      icon: <FaInstagram className="text-2xl" />,
      link: 'https://www.instagram.com/bakumathschool/',
      color: 'hover:bg-pink-500',
    },
    {
      icon: <FaFacebook className="text-2xl" />,
      link: 'http://facebook.com/bakumathorientedschool',
      color: 'hover:bg-blue-600',
    },
    {
      icon: <FaTelegram className="text-2xl" />,
      link: 'https://t.me/bakumathschool',
      color: 'hover:bg-blue-500',
    },
    {
      icon: <FaWhatsapp className="text-2xl" />,
      link: 'https://wa.me/994778123456',
      color: 'hover:bg-green-500',
    },
  ];

  return (
    <footer id="contact" className="gradient-bg relative overflow-hidden" ref={ref}>
      {/* Animated Background Shapes */}
      <div className="absolute inset-0 overflow-hidden">
        <motion.div
          animate={{
            x: [0, 100, 0],
            y: [0, -100, 0],
          }}
          transition={{
            duration: 20,
            repeat: Infinity,
            ease: "linear"
          }}
          className="absolute -top-20 -left-20 w-64 h-64 bg-white/5 rounded-full blur-3xl"
        />
        <motion.div
          animate={{
            x: [0, -100, 0],
            y: [0, 100, 0],
          }}
          transition={{
            duration: 25,
            repeat: Infinity,
            ease: "linear"
          }}
          className="absolute -bottom-20 -right-20 w-96 h-96 bg-accent/10 rounded-full blur-3xl"
        />
      </div>

      <div className="relative z-10 py-20">
        <div className="section-padding">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6 }}
            className="text-center mb-12"
          >
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
              {t('contact.title')}
            </h2>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8 mb-12">
            {contactInfo.map((item, index) => (
              <motion.a
                key={index}
                href={item.link}
                target="_blank"
                rel="noopener noreferrer"
                initial={{ opacity: 0, y: 30 }}
                animate={inView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                whileHover={{ scale: 1.05 }}
                className="group"
              >
                <div className="bg-white/10 backdrop-blur-lg rounded-xl p-6 text-white hover:bg-white/20 transition-all duration-300">
                  <div className="flex items-start space-x-4">
                    <motion.div
                      whileHover={{ rotate: 360 }}
                      transition={{ duration: 0.5 }}
                      className="bg-white/20 p-3 rounded-full group-hover:bg-accent transition-colors"
                    >
                      {item.icon}
                    </motion.div>
                    <div>
                      <p className="text-white/80 text-sm mb-1">{item.label}</p>
                      <p className="font-semibold text-lg">{item.value}</p>
                    </div>
                  </div>
                </div>
              </motion.a>
            ))}
          </div>

          {/* Social Links */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="text-center mb-12"
          >
            <p className="text-white/80 mb-4">{t('contact.followUs')}</p>
            <div className="flex justify-center space-x-4">
              {socialLinks.map((social, index) => (
                <motion.a
                  key={index}
                  href={social.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  whileHover={{ scale: 1.1, y: -5 }}
                  whileTap={{ scale: 0.95 }}
                  className={`bg-white/10 backdrop-blur-lg p-3 rounded-full text-white transition-all duration-300 ${social.color}`}
                >
                  {social.icon}
                </motion.a>
              ))}
            </div>
          </motion.div>

          {/* Logo and Copyright */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={inView ? { opacity: 1 } : {}}
            transition={{ duration: 0.6, delay: 0.6 }}
            className="text-center pt-8 border-t border-white/20"
          >
            <div className="flex items-center justify-center mb-4">
              <img src="/assets/logo_white.svg" alt="BMOS" className="h-16 w-auto" />
            </div>
            <p className="text-white/60 text-sm">
              {t('contact.rights')}
            </p>
          </motion.div>
        </div>
      </div>
    </footer>
  );
};

export default Contact;
