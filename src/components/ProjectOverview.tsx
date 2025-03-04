
import React from 'react';

interface ProjectOverviewProps {
  title: string;
  content: string;
  image: string;
  reverse?: boolean;
}

const ProjectOverview = ({ title, content, image, reverse = false }: ProjectOverviewProps) => {
  return (
    <div className={`grid md:grid-cols-2 gap-8 md:gap-12 lg:gap-16 items-center ${reverse ? 'md:flex-row-reverse' : ''}`}>
      <div className={`${reverse ? 'md:order-2' : ''} animate-on-scroll animate-fade-up`}>
        <h2 className="text-2xl md:text-3xl font-bold mb-4">{title}</h2>
        <div className="prose prose-green max-w-none">
          <p className="text-muted-foreground whitespace-pre-line">{content}</p>
        </div>
      </div>
      
      <div className={`${reverse ? 'md:order-1' : ''} animate-on-scroll ${reverse ? 'animate-slide-in-left' : 'animate-slide-in-right'}`}>
        <div className="relative rounded-2xl overflow-hidden shadow-lg aspect-[4/3]">
          <img 
            src={image} 
            alt={title} 
            className="object-cover w-full h-full transition-transform duration-700 hover:scale-105"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent opacity-60"></div>
        </div>
      </div>
    </div>
  );
};

export default ProjectOverview;
