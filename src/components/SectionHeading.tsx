
import React from 'react';

interface SectionHeadingProps {
  subtitle?: string;
  title: string;
  description?: string;
  centered?: boolean;
}

const SectionHeading = ({ 
  subtitle, 
  title, 
  description, 
  centered = false 
}: SectionHeadingProps) => {
  return (
    <div className={`mb-12 md:mb-16 animate-on-scroll animate-fade-up ${centered ? 'text-center' : ''}`}>
      {subtitle && (
        <div className="inline-block bg-accent px-3 py-1 rounded-full text-xs font-medium text-primary mb-3">
          {subtitle}
        </div>
      )}
      <h2 className="text-3xl md:text-4xl font-bold mb-4">{title}</h2>
      {description && (
        <p className={`text-muted-foreground text-lg ${centered ? 'max-w-3xl mx-auto' : ''}`}>
          {description}
        </p>
      )}
    </div>
  );
};

export default SectionHeading;
