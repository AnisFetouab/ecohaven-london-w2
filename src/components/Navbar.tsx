
import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X, Leaf, Globe } from 'lucide-react';
import { useLanguage } from '../contexts/LanguageContext';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();
  const { language, setLanguage } = useLanguage();

  const toggleMenu = () => setIsOpen(!isOpen);
  const closeMenu = () => setIsOpen(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 20) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Close menu when route changes
  useEffect(() => {
    closeMenu();
  }, [location.pathname]);

  const navigationLinks = [
    { name: language === 'en' ? 'Home' : 'Tahanan', path: '/' },
    { name: language === 'en' ? 'Project' : 'Proyekto', path: '/project' },
    { name: language === 'en' ? 'Blog' : 'Blog', path: '/blog' },
    { name: language === 'en' ? 'Video' : 'Bidyo', path: '/video' },
    { name: language === 'en' ? 'AIDA' : 'AIDA', path: '/tagalog' },
    { name: language === 'en' ? 'Contact' : 'Makipag-ugnayan', path: '/contact' },
  ];

  const isActive = (path: string) => location.pathname === path;

  const toggleLanguage = () => {
    setLanguage(language === 'en' ? 'tl' : 'en');
  };

  return (
    <header 
      className={`fixed w-full top-0 z-50 transition-all duration-300 ${
        scrolled ? 'bg-white/80 backdrop-blur-md shadow-sm' : 'bg-transparent'
      }`}
    >
      <div className="page-container">
        <div className="flex items-center justify-between h-16 md:h-20">
          {/* Logo */}
          <Link 
            to="/" 
            className="flex items-center space-x-2 text-primary font-medium"
            aria-label="EcoHaven London"
          >
            <Leaf className="h-6 w-6" />
            <span className="text-lg md:text-xl font-bold">EcoHaven</span>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-8">
            {navigationLinks.map((link) => (
              <Link
                key={link.path}
                to={link.path}
                className={`text-sm font-medium transition-colors hover:text-primary relative ${
                  isActive(link.path) 
                    ? 'text-primary' 
                    : 'text-foreground/80'
                }`}
                aria-current={isActive(link.path) ? 'page' : undefined}
              >
                {link.name}
                {isActive(link.path) && (
                  <span className="absolute -bottom-1 left-0 w-full h-0.5 bg-primary rounded-full" />
                )}
              </Link>
            ))}
            
            {/* Language Switcher */}
            <button 
              onClick={toggleLanguage}
              className="flex items-center text-sm font-medium text-foreground/80 hover:text-primary"
              aria-label="Toggle language"
            >
              <Globe className="h-4 w-4 mr-1" />
              {language === 'en' ? '🇵🇭 Tagalog' : '🇬🇧 English'}
            </button>
          </nav>

          {/* Mobile Menu Button */}
          <div className="md:hidden flex items-center space-x-4">
            <button
              onClick={toggleLanguage}
              className="flex items-center text-foreground/80 mr-2"
              aria-label="Toggle language"
            >
              <Globe className="h-5 w-5" />
            </button>
            
            <button
              onClick={toggleMenu}
              className="flex items-center text-foreground"
              aria-expanded={isOpen}
              aria-label="Toggle menu"
            >
              {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Navigation */}
      <div
        className={`md:hidden fixed inset-x-0 top-16 bg-white/95 backdrop-blur-md transition-all duration-300 ease-in-out overflow-hidden ${
          isOpen ? 'max-h-screen opacity-100 shadow-md' : 'max-h-0 opacity-0'
        }`}
      >
        <nav className="flex flex-col p-4 space-y-4">
          {navigationLinks.map((link) => (
            <Link
              key={link.path}
              to={link.path}
              className={`py-2 px-4 rounded-md text-sm font-medium transition-colors ${
                isActive(link.path)
                  ? 'bg-accent text-primary'
                  : 'hover:bg-secondary text-foreground/80'
              }`}
              aria-current={isActive(link.path) ? 'page' : undefined}
            >
              {link.name}
            </Link>
          ))}
          <button 
            onClick={toggleLanguage}
            className="py-2 px-4 rounded-md text-sm font-medium transition-colors hover:bg-secondary text-foreground/80 text-left"
          >
            {language === 'en' ? '🇵🇭 Tagalog' : '🇬🇧 English'}
          </button>
        </nav>
      </div>
    </header>
  );
};

export default Navbar;
