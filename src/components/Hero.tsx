
import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';
import { useLanguage } from '../contexts/LanguageContext';

interface HeroProps {
  title: {
    en: string;
    tl: string;
  };
  subtitle: {
    en: string;
    tl: string;
  };
  ctaText: {
    en: string;
    tl: string;
  };
  ctaLink: string;
  backgroundImage: string;
}

const Hero = ({ title, subtitle, ctaText, ctaLink, backgroundImage }: HeroProps) => {
  const { language } = useLanguage();
  
  return (
    <section 
      className="relative h-screen min-h-[600px] flex items-center justify-center overflow-hidden bg-cover bg-center"
      style={{ backgroundImage: `url('https://www.dropbox.com/s/txs90seufubbr5q/img1%20(1).png?raw=1')` }}
    >
      {/* Overlay */}
      <div className="absolute inset-0 bg-black/20 backdrop-blur-[2px]"></div>
      
      {/* Content */}
      <div className="relative z-10 page-container text-center text-white">
        <div className="max-w-3xl mx-auto px-4 animate-fade-in">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 leading-tight text-balance">
            {title[language]}
          </h1>
          <p className="text-lg md:text-xl mb-8 max-w-2xl mx-auto opacity-90 text-balance">
            {subtitle[language]}
          </p>
          <Link 
            to={ctaLink} 
            className="btn btn-primary btn-lg group"
          >
            {ctaText[language]}
            <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
          </Link>
        </div>
      </div>
      
      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-pulse">
        <div className="w-6 h-10 rounded-full border-2 border-white flex items-start justify-center">
          <div className="w-1.5 h-3 bg-white rounded-full mt-1.5 animate-pulse"></div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
