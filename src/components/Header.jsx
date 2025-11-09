import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { useLanguage } from '../contexts/LanguageContext';

const Header = () => {
  const { currentLanguage, changeLanguage, t } = useLanguage();
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('hero');

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
      
      // Determine active section based on scroll position
      const sections = ['hero', 'courses', 'mission', 'achievements', 'materials', 'testimonials', 'contact'];
      const scrollPosition = window.scrollY + 100; // Add offset for header height
      
      for (const section of sections) {
        const element = document.getElementById(section);
        if (element) {
          const { offsetTop, offsetHeight } = element;
          if (scrollPosition >= offsetTop && scrollPosition < offsetTop + offsetHeight) {
            setActiveSection(section);
            break;
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    handleScroll(); // Check initial position
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (sectionId) => {
    const section = document.getElementById(sectionId);
    section?.scrollIntoView({ behavior: 'smooth' });
    setMobileMenuOpen(false);
  };

  return (
    <motion.header
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.5 }}
      className={`fixed w-full z-50 transition-all duration-300 bg-primary ${
        scrolled ? 'shadow-lg' : ''
      }`}
    >
      <div className="section-padding">
        <div className="flex items-center justify-between h-16 lg:h-20">
          {/* Logo */}
          <div className="flex-shrink-0">
            <a href="#hero" onClick={(e) => { e.preventDefault(); scrollToSection('hero'); }} className="flex">
              <img 
                src="/assets/logo_white.svg"
                alt="BMOS" 
                className="h-10 sm:h-12 lg:h-14 w-auto transition-all duration-300" 
              />
            </a>
          </div>

          {/* Mobile Menu Toggle */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            type="button"
            className="inline-flex p-2 text-white transition-all duration-200 rounded-md lg:hidden focus:bg-white/20 hover:bg-white/20"
          >
            {/* Menu closed icon */}
            <svg 
              className={`${mobileMenuOpen ? 'hidden' : 'block'} w-6 h-6`}
              xmlns="http://www.w3.org/2000/svg" 
              fill="none" 
              viewBox="0 0 24 24" 
              stroke="currentColor"
            >
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 8h16M4 16h16"></path>
            </svg>

            {/* Menu open icon */}
            <svg 
              className={`${mobileMenuOpen ? 'block' : 'hidden'} w-6 h-6`}
              xmlns="http://www.w3.org/2000/svg" 
              fill="none" 
              viewBox="0 0 24 24" 
              stroke="currentColor"
            >
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12"></path>
            </svg>
          </button>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex lg:items-center lg:justify-center lg:space-x-2">
            <button
              onClick={() => scrollToSection('hero')}
              className="px-4 py-2 rounded-lg text-base text-white transition-all duration-200 font-medium hover:text-orange-300"
            >
              {t('nav.home')}
            </button>
            <button
              onClick={() => scrollToSection('courses')}
              className="px-4 py-2 rounded-lg text-base text-white transition-all duration-200 font-medium hover:text-orange-300"
            >
              {t('nav.courses')}
            </button>
            <button
              onClick={() => scrollToSection('mission')}
              className="px-4 py-2 rounded-lg text-base text-white transition-all duration-200 font-medium hover:text-orange-300"
            >
              {t('nav.about')}
            </button>
            <button
              onClick={() => scrollToSection('materials')}
              className="px-4 py-2 rounded-lg text-base text-white transition-all duration-200 font-medium hover:text-orange-300"
            >
              {t('nav.materials')}
            </button>
            <button
              onClick={() => scrollToSection('contact')}
              className="px-4 py-2 rounded-lg text-base text-white transition-all duration-200 font-medium hover:text-orange-300"
            >
              {t('nav.contact')}
            </button>
          </nav>

          {/* Language Switcher */}
          <div className="hidden lg:flex items-center space-x-2">
            <button
              onClick={() => changeLanguage('az')}
              className={`px-3 py-1.5 rounded-full transition-all text-sm font-medium ${
                currentLanguage === 'az'
                  ? 'bg-accent text-white'
                  : 'text-white hover:bg-white/20'
              }`}
            >
              AZ
            </button>
            <button
              onClick={() => changeLanguage('en')}
              className={`px-3 py-1.5 rounded-full transition-all text-sm font-medium ${
                currentLanguage === 'en'
                  ? 'bg-accent text-white'
                  : 'text-white hover:bg-white/20'
              }`}
            >
              EN
            </button>
            <button
              onClick={() => changeLanguage('ru')}
              className={`px-3 py-1.5 rounded-full transition-all text-sm font-medium ${
                currentLanguage === 'ru'
                  ? 'bg-accent text-white'
                  : 'text-white hover:bg-white/20'
              }`}
            >
              RU
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        {mobileMenuOpen && (
          <motion.nav
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            className="lg:hidden py-4 bg-white rounded-lg shadow-lg mt-2 mb-4"
          >
            <button
              onClick={() => scrollToSection('hero')}
              className="block w-full text-left px-4 py-2 transition-all duration-200 text-gray-700 hover:text-orange-500"
            >
              {t('nav.home')}
            </button>
            <button
              onClick={() => scrollToSection('courses')}
              className="block w-full text-left px-4 py-2 transition-all duration-200 text-gray-700 hover:text-orange-500"
            >
              {t('nav.courses')}
            </button>
            <button
              onClick={() => scrollToSection('mission')}
              className="block w-full text-left px-4 py-2 transition-all duration-200 text-gray-700 hover:text-orange-500"
            >
              {t('nav.about')}
            </button>
            <button
              onClick={() => scrollToSection('materials')}
              className="block w-full text-left px-4 py-2 transition-all duration-200 text-gray-700 hover:text-orange-500"
            >
              {t('nav.materials')}
            </button>
            <button
              onClick={() => scrollToSection('contact')}
              className="block w-full text-left px-4 py-2 transition-all duration-200 text-gray-700 hover:text-orange-500"
            >
              {t('nav.contact')}
            </button>
            
            {/* Mobile Language Switcher */}
            <div className="flex items-center justify-center space-x-2 mt-4 px-4">
              <button
                onClick={() => changeLanguage('az')}
                className={`px-3 py-1.5 rounded-full transition-all text-sm font-medium ${
                  currentLanguage === 'az'
                    ? 'bg-accent text-white'
                    : 'text-gray-700 hover:bg-gray-200'
                }`}
              >
                AZ
              </button>
              <button
                onClick={() => changeLanguage('en')}
                className={`px-3 py-1.5 rounded-full transition-all text-sm font-medium ${
                  currentLanguage === 'en'
                    ? 'bg-accent text-white'
                    : 'text-gray-700 hover:bg-gray-200'
                }`}
              >
                EN
              </button>
              <button
                onClick={() => changeLanguage('ru')}
                className={`px-3 py-1.5 rounded-full transition-all text-sm font-medium ${
                  currentLanguage === 'ru'
                    ? 'bg-accent text-white'
                    : 'text-gray-700 hover:bg-gray-200'
                }`}
              >
                RU
              </button>
            </div>
          </motion.nav>
        )}
      </div>
    </motion.header>
  );
};

export default Header;